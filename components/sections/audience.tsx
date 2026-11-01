import { ButtonLink } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/ui/icon";
import { Panel } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { audiences, audiencesLead, audiencesNote } from "@/content/audiences";
import { event } from "@/content/event";

/** Centre icon and three badge icons per audience, in content order. */
const ART: [IconName, IconName, IconName, IconName][] = [
  ["code", "terminal", "branch", "server"],
  ["lock", "shield", "key", "alert"],
  ["graduation", "layers", "code", "users"],
  ["rocket", "card", "link", "store"],
  ["bank", "card", "shield", "key"],
  ["cpu", "bot", "link", "layers"],
];

const BADGES = ["left-[18%] top-[48%]", "right-[22%] top-[6%]", "right-[22%] bottom-[2%]"];

/** Rings with a brand circle in the middle and small square badges around it. Decorative. */
function RingArt({ icons }: { icons: [IconName, IconName, IconName, IconName] }) {
  const [centre, ...badges] = icons;
  return (
    <div aria-hidden="true" className="relative mx-auto mt-8 size-40">
      {[100, 80, 60].map((size) => (
        <span
          key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line"
          style={{ width: `${size}%`, height: `${size}%` }}
        />
      ))}
      <span className="absolute top-1/2 left-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-on-dark">
        <Icon name={centre} size={26} />
      </span>
      {badges.map((icon, index) => (
        <span key={icon} className={`absolute inline-flex size-7 items-center justify-center rounded-md bg-brand text-on-dark ${BADGES[index]}`}>
          <Icon name={icon} size={15} />
        </span>
      ))}
    </div>
  );
}

export function Audience() {
  return (
    <Panel id="audience" labelledBy="audience-title">
      <SectionHeader
        id="audience-title"
        eyebrow="Audience"
        weight="bold"
        title="Who should attend?"
        lead={audiencesLead}
        action={
          <ButtonLink href={event.registration.url} variant="brand" size="lg" lumaEventId={event.registration.lumaEventId}>
            Register for {event.shortName}
          </ButtonLink>
        }
      />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
        {audiences.map((audience, index) => (
          <li key={audience.title} className="rounded-md bg-canvas p-6">
            <h3 className="text-2xl font-normal text-brand dark:text-link">{audience.title}</h3>
            <p className="mt-3 text-[1.0625rem] text-muted">{audience.description}</p>
            <RingArt icons={ART[index]} />
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center text-base text-muted">{audiencesNote}</p>
    </Panel>
  );
}
