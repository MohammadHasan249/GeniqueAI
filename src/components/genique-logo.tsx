"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Improved Genique AI Logo - clean and professional
export function GeniqueLogo({ className = "", size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10', 
    lg: 'h-12',
    xl: 'h-16'
  };

  const iconSize = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64
  };

  return (
    <div className={`${sizeClasses[size]} flex items-center gap-3 ${className}`}>
      <GeniqueIcon size={iconSize[size]} />
      <GeniqueText size={size} />
    </div>
  );
}

// Clean, modern AI icon
function GeniqueIcon({ size = 40 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="geniqueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* Main circle background */}
      <circle cx="20" cy="20" r="18" fill="url(#geniqueGrad)" />
      
      {/* Modern G letter combined with AI elements */}
      <path 
        d="M12 14 C12 10, 15 8, 20 8 C25 8, 28 10, 28 14 L28 18 L24 18 L24 14 C24 12, 22 12, 20 12 C18 12, 16 12, 16 14 L16 26 C16 28, 18 28, 20 28 C22 28, 24 28, 24 26 L24 22 L20 22 L20 18 L28 18 L28 26 C28 30, 25 32, 20 32 C15 32, 12 30, 12 26 Z" 
        fill="white" 
        opacity="0.9"
      />
      
      {/* AI indicator dots */}
      <circle cx="22" cy="16" r="1.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="26" cy="20" r="1.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="22" cy="24" r="1.5" fill="rgba(255,255,255,0.8)" />
    </svg>
  );
}

// Alternative minimalist icon
export function GeniqueIconMinimal({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="minimalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      
      {/* Letter G with AI twist */}
      <path
        d="M20 4C11.164 4 4 11.164 4 20s7.164 16 16 16c4.411 0 8.424-1.789 11.314-4.686"
        stroke="url(#minimalGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Inner elements representing AI */}
      <circle cx="20" cy="16" r="1.5" fill="url(#minimalGrad)" />
      <circle cx="16" cy="20" r="1.5" fill="url(#minimalGrad)" />
      <circle cx="24" cy="20" r="1.5" fill="url(#minimalGrad)" />
      <circle cx="20" cy="24" r="1.5" fill="url(#minimalGrad)" />
      
      {/* Connecting lines */}
      <g stroke="url(#minimalGrad)" strokeWidth="1" opacity="0.6">
        <line x1="20" y1="16" x2="16" y2="20" />
        <line x1="20" y1="16" x2="24" y2="20" />
        <line x1="16" y1="20" x2="20" y2="24" />
        <line x1="24" y1="20" x2="20" y2="24" />
      </g>
    </svg>
  );
}

// Brand text
function GeniqueText({ size = 'md' }: { size: 'sm' | 'md' | 'lg' | 'xl' }) {
  const textClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`font-bold ${textClasses[size]} bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}>
      Genique<span className="font-normal text-gray-600 dark:text-gray-400 ml-1">AI</span>
    </div>
  );
}
// Alternative brain-inspired logo
export function GeniqueBrainLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Brain outline */}
      <path
        d="M12 10c-2 0-4 1.5-4 4 0 1 0.5 2 1 2.5-0.5 0.5-1 1.5-1 2.5 0 2 1.5 4 4 4h1c0 1.5 1.5 3 3 3h8c1.5 0 3-1.5 3-3h1c2.5 0 4-2 4-4 0-1-0.5-2-1-2.5 0.5-0.5 1-1.5 1-2.5 0-2.5-1.5-4-4-4-1 0-2 0.5-2.5 1C24.5 9.5 23 9 21 9h-6c-2 0-3.5 0.5-4.5 1C10 9.5 11 10 12 10z"
        fill="url(#brainGrad)"
        opacity="0.8"
      />
      
      {/* Neural pathways */}
      <g stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none">
        <path d="M14 14 Q18 16 22 14" />
        <path d="M16 18 Q20 20 24 18" />
        <path d="M15 22 Q19 24 23 22" />
      </g>
      
      {/* Neural nodes */}
      <g fill="rgba(255,255,255,0.9)">
        <circle cx="14" cy="14" r="1" />
        <circle cx="18" cy="16" r="1" />
        <circle cx="22" cy="14" r="1" />
        <circle cx="16" cy="18" r="1" />
        <circle cx="20" cy="20" r="1" />
        <circle cx="24" cy="18" r="1" />
      </g>
    </svg>
  );
}

// Geometric AI logo
export function GeniqueGeometricLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Main hexagon */}
      <path
        d="M20 6 L30 12 L30 28 L20 34 L10 28 L10 12 Z"
        fill="url(#geoGrad)"
        opacity="0.1"
        stroke="url(#geoGrad)"
        strokeWidth="2"
      />
      
      {/* Inner triangles forming AI pattern */}
      <g fill="url(#geoGrad)">
        <path d="M20 12 L16 18 L24 18 Z" opacity="0.8" />
        <path d="M16 22 L20 28 L24 22 Z" opacity="0.8" />
        <circle cx="14" cy="20" r="1.5" />
        <circle cx="26" cy="20" r="1.5" />
      </g>
      
      {/* Central connection */}
      <line x1="20" y1="18" x2="20" y2="22" stroke="url(#geoGrad)" strokeWidth="2" />
    </svg>
  );
}
