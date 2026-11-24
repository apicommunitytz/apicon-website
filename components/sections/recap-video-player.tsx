"use client";

import Image from "next/image";
import { useState } from "react";

type RecapVideoPlayerProps = {
  youtubeId: string;
  title: string;
};

/**
 * Click-to-play YouTube embed. Until the visitor presses play, only a poster image is loaded,
 * so the page stays fast and YouTube (privacy-enhanced mode) is contacted only on request.
 */
export function RecapVideoPlayer({ youtubeId, title }: RecapVideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="recap-player group relative aspect-video overflow-hidden rounded-[1.25rem] border border-hero-accent/25 bg-black">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 size-full cursor-pointer text-left focus-visible:outline-none"
        >
          <Image
            src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1240px) 1200px, 100vw"
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(8_12_23/0.45))] transition-colors duration-300 group-hover:bg-hero-background/15"
          />

          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <span className="recap-play relative flex size-20 items-center justify-center rounded-full bg-hero-accent text-hero-background shadow-[0_0_0_10px_rgb(25_230_220/0.18)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 md:size-24">
              <svg viewBox="0 0 24 24" className="ml-1 size-8 md:size-9" fill="currentColor">
                <path d="M7 4.5v15a1 1 0 0 0 1.53.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
