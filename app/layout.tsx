import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteDescription = "APICon Tanzania 2026 brings together developers, cybersecurity professionals, startups, technology companies, students and API providers to learn, showcase, discover and secure APIs. Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.";

export const metadata: Metadata = {
  metadataBase: new URL("https://apicon.or.tz"),
  applicationName: "APICon Tanzania",
  authors: [{ name: "APICon Tanzania" }],
  description: siteDescription,
  keywords: ["APICon Tanzania", "API conference Tanzania", "API Security Tanzania", "API Development", "DevSecOps", "API Marketplace", "developer conference Tanzania", "FinTech APIs", "AI APIs", "cybersecurity conference Tanzania", "API ecosystem Tanzania", "AI agents", "MCP"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  icons: { icon: "/assets/images/favicon.svg", apple: "/assets/images/favicon.svg" },
  other: {
    "referrer": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    "apple-mobile-web-app-title": "APICon Tanzania",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "format-detection": "telephone=yes",
    "geo.region": "TZ",
    "geo.placename": "Dar es Salaam",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101427",
};

const themeBootstrap = `try{if(localStorage.getItem('apicon-theme')==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  // Bootstrap's `:root { scroll-behavior: smooth }` outranks the legacy `html { scroll-behavior: auto }`,
  // so the router needs `data-scroll-behavior` to suspend it while restoring scroll on route transitions.
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <link rel="llms-txt" href="/llms.txt" />
      </head>
      <body>{children}</body>
    </html>
  );
}
