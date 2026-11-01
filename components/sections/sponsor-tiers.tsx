import { partners, sponsorTiers } from "@/content/partners";

/** Silver, Gold and Diamond side by side, with current sponsors shown in their tier. */
export function SponsorTiers() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-panel border border-line bg-line lg:grid-cols-3">
      {sponsorTiers.map((tier) => {
        const sponsors = partners.filter((partner) => tier.sponsors.includes(partner.name));
        return (
          <li key={tier.name} className="flex flex-col bg-canvas p-6 md:p-8">
            <p className="text-xs font-medium tracking-[0.08em] text-muted uppercase">Premium sponsorship</p>
            <h4 className="mt-2 text-2xl">{tier.name}</h4>
            <p className="mt-2 text-muted">{tier.summary}</p>
            {tier.inherits && <p className="mt-5 text-sm font-semibold text-ink">{tier.inherits}</p>}
            <ul className="mt-3 space-y-2 text-sm">
              {tier.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-highlight" />
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-4 text-sm font-semibold text-ink">{tier.tickets}</p>
            <p className="mt-auto pt-6 text-sm text-muted">
              {sponsors.length > 0 ? (
                <>
                  <span className="sr-only">Current sponsors: </span>
                  {sponsors.map((sponsor) => sponsor.name).join(", ")}
                </>
              ) : (
                "Available"
              )}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
