import type { MetadataRoute } from "next";
import { event } from "@/content/event";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${event.siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${event.siteUrl}/speakers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${event.siteUrl}/team`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
