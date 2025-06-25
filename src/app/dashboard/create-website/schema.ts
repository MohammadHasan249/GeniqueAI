import { z } from "zod";

export const WizardSchema = z.object({
  product: z.string().min(3).max(80),
  audience: z.string().min(3).max(80),
  goal: z.enum(["Leads", "Sales", "Newsletter"]),
  tone: z.enum(["Friendly", "Professional", "Bold"]),
  primaryColor: z.string().regex(/^#?[0-9A-Fa-f]{6}$/),         // hex
  referenceUrl: z.string().url().optional().or(z.literal("")),
});
export type WizardAnswers = z.infer<typeof WizardSchema>;
