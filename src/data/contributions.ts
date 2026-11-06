/**
 * What Ramp Up puts back into the skateboarding community, by area.
 *
 * TODO(Christine): fill this in with real figures. Uncomment the four lines
 * below, put in the amounts, and set the period. The chart appears on
 * /about/philosophy the moment this list has entries, and the section falls
 * back to a build-out note until then.
 *
 * It is deliberately not shown with stand-in numbers. Everything else on the
 * site can wear a placeholder because a wrong venue name is an obvious
 * mistake; a wrong dollar figure reads as a fact and would be a public claim
 * about money that isn't true.
 *
 * Four entries maximum. The chart's colours are validated as a set of four,
 * see the note in ContributionDonut.astro for why a fifth can't just be added.
 * If you need more areas, fold the smallest into one "Everything else" row.
 */

export interface Contribution {
  label: string;
  /** Whole dollars, as a number: 28500, not "$28,500". */
  amount: number;
  /** One short line of context, shown under the label. */
  note?: string;
}

/** The span the figures cover, e.g. "January to December 2025". */
export const contributionPeriod = "";

export const contributions: Contribution[] = [
  // { label: "Coaches", amount: 0, note: "Paid session rates and certification costs" },
  // { label: "Local skate shops", amount: 0, note: "Boards, decks, and hardware bought locally" },
  // { label: "Photography", amount: 0, note: "Working photographers at clinics and sessions" },
  // { label: "Skateparks and ramps", amount: 0, note: "Direct donations to build and repair" },
];

/**
 * Whether there is anything real to chart. Guards the section on the
 * Philosophy page and the pointer to it from Coach With Us, so neither goes
 * live pointing at an empty chart.
 */
export const hasContributionFigures =
  contributions.length > 0 && contributions.every((entry) => entry.amount > 0);
