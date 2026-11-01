import type { Titled } from "./types";

export const topics: Titled[] = [
  {
    title: "API Fundamentals & Architecture",
    description: "REST APIs, endpoints, methods, requests, responses, status codes, versioning and documentation.",
  },
  {
    title: "API Security",
    description:
      "OWASP API Security Top 10, authorization, authentication, data exposure, rate limiting, abuse prevention and secure-by-design practices.",
  },
  {
    title: "Authentication & Identity",
    description: "JWT, OAuth 2.0, API keys, permission scopes, identity and access management.",
  },
  {
    title: "DevSecOps & Secure SDLC",
    description:
      "Security integration in development, automated testing, SAST/DAST, CI/CD security and collaboration between development and security teams.",
  },
  {
    title: "API Platforms & Developer Experience",
    description:
      "Developer portals, SDKs, sandboxes, documentation, onboarding, API management and developer adoption.",
  },
  {
    title: "FinTech & Digital Payments APIs",
    description:
      "Payment integrations, banking APIs, mobile money, collections, disbursement, reliability and secure transaction flows.",
  },
  {
    title: "AI, Agents & APIs",
    description:
      "How AI agents consume and invoke APIs; Model Context Protocol (MCP); interoperability and tool discovery; scoped permissions; prompt-injection and data-exposure risks; governance; auditability; and end-to-end observability in AI-enabled systems.",
  },
  {
    title: "API Governance",
    description:
      "Standards, ownership, lifecycle controls, compliance, access policies and responsible API management.",
  },
  {
    title: "Real-World Incidents & Demonstrations",
    description:
      "Practical examples of API vulnerabilities, attacks, failures, debugging, defensive controls and lessons learned.",
  },
];

/** What participants leave with: the value lines from the original value proposition. */
export const outcomes: Titled[] = [
  { title: "Practical skills", description: "Stronger technical understanding of API development and security." },
  { title: "Technology discovery", description: "Awareness of APIs, platforms and integration opportunities." },
  { title: "Industry connections", description: "Partnerships, talent connections and stronger ecosystem relationships." },
  { title: "Security practice", description: "Responsible API adoption and stronger security practices." },
];
