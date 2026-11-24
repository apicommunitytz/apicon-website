import type { Photo } from "./types";

export type GalleryPhoto = Photo & {
  alt: string;
  /** Short line shown over the photo, e.g. "Opening keynote". */
  caption?: string;
  /** CSS object-position used when the photo is cropped to fit its frame, e.g. "35% 50%". */
  position?: string;
};

/** Group photo of everyone at APICon 2026, shown in the About section. */
export const communityPhoto: GalleryPhoto = {
  src: "/images/gallery/apicon-2026-community.webp",
  width: 1600,
  height: 900,
  alt: "APICon Tanzania 2026 attendees gathered for a group photo in front of the API conference 2026 banner at Confucius UDSM",
  caption: "The APICon 2026 community",
};

export const gallery = {
  title: "Relive APICon 2026",
  /** Link to the full album (Google Photos, Flickr, Drive…). Leave empty to hide the button. */
  albumUrl: "",
  /**
   * Conference photos, shown as a slider in the order of the day. Files live in
   * public/images/gallery/ (webp, 1600px wide). Slides are cropped to 16:10, so use
   * `position` to keep people in frame on taller photos.
   */
  photos: [
    {
      src: "/images/gallery/apicon-2026-main-hall.webp",
      width: 1600,
      height: 900,
      alt: "A full hall at Confucius UDSM following a talk on securing APIs in the real world",
      caption: "A full hall for API security",
    },
    {
      src: "/images/gallery/apicon-2026-check-in.webp",
      width: 1600,
      height: 900,
      alt: "Volunteers checking in attendees at the registration desk, with blue APICon lanyards ready on the table",
      caption: "Check-in and badges",
      position: "40% 50%",
    },
    {
      src: "/images/gallery/apicon-2026-opening-remarks.webp",
      width: 1600,
      height: 1067,
      alt: "Opening remarks from the APICon Tanzania community lead at the Confucius UDSM podium",
      caption: "Opening remarks",
      position: "62% 35%",
    },
    {
      src: "/images/gallery/apicon-2026-api-governance-talk.webp",
      width: 1600,
      height: 1067,
      alt: "A talk on API governance, with the slide asking “What is API governance?”",
      caption: "API governance",
      position: "45% 40%",
    },
    {
      src: "/images/gallery/apicon-2026-audience-questions.webp",
      width: 1600,
      height: 1067,
      alt: "An attendee asking a question from the floor with a microphone",
      caption: "Questions from the floor",
      position: "68% 35%",
    },
    {
      src: "/images/gallery/apicon-2026-panel.webp",
      width: 1600,
      height: 900,
      alt: "Four panellists in red chairs on stage during the APICon 2026 panel discussion",
      caption: "Panel discussion",
    },
    {
      src: "/images/gallery/apicon-2026-on-stage.webp",
      width: 1600,
      height: 900,
      alt: "A session on stage beside the APICon roll-up banner, with a slide titled “When workloads collide”",
      caption: "When workloads collide",
      position: "35% 50%",
    },
    {
      src: "/images/gallery/apicon-2026-session-talk.webp",
      width: 1600,
      height: 1067,
      alt: "A talk at the Confucius UDSM podium between the Snippe and APICon banners",
      caption: "Talks from the community",
      position: "45% 45%",
    },
    {
      src: "/images/gallery/apicon-2026-session-podium.webp",
      width: 1600,
      height: 900,
      alt: "A speaker presenting from the Confucius UDSM podium in front of the APICon banner",
      caption: "From the podium",
      position: "50% 40%",
    },
    {
      src: "/images/gallery/apicon-2026-ecosystem-research-talk.webp",
      width: 1600,
      height: 900,
      alt: "A talk presenting research findings and opportunities in Tanzania’s API ecosystem",
      caption: "Tanzania’s API ecosystem",
      position: "55% 45%",
    },
    {
      src: "/images/gallery/apicon-2026-lunch.webp",
      width: 1600,
      height: 1067,
      alt: "Attendees serving themselves lunch and networking between sessions",
      caption: "Lunch and networking",
      position: "45% 40%",
    },
  ] as GalleryPhoto[],
};


/** Certification vouchers awarded at APICon 2026 through APIsec University. */
export const apisecVouchers = {
  count: 25,
  provider: "APIsec University",
  href: "https://au.apisec.ai/",
  certifications: ["CASA", "ACP", "ASCP"],
};
