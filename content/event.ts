// Single source of truth for the conference facts. Dates are ISO 8601 in East Africa Time.
const LUMA_EVENT_ID = "evt-5cbBD1IFUYyZjHG";

export const event = {
  name: "APICon Tanzania 2026",
  shortName: "APICon",
  siteUrl: "https://apicon.or.tz",
  headline: "Where Tanzania's API ecosystem meets",
  summary:
    "Where developers, security experts, startups, and technology leaders connect to build and secure the future of APIs.",
  description:
    "APICon Tanzania 2026 brings together developers, cybersecurity professionals, startups, technology companies, students and API providers to learn, showcase, discover and secure APIs. Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.",
  theme: "Secure APIs. Build the future.",
  tracks: ["API Development", "API Security", "AI Agents & MCP", "API Marketplace"],
  startsAt: "2026-11-21T08:00:00+03:00",
  endsAt: "2026-11-21T17:30:00+03:00",
  dateLabel: "Saturday 21 November 2026",
  shortDateLabel: "21 Nov 2026",
  venue: {
    name: "Confucius UDSM",
    city: "Dar es Salaam",
    country: "Tanzania",
  },
  seats: "100+",
  isPaid: true,
  registration: {
    lumaEventId: LUMA_EVENT_ID,
    url: `https://luma.com/event/${LUMA_EVENT_ID}`,
    profileUrl: "https://luma.com/user/apicommunitytz",
  },
} as const;

export const venueLabel = `${event.venue.name}, ${event.venue.city}`;
