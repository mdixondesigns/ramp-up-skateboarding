# The business

## Legal shape

The legal entity is **Ramp Up LLC**, based in Lancaster, PA. It is a
**for-profit business.** Not a nonprofit, and there is no 501(c)(3).

Do not use nonprofit or charity framing anywhere. Some existing copy predates
this decision and should be revised when those pages are next touched:

- ~~`/get-involved/coach-with-us` says "we are more than a business"~~ Fixed.
  That value is now "Lift the Skate Community" and reads "we are a family
  business that acts like a neighbor."
- ~~`/about/philosophy` reads as a nonprofit mission and vision statement~~
  Fixed. The "Our Mission" and "Our Vision" blocks are gone, along with "get
  behind the mission" and "join the movement." The community purpose stays,
  said in first person and in concrete terms. The tell was never the mission,
  it was the grammar: infinitive mission statements, abstract nouns, and a
  donor ask at the end.
- The original design handoff (`docs/design-system.md`) calls Ramp Up a
  nonprofit. It is wrong on this point.

A parent or a township that assumes charity and later sees an invoice feels
misled. Being a family business that runs free clinics is a better story and it
is the true one.

## Who

- **Mike Dixon**, lead coach. Grew up skateboarding, a decade of youth
  mentoring experience. Ran a side project cataloguing 60+ Pennsylvania
  skateparks, which is where the idea came from.
- **Christine Dixon**, operations and project management, plus community
  building. `christine@rampupskate.com` is the public contact address.
- Christine and Mike are married, in business together for over a decade, and
  live in Lancaster, PA with two young daughters, Ryleigh and Louisa.
- **Roughly three assistant coaches.** Each one must personally agree before
  their name or photo appears on the site. Do not add a coach to the Team page
  without confirmation that they said yes.

## Service area

**Lancaster, PA area only, for now.**

This includes Ephrata, Denver, Honey Brook, Quarryville, Manheim Township,
Millersville, Elizabethtown, York, Lititz, Reamstown.

Ramp Up previously ran programs in the Philadelphia western suburbs
(Phoenixville, Radnor, Chester County, Montgomery County, Langhorne). That work
is not currently running.

Testimonials from those families are still used because the quotes are good,
but **the location line is removed from each one**, so the site does not
advertise a region we cannot currently serve. Attribution is initials only.

## What makes money

1. **Paid multi-week programs** (Foundations and Intermediate)
2. **Private lessons**

Free clinics are the top of the funnel. They are not revenue.

## Partners are a channel, not a customer

Townships, rec departments, schools, and businesses host programs. They provide
the venue, local credibility, and a promotional list of local parents. Families
are who pay. So partner-facing pages feed the paid programs rather than selling
anything directly, and they should be written to make hosting feel effortless.

Current partners, seven in total: Lancaster REC, Lititz recCenter, Borough of
Millersville, Keystone Kidspace, West Art, Boys and Girls Club of Lancaster,
and Lancaster City.

Lancaster City has only supplied an SVG that does not render well at tile size,
so it is not yet on the partner grid. A PNG is needed.

`src/data/partners.ts` has been trimmed and no longer renders the out-of-area
partners. It currently shows 5 of the 7 above. Boys and Girls Club of Lancaster
is missing and needs a logo file.

## Positioning

**Mobile.** We come to the community instead of asking families to come to a
skatepark. We can serve towns that have no skate facility at all.

We teach on basketball courts, tennis courts, and quiet parking lots, and the
goal is that kids end up ready to enjoy a real skatepark safely.

## Where this is going

> **Update, November 2026 (Christine):** Ramp Up is becoming a brand and
> culture hub, and teaching other people to do what Ramp Up does is now the
> public direction. That is path 3 below, plus a course app for the curriculum
> and playbook later. **This reverses "Paths 2 and 3 stay off the site
> entirely"** under "What the site may say." Mike should confirm before hub
> copy states path 3 outright. Lancaster programs continue in maintenance
> mode. See `pages.md` for the new site structure.

### Three paths, internal

Ramp Up sees three possible futures. These are **options under consideration,
not a committed plan, and they do not go on the website.**

1. **Scale the mobile model.** Train more lead instructors who can take over
   regions, with Ramp Up acting as a dispatcher for skate coaches and handling
   training, insurance, and organization.
2. **A brick-and-mortar space,** which would open up camps, holiday camps, tot
   and adult lessons, and skateboard-adjacent activities.
3. **Package the model** and train aspiring coaches to start their own
   skateboarding businesses, as a mix of digital assets and live instruction.

### Immediate focus, internal

1. Grow the Lancaster community back up to regular programming.
2. Document the business: process, curriculum, handbook. Get it ready for any
   of the three paths.

### What the site may say

**Only a modest version of path 1, and only where it fits the reader.**

On About pages, replace "our ambitions are epic, and we're just getting
started" with the short-term focus stated plainly: building back up in
Lancaster, more towns, more regular programming, more coaches. Specific,
true, and something a family can be part of.

On `/get-involved/coach-with-us`, path 1 is genuinely motivating and should be
said: Ramp Up is training lead instructors who can eventually run their own
regions. That turns a weekend job into a career path, which is the difference
between a casual applicant and a serious one.

**Paths 2 and 3 stay off the site entirely.** A parent choosing an eight-week
program wants to know Ramp Up will still be there next season, not that it
might become a storefront or a franchise. Publishing three mutually exclusive
options reads as undecided rather than ambitious. Path 3 in particular, telling
customers you may train other people to start competing businesses, only
creates confusion.

## Company values

Four, and the writing on these is strong and should be preserved.

`/get-involved/coach-with-us` used to publish an older set of five, with
"Engage the Community" in place of "Lift the Skate Community" and "The Positive
Push" as a separate value. It now publishes these four. The Positive Push copy
was merged into Beyond the Board rather than discarded.

1. **The Grind.** Carrying on the legacy of skaters who built the sport through
   effort, with hands-on attention to detail.
2. **Lift the Skate Community.** More than a business, a force in the
   community, partnering with schools and small businesses. (Wording needs a
   light revision given the for-profit decision above.)
3. **Radical Hospitality.** Anticipating every need so parents feel confident
   and kids have a trusted mentor.
4. **Beyond the Board.** Skateboarding as a catalyst for resilience,
   confidence, and self-discipline. A balanced, healthy, lifelong approach,
   prioritizing safety, recovery, and mental and physical strength.

## Giving back

Ramp Up pays coaches, buys from local skate shops rather than online, hires
photographers for sessions, and donates to parks and ramps. A breakdown chart
exists on `/about/philosophy` but is deliberately blank until there are real
figures, because a wrong dollar amount reads as a fact rather than a
placeholder. Do not populate it with example numbers.
