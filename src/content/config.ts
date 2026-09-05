import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    link: z.string().url().optional(),
    doi: z.string().optional(),
    status: z.string().optional(), // e.g. "In preparation"
    order: z.number().default(0),
  }),
});

export const collections = { blog, publications };
