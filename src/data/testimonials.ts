export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  /**
   * Set on the three quotes the design features on the home page. Each carries
   * a portrait variant, a ring color, and a ply-stripe variant so the trio
   * doesn't repeat itself. Leave undefined for the rest.
   */
  featured?: {
    portrait: "a" | "b" | "c";
    ring: string;
    ply: "a" | "b" | "c" | "d";
  };
}

/** The three the home page shows, in order. */
export const featuredTestimonials = (): Testimonial[] =>
  testimonials.filter((t) => t.featured);

// Pulled from Google reviews / current site. Add new ones as they come in.
export const testimonials: Testimonial[] = [
  {
    quote: "I can't recommend Ramp Up enough. My daughter absolutely adores it and according to her, \"I'm basically a pro!\"",
    author: "D. Jacoby",
    location: "Montgomery County",
    featured: { portrait: "a", ring: "var(--cyan)", ply: "d" },
  },
  {
    quote: "Had a 10/10 experience with the skateboarding clinic. She loved it and can't wait for the next one! Instructors were fantastic and she learned a ton.",
    author: "J. Holland",
    location: "Radnor, PA",
  },
  {
    quote: "Love it! Can't say enough great things about the sessions! My daughter can't wait for more spring opportunities!",
    author: "B. Dromey",
    location: "Phoenixville, PA",
  },
  {
    quote: "My boys have gone to a few clinics and absolutely love it!!!! Can't wait to sign up again.",
    author: "C. Gleason",
    location: "Chester County",
  },
  {
    quote: "You can tell that the coaches genuinely enjoy skating and teaching the kids. They are very patient and positive, and encourage the kids to try new skills.",
    author: "D. Fairchild",
    location: "Phoenixville, PA",
    featured: { portrait: "b", ring: "var(--pink)", ply: "b" },
  },
  {
    quote: "Our 8 year old son loves going to skate club and has learned so much! I can't say enough good things about the program and coaches.",
    author: "K. Gambone",
    location: "Phoenixville, PA",
  },
  {
    quote: "Had an amazing 1st skateboarding experience and cannot wait for the next session!",
    author: "B. Gensemer",
    location: "Phoenixville, PA",
  },
  {
    quote: "The coach has a lot of skills and can help kids of all different abilities and personalities. I highly recommend this clinic to any kid starting out.",
    author: "J. Leming",
    location: "Langhorne, PA",
    featured: { portrait: "c", ring: "var(--yellow)", ply: "c" },
  },
  {
    quote: "Ramp Up ran a skate club this autumn in my town. My child LOVED it. The coaches help the kids overcome the (many) failures that come with learning this new skill, and my kiddo left with smiles every time.",
    author: "J. Knaus",
    location: "",
  },
  {
    quote: "This is SUCH a well run program with the nicest guys running it. My daughter looks forward to class all week and it is truly the highlight of her week. Highly recommend!",
    author: "V. Paluch",
    location: "",
  },
];
