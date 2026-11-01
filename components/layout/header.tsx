import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { event } from "@/content/event";
import { partnerLink, primaryNav } from "@/content/navigation";
import { AnnouncementBar } from "./announcement-bar";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

/**
 * Announcement bar plus a floating white navigation bar. The nav takes no layout height:
 * it floats over the first panel, which reserves room for it with top padding.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <AnnouncementBar
        message={`Registration is open for ${event.name}: ${event.dateLabel} at ${event.venue.name}`}
        actionLabel="Register now"
        href={event.registration.url}
        lumaEventId={event.registration.lumaEventId}
      />
      <div className="h-0">
        <div className="mx-auto max-w-site px-4 pt-4 sm:px-8 md:pt-5">
          <nav
            aria-label="Main"
            className="relative flex h-15 items-center gap-4 rounded-[10px] bg-canvas px-3 shadow-lg shadow-ink/10 md:h-16 md:px-4"
          >
            <Link href="/" aria-label="APICon Tanzania home" className="flex h-9 shrink-0 items-center pl-1 md:h-11">
              <Logo variant="nav" className="h-full" />
            </Link>
            <span aria-hidden="true" className="hidden h-8 w-px bg-line lg:block" />
            <ul className="hidden items-center gap-1 lg:flex">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="rounded-control px-3 py-2 text-[0.9375rem] text-text transition-colors hover:bg-pill hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <ButtonLink href={partnerLink.href} variant="grey" icon={null} className="hidden md:inline-flex">
                {partnerLink.label}
              </ButtonLink>
              <ButtonLink href={event.registration.url} variant="brand" lumaEventId={event.registration.lumaEventId}>
                Register
              </ButtonLink>
              <MobileNav links={[...primaryNav, partnerLink]} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
