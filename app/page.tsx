import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { ReferenceMarkup } from "@/components/layout/reference-markup";
import { Marketplace } from "@/components/sections/marketplace";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhyApicon } from "@/components/sections/why-apicon";
import { SpeakersTeaser } from "@/components/sections/speakers-teaser";
import { Contact } from "@/components/sections/contact";
import { event } from "@/content/event";
import { beforeMarketplace, afterMarketplace, afterSpeakers } from "@/content/reference/home";
import { homeStructuredData } from "@/lib/structured-data";

const description = event.description;
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
const conferenceDetails = afterMarketplace
  .replace('data-count="5" data-suffix="+" id="sn1">5+', 'data-count="9" data-suffix="+" id="sn1">9+')
  .replace(/<section\b[^>]*\bid="topics"[^>]*>[\s\S]*?<\/section>/, "");
const referenceContact = /<section\b[^>]*\bid="contact"[^>]*>[\s\S]*?<\/section>/.exec(afterSpeakers);
const beforeContact = afterSpeakers.slice(0, referenceContact?.index ?? afterSpeakers.length);
const afterContact = referenceContact
  ? afterSpeakers.slice(referenceContact.index + referenceContact[0].length)
  : "";

export const metadata: Metadata = {
  title: "APICon Tanzania 2026 | API Development, API Security & Innovation",
  description,
  alternates: { canonical: "/", languages: { en: "/", "x-default": "/" } },
  openGraph: {
    type: "website",
    title: "APICon Tanzania 2026 | API Development, API Security & Innovation",
    description: "Learn, discover, showcase and secure APIs at APICon Tanzania 2026. Join developers, cybersecurity professionals, startups, technology companies, students and API providers on Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.",
    url: "/",
    siteName: "APICon Tanzania 2026",
    locale: "en_TZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "APICon Tanzania 2026 | API Development, API Security & Innovation",
    description: "Learn, discover, showcase and secure APIs at APICon Tanzania 2026 on Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData entries={homeStructuredData} />
      <Hero />
      <ReferenceMarkup markup={beforeAbout} />
      <About />
      <WhyApicon />
      <ReferenceMarkup markup={remainingOverview} />
      <Marketplace />
      <ReferenceMarkup markup={conferenceDetails} />
      <SpeakersTeaser />
      <ReferenceMarkup markup={beforeContact} />
      <Contact />
      <ReferenceMarkup markup={afterContact} />
    </>
  );
}
