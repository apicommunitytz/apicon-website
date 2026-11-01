import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { contactChannels, mailto, phone, socials } from "@/content/contacts";
import { event, venueLabel } from "@/content/event";
import { footerNav } from "@/content/navigation";
import { Logo } from "./logo";

const linkClass = "text-sm text-on-band-muted transition-colors hover:text-on-band";

export function Footer() {
  return (
    <footer className="bg-band text-on-band-muted">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Logo inverse className="h-12" />
          <p className="mt-5 max-w-sm text-sm">
            A community-driven API ecosystem conference connecting developers, cybersecurity professionals, startups,
            technology companies, students, and API providers.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Official channels">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-control border border-band-line text-on-band transition-colors hover:border-on-band"
                >
                  <Icon name={social.icon} size={18} label={`${social.label} (opens in a new tab)`} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-semibold text-on-band">{group.title}</h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-sm font-semibold text-on-band">Contact</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {contactChannels.map((channel) => (
              <div key={channel.email}>
                <dt className="text-xs">{channel.label}</dt>
                <dd><a href={mailto(channel.email)} className={linkClass}>{channel.email}</a></dd>
              </div>
            ))}
            <div>
              <dt className="text-xs">Phone</dt>
              <dd><a href={phone.href} className={linkClass}>{phone.display}</a></dd>
            </div>
            <div>
              <dt className="text-xs">Venue</dt>
              <dd className="text-on-band">{venueLabel}</dd>
            </div>
          </dl>
        </div>
      </Container>

      <div className="border-t border-band-line">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© 2026 {event.name}. All rights reserved.</p>
          <p>Built by the APICon Tanzania Community.</p>
        </Container>
      </div>
    </footer>
  );
}
