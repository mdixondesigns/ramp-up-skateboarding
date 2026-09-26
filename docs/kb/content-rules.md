# Content rules

Read before publishing anything. These are decisions already made, and most of
them exist because getting them wrong causes a real problem.

## Do not publish

| Thing | Why |
| :--- | :--- |
| **The internal cost figure** (~$27 per student per session) | Internal only. Publishing it undercuts partners who set their own markup. Never appears on the site or in anything shared outside the business. See `pricing.md`. |
| **Level 3** | Exists in theory, has never been run. |
| **Invite-only skate clubs** | A plan, not a program. Never run. |
| **Birthday parties and private group events** | Deliberately off the site for now. No permanent space makes them hard to coordinate. |
| **The bracelet / belt progression system** | Considered and set aside. Does not exist. |
| **Nonprofit or charity framing** | Ramp Up is a for-profit business. See `business.md`. |
| **Dollar figures in the giving breakdown** | The chart on `/about/philosophy` stays empty until there are real numbers. A wrong dollar amount reads as a fact, not a placeholder. |
| **Coach names or photos without that coach's consent** | Each assistant coach must personally agree first. |
| **Locations on testimonials** | Quotes stay, location lines come off. They point at a region Ramp Up no longer serves. |
| **Any safety, insurance, or certification claim not in `operations.md`** | These must be literally true. See `open-questions.md`. |

## Decisions already made

- **Foundations and Intermediate are the public names.** Not "level 1" and
  "level 2."
- **Three program pages:** `/programs` (the live list, edited each season),
  `/programs/foundations` and `/programs/intermediate` (evergreen).
- **Exact price per listing**, never a general range.
- **Service area is the Lancaster, PA area only** for now.
- **Do not promise all six Foundations days on a 4-week program.** The first
  three are fixed, the fourth varies by cohort.
- **The readiness rubric is approved for publication.**

## Placeholders currently live on the site

These are visible to real visitors right now and should be cleared as their
pages are touched:

- Fake clinic dates and venues on the home page (Reeves Park, Lititz Springs
  Park, River Park) in `src/data/clinics.ts`
- "Instructor name" x3 on `/about/team`
- "[Answer]" x2 on `/get-involved/coach-with-us`
- "[What the host provides]" and similar on
  `/get-involved/partner-with-ramp-up`
- Social links pointing at bare instagram.com and facebook.com, on `/contact`
  and in the footer
- Three download rows on `/parent-resources` with no PDFs behind them
- A placeholder Google reviews URL in the testimonials band
- `site: 'https://rampupskate.com'` in `astro.config.mjs` is unconfirmed and
  drives every canonical URL

## When something changes

Update the relevant file in `docs/kb/` in the same pass as the code change. A
knowledge base that lags the site is worse than none, because it will be
trusted.
