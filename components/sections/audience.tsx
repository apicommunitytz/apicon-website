import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { audiences, audiencesLead, audiencesNote } from "@/content/audiences";

export function Audience() {
  return (
    <Section id="audience" labelledBy="audience-title">
      <SectionHeader id="audience-title" eyebrow="Audience" title="Who should attend?" lead={audiencesLead} />
      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience) => (
          <li key={audience.title} className="border-t border-line pt-6">
            <h3 className="text-lg">{audience.title}</h3>
            <p className="mt-2 text-muted">{audience.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-sm text-muted">{audiencesNote}</p>
    </Section>
  );
}
