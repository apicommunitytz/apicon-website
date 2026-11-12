import type { Photo } from "./types";

export type Partner = { name: string; role: string; logo: Photo & { alt: string }; href?: string };

const logo = (file: string, width: number, height: number, alt: string) => ({ src: `/images/partners/${file}`, width, height, alt });

export const partners: Partner[] = [
  { name: "iPF Softwares", role: "Technical Partner", href: "https://www.ipfsoftwares.com/", logo: logo("ipf-softwares.webp", 480, 280, "iPF Softwares") },
  { name: "Notify Africa", role: "Technical Partner", logo: logo("notify-africa.webp", 480, 196, "Notify Africa by iPF Softwares") },
  { name: "CTF Zone", role: "Technical Partner", href: "https://ctfzone.com/", logo: logo("ctf-zone.webp", 327, 246, "CTF Zone") },
  { name: "Cyrex", role: "Technical Partner", href: "https://cyrex.co.tz/", logo: logo("cyrex.webp", 480, 107, "Cyrex") },
  { name: "APISEC", role: "Community Partner", href: "https://au.apisec.ai/", logo: logo("apisec.webp", 480, 234, "APISEC") },
  { name: "Tamm", role: "Partner", logo: logo("tamm.webp", 480, 480, "Tamm") },
  { name: "GCA Pay", role: "Diamond Sponsor", href: "https://goldcavernassociates.com/", logo: logo("gca-pay.webp", 480, 123, "GCA Pay") },
  { name: "Swahilies", role: "Silver Sponsor", href: "https://www.swahilies.com/", logo: logo("swahilies.webp", 480, 160, "Swahilies") },
];

export type SponsorTier = {
  name: "Silver" | "Gold" | "Diamond";
  summary: string;
  inherits?: string;
  benefits: string[];
  tickets: string;
  sponsors: string[];
};

export const sponsorTiersLead =
  "Premium sponsors select Silver, Gold or Diamond according to the level of exposure and support required.";

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Silver",
    summary: "Solid entry-level visibility and a clear presence in the community.",
    benefits: ["Official Silver Partner recognition", "Logo on website partner section", "Social media recognition"],
    tickets: "2 full-access tickets",
    sponsors: ["Swahilies"],
  },
  {
    name: "Gold",
    summary: "Strong brand presence with direct access to developer and security talent.",
    inherits: "Everything in Silver, plus:",
    benefits: [
      "Prominent branding on event materials",
      "Company or product showcase",
      "Brand mentions during key sessions",
      "Featured placement in post-event report and community communications",
    ],
    tickets: "5 full-access tickets",
    sponsors: [],
  },
  {
    name: "Diamond",
    summary: "Maximum visibility, thought leadership and direct engagement with the audience.",
    inherits: "Everything in Gold, plus:",
    benefits: [
      "15–20 minute speaking opportunity",
      "Dedicated product or service demo",
      "Engagement with ~100 participants",
      "Priority access for recruitment / talent outreach (with organiser support)",
      "Opportunity to contribute a short technical article or case study for post-event distribution",
    ],
    tickets: "8–10 full-access tickets",
    sponsors: ["GCA Pay"],
  },
];
