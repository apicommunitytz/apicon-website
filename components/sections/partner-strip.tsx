import clsx from "clsx";
import Image from "next/image";
import type { Partner } from "@/content/partners";

function Cell({ partner, hidden = false }: { partner: Partner; hidden?: boolean }) {
  // Copies exist only for the seamless loop; they are hidden from assistive tech and when motion is off.
  return (
    <li
      aria-hidden={hidden || undefined}
      className={clsx("flex h-28 w-52 shrink-0 items-center justify-center border-r border-line px-8 md:h-32 md:w-60 motion-reduce:w-auto motion-reduce:border-b", hidden && "motion-reduce:hidden")}
    >
      <Image
        src={partner.logo.src}
        alt={hidden ? "" : `${partner.logo.alt}, ${partner.role}`}
        title={`${partner.name} · ${partner.role}`}
        width={partner.logo.width}
        height={partner.logo.height}
        sizes="180px"
        unoptimized
        className="max-h-14 w-auto max-w-full object-contain"
      />
    </li>
  );
}

/**
 * One row of equal logo cells divided by rules. It drifts slowly and pauses on hover;
 * with reduced motion it stands still as an even grid. Any number of partners fits.
 */
export function PartnerStrip({ partners }: { partners: Partner[] }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-canvas [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] motion-reduce:[mask-image:none]">
      <ul className="flex w-max motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] motion-reduce:grid motion-reduce:w-full motion-reduce:grid-cols-2 sm:motion-reduce:grid-cols-3 lg:motion-reduce:grid-cols-6">
        {partners.map((partner) => (
          <Cell key={partner.name} partner={partner} />
        ))}
        {partners.map((partner) => (
          <Cell key={`copy-${partner.name}`} partner={partner} hidden />
        ))}
      </ul>
    </div>
  );
}
