export type Json = string | number | boolean | Json[] | { [key: string]: Json };

function Value({ value, depth }: { value: Json; depth: number }) {
  const pad = "  ".repeat(depth + 1);
  const close = "  ".repeat(depth);
  if (typeof value === "string") return <span className="text-on-dark">&quot;{value}&quot;</span>;
  if (typeof value !== "object") return <span className="text-accent">{String(value)}</span>;
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
      {"{\n"}
      {entries.map(([key, item], index) => (
        <span key={key}>
          {pad}
          <span className="text-accent">{key}</span>: <Value value={item} depth={depth + 1} />
          {index < entries.length - 1 ? "," : ""}
          {"\n"}
        </span>
      ))}
      {close}
      {"}"}
    </>
  );
}

/** A response body rendered as code: accent keys, white values, on the deep brand colour. */
export function JsonCard({ data, label }: { data: Record<string, Json>; label: string }) {
  return (
    <figure className="overflow-hidden rounded-lg bg-brand-deep shadow-xl shadow-ink/20">
      <figcaption className="flex items-center gap-2 border-b border-on-dark/15 px-5 py-2.5 font-mono text-xs text-on-dark/80">
        <span className="font-semibold text-accent">GET</span>
        <span className="truncate">{label}</span>
      </figcaption>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[0.9375rem] leading-6 text-on-dark/80">
        <code>
          <Value value={data} depth={0} />
        </code>
      </pre>
    </figure>
  );
}
