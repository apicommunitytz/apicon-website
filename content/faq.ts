import { emails, mailto } from "./contacts";
import { event } from "./event";
import type { RichPart } from "./types";

export type FaqItem = { question: string; answer: RichPart[] };

export const faq: FaqItem[] = [
  {
    question: "Where was APICon Tanzania 2026 held?",
    answer: ["APICon Tanzania 2026 was held on Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania."],
  },
  {
    question: "Who attended APICon Tanzania 2026?",
    answer: ["APICon Tanzania 2026 welcomed software developers and engineers, cybersecurity professionals, university students and emerging talent, startups and founders, FinTech, banking and payment organizations, AI and technology companies, API providers, and other participants interested in building and securing modern API-driven systems."],
  },
  {
    question: "Was APICon Tanzania only for students?",
    answer: ["No. Students were an important part of APICon Tanzania 2026, but the conference was designed for the wider API and digital technology ecosystem, including developers, cybersecurity professionals, startups, API providers, financial technology organizations, AI companies, and industry participants."],
  },
  {
    question: "What was the API Marketplace & Innovation Hub?",
    answer: ["The API Marketplace & Innovation Hub was a physical discovery and showcase area where organizations demonstrated APIs, SDKs, developer platforms, cybersecurity solutions, AI services, integrations, and API-enabled products while developers explored technologies they could build with, secure, test, or integrate."],
  },
  {
    question: "Could companies showcase their APIs or products at APICon?",
    answer: [
      `Yes. Organizations took part as Marketplace Exhibitors and showcased APIs, developer platforms, products, tools, cybersecurity solutions, and digital services. To exhibit at ${event.nextEdition.name}, send partnership and exhibition enquiries to `,
      { text: emails.partnerships, href: mailto(emails.partnerships) },
      ".",
    ],
  },
  {
    question: "Was API Security a core part of APICon Tanzania 2026?",
    answer: ["Yes. API Security was one of the core pillars of APICon Tanzania 2026. Sessions covered secure API design, authentication and authorization, OWASP API Security risks, DevSecOps, API testing, real-world vulnerabilities, and defensive practices."],
  },
  {
    question: "What topics were covered?",
    answer: ["Topics included API fundamentals and architecture, API Security, authentication and identity, DevSecOps and secure software development, API platforms and developer experience, FinTech and digital payment APIs, AI agents and Model Context Protocol (MCP), interoperability, tool discovery, permissions, observability, AI/API security and governance, and real-world API incidents and demonstrations."],
  },
  {
    question: "When is the next APICon?",
    answer: [
      `APICon Tanzania is an annual conference. Follow `,
      { text: "APICon Tanzania on Luma", href: event.nextEdition.followUrl, external: true },
      ` to be the first to know when ${event.nextEdition.name} registration opens.`,
    ],
  },
  {
    question: "Was the conference free or paid?",
    answer: [
      `APICon Tanzania 2026 was a paid conference. Ticket details for ${event.nextEdition.name} will be shared on `,
      { text: "our Luma page", href: event.nextEdition.followUrl, external: true },
      ".",
    ],
  },
  {
    question: "Were certificates provided?",
    answer: ["Yes. Registered participants who met the conference attendance requirements received a Certificate of Participation."],
  },
];
