/**
 * The programs currently open for registration.
 *
 * This is the one list that changes every season. Edit it directly: add an
 * entry when a program opens, remove it when it closes or fills. Everything
 * else about Foundations and Intermediate lives on their own evergreen pages
 * and should not need touching.
 *
 * RULES (see docs/kb/pricing.md):
 *  - `price` is the EXACT price for that one program, already formatted.
 *  - Never a range, never a per-class rate, never Ramp Up's internal unit cost.
 *  - A program with no `registerUrl` shows "Registration opens soon" rather
 *    than a dead button, so nothing links to a 404.
 *
 * When the list is empty the page says so plainly and points at the email list,
 * which is the right answer between seasons. See docs/kb/programs.md.
 */
import type { ImageMetadata } from "astro";

import foundationsPhoto from "../assets/photos/ramp_up-66.jpg";
import intermediatePhoto from "../assets/photos/radnor-144.jpg";

export type ProgramLevel = "Foundations" | "Intermediate";

export interface OpenProgram {
  name: string;
  level: ProgramLevel;
  location: string;
  ages: string;
  /** e.g. "6 weeks, 1 hour a week" */
  length: string;
  /** Exact price, already formatted, e.g. "$168". Never a range. */
  price: string;
  blurb: string;
  image: ImageMetadata;
  imageAlt: string;
  /** The Sawyer listing for this program. */
  registerUrl?: string;
}

/** Photos to reach for when adding a program. */
export const programPhotos = {
  foundations: foundationsPhoto,
  intermediate: intermediatePhoto,
};

// TODO(Mike): replace with the programs actually open right now. Each one needs
// a location, an age range, a length, an exact price, and its Sawyer URL.
export const openPrograms: OpenProgram[] = [];

export const hasOpenPrograms = openPrograms.length > 0;
