import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { partners } from "@/content/partners";

/** Teal panel: a two-tone statement and one action, beside partner logos on equal tiles with their roles. */
export function PartnerNetwork() {
  return (
    <section aria-labelledby="partner-network-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-brand text-on-dark">
        <Container className="grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <h2 id="partner-network-title" className="text-[1.75rem] leading-snug font-normal tracking-[-0.02em] md:text-[2rem]">
              <span className="text-on-dark">Building the API ecosystem together.</span>{" "}
              <span className="text-on-dark/75">Supporting a stronger, safer and more connected API community in Tanzania.</span>
            </h2>
            <div className="mt-8">
              <ButtonLink href="#partners" variant="light">
                Become a partner
              </ButtonLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {partners.map((partner) => (
              <li key={partner.name} className="flex flex-col rounded-lg bg-canvas">
                <div className="flex h-32 items-center justify-center px-6">
                  <Image
                    src={partner.logo.src}
                    alt={partner.logo.alt}
                    width={partner.logo.width}
                    height={partner.logo.height}
                    sizes="180px"
                    unoptimized
                    className="max-h-16 w-auto max-w-full object-contain"
                  />
                </div>
                <p className="border-t border-line px-4 py-2.5 text-xs font-medium text-muted">{partner.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
