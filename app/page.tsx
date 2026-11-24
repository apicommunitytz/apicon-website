import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { ReferenceMarkup } from "@/components/layout/reference-markup";
import { Marketplace } from "@/components/sections/marketplace";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { About } from "@/components/sections/about";
import { WhyApicon } from "@/components/sections/why-apicon";
import { SpeakersTeaser } from "@/components/sections/speakers-teaser";
import { RecapVideo } from "@/components/sections/recap-video";
import { Contact } from "@/components/sections/contact";
import { event } from "@/content/event";
import { faq } from "@/content/faq";
import type { RichPart } from "@/content/types";
import { beforeMarketplace, afterMarketplace, afterSpeakers } from "@/content/reference/home";
import { homeStructuredData } from "@/lib/structured-data";

const description = event.description;

/** Once the conference is over, imported reference copy switches from invitation to recap. */
const POST_EVENT_COPY: Array<[string, string]> = [
  ['data-count="100" data-suffix="+" id="sn2">100+</div><div class="stat-l">Available Seats</div>', `data-count="${event.recap.attendees}" id="sn2">${event.recap.attendees}</div><div class="stat-l">Attendees</div>`],
  ['<div class="stat-l">Event Date</div>', '<div class="stat-l">Held On</div>'],
  ['data-suffix=", November" id="sn4">Saturday 21, November<', 'data-suffix=", November&nbsp;2026" id="sn4">Saturday 21, November&nbsp;2026<'],
  ["Why Attend APICon Tanzania 2026?", "Why Attend APICon Tanzania?"],
  ['<span class="theme-static-label">THEME</span>', '<span class="theme-static-label">APICon 2026 THEME</span>'],
];

const escapeHtml = (text: string) =>
  text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const richHtml = (parts: RichPart[]) =>
  parts
    .map((part) =>
      typeof part === "string"
        ? escapeHtml(part)
        : `<a class="faq-link" href="${escapeHtml(part.href)}"${part.external ? ' rel="noopener noreferrer" target="_blank"' : ""}>${escapeHtml(part.text)}</a>`,
    )
    .join("");

/** The visible FAQ is built from content/faq.ts so it always matches the FAQ structured data. */
const faqListHtml = `<div class="faq-list">${faq
  .map(
    (item) =>
      `<div class="faq-it" data-state="closed"><button aria-expanded="false" class="faq-q" type="button">${escapeHtml(item.question)}<span class="faq-ico">+</span></button><div class="faq-a"><div class="faq-a-in">${richHtml(item.answer)}</div></div></div>`,
  )
  .join("")}</div>`;

const recapCopy = (markup: string) =>
  event.concluded
    ? POST_EVENT_COPY.reduce((text, [from, to]) => text.replaceAll(from, to), markup).replace(
        /(<section\b[^>]*\bid="faq"[^>]*>[\s\S]*?)<div class="faq-list">[\s\S]*?(<\/section>)/,
        (_, head: string, close: string) => `${head}${faqListHtml}${close}`,
      )
    : markup;
const overviewMarkup = beforeMarketplace.slice(beforeMarketplace.indexOf("</header>") + "</header>".length);
const referenceAbout = /<section\b[^>]*\bid="about"[^>]*>[\s\S]*?<\/section>/.exec(overviewMarkup);
const beforeAbout = overviewMarkup.slice(0, referenceAbout?.index ?? 0);
const afterAbout = referenceAbout
  ? overviewMarkup.slice(referenceAbout.index + referenceAbout[0].length)
  : overviewMarkup;
const referenceWhy = /<section\b[^>]*\bid="why-apicon"[^>]*>[\s\S]*?<\/section>/.exec(afterAbout);
const afterWhy = referenceWhy
  ? afterAbout.slice(referenceWhy.index + referenceWhy[0].length)
  : afterAbout;
const remainingOverview = afterWhy.replace(/<section\b[^>]*\bid="value"[^>]*>[\s\S]*?<\/section>/, "");
const conferenceDetails = recapCopy(afterMarketplace)
  .replace('data-count="5" data-suffix="+" id="sn1">5+', 'data-count="11" data-suffix="+" id="sn1">11+')
  .replace(/<section\b[^>]*\bid="topics"[^>]*>[\s\S]*?<\/section>/, "");
const speakersOnward = recapCopy(afterSpeakers);
const referenceContact = /<section\b[^>]*\bid="contact"[^>]*>[\s\S]*?<\/section>/.exec(speakersOnward);
const beforeContact = speakersOnward.slice(0, referenceContact?.index ?? speakersOnward.length);
const afterContact = referenceContact
  ? speakersOnward.slice(referenceContact.index + referenceContact[0].length)
  : "";

export const metadata: Metadata = {
  title: "APICon Tanzania 2026 | API Development, API Security & Innovation",
  description,
  alternates: { canonical: "/", languages: { en: "/", "x-default": "/" } },
  openGraph: {
    type: "website",
    title: "APICon Tanzania 2026 | API Development, API Security & Innovation",
    description: "Relive APICon Tanzania 2026: developers, cybersecurity professionals, startups, technology companies, students and API providers came together on Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.",
    url: "/",
    siteName: "APICon Tanzania 2026",
    locale: "en_TZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "APICon Tanzania 2026 | API Development, API Security & Innovation",
    description: "Relive APICon Tanzania 2026, held on Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData entries={homeStructuredData} />
      <Hero />
      <ReferenceMarkup markup={beforeAbout} />
      <About />
      <RecapVideo />
      <WhyApicon />
      <ReferenceMarkup markup={remainingOverview} />
      <Marketplace />
      <ReferenceMarkup markup={conferenceDetails} />
      <SpeakersTeaser />
      <Highlights />
      <ReferenceMarkup markup={beforeContact} />
      <Contact />
      <ReferenceMarkup markup={afterContact} />
    </>
  );
}
