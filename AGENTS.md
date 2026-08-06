## Editing content

`docs/editing-content.md` is the guide for whoever is writing the site's copy —
menus, page layout, every component's props, embeds, and the content
collections. **If you change a component's props, a data file's shape, or the
way pages are laid out, update that guide in the same pass.** It is written for
someone who knows HTML and not Astro, so keep it concrete and keep the examples
copy-pasteable.

`docs/design-system.md` is the original design handoff — tokens, motifs, and the
intent behind the three designed pages.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Component gallery

`/dev` renders one component at a time, off the page it normally lives on, with
width and background controls. Dev only — `getStaticPaths` yields nothing in a
build and the story modules are dead-code-eliminated, so it has no production
footprint.

Adding a component to it is one file: drop an `.astro` file in
`src/dev/stories/` and it appears in the sidebar. `src/dev/registry.ts`
documents the optional `meta` export (title, group, description, background,
width, order).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
