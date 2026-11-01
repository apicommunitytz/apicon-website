import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { themeBootstrapScript } from "@/components/layout/theme-toggle";
import { event } from "@/content/event";
import { brand } from "@/lib/brand";
import { inter } from "./fonts";
import "./tokens.css";

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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  // `data-scroll-behavior` lets the router suspend smooth scrolling while restoring position on navigation.
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
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
        <Footer />
        <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
