import Image from "next/image";
import { GearRing } from "@/components/ui/circuit";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Person } from "@/content/types";

// 400×400 grid, centre (200,200). Outer orbit r=160 on the axes, inner orbit r=118 on the diagonals.
const SPOTS: { at: [number, number]; badge: IconName }[] = [
  { at: [200, 40], badge: "shield" },
  { at: [283, 117], badge: "code" },
  { at: [360, 200], badge: "server" },
  { at: [283, 283], badge: "key" },
  { at: [200, 360], badge: "bot" },
  { at: [117, 283], badge: "lock" },
  { at: [40, 200], badge: "branch" },
  { at: [117, 117], badge: "card" },
];

/** Speaker photos on two orbits around the logo's gear ring, with the speaker count at the centre. Decorative. */
export function SpeakerOrbit({ people }: { people: Person[] }) {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <circle cx={200} cy={200} r={160} fill="none" strokeWidth={1.5} className="stroke-on-dark/30" />
        <circle cx={200} cy={200} r={118} fill="none" strokeWidth={1.5} strokeDasharray="4 6" className="stroke-on-dark/30" />
        <GearRing cx={200} cy={200} r={64} className="stroke-on-dark/45 text-on-dark/45" />
      </svg>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-tight text-on-dark">
        <span className="block text-4xl font-semibold">{people.length}</span>
        <span className="text-sm">speakers</span>
      </p>
      {people.slice(0, SPOTS.length).map((person, index) => {
        const { at, badge } = SPOTS[index];
        return (
          <span
            key={person.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${at[0] / 4}%`, top: `${at[1] / 4}%` }}
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
