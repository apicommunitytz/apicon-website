import type { Titled } from "./types";

export const about = {
  paragraphs: [
    "APICon Tanzania 2026 brings developers, cybersecurity professionals, students, startups, financial institutions, AI companies, API providers, and industry leaders together for practical learning, technology discovery, and secure API-driven innovation.",
    "Its conference program and API Marketplace & Innovation Hub connect real-world engineering knowledge with APIs, platforms, cybersecurity solutions, SDKs, AI services, and integration opportunities.",
  ],
  vision:
    "To build a strong and secure API ecosystem in Tanzania where developers and API providers can learn, connect, discover, and create digital solutions.",
  mission:
    "To advance practical API knowledge, API security, DevSecOps, and API discovery by connecting developers with organizations, technologies, and real-world integration opportunities.",
};

/** The three ecosystem gaps APICon responds to. */
export const gaps: Titled[] = [
  { title: "Knowledge gap", description: "Practical learning in API development, security, DevSecOps, architecture and authentication, grounded in real cases." },
  { title: "Discovery gap", description: "A Marketplace & Innovation Hub to discover APIs, developer tools, platforms, security solutions and products." },
  { title: "Ecosystem gap", description: "A common meeting point for developers, companies, startups, security professionals, students and industry participants." },
];
