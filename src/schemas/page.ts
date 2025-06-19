import { z } from 'zod';

export const pageSchema = z.object({
	hero: z.object({
		headline: z.string().max(80),
		subheadline: z.string().max(160),
		cta: z.string().max(40),
	}),
	features: z.array(
		z.object({
			title: z.string().max(60),
			description: z.string().max(120),
		})
	).min(2).max(4),
});

export type Page = z.infer<typeof pageSchema>;