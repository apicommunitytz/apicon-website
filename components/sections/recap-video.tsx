import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { event, venueLabel } from "@/content/event";
import { RecapVideoPlayer } from "./recap-video-player";

/** The official APICon 2026 recap film, shown once the conference is over. */
export function RecapVideo() {
  if (!event.concluded) return null;
  const { video } = event.recap;

  return (
    <section id="recap" aria-labelledby="recap-title" className="mt-6 scroll-mt-24 px-2 sm:px-2.5">
      <div className="relative overflow-hidden rounded-panel bg-hero-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(25_230_220/0.14),transparent_70%)]"
        />
        <Container className="relative py-16 md:py-24">
          <div className="mb-10 flex flex-col gap-8 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-hero-accent uppercase">
                <Icon name="video" size={16} />
                APICon 2026 recap
              </p>
              <h2 id="recap-title" className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-on-dark md:text-5xl">
                Relive the day <span className="text-hero-accent">in motion</span>
              </h2>
              <p className="mt-5 text-lg text-on-dark-muted">
                The talks, demos and conversations that filled {venueLabel} on {event.dateLabel}, in one short film.
              </p>
            </div>
            <ButtonLink
              href={`https://youtu.be/${video.youtubeId}`}
              variant="light"
              size="lg"
              icon="arrow-up-right"
              external
            >
              Watch on YouTube
            </ButtonLink>
          </div>

          <RecapVideoPlayer youtubeId={video.youtubeId} title={video.title} />
        </Container>
      </div>
    </section>
  );
}
