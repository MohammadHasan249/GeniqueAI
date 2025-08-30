import { z } from "zod";

export const WizardSchema = z.object({
  businessName: z.string().min(2).max(60),
  product: z.string().min(3).max(80),
  audience: z.string().min(3).max(80),
  goal: z.enum(["Leads", "Sales", "Newsletter"]),
  tone: z.enum(["Friendly", "Professional", "Bold"]),
  industry: z.enum(["saas", "ecommerce", "restaurant", "healthcare", "education", "finance", "creative", "consulting", "technology", "other"]).optional().or(z.literal("")),
  primaryColor: z.string().regex(/^#?[0-9A-Fa-f]{6}$/),         // hex
  referenceUrl: z.string().url().optional().or(z.literal("")),
  logoUrl: z.string().url().optional().or(z.literal("")),     // uploaded logo URL
});
export type WizardAnswers = z.infer<typeof WizardSchema>;
