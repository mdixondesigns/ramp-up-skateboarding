import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/**
 * Content collections.
 *
 * `guides`  — Parent Resources articles. Adding one is a matter of dropping a
 *             .md file in src/content/guides/; the route, card, category filter,
 *             and "read next" picks all follow from the frontmatter.
 * `updates` — Community Updates posts, same idea with a lighter schema.
 */

/** Matches the category label colors in tokens.css. Keep the two in sync. */
export const GUIDE_CATEGORIES = [
  "Getting started",
  "Safety & gear",
  "At the clinic",
  "Keeping it going",
] as const;

export type GuideCategory = (typeof GUIDE_CATEGORIES)[number];

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(GUIDE_CATEGORIES),
      excerpt: z.string(),
      heroImage: image(),
      heroAlt: z.string(),
      author: z.string().default("Coach Mike"),
      /** Portrait variant from Avatar.astro. */
      authorAvatar: z.enum(["a", "b", "c", "coach"]).default("coach"),
      updated: z.date(),
      readingTime: z.number(),
      /** Sidebar "In this guide" links; each must match an <h2> id in the body. */
      toc: z
        .array(z.object({ label: z.string(), slug: z.string() }))
        .default([]),
      /** One guide is the "START HERE" card on the Parent Resources index. */
      featured: z.boolean().default(false),
      /** Short takeaway for the sticky sidebar card. */
      shortVersion: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const updates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/updates" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      publishedAt: z.date(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { guides, updates };
