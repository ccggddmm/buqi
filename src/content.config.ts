import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(),
    section: z.enum(['engineering', 'essays', 'notes']),
    language: z.enum(['zh', 'en']).default('zh'),
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'published']).default('draft'),
    featured: z.boolean().default(false),
  }),
});
export const collections = { writing };
