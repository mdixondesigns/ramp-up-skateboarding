/**
 * Single source of truth for site navigation.
 *
 * The header shows the five top-level sections; the footer regroups the same
 * destinations into link columns. Editing a URL here updates both.
 */

export interface NavLink {
  href: string;
  label: string;
}

export const primaryNav: NavLink[] = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About us" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/parent-resources", label: "Parent Resources" },
  { href: "/contact", label: "Contact" },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Programs",
    links: [
      { href: "/programs/free-clinics", label: "Free Clinics" },
      { href: "/programs/calendar", label: "Calendar" },
      { href: "/programs/seasonal-sessions", label: "Seasonal Sessions" },
      { href: "/programs/private-lessons", label: "Private Lessons" },
    ],
  },
  {
    heading: "About us",
    links: [
      { href: "/about/history", label: "Ramp Up History" },
      { href: "/about/team", label: "The Team" },
      { href: "/about/philosophy", label: "Our Philosophy" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Get involved",
    links: [
      { href: "/get-involved/coach-with-us", label: "Coach With Us" },
      { href: "/get-involved/partner-with-ramp-up", label: "Partner With Ramp Up" },
      // TODO(Christine): confirm the live social URLs.
      { href: "https://www.instagram.com/rampupskate", label: "Instagram" },
      { href: "https://www.facebook.com/rampupskate", label: "Facebook" },
    ],
  },
];
