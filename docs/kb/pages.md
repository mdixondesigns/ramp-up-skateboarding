# Pages

What each page is for, who lands on it, and which components carry it. Read
this before writing or restructuring a page.

## Site structure (November 2026)

Decided by Christine in November 2026. Ramp Up is now a **brand and culture
hub**, not a local programs funnel. The hub is about beginner-first
skateboarding for kids and families, inclusivity, safety, and wellness and
mental health, and about teaching other people to do what Ramp Up does.

| Space | Address | Audience | Status |
| :--- | :--- | :--- | :--- |
| Hub | `rampupskateboarding.com` | Anyone, anywhere | Structure built, copy to come |
| Lancaster | `rampupskateboarding.com/lancaster/` | Lancaster-area parents | Maintenance mode |
| Course app | not yet named | People running sessions, on their phones | Deferred, no product yet |

- **Hub pages:** Home `/`, About, Parent Resources, Updates `/updates`
  (organization-wide "where Ramp Up is going" posts, not day-to-day local
  news), Get Involved, Contact.
- **Lancaster pages:** `/lancaster` (the old home page) and everything in
  `/lancaster/programs/`. They keep running for income and coaching practice,
  and as a source of stories for the hub. Little effort goes into them.
- `lancaster.rampupskateboarding.com` is a forwarding address for flyers. It
  redirects to `/lancaster/` (set up in `vercel.json`). A path was chosen over
  a real subdomain because it carries the hub's search authority and needs one
  codebase.
- **Course app:** the playbook is written as Markdown for now, so it can move
  to any platform. Build vs. hosted platform is decided once there's a product.
- **The funnel below now describes the Lancaster pages.** The hub's own
  reader, job, and ask still need to be written. [open]

## Hub home `/`

Skeleton only, with visible `[bracketed]` placeholders. It has the five
themes Christine named (beginners first, kids and families, inclusivity,
safety, wellness and mental health), with descriptions to come, plus links to
each section and the email signup. Do not launch with brackets showing.

## The funnel (Lancaster)

A real sequence. Each page belongs to one rung and should ask for that rung's
next step, not a bigger one.

| Rung | Who | The ask |
| :--- | :--- | :--- |
| 1. Curious | Never stood on a board. Wants to know if this is safe and what it costs. | Give us your email. |
| 2. First clinic | Free, gear provided except a helmet. The whole business rests on this being an easy yes. | Register on Sawyer. |
| 3. Season | Kid liked it. Parent will now pay for a multi-week program. | Enroll, and buy a board by Intermediate. |
| 4. Advocate | Tells other parents, asks their township to host, leaves a review. | Refer, review, or introduce us. |

**Rung 4 is currently invisible on the site.** No referral ask, no review ask,
no path for a happy parent to say "bring this to my town." Cheapest growth
lever available, and it costs one paragraph.

---

## Lancaster home `/lancaster` (was the site home)

**Reader.** A parent of a 5 to 14 year old who has never skated, arriving from
Facebook, Google, or another parent at pickup. Deciding in about eight seconds
whether this is a real organization or a guy with a van.

**Job.** Remove the two fears, "we don't own a board" and "this looks
dangerous," and get an email address.

**Sell move.** The offer is the free clinic and the ask is an email. Do not add
a second competing call to action.

**Still needs.** Real clinic dates in `src/data/clinics.ts`. A cost line near
the top. The growth numbers from History moved up. Named Lancaster-area towns.

**Components.** StepCard, ClinicRow, TestimonialsSection, PartnerGrid,
VideoFeature, EmailSignupBand, StatBand.

---

## Programs index `/lancaster/programs`

**Reader.** A parent who knows Ramp Up exists and wants to pick the right
thing. Comparison shopping against soccer, swim lessons, and doing nothing.

**Job.** Route them. This is the page that lists the 2 or 3 programs currently
open, with exact prices, and it gets edited every season.

**Sell move.** Almost everyone should start with a free clinic. Say so plainly
instead of presenting four equal doors.

**Components.** SessionCard, CardCap, SawyerEmbed, plus a comparison table.

---

## Foundations `/lancaster/programs/foundations`

**Reader.** A parent whose kid did a free clinic and came home glowing. They
have decided to spend money and want to know it is worth it.

**Job.** Sell the arc. Six named weeks, six concrete promises. See
`curriculum.md`.

**Sell move.** "Week 3 is the day your kid drops in on a ramp" beats any
adjective. Name what they will see on the last day that they did not see on the
first.

**Components.** NumberedPoints, CardCap, SpecCard, SessionCard,
TestimonialsSection, SawyerEmbed, EmailSignupBand.

---

## Intermediate `/lancaster/programs/intermediate`

**Reader.** A parent moving up from Foundations, who will be asked to commit
for multiple seasons.

**Job.** Make each season feel complete on its own, since the ollie can take 4
to 24 weeks. The class rhythm does that work.

**Sell move.** The honest timeline. "Some kids land it in a month, some take
six, both are normal." Then the buying guide, framed as a musical instrument.

**Components.** NumberedPoints, SpecCard, InlineCta, GuideCard, SawyerEmbed.

---

## Free Clinics `/lancaster/programs/free-clinics`

**Reader.** A parent one click from registering. **The highest-intent page on
the site.**

**Job.** Remove risk. Every sentence should shrink the distance between "maybe"
and "we'll be there Saturday."

**Sell move.** Answer "what's the catch." Free clinics cost Ramp Up money and
run anyway, because it is how families meet them. See `pricing.md`.

**Components.** StepCard, SawyerEmbed, TestimonialsSection, AccordionSection,
EmailSignupBand.

---

## Calendar `/lancaster/programs/calendar`

**Reader.** Someone checking whether Ramp Up comes anywhere near them, and when.

**Job.** Answer the geography question, and earn local search traffic. Name the
towns in plain text, not only inside an embed.

**Sell move.** Convert the empty-handed visitor. Someone in an unserved town is
a partnership lead wearing a parent costume. Capture their town name.

**Components.** SawyerEmbed, EmailSignupBand, town list.

---

## Private Lessons `/lancaster/programs/private-lessons`

**Reader.** A parent with a specific reason a group will not work. Usually an
anxious kid, or one progressing faster than their group.

**Job.** Stay deliberately light. The model is changing, so no rates, no full
build-out. "Get in touch" rather than "coming soon," since these already exist.

**Components.** CheckerboardSection, EmailSignupBand.

---

## About: History `/about/history`

**Reader.** Someone deciding whether this is a real organization.

**Job.** Tell the story through to today. See `history.md`.

**Sell move.** Keep the doubt in. "The success rate for brick-and-mortar skate
shops is criminally low" is the most trustworthy sentence on the site because
it admits something. Do not polish that out.

**Components.** StatBand, PullQuote, Figure.

---

## About: The Team `/about/team`

**Reader.** A parent about to hand their child to an adult they have never met.
**Per unit of copy, this page does more selling than any other.**

**Job.** Lead with youth education, not skateboarding. See `team.md`.

**Sell move.** Specificity. "Certified and background-checked" is a claim.
USSEA, three PA clearances, Safe Sport, First Aid and CPR is evidence.

**Components.** Avatar, CheckerboardSection, CardCap, AccordionSection.

---

## About: Philosophy `/about/philosophy`

**Reader.** A parent who already likes you, plus every grant reviewer and
township director who looks you up.

**Job.** Say what Ramp Up believes and what it puts back into the scene.

**Still needs.** Giving figures, or the chart stays hidden. Nonprofit-flavored
language removed. See `business.md`.

**Components.** CheckerboardSection, ContributionDonut, EmailSignupBand.

---

## Get Involved: Coach With Us `/get-involved/coach-with-us`

**Reader.** A local skater, often 18 to 30, or an experienced youth educator
who does not skate. **Not a side page:** it unlocks summer camps and private
lessons at scale. See `team.md`.

**Job.** Answer "is it paid" and "am I good enough" in the first screen.

**Sell move.** The low skill bar, stated plainly. Most people rule themselves
out before finishing the page.

**Components.** AccordionSection, CheckerboardSection, NumberedPoints, CardCap.

---

## Get Involved: Partner With Ramp Up `/get-involved/partner-with-ramp-up`

**Reader.** A parks and rec director, school activities coordinator, or
business owner. Thinks in budget cycles, liability, and whether this will
embarrass them.

**Job.** Make hosting feel effortless. Every logistics answer published up
front is one less reason to pick someone else. See `operations.md`.

**Sell move.** Pitch the free-clinic-into-paid-program pattern. It gives them a
free community event and a paid program from one booking.

**Components.** PartnerGrid, StatBand, NumberedPoints, AccordionSection,
SpecCard, TestimonialCard.

---

## Parent Resources `/parent-resources`

**Reader.** Two different people. A registered parent doing homework before
Saturday, and a stranger from Google searching "what size skateboard for a 7
year old."

**Job.** Be useful to people who will never register. The guides are the entire
organic search strategy.

**Editorial angle.** Almost all beginner skate content is written by skaters
for people who want to skate. These are written by a youth educator for a
nervous parent who does not skate. That is the advantage. Use it.

**Components.** GuideCard, CardCap, SpecCard, NumberedPoints, PullQuote,
InlineCta, Figure.

---

## Contact `/contact`

**Reader.** Anyone whose question the site failed to answer. Every visit is a
small content failure worth noticing.

**Job.** Be a door, not a form wall. The existing headline is right.

**Components.** EmailSignupBand, CardCap.

---

## Note on `/lancaster/programs/seasonal-sessions`

This page predates the Foundations and Intermediate split. Decide whether it
redirects to `/lancaster/programs` or is removed outright. Do not leave all three live,
since they compete for the same search terms and the same reader.
