"use client";

import { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Zap, Heart, Users, Globe, Target, Award } from 'lucide-react';
import { getIndustryPhotoUrl, getIndustryGradient, industryPhotoKeywords } from '@/lib/unsplash';
import type { GeneratedSpec } from '@/schemas/generated-spec';

interface DynamicVisualProps {
  industry?: keyof typeof industryPhotoKeywords;
  businessName?: string | null;
  spec?: GeneratedSpec | null;
  primaryRgb: { r: number; g: number; b: number };
  className?: string;
  width?: number;
  height?: number;
}

export function DynamicVisual({ 
  industry = 'other', 
  businessName, 
  spec, 
  primaryRgb, 
  className = "", 
  width = 600, 
  height = 400 
}: DynamicVisualProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    // Generate a new image URL based on industry and business context
    const customQuery = businessName ? `${businessName} ${industry}` : undefined;
    const url = getIndustryPhotoUrl(industry, { width, height, query: customQuery });
    setImageUrl(url);
    setImageLoaded(false);
    setImageError(false);
  }, [industry, businessName, width, height]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
  };

  // Industry-specific icon for fallback
  const getIndustryIcon = () => {
    const iconProps = { className: "w-12 h-12", style: { color: `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})` } };
    
    switch (industry) {
      case 'saas':
      case 'technology':
        return <Zap {...iconProps} />;
      case 'ecommerce':
        return <TrendingUp {...iconProps} />;
      case 'finance':
      case 'consulting':
        return <Target {...iconProps} />;
      case 'healthcare':
        return <Heart {...iconProps} />;
      case 'education':
        return <Users {...iconProps} />;
      case 'restaurant':
        return <Award {...iconProps} />;
      case 'creative':
        return <Sparkles {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`} style={{ width, height }}>
      {/* Background Image */}
      {!imageError && imageUrl && (
        <img
          src={imageUrl}
          alt={`${industry} business visual`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      {/* Fallback Gradient + Icon */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          imageLoaded && !imageError && imageUrl ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: getIndustryGradient(industry)
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              {getIndustryIcon()}
            </div>
            <p className="text-white/90 font-medium text-lg capitalize">
              {businessName || `${industry.replace('-', ' ')} Business`}
            </p>
            <p className="text-white/70 text-sm mt-1">
              {spec?.hero?.subheadline?.slice(0, 50) || 'Professional Solutions'}
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for better text contrast when image is loaded */}
      {imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      )}

      {/* Loading State */}
      {!imageLoaded && !imageError && imageUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-pulse">
            <Sparkles className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      )}

      {/* Industry Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div 
          className="px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm"
          style={{ 
            background: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.8)`,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          {industry.charAt(0).toUpperCase() + industry.slice(1)}
        </div>
      </div>

      {/* Refresh Button for New Image */}
      <button
        onClick={() => {
          const customQuery = businessName ? `${businessName} ${industry}` : undefined;
          const newUrl = getIndustryPhotoUrl(industry, { width, height, query: customQuery });
          if (newUrl) {
            setImageUrl(newUrl);
            setImageLoaded(false);
            setImageError(false);
          }
        }}
        className="absolute bottom-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        title="Get new image"
      >
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );
}

// Simplified version for smaller spaces
export function DynamicVisualCompact({ 
  industry = 'other', 
  primaryRgb, 
  className = "" 
}: Pick<DynamicVisualProps, 'industry' | 'primaryRgb' | 'className'>) {
  return (
    <div 
      className={`w-full h-full rounded-lg ${className}`}
      style={{
        background: getIndustryGradient(industry)
      }}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="text-center">
          <Sparkles 
            className="w-8 h-8 mx-auto mb-2" 
            style={{ color: `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})` }} 
          />
          <p className="text-white/90 text-sm font-medium capitalize">
            {industry.replace('-', ' ')}
          </p>
        </div>
      </div>
    </div>
  );
}
