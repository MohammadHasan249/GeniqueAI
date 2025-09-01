import { ensureDbUser } from '@/lib/ensure-db-user';   // helper we wrote
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { GeneratedSpec, GeneratedSpecSchema } from "@/schemas/generated-spec";
import { buildPrompt } from "@/lib/prompt-util";
import { WizardAnswers } from '@/app/dashboard/create-website/schema';
import { selectTypographyPreset } from '@/lib/typography';


export async function POST(req: NextRequest) {
  // 1. Protect the route (redirects if not signed-in)
  await auth.protect();

  // 2. Get Clerk user & be sure DB row exists
  const user = await ensureDbUser();

  // 3. Parse wizard answers from JSON body
  const answers = await req.json();        // { product, audience, … }

  try {
    // Check for duplicate business names for this user
    if (answers.businessName) {
      const existingPage = await db.page.findFirst({
        where: {
          userId: user.id,
          businessName: answers.businessName,
        },
      });
      
      if (existingPage) {
        return new NextResponse("A project with this business name already exists. Please choose a different name.", { status: 400 });
      }
    }

    // Run LLM generation inline
    const spec = await generateSpec(answers);

    // 4. Store initial Page row in Postgres with generated content
    const page = await db.page.create({
      data: {
        userId: user.id,
        businessName: answers.businessName,
        status: 'live',
        answersJson: answers,
        generatedJson: spec,
      },
      select: { id: true },
    });

    // 5. Respond quickly so the UI can navigate
    return NextResponse.json({ pageId: page.id });

  } catch (e: unknown) {
    console.error("Generation error:", e);
    return new NextResponse("Generation failed", { status: 500 });
  }

}

function missingKeyFromZod(e: unknown): string[] {
  if (!e || typeof e !== 'object') return [];
  const msg = JSON.stringify(e);
  const keys: string[] = [];
  if (msg.includes('"about"')) keys.push('about');
  if (msg.includes('"testimonials"')) keys.push('testimonials');
  if (msg.includes('"features"')) keys.push('features');
  return [...new Set(keys)];
}

async function generateSpec(answers: WizardAnswers, attempt = 1): Promise<GeneratedSpec> {
  try {
    const { object } = await generateObject({
      model: openai('gpt-4o'),
      schema: GeneratedSpecSchema,
      prompt: buildPrompt(answers),
    });
    
    // Ensure design system fields are populated with fallbacks
    const enhancedObject = ensureDesignSystem(object, answers);
    return enhancedObject;
  } catch (e) {
    if (attempt >= 2) throw e;
    const missing = missingKeyFromZod(e);
    if (missing.length === 0) throw e;

    const repairPrompt = buildPrompt(answers) + `
(Missing sections last attempt: ${missing.join(', ')}. They are REQUIRED. Regenerate ALL sections; do not leave any key out.)`;

    const { object } = await generateObject({
      model: openai('gpt-4o'),
      schema: GeneratedSpecSchema,
      prompt: repairPrompt,
    });
    
    // Ensure design system fields are populated with fallbacks
    const enhancedObject = ensureDesignSystem(object, answers);
    return enhancedObject;
  }
}

function ensureDesignSystem(spec: GeneratedSpec, answers: WizardAnswers): GeneratedSpec {
  // Auto-detect industry if not provided, empty string, or use provided industry
  const detectedIndustry = (answers.industry && answers.industry.trim() !== '') 
    ? answers.industry 
    : autoDetectIndustry(answers.product, answers.businessName);
  
  // Select typography preset based on industry/business description
  const typographyPreset = selectTypographyPreset(detectedIndustry, `${answers.product} ${answers.businessName}`);
  
  // Industry-specific defaults
  const industryDefaults = getIndustryDefaults(detectedIndustry);
  
  return {
    ...spec,
    design: {
      typography: {
        preset: spec.design?.typography?.preset || typographyPreset,
        headingFont: spec.design?.typography?.headingFont || industryDefaults.typography.headingFont,
        bodyFont: spec.design?.typography?.bodyFont || industryDefaults.typography.bodyFont,
      },
      layout: {
        heroVariant: spec.design?.layout?.heroVariant || industryDefaults.layout.heroVariant,
      },
      backgrounds: {
        heroPattern: spec.design?.backgrounds?.heroPattern || industryDefaults.backgrounds.heroPattern,
        ctaPattern: spec.design?.backgrounds?.ctaPattern || industryDefaults.backgrounds.ctaPattern,
      },
      industry: detectedIndustry,
    }
  };
}

function autoDetectIndustry(product: string, businessName: string): "saas" | "ecommerce" | "restaurant" | "healthcare" | "education" | "finance" | "creative" | "consulting" | "technology" | "other" {
  const text = `${product} ${businessName}`.toLowerCase();
  
  if (text.includes('software') || text.includes('saas') || text.includes('app') || text.includes('platform') || text.includes('dashboard')) {
    return 'saas';
  }
  if (text.includes('ecommerce') || text.includes('shop') || text.includes('store') || text.includes('retail') || text.includes('marketplace')) {
    return 'ecommerce';
  }
  if (text.includes('restaurant') || text.includes('food') || text.includes('cafe') || text.includes('dining') || text.includes('kitchen')) {
    return 'restaurant';
  }
  if (text.includes('health') || text.includes('medical') || text.includes('clinic') || text.includes('doctor') || text.includes('therapy')) {
    return 'healthcare';
  }
  if (text.includes('education') || text.includes('school') || text.includes('learning') || text.includes('course') || text.includes('training')) {
    return 'education';
  }
  if (text.includes('finance') || text.includes('bank') || text.includes('investment') || text.includes('money') || text.includes('financial')) {
    return 'finance';
  }
  if (text.includes('design') || text.includes('creative') || text.includes('art') || text.includes('agency') || text.includes('studio')) {
    return 'creative';
  }
  if (text.includes('consulting') || text.includes('advisor') || text.includes('professional') || text.includes('services') || text.includes('strategy')) {
    return 'consulting';
  }
  if (text.includes('tech') || text.includes('developer') || text.includes('api') || text.includes('code') || text.includes('engineering')) {
    return 'technology';
  }
  
  return 'other';
}

function getIndustryDefaults(industry: string) {
  const defaults = {
    saas: {
      typography: { headingFont: "Inter", bodyFont: "Inter" },
      layout: { heroVariant: "split-left" as const },
      backgrounds: { heroPattern: "gradient-mesh" as const, ctaPattern: "gradient-radial" as const }
    },
    technology: {
      typography: { headingFont: "Space Grotesk", bodyFont: "DM Sans" },
      layout: { heroVariant: "split-left" as const },
      backgrounds: { heroPattern: "tech-lines" as const, ctaPattern: "tech-grid" as const }
    },
    ecommerce: {
      typography: { headingFont: "Inter", bodyFont: "Inter" },
      layout: { heroVariant: "centered" as const },
      backgrounds: { heroPattern: "gradient-mesh" as const, ctaPattern: "gradient-radial" as const }
    },
    finance: {
      typography: { headingFont: "Playfair Display", bodyFont: "Source Serif 4" },
      layout: { heroVariant: "centered" as const },
      backgrounds: { heroPattern: "geometric-grid" as const, ctaPattern: "geometric-shapes" as const }
    },
    consulting: {
      typography: { headingFont: "Playfair Display", bodyFont: "Source Serif 4" },
      layout: { heroVariant: "minimal-banner" as const },
      backgrounds: { heroPattern: "geometric-grid" as const, ctaPattern: "geometric-shapes" as const }
    },
    healthcare: {
      typography: { headingFont: "Poppins", bodyFont: "Inter" },
      layout: { heroVariant: "centered" as const },
      backgrounds: { heroPattern: "minimal-clean" as const, ctaPattern: "minimal-solid" as const }
    },
    education: {
      typography: { headingFont: "Poppins", bodyFont: "Inter" },
      layout: { heroVariant: "split-right" as const },
      backgrounds: { heroPattern: "minimal-clean" as const, ctaPattern: "minimal-solid" as const }
    },
    restaurant: {
      typography: { headingFont: "Playfair Display", bodyFont: "DM Sans" },
      layout: { heroVariant: "split-right" as const },
      backgrounds: { heroPattern: "organic-blobs" as const, ctaPattern: "flowing-waves" as const }
    },
    creative: {
      typography: { headingFont: "Playfair Display", bodyFont: "DM Sans" },
      layout: { heroVariant: "split-right" as const },
      backgrounds: { heroPattern: "organic-blobs" as const, ctaPattern: "flowing-waves" as const }
    },
    other: {
      typography: { headingFont: "Inter", bodyFont: "Inter" },
      layout: { heroVariant: "centered" as const },
      backgrounds: { heroPattern: "gradient-mesh" as const, ctaPattern: "gradient-radial" as const }
    }
  };
  
  return defaults[industry as keyof typeof defaults] || defaults.other;
}
