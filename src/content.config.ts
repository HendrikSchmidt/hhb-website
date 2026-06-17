import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['wohngebaeude', 'hotels', 'buerogebaeude', 'einkaufszentren']),
    location: z.string(),
    year: z.string(),
    type: z.string(),
    facts: z.array(z.string()),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
