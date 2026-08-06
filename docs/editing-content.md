# Editing the Ramp Up site

A guide for someone who knows HTML but has never touched Astro.

Nothing here requires you to write JavaScript. If you can read HTML, you can
edit every page on this site. There are about six Astro-specific rules that will
trip you up, and they're all in [Ten things that will bite you](#12-ten-things-that-will-bite-you) —
skim that section once before your first edit and you'll save yourself an hour.

---

## Contents

1. [Getting set up](#1-getting-set-up)
2. [How the site is organized](#2-how-the-site-is-organized)
3. [Anatomy of a page file](#3-anatomy-of-a-page-file)
4. [Editing the menus](#4-editing-the-menus)
5. [Laying out a page](#5-laying-out-a-page)
6. [The component reference](#6-the-component-reference)
7. [Writing standard page copy](#7-writing-standard-page-copy)
8. [Embeds and iframes](#8-embeds-and-iframes)
9. [Guides and community updates](#9-guides-and-community-updates)
10. [The data files](#10-the-data-files)
11. [Images](#11-images)
12. [Ten things that will bite you](#12-ten-things-that-will-bite-you)
13. [Recipes](#13-recipes)
14. [Before you publish](#14-before-you-publish)
15. [Every TODO still open](#15-every-todo-still-open)

---

## 1. Getting set up

Start the site on your own machine:

```bash
npm run dev
```

That prints a local address (`http://localhost:4321`). Leave it running — every
time you save a file, the browser updates by itself. You do not need to rebuild
or refresh.

Before you commit anything, run:

```bash
npm run build
```

This is your safety net. It catches typos that would break a page — a missing
import, a misspelled property name, a date in the wrong format. **If the build
passes, the site works.** If it fails, it tells you the file and line number.
Read the first error only; the rest are usually knock-on effects of the same
mistake.

### The component gallery

```
http://localhost:4321/dev
```

Every component on the site, one at a time, on its own, with controls for screen
width and background color. Use it to see what a component looks like before you
put it on a page, and to check your copy at phone width. It only exists while
you're running the site locally — it is not part of the published site.

---

## 2. How the site is organized

Content lives in three different kinds of place, and knowing which one you want
is most of the battle.

| You want to change | Look in | Format |
|---|---|---|
| Words and layout on a specific page | `src/pages/` | `.astro` |
| A guide article or community update | `src/content/` | `.md` / `.mdx` |
| A list that appears in several places | `src/data/` | `.ts` |
| A reusable block of design | `src/components/` | `.astro` |
| Colors, type sizes, spacing | `src/styles/tokens.css` | CSS |

**Pages** map to URLs by their file path. `src/pages/about/team.astro` is
`/about/team`. Create a file, you've created a page; rename it, you've changed
the URL. `index.astro` is the folder's own page — `src/pages/programs/index.astro`
is `/programs`.

**Data files** are lists — clinics, testimonials, partner logos, navigation.
They're `.ts` files, but you only ever edit the list at the bottom, and it reads
like a spreadsheet written sideways. Nothing in them requires programming.

**Components** are the design system. You almost never edit these while doing a
content pass — you arrange them and fill them in.

---

## 3. Anatomy of a page file

Every `.astro` page has the same three parts:

```astro
---
// 1. THE FRONTMATTER — between the two --- fences.
//    Imports, and any lists the page needs. This never appears on screen.
import BaseLayout from "../../layouts/BaseLayout.astro";
import StatBand from "../../components/StatBand.astro";
---

<!-- 2. THE TEMPLATE — this is just HTML, plus components. -->
<BaseLayout title="Our History" description="How Ramp Up started.">
  <section class="section">
    <div class="container">
      <h1>It started with a question</h1>
      <p>Christine and Mike have been married for 11 years…</p>
    </div>
  </section>

  <StatBand
    heading="Growth so far"
    stats={[{ value: "400+", label: "skaters served in 2025" }]}
  />
</BaseLayout>

<style>
  /* 3. THE STYLES — optional, and scoped to this page only. */
  h1 {
    margin-bottom: 18px;
  }
</style>
```

Three things to internalize:

**The `---` fences are not content.** Everything between them is setup. If you
add a component to the template, you must also add its `import` line up top, or
the page breaks. The error message when you forget is clear about it.

**The template is HTML.** It's `class`, not `className`. `<br>` works. Entities
like `&mdash;` and `&rsquo;` work. Components look like HTML tags but start with
a capital letter, and self-closing ones need the slash: `<PartnerGrid />`.

**`<style>` only affects this page.** A rule you write in `about/team.astro`
cannot leak onto another page. This is a feature — you can't break anything else
from inside a page file. The flip side: styles you want everywhere have to go in
`src/styles/global.css`.

### Curly braces mean "this is a value, not text"

```astro
<StatBand heading="Growth so far" tone="dark" />
```
Quotes for plain text.

```astro
<StatBand stats={[{ value: "90", label: "skaters in 2023" }]} />
```
Curly braces for anything that isn't plain text — lists, numbers, true/false.

```astro
<AccordionSection openFirst single />
```
A property on its own means "yes, turn this on."

---

## 4. Editing the menus

**One file controls both the header and the footer:** `src/data/navigation.ts`.
They're built from the same lists, so they can't drift apart.

### Adding or renaming a menu item

Find the list for the section you want:

```ts
const programsChildren: NavLink[] = [
  { href: "/programs/free-clinics", label: "Free Clinics" },
  { href: "/programs/calendar", label: "Calendar" },
  { href: "/programs/seasonal-sessions", label: "Seasonal Sessions" },
  { href: "/programs/private-lessons", label: "Private Lessons" },
];
```

Add a line in the same shape. `href` is the URL, `label` is what people see.
Keep the trailing comma. That one edit puts the link in the Programs dropdown
**and** the Programs footer column.

### The top-level sections

```ts
export const primaryNav: NavItem[] = [
  { href: "/programs", label: "Programs", children: programsChildren },
  { href: "/about", label: "About us", children: aboutChildren },
  …
  { href: "/contact", label: "Contact" },
];
```

Reorder these lines to reorder the header. A section **with** `children` gets a
dropdown; a section **without** (like Contact) is a plain link. Deleting
`children:` from a section turns its dropdown off.

### The footer

```ts
export const footerColumns = [
  { heading: "Programs", links: programsChildren },
  { heading: "About us", links: [...aboutChildren, { href: "/contact", label: "Contact" }] },
  { heading: "Get involved", links: [...getInvolvedChildren, ...socialLinks] },
];
```

`...aboutChildren` means "everything from that list, then these extras." So the
About footer column is the About dropdown plus a Contact link. Change a column
heading by editing `heading`.

### Social links

```ts
const socialLinks: NavLink[] = [
  { href: "https://www.instagram.com/rampupskate", label: "Instagram" },
  { href: "https://www.facebook.com/rampupskate", label: "Facebook" },
];
```

⚠️ **These URLs are guesses and need confirming.** They also appear separately on
the Contact page, which has its own placeholder links to fix.

### Guides appear in the menu automatically

Parent Resources lists every published guide in its dropdown without you adding
anything — publish a guide and it shows up. You don't maintain that list.

> Note in the file: once there are more than about a dozen guides, the dropdown
> stops being scannable and should be replaced with a link to the index. Worth
> remembering during a content push that adds a lot of guides.

### The header button

The yellow "Roll with us" button is in `src/components/SiteHeader.astro`, near
the bottom of the template. Change the visible text **and** the `aria-label`
(which spells out where it goes for screen-reader users) together.

---

## 5. Laying out a page

A page is a stack of sections. You arrange them by putting them in order in the
template — top of the file is top of the page.

```astro
<BaseLayout title="Free Clinics" description="…">
  <section class="section">…your own copy…</section>

  <TestimonialsSection heading="What first-timers are saying" />
  <EmailSignupBand />
</BaseLayout>
```

To move a section, cut and paste it. To remove one, delete it (and its `import`
line, or the build will warn that nothing uses it — harmless, but tidy up).

### Two kinds of section, and why it matters

This is the one structural thing that isn't obvious.

**Designed sections carry a class:**

```astro
<section class="section">
  <div class="container">…</div>
</section>
```

**Wireframe sections don't:**

```astro
<section>
  <div class="container">…</div>
</section>
```

A bare `<section>` gets automatic treatment from `src/styles/legacy.css`: section
padding, space above headings, a comfortable reading width on paragraphs, yellow
underlines on links. That's what holds the not-yet-designed pages together.

**The moment you add any class to a `<section>`, all of that switches off** and
you're responsible for its spacing yourself.

So: if you're writing ordinary copy on About, Get Involved, Contact, or
Programs, use a bare `<section>` and you get sensible defaults for free. Only add
a class when you intend to style it yourself.

Inside either kind, `<div class="container">` is what keeps content aligned with
the rest of the site. Always use it.

### Layout classes worth knowing

| Class | What it does |
|---|---|
| `container` | Centers content, max 1280px, correct side padding |
| `section` | Standard vertical padding (84px, less on phones) |
| `section--alt` | Puts the section on the warm off-white background |
| `inset` | For full-width rounded blocks that sit in from the page edge |
| `grid grid--2` / `grid--3` / `grid--4` | Card grids, collapsing to fewer columns on small screens |
| `grid cols-2` / `cols-3` | The same, for wireframe pages |
| `card` | White rounded card with the house shadow |
| `eyebrow` | Small uppercase label above a heading |
| `lede` | The larger intro paragraph under an `h1` |
| `button button--primary` | Yellow pill (the main action) |
| `button button--ink` | Dark pill |
| `button button--ghost` | Outlined, for use on dark photos |
| `link-underline` | Text link with the yellow underline |
| `todo` | Yellow dashed "not finished yet" note — visible on the site, so remove before launch |

### Alternating light and dark

Sections stack flush against each other. If a full-width **dark** section runs
straight into the **yellow** signup block, they read as one slab — so there's an
automatic rule that puts breathing room between them. It's driven by two classes:
`band-bleed` (a section whose color runs edge to edge) and `band-inset` (a color
block with rounded corners). The existing components already carry these. You
only need to know it exists if you build a new full-width colored section, in
which case give it `band-bleed`.

---

## 6. The component reference

Import each one at the top of your page, then use it in the template. Every
component below has a live example at `/dev`.

### Big sections

<a id="emailsignupband"></a>
#### `EmailSignupBand` — the yellow "Join the movement" block

```astro
import EmailSignupBand from "../components/EmailSignupBand.astro";

<EmailSignupBand />

<EmailSignupBand
  heading="Still have a question?"
  body="Email us and a coach answers — usually the same day."
  id="join-alt"
/>
```

| Property | Required | Notes |
|---|---|---|
| `heading` | no | Defaults to "Join the movement" |
| `body` | no | The sentence under the heading |
| `id` | no | The anchor people link to. Defaults to `join`, which is what `/#join` points at. Give a **second** band on the same page a different id. |

This is the site's main conversion point. It belongs at the bottom of most pages.
Not yet wired to MailerLite — see [Embeds](#8-embeds-and-iframes).

<a id="testimonialssection"></a>
#### `TestimonialsSection` — the dark band of parent quotes

```astro
<TestimonialsSection />
<TestimonialsSection heading="What first-timers are saying" showReviewsLink={false} />
```

| Property | Required | Notes |
|---|---|---|
| `heading` | no | Defaults to "What parents are saying" |
| `showReviewsLink` | no | `{false}` hides the Google reviews pill |

Pulls the three quotes marked `featured` in `src/data/testimonials.ts` — see
[The data files](#10-the-data-files) to change which three.

<a id="statband"></a>
#### `StatBand` — numbers as their own section

```astro
<StatBand
  eyebrow="Growth so far"
  heading="From one van to four hundred kids a year"
  stats={[
    { value: "90", label: "skaters served in 2023" },
    { value: "250+", label: "skaters served in 2024" },
    { value: "400+", label: "skaters served in 2025" },
  ]}
  note="Every one of them on a board we brought."
/>
```

| Property | Required | Notes |
|---|---|---|
| `stats` | **yes** | Each needs `value` and `label`. Optional `color` overrides the accent bar. |
| `tone` | no | `"dark"` (default) or `"light"` |
| `eyebrow`, `heading`, `body` | no | Leave all three off for numbers alone |
| `note` | no | Small print underneath |

Use `dark` when the numbers are the point of the page; `light` when they support
the writing around them. Three or four stats look best.

<a id="checkerboardsection"></a>
#### `CheckerboardSection` — alternating photo and text rows

The main tool for breaking up a text-heavy page.

```astro
import photoOne from "../assets/photos/rootdown-37.jpg";

<CheckerboardSection
  heading="The four pillars"
  sub="What we are actually teaching."
  rows={[
    {
      title: "Resilience",
      body: "Kids fall down learning to skate — a lot.",
      image: photoOne,
      imageAlt: "A coach holding a young skater's hand on a ramp",
      cta: { label: "See a clinic", href: "/programs/free-clinics" },
    },
  ]}
  background="alt"
/>
```

| Property | Required | Notes |
|---|---|---|
| `rows` | **yes** | Each needs `title`, `body`, `image`, `imageAlt`. Optional `cta` and `color`. |
| `heading`, `sub`, `eyebrow` | no | |
| `background` | no | `"paper"` (default) or `"alt"` |

Photos alternate sides automatically. **The image must be imported at the top of
the file** — see [Images](#11-images). Landscape photos work best. Three or four
rows is the sweet spot; more than five gets long.

<a id="accordionsection"></a>
#### `AccordionSection` — expand/collapse rows

```astro
<AccordionSection
  heading="Common questions"
  items={[
    { question: "What does a clinic cost?", answer: "Our community clinics are free." },
    { question: "What if it rains?", answer: "Wet ground means no session." },
  ]}
  openFirst
  single
  background="alt"
/>
```

| Property | Required | Notes |
|---|---|---|
| `items` | **yes** | Each needs `question` and `answer` |
| `openFirst` | no | Opens the first row so the pattern is obvious |
| `single` | no | Opening one closes the others |
| `heading`, `sub`, `eyebrow` | no | |
| `background` | no | `"paper"` or `"alt"` |

**When not to use it:** the Parent Resources FAQ is deliberately an always-open
grid, because parents scan rather than read. Reach for the accordion when the
answers are long or most readers only want one of them — not to tidy up a short
list of short answers.

<a id="videofeature"></a>
#### `VideoFeature` — a video beside a pitch for it

```astro
<VideoFeature
  videoId="eaulmma259M"
  videoTitle="Buzz About Ramp Up Skateboarding"
  eyebrow="Listen in"
  heading="Hear Coach Mike on the Buzz About Podcast"
  body="Take a deep dive into Ramp Up."
  cta={{ label: "More about us", href: "/about" }}
/>
```

| Property | Required | Notes |
|---|---|---|
| `videoId` | **yes** | Just the id, not the whole URL — see below |
| `videoTitle` | **yes** | Used for screen readers and the player |
| `heading` | **yes** | |
| `eyebrow`, `body`, `cta` | no | |
| `mediaSide` | no | `"right"` (default) or `"left"` |
| `posterUrl` | no | Overrides the thumbnail |

**Finding the video id:** in `https://www.youtube.com/watch?v=eaulmma259M`, the
id is everything after `v=` — `eaulmma259M`. From a share link
`https://youtu.be/eaulmma259M`, it's the part after the slash.

The thumbnail comes from YouTube automatically. The actual player doesn't load
until someone clicks play, which keeps the page fast.

<a id="partnergrid"></a>
#### `PartnerGrid` — the wall of partner logos

```astro
<PartnerGrid />
```

No properties. Edit the logos in `src/data/partners.ts`.

### Cards

<a id="sessioncard"></a>
#### `SessionCard` — one seasonal session

```astro
<div class="grid grid--3">
  <SessionCard
    name="Fall 2026 Skate Club"
    location="Lancaster Rec Center"
    ages="Ages 6-12"
    blurb="A multi-week progression session."
    image={sessionPhoto}
    imageAlt="A coach talking to kids on their boards"
    registerUrl="https://hisawyer.com/…"
  />
</div>
```

Leave `registerUrl` off (or empty) and the card shows "Registration opens soon"
instead of a button — so a session can go up before its Sawyer page exists,
without anyone landing on a dead link. Sessions are edited in the list at the top
of `src/pages/programs/seasonal-sessions.astro`.

<a id="stepcard"></a>
#### `StepCard` — the numbered "what a first day looks like" cards

```astro
<StepCard number={1} title="Show up empty-handed" color="var(--cyan)" texture="dots">
  Boards, helmets, and pads in every size come out of the van.
</StepCard>
```

The body text goes **between** the tags, not in a property. `color` takes a brand
color: `var(--cyan)`, `var(--pink)`, `var(--yellow)`, `var(--green)`. `texture`
is `"dots"`, `"hatch"`, `"arcs"`, or `"checker"` — vary it between cards.

<a id="guidecard"></a>
#### `GuideCard`, `TestimonialCard`, `ClinicRow`

These three fill themselves in from content and data files, so you rarely place
them by hand. `GuideCard` takes a `guide`, `TestimonialCard` a `testimonial`,
`ClinicRow` a `clinic`. See them at `/dev`.

### Article body blocks

These are for **inside a guide article**, not for pages. See
[Guides](#9-guides-and-community-updates). All five are on one page at
`/dev/article-blocks`.

<a id="speccard"></a>
#### `SpecCard` — a titled card of label/description pairs

```astro
<SpecCard
  title="Sizing by age"
  rows={[
    { label: "Ages 5–7", body: "7.0–7.5″ deck." },
    { label: "Ages 8–11", body: "7.5–7.75″." },
  ]}
/>
```

<a id="numberedpoints"></a>
#### `NumberedPoints` — a numbered list with bold lead-ins

```astro
<NumberedPoints
  points={[
    { lead: "Start with the helmet.", body: "The one thing we won't let a kid skate without." },
    { lead: "Then the deck.", body: "A shop complete beats a big-box board every time." },
  ]}
/>
```

<a id="pullquote"></a>
#### `PullQuote` — a dark block with a big quote

```astro
<PullQuote>
  The board sold next to the scooters looks like the board in the skate shop. It isn't.
</PullQuote>
```

<a id="figure"></a>
#### `Figure` — a photo with a caption

```astro
<Figure src={gearPhoto} alt="Four kids comparing boards" caption="Every board here is a loaner." />
```

<a id="inlinecta"></a>
#### `InlineCta` — a yellow call-to-action mid-article

```astro
<InlineCta
  heading="Not sure yet? Come try ours."
  body="Free clinics, all gear provided."
  href="/programs/free-clinics"
  label="See clinic dates"
/>
```

### Decorative pieces

You'll rarely place these yourself, but they're what makes the site look like
itself: `PlyStripe` (the wood-layer edge), `WheelDot` (the skate-wheel ring),
`CardCap` (the textured band on a card's top edge), `PatternOverlay` (the
skatepark pattern on dark blocks), `Avatar` (the hand-drawn portraits). All on
`/dev/motifs`.

---

## 7. Writing standard page copy

For a normal content page, use a bare `<section>` and write HTML:

```astro
<section>
  <div class="container">
    <p class="eyebrow">About &rsaquo; Our Philosophy</p>
    <h1>Our Mission</h1>
    <p class="lede">
      To build confident, resilient kids by providing a welcoming entry point
      to skateboarding.
    </p>

    <h2>Our Vision</h2>
    <p>
      To use skateboarding as a catalyst for building resilience, creativity,
      and confidence.
    </p>

    <ul>
      <li>Boards and safety gear are provided.</li>
      <li>Certified instructors run small-group coaching.</li>
    </ul>

    <p>
      <a class="button button--primary" href="/contact">Get in touch &rarr;</a>
    </p>
  </div>
</section>
```

You get, automatically: section padding, space above every heading, a comfortable
reading width (68 characters), and the yellow underline on inline links.

### The copy pattern each page follows

```
eyebrow  →  Breadcrumb-ish label: "Programs › Free Clinics"
h1       →  One per page, the page's actual title
lede     →  One or two sentences, larger type
h2       →  Section headings
p        →  Body copy
```

### Typographic characters

Use the proper characters — the design assumes them:

| Write | Get | For |
|---|---|---|
| `&mdash;` | — | Em dash |
| `&ndash;` | – | Number ranges: ages 5&ndash;14 |
| `&rsquo;` | ' | Apostrophes: don&rsquo;t |
| `&ldquo;` `&rdquo;` | " " | Quotation marks |
| `&rsaquo;` | › | Eyebrow breadcrumbs |
| `&rarr;` | → | Arrows on links |

You can also paste the real characters directly — both work. Be consistent within
a file.

### Adding a whole new page

Create the file, and it exists:

```astro
---
// src/pages/programs/summer-camp.astro  →  /programs/summer-camp
import BaseLayout from "../../layouts/BaseLayout.astro";
import EmailSignupBand from "../../components/EmailSignupBand.astro";
---

<BaseLayout
  title="Summer Camp"
  description="A one-sentence summary — this is what Google shows."
>
  <section>
    <div class="container">
      <p class="eyebrow">Programs &rsaquo; Summer Camp</p>
      <h1>Five mornings, one skatepark.</h1>
      <p class="lede">The intro sentence.</p>
    </div>
  </section>

  <EmailSignupBand />
</BaseLayout>
```

Count the `../` carefully — it's one `../` per folder deep. A page in
`src/pages/` uses `../layouts/`; one in `src/pages/programs/` uses
`../../layouts/`. Copy an existing page in the same folder and you'll get it
right by default.

Then add it to `src/data/navigation.ts` or nothing will link to it.

`title` and `description` matter: they're the browser tab, the Google result, and
the preview card when someone shares the link.

---

## 8. Embeds and iframes

### Sawyer (registration)

All registration runs through Sawyer. Right now every Sawyer spot on the site
shows a yellow placeholder box.

**To go live, you edit one file:** `src/components/SawyerEmbed.astro`. Replace
the placeholder `<div>` with the embed code from your Sawyer portal
(My Account → Settings → Self-Embed Widgets). Every page using it updates at once.

```astro
<!-- src/components/SawyerEmbed.astro, replacing the placeholder div -->
<div class="sawyer-embed">
  <!-- paste Sawyer's snippet here, exactly as they give it -->
</div>
```

Where it appears: `/programs/free-clinics` (clinic list) and `/programs/calendar`
(unified calendar). Each passes a `label` describing which widget belongs there.

Seasonal Sessions deliberately does **not** use an embed — those cards link out
to Sawyer instead, via each session's `registerUrl`.

> Sawyer's widget builder can pre-filter a calendar to specific locations, but a
> single embed has no visitor-facing "filter by town" toggle. If you want
> per-town filtering, the practical route is one location-filtered widget per
> town, each in its own section of the calendar page.

### MailerLite (the email signup)

The yellow signup block is styled and validates addresses, but doesn't send
anywhere yet. In `src/components/EmailSignupBand.astro`, either point the
`<form>` at your MailerLite embedded-form endpoint (Integrations → Embedded
forms), or replace the whole `<form>` with their snippet. Styling and layout
already match the design, so only the destination changes.

### YouTube

Don't paste a YouTube iframe. Use [`VideoFeature`](#videofeature) with the video
id — you get the site's styling, and the player only loads when someone clicks,
which keeps the page fast.

### Any other embed

For a map, a form, a calendar — anything that hands you an `<iframe>` — wrap it
so it scales properly instead of dropping in the raw tag:

```astro
<section class="section">
  <div class="container">
    <div class="embed-frame">
      <iframe
        src="https://example.com/whatever"
        title="Say what this is — required for screen readers"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</section>

<style>
  .embed-frame {
    position: relative;
    aspect-ratio: 16 / 9;      /* 4 / 3 for maps, or set a fixed height */
    border-radius: var(--r-card);
    overflow: hidden;
  }

  .embed-frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
```

Three rules for any embed:

1. **Always give it a `title`.** It's the only thing a screen-reader user hears.
2. **Always `loading="lazy"`** unless it's the first thing on the page.
3. **Never set a fixed pixel width.** Use the wrapper above so it fits phones.

---

## 9. Guides and community updates

Parent Resources articles and Community Updates aren't pages — they're content
files. Drop a file in the right folder and the article page, the card on the
index, the menu entry, and the "Read next" picks all appear on their own.

### Adding a guide

Create `src/content/guides/your-slug.mdx`. The file name becomes the URL:
`your-slug.mdx` → `/parent-resources/your-slug`.

```mdx
---
title: "Buying your kid's first skateboard"
category: "Getting started"
excerpt: "What a good beginner setup costs, and the three things on the toy-store board that will make your kid quit."
heroImage: "../../assets/photos/ramp_up-62.jpg"
heroAlt: "A young skater taking a first push while a coach steadies the board"
author: "Coach Mike"
authorAvatar: "coach"
updated: 2026-07-01
readingTime: 7
featured: true
shortVersion: "$90–$140 complete from a skate shop. Helmet before board."
toc:
  - label: "What a complete costs"
    slug: "what-a-complete-costs"
  - label: "Buy the helmet first"
    slug: "buy-the-helmet-first"
draft: false
---

<p class="standfirst">The opening line, in larger type.</p>

Normal paragraphs are just paragraphs. Blank line between them.

## What a complete costs

Markdown headings become the article's `h2`s. **Bold** and [links](/programs)
work the way you'd expect.
```

| Field | Required | Notes |
|---|---|---|
| `title` | **yes** | Also the browser tab and the card headline |
| `category` | **yes** | Exactly one of: `Getting started`, `Safety & gear`, `At the clinic`, `Keeping it going` |
| `excerpt` | **yes** | The card blurb and the Google description |
| `heroImage` | **yes** | Path relative to this file — copy the pattern above |
| `heroAlt` | **yes** | Describe the photo for someone who can't see it |
| `author` | no | Defaults to "Coach Mike" |
| `authorAvatar` | no | `a`, `b`, `c`, or `coach` |
| `updated` | **yes** | `YYYY-MM-DD`, **no quotes**. Sorts the index. |
| `readingTime` | **yes** | Minutes, a number. Roughly words ÷ 220. |
| `toc` | no | The sidebar links. Each `slug` must match a heading — see below. |
| `featured` | no | `true` makes it the big "Start here" card. Only one guide should have it. |
| `shortVersion` | no | The dark sidebar summary card |
| `draft` | no | `true` = visible locally, invisible on the live site |

**About `category`:** it's required, but it's no longer shown anywhere — the
category tags were removed. It still decides which guides are offered as
"Read next," so pick the honest one.

**Getting the `toc` slugs right.** Astro generates a heading's id from its text:
lowercase, spaces → hyphens, punctuation dropped. `## The three parts that
actually matter` becomes `the-three-parts-that-actually-matter`. If a sidebar
link doesn't jump anywhere, that's a mismatch. Easiest check: click each one.

### Using components inside a guide

`.mdx` files can use the [article blocks](#article-body-blocks). Import them
after the frontmatter, then use them between paragraphs:

```mdx
---
title: "…"
---

import SpecCard from "../../components/article/SpecCard.astro";
import Figure from "../../components/article/Figure.astro";
import gearPhoto from "../../assets/photos/radnor-11.jpg";

Some paragraph text.

<SpecCard title="Sizing by age" rows={[{ label: "Ages 5–7", body: "7.0–7.5″ deck." }]} />

More paragraph text.
```

Leave a blank line above and below each component or the markdown around it can
get absorbed into the tag.

**`.md` vs `.mdx`:** use `.mdx` if you want components, `.md` if it's pure prose.
Both work; `.mdx` is the safe default.

### Adding a community update

Same idea, simpler. Create `src/content/updates/your-slug.md`:

```md
---
title: "Ramp Up Community Update: February 2026"
excerpt: "Where the organization stands and where we're heading."
publishedAt: 2026-02-05
draft: false
---

Your post, in markdown.
```

`heroImage` and `heroAlt` are optional here. Newest `publishedAt` sorts first.

### Working in progress

Set `draft: true` and the piece is visible on your machine but not on the live
site. Flip it to `false` when it's ready. This is the safe way to work on
something over several days.

---

## 10. The data files

Lists that appear in more than one place. Same editing pattern in each: find the
list, copy an existing entry, change the values, keep the commas and brackets
lined up.

### `src/data/clinics.ts` — the home page clinic rows

```ts
{
  date: "2026-08-15",              // sorts and drives the <time> tag
  dateLabel: "Sat Aug 15",         // what people read
  venue: "Reeves Park",
  time: "10:00 – 11:30 am",
  ages: "Ages 6–12",
  status: "spots-left",            // "spots-left" | "open" | "waitlist"
  spotsLeft: 3,                    // only used when status is "spots-left"
  markerColor: "var(--cyan)",      // cycle cyan → pink → green down the list
},
```

⚠️ These are placeholder dates from the design. All of them need replacing with
real clinics, and `registerUrl` filling in.

### `src/data/testimonials.ts` — parent quotes

Real Google reviews. Add new ones at the bottom in the same shape.

```ts
{
  quote: "I can't recommend Ramp Up enough…",
  author: "D. Jacoby",
  location: "Montgomery County",
  featured: { portrait: "a", ring: "var(--cyan)", ply: "d" },
},
```

The `featured` line is what puts a quote in the dark band on the home page — only
three should have it. To swap which three, move the `featured` line to different
entries, keeping the `portrait`/`ring`/`ply` values distinct so the trio doesn't
look repetitive. Quotes without it are still stored for later use.

### `src/data/partners.ts` — logo wall

```ts
{ name: "Lancaster REC", logo: lancasterRec, maxHeight: 52, dark: true },
```

Adding a logo takes two edits: an `import` line at the top pointing at the file
in `src/assets/partners/`, and an entry in the list.

- `name` is the alt text — use the organization's full name.
- `maxHeight` is tuned per logo because they arrive at wildly different
  proportions. Start at 55 and adjust until it looks the same visual weight as
  its neighbors.
- `dark: true` puts it on a dark tile. **Only** for logos that are white on
  transparent, which vanish otherwise.

⚠️ Lancaster City is a partner but only supplied an SVG that doesn't render well
at tile size. Ask them for a PNG.

---

## 11. Images

Two folders, two behaviors.

### `src/assets/` — for photos (recommended)

Images here get resized, converted to modern formats, and cached automatically.
Use this for all photography. It requires an `import`:

```astro
---
import { Image } from "astro:assets";
import heroPhoto from "../assets/photos/rootdown-37.jpg";
---

<Image src={heroPhoto} alt="A coach helping a young skater drop in" width={760} />
```

For a component that takes an image (like `CheckerboardSection`), you import it
the same way and pass the imported name:

```astro
---
import photoOne from "../assets/photos/rootdown-37.jpg";
---

<CheckerboardSection rows={[{ image: photoOne, imageAlt: "…", title: "…", body: "…" }]} />
```

**You cannot write a path as a string.** `image="/photos/foo.jpg"` won't work —
it has to be imported. This is the one place Astro is stricter than plain HTML,
and it's what makes the automatic optimization possible.

### `public/` — for files served as-is

Anything in `public/` is available at the root path with no import. Use it for
PDFs and downloads:

```html
<a href="/downloads/waiver.pdf">Participant waiver</a>
```

Drop the file at `public/downloads/waiver.pdf` and that link works. The three
download rows on Parent Resources are waiting on exactly this.

### Alt text

Every photo needs it, and it should describe **what's in the photo**, not repeat
the heading:

- ✅ `"A coach holding a young skater's hand as he rolls down a wooden ramp"`
- ❌ `"Resilience"` or `"skateboarding photo"`

Purely decorative images take `alt=""` — but every photo on this site is
communicating something, so you'll rarely want that.

---

## 12. Ten things that will bite you

The Astro-specific list. Most content bugs are one of these.

### 1. Disappearing spaces around links ⚠️

**This one is the most common and the easiest to miss.** If a line ends with text
and the next line starts with a tag, the space between them is thrown away:

```astro
<!-- WRONG — renders "Join the movementto hear about" -->
<p>
  Not ready to commit? <a href="/#join">Join the movement</a>
  to hear about the next clinic.
</p>
```

Fix it with `{" "}`, which means "a real space, keep it":

```astro
<!-- RIGHT -->
<p>
  Not ready to commit? <a href="/#join">Join the movement</a>{" "}
  to hear about the next clinic.
</p>
```

Or keep it all on one line. **Always read your sentence in the browser after
adding an inline link.** This doesn't happen in `.md`/`.mdx` files — only in
`.astro`.

### 2. Every component needs an import

Using `<StatBand />` without the matching `import` at the top gets you a blank
space, not an error page. If a component isn't showing up, check the imports
first.

### 3. Curly braces in text

`{` and `}` are code in `.astro` and `.mdx` files. To write a literal brace, use
`&#123;` and `&#125;`.

### 4. Two kinds of comment

```astro
<!-- This is sent to the browser — anyone can read it via View Source -->
{/* This one is stripped out — use it for notes to yourself */}
```

Inside a list or a property (anywhere in curly braces), only `{/* */}` works.

### 5. Dates take no quotes

```yaml
updated: 2026-07-01      # ✅
updated: "2026-07-01"    # ❌ build fails
```

### 6. Commas and brackets in data files

```ts
{ href: "/programs", label: "Programs" },   ← the trailing comma matters
```

A missing comma or an unclosed bracket breaks the file. The build error points
at the line. When in doubt, copy a whole existing entry and edit the values —
don't type the punctuation from scratch.

### 7. Apostrophes inside properties

```astro
<!-- ❌ the apostrophe closes the string early -->
<StatBand heading='Here's the standard' />

<!-- ✅ double quotes outside -->
<StatBand heading="Here's the standard" />

<!-- ✅ or the proper typographic apostrophe -->
<StatBand heading="Here&rsquo;s the standard" />
```

### 8. Adding a class to a `<section>` turns off its spacing

Covered in [Laying out a page](#5-laying-out-a-page). If a page suddenly loses
all its padding, this is why.

### 9. Components self-close

`<PartnerGrid />`, not `<PartnerGrid>`. Anything without content between tags
needs the trailing slash.

### 10. Renaming a file changes the URL

Renaming `team.astro` to `our-team.astro` moves the page and breaks every
existing link to it — including any Google has indexed. If you rename, update
`src/data/navigation.ts` and search the project for the old path.

---

## 13. Recipes

**Reorder the home page sections**
→ Open `src/pages/index.astro`, cut and paste the `<section>` blocks and
`<Component />` lines in the template into the order you want.

**Change the header button text**
→ `src/components/SiteHeader.astro`, near the bottom. Update the visible text and
the `aria-label` together.

**Add a page to the Programs dropdown**
→ Create the page in `src/pages/programs/`, then add a line to
`programsChildren` in `src/data/navigation.ts`.

**Break up a wall of text**
→ [`CheckerboardSection`](#checkerboardsection) if you have photos,
[`AccordionSection`](#accordionsection) if it's questions and answers,
[`StatBand`](#statband) if there are numbers in it.

**Put a video on a page**
→ [`VideoFeature`](#videofeature) with the YouTube id.

**Publish a new guide**
→ New `.mdx` file in `src/content/guides/`. It appears in the index, the menu,
and "Read next" by itself.

**Take something offline temporarily**
→ `draft: true` in its frontmatter (guides and updates), or comment the component
out of the page with `{/* … */}`.

**Swap which testimonials are featured**
→ Move the `featured: { … }` line to different entries in
`src/data/testimonials.ts`. Exactly three.

**See a component on its own**
→ `/dev` while running locally.

---

## 14. Before you publish

```bash
npm run build
```

If that passes, then:

- [ ] Click through the pages you changed at desktop **and** phone width
- [ ] Read any sentence containing an inline link — check the spaces (gotcha #1)
- [ ] Click every link you added, including the ones in the menu
- [ ] Confirm no yellow dashed `todo` boxes are left on pages you consider done
- [ ] Check every new photo has real alt text
- [ ] Confirm each new page has a `title` and `description`

---

## 15. Every TODO still open

Search the project for `TODO(Christine)` to find these in place. They're marked
in the code, and the yellow dashed boxes are visible on the live site — so
anything still boxed is publicly visible as unfinished.

| What | Where |
|---|---|
| Sawyer embed code | `src/components/SawyerEmbed.astro` |
| MailerLite form endpoint | `src/components/EmailSignupBand.astro` |
| Real Google Business reviews URL | `src/components/TestimonialsSection.astro` |
| Real clinic dates, venues, register links | `src/data/clinics.ts` |
| Confirm Instagram / Facebook URLs | `src/data/navigation.ts` (also on Contact) |
| Lancaster City logo as a PNG | `src/data/partners.ts` |
| Waiver / checklist / gear-list PDFs | `src/pages/parent-resources/index.astro` |
| Instructor names, photos, bios | `src/pages/about/team.astro` |
| Christine & Mike photo | `src/pages/about/team.astro` |
| Answers to the two coaching FAQs | `src/pages/get-involved/coach-with-us.astro` |
| How hosting works, and host logos | `src/pages/get-involved/partner-with-ramp-up.astro` |
| Session dates and Sawyer links | `src/pages/programs/seasonal-sessions.astro` |
| Rest of the February 2026 update | `src/content/updates/february-2026-update.md` |
| Certification process: placeholder structure, held as `draft: true` because the claims on a safety page have to be accurate | `src/content/guides/certification-process.md` |
| Curriculum stages: a reasonable general framework, not your actual curriculum — confirm the names and order | `src/content/guides/curriculum-and-progression.mdx` |
| Confirm the production domain | `astro.config.mjs` |

---

## Where to look when something breaks

| Symptom | Likely cause |
|---|---|
| Component doesn't appear | Missing `import` |
| Page 404s | File name or folder doesn't match the URL |
| Words run together | The whitespace gotcha (#1) |
| Build fails on a content file | A date in quotes, or a `category` that isn't one of the four |
| Guide doesn't appear on the site | `draft: true` |
| Sidebar TOC link goes nowhere | `toc` slug doesn't match the heading text |
| Section lost its padding | It has a class on it now (see #8) |
| Photo won't load | Passed as a string instead of being imported |

Build errors name the file and line. Read the first one, fix it, run again.
