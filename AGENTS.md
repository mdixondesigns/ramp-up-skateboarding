# Ramp Up Skateboarding

Astro site for Ramp Up, a for-profit youth skateboarding program serving the
Lancaster, PA area. The audience is parents of kids aged 5 to 14 who have never
skated. The site's job is to provide 30 minutes of informational content for parents 
with kids who want to learn to skateboard, and get a registration or an email address.

## Knowledge base

`docs/kb/` holds what we know about the business. **Load only what the task
needs.** These files exist so you don't have to load all of them.

| Working on | Read |
| :--- | :--- |
| Any copy at all | `docs/kb/brand-voice.md` |
| Writing or restructuring a page | `docs/kb/pages.md` |
| Program pages, levels, how kids progress | `docs/kb/programs.md` |
| Week-by-week lesson content, lesson plans, activities | `docs/kb/curriculum.md` |
| Group size, safety, venues, weather, gear | `docs/kb/operations.md` |
| Prices, registration, scholarships | `docs/kb/pricing.md` |
| About pages, origin story, growth numbers | `docs/kb/history.md` |
| Coach bios, the team page, who teaches | `docs/kb/team.md` |
| Legal shape, service area, who's who, partners | `docs/kb/business.md` |
| Skateboarding terminology | `docs/kb/terminology.md` |
| Anything that will be published | `docs/kb/content-rules.md` |
| Before stating any fact you're unsure of | `docs/kb/open-questions.md` |

## Hard rules

1. **Never invent a fact about this business.** If it isn't in `docs/kb/`, it is
   unknown. Check `open-questions.md`, then ask. Plausible-sounding copy about
   prices, safety, credentials, or outcomes is worse than a gap.
2. **Never publish anything in `content-rules.md` under "Do not publish."**
   That list exists because publishing those things causes real problems.
3. **No em dashes.** Anywhere. Copy, commit messages, PR descriptions, replies.
   Use a period, a comma, or a colon.
4. **Mark what you drafted.** If you propose a fact rather than sourcing one,
   label it so the next reader can tell the difference.
5. **This repository is public.** Anything written into `docs/kb/` is published
   the moment it is pushed. Never record a rate card, a unit cost, an insurance
   policy number, a home address, a credential, or anything else Mike would not
   put on the website. When a task needs a confidential figure, ask for it in
   the conversation and keep it out of the files.

## Provenance convention

Plain statements in `docs/kb/` came from Mike or Christine directly. Anything
marked `[proposed]` is a suggestion from a previous session that has not been
confirmed. Never present a `[proposed]` line as established fact, and never
strip the marker without Mike confirming it.

When you learn something new from Mike or Christine, add it to the right file
in `docs/kb/` in the same pass. The knowledge base going stale is the main way
this system fails.

## Editing content

`docs/editing-content.md` is the guide for whoever is writing the site's copy:
menus, page layout, every component's props, embeds, and the content
collections. **If you change a component's props, a data file's shape, or the
way pages are laid out, update that guide in the same pass.** It is written for
someone who knows HTML and not Astro, so keep it concrete and keep the examples
copy-pasteable.

`docs/design-system.md` is the original design handoff: tokens, motifs, and the
intent behind the three designed pages.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Run `npm run build` before committing. It runs `astro check` first and catches
missing imports, malformed frontmatter, and bad component props.

## Component gallery

`/dev` renders one component at a time, off the page it normally lives on, with
width and background controls. Dev only, and it has no production footprint.

Adding a component to it is one file: drop an `.astro` file in
`src/dev/stories/` and it appears in the sidebar. `src/dev/registry.ts`
documents the optional `meta` export (title, group, description, background,
width, order).

## Documentation

Full Astro documentation: https://docs.astro.build

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)
