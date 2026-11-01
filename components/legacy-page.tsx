"use client";

import { useEffect } from "react";
import { useLegacyInteractions } from "@/components/use-legacy-interactions";

// Third-party and legacy styles load only on legacy pages so new pages start clean.
const LEGACY_STYLESHEETS: Array<{ href: string; integrity?: string }> = [
  { href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
  { href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0&display=swap" },
  { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" },
  { href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
  { href: "https://cdn.lineicons.com/4.0/lineicons.css", integrity: "sha384-vNhcrEMPkKG6l3cUAUkZp042GDOa4n8sjJI1l/yu7gt1ApVQC8/QS8s0Lekrg+Yp" },
  { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" },
  { href: "/css/style.css" },
];

type LegacyPageProps = {
  markup: string;
  bodyClassName?: string;
};

export function LegacyPage({ markup, bodyClassName }: LegacyPageProps) {
  useLegacyInteractions(markup);

  useEffect(() => {
    if (!bodyClassName) return;
    document.body.classList.add(bodyClassName);
    return () => document.body.classList.remove(bodyClassName);
  }, [bodyClassName]);

  return (
    <>
      {LEGACY_STYLESHEETS.map(({ href, integrity }) => (
        <link key={href} rel="stylesheet" href={href} integrity={integrity} crossOrigin={integrity ? "anonymous" : undefined} precedence="legacy" />
      ))}
      <div className="legacy-page-root" dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  );
}
