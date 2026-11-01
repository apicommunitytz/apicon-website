import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icon";
import type { LinkKind, Person } from "@/content/types";

const LINK_META: Record<LinkKind, { icon: IconName; label: string }> = {
  linkedin: { icon: "linkedin", label: "LinkedIn" },
  github: { icon: "github", label: "GitHub" },
  x: { icon: "x", label: "X" },
  website: { icon: "globe", label: "Website" },
};

/** Speaker or organiser: photo, name, role, affiliation and profile links. */
export function PersonCard({ person, showBio = false }: { person: Person; showBio?: boolean }) {
  return (
    <article className="flex h-full flex-col bg-canvas">
      <div className="aspect-square overflow-hidden rounded-card bg-surface">
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
      <div className="flex flex-1 flex-col pt-5">
        {person.focus && <p className="text-xs font-medium tracking-[0.08em] text-primary uppercase">{person.focus}</p>}
        <h3 className="mt-2 text-lg">{person.name}</h3>
        <p className="mt-1 text-sm text-text">{person.role}</p>
        {person.affiliation && <p className="text-sm text-muted">{person.affiliation}</p>}
        {showBio && person.bio && <p className="mt-3 text-sm text-muted">{person.bio}</p>}
        {person.links.length > 0 && (
          <ul className="mt-auto flex gap-1 pt-4" aria-label={`${person.name} online`}>
            {person.links.map((link) => {
              const meta = LINK_META[link.kind];
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-ml-2 inline-flex size-9 items-center justify-center rounded-control text-muted transition-colors hover:bg-surface hover:text-ink"
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
