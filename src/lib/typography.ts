// Typography system utilities - font instances are loaded in TypographyProvider

// Typography preset definitions
export const typographyPresets = {
  'modern-sans': {
    name: 'Modern Sans',
    description: 'Clean and contemporary for SaaS and tech',
    headingFont: 'Inter',
    bodyFont: 'Inter',
    weight: { heading: [600, 700], body: [400, 500] }
  },
  'classic-serif': {
    name: 'Classic Serif',
    description: 'Elegant and trustworthy for finance and consulting',
    headingFont: 'Playfair Display',
    bodyFont: 'Source Serif 4',
    weight: { heading: [600, 700], body: [400, 500] }
  },
  'tech-mono': {
    name: 'Tech Mono',
    description: 'Technical and precise for developer tools',
    headingFont: 'Space Grotesk',
    bodyFont: 'DM Sans',
    weight: { heading: [600, 700], body: [400, 500] }
  },
  'elegant-display': {
    name: 'Elegant Display',
    description: 'Sophisticated for creative and luxury brands',
    headingFont: 'Playfair Display',
    bodyFont: 'DM Sans',
    weight: { heading: [600, 700], body: [400, 500] }
  },
  'minimal-clean': {
    name: 'Minimal Clean',
    description: 'Simple and readable for healthcare and education',
    headingFont: 'Poppins',
    bodyFont: 'Inter',
    weight: { heading: [600, 700], body: [400, 500] }
  }
} as const;

// Font instances are loaded in TypographyProvider to avoid Next.js font loading issues

// Map Google Font names to their CSS variable names
export const fontVariableMap: Record<string, string> = {
  'Inter': 'var(--font-inter)',
  'Poppins': 'var(--font-poppins)', 
  'Playfair Display': 'var(--font-playfair)',
  'Space Grotesk': 'var(--font-space-grotesk)',
  'Montserrat': 'var(--font-montserrat)',
  'Source Serif 4': 'var(--font-source-serif)',
  'DM Sans': 'var(--font-dm-sans)',
  'Crimson Text': 'var(--font-crimson)',
  'JetBrains Mono': 'var(--font-jetbrains)'
};

// Get CSS variables for a typography preset
export function getTypographyCSSVars(preset: keyof typeof typographyPresets) {
  const config = typographyPresets[preset];
  return {
    '--font-heading': fontVariableMap[config.headingFont] || 'var(--font-inter)',
    '--font-body': fontVariableMap[config.bodyFont] || 'var(--font-inter)'
  } as Record<string, string>;
}

// Font instances are handled by TypographyProvider - this function is deprecated
export function getRequiredFontInstances() {
  // All fonts are loaded by TypographyProvider, so we don't need this anymore
  return [];
}

// Industry to typography preset mapping
export const industryTypographyMap: Record<string, keyof typeof typographyPresets> = {
  'saas': 'modern-sans',
  'technology': 'tech-mono', 
  'ecommerce': 'modern-sans',
  'finance': 'classic-serif',
  'consulting': 'classic-serif',
  'healthcare': 'minimal-clean',
  'education': 'minimal-clean',
  'restaurant': 'elegant-display',
  'creative': 'elegant-display',
  'other': 'modern-sans'
};

// Auto-detect typography preset from industry or business description
export function selectTypographyPreset(industry?: string, businessDescription?: string): keyof typeof typographyPresets {
  // If industry is specified, use mapping
  if (industry && industryTypographyMap[industry]) {
    return industryTypographyMap[industry];
  }
  
  // Fallback to auto-detection from business description
  if (businessDescription) {
    const desc = businessDescription.toLowerCase();
    
    if (desc.includes('software') || desc.includes('saas') || desc.includes('app') || desc.includes('platform')) {
      return 'modern-sans';
    }
    if (desc.includes('finance') || desc.includes('bank') || desc.includes('investment') || desc.includes('consulting')) {
      return 'classic-serif';
    }
    if (desc.includes('restaurant') || desc.includes('food') || desc.includes('creative') || desc.includes('design')) {
      return 'elegant-display';
    }
    if (desc.includes('health') || desc.includes('medical') || desc.includes('education') || desc.includes('school')) {
      return 'minimal-clean';
    }
    if (desc.includes('tech') || desc.includes('developer') || desc.includes('coding') || desc.includes('api')) {
      return 'tech-mono';
    }
  }
  
  // Default fallback
  return 'modern-sans';
}
