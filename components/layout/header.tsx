import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { event } from "@/content/event";
import { partnerLink, primaryNav } from "@/content/navigation";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md">
      <Container className="relative flex h-16 items-center gap-6 md:h-18">
        <Link href="/" className="h-10 shrink-0 md:h-11" aria-label="APICon Tanzania home">
          <Logo className="h-full" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-text transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Link
            href={partnerLink.href}
            className="hidden px-2 text-sm font-medium text-text transition-colors hover:text-ink md:inline"
          >
            {partnerLink.label}
          </Link>
          <ButtonLink href={event.registration.url} lumaEventId={event.registration.lumaEventId} className="h-10 px-4">
            Register
          </ButtonLink>
          <MobileNav links={[...primaryNav, partnerLink]} />
        </div>
      </Container>
    </header>
  );
}
