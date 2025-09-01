import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

// Schema for logo generation response
const LogoGenerationSchema = z.object({
  iconName: z.string().describe("Lucide icon name that best represents the business"),
  reasoning: z.string().describe("Brief explanation why this icon was chosen")
});

// List of available Lucide icons for business logos
const BUSINESS_ICONS = [
  "building", "building-2", "store", "shop", "home", "factory",
  "laptop", "smartphone", "monitor", "cpu", "database", "server",
  "heart", "stethoscope", "pill", "activity", "zap", "shield",
  "graduation-cap", "book", "pencil", "presentation", "target", "trophy",
  "car", "truck", "plane", "ship", "fuel", "wrench",
  "shopping-cart", "credit-card", "coins", "dollar-sign", "trending-up", "chart-bar",
  "camera", "image", "video", "music", "mic", "headphones",
  "utensils", "coffee", "wine", "chef-hat", "pizza", "cake",
  "shirt", "scissors", "palette", "brush", "gem", "sparkles",
  "users", "user-check", "handshake", "megaphone", "mail", "phone",
  "leaf", "tree", "sun", "cloud", "droplets", "recycle",
  "dumbbell", "bike", "football", "basketball", "tennis-ball", "gamepad-2",
  "briefcase", "calculator", "file-text", "clipboard", "calendar", "clock"
];

export async function POST(req: NextRequest) {
  try {
    // 1. Protect the route
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse request body
    const { businessName, product, primaryColor } = await req.json();

    if (!businessName || !product) {
      return NextResponse.json({ 
        error: 'Business name and product are required' 
      }, { status: 400 });
    }

    // 3. Generate icon selection with OpenAI
    const iconPrompt = `You are a brand designer selecting the perfect icon for a business logo.

Business: ${businessName}
Product/Service: ${product}

Choose the most appropriate Lucide icon from this list: ${BUSINESS_ICONS.join(', ')}

Consider:
- Industry relevance (tech business = tech icons, restaurant = food icons)
- Brand personality (professional, creative, modern, etc.)
- Universal recognition and clarity
- Scalability at small sizes

Return the exact icon name from the list and explain your reasoning.`;

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: LogoGenerationSchema,
      prompt: iconPrompt,
    });

    // 4. Validate icon exists in our list
    if (!BUSINESS_ICONS.includes(object.iconName)) {
      // Fallback to a safe default
      object.iconName = "building";
    }

    // 5. Generate SVG logo
    const svgLogo = generateSVGLogo(businessName, object.iconName, primaryColor || "#3b82f6");

    // 6. Return the result
    return NextResponse.json({
      iconName: object.iconName,
      reasoning: object.reasoning,
      svgLogo,
      businessName,
      primaryColor: primaryColor || "#3b82f6"
    });

  } catch (error) {
    console.error('Logo generation error:', error);
    return NextResponse.json({ 
      error: 'Logo generation failed' 
    }, { status: 500 });
  }
}

function generateSVGLogo(businessName: string, iconName: string, primaryColor: string): string {
  // Clean business name (limit length for better display)
  const displayName = businessName.length > 20 ? businessName.substring(0, 20) + '...' : businessName;
  
  // Calculate dimensions
  const iconSize = 28;
  const fontSize = 20;
  const padding = 12;
  const gap = 12;
  
  // Estimate text width (rough calculation)
  const textWidth = displayName.length * (fontSize * 0.6);
  const totalWidth = iconSize + gap + textWidth + (padding * 2);
  const totalHeight = Math.max(iconSize, fontSize) + (padding * 2);

  // Get Lucide icon SVG path (simplified mapping)
  const iconPaths = getIconPath(iconName);

  return `<svg width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background (optional, can be transparent) -->
  <rect width="${totalWidth}" height="${totalHeight}" fill="transparent" rx="8"/>
  
  <!-- Icon -->
  <g transform="translate(${padding}, ${(totalHeight - iconSize) / 2})">
    <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${iconPaths}
    </svg>
  </g>
  
  <!-- Business Name -->
  <text 
    x="${padding + iconSize + gap}" 
    y="${totalHeight / 2}" 
    font-family="Inter, system-ui, sans-serif" 
    font-size="${fontSize}" 
    font-weight="600" 
    fill="${primaryColor}" 
    dominant-baseline="middle"
  >
    ${displayName}
  </text>
</svg>`;
}

// Simplified icon path mapping (subset of Lucide icons)
function getIconPath(iconName: string): string {
  const iconPaths: Record<string, string> = {
    "building": `<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12h4v6h4v-6h4"/>`,
    "building-2": `<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12h4v6h4v-6h4"/><path d="M6 6h12"/><path d="M6 18h12"/>`,
    "store": `<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>`,
    "laptop": `<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>`,
    "heart": `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>`,
    "graduation-cap": `<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>`,
    "camera": `<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>`,
    "utensils": `<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>`,
    "users": `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3.78-3.78"/><circle cx="17.5" cy="17.5" r="3.5"/>`,
    "briefcase": `<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
    "sparkles": `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>`,
  };

  return iconPaths[iconName] || iconPaths["building"]; // Default fallback
}
