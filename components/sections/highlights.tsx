import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { event, venueLabel } from "@/content/event";
import { gallery } from "@/content/gallery";
import { GallerySlider } from "./gallery-slider";

/** Conference photo carousel; renders nothing until photos are added to content/gallery.ts. */
export function Highlights() {
  if (gallery.photos.length === 0) return null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="mt-6 scroll-mt-24 px-2 sm:px-2.5">
      <div className="relative overflow-hidden rounded-panel bg-navy">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_85%_0%,rgb(25_230_220/0.12),transparent_70%)]"
        />
        <Container className="relative py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-hero-accent uppercase">
                <Icon name="camera" size={16} />
                From the day
              </p>
              <h2 id="gallery-title" className="mt-4 text-4xl font-medium tracking-[-0.025em] text-on-dark md:text-5xl">
                {gallery.title}
              </h2>
              <p className="mt-5 text-lg text-on-dark-muted">
                From check-in to the last question: talks, a panel and plenty of conversation at {venueLabel} on {event.dateLabel}.
              </p>
            </div>
            {gallery.albumUrl && (
              <ButtonLink href={gallery.albumUrl} variant="light" size="lg" icon="arrow-up-right" external>
                View full album
              </ButtonLink>
            )}
          </div>
          <GallerySlider photos={gallery.photos} labelledBy="gallery-title" />
        </Container>
      </div>
    </section>
  );
}
