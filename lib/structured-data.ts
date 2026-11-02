// JSON-LD built from the content layer, so search results always match the page.
import { socials } from "@/content/contacts";
import { event } from "@/content/event";
import { faq } from "@/content/faq";
import { speakers } from "@/content/speakers";

type JsonLd = Record<string, unknown>;

const site = `${event.siteUrl}/`;
const absolute = (path: string) => new URL(path, event.siteUrl).toString();

const organizer = { "@type": "Organization", name: "APICon Tanzania", url: site };

export const organization: JsonLd = {
  "@context": "https://schema.org",
  ...organizer,
  logo: absolute("/brand/logo.svg"),
  sameAs: socials.filter((social) => !social.href.includes("whatsapp")).map((social) => social.href),
};

const website: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "APICon Tanzania",
  url: site,
  description: event.description,
  inLanguage: "en",
};

const conference: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  startDate: event.startsAt,
  endDate: event.endsAt,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: site,
  image: absolute("/opengraph-image.png"),
  organizer,
  location: {
    "@type": "Place",
    name: event.venue.name,
    address: { "@type": "PostalAddress", addressLocality: event.venue.city, addressCountry: "TZ" },
  },
  offers: { "@type": "Offer", url: event.registration.url, availability: "https://schema.org/InStock" },
  performer: speakers.map((speaker) => ({ "@type": "Person", name: speaker.name, jobTitle: speaker.role })),
};

const faqPage: JsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.map((part) => (typeof part === "string" ? part : part.text)).join(""),
    },
  })),
};

export const homeStructuredData: JsonLd[] = [organization, website, conference, faqPage];
