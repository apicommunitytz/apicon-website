import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Person } from "@/content/types";

/** Avatar positions around the rings (percent of the square) with a small badge icon each. */
const SPOTS: { left: number; top: number; badge: IconName }[] = [
  { left: 58, top: 4, badge: "shield" },
  { left: 18, top: 16, badge: "code" },
  { left: 82, top: 30, badge: "server" },
  { left: 30, top: 44, badge: "key" },
  { left: 94, top: 60, badge: "bot" },
  { left: 6, top: 66, badge: "lock" },
  { left: 76, top: 88, badge: "branch" },
  { left: 36, top: 92, badge: "card" },
];

/** Speaker photos orbiting concentric rings around the speaker count. Decorative. */
export function SpeakerOrbit({ people }: { people: Person[] }) {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-md">
      {[100, 82, 64, 46].map((size) => (
        <span
          key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy-line"
          style={{ width: `${size}%`, height: `${size}%` }}
        />
      ))}
      <p className="absolute top-1/2 left-1/2 w-32 -translate-x-1/2 -translate-y-1/2 text-center text-sm leading-snug text-on-dark">
        <span className="block text-3xl font-semibold">{people.length}</span>
        featured speakers
      </p>
      {people.slice(0, SPOTS.length).map((person, index) => {
        const spot = SPOTS[index];
        return (
          <span key={person.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${spot.left}%`, top: `${spot.top}%` }}>
            <Image
              src={person.photo.src}
              alt=""
              width={person.photo.width}
              height={person.photo.height}
              sizes="56px"
              unoptimized
              className="size-12 rounded-full border-2 border-navy object-cover object-[50%_25%] md:size-14"
            />
            <span className="absolute -right-2 -bottom-1 inline-flex size-6 items-center justify-center rounded bg-canvas text-ink">
              <Icon name={spot.badge} size={13} />
            </span>
          </span>
        );
      })}
    </div>
  );
}
