import type { Photo } from "./types";

export type GalleryPhoto = Photo & {
  alt: string;
  /** Short line shown over the photo, e.g. "Opening keynote". */
  caption?: string;
};

export const gallery = {
  title: "Relive APICon 2026",
  /** Link to the full album (Google Photos, Flickr, Drive…). Leave empty to hide the button. */
  albumUrl: "",
  /**
   * Add conference photos here once they are ready. Put the files in public/images/gallery/
   * (webp, about 1600px on the long side) and list them in the order to show them.
   * The first photo is shown largest.
   *
   * { src: "/images/gallery/keynote.webp", width: 1600, height: 1067, alt: "Opening keynote at Confucius UDSM", caption: "Opening keynote" },
   */
  photos: [] as GalleryPhoto[],
};


/** Certification vouchers awarded at APICon 2026 through APIsec University. */
export const apisecVouchers = {
  count: 25,
  provider: "APIsec University",
  href: "https://au.apisec.ai/",
  certifications: ["CASA", "ACP", "ASCP"],
};
