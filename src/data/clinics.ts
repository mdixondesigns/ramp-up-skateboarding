/**
 * Upcoming free clinics shown on the home page.
 *
 * TODO(Christine): these are placeholder dates from the design. Replace with
 * real dates, venues, times, age ranges, and Sawyer registration URLs.
 *
 * Registration is handled by Sawyer — `registerUrl` should point at the Sawyer
 * listing for that specific session.
 */

export type ClinicStatus = "spots-left" | "open" | "waitlist";

export interface Clinic {
  /** ISO date, used for sorting and the <time> element. */
  date: string;
  /** How the date reads in the row, e.g. "Sat Aug 15". */
  dateLabel: string;
  venue: string;
  time: string;
  ages: string;
  status: ClinicStatus;
  /** Shown only when status is "spots-left". */
  spotsLeft?: number;
  registerUrl?: string;
  /** Wheel marker color. Cycle through the brand hues down the list. */
  markerColor: string;
}

export const clinics: Clinic[] = [
  {
    date: "2026-08-15",
    dateLabel: "Sat Aug 15",
    venue: "Reeves Park",
    time: "10:00 – 11:30 am",
    ages: "Ages 6–12",
    status: "spots-left",
    spotsLeft: 3,
    markerColor: "var(--cyan)",
  },
  {
    date: "2026-08-22",
    dateLabel: "Sat Aug 22",
    venue: "Lititz Springs Park",
    time: "9:30 – 11:00 am",
    ages: "Ages 5–10",
    status: "open",
    markerColor: "var(--pink)",
  },
  {
    date: "2026-09-06",
    dateLabel: "Sun Sep 6",
    venue: "River Park",
    time: "1:00 – 2:30 pm",
    ages: "Ages 6–12",
    status: "waitlist",
    markerColor: "var(--green)",
  },
];
