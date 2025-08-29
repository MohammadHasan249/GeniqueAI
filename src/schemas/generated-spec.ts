// src/schemas/generated-spec.ts
import { z } from "zod";

const Feature = z.object({
  title: z.string().min(3).max(80),
  description: z.string().min(30).max(300),
  icon: z.string().min(1).max(50).optional(),
});

const Benefit = z.object({
  title: z.string().min(3).max(80),
  description: z.string().min(30).max(250),
});

const Testimonial = z.object({
  quote: z.string().min(50).max(400),
  author: z.string().min(2).max(60),
  role: z.string().min(2).max(80),
  company: z.string().min(2).max(60).optional(),
});

const FAQ = z.object({
  question: z.string().min(10).max(150),
  answer: z.string().min(30).max(400),
});

const Stats = z.object({
  value: z.string().min(1).max(20),
  label: z.string().min(3).max(50),
});

export const GeneratedSpecSchema = z.object({
  hero: z.object({
    headline: z.string().min(16).max(60),
    subheadline: z.string().min(24).max(120),
    description: z.string().min(40).max(160),
    cta: z.string().min(2).max(40),
    secondaryCta: z.string().min(2).max(40).optional(),
  }),
  benefits: z.array(Benefit).min(3).max(4),
  features: z.array(Feature).min(3).max(6),
  about: z.object({
    title: z.string().min(3).max(80),
    description: z.string().min(160).max(500),
    mission: z.string().min(50).max(300).optional(),
    vision: z.string().min(50).max(300).optional(),
  }),
  testimonials: z.array(Testimonial).min(2).max(4),
  stats: z.array(Stats).min(4).max(4),
  faq: z.array(FAQ).min(4).max(8),
  cta: z.object({
    headline: z.string().min(10).max(100),
    description: z.string().min(30).max(200),
    primaryButton: z.string().min(2).max(40),
    secondaryButton: z.string().min(2).max(40).optional(),
  }),
  logo: z.object({
    iconName: z.string().min(1).max(50).describe("Lucide icon name for generated logo")
  }).optional(),
  palette: z.object({
    primary: z.string().regex(/^#?[0-9A-Fa-f]{6}$/),
    background: z.string().regex(/^#?[0-9A-Fa-f]{6}$/).optional(),
    accent: z.string().regex(/^#?[0-9A-Fa-f]{6}$/).optional(),
  }).optional(),
  design: z.object({
    typography: z.object({
      preset: z.enum(["modern-sans", "classic-serif", "tech-mono", "elegant-display", "minimal-clean"]),
      headingFont: z.string().min(1).max(50).describe("Google Font name for headings"),
      bodyFont: z.string().min(1).max(50).describe("Google Font name for body text"),
    }),
    layout: z.object({
      heroVariant: z.enum(["centered", "split-left", "split-right", "minimal-banner"]),
    }),
    backgrounds: z.object({
      heroPattern: z.enum(["gradient-mesh", "geometric-grid", "organic-blobs", "tech-lines", "minimal-clean"]),
      ctaPattern: z.enum(["gradient-radial", "geometric-shapes", "flowing-waves", "tech-grid", "minimal-solid"]),
    }),
    industry: z.enum(["saas", "ecommerce", "restaurant", "healthcare", "education", "finance", "creative", "consulting", "technology", "other"]).optional(),
  }),
}).strict();

export type GeneratedSpec = z.infer<typeof GeneratedSpecSchema>;
