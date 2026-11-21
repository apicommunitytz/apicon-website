import Image from "next/image";
import clsx from "clsx";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { gallery } from "@/content/gallery";

/** Conference photo grid; renders nothing until photos are added to content/gallery.ts. */
export function Highlights() {
  if (gallery.photos.length === 0) return null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-navy">
        <Container className="py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 id="gallery-title" className="text-4xl font-normal tracking-[-0.025em] text-on-dark md:text-5xl">
              {gallery.title}
            </h2>
            {gallery.albumUrl && (
              <ButtonLink href={gallery.albumUrl} variant="light" size="lg" icon="arrow-up-right" external>
                View full album
              </ButtonLink>
            )}
          </div>
          <ul className="grid auto-rows-[minmax(10rem,1fr)] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {gallery.photos.map((photo, index) => (
              <li
                key={photo.src}
                className={clsx(
                  "group relative overflow-hidden rounded-card",
                  index === 0 ? "col-span-2 row-span-2 min-h-72 md:min-h-0" : "min-h-40",
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  unoptimized
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {photo.caption && (
                  <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-10 pb-3 text-sm font-medium text-white">
                    {photo.caption}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
