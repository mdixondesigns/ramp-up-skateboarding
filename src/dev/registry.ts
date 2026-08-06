/**
 * Story discovery for the component gallery at /dev.
 *
 * Every `.astro` file in `./stories/` becomes a story. The file name is the
 * URL slug; everything else is optional and comes from a `meta` object the
 * story exports from its frontmatter:
 *
 *   ---
 *   export const meta = {
 *     title: "Stat band",
 *     group: "Sections",
 *     description: "Both tones, with and without a heading.",
 *     background: "alt",   // paper | alt | ink — the canvas it looks right on
 *     width: "1280",       // full | 1280 | 768 | 375 — a sensible opening width
 *     order: 2,            // position within its group
 *   };
 *   ---
 *
 * Nothing here reaches production. The glob is behind `import.meta.env.DEV`,
 * which Vite replaces with a literal `false` in a build — the object literal
 * holding the dynamic imports is then dead code, so the stories and their
 * styles are never emitted at all, not merely never linked.
 */

/*
 * The renderable a story module exports. Astro's own generated types reach into
 * the runtime for this — `import.meta.glob` can't know it, so we say it here
 * once rather than casting at every use.
 */
type AstroComponent = (props: Record<string, unknown>) => unknown;

export interface StoryMeta {
  title?: string;
  group?: string;
  description?: string;
  background?: "paper" | "alt" | "ink";
  width?: "full" | "1280" | "768" | "375";
  order?: number;
}

export interface Story extends Required<Pick<StoryMeta, "background" | "width">> {
  slug: string;
  title: string;
  group: string;
  description?: string;
  order: number;
  Component: AstroComponent;
}

interface StoryModule {
  default: AstroComponent;
  meta?: StoryMeta;
}

type Loaders = Record<string, () => Promise<StoryModule>>;

const loaders: Loaders = import.meta.env.DEV
  ? import.meta.glob<StoryModule>("./stories/*.astro")
  : {};

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.astro$/, "");
}

/** "stat-band" → "Stat band", for stories that don't bother with a title. */
function titleFromSlug(slug: string): string {
  const words = slug.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/** Slugs alone, for `getStaticPaths` — no need to load a module to route. */
export const storySlugs: string[] = Object.keys(loaders).map(slugFromPath);

export async function loadStories(): Promise<Story[]> {
  const loaded = await Promise.all(
    Object.entries(loaders).map(async ([path, load]) => {
      const module = await load();
      const slug = slugFromPath(path);
      const meta = module.meta ?? {};

      return {
        slug,
        title: meta.title ?? titleFromSlug(slug),
        group: meta.group ?? "Components",
        description: meta.description,
        background: meta.background ?? "paper",
        width: meta.width ?? "full",
        order: meta.order ?? 0,
        Component: module.default,
      } satisfies Story;
    })
  );

  return loaded.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

/*
 * Groups appear in this order; anything with an unrecognised group name falls
 * to the end rather than disappearing, so a typo is visible instead of silent.
 */
const GROUP_ORDER = ["Sections", "Cards", "Article", "Primitives"];

export function groupStories(stories: Story[]) {
  return [...new Set(stories.map((story) => story.group))]
    .sort((a, b) => {
      const ai = GROUP_ORDER.indexOf(a);
      const bi = GROUP_ORDER.indexOf(b);
      return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi) || a.localeCompare(b);
    })
    .map((name) => ({
      name,
      stories: stories.filter((story) => story.group === name),
    }));
}
