import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { partners } from "@/content/partners";
import { PartnerStrip } from "./partner-strip";

/** Teal panel: a two-tone statement and one action, then every partner on one drifting strip. */
export function PartnerNetwork() {
  return (
    <section aria-labelledby="partner-network-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-brand text-on-dark">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 id="partner-network-title" className="max-w-3xl text-[1.75rem] leading-snug font-normal tracking-[-0.02em] md:text-[2rem]">
              <span className="text-on-dark">Building the API ecosystem together.</span>{" "}
              <span className="text-on-dark/75">Supporting a stronger, safer and more connected API community in Tanzania.</span>
            </h2>
            <ButtonLink href="#partners" variant="light">
              Become a partner
            </ButtonLink>
          </div>
          <div className="mt-12">
            <PartnerStrip partners={partners} />
          </div>
          <p className="mt-5 text-sm text-on-dark/75">
            {partners.length} partners and sponsors so far · Partnership opportunities are open.
          </p>
        </Container>
      </div>
    </section>
  );
}
