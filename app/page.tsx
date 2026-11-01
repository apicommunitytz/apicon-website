import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { About } from "@/components/sections/about";
import { Audience } from "@/components/sections/audience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Marketplace } from "@/components/sections/marketplace";
import { PartnerNetwork } from "@/components/sections/partner-network";
import { Partners } from "@/components/sections/partners";
import { Program } from "@/components/sections/program";
import { SpeakersTeaser } from "@/components/sections/speakers-teaser";
import { event } from "@/content/event";
import { homeStructuredData } from "@/lib/structured-data";

const description = event.description;

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
      <Marketplace />
      <About />
      <Audience />
      <PartnerNetwork />
      <Program />
      <SpeakersTeaser />
      <Partners />
      <Faq />
    </>
  );
}
