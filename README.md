# Ramp Up Skateboarding

The website for Ramp Up, a mobile youth skateboarding program serving the
Greater Lancaster, PA area. Built with [Astro](https://docs.astro.build).

## Editing the site

**Start here: [`docs/editing-content.md`](docs/editing-content.md)** — how to edit
the menus, lay out a page, use every component, add guides and community updates,
and drop in the Sawyer and MailerLite embeds. Written for someone who knows HTML
but has never used Astro.

[`docs/design-system.md`](docs/design-system.md) is the original design handoff:
color and type tokens, the signature motifs, and the intent behind each page.

## Running it locally

```sh
npm install
npm run dev
```

Then open http://localhost:4321. Saving a file updates the browser by itself.

`http://localhost:4321/dev` is the component gallery — every component on its
own, with controls for screen width and background color. It exists only while
running locally and is never part of the published site.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321`, live-reloading |
| `npm run build` | Type-check and build to `./dist/` — **run before committing** |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check only |

`npm run build` is the safety net: it catches missing imports, malformed
frontmatter, and bad component props before any of it reaches the live site.

## How it's laid out

```
src/
  pages/         one file per URL — src/pages/about/team.astro is /about/team
  components/    the design system
  layouts/       the page shell: <head>, header, footer
  content/       guides and community updates, in markdown
  data/          navigation, clinics, testimonials, partners
  styles/        tokens.css (color, type, spacing), global.css, legacy.css
  assets/        photography and logos, optimized at build time
  dev/           component gallery stories — dev only, never built
public/          files served as-is: favicons, patterns, PDFs
```

Two style files worth knowing apart: `global.css` is the design system, and
`legacy.css` is transitional — it holds the pages the design handoff didn't
cover together until they're properly designed. Nothing new should be built on
`legacy.css`.
