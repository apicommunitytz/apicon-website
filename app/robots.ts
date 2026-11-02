import type { MetadataRoute } from "next";
import { event } from "@/content/event";

export const dynamic = "force-static";

// Everything is public, including for AI crawlers (as before).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${event.siteUrl}/sitemap.xml`,
  };
}
