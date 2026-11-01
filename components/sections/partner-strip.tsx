import Image from "next/image";
import { Container } from "@/components/ui/section";
import { partners } from "@/content/partners";

/** Equal hairline cells with every partner logo at the same optical height. */
export function PartnerStrip() {
  return (
    <section aria-labelledby="partner-strip-title" className="border-t border-line bg-canvas">
      <Container framed className="py-10 md:py-12">
        <h2 id="partner-strip-title" className="text-center text-sm font-medium text-muted">
          Supported by partners across Tanzania&apos;s tech ecosystem
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name} className="flex h-24 items-center justify-center bg-canvas px-6 md:h-28">
              <Image
                src={partner.logo.src}
                alt={partner.logo.alt}
                width={partner.logo.width}
                height={partner.logo.height}
                sizes="160px"
                unoptimized
                className="max-h-12 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
