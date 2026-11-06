# Content rules

Read before publishing anything. These are decisions already made, and most of
them exist because getting them wrong causes a real problem.

## Live claims that were false

All four have now been corrected in the site source. Kept here so they are
never reintroduced.

| The site used to say | The truth |
| :--- | :--- |
| "We bring 40 boards" | 12 to 15 boards travel to a session. Do not publish a board count at all; "a board for every kid" is true and does not go stale. |
| Helmets and pads are provided | **Families supply helmets, and Ramp Up has no pads to lend.** A few unadvertised spare helmets exist for people who forget. Pads are the parent's choice. |
| "Scholarship spots are held in every session" | Scholarship spots are *sometimes* available. Payment plans sometimes too. |
| "There is never a session with a single adult on site" | A class of six or fewer is run by one lead coach. Most parents stay and watch, but they are parents, not staff. |
| "Falling safely is the first thing a coach teaches" / "falling is the first skill we teach" | **Falling is not taught in Foundations at all.** See `curriculum.md`. The locked-wheel start is the true safety story. |

The helmet one mattered most. It was a safety promise, and a parent who
believed it showed up without a helmet.

## Do not publish

| Thing | Why |
| :--- | :--- |
| **Any per-student or per-class rate** | Ramp Up's internal unit cost is confidential and is not recorded in this repo. Publishing a per-class figure reveals it and undercuts partners who set their own markup. Quote whole-program prices only. See `pricing.md`. |
| **Any price range** | Only exact prices, attached to a specific listed program. Never "programs run from X to Y." |
| **The partner markup range** | What partners add on top is not published. It tells prospective partners what everyone else charges, and tells families their town is adding a margin. |
| **Level 3** | Exists in theory, has never been run. |
| **Invite-only skate clubs** | A plan, not a program. Never run. |
| **Birthday parties and private group events** | Deliberately off the site for now. No permanent space makes them hard to coordinate. |
| **Anything about under-5s or tot sessions** | Ramp Up is not catering to that age group. The site's range is 5 to 14, full stop. Do not mention younger ages even though private sessions for them exist. |
| **The bracelet / belt progression system** | Considered and set aside. Does not exist. |
| **Nonprofit or charity framing** | Ramp Up is a for-profit business. See `business.md`. |
| **Dollar figures in the giving breakdown** | The chart on `/about/philosophy` stays empty until there are real numbers. A wrong dollar amount reads as a fact, not a placeholder. |
| **Coach names or photos without that coach's consent** | Each assistant coach must personally agree first. |
| **Locations on testimonials** | Quotes stay, location lines come off. They point at a region Ramp Up no longer serves. |
| **Any claim about an injury-free record** | Ramp Up has had serious injuries. Never write "we have never had an injury," or any version of it, for any program or any time period. Describe the environment instead: controlled, low-impact, helmets required. |
| **Specific injury incidents** | Internal. The wrist guard recommendation carries the weight on its own and does not need the incident behind it. |
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
- **Say USSEA, not just "certified."** See `operations.md`.

## Placeholders currently live on the site

These are visible to real visitors right now and should be cleared as their
pages are touched:

- Fake clinic dates and venues on the home page (Reeves Park, Lititz Springs
  Park, River Park) in `src/data/clinics.ts`
- "Instructor name" x3 on `/about/team`
- "[Answer]" x2 on `/get-involved/coach-with-us`
- "[What the host provides]" and similar on
  `/get-involved/partner-with-ramp-up`
- A placeholder Google reviews URL in the testimonials band
- `site: 'https://rampupskate.com'` in `astro.config.mjs` is unconfirmed and
  drives every canonical URL
- `src/data/partners.ts` renders 5 of the 7 partners in `business.md`. Boys and
  Girls Club of Lancaster is missing and needs a logo; Lancaster City needs a PNG

## When something changes

Update the relevant file in `docs/kb/` in the same pass as the code change. A
knowledge base that lags the site is worse than none, because it will be
trusted.
