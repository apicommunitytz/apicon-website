/* eslint-disable @next/next/no-page-custom-font, @next/next/no-css-tags -- The original design's font and scoped stylesheet links are shared in the App Router root layout. */
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { ReferenceMarkup } from "@/components/layout/reference-markup";
import { ReferenceInteractions } from "@/components/layout/reference-interactions";
import { referenceFooter } from "@/content/reference/home";
import { event } from "@/content/event";
import { brand } from "@/lib/brand";
import { inter } from "./fonts";
import "./tokens.css";
import "./reference-integration.css";

export const metadata: Metadata = {
  metadataBase: new URL(event.siteUrl),
  applicationName: "APICon Tanzania",
  authors: [{ name: "APICon Tanzania" }],
  description: event.description,
  keywords: ["APICon Tanzania", "API conference Tanzania", "API Security Tanzania", "API Development", "DevSecOps", "API Marketplace", "developer conference Tanzania", "FinTech APIs", "AI APIs", "cybersecurity conference Tanzania", "API ecosystem Tanzania", "AI agents", "MCP"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  other: {
    referrer: "strict-origin-when-cross-origin",
    "apple-mobile-web-app-title": "APICon Tanzania",
    "format-detection": "telephone=yes",
    "geo.region": "TZ",
    "geo.placename": "Dar es Salaam",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brand.canvas },
    { media: "(prefers-color-scheme: dark)", color: brand.canvasDark },
  ],
};

const themeBootstrap = `try{if(localStorage.getItem('apicon-theme')==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}`;
const footerMarkup = referenceFooter.replace(
  "Built by the APICon Tanzania Community.",
  'Built with <span class="footer-love" role="img" aria-label="love">♥︎</span> APICon Tanzania Community.🇹🇿',
);

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  // `data-scroll-behavior` lets the router suspend smooth scrolling while restoring position on navigation.
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
        <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
        <link href="/reference/design.css" rel="stylesheet" />
        <link rel="llms-txt" href="/llms.txt" />
      </head>
      <body className="min-h-screen bg-page font-sans text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <ReferenceMarkup markup={footerMarkup} />
        <ReferenceInteractions />
        <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
