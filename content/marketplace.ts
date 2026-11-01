import type { Titled } from "./types";

export const marketplace = {
  eyebrow: "Physical showcase · Ecosystem discovery",
  title: "API Marketplace & Innovation Hub",
  lead: "Explore APIs. Meet providers. Create opportunities.",
  experience: "Meet API providers, explore products and discover technologies you can build with.",
  invitation: "Join the conference showcase and connect with Tanzania's API ecosystem.",
  /** Set when the online marketplace launches; the section then links to it. */
  onlineUrl: undefined as string | undefined,
};

export const marketplaceCategories: Titled[] = [
  { title: "FinTech & Payments", description: "Payment APIs, banking, KYC and SDKs." },
  { title: "Cybersecurity", description: "API protection, testing and identity." },
  { title: "AI & Automation", description: "AI APIs, agents and MCP integrations." },
];

/** How the hub works on the day. */
export const marketplaceSteps: Titled[] = [
  { title: "Showcase", description: "Companies and startups demonstrate APIs, developer products, tools and technical solutions." },
  { title: "Discover", description: "Participants explore APIs, SDKs, developer platforms, cybersecurity solutions and AI services." },
  { title: "Connect", description: "Developers and providers meet to find integration and partnership opportunities." },
];
