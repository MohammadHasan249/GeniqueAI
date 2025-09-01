// Industry-specific photo keywords for Unsplash
export const industryPhotoKeywords = {
  'saas': [
    'software development',
    'team collaboration', 
    'modern office',
    'laptop workspace',
    'digital dashboard',
    'tech startup'
  ],
  'technology': [
    'programming code',
    'server room',
    'circuit board',
    'developer workspace',
    'computer screens',
    'tech office'
  ],
  'ecommerce': [
    'online shopping',
    'package delivery',
    'shopping cart',
    'warehouse fulfillment',
    'mobile commerce',
    'retail technology'
  ],
  'finance': [
    'business meeting',
    'financial charts',
    'banking office',
    'handshake deal',
    'stock market',
    'professional consultation'
  ],
  'consulting': [
    'business consultation',
    'professional meeting',
    'strategy session',
    'office presentation',
    'business handshake',
    'corporate office'
  ],
  'healthcare': [
    'medical technology',
    'healthcare professional',
    'medical consultation',
    'hospital modern',
    'health wellness',
    'medical equipment'
  ],
  'education': [
    'online learning',
    'study session',
    'educational technology',
    'student collaboration',
    'modern classroom',
    'learning environment'
  ],
  'restaurant': [
    'restaurant kitchen',
    'food preparation',
    'dining experience',
    'chef cooking',
    'restaurant interior',
    'culinary arts'
  ],
  'creative': [
    'design studio',
    'creative workspace',
    'artistic collaboration',
    'design process',
    'creative meeting',
    'art studio'
  ],
  'other': [
    'professional workspace',
    'modern office',
    'business meeting',
    'team collaboration',
    'workplace innovation',
    'professional environment'
  ]
} as const;

// Generate Unsplash URL for industry-specific photos
export function getIndustryPhotoUrl(
  industry: keyof typeof industryPhotoKeywords = 'other',
  options: {
    width?: number;
    height?: number;
    query?: string;
  } = {}
) {
  const {
    width = 600,
    height = 400,
    query
  } = options;

  // Use custom query if provided, otherwise pick a random keyword from industry
  const keywords = industryPhotoKeywords[industry] || industryPhotoKeywords.other;
  const selectedKeyword = query || keywords[Math.floor(Math.random() * keywords.length)];
  
  // Ensure we have a valid keyword
  if (!selectedKeyword || selectedKeyword.trim() === '') {
    const fallbackKeyword = keywords[0] || 'professional workspace';
    const searchQuery = encodeURIComponent(fallbackKeyword);
    return `https://source.unsplash.com/${width}x${height}/?${searchQuery}`;
  }
  
  // Construct Unsplash Source URL
  const baseUrl = 'https://source.unsplash.com';
  const searchQuery = encodeURIComponent(selectedKeyword);
  
  return `${baseUrl}/${width}x${height}/?${searchQuery}`;
}

// Get multiple photo URLs for variety
export function getIndustryPhotoUrls(
  industry: keyof typeof industryPhotoKeywords = 'other',
  count: number = 3,
  options: {
    width?: number;
    height?: number;
  } = {}
) {
  const { width = 600, height = 400 } = options;
  const keywords = industryPhotoKeywords[industry] || industryPhotoKeywords.other;
  
  return Array.from({ length: Math.min(count, keywords.length) }, (_, index) => ({
    url: `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(keywords[index])}`,
    keyword: keywords[index],
    alt: `${industry} related image: ${keywords[index]}`
  }));
}

// Fallback gradient patterns if images fail to load
export function getIndustryGradient(industry: keyof typeof industryPhotoKeywords = 'other') {
  const gradients = {
    'saas': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'technology': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'ecommerce': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'finance': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'consulting': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'healthcare': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'education': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'restaurant': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'creative': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'other': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  };
  
  return gradients[industry] || gradients.other;
}
