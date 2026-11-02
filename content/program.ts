import type { Titled } from "./types";

export const topics: Titled[] = [
  { title: "API Fundamentals", description: "REST design, endpoints, methods, requests and responses, status codes, versioning and clear API documentation." },
  { title: "API Security", description: "OWASP API Security Top 10, authorization, data exposure, rate limiting, abuse prevention and secure-by-design practices." },
  { title: "Authentication & Identity", description: "JWT, OAuth 2.0, API keys, permission scopes, and identity and access management for modern APIs." },
  { title: "DevSecOps & Secure SDLC", description: "Security built into development: automated testing, SAST and DAST, CI/CD security and shared team ownership." },
  { title: "Developer Experience", description: "Developer portals, SDKs, sandboxes, documentation, onboarding and API management that drive real developer adoption." },
  { title: "FinTech & Payments APIs", description: "Payment integrations, banking APIs, mobile money, collections, disbursement, reliability and secure transaction flows end to end." },
  { title: "AI, Agents & MCP", description: "How AI agents call APIs: Model Context Protocol, tool discovery, scoped permissions, prompt-injection risks and observability." },
  { title: "API Governance", description: "Standards, ownership, lifecycle controls, compliance, access policies and responsible API management across teams and products." },
  { title: "Incidents & Live Demos", description: "Live examples of API vulnerabilities, attacks, failures and debugging, with the defensive controls and lessons learned." },
];

/** What participants leave with: the value lines from the original value proposition. */
export const outcomes: Titled[] = [
  { title: "Practical skills", description: "Stronger hands-on understanding of API development and API security." },
  { title: "Technology discovery", description: "Clear awareness of new APIs, platforms and integration opportunities." },
  { title: "Industry connections", description: "Partnerships, talent connections and stronger relationships across the ecosystem." },
  { title: "Security practice", description: "Responsible API adoption and stronger security practices every day." },
];
