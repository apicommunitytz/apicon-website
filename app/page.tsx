import type { Metadata } from "next";
import Script from "next/script";
import { LegacyPage } from "@/components/legacy-page";
import { StructuredData } from "@/components/structured-data";
import { homeMarkup } from "@/lib/home-content";
import { homeStructuredData } from "@/lib/structured-data";

const description = "APICon Tanzania 2026 brings together developers, cybersecurity professionals, startups, technology companies, students and API providers to learn, showcase, discover and secure APIs. Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.";

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
    images: [{ url: "/assets/images/og-image.png", width: 1200, height: 630, alt: "APICon Tanzania 2026 — API Development, API Security & Innovation Conference in Dar es Salaam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "APICon Tanzania 2026 | API Development, API Security & Innovation",
    description: "Learn, discover, showcase and secure APIs at APICon Tanzania 2026 on Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.",
    images: ["/assets/images/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData entries={homeStructuredData} />
      <LegacyPage markup={homeMarkup} />
      <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" strategy="afterInteractive" />
    </>
  );
}
