import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { emails, mailto } from "@/content/contacts";
import { speakers, speakersNote } from "@/content/speakers";

/** One navy row on the landing page that points to the speakers page. */
export function SpeakersTeaser() {
  return (
    <section id="speakers" aria-labelledby="speakers-teaser-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-navy">
        <Container className="flex flex-col gap-8 py-10 md:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <ul className="flex shrink-0" aria-hidden="true">
              {speakers.map((speaker, index) => (
                <li key={speaker.name} className={index === 0 ? "" : "-ml-3"}>
                  <Image
                    src={speaker.photo.src}
                    alt=""
                    width={speaker.photo.width}
                    height={speaker.photo.height}
                    sizes="56px"
                    unoptimized
                    className="size-12 rounded-full border-[3px] border-navy object-cover object-[50%_25%] md:size-14"
                  />
                </li>
              ))}
            </ul>
            <div>
              <h2 id="speakers-teaser-title" className="text-2xl font-medium text-on-dark md:text-3xl">
                10+ speakers
              </h2>
              <p className="mt-1 text-on-dark-muted">{speakersNote}</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href="/speakers" variant="light" size="lg">
              Meet the speakers
            </ButtonLink>
            <ButtonLink href={mailto(emails.speakers)} variant="brand" size="lg">
              Submit a session
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
