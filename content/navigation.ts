import { emails, mailto } from "./contacts";
import { event } from "./event";

export type NavLink = { label: string; href: string; external?: boolean };

/** Header links, in the order a visitor decides. Anchors resolve from any page. */
export const primaryNav: NavLink[] = [
  { label: "Program", href: "/#program" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Marketplace", href: "/#marketplace" },
  { label: "Partners", href: "/#partners" },
  { label: "FAQ", href: "/#faq" },
];

export const partnerLink: NavLink = { label: "Become a partner", href: "/#partners" };

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "APICon",
    links: [
      { label: "About", href: "/#about" },
      { label: "Organising team", href: "/team" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Conference",
    links: [
      { label: "Program", href: "/#program" },
      { label: "Speakers", href: "/#speakers" },
      { label: "Marketplace", href: "/#marketplace" },
      { label: "Who should attend", href: "/#audience" },
    ],
  },
  {
    title: "Take part",
    links: [
      { label: "Register", href: event.registration.url, external: true },
      { label: "Become a partner", href: "/#partners" },
      { label: "Exhibit at the hub", href: mailto(emails.partnerships) },
      { label: "Submit a session", href: mailto(emails.speakers) },
    ],
  },
];
