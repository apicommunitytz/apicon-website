import { event } from "@/content/event";
import { speakers } from "@/content/speakers";

type Json = string | number | boolean | Json[] | { [key: string]: Json };

/** The event described as an API response. Every value comes from the content layer. */
const response: Record<string, Json> = {
  event: event.name,
  date: event.startsAt.slice(0, 10),
  venue: { name: event.venue.name, city: event.venue.city },
  tracks: [...event.tracks],
  speakers: speakers.length,
  seats: event.seats,
  registration: "open",
};

function Value({ value, depth }: { value: Json; depth: number }) {
  const pad = "  ".repeat(depth + 1);
  const close = "  ".repeat(depth);
  if (typeof value === "string") return <span className="text-on-band">&quot;{value}&quot;</span>;
  if (typeof value !== "object") return <span className="text-highlight">{String(value)}</span>;
  if (Array.isArray(value)) {
    return (
      <>
        [{"\n"}
        {value.map((item, index) => (
          <span key={index}>
            {pad}
            <Value value={item} depth={depth + 1} />
            {index < value.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {close}]
      </>
    );
  }
  const entries = Object.entries(value);
  return (
    <>
      {"{"}
      {"\n"}
      {entries.map(([key, item], index) => (
        <span key={key}>
          {pad}
          <span className="text-highlight">&quot;{key}&quot;</span>: <Value value={item} depth={depth + 1} />
          {index < entries.length - 1 ? "," : ""}
          {"\n"}
        </span>
      ))}
      {close}
      {"}"}
    </>
  );
}

export function EventCard() {
  return (
    <figure className="overflow-hidden rounded-panel border border-band-line bg-band shadow-xl shadow-ink/10">
      <figcaption className="flex items-center gap-3 border-b border-band-line px-5 py-3 font-mono text-xs">
        <span className="rounded-full bg-band-raised px-2 py-0.5 font-semibold text-highlight">GET</span>
        <span className="truncate text-on-band">/events/apicon-tanzania-2026</span>
        <span className="ml-auto shrink-0 text-on-band-muted">200 OK</span>
      </figcaption>
      <pre className="overflow-x-auto p-5 font-mono text-[0.8125rem] leading-6 text-on-band-muted">
        <code>
          <Value value={response} depth={0} />
        </code>
      </pre>
    </figure>
  );
}
