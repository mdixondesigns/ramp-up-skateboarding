# Handoff: Ramp Up Skateboarding — website redesign (Home, Parent Resources, Article)

## Overview
Ramp Up is a mobile youth skateboarding nonprofit serving the Greater Lancaster, PA area (ages 5–14). The
primary audience is **parents of complete beginners** — the design's whole job is to remove the two barriers
those parents have: "we don't own a board" and "is this safe?" Every page repeats that gear is provided free,
helmets are required, and coaches are certified and background-checked. The primary conversion action is the
email list ("Get clinic dates by email"), not a purchase.

Three pages are included:
1. **Home** — hero, "what a first day looks like", gear-borrowing callout, philosophy band, clinic calendar,
   parent testimonials, partner logos, email signup, footer.
2. **Parent Resources** (index) — quick answers, featured guide, guide grid with category filters,
   downloadable PDFs, FAQ.
3. **Article** (sample guide: "Buying your kid's first skateboard") — long-form template with sticky sidebar.

## About the Design Files
The files in `design-files/` are **design references written in HTML** — prototypes showing the intended look,
copy, and behavior. They are **not production code to copy directly.**

The task is to **recreate these designs in the existing Astro site**, using its established patterns:
`.astro` components, its layout(s), its styling approach (Tailwind, scoped `<style>`, or CSS modules —
whichever the repo already uses), its image handling (`astro:assets` / `<Image>`), and its content
collections for the Parent Resources articles.

### Reading the design files
- The `.dc.html` files are a prototyping format. Open them in a browser to see the rendered design — they run
  from `design-files/` with no build step (keep `support.js` and the `assets/` + `uploads/` folders alongside).
- To read them as source, the markup lives between `<x-dc>` and `</x-dc>`. **All styling is inline `style=""`
  on each element** — that's a constraint of the prototyping tool, not a design intent. In Astro, extract the
  repeated values into tokens/utility classes (see Design Tokens below).
- `Ramp Up Home.dc.html` contains **three design explorations** (`#3b`, `#3a`, and earlier ones) stacked
  vertically, each with a small badge label above it. **Only `#3b` — the first/top one — is the approved
  design.** Ignore everything below it. The badge/label chrome above each variant is scaffolding, not part of
  the page.
- The `sc-if` tags and `{{ }}` holes in the Parent Resources and Article files are prototype-only toggles
  (show/hide the downloads, FAQ, and "read next" sections). Treat those sections as always-present in Astro.
- The small `class Component extends DCLogic` block at the bottom of each file is only the parallax scroll
  handler. See **Interactions** for what to reimplement.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, and copy are final and should be matched closely.
Exact hex values and sizes are listed below and are also present inline in the HTML. Copy is approved
placeholder-realistic — see **Content still needed**.

## Suggested Astro structure
This is a suggestion; defer to the repo's existing conventions.

```
src/
  layouts/BaseLayout.astro        # <head>, fonts, header, footer
  components/
    SiteHeader.astro             # logo chip + nav + yellow CTA
    SiteFooter.astro             # ply-stripe top edge + 4-col link grid
    PlyStripe.astro              # the 14px wood-layer edge (used ~6x)
    EmailSignupBand.astro        # yellow "Join the movement" block
    StepCard.astro               # numbered card, 3x on home
    ClinicRow.astro              # one calendar row
    TestimonialCard.astro
    PartnerGrid.astro
    GuideCard.astro              # Parent Resources grid card
    QuickAnswerCard.astro
    ArticleCallout.astro         # numbered list rows, pull quote, tip box
  content/
    guides/                      # content collection: one .md/.mdx per article
  pages/
    index.astro
    parent-resources/index.astro
    parent-resources/[slug].astro
```

The Article page should be driven by a **content collection** (`guides`) with frontmatter:
`title, category, excerpt, heroImage, heroAlt, author, authorAvatar, updated, readingTime, toc[]`.
Categories used: `Getting started`, `Safety & gear`, `At the clinic`, `Keeping it going`.

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `paper` | `#FAFAF8` | default page background, cards on dark |
| `paper-alt` | `#F3F1EC` | alternating section background (clinics, FAQ cards) |
| `white` | `#FFFFFF` | card surfaces on `paper` |
| `ink` | `#2E2A28` | body text, dark sections, logo chip |
| `ink-deep` | `#232120` | testimonial band + footer background |
| `ink-70` | `#56504A` | secondary body text on light |
| `ink-55` | `#79726A` | captions, tertiary meta on light |
| `ink-50` | `#6E675F` | eyebrow labels on light |
| `cream` | `#F5F2EE` | text on dark backgrounds |
| `cream-dim` | `#DDD8D2` | body text on dark |
| `cream-dimmer` | `#BAB3AB` / `#ABA49C` | tertiary text on dark |
| `yellow` | `#F0B93F` | **the one loud accent** — all primary CTAs, eyebrows on dark |
| `cyan` | `#6EE0F2` | brand accent 1 |
| `pink` | `#EF87A6` | brand accent 2 |
| `green` | `#63DD86` | brand accent 3 |
| `gold` | `#C6A24A` | brand accent 4 (ply stripe, muted shapes) |
| `alert` | `#C4362F` | "3 spots left" badge background (white text) |
| `open-bg` / `open-fg` | `#D8F5DF` / `#2C6B3E` | "Open" status pill |
| `star` | `#E0A21C` | Google review stars |

Category label colors (darkened brand hues, AA-compliant on white):
`Getting started` `#2C7F94` · `Safety & gear` `#C4677F` · `At the clinic` `#2C6B3E` · `Keeping it going` `#8A6A16`

**Rule:** never use raw `cyan`/`pink`/`green` for text on light backgrounds — they fail contrast. They are
for shapes, pattern fills, avatar rings, and icon circles only. Text on those colors is always `ink`.

### Typography
Google Fonts: **Baloo 2** (600/700/800) for all headings; **Nunito Sans** (400/600/700) for body/UI.
Body `line-height: 1.62`; headings `1.02–1.18`. `text-wrap: balance` on h1/h2 hero headings.

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero h1 (home) | Baloo 2 | 76px | 800 | lh 1.02 |
| Hero h1 (resources) | Baloo 2 | 66px | 800 | lh 1.04 |
| Article h1 | Baloo 2 | 62px | 800 | lh 1.04, max-width 20ch |
| Section h2 | Baloo 2 | 48–54px | 800 | lh 1.06 |
| Sub-section h2 | Baloo 2 | 36–38px | 800 | article body + "All guides" |
| Card h3 | Baloo 2 | 22–26px | 700 | |
| Hero lede | Nunito Sans | 20–21px | 400 | lh 1.55, max-width 44–46ch, `cream-dim` |
| Article standfirst | Nunito Sans | 22px | 600 | color `#3D3835` |
| Article body | Nunito Sans | 19px | 400 | max-width 68ch, 26px bottom margin |
| Card body | Nunito Sans | 16px | 400 | `ink-70` |
| Eyebrow / kicker | Nunito Sans | 13–14px | 700 | uppercase, letter-spacing 0.10–0.12em |
| Nav / buttons | Nunito Sans | 15–18px | 700 | |
| Caption | Nunito Sans | 15px | 400 | `ink-55` |

### Spacing & shape
- Design width **1280px** (the prototype is fixed-width; the real site should be fluid with a 1280px max
  content container — see Responsive).
- Section padding: `84px 56px` vertical/horizontal standard; hero `74px 56px 82px`; footer `56px`.
- Full-bleed rounded blocks (dark band, yellow CTA) sit inset with `margin: 0 40px 84px` and `border-radius: 44px`.
- Radii: `44px` big blocks · `36px` big photo cards · `26–28px` cards · `22–24px` list rows/inset panels ·
  `20px` partner tiles · `999px` pills, buttons, inputs.
- Card shadow: `0 1px 0 rgba(46,42,40,0.08), 0 12px 28px rgba(46,42,40,0.05)`
  (clinic rows use `0 10px 24px rgba(46,42,40,0.05)`).
- Grid gaps: 26–28px for card grids, 20px partner tiles, 16px stacked rows, 56–64px for two-column splits.
- Buttons: primary = `yellow` bg, `ink` text, 700, `18px 32px`, pill. Secondary on dark =
  `2px solid rgba(250,250,248,0.4)`, `cream` text, pill. Text link = 700 with
  `border-bottom: 3px solid #F0B93F; padding-bottom: 2px`.

### Signature motifs (reuse these — they are the identity)
1. **Ply stripe** — a 14px horizontal band imitating skateboard plywood layers, used at the bottom of the
   hero, the bottom of big photo cards, the top of the footer, and as a 12px cap on testimonial cards:
   `linear-gradient(to bottom, #C9B79A 0 3px, #A8705A 3px 4px, #E6DCC9 4px 6px, #6E8299 6px 7px, #C9B79A 7px 10px, #C6A24A 10px 11px, #E6DCC9 11px 14px)`
   The layer order is deliberately shuffled between instances so repeats don't look mechanical. Ship this as
   one component with a variant/seed prop.
2. **Wheel dots** — a filled circle inside a larger circle (a skate wheel), used as list bullets, the badge
   icon, calendar row markers, and the row of four `26px` dots above the yellow CTA heading.
3. **Skatepark patterns** — two SVGs in `assets/`:
   - `skatepark-blocks.svg` — solid isometric tessellation. Used in the hero at `background-size: 415.68px 360px`, `opacity: 0.42–0.55`, with a directional `mask-image` linear-gradient so it fades out behind the headline.
   - `skatepark-tile.svg` — wireframe isometric park modules. Used on dark bands and the footer at `background-size: 400px 380px`, `opacity: 0.22–0.4`, with a radial `mask-image` so it concentrates in one corner.
   Both are decorative; give them `aria-hidden`/CSS-background treatment, never `<img>` with alt text.
4. **Card top caps** — each card's top edge is a colored band with a texture: dotted (`radial-gradient` 14px),
   diagonal hatch (`repeating-linear-gradient` 135deg), concentric arcs (`repeating-radial-gradient`), or
   checker (`linear-gradient` 45deg, 18px). Achieved by negative horizontal margins on a child div inside an
   `overflow: hidden` card.

---

## Screens

### 1. Home (`src/pages/index.astro`)
Reference: `design-files/Ramp Up Home.dc.html`, variant `#3b` only.

**Header** (all pages, sticky is optional — prototype is static): `16px 56px`, `paper` bg,
`1px solid rgba(46,42,40,0.08)` bottom border. Left: logo on an `ink` chip, `border-radius: 18px`,
`padding: 10px 18px`, logo `height: 50px`. Center: nav — Programs · About us · Get involved ·
Parent Resources · Contact, 15px/700, each `9px 16px` pill. Active page = `ink` bg, `cream` text.
Right: yellow pill CTA "Get clinic dates by email", 15px/700, `13px 24px`.

**Hero**: 700px-tall photo (`uploads/photos-1785844174680.jpg`), `object-fit: cover`, over `ink`.
Overlays, in order: left-to-right darkening gradient
(`rgba(35,32,30,0.94)` → `0.74` at 46% → `0.05` at 82%), then the blocks pattern (parallax, speed 0.28),
then content at `left: 56px; bottom: 76px; width: 680px`. Content: location pill (translucent
`rgba(250,250,248,0.12)` + `1px` border, wheel dot in cyan, "GREATER LANCASTER, PA · AGES 5–14"),
h1 "Never touched a board? Perfect.", lede, then two buttons. Ply stripe pinned to the bottom edge.

**"What a first day actually looks like"**: centered h2 50px + 18px sub, then a 3-column grid of white
cards, `border-radius: 28px`, `padding: 0 34px 38px`. Each card: 78px colored textured cap (cyan dotted /
pink hatch / yellow arcs), an 80px white circle overlapping the cap's bottom edge by 38px containing a 52px
colored circle with the step number (Baloo 2 800, 27px), then h3 26px and 16px body.

**Gear callout**: full-width photo card (`uploads/photos/radnor-44.jpg`, 560px), inset `0 40px`,
`border-radius: 36px`, left-to-right dark gradient, text block at `left: 56px`, vertically centered, 520px
wide: yellow eyebrow "GEAR INCLUDED", h2 46px "We bring 40 boards. Yours to borrow.", 19px body, yellow
button. Ply stripe on the bottom edge.

**Philosophy band**: `ink` block, inset `0 40px`, `border-radius: 44px`, `padding: 80px 56px`, tile pattern
masked to the bottom-right. Two equal columns: left = yellow eyebrow + h2 48px + 18px body; right = three
`rgba(245,242,238,0.08)` rows, `border-radius: 22px`, each a 42px colored wheel circle + 17px/700 label.

**Next free clinics**: `paper-alt` background with **six parallax decorative shapes** (circles, a quarter-pipe
triangle, a ring, a half-pill) in brand colors at `opacity 0.16–0.24`, `data-parallax` speeds 0.35–1.5,
positioned absolutely and clipped by `overflow: hidden`. Foreground: h2 48px left, "See all dates & register"
link right; then three white rows, `border-radius: 26px`, `padding: 24px 32px`, grid
`56px 132px 1fr 200px 150px`: wheel marker, date (Baloo 2 800, 25px), venue (18px/700), time + age range
(16px `ink-55`), status pill right-aligned. Status variants: red "3 spots left", green "Open", outlined
"Waitlist". Footnote: registration handled by Sawyer, pre-registration required.

**Testimonials**: `ink-deep` band with a `#F0B93F` dot grid at `opacity: 0.14`, `22px` spacing. Centered h2,
then 3 `paper` cards with a 12px ply cap, 18px quote, and an avatar row: 54px circle with a 3px colored
border containing an inline SVG portrait, plus the reviewer's name. Below: a `paper` pill link to Google
reviews with five `#E0A21C` stars and a ↗ glyph. The three quotes are real; keep them verbatim.

**Partner logos**: eyebrow, then a 5-column × 2-row grid of 116px tiles, `border-radius: 20px`, white with
`1px solid rgba(46,42,40,0.1)`, logo `max-height` tuned per logo (34–66px). **Two tiles are `ink` bg**
(Lancaster REC, Radnor) because those logos are white-on-transparent. Logos in `assets/partners/`.

**Email signup**: yellow block, inset `0 40px`, `border-radius: 44px`, `padding: 76px 56px`, centered. Four
26px `ink` dots, h2 54px "Join the movement", 19px body, then a 580px row: pill email input (white) +
`ink` pill "Sign up" button. Fine print below.

**Footer**: `ink-deep`, `padding: 56px`, ply stripe bleeding across the top edge, tile pattern masked to the
top-right. Grid `1.4fr 1fr 1fr 1fr`: logo (92px) + one-line description, then Programs / About us /
Get involved link columns with uppercase 13px headings. Copyright line at the bottom.

### 2. Parent Resources index (`src/pages/parent-resources/index.astro`)
Reference: `design-files/Ramp Up Parent Resources.dc.html`.

- **Hero**: short `ink` band (`74px 56px 82px`) with the blocks pattern masked from the right (parallax 0.25).
  Yellow eyebrow, h1 66px "Everything you were going to ask at drop-off", 20px lede. Ply stripe bottom.
- **Quick answers**: h2 38px + 4-column grid of white cards with 62px textured caps (cyan dotted / pink hatch /
  yellow arcs / green checker), h3 22px, 16px body.
- **Featured guide**: full-width 480px photo card, `border-radius: 36px`, dark left gradient, yellow "START HERE"
  pill, h2 46px, 19px body, `paper` button "Read the guide". Whole card is one link. Ply stripe bottom.
- **All guides**: h2 38px left; filter chips right — active chip = `ink` fill, others `2px solid rgba(46,42,40,0.14)`
  outlined pills. 3-column card grid: 190px photo, then `24px 28px 28px` body with a colored uppercase category
  label, h3 23px, 16px excerpt, and a yellow-underlined "N min read".
- **Downloads**: `ink` block, `border-radius: 44px`, tile pattern bottom-right, `1fr 1.15fr` split — left text,
  right three translucent rows each with a colored wheel circle, title + meta, and a `#F0B93F` ↓ glyph.
- **FAQ**: centered h2 44px + sub, then a 2-column grid of `paper-alt` cards, `border-radius: 24px`,
  `padding: 26px 30px`, h3 21px + 16px answer. Six items.
- **Signup band + footer**: same as Home; the heading here is "Still have a question?".

### 3. Article template (`src/pages/parent-resources/[slug].astro`)
Reference: `design-files/Ramp Up Article.dc.html`.

- **Hero**: 520px photo, bottom-up dark gradient (`0.95` at 8% → `0.15` at top), blocks pattern (parallax 0.22)
  masked from the top-left. Content pinned `bottom: 62px`: breadcrumb ("Parent Resources / CATEGORY" — category
  in yellow uppercase), h1 62px max 20ch, then a byline row: 44px avatar with a cyan ring, author name,
  `Updated <Month Year>`, `N min read`, separated by dim `·`. Ply stripe bottom.
- **Body layout**: `grid-template-columns: 1fr 300px`, `gap: 64px`, `padding: 72px 56px 84px`,
  `align-items: start`.
- **Article column** (`max-width: 68ch`): 22px/600 standfirst, then 19px paragraphs with 26px bottom margin.
  h2s are Baloo 2 800 36px with `44px 0 16px` margins. Body element types to support in the collection:
  - **Spec card** — white, `border-radius: 28px`, 12px ply cap, h3 24px, then `120px 1fr` rows pairing a colored
    Baloo 2 label with 17px description (used here for deck sizing by age).
  - **Numbered points** — stacked `paper-alt` rows, `border-radius: 22px`, 38px colored numbered circle + 17px
    text with a bold lead-in.
  - **Pull quote** — `ink` block, `border-radius: 32px`, tile pattern, Baloo 2 700 27px quote in `cream`.
  - **Figure** — `border-radius: 28px` image + 15px `ink-55` caption.
  - **Inline CTA** — yellow block, `border-radius: 30px`, `padding: 32px 38px`, h3 27px + 17px body left,
    `ink` pill button right.
- **Sidebar** (300px, `position: sticky; top: 24px`): white "In this guide" card with TOC links each carrying a
  3px colored left border (cyan/pink/yellow/green in order), then an `ink` "The short version" card with a
  yellow pill CTA.
- **Read next**: h2 38px + 3 guide cards (same card as the index, 180px photos).
- **Signup band + footer**: same as Home.

---

## Interactions & Behavior
- **Nav / links**: no hover treatment is specified in the prototype beyond the pill shapes. Add a subtle one —
  suggestion: nav items get `background: rgba(46,42,40,0.06)`; the yellow CTA darkens ~6%; cards lift with
  `transform: translateY(-2px)` and a slightly stronger shadow. Keep transitions ≤180ms ease-out.
- **Parallax**: elements marked `data-parallax="<speed>"` translate vertically with scroll. The prototype's
  formula, per element, on scroll (passive listener) and once on mount:
  ```js
  const offset = (rect.top + rect.height / 2 - viewportHeight / 2) * -0.12 * speed;
  el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  ```
  Speeds in use: hero patterns 0.22–0.28; clinic-section shapes 0.35 / 0.5 / 0.7 / 0.9 / 1.2 / 1.5. Skip
  elements more than one viewport off-screen; set `will-change: transform`. **Wrap the whole effect in
  `prefers-reduced-motion: no-preference`** and ship the static layout otherwise. In Astro this belongs in a
  small client-side script (`<script>` in the layout) — no framework island needed.
- **Email signup**: not wired in the prototype. Point it at whatever list provider Ramp Up uses; on submit
  show an inline success state in place of the input row ("You're on the list — first clinic email comes
  Monday.") and validate for a plausible email before submitting.
- **Filter chips** (Parent Resources): static in the prototype. Implement as links to
  `/parent-resources/category/<slug>` (static generation, best for SEO) or as a small client-side filter over
  the pre-rendered card grid.
- **FAQ**: presented as an always-open card grid, not an accordion. Keep it that way — parents scan.
- **Google reviews link**: opens in a new tab with `rel="noopener noreferrer"`. Replace the placeholder
  `maps/search` URL with the real Google Business profile link.

## State Management
Essentially none. The only stateful pieces are the newsletter form (idle / submitting / success / error) and
the optional client-side category filter (selected category). Everything else is static content — build with
Astro's static output and content collections; no client framework required.

## Responsive behavior
The prototype is fixed at 1280px and was not designed responsively. Recommended adaptation:
- Content max-width 1280px, centered; side padding drops `56px → 32px → 20px` at ~1024px and ~640px.
- Inset rounded blocks: `margin: 0 40px` → `0 20px` → `0 12px`; radii `44px → 28px`.
- Grids: 4-col → 2-col → 1-col; 3-col → 2-col → 1-col.
- Clinic rows: the 5-column grid becomes a stacked card at <900px (date + venue on one line, time + status below).
- Article: sidebar drops below the hero as a collapsed "In this guide" summary at <1000px; body stays 68ch.
- Hero type scales down: 76px → 52px → 38px; section h2 48px → 34px → 28px. Never below 16px body.
- Nav collapses to a hamburger under ~980px; keep the yellow CTA visible in the collapsed bar.

## Accessibility notes (already satisfied — please preserve)
- All dark-on-light and light-on-dark text pairs meet WCAG AA. Category label colors were darkened
  specifically for this; don't revert them to the bright brand hues.
- The pattern SVGs and decorative shapes are background-only and must stay out of the accessibility tree.
- Photos have descriptive alt text in the prototype — carry it over rather than writing new alt text.
- The status pills convey meaning by color *and* text ("3 spots left" / "Open" / "Waitlist"), keep both.
- Focus states are not designed. Add a visible focus ring — suggestion: `outline: 3px solid #2C7F94;
  outline-offset: 2px` on light, `#F0B93F` on dark.

## Assets
In `design-files/`:
- `assets/skatepark-blocks.svg`, `assets/skatepark-tile.svg` — the two custom pattern tiles. Purpose-built for
  this design; ship as-is.
- `assets/partners/` — 11 partner logos (DCNR, Lancaster REC, Lititz, Millersville, Phoenixville Rec,
  Keystone Kidspace, Let's Go 123, Root Down Brewing, West Art, Radnor, Lancaster City). Provided by the
  client. `lancaster-city.svg` is **not yet placed on the page** — a PNG version is still needed.
- `uploads/design_insp/brand_colors/RampUpLogo_v06_wheels.png` — the logo used in the header and footer. Ask
  the client for an SVG before launch.
- `uploads/photos/` and `uploads/photos-1785844174680.jpg` — client photography. Run through `astro:assets`
  for responsive sizes and modern formats; the hero images are large and currently unoptimized.
- Fonts: Baloo 2 and Nunito Sans from Google Fonts. Prefer self-hosting (e.g. Fontsource) with
  `font-display: swap` over the CDN link.
- Testimonial avatars are hand-built inline SVG portraits (deliberately non-photographic, varied face shapes
  and skin tones, with jewelry details). Copy the SVG markup verbatim from the home page file.

## Content still needed from the client
- Real clinic dates, venue names, times, age ranges, and live registration URLs (Sawyer).
- The Lancaster City logo as a PNG, plus confirmation of the two logos that need dark tiles.
- The three remaining Parent Resources guides are outlined by title/excerpt only — only "Buying your kid's
  first skateboard" has full body copy.
- Real waiver / checklist / gear-list PDFs for the downloads band.
- The live Google Business reviews URL.

## Files
| File | Contains |
|---|---|
| `design-files/Ramp Up Home.dc.html` | Home page — **use variant `#3b` (top) only** |
| `design-files/Ramp Up Parent Resources.dc.html` | Parent Resources index |
| `design-files/Ramp Up Article.dc.html` | Article template + sample guide |
| `design-files/support.js` | Prototype runtime — needed only to view the files in a browser; do not port |
| `design-files/assets/`, `design-files/uploads/` | Patterns, partner logos, logo, photography |
