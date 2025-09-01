"use client";

import { useMemo } from "react";
import * as LucideIcons from "lucide-react";

interface GeneratedLogoProps {
  businessName: string;
  iconName: string;
  primaryColor: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GeneratedLogo({ 
  businessName, 
  iconName, 
  primaryColor, 
  size = "md",
  className = "" 
}: GeneratedLogoProps) {
  
  const sizeConfig = {
    sm: { iconSize: 20, fontSize: "text-sm", height: "h-8", gap: "gap-2" },
    md: { iconSize: 24, fontSize: "text-base", height: "h-10", gap: "gap-3" },
    lg: { iconSize: 32, fontSize: "text-xl", height: "h-12", gap: "gap-4" }
  };

  const config = sizeConfig[size];

  // Get the Lucide icon component
  const IconComponent = useMemo(() => {
    // Convert kebab-case to PascalCase for Lucide icons
    const pascalCase = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    // Get the icon component from Lucide
    const Icon = (LucideIcons as any)[pascalCase] || LucideIcons.Building;
    return Icon;
  }, [iconName]);

  // Truncate business name if too long
  const displayName = businessName.length > 20 
    ? businessName.substring(0, 20) + '...' 
    : businessName;

  return (
    <div className={`flex items-center ${config.gap} ${config.height} ${className}`}>
      <IconComponent 
        size={config.iconSize} 
        style={{ color: primaryColor }}
        strokeWidth={2}
      />
      <span 
        className={`font-semibold ${config.fontSize} leading-none`}
        style={{ color: primaryColor }}
      >
        {displayName}
      </span>
    </div>
  );
}

// SVG version for when we need actual SVG output (for downloads, etc.)
export function GeneratedLogoSVG({ 
  businessName, 
  iconName, 
  primaryColor 
}: Omit<GeneratedLogoProps, 'size' | 'className'>) {
  
  const displayName = businessName.length > 20 
    ? businessName.substring(0, 20) + '...' 
    : businessName;
    
  const iconSize = 28;
  const fontSize = 20;
  const padding = 12;
  const gap = 12;
  
  // Estimate text width (rough calculation)
  const textWidth = displayName.length * (fontSize * 0.6);
  const totalWidth = iconSize + gap + textWidth + (padding * 2);
  const totalHeight = Math.max(iconSize, fontSize) + (padding * 2);

  // Get icon path from our mapping
  const getIconPath = (name: string): string => {
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
    return iconPaths[name] || iconPaths["building"];
  };

  const iconPath = getIconPath(iconName);

  const svgContent = `<svg width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(${padding}, ${(totalHeight - iconSize) / 2})">
    <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${iconPath}
    </svg>
  </g>
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

  return (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
}
