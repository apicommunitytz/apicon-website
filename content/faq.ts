import { emails, mailto } from "./contacts";
import { event } from "./event";
import type { RichPart } from "./types";

export type FaqItem = { question: string; answer: RichPart[] };

export const faq: FaqItem[] = [
  {
    question: "Where is APICon Tanzania 2026 being held?",
    answer: ["APICon Tanzania 2026 will be held on Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania."],
  },
  {
    question: "Who can attend APICon Tanzania?",
    answer: ["APICon Tanzania welcomes software developers and engineers, cybersecurity professionals, university students and emerging talent, startups and founders, FinTech, banking and payment organizations, AI and technology companies, API providers, and other participants interested in building and securing modern API-driven systems."],
  },
  {
    question: "Is APICon Tanzania only for students?",
    answer: ["No. Students remain an important part of APICon Tanzania, but the conference is designed for the wider API and digital technology ecosystem, including developers, cybersecurity professionals, startups, API providers, financial technology organizations, AI companies, and industry participants."],
  },
  {
    question: "What is the API Marketplace & Innovation Hub?",
    answer: ["The API Marketplace & Innovation Hub is a physical discovery and showcase area where organizations can demonstrate APIs, SDKs, developer platforms, cybersecurity solutions, AI services, integrations, and API-enabled products while developers explore technologies they can build with, secure, test, or integrate."],
  },
  {
    question: "Can a company showcase its API or product at APICon?",
    answer: [
      "Yes. Relevant organizations can participate as Marketplace Exhibitors and showcase APIs, developer platforms, products, tools, cybersecurity solutions, or digital services. Send partnership and exhibition enquiries to ",
      { text: emails.partnerships, href: mailto(emails.partnerships) },
      ".",
    ],
  },
  {
    question: "Is API Security still a core part of APICon Tanzania?",
    answer: ["Yes. API Security remains one of the core pillars of APICon Tanzania 2026. Sessions will cover secure API design, authentication and authorization, OWASP API Security risks, DevSecOps, API testing, real-world vulnerabilities, and defensive practices."],
  },
  {
    question: "What topics will be covered?",
    answer: ["Topics include API fundamentals and architecture, API Security, authentication and identity, DevSecOps and secure software development, API platforms and developer experience, FinTech and digital payment APIs, AI agents and Model Context Protocol (MCP), interoperability, tool discovery, permissions, observability, AI/API security and governance, and real-world API incidents and demonstrations."],
  },
  {
    question: "How do I register?",
    answer: [
      "Registration is open. Use any Register button on this page, or visit ",
      { text: "APICon Tanzania on Luma", href: event.registration.profileUrl, external: true },
      ".",
    ],
  },
  {
    question: "Is the conference free or paid?",
    answer: [
      "APICon Tanzania 2026 is a paid conference. Ticket prices and details are on the ",
      { text: "Luma registration page", href: event.registration.url, external: true },
      ".",
    ],
  },
  {
    question: "Will certificates be provided?",
    answer: ["Registered participants who meet the conference attendance requirements will receive a Certificate of Participation."],
  },
];
