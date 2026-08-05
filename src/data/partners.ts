/**
 * Partner logos shown on the home page.
 *
 * `maxHeight` is tuned per logo — they arrive at wildly different aspect ratios
 * and padding, so a single cap makes some look tiny and others enormous.
 *
 * `dark: true` puts the logo on an ink tile. Only for white-on-transparent
 * logos, which are invisible on a white tile.
 */
import type { ImageMetadata } from "astro";

import dcnr from "../assets/partners/dcnr.png";
import lancasterRec from "../assets/partners/lancaster-rec.png";
import lititz from "../assets/partners/lititz.png";
import millersville from "../assets/partners/millersville.png";
import rec from "../assets/partners/rec.png";
import keystoneKidspace from "../assets/partners/kk-pink.png";
import letsGo from "../assets/partners/lets-go.jpg";
import rootDown from "../assets/partners/root-down.png";
import westArt from "../assets/partners/horizontal-wordmark.webp";
import radnor from "../assets/partners/radnor-white.png";

export interface Partner {
  name: string;
  logo: ImageMetadata;
  maxHeight: number;
  dark?: boolean;
}

export const partners: Partner[] = [
  { name: "Pennsylvania DCNR", logo: dcnr, maxHeight: 62 },
  { name: "Lancaster REC", logo: lancasterRec, maxHeight: 52, dark: true },
  { name: "Lititz recCenter", logo: lititz, maxHeight: 60 },
  { name: "Borough of Millersville", logo: millersville, maxHeight: 62 },
  { name: "Phoenixville Borough Recreation Department", logo: rec, maxHeight: 60 },
  { name: "Keystone Kidspace", logo: keystoneKidspace, maxHeight: 56 },
  { name: "Let's Go 123 Indoor Outdoors", logo: letsGo, maxHeight: 66 },
  { name: "Root Down Brewing Co.", logo: rootDown, maxHeight: 46 },
  { name: "West Art", logo: westArt, maxHeight: 34 },
  { name: "Radnor Township Parks & Recreation", logo: radnor, maxHeight: 54, dark: true },
];

// TODO(Christine): Lancaster City is a partner but only supplied an SVG that
// doesn't render well at tile size. Ask them for a PNG, then add it here.
