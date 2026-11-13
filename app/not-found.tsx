import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Chip } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Page not found | APICon Tanzania 2026",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="bg-page text-text">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center md:py-32">
        <Chip>404</Chip>
        <h1 id="not-found-title" className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.03em] text-ink md:text-6xl">
          This page could not be found
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
          The link may be broken, or the page may have moved. Head back to the homepage to continue exploring APICon Tanzania 2026.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" variant="brand" size="lg">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
