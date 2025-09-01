"use client";

import { Globe, Sparkles, Palette, User, Target } from 'lucide-react';
import { DynamicVisualCompact } from '@/components/dynamic-visual';
import { industryPhotoKeywords } from '@/lib/unsplash';
import { GeneratedSpec } from '@/schemas/generated-spec';

interface WebsitePreviewProps {
  spec?: GeneratedSpec | null;
  businessName?: string | null;
  answersJson?: Record<string, unknown>;
  className?: string;
}

export function WebsitePreview({ spec, businessName, answersJson, className = "" }: WebsitePreviewProps) {
  // Fallback values
  const headline = spec?.hero?.headline || (answersJson?.product as string) || businessName || 'Your Business';
  const subheadline = spec?.hero?.subheadline || 'Professional landing page';
  const primaryColor = spec?.palette?.primary || (answersJson?.primaryColor as string) || '#2563eb';
  const features = spec?.features?.slice(0, 3) || [];
  
  // Ensure color has # prefix
  const formattedColor = typeof primaryColor === 'string' && primaryColor.startsWith('#') ? primaryColor : `#${primaryColor}`;
  
  // Convert hex to RGB for dynamic gradients
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 59, g: 130, b: 246 }; // fallback to blue
  };

  return (
    <div className={`relative overflow-hidden bg-white dark:bg-gray-900 border border-border rounded-lg ${className}`}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white dark:bg-gray-700 rounded text-xs px-2 py-0.5 text-center text-gray-500 dark:text-gray-400">
          {businessName?.toLowerCase().replace(/\s+/g, '')}.com
        </div>
      </div>

      {/* Website content */}
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: formattedColor }}
            >
              {businessName?.[0]?.toUpperCase() || 'B'}
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">
              {businessName || 'Business'}
            </span>
          </div>
          <div 
            className="text-xs px-2 py-1 rounded text-white"
            style={{ backgroundColor: formattedColor }}
          >
            Get Started
          </div>
        </div>

        {/* Mini hero section with visual */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 leading-tight line-clamp-2">
              {headline}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
              {subheadline}
            </p>
            <div 
              className="inline-block text-xs px-2 py-0.5 rounded text-white font-medium"
              style={{ backgroundColor: formattedColor }}
            >
              {spec?.hero?.cta || 'Learn More'}
            </div>
          </div>
          <div className="h-16">
            <DynamicVisualCompact
              industry={spec?.design?.industry as keyof typeof industryPhotoKeywords || 'other'}
              primaryRgb={hexToRgb(formattedColor)}
            />
          </div>
        </div>

        {/* Features preview */}
        {features.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-6 h-6 mx-auto mb-1 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-gray-500" />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Stats preview */}
        {spec?.stats && (
          <div className="flex justify-between text-center">
            {spec.stats.slice(0, 3).map((stat, i) => (
              <div key={i}>
                <div className="text-xs font-bold" style={{ color: formattedColor }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview overlay */}
      <div className="absolute inset-0 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Preview</span>
        </div>
      </div>
    </div>
  );
}

interface ProjectMetaProps {
  answersJson?: Record<string, unknown>;
  spec?: GeneratedSpec | null;
  className?: string;
}

export function ProjectMeta({ answersJson, spec, className = "" }: ProjectMetaProps) {
  const tone = (answersJson?.tone as string) || 'Professional';
  const goal = (answersJson?.goal as string) || 'Sales';
  const audience = (answersJson?.audience as string) || 'General';
  const featuresCount = spec?.features?.length || 0;
  const testimonialsCount = spec?.testimonials?.length || 0;

  const getGoalIcon = (goal: string) => {
    switch (goal) {
      case 'Leads': return Target;
      case 'Sales': return Sparkles;
      case 'Newsletter': return User;
      default: return Target;
    }
  };

  const GoalIcon = getGoalIcon(goal);

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <GoalIcon className="w-3 h-3" />
          <span>Goal: {goal}</span>
        </div>
        <div className="flex items-center gap-1">
          <Palette className="w-3 h-3" />
          <span>Tone: {tone}</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          <span className="truncate">{audience}</span>
        </div>
        {featuresCount > 0 && (
          <span>{featuresCount} features</span>
        )}
        {testimonialsCount > 0 && (
          <span>{testimonialsCount} testimonials</span>
        )}
      </div>
    </div>
  );
}
