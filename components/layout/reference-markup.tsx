import { marketplace } from "@/content/marketplace";

/** Original site markup with its own scoped typography, colours, and layout. */
export function ReferenceMarkup({ markup }: { markup: string }) {
  const linkedMarkup = markup.replaceAll(
    'href="/#marketplace"',
    `href="${marketplace.onlineUrl}"`,
  );
  return <div className="reference-design" dangerouslySetInnerHTML={{ __html: linkedMarkup }} />;
}
