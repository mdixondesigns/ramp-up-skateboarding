/**
 * Single source of truth for site navigation.
 *
 * `primaryNav` drives the header, including its hover/tap dropdowns. The footer
 * columns are composed from the same `children` arrays so the two can't drift —
 * add a subpage here and it appears in both places.
 */

export interface NavLink {
  href: string;
  label: string;
}

export interface NavItem extends NavLink {
  /** Subpages. A section with children renders a dropdown in the header. */
  children?: NavLink[];
}

const programsChildren: NavLink[] = [
  { href: "/programs/free-clinics", label: "Free Clinics" },
  { href: "/programs/calendar", label: "Calendar" },
  { href: "/programs/seasonal-sessions", label: "Seasonal Sessions" },
  { href: "/programs/private-lessons", label: "Private Lessons" },
];

const aboutChildren: NavLink[] = [
  { href: "/about/history", label: "Ramp Up History" },
  { href: "/about/team", label: "The Team" },
  { href: "/about/philosophy", label: "Our Philosophy" },
];

const getInvolvedChildren: NavLink[] = [
  { href: "/get-involved/coach-with-us", label: "Coach With Us" },
  { href: "/get-involved/partner-with-ramp-up", label: "Partner With Ramp Up" },
];

/*
 * Parent Resources has one true subsection. The guides themselves are
 * deliberately not listed: the section's own index page is a filterable grid
 * built for browsing them, and mirroring a growing collection into the header
 * would make the dropdown grow without bound.
 */
const parentResourcesChildren: NavLink[] = [
  { href: "/parent-resources/community-updates", label: "Community Updates" },
];

export const primaryNav: NavItem[] = [
  { href: "/programs", label: "Programs", children: programsChildren },
  { href: "/about", label: "About us", children: aboutChildren },
  { href: "/get-involved", label: "Get involved", children: getInvolvedChildren },
  {
    href: "/parent-resources",
    label: "Parent Resources",
    children: parentResourcesChildren,
  },
  { href: "/contact", label: "Contact" },
];

// TODO(Christine): confirm the live social URLs.
const socialLinks: NavLink[] = [
  { href: "https://www.instagram.com/rampupskate", label: "Instagram" },
  { href: "https://www.facebook.com/rampupskate", label: "Facebook" },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  { heading: "Programs", links: programsChildren },
  {
    heading: "About us",
    links: [...aboutChildren, { href: "/contact", label: "Contact" }],
  },
  { heading: "Get involved", links: [...getInvolvedChildren, ...socialLinks] },
];
