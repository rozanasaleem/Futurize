// Client roster supplied in DownloadablePortfolio.pptx.pdf, October 2026.
// Keep previous relationships and event samples distinct from current clients.
export type Project = {
  slug: string;
  name: string;
  logo: string | null;
  group: "current" | "history" | "events";
};
export const projects: Project[] = [
  {
    "slug": "anytime-juice",
    "name": "Anytime Juice",
    "logo": "anytime-logo.png",
    "group": "current"
  },
  {
    "slug": "fitness-factory",
    "name": "Fitness Factory",
    "logo": "fitness-logo.png",
    "group": "current"
  },
  {
    "slug": "neocash",
    "name": "NeoCash",
    "logo": "neocash-logo.png",
    "group": "current"
  },
  {
    "slug": "maie-salameh",
    "name": "Maie Salameh",
    "logo": "maie-salameh-logo.png",
    "group": "current"
  },
  {
    "slug": "millenium-hotel",
    "name": "Millennium Hotels and Resorts",
    "logo": "millennium-logo.png",
    "group": "history"
  },
  {
    "slug": "interplast-palestine",
    "name": "Interplast Palestine",
    "logo": "interplast-logo.png",
    "group": "history"
  },
  {
    "slug": "ebara",
    "name": "Ebara",
    "logo": "ebara-logo.png",
    "group": "history"
  },
  {
    "slug": "bekdash",
    "name": "Bekdash",
    "logo": "bekdash-logo.png",
    "group": "history"
  },
  {
    "slug": "hydra-palestine",
    "name": "Hydra Palestine",
    "logo": "hydra-logo.png",
    "group": "history"
  },
  {
    "slug": "q-center",
    "name": "Q Center",
    "logo": "q-center-logo.png",
    "group": "history"
  },
  {
    "slug": "firefly-group",
    "name": "Firefly Group",
    "logo": "firefly-logo.png",
    "group": "history"
  },
  {
    "slug": "mindset-company",
    "name": "MindSet Company",
    "logo": "mindset-logo.png",
    "group": "history"
  },
  {
    "slug": "elite-entry",
    "name": "Elite Entry",
    "logo": null,
    "group": "history"
  },
  {
    "slug": "algeness",
    "name": "Algeness",
    "logo": "algeness-logo.png",
    "group": "history"
  },
  {
    "slug": "donut-bite",
    "name": "Donut Bite",
    "logo": "donut-bite-logo.png",
    "group": "history"
  },
  {
    "slug": "feng",
    "name": "FENG",
    "logo": null,
    "group": "history"
  },
  {
    "slug": "go-crispy",
    "name": "Go Crispy",
    "logo": null,
    "group": "history"
  },
  {
    "slug": "alnayzak-tech-talent",
    "name": "AlNayzak \u2014 Tech Talent",
    "logo": null,
    "group": "events"
  },
  {
    "slug": "yalla-goal",
    "name": "Yalla Goal",
    "logo": null,
    "group": "events"
  },
  {
    "slug": "land-rover-vip-event",
    "name": "Land Rover VIP Event",
    "logo": null,
    "group": "events"
  }
];
export const expertise = [
  [
    "Digital Marketing & Social Media",
    "Campaign thinking, social media, paid media and communication planning.",
  ],
  [
    "Branding & Creative Direction",
    "Identity, messaging, art direction and the visual language that holds it together.",
  ],
  [
    "Website & Digital Solutions",
    "Websites, landing pages and considered digital experiences.",
  ],
  [
    "Content & Video Production",
    "Photography, reels, video and content created for the way people watch.",
  ],
  [
    "Events & Activations",
    "Concepts, spatial branding, production coordination and visitor experiences.",
  ],
  [
    "Business Development",
    "Partnerships, market opportunities and new directions for growth.",
  ],
];
export const contacts = [
  { name: "Ahmad", email: "Ahmad@futurize.agency", phone: "+972 594 223 472" },
  {
    name: "Rozana",
    email: "rozana@futurize.agency",
    phone: "+972 566 200 119",
  },
  { name: "Qaiys", email: "Qaiys@futurize.agency", phone: "+970 598 000 258" },
];
