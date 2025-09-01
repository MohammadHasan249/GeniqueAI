"use client";

import React from 'react';

interface BackgroundPatternProps {
  primaryRgb: { r: number; g: number; b: number };
  className?: string;
}

// Gradient Mesh Pattern (default, suitable for SaaS/Tech)
export function GradientMeshBackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 0%, rgba(255, 255, 255, 1) 50%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05) 100%)`
      }} />
      
      {/* Mesh gradient overlays */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 50% 50%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.12), transparent 50%)`
      }} />
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 80% 20%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08), transparent 50%)`
      }} />
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 20% 80%, rgba(${Math.min(primaryRgb.r + 50, 255)}, ${Math.min(primaryRgb.g + 30, 255)}, ${Math.min(primaryRgb.b + 80, 255)}, 0.06), transparent 50%)`
      }} />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08), rgba(${Math.min(primaryRgb.r + 30, 255)}, ${Math.min(primaryRgb.g + 50, 255)}, ${Math.min(primaryRgb.b + 100, 255)}, 0.06))`
      }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{
        background: `linear-gradient(135deg, rgba(${Math.min(primaryRgb.r + 80, 255)}, ${primaryRgb.g}, ${Math.min(primaryRgb.b + 50, 255)}, 0.06), rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.04))`,
        animationDelay: '1s'
      }} />
    </div>
  );
}

// Geometric Grid Pattern (good for finance/consulting)
export function GeometricGridBackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Base background */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(180deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 0%, rgba(255, 255, 255, 1) 40%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 100%)`
      }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />
      
      {/* Diagonal lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(45deg, transparent 49%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.015) 50%, transparent 51%)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Accent geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rotate-45 border-2 opacity-10" style={{
        borderColor: `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})`
      }} />
      <div className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full border-2 opacity-10" style={{
        borderColor: `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})`
      }} />
    </div>
  );
}

// Organic Blobs Pattern (good for creative/healthcare)
export function OrganicBlobsBackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.04) 0%, rgba(255, 255, 255, 0.9) 30%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 100%)`
      }} />
      
      {/* Organic blob shapes */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-60" style={{
        background: `radial-gradient(ellipse 60% 40% at 40% 60%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.15), transparent)`,
        transform: 'rotate(15deg) scale(1.2, 0.8)'
      }} />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-50" style={{
        background: `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(${Math.min(primaryRgb.r + 40, 255)}, ${primaryRgb.g}, ${Math.min(primaryRgb.b + 60, 255)}, 0.12), transparent)`,
        transform: 'rotate(-25deg) scale(0.9, 1.3)'
      }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-40" style={{
        background: `radial-gradient(ellipse 70% 50% at 30% 70%, rgba(${primaryRgb.r}, ${Math.min(primaryRgb.g + 30, 255)}, ${primaryRgb.b}, 0.1), transparent)`,
        transform: 'rotate(45deg) scale(1.1, 0.7)'
      }} />
      
      {/* Subtle wave pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        background: `radial-gradient(circle at 70% 30%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08), transparent 50%)`
      }} />
    </div>
  );
}

// Tech Lines Pattern (good for developer tools/tech)
export function TechLinesBackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 0%, rgba(255, 255, 255, 1) 50%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.04) 100%)`
      }} />
      
      {/* Circuit-like grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Diagonal tech lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 40%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 50%, transparent 60%),
          linear-gradient(-45deg, transparent 40%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 50%, transparent 60%)
        `,
        backgroundSize: '120px 120px'
      }} />
      
      {/* Accent nodes */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full animate-pulse" style={{
        background: `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})`,
        boxShadow: `0 0 20px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.5)`
      }} />
      <div className="absolute bottom-1/2 right-1/3 w-2 h-2 rounded-full animate-pulse" style={{
        background: `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})`,
        boxShadow: `0 0 20px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.5)`,
        animationDelay: '0.5s'
      }} />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full animate-pulse" style={{
        background: `rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b})`,
        boxShadow: `0 0 20px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.5)`,
        animationDelay: '1s'
      }} />
    </div>
  );
}

// Minimal Clean Pattern (good for healthcare/education)
export function MinimalCleanBackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Minimal gradient */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(180deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 0%, rgba(255, 255, 255, 1) 100%)`
      }} />
      
      {/* Subtle radial accent */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-30" style={{
        background: `radial-gradient(circle, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.06), transparent 70%)`
      }} />
    </div>
  );
}

// CTA Background Patterns

// Gradient Radial CTA Background
export function GradientRadialCTABackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.06) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08) 100%)`
      }} />
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 30% 30%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.12), transparent 70%)`
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 70% 70%, rgba(${Math.min(primaryRgb.r + 50, 255)}, ${primaryRgb.g}, ${Math.min(primaryRgb.b + 100, 255)}, 0.08), transparent 70%)`
        }} />
      </div>
    </div>
  );
}

// Geometric Shapes CTA Background
export function GeometricShapesCTABackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.07) 100%)`
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{
        background: `linear-gradient(225deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08), transparent)`
      }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl" style={{
        background: `linear-gradient(45deg, rgba(${Math.min(primaryRgb.r + 60, 255)}, ${primaryRgb.g}, ${Math.min(primaryRgb.b + 80, 255)}, 0.08), transparent)`
      }} />
    </div>
  );
}

// Flowing Waves CTA Background
export function FlowingWavesCTABackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.04) 0%, rgba(255, 255, 255, 0.95) 40%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.06) 100%)`
      }} />
      <div className="absolute inset-0" style={{
        background: `conic-gradient(from 90deg at 50% 50%, transparent 0deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05) 45deg, transparent 90deg, rgba(${Math.min(primaryRgb.r + 80, 255)}, ${primaryRgb.g}, ${Math.min(primaryRgb.b + 50, 255)}, 0.05) 135deg, transparent 180deg)`
      }} />
    </div>
  );
}

// Tech Grid CTA Background
export function TechGridCTABackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.07) 100%)`
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
}

// Minimal Solid CTA Background
export function MinimalSolidCTABackground({ primaryRgb, className = "" }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{
        background: `linear-gradient(180deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 0%, rgba(255, 255, 255, 1) 100%)`
      }} />
    </div>
  );
}

// Background Pattern Selectors
export function HeroBackgroundPattern({ pattern, primaryRgb, className }: { pattern: string; primaryRgb: { r: number; g: number; b: number }; className?: string }) {
  switch (pattern) {
    case 'geometric-grid':
      return <GeometricGridBackground primaryRgb={primaryRgb} className={className} />;
    case 'organic-blobs':
      return <OrganicBlobsBackground primaryRgb={primaryRgb} className={className} />;
    case 'tech-lines':
      return <TechLinesBackground primaryRgb={primaryRgb} className={className} />;
    case 'minimal-clean':
      return <MinimalCleanBackground primaryRgb={primaryRgb} className={className} />;
    case 'gradient-mesh':
    default:
      return <GradientMeshBackground primaryRgb={primaryRgb} className={className} />;
  }
}

export function CTABackgroundPattern({ pattern, primaryRgb, className }: { pattern: string; primaryRgb: { r: number; g: number; b: number }; className?: string }) {
  switch (pattern) {
    case 'geometric-shapes':
      return <GeometricShapesCTABackground primaryRgb={primaryRgb} className={className} />;
    case 'flowing-waves':
      return <FlowingWavesCTABackground primaryRgb={primaryRgb} className={className} />;
    case 'tech-grid':
      return <TechGridCTABackground primaryRgb={primaryRgb} className={className} />;
    case 'minimal-solid':
      return <MinimalSolidCTABackground primaryRgb={primaryRgb} className={className} />;
    case 'gradient-radial':
    default:
      return <GradientRadialCTABackground primaryRgb={primaryRgb} className={className} />;
  }
}
