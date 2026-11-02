import type { Titled } from "./types";

export const marketplace = {
  title: "API Marketplace",
  lead: "Discover your next integration.",
  experience: "Explore API providers, developer tools, and integration opportunities across Tanzania’s API ecosystem. Visit the API Marketplace to discover technologies you can build with.",
  invitation: "Join the conference showcase and connect with Tanzania's API ecosystem.",
  onlineUrl: "#",
};

export type MarketplaceCategory = Titled & { covers: string[] };

export const marketplaceCategories: MarketplaceCategory[] = [
  { title: "FinTech & Payments", description: "Payment APIs, banking, KYC and SDKs.", covers: ["Payment APIs", "Banking", "KYC", "SDKs"] },
  { title: "Cybersecurity", description: "API protection, testing and identity.", covers: ["API protection", "Testing", "Identity"] },
  { title: "AI & Automation", description: "AI APIs, agents and MCP integrations.", covers: ["AI APIs", "Agents", "MCP integrations"] },
];

/** How the hub works on the day. */
export const marketplaceSteps: Titled[] = [
  { title: "Showcase", description: "Companies and startups demonstrate APIs, developer products, tools and technical solutions." },
  { title: "Discover", description: "Participants explore APIs, SDKs, developer platforms, cybersecurity solutions and AI services." },
  { title: "Connect", description: "Developers and providers meet to find integration and partnership opportunities." },
];
