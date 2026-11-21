import Image from "next/image";
import clsx from "clsx";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { socials } from "@/content/contacts";
import { apisecVouchers, gallery } from "@/content/gallery";
import { partners } from "@/content/partners";
import { speakers, speakersNote } from "@/content/speakers";

/** Avatars shown on phones before the rest collapse into a "+N" bubble. */
const MOBILE_AVATARS = 7;

const apisecLogo = partners.find((partner) => partner.name === "APISEC")?.logo;

const followLinks = socials.filter((social) => social.label === "LinkedIn" || social.label === "Instagram");

/** Looking back at 2026: who spoke, and where the photos and video will appear. */
export function SpeakersTeaser() {
  const hasPhotos = gallery.photos.length > 0;

  return (
    <section id="speakers" aria-label="APICon 2026 recap" className="mt-6 px-2 sm:px-2.5">
      <div className="grid gap-2 sm:gap-2.5 lg:grid-cols-[1.25fr_1fr]">
        <article aria-labelledby="speakers-teaser-title" className="relative overflow-hidden rounded-panel bg-navy p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold tracking-[0.16em] text-hero-accent uppercase">Speakers recap</p>
          <h2 id="speakers-teaser-title" className="mt-4 text-4xl font-medium tracking-[-0.025em] text-on-dark md:text-5xl">
            {speakers.length} speakers <span className="text-on-dark-muted">took the stage</span>
          </h2>
          <p className="mt-4 max-w-md text-lg text-on-dark-muted">{speakersNote}</p>

          <ul className="mt-8 flex" aria-label="Speakers">
            {speakers.map((speaker, index) => (
              <li
                key={speaker.name}
                className={clsx(index > 0 && "-ml-3", index >= MOBILE_AVATARS && "hidden sm:block")}
                title={speaker.name}
              >
                <Image
                  src={speaker.photo.src}
                  alt={speaker.name}
                  width={speaker.photo.width}
                  height={speaker.photo.height}
                  sizes="64px"
                  unoptimized
                  className="size-14 rounded-full border-[3px] border-navy object-cover object-[50%_25%] transition-transform duration-200 hover:z-10 hover:-translate-y-1 md:size-16"
                />
              </li>
            ))}
            {speakers.length > MOBILE_AVATARS && (
              <li aria-hidden="true" className="-ml-3 sm:hidden">
                <span className="flex size-14 items-center justify-center rounded-full border-[3px] border-navy bg-navy-raised text-sm font-semibold text-on-dark">
                  +{speakers.length - MOBILE_AVATARS}
                </span>
              </li>
            )}
          </ul>

          <div className="mt-10">
            <ButtonLink href="/speakers" variant="light" size="lg">
              Meet the speakers
            </ButtonLink>
          </div>
        </article>

        <article
          id="highlights"
          aria-labelledby="highlights-title"
          className="highlights-placeholder relative flex flex-col overflow-hidden rounded-panel p-7 sm:p-10 lg:p-12"
        >
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="flex size-12 items-center justify-center rounded-card border border-navy-line bg-navy text-hero-accent">
              <Icon name="camera" size={22} />
            </span>
            <span className="flex size-12 items-center justify-center rounded-card border border-navy-line bg-navy text-hero-accent">
              <Icon name="video" size={22} />
            </span>
          </div>
          <p className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-navy-line bg-navy/60 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-hero-accent uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-hero-accent" aria-hidden="true" />
            {hasPhotos ? "Now live" : "Coming soon"}
          </p>
          <h2 id="highlights-title" className="mt-4 text-3xl font-medium tracking-[-0.02em] text-on-dark md:text-4xl">
            {hasPhotos ? "Recap photos are here" : "Recap photos and video are coming"}
          </h2>
          <p className="mt-4 text-lg text-on-dark-muted">
            {hasPhotos
              ? "Relive the best moments from APICon 2026."
              : "We're putting together the best moments from APICon 2026. Follow APICon Tanzania to see them first."}
          </p>
          <div className="mt-auto flex flex-wrap gap-3 pt-10">
            {hasPhotos ? (
              <ButtonLink href="#gallery" variant="light" size="lg" icon="arrow-right">
                View the photos
              </ButtonLink>
            ) : (
              followLinks.map((social) => (
                <ButtonLink key={social.href} href={social.href} variant="light" size="lg" icon="arrow-up-right" external>
                  {social.label}
                </ButtonLink>
              ))
            )}
          </div>
        </article>

        <article
          aria-labelledby="vouchers-title"
          className="flex flex-col gap-8 rounded-panel bg-canvas p-7 sm:p-10 md:flex-row md:items-center lg:col-span-2 lg:px-12"
        >
          <p className="flex shrink-0 items-baseline gap-3" aria-hidden="true">
            <span className="text-7xl font-semibold tracking-[-0.04em] text-brand md:text-8xl dark:text-link">{apisecVouchers.count}</span>
            <Icon name="shield" size={34} className="text-brand dark:text-link" />
          </p>
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase dark:text-link">API security, certified</p>
            <h2 id="vouchers-title" className="mt-3 text-2xl font-medium tracking-[-0.02em] text-ink md:text-3xl">
              <span className="sr-only">{apisecVouchers.count} </span>
              {apisecVouchers.provider} certification vouchers awarded
            </h2>
            <p className="mt-2 text-muted">
              Attendees took home vouchers to earn their API security certifications.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Certifications">
              {apisecVouchers.certifications.map((cert) => (
                <li key={cert} className="rounded-control border border-brand/40 bg-brand-pale px-4 py-1.5 font-mono text-sm font-semibold tracking-[0.08em] text-brand-deep dark:text-ink">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          {apisecLogo && (
            <a
              href={apisecVouchers.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center rounded-card border border-line bg-white p-4 transition-colors hover:border-brand"
            >
              <Image src={apisecLogo.src} alt={`${apisecVouchers.provider} (opens in a new tab)`} width={apisecLogo.width} height={apisecLogo.height} unoptimized className="h-14 w-auto md:h-16" />
            </a>
          )}
        </article>
      </div>
    </section>
  );
}
