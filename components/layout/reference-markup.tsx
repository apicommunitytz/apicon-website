/** Original site markup with its own scoped typography, colours, and layout. */
export function ReferenceMarkup({ markup }: { markup: string }) {
  return <div className="reference-design" dangerouslySetInnerHTML={{ __html: markup }} />;
}
