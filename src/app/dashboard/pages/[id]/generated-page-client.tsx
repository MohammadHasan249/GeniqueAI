"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Menu, X, Sparkles, ArrowRight, Star, Users, TrendingUp, Shield, 
  Zap, Globe, CheckCircle, Quote, ChevronDown, Play, Award, 
  Target, Rocket, Heart, MessageCircle, ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Card, CardContent, Badge, Separator } from "@/components/ui";
import { GeneratedLogo } from "@/components/generated-logo";
import { HeroLayout } from "@/components/hero-layouts";
import { HeroBackgroundPattern, CTABackgroundPattern } from "@/components/background-patterns";
import { TypographyProvider } from "@/components/typography-provider";
import { getTypographyCSSVars } from "@/lib/typography";
import type { GeneratedSpec } from "@/schemas/generated-spec";

// Smooth scroll-triggered animations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, margin: "-100px" }
};

const staggerChildren = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface GeneratedPageClientProps {
  spec: GeneratedSpec;
  primary: string;
  businessName: string | null;
  logoUrl?: string;
  generatedLogoIcon?: string;
}

function Navbar({ primary, businessName, spec, logoUrl, generatedLogoIcon }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smooth = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  // Generate navigation items based on what sections exist in the spec
  const getNavItems = () => {
    const navItems = [];
    
    if (spec.features?.length > 0) navItems.push({ id: 'features', label: 'Features' });
    if (spec.benefits?.length > 0) navItems.push({ id: 'benefits', label: 'Benefits' });
    if (spec.testimonials?.length > 0) navItems.push({ id: 'testimonials', label: 'Testimonials' });
    if (spec.faq?.length > 0) navItems.push({ id: 'faq', label: 'FAQ' });
    
    return navItems;
  };

  const navItems = getNavItems();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-sm" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            {logoUrl && !logoError ? (
              <div className="w-10 h-10">
                <img
                  src={logoUrl}
                  alt={`${businessName || "Business"} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error("Logo failed to load:", logoUrl);
                    setLogoError(true);
                  }}
                  onLoad={() => {
                    console.log("Logo loaded successfully:", logoUrl);
                    setLogoError(false);
                  }}
                />
              </div>
            ) : generatedLogoIcon && businessName ? (
              <GeneratedLogo
                businessName={businessName}
                iconName={generatedLogoIcon}
                primaryColor={primary}
                size="md"
              />
            ) : (
              <>
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" style={{ color: primary }} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400" style={{ fontFamily: 'var(--font-heading)' }}>
                  {businessName || "Brand"}
                </span>
              </>
            )}
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => smooth(item.id)}
                className="text-muted-foreground transition-colors font-medium"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {spec.cta && (
            <div className="hidden md:block">
              <Button 
                onClick={() => smooth('pricing')} 
                className="gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300" 
                style={{ backgroundColor: primary }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden border-t bg-background/95 backdrop-blur-xl"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => smooth(item.id)}
              className="block w-full text-left text-foreground/90 transition-colors font-medium py-2"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '';
              }}
            >
              {item.label}
            </button>
          ))}
          {spec.cta && (
            <Button 
              onClick={() => smooth('pricing')} 
              className="w-full gap-2 mt-4 hover:scale-105 hover:shadow-lg transition-all duration-300" 
              style={{ backgroundColor: primary }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
}

interface NavbarProps {
  primary: string;
  businessName: string | null;
  spec: GeneratedSpec;
  logoUrl?: string;
  generatedLogoIcon?: string;
}

export function GeneratedPageClient({ spec, primary, businessName, logoUrl, generatedLogoIcon }: GeneratedPageClientProps) {
  // Convert hex to RGB for dynamic gradients
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 59, g: 130, b: 246 }; // fallback to blue
  };

  const primaryRgb = hexToRgb(primary);
  
  // Get typography configuration
  const typographyPreset = spec.design?.typography?.preset || 'modern-sans';
  const typographyVars = getTypographyCSSVars(typographyPreset);
  
  // Get layout and background variants
  const heroVariant = spec.design?.layout?.heroVariant || 'centered';
  const heroPattern = spec.design?.backgrounds?.heroPattern || 'gradient-mesh';
  const ctaPattern = spec.design?.backgrounds?.ctaPattern || 'gradient-radial';
  
  return (
    <TypographyProvider>
      <div 
        className="min-h-screen bg-white"
        style={typographyVars as React.CSSProperties}
      >
        <Navbar primary={primary} businessName={businessName} spec={spec} logoUrl={logoUrl} generatedLogoIcon={generatedLogoIcon} />

      {/* Dynamic Hero Section */}
      <HeroLayout 
        variant={heroVariant}
        spec={spec}
        primary={primary}
        primaryRgb={primaryRgb}
        businessName={businessName}
        backgroundChildren={
          <HeroBackgroundPattern 
            pattern={heroPattern} 
            primaryRgb={primaryRgb} 
          />
        }
      />

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative" style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 50%, rgba(255, 255, 255, 1) 100%)`
      }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(circle at 30% 20%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.06), transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.015) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Powerful <span style={{ color: primary }}>Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Everything you need to succeed, built with precision and care.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {spec.features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group border-2 relative overflow-hidden" style={{
                  borderColor: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.1)`,
                  background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 0%, rgba(255, 255, 255, 0.9) 100%)`,
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05) 0%, transparent 100%)`
                  }} />
                  <CardContent className="p-0 relative z-10">
                    <div className="mb-6">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.1) 0%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05) 100%)`,
                          boxShadow: `0 4px 20px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.15)`
                        }}
                      >
                        {getFeatureIcon(feature.icon, primary)}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-4 relative" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.04) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 100%)`
      }}>
        {/* Advanced background effects */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 70% 30%, rgba(${Math.min(primaryRgb.r + 50, 255)}, ${primaryRgb.g}, ${Math.min(primaryRgb.b + 100, 255)}, 0.08), transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 20% 70%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.06), transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 60deg, transparent 120deg)`
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Transform Your <span style={{ color: primary }}>Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the real impact on your growth and success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {spec.benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden border-2" style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 100%)`,
                  borderColor: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.1)`,
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08) 0%, transparent 100%)`
                  }} />
                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.15) 0%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08) 100%)`,
                          boxShadow: `0 4px 20px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.2)`
                        }}
                      >
                        <CheckCircle className="w-6 h-6" style={{ color: 'white' }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 relative" style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.015) 50%, rgba(255, 255, 255, 1) 100%)`
      }}>
        {/* Subtle testimonial background */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 60% 40%, rgba(${Math.max(primaryRgb.r - 30, 0)}, ${Math.min(primaryRgb.g + 40, 255)}, ${Math.min(primaryRgb.b + 30, 255)}, 0.04), transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 40% 60%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03), transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 49%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.008) 50%, transparent 51%)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Loved by <span style={{ color: primary }}>Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about their experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {spec.testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden group border-2" style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 100%)`,
                  borderColor: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08)`,
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05) 0%, transparent 100%)`
                  }} />
                  <CardContent className="p-0 relative z-10">
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-8 h-8" style={{ color: primary }} />
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: primary }} />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ 
                          background: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 40, 255)}, ${Math.min(primaryRgb.g + 20, 255)}, ${Math.min(primaryRgb.b + 60, 255)}) 100%)`,
                          boxShadow: `0 4px 15px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.3)`
                        }}
                      >
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        {testimonial.company && (
                          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 relative" style={{
        background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.03) 0%, rgba(255, 255, 255, 0.9) 30%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 100%)`
      }}>
        {/* FAQ background patterns */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 25% 25%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05), transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 75% 75%, rgba(${Math.min(primaryRgb.r + 40, 255)}, ${primaryRgb.g}, ${Math.min(primaryRgb.b + 60, 255)}, 0.04), transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.012) 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked <span style={{ color: primary }}>Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our service.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="space-y-6"
          >
            {spec.faq.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group border-2" style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 100%)`,
                  borderColor: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.08)`,
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(135deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.04) 0%, transparent 100%)`
                  }} />
                  <CardContent className="p-0 relative z-10">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        {/* Dynamic CTA Background */}
        <CTABackgroundPattern 
          pattern={ctaPattern} 
          primaryRgb={primaryRgb} 
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <Badge 
              variant="outline" 
              className="mb-6 bg-white/80 backdrop-blur border-2"
              style={{ borderColor: `${primary}30` }}
            >
              <Sparkles className="w-4 h-4 mr-2" style={{ color: primary }} />
              Ready to get started?
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 60, 255)}, ${Math.min(primaryRgb.g + 30, 255)}, ${Math.min(primaryRgb.b + 90, 255)}) 50%, rgb(${Math.max(primaryRgb.r - 20, 0)}, ${Math.max(primaryRgb.g - 10, 0)}, ${Math.max(primaryRgb.b - 30, 0)}) 100%)`
            }}>
              {spec.cta.headline}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {spec.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="px-10 py-6 text-lg font-semibold gap-3 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all duration-300 text-white border-0"
                style={{ 
                  background: `linear-gradient(135deg, rgb(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) 0%, rgb(${Math.min(primaryRgb.r + 50, 255)}, ${Math.min(primaryRgb.g + 25, 255)}, ${Math.min(primaryRgb.b + 75, 255)}) 100%)`,
                  boxShadow: `0 10px 40px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.4)`
                }}
              >
                <Rocket className="w-5 h-5" />
                {spec.cta.primaryButton}
              </Button>
              {spec.cta.secondaryButton && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-10 py-6 text-lg font-semibold gap-3 backdrop-blur hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: primary,
                    borderWidth: '2px',
                    color: primary,
                    boxShadow: `0 4px 20px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.15)`
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  {spec.cta.secondaryButton}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 relative border-t" style={{
        background: `linear-gradient(180deg, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.02) 0%, rgba(255, 255, 255, 1) 100%)`
      }}>
        {/* Subtle footer background */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 50% 100%, rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.04), transparent 50%)`
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <div className="w-10 h-10">
                  <img
                    src={logoUrl}
                    alt={`${businessName || "Business"} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : generatedLogoIcon && businessName ? (
                <GeneratedLogo
                  businessName={businessName}
                  iconName={generatedLogoIcon}
                  primaryColor={primary}
                  size="md"
                />
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" style={{ color: primary }} />
                  </div>
                  <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                    {businessName || "Your Brand"}
                  </span>
                </>
              )}
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            © 2025 {businessName || "Your Brand"}. All rights reserved. Powered by Genique AI.
          </div>
        </div>
      </footer>
      </div>
    </TypographyProvider>
  );
}

function getFeatureIcon(iconName?: string, color: string = "#3b82f6") {
  const iconProps = { className: "w-7 h-7", style: { color } };
  
  const icons: Record<string, React.ReactNode> = {
    'zap': <Zap {...iconProps} />,
    'shield': <Shield {...iconProps} />,
    'globe': <Globe {...iconProps} />,
    'users': <Users {...iconProps} />,
    'trending': <TrendingUp {...iconProps} />,
    'target': <Target {...iconProps} />,
    'award': <Award {...iconProps} />,
    'heart': <Heart {...iconProps} />,
    'rocket': <Rocket {...iconProps} />,
    'star': <Star {...iconProps} />
  };
  
  return icons[iconName?.toLowerCase() || 'sparkles'] || <Sparkles {...iconProps} />;
}