export const emails = {
  support: "support@apicon.or.tz",
  partnerships: "partnerships@apicon.or.tz",
  sponsorships: "sponsorships@apicon.or.tz",
  speakers: "speakers@apicon.or.tz",
} as const;

export const contactChannels = [
  { label: "General support", email: emails.support },
  { label: "Partnerships & exhibitors", email: emails.partnerships },
  { label: "Sponsorships", email: emails.sponsorships },
  { label: "Speaking", email: emails.speakers },
] as const;

export const phone = { display: "+255 745 289 098", href: "tel:+255745289098" } as const;

export const socials = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/apicontz" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/apicontz" },
  { label: "X", icon: "x", href: "https://www.x.com/apicontz" },
  { label: "WhatsApp channel", icon: "message", href: "https://whatsapp.com/channel/0029Vb8TF2KEawdhUjE7uR3k" },
  { label: "WhatsApp community group", icon: "message", href: "https://chat.whatsapp.com/HdPOT43wZRk4ypGPoKEymU?s=cl&p=i&ilr=2" },
] as const;

export const mailto = (address: string) => `mailto:${address}`;
