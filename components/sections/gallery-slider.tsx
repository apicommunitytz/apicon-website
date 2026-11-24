"use client";

import Image from "next/image";
import clsx from "clsx";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { Icon } from "@/components/ui/icon";
import type { GalleryPhoto } from "@/content/gallery";

type GallerySliderProps = {
  photos: GalleryPhoto[];
  /** Id of the heading that names this carousel. */
  labelledBy: string;
  /** Seconds each photo stays before the slider moves on by itself. */
  interval?: number;
};

const pad = (n: number) => String(n).padStart(2, "0");

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};
const useReducedMotion = () =>
  useSyncExternalStore(subscribeReducedMotion, () => window.matchMedia(REDUCED_MOTION).matches, () => false);

/**
 * Auto-advancing photo carousel built on native scroll-snap. Touch, trackpad, buttons, thumbnails and
 * arrow keys all scroll the same track, and the active slide follows the scroll position.
 *
 * Auto-play shows as a timer bar on the current photo and moves on when the bar fills. It pauses while
 * the visitor hovers, touches or keyboard-focuses the slider, while it is off screen or the tab is hidden,
 * and it stays off for people who prefer reduced motion. The pause button stops it for good.
 */
export function GallerySlider({ photos, labelledBy, interval = 5 }: GallerySliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const thumbsRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [touching, setTouching] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const reducedMotion = useReducedMotion();
  const last = photos.length - 1;

  const autoplay = !stopped && !reducedMotion && photos.length > 1;
  const held = hovered || touching || keyboardFocus || !onScreen || !tabVisible;

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const slides = track?.children;
      const slide = slides?.[Math.max(0, Math.min(index, slides.length - 1))] as HTMLElement | undefined;
      if (!track || !slide) return;
      // Measured from the first slide so the track's edge padding never shifts the snap point.
      const start = (slides![0] as HTMLElement).offsetLeft;
      track.scrollTo({ left: slide.offsetLeft - start, behavior: reducedMotion ? "auto" : "smooth" });
    },
    [reducedMotion],
  );

  // Track which slide is closest to the start edge as the visitor scrolls or swipes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    let settle = 0;
    const measure = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) return setActive(slides.length - 1);
      const start = slides[0]?.offsetLeft ?? 0;
      let nearest = 0;
      let best = Infinity;
      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - start - track.scrollLeft);
        if (distance < best) {
          best = distance;
          nearest = index;
        }
      });
      setActive(nearest);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      // Smooth and snapped scrolls can come to rest without a final event, so check again once it is quiet.
      window.clearTimeout(settle);
      settle = window.setTimeout(measure, 120);
      frame = requestAnimationFrame(measure);
    };
    track.addEventListener("scroll", update, { passive: true });
    track.addEventListener("scrollend", update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      track.removeEventListener("scroll", update);
      track.removeEventListener("scrollend", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Only run the timer while the slider is actually on screen and the tab is in front.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(root);
    const onVisibility = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Keep the active thumbnail in view without moving the page.
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[active] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - strip.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
  }, [active, reducedMotion]);

  const advance = () => goTo(active >= last ? 0 : active + 1);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: last };
    if (!(event.key in keys) || (event.target as HTMLElement).closest("[data-thumbs]")) return;
    event.preventDefault();
    goTo(keys[event.key]);
  };

  // Pause for keyboard users moving through the controls, but not after a mouse click or tap.
  const onFocus = (event: FocusEvent<HTMLElement>) => setKeyboardFocus(event.target.matches(":focus-visible"));
  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setKeyboardFocus(false);
  };

  const control =
    "flex size-11 shrink-0 items-center justify-center rounded-full border border-navy-line bg-navy-raised text-on-dark transition-colors hover:border-hero-accent hover:text-hero-accent disabled:pointer-events-none disabled:opacity-35 sm:size-12";

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelledBy}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setHovered(false)}
    >
      <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
        <p className="font-mono text-sm tracking-[0.12em] text-on-dark-muted">
          <span className="text-hero-accent">{pad(active + 1)}</span>
          <span aria-hidden="true"> / </span>
          <span className="sr-only"> of </span>
          {pad(photos.length)}
        </p>
        <div className="flex gap-2">
          {photos.length > 1 && !reducedMotion && (
            <button
              type="button"
              className={control}
              onClick={() => setStopped((value) => !value)}
              aria-label={stopped ? "Play slideshow" : "Pause slideshow"}
            >
              <Icon name={stopped ? "play" : "pause"} size={16} strokeWidth={2.25} />
            </button>
          )}
          <button type="button" className={control} onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous photo">
            <Icon name="chevron-right" size={20} strokeWidth={2.25} className="rotate-180" />
          </button>
          <button type="button" className={control} onClick={() => goTo(active + 1)} disabled={active === last} aria-label="Next photo">
            <Icon name="chevron-right" size={20} strokeWidth={2.25} />
          </button>
        </div>
      </div>

      {/* Announce slide changes only when the visitor moves the slider, not on every auto-advance. */}
      <p className="sr-only" aria-live={autoplay ? "off" : "polite"} aria-atomic="true">
        Photo {active + 1} of {photos.length}: {photos[active]?.caption ?? photos[active]?.alt}
      </p>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Photos, use the arrow keys to move between them"
        onPointerDown={(event) => event.pointerType !== "mouse" && setTouching(true)}
        onPointerUp={() => setTouching(false)}
        onPointerCancel={() => setTouching(false)}
        className="gallery-track -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto overscroll-x-contain px-5 pb-1 focus-visible:outline-offset-4 sm:-mx-1 sm:scroll-px-1 sm:px-1 md:gap-4"
      >
        {photos.map((photo, index) => (
          <li
            key={photo.src}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${photos.length}`}
            className="w-[92%] shrink-0 snap-start sm:w-[74%] lg:w-[64%]"
          >
            <figure
              className={clsx(
                "group relative aspect-[4/3] overflow-hidden rounded-panel border transition-[opacity,border-color] duration-500 motion-reduce:transition-none sm:aspect-[16/10]",
                index === active ? "border-hero-accent/40 opacity-100" : "border-navy-line opacity-45",
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1280px) 760px, (min-width: 1024px) 64vw, (min-width: 640px) 74vw, 92vw"
                unoptimized
                loading={index < 2 ? "eager" : "lazy"}
                style={photo.position ? { objectPosition: photo.position } : undefined}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              {photo.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline gap-2.5 bg-linear-to-t from-hero-background/90 via-hero-background/40 to-transparent px-4 pt-14 pb-4 sm:gap-3 sm:px-7 sm:pt-20 sm:pb-6">
                  <span className="font-mono text-xs font-semibold text-hero-accent sm:text-sm">{pad(index + 1)}</span>
                  <span className="text-base leading-snug font-medium tracking-[-0.01em] text-on-dark sm:text-lg md:text-xl">{photo.caption}</span>
                </figcaption>
              )}
              {autoplay && index === active && (
                <span
                  key={active}
                  aria-hidden="true"
                  onAnimationEnd={advance}
                  className="gallery-timer absolute inset-x-0 bottom-0 h-[3px] origin-left bg-hero-accent"
                  style={{ animationDuration: `${interval}s`, animationPlayState: held ? "paused" : "running" }}
                />
              )}
            </figure>
          </li>
        ))}
      </ul>

      {/* Phones: progress bar. Larger screens: thumbnails to jump to any photo. */}
      <div className="mt-5 h-1 overflow-hidden rounded-full bg-navy-raised md:hidden" aria-hidden="true">
        <div
          className="h-full rounded-full bg-hero-accent transition-[width] duration-500 motion-reduce:transition-none"
          style={{ width: `${((active + 1) / photos.length) * 100}%` }}
        />
      </div>
      <ul ref={thumbsRef} data-thumbs className="gallery-track mt-6 hidden gap-2 overflow-x-auto p-1 md:flex" aria-label="Choose a photo">
        {photos.map((photo, index) => (
          <li key={photo.src} className="shrink-0">
            <button
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show photo ${index + 1}: ${photo.caption ?? photo.alt}`}
              aria-current={index === active ? "true" : undefined}
              className={clsx(
                "relative block h-16 w-24 overflow-hidden rounded-card border-2 transition-[opacity,border-color] duration-300 lg:h-[4.5rem] lg:w-28",
                index === active ? "border-hero-accent opacity-100" : "border-transparent opacity-50 hover:opacity-90",
              )}
            >
              <Image
                src={photo.src}
                alt=""
                width={photo.width}
                height={photo.height}
                sizes="112px"
                unoptimized
                style={photo.position ? { objectPosition: photo.position } : undefined}
                className="absolute inset-0 size-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
