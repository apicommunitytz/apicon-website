import Image from "next/image";
import { GearRing } from "@/components/ui/circuit";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Person } from "@/content/types";

const CX = 200;
const CY = 200;

const BADGES: IconName[] = ["shield", "code", "server", "key", "bot", "lock", "branch", "card", "cpu", "terminal"];

/**
 * Seat speakers around the circle at equal angles, alternating outer / inner radius.
 * Equal angular spacing keeps faces from stacking; alternating rings matches the original look.
 */
function placeSpeakers(count: number): { at: [number, number]; radius: number }[] {
  if (count <= 0) return [];
  // Pull the rings apart a little once the cast grows past eight.
  const outerR = count >= 9 ? 168 : 160;
  const innerR = count >= 9 ? 100 : 118;

  return Array.from({ length: count }, (_, index) => {
    const angle = ((-90 + (360 / count) * index) * Math.PI) / 180;
    const radius = index % 2 === 0 ? outerR : innerR;
    return {
      at: [CX + radius * Math.cos(angle), CY + radius * Math.sin(angle)],
      radius,
    };
  });
}

/** Speaker photos on two orbits around the logo's gear ring, with the speaker count at the centre. Decorative. */
export function SpeakerOrbit({ people }: { people: Person[] }) {
  const spots = placeSpeakers(people.length);
  const outerR = people.length >= 9 ? 168 : 160;
  const innerR = people.length >= 9 ? 100 : 118;

  return (
    <div aria-hidden="true" className="speaker-orbit relative mx-auto aspect-square w-full max-w-[30rem]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <g className="speaker-orbit__spin">
          <circle cx={CX} cy={CY} r={outerR} fill="none" strokeWidth={1.5} className="stroke-on-dark/30" />
        </g>
        <g className="speaker-orbit__spin-reverse">
          <circle
            cx={CX}
            cy={CY}
            r={innerR}
            fill="none"
            strokeWidth={1.5}
            strokeDasharray="4 6"
            className="stroke-on-dark/30"
          />
        </g>
        <GearRing cx={CX} cy={CY} r={64} className="stroke-on-dark/45 text-on-dark/45" />
      </svg>

      <p className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center leading-tight text-on-dark">
        <span className="block text-4xl font-semibold">{people.length}</span>
        <span className="text-sm">speakers</span>
      </p>

      {people.map((person, index) => {
        const spot = spots[index];
        if (!spot) return null;
        const [x, y] = spot.at;
        const badge = BADGES[index % BADGES.length];
        return (
          <span
            key={person.name}
            className="speaker-orbit__face absolute z-[1] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x / 4}%`, top: `${y / 4}%`, animationDelay: `${index * 70}ms` }}
          >
            <Image
              src={person.photo.src}
              alt=""
              width={person.photo.width}
              height={person.photo.height}
              sizes="72px"
              unoptimized
              className="size-14 rounded-full border-[3px] border-on-dark object-cover object-[50%_25%] md:size-[4.25rem]"
            />
            <span className="absolute -right-1.5 -bottom-1 inline-flex size-7 items-center justify-center rounded-md bg-navy text-on-dark">
              <Icon name={badge} size={14} />
            </span>
          </span>
        );
      })}
    </div>
  );
}
