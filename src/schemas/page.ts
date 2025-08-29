import { z } from 'zod';

export const PageSchema = z.object({
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
	about: z.object({
		title: z.string().max(60),
		description: z.string().max(300),
	}),
	testimonials: z.array(
		z.object({
			name: z.string().max(40),
			role: z.string().max(40),
			quote: z.string().max(200),
		})
	).min(1).max(3),
});

export type Page = z.infer<typeof PageSchema>;