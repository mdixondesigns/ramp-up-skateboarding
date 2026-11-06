/**
 * Partner logos shown on the home page.
 *
 * `maxHeight` is tuned per logo. They arrive at wildly different aspect ratios
 * and padding, so a single cap makes some look tiny and others enormous.
 *
 * `dark: true` puts the logo on an ink tile. Only for white-on-transparent
 * logos, which are invisible on a white tile.
 */
import type { ImageMetadata } from "astro";

import lancasterRec from "../assets/partners/lancaster-rec.png";
import lititz from "../assets/partners/lititz.png";
import millersville from "../assets/partners/millersville.png";
import keystoneKidspace from "../assets/partners/kk-pink.png";
import westArt from "../assets/partners/horizontal-wordmark.webp";

export interface Partner {
  name: string;
  logo: ImageMetadata;
  maxHeight: number;
  dark?: boolean;
}

export const partners: Partner[] = [
  { name: "Lancaster REC", logo: lancasterRec, maxHeight: 52, dark: true },
  { name: "Lititz recCenter", logo: lititz, maxHeight: 60 },
  { name: "Borough of Millersville", logo: millersville, maxHeight: 62 },
  { name: "Keystone Kidspace", logo: keystoneKidspace, maxHeight: 56 },
  { name: "West Art", logo: westArt, maxHeight: 34 },
];

// TODO(Christine): Lancaster City is a partner but only supplied an SVG that
// doesn't render well at tile size. Ask them for a PNG, then add it here.
