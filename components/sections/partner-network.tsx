import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Chip } from "@/components/ui/section-header";
import { partners } from "@/content/partners";
import { PartnerLogo, PartnerNetworkDiagram } from "./partner-network-diagram";

export function PartnerNetwork() {
  return (
    <section aria-labelledby="partner-network-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-brand text-on-dark">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.45fr] lg:gap-16">
          <div>
            <Chip tone="light">Our partners</Chip>
            <h2 id="partner-network-title" className="mt-6 text-4xl font-bold tracking-[-0.025em] text-on-dark md:text-5xl">
              Building the API ecosystem together
            </h2>
            <p className="mt-5 text-lg">Supporting a stronger, safer and more connected API community in Tanzania.</p>
            <div className="mt-8">
              <ButtonLink href="#partners" variant="light" size="lg">
                Become a partner
              </ButtonLink>
            </div>
          </div>
          <PartnerNetworkDiagram />
          <ul className="grid grid-cols-2 gap-4 md:hidden">
            {partners.map((partner) => (
              <li key={partner.name}>
                <div className="aspect-[128/76] rounded-lg bg-canvas p-3">
                  <PartnerLogo partner={partner} sizes="45vw" />
                </div>
                <p className="mt-2 text-center text-xs font-medium">{partner.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
