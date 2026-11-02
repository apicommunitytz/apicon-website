import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { marketplace } from "@/content/marketplace";

export function Marketplace() {
  return (
    <section id="marketplace" aria-labelledby="marketplace-title" className="my-6 px-2 sm:px-2.5">
      <div className="rounded-panel border border-hero-accent/20 bg-hero-background text-on-dark">
        <Container className="flex flex-col items-start gap-8 py-12 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-hero-accent uppercase">{marketplace.title}</p>
            <h2 id="marketplace-title" className="mt-4 text-3xl font-semibold tracking-tight text-on-dark md:text-4xl">
              {marketplace.lead}
            </h2>
            <p className="mt-5 text-lg text-on-dark-muted">{marketplace.experience}</p>
          </div>
          <ButtonLink href={marketplace.onlineUrl} variant="light" size="lg">
            Explore API Marketplace
          </ButtonLink>
        </Container>
      </div>
    </section>
  );
}
