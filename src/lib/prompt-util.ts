import type { WizardAnswers } from '@/app/dashboard/create-website/schema';

export function buildPrompt(a: WizardAnswers) {
  return `You are an expert conversion copywriter creating content for a modern business landing page. Keep copy concise, optimized for scannability, and conversion-focused.

BUSINESS CONTEXT:
Business: ${a.businessName}
Product/Service: ${a.product}
Target Audience: ${a.audience}
Primary Goal: ${a.goal}
Brand Tone: ${a.tone}
${a.referenceUrl ? `Reference URL (inspiration only): ${a.referenceUrl}` : ''}

OUTPUT FORMAT: Return ONLY valid JSON with NO markdown fences or commentary.

REQUIRED SECTIONS (concise and impactful):

1. HERO SECTION
   - headline (16-60 chars): Clear, benefit-driven headline
   - subheadline (24-120 chars): One sentence that expands the value
   - description (40-160 chars): Brief explanation of what you offer and why it matters
   - cta (≤40 chars): Primary action button text for ${a.goal}
   - secondaryCta (≤40 chars, optional): Secondary action like "Learn More"

2. BENEFITS (3-4 items)
   - Focus on OUTCOMES and TRANSFORMATIONS customers experience
   - Emotional and business impact, results they'll achieve
   - Each: title (≤80 chars), description (30-250 chars focusing on end results)

3. FEATURES (4-6 items)  
   - Focus on CAPABILITIES and HOW you deliver those benefits
   - Specific tools, methods, processes, or service components
   - Each: title (≤80 chars), description (30-300 chars with concrete implementation details), icon (optional emoji/descriptor, prefer lucide icon names)

4. ABOUT SECTION
   - title (≤80 chars): Compelling section heading
   - description (160-500 chars): Substantial story about the business, expertise, track record
   - mission (50-300 chars, optional): What drives the business
   - vision (50-300 chars, optional): Where the business is heading

5. TESTIMONIALS (2-4 items)
   - Detailed customer success stories with specific outcomes
   - Each: quote (50-400 chars with specific results/benefits), author (realistic name), role (job title), company (optional, no real brands)

6. STATS (exactly 4 items)
   - Impressive numbers that build credibility
   - Each: value (number + unit), label (what it represents)

7. FAQ (4-8 items)
   - Address common concerns and objections for ${a.audience}
   - Each: question (10-150 chars), answer (30-400 chars with helpful details)

8. CTA SECTION
   - headline (≤100 chars): Compelling final pitch
   - description (30-200 chars): Create urgency or reinforce value
   - primaryButton (≤40 chars): Main action for ${a.goal}
   - secondaryButton (≤40 chars, optional): Alternative action

9. LOGO (if no logo provided)
   ${!a.logoUrl ? `- Select ONE appropriate Lucide icon name that represents ${a.product} business
   - Choose from: building, building-2, store, shop, laptop, smartphone, monitor, cpu, database, server, heart, stethoscope, graduation-cap, book, camera, image, utensils, coffee, users, briefcase, calculator, sparkles, target, trophy, car, truck, chart-bar, shopping-cart, dollar-sign, palette, brush, leaf, tree, dumbbell, gamepad-2, wrench, shield, zap, phone, mail, megaphone, scissors, gem
   - Consider industry relevance and professional appearance
   - Icon will be used with business name "${a.businessName}" in brand color` : '- Logo will be uploaded by user'}

10. PALETTE (optional)
   - primary: ${a.primaryColor ? `Use ${a.primaryColor} or similar` : 'Choose appropriate color'}

11. DESIGN SYSTEM
   - typography: Choose ONE preset based on industry and tone:
     * "modern-sans": Clean, contemporary (good for SaaS, tech, ecommerce)
     * "classic-serif": Elegant, trustworthy (good for finance, consulting, law)
     * "tech-mono": Technical, precise (good for developer tools, APIs)
     * "elegant-display": Sophisticated (good for creative, luxury, restaurant)
     * "minimal-clean": Simple, readable (good for healthcare, education)
   - headingFont: Google Font name for headings (e.g., "Inter", "Playfair Display", "Space Grotesk")
   - bodyFont: Google Font name for body text (e.g., "Inter", "Source Serif 4", "DM Sans")
   - layout: Choose hero variant:
     * "centered": Classic center-aligned hero (versatile, good for most)
     * "split-left": Content left, visual right (good for SaaS, tech)
     * "split-right": Visual left, content right (good for creative, products)
     * "minimal-banner": Compact banner style (good for simple services)
   - backgrounds: Choose patterns:
     * heroPattern: "gradient-mesh" (modern), "geometric-grid" (professional), "organic-blobs" (creative), "tech-lines" (technical), "minimal-clean" (simple)
     * ctaPattern: "gradient-radial" (engaging), "geometric-shapes" (professional), "flowing-waves" (creative), "tech-grid" (technical), "minimal-solid" (clean)
   - industry: Use provided industry "${a.industry || 'auto-detect'}" or auto-detect from business description

DESIGN SELECTION GUIDELINES:
- Match typography preset to industry: SaaS→modern-sans, Finance→classic-serif, Creative→elegant-display
- Choose layout based on content: Data-heavy→split layouts, Simple services→centered/minimal
- Select backgrounds for brand personality: Professional→geometric, Creative→organic, Tech→tech-lines

WRITING GUIDELINES:
- Tone: ${a.tone.toLowerCase()} but always professional
- Use specific numbers, percentages, timeframes where relevant
- Address pain points of ${a.audience}
- Focus on outcomes and transformations, not just features
- Make testimonials feel authentic with specific details
- Create realistic but impressive stats relevant to ${a.product}
- FAQ should handle real objections for this business type
- No generic buzzwords like "revolutionary" or "cutting-edge" unless justified
- Be conversational and human, avoid corporate speak
- Keep sections succinct; prefer short sentences and avoid repetition
- Prefer crisp headlines; avoid title case unless it reads better

Create content that would actually convert visitors into customers. Make it comprehensive and valuable.`;
}
