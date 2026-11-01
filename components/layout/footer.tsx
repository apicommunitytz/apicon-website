import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { contactChannels, mailto, phone, socials } from "@/content/contacts";
import { event, venueLabel } from "@/content/event";
import { footerNav } from "@/content/navigation";
import { Logo } from "./logo";

const linkClass = "text-[0.9375rem] text-on-dark-muted transition-colors hover:text-on-dark";

export function Footer() {
  return (
    <footer className="mt-6 bg-footer text-on-dark-muted">
      <div className="border-b border-navy-line">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-8">
          <Logo variant="nav" inverse className="h-10" />
          <ButtonLink href={event.registration.url} variant="light" lumaEventId={event.registration.lumaEventId}>
            Register for {event.shortName}
          </ButtonLink>
        </Container>
      </div>

      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.6fr]">
        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-base font-semibold text-on-dark">{group.title}</h2>
            <ul className="mt-5 space-y-3">
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
          <h2 className="text-base font-semibold text-on-dark">Contact</h2>
          <dl className="mt-5 grid gap-y-3 text-[0.9375rem]">
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
              <dd className="text-on-dark">{venueLabel}</dd>
            </div>
          </dl>
          <h2 className="mt-10 text-base font-semibold text-on-dark">Connect</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-md border border-navy-line text-on-dark transition-colors hover:border-on-dark"
                >
                  <Icon name={social.icon} size={20} label={`${social.label} (opens in a new tab)`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy-line">
        <Container className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>© 2026 APICon Tanzania. All rights reserved.</p>
          <p>{event.theme} Built by the APICon Tanzania Community.</p>
        </Container>
      </div>
    </footer>
  );
}
