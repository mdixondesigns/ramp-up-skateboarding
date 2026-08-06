import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Shared helpers for the guides collection, so the index, the article template,
 * and the card component all agree on ordering and filtering.
 *
 * A guide's `category` is no longer shown anywhere — the filter chips and the
 * card labels are gone. It still earns its place in the frontmatter by deciding
 * which guides a reader is offered next, so the slug and label-color helpers
 * that served the visible tags were removed and this wasn't.
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
