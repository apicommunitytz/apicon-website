import { ButtonLink } from "@/components/ui/button";
import { GearRing, Node, Pad, Trace } from "@/components/ui/circuit";
import type { IconName } from "@/components/ui/icon";
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

type Point = [number, number];

// 240×170 grid: centre node at (120,85) inside the gear ring; badges wired from the node's edge at 45°.
const BADGES: { at: Point; trace: Point[] }[] = [
  { at: [36, 120], trace: [[97, 108], [85, 120], [53, 120]] },
  { at: [200, 40], trace: [[143, 62], [165, 40], [183, 40]] },
  { at: [204, 130], trace: [[143, 108], [165, 130], [187, 130]] },
];

/** The logo's gear ring around a brand node, with three badges wired to it. Decorative. */
function RingArt({ icons }: { icons: [IconName, IconName, IconName, IconName] }) {
  const [centre, ...badges] = icons;
  return (
    <svg viewBox="0 0 240 170" aria-hidden="true" className="mx-auto mt-6 w-full max-w-64">
      <GearRing cx={120} cy={85} r={62} className="stroke-line text-line" />
      {BADGES.map((badge, index) => (
        <g key={index}>
          <Trace points={badge.trace} className="stroke-brand" />
          <Pad at={badge.trace[1]} r={3.5} className="fill-brand" />
          <Node at={badge.at} size={34} icon={badges[index]} tone="brand" />
        </g>
      ))}
      <Node at={[120, 85]} size={64} icon={centre} shape="circle" tone="brand" />
    </svg>
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
