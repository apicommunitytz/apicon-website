export type LinkKind = "linkedin" | "github" | "x" | "website";

export type ProfileLink = { kind: LinkKind; href: string };

export type Photo = { src: string; width: number; height: number };

export type Person = {
  name: string;
  role: string;
  /** Organisation for speakers; short area of work for organisers. */
  affiliation?: string;
  /** Speaking or working focus, shown as a small label. */
  focus?: string;
  bio?: string;
  photo: Photo;
  links: ProfileLink[];
};

/** Plain text, or a link inside a sentence. */
export type RichPart = string | { text: string; href: string; external?: boolean };

export type Titled = { title: string; description: string };
