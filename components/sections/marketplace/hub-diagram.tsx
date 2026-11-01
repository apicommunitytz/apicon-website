import { Icon, type IconName } from "@/components/ui/icon";
import { JsonCard, type Json } from "../json-card";

/** Dark box with a faint grid, a brand tile in the middle and small satellite icons. */
function GridBox({ icon }: { icon: IconName }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-lg bg-ink/40 [background-image:linear-gradient(var(--navy-line)_1px,transparent_1px),linear-gradient(90deg,var(--navy-line)_1px,transparent_1px)] [background-size:72px_72px]">
      <span className="absolute top-1/2 left-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-brand text-on-dark shadow-lg shadow-ink/30">
        <Icon name={icon} size={30} />
      </span>
      {(["code", "key"] as IconName[]).map((name, index) => (
        <span
          key={name}
          className="absolute inline-flex size-8 items-center justify-center rounded-full bg-navy-raised text-on-dark-muted"
          style={index === 0 ? { left: "18%", top: "58%" } : { left: "70%", top: "22%" }}
        >
          <Icon name={name} size={14} />
        </span>
      ))}
    </div>
  );
}

/** Dark box with concentric arcs and a brand tile, like a radar of connections. */
function RingBox({ icon }: { icon: IconName }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-lg bg-ink/40">
      {[10, 16, 22].map((size) => (
        <span
          key={size}
          className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy-line"
          style={{ width: `${size}rem`, height: `${size}rem` }}
        />
      ))}
      <span className="absolute top-1/2 left-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-brand text-on-dark shadow-lg shadow-ink/30">
        <Icon name={icon} size={30} />
      </span>
      {(["users", "link"] as IconName[]).map((name, index) => (
        <span
          key={name}
          className="absolute inline-flex size-8 items-center justify-center rounded-full bg-navy-raised text-on-dark-muted"
          style={index === 0 ? { left: "14%", top: "28%" } : { left: "78%", top: "52%" }}
        >
          <Icon name={name} size={14} />
        </span>
      ))}
    </div>
  );
}

function Caption({ lead, text }: { lead: string; text: string }) {
  return (
    <p className="mt-6 max-w-sm text-lg leading-snug">
      <strong className="font-semibold text-on-dark">{lead}:</strong> <span>{text}</span>
    </p>
  );
}

type HubDiagramProps = {
  icon: IconName;
  data: Record<string, Json>;
  label: string;
  left: { title: string; description: string };
  right: { title: string; description: string };
};

/** Two illustrated boxes joined to a JSON card by dotted connectors, with captions underneath. */
export function HubDiagram({ icon, data, label, left, right }: HubDiagramProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr_1fr] lg:items-start lg:gap-0">
      <div>
        <GridBox icon="store" />
        <Caption lead={left.title} text={left.description} />
      </div>
      <div className="relative lg:px-10 lg:pt-6">
        <span aria-hidden="true" className="absolute top-20 -left-1 hidden h-px w-11 border-t-2 border-dotted border-accent/60 lg:block" />
        <span aria-hidden="true" className="absolute top-[11.5rem] -right-1 hidden h-px w-11 border-t-2 border-dotted border-accent/60 lg:block" />
        <JsonCard data={data} label={label} />
      </div>
      <div className="lg:pt-24">
        <RingBox icon={icon} />
        <Caption lead={right.title} text={right.description} />
      </div>
    </div>
  );
}
