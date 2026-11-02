export type ParticipationModel = {
  name: string;
  description: string;
  /** Premium package price in Tanzanian shillings. */
  premiumPriceTzs: number;
  freemium: string[];
  premium: string[];
  addons: string[];
};

export const participationLead =
  "Organizations may participate according to their objectives and level of commitment. Each path has a free (Freemium) level, a Premium package and optional add-ons.";

export const participationModels: ParticipationModel[] = [
  {
    name: "Financial Sponsor",
    description: "Provides financial support to help deliver the conference, with agreed visibility and engagement benefits.",
    premiumPriceTzs: 300_000,
    freemium: ["Official Partner recognition", "Listed on APICon website", "Logo on selected digital materials", "Social media recognition", "Partner certificate / badge", "Access to selected networking opportunities", "Standard post-event recognition"],
    premium: ["Enhanced recognition & featured website visibility", "Prominent event branding", "Featured social media exposure", "Dedicated partner spotlight", "VIP / priority networking access", "Increased conference passes", "Priority consideration for future partnerships"],
    addons: ["Sponsored session", "Networking session sponsorship", "Lunch / refreshment sponsorship", "Swag sponsorship", "Lanyard / badge sponsorship", "Charging station sponsorship", "Wi-Fi / connectivity sponsorship", "Category exclusivity", "Custom activation"],
  },
  {
    name: "Marketplace Exhibitor",
    description: "Showcases an API, platform, product, developer tool, security solution or digital service to participants.",
    premiumPriceTzs: 250_000,
    freemium: ["Official Marketplace Partner recognition", "Listed on APICon marketplace / website", "Basic company / product profile", "Logo on selected digital materials", "Social media recognition", "Limited product showcasing opportunity", "Access to participant networking", "Standard post-event recognition"],
    premium: ["Featured marketplace placement", "Prominent company / product profile", "Enhanced event branding", "Featured social media promotion", "Exhibition / demo space", "Short product / service showcase slot (8–12 min)", "Direct developer engagement opportunity", "Product / API feedback opportunity", "Increased conference passes", "Priority marketplace positioning"],
    addons: ["Dedicated product demonstration", "Technical workshop / lab", "API hands-on challenge", "Developer challenge", "Sponsored technical session", "Product trial / giveaway activation", "Branded booth upgrade", "Dedicated promotional campaign", "Recruitment / talent activation", "Category exclusivity", "Custom marketplace activation"],
  },
  {
    name: "Technical Partner",
    description: "Contributes engineers, speakers, workshops, live demonstrations, hands-on labs or technical knowledge to the program.",
    premiumPriceTzs: 250_000,
    freemium: ["Official Technical Partner recognition", "Listed on APICon website", "Technical Partner badge / certificate", "Social media recognition", "Opportunity to contribute technical content", "Access to technical networking", "Speaker consideration through standard selection", "Standard post-event recognition"],
    premium: ["Featured technical partner placement", "Enhanced event branding", "Featured technical content promotion", "Dedicated technical session opportunity", "Priority consideration for technical sessions", "Developer engagement opportunity", "Technical knowledge-sharing opportunity", "Increased conference passes", "Featured post-event recognition", "Priority access to selected technical activities"],
    addons: ["Dedicated technical workshop", "Hands-on technical lab", "API development challenge", "API security challenge / CTF", "Sponsored technical session", "Developer mentorship session", "Technical clinic / office hours", "Technical demonstration", "Open-source contribution session", "Technical track sponsorship", "Custom technical activation"],
  },
  {
    name: "Infrastructure Partner",
    description: "Supports the conference with connectivity, platforms, tools, cloud credits, equipment or other approved resources.",
    premiumPriceTzs: 200_000,
    freemium: ["Official Infrastructure Partner recognition", "Listed on APICon website", "Logo on selected digital materials", "Social media recognition", "Partner badge / certificate", "Access to networking opportunities", "Recognition for contributed resources", "Standard post-event recognition"],
    premium: ["Featured infrastructure partner placement", "Prominent event branding", "Featured partner promotion", "VIP / priority networking", "Increased conference passes", "Dedicated infrastructure recognition", "Featured post-event recognition", "Opportunity to demonstrate supported infrastructure / technology", "Enhanced visibility around supported event activities", "Priority consideration for infrastructure-related opportunities"],
    addons: ["Official Wi-Fi / Connectivity sponsorship", "Cloud credits sponsorship", "Developer tools / software sponsorship", "Hardware / equipment sponsorship", "Charging station sponsorship", "Registration technology sponsorship", "Developer environment / sandbox", "APICon platform / tool sponsorship", "Technical infrastructure demo", "Category exclusivity", "Custom infrastructure activation"],
  },
  {
    name: "Community / Academic Partner",
    description: "Supports participant outreach, student engagement, knowledge sharing, research and wider participation across the ecosystem.",
    premiumPriceTzs: 200_000,
    freemium: ["Official Community / Academic Partner recognition", "Listed on APICon website", "Logo on selected digital materials", "Social media recognition", "Partner badge / certificate", "Access to community networking", "Opportunity to promote APICon within their community", "Participant referral / outreach opportunity", "Standard post-event recognition"],
    premium: ["Featured community / academic partner placement", "Prominent event branding", "Featured community spotlight", "Priority networking opportunities", "Increased conference passes", "Dedicated community engagement opportunity", "Featured community or university activation", "Opportunity to contribute speakers, researchers or facilitators", "Enhanced post-event recognition", "Greater visibility across APICon community channels", "Priority consideration for community / academic activities"],
    addons: ["Dedicated community session", "University / community workshop", "Student challenge", "Community meetup", "Hackathon / build challenge", "Research presentation", "Academic / industry panel", "Campus activation", "Student ambassador activation", "Scholarship / ticket sponsorship", "Category / sector exclusivity", "Custom community activation"],
  },
];
