import { getCollection, type CollectionEntry } from "astro:content";
import type { GuideCategory } from "../content.config";

/**
 * Shared helpers for the guides collection, so the index, the article template,
 * and the card component all agree on ordering, filtering, and category colors.
 */

/** Drafts are excluded everywhere except local dev. */
export async function getPublishedGuides(): Promise<CollectionEntry<"guides">[]> {
  const guides = await getCollection("guides", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true
  );

  return guides.sort(
    (a, b) => b.data.updated.valueOf() - a.data.updated.valueOf()
  );
}

/** The "START HERE" card on the Parent Resources index. */
export async function getFeaturedGuide(): Promise<CollectionEntry<"guides"> | undefined> {
  const guides = await getPublishedGuides();
  return guides.find((guide) => guide.data.featured) ?? guides[0];
}

/**
 * Up to `limit` other guides for the "Read next" row, preferring ones in the
 * same category before falling back to the most recent.
 */
export async function getRelatedGuides(
  current: CollectionEntry<"guides">,
  limit = 3
): Promise<CollectionEntry<"guides">[]> {
  const others = (await getPublishedGuides()).filter((g) => g.id !== current.id);

  const sameCategory = others.filter(
    (g) => g.data.category === current.data.category
  );
  const rest = others.filter((g) => g.data.category !== current.data.category);

  return [...sameCategory, ...rest].slice(0, limit);
}

/** URL-safe slug for a category, used by the filter chips. */
export function categorySlug(category: GuideCategory): string {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * The AA-compliant label color for a category. These are darkened brand hues —
 * never swap them back to the raw cyan/pink/green, which fail contrast.
 */
export function categoryColorVar(category: GuideCategory): string {
  const map: Record<GuideCategory, string> = {
    "Getting started": "--cat-getting-started",
    "Safety & gear": "--cat-safety-gear",
    "At the clinic": "--cat-at-the-clinic",
    "Keeping it going": "--cat-keeping-it-going",
  };

  return map[category];
}
