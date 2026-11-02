import clsx from "clsx";
import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icon";
import type { LinkKind, Person } from "@/content/types";

const LINK_META: Record<LinkKind, { icon: IconName; label: string }> = {
  linkedin: { icon: "linkedin", label: "LinkedIn" },
  github: { icon: "github", label: "GitHub" },
  x: { icon: "x", label: "X" },
  website: { icon: "globe", label: "Website" },
};

type PersonCardProps = { person: Person; showBio?: boolean; tone?: "light" | "dark" };

/** Speaker or organiser card: photo, focus label, name, role, affiliation and profile links. */
export function PersonCard({ person, showBio = false, tone = "light" }: PersonCardProps) {
  const dark = tone === "dark";
  return (
    <article className={clsx("flex h-full flex-col rounded-lg p-3", dark ? "bg-navy-raised" : "bg-canvas")}>
      <div className="aspect-square overflow-hidden rounded-md bg-surface">
        <Image
          src={person.photo.src}
          alt={person.name}
          width={person.photo.width}
          height={person.photo.height}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 80vw"
          unoptimized
          loading="lazy"
          className="size-full object-cover object-[50%_25%]"
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
        {person.focus && (
          <p className={clsx("text-[0.6875rem] font-semibold tracking-[0.06em] uppercase", dark ? "text-accent" : "text-link")}>{person.focus}</p>
        )}
        <h3 className={clsx("mt-1.5 text-xl font-medium", dark ? "text-on-dark" : "text-ink")}>{person.name}</h3>
        <p className={clsx("mt-1 text-[0.9375rem]", dark ? "text-on-dark-muted" : "text-text")}>{person.role}</p>
        {person.affiliation && <p className={clsx("text-[0.9375rem]", dark ? "text-on-dark" : "text-muted")}>{person.affiliation}</p>}
        {showBio && person.bio && <p className={clsx("mt-3 text-sm", dark ? "text-on-dark-muted" : "text-muted")}>{person.bio}</p>}
        {person.links.length > 0 && (
          <ul className="mt-auto flex gap-2 pt-5" aria-label={`${person.name} online`}>
            {person.links.map((link) => {
              const meta = LINK_META[link.kind];
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "inline-flex size-9 items-center justify-center rounded-md border transition-colors",
                      dark ? "border-navy-line text-on-dark hover:border-on-dark" : "border-line text-ink hover:border-ink",
                    )}
                  >
                    <Icon name={meta.icon} size={16} label={`${person.name} on ${meta.label} (opens in a new tab)`} />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </article>
  );
}
