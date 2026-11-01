// Temporary route to review the new home page while the current one still serves "/".
// Removed when the new page replaces the legacy markup.
import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { inter } from "../fonts";
import "../tokens.css";

export const metadata: Metadata = { title: "Preview | APICon Tanzania 2026", robots: { index: false, follow: false } };

export default function PreviewPage() {
  return (
    <div className={`${inter.variable} min-h-screen bg-canvas font-sans text-text`}>
      <Header />
      <main id="main">
        <Hero />
        <PartnerStrip />
        <About />
      </main>
      <Footer />
      <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" strategy="afterInteractive" />
    </div>
  );
}
