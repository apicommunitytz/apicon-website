type StructuredDataProps = {
  entries: readonly Record<string, unknown>[];
};

/** Serialises JSON-LD safely: "<" is escaped so content can never close the script tag. */
export function StructuredData({ entries }: StructuredDataProps) {
  return entries.map((entry, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, "\\u003c") }}
    />
  ));
}
