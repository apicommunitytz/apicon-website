import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { partners, type Partner } from "@/content/partners";

function LogoRow({ items, reverse = false }: { items: Partner[]; reverse?: boolean }) {
  // The list is drawn twice so the drift loops seamlessly; the copy is hidden from assistive tech.
  return (
    <div className="overflow-hidden">
      <ul className={`flex w-max gap-8 motion-safe:animate-marquee md:gap-16 ${reverse ? "[animation-direction:reverse]" : ""}`}>
        {[...items, ...items].map((partner, index) => (
          <li
            key={`${partner.name}-${index}`}
            aria-hidden={index >= items.length || undefined}
            className="flex size-36 shrink-0 items-center justify-center rounded-md bg-canvas p-6 md:size-48"
          >
            <Image
              src={partner.logo.src}
              alt={index >= items.length ? "" : `${partner.logo.alt}, ${partner.role}`}
              width={partner.logo.width}
              height={partner.logo.height}
              sizes="160px"
              unoptimized
              className="max-h-20 w-auto max-w-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Full-width brand band with partner logos on white tiles drifting in two rows. */
export function PartnerBand() {
  const half = Math.ceil(partners.length / 2);
  return (
    <section aria-labelledby="partner-band-title" className="mt-6 bg-brand py-20 text-on-dark md:py-28">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 id="partner-band-title" className="text-4xl font-bold tracking-[-0.025em] text-on-dark md:text-5xl">
            Building the API ecosystem together
          </h2>
          <p className="mt-5 text-lg">Supporting a stronger, safer and more connected API community in Tanzania.</p>
        </div>
        <ButtonLink href="#partners" variant="light" size="lg">
          Become a partner
        </ButtonLink>
      </Container>
      <div className="mt-14 flex flex-col gap-6 md:mt-20">
        <LogoRow items={[...partners.slice(0, half), ...partners.slice(half)]} />
        <LogoRow items={[...partners.slice(half), ...partners.slice(0, half)]} reverse />
      </div>
    </section>
  );
}
