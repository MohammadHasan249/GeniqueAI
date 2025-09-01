"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { DynamicVisual } from "@/components/dynamic-visual";
import { industryPhotoKeywords } from "@/lib/unsplash";
import type { GeneratedSpec } from "@/schemas/generated-spec";

interface HeroLayoutProps {
  spec: GeneratedSpec;
  primary: string;
  primaryRgb: { r: number; g: number; b: number };
  businessName: string | null;
  backgroundChildren?: React.ReactNode;
}

// Centered Hero Layout (default)
export function CenteredHero({ spec, primary, primaryRgb, businessName, backgroundChildren }: HeroLayoutProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {backgroundChildren}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-white/50 backdrop-blur">
            <Sparkles className="w-4 h-4 mr-2" style={{ color: primary }} />
            Now Available
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent leading-[1.1]"
          style={{
            backgroundImage: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 80, 255)}, ${Math.min(primaryRgb.g + 40, 255)}, ${Math.min(primaryRgb.b + 120, 255)}) 50%, rgb(${Math.max(primaryRgb.r - 20, 0)}, ${Math.max(primaryRgb.g - 10, 0)}, ${Math.max(primaryRgb.b - 30, 0)}) 100%)`,
            fontFamily: 'var(--font-heading)'
          }}
        >
          {spec.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {spec.hero.subheadline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {spec.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <HeroCTAButtons spec={spec} primary={primary} primaryRgb={primaryRgb} delay={0.6} />

        {/* Social Proof Stats */}
        {spec.stats?.length === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16"
          >
            {spec.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: primary, fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium" style={{ fontFamily: 'var(--font-body)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

// Split Left Hero Layout
export function SplitLeftHero({ spec, primary, primaryRgb, businessName, backgroundChildren }: HeroLayoutProps) {
  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      {backgroundChildren}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-white/50 backdrop-blur w-fit">
              <Sparkles className="w-4 h-4 mr-2" style={{ color: primary }} />
              Now Available
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent leading-[1.1]"
              style={{
                backgroundImage: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 80, 255)}, ${Math.min(primaryRgb.g + 40, 255)}, ${Math.min(primaryRgb.b + 120, 255)}) 100%)`,
                fontFamily: 'var(--font-heading)'
              }}
            >
              {spec.hero.headline}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              {spec.hero.subheadline}
            </p>

            <p className="text-lg text-muted-foreground/80" style={{ fontFamily: 'var(--font-body)' }}>
              {spec.hero.description}
            </p>

            <HeroCTAButtons spec={spec} primary={primary} primaryRgb={primaryRgb} delay={0.4} />
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <DynamicVisual
              industry={spec.design?.industry as keyof typeof industryPhotoKeywords}
              businessName={businessName}
              spec={spec}
              primaryRgb={primaryRgb}
              className="aspect-square lg:aspect-[4/3]"
              width={600}
              height={450}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Split Right Hero Layout
export function SplitRightHero({ spec, primary, primaryRgb, businessName, backgroundChildren }: HeroLayoutProps) {
  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      {backgroundChildren}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <DynamicVisual
              industry={spec.design?.industry as keyof typeof industryPhotoKeywords}
              businessName={businessName}
              spec={spec}
              primaryRgb={primaryRgb}
              className="aspect-square lg:aspect-[4/3]"
              width={600}
              height={450}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-white/50 backdrop-blur w-fit">
              <Sparkles className="w-4 h-4 mr-2" style={{ color: primary }} />
              Now Available
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent leading-[1.1]"
              style={{
                backgroundImage: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 80, 255)}, ${Math.min(primaryRgb.g + 40, 255)}, ${Math.min(primaryRgb.b + 120, 255)}) 100%)`,
                fontFamily: 'var(--font-heading)'
              }}
            >
              {spec.hero.headline}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              {spec.hero.subheadline}
            </p>

            <p className="text-lg text-muted-foreground/80" style={{ fontFamily: 'var(--font-body)' }}>
              {spec.hero.description}
            </p>

            <HeroCTAButtons spec={spec} primary={primary} primaryRgb={primaryRgb} delay={0.4} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Minimal Banner Hero Layout
export function MinimalBannerHero({ spec, primary, primaryRgb, businessName, backgroundChildren }: HeroLayoutProps) {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {backgroundChildren}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-white/50 backdrop-blur">
            <Sparkles className="w-4 h-4 mr-2" style={{ color: primary }} />
            {businessName || 'Now Available'}
          </Badge>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent leading-[1.1]"
            style={{
              backgroundImage: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 60, 255)}, ${Math.min(primaryRgb.g + 30, 255)}, ${Math.min(primaryRgb.b + 90, 255)}) 100%)`,
              fontFamily: 'var(--font-heading)'
            }}
          >
            {spec.hero.headline}
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {spec.hero.subheadline}
          </p>

          <HeroCTAButtons spec={spec} primary={primary} primaryRgb={primaryRgb} delay={0.3} compact />
        </motion.div>
      </div>
    </section>
  );
}

// Shared CTA Buttons Component
interface HeroCTAButtonsProps {
  spec: GeneratedSpec;
  primary: string;
  primaryRgb: { r: number; g: number; b: number };
  delay?: number;
  compact?: boolean;
}

function HeroCTAButtons({ spec, primary, primaryRgb, delay = 0, compact = false }: HeroCTAButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`flex flex-col sm:flex-row gap-4 ${compact ? 'justify-center items-center' : 'justify-center items-center'}`}
    >
      <Button 
        size={compact ? "default" : "lg"} 
        className={`${compact ? 'px-6 py-3' : 'px-8 py-6'} text-lg font-semibold gap-2 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-white border-0`}
        style={{ 
          background: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 40, 255)}, ${Math.min(primaryRgb.g + 20, 255)}, ${Math.min(primaryRgb.b + 60, 255)}) 100%)`,
          boxShadow: `0 10px 30px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.3)`,
          fontFamily: 'var(--font-body)'
        }}
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {spec.hero.cta} <ArrowRight className="w-5 h-5" />
      </Button>
      {spec.hero.secondaryCta && (
        <Button 
          variant="outline" 
          size={compact ? "default" : "lg"} 
          className={`${compact ? 'px-6 py-3' : 'px-8 py-6'} text-lg font-semibold gap-2 backdrop-blur hover:scale-105 hover:-translate-y-1 transition-all duration-300`}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderColor: primary,
            borderWidth: '2px',
            color: primary,
            fontFamily: 'var(--font-body)'
          }}
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Play className="w-5 h-5" />
          {spec.hero.secondaryCta}
        </Button>
      )}
    </motion.div>
  );
}

// Hero Layout Selector
export function HeroLayout({ variant, ...props }: HeroLayoutProps & { variant: string }) {
  switch (variant) {
    case 'split-left':
      return <SplitLeftHero {...props} />;
    case 'split-right':
      return <SplitRightHero {...props} />;
    case 'minimal-banner':
      return <MinimalBannerHero {...props} />;
    case 'centered':
    default:
      return <CenteredHero {...props} />;
  }
}
