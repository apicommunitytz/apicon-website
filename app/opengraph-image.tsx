import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { event, venueLabel } from "@/content/event";
import { brand } from "@/lib/brand";

export const alt = `${event.name}: ${event.dateLabel}, ${venueLabel}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/brand/logo-white.svg"), "base64");

/** 1200×630 share card for link previews, built from the brand logo and event facts. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: brand.ink,
          color: brand.canvas,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by the image generator, not the browser */}
        <img src={`data:image/svg+xml;base64,${logo}`} width={311} height={160} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.1, maxWidth: 900 }}>
            {event.headline}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: brand.onBandMuted }}>
            <span style={{ color: brand.highlight }}>{event.dateLabel}</span>
            <span style={{ margin: "0 16px" }}>·</span>
            <span>{venueLabel}</span>
          </div>
        </div>
        <div style={{ display: "flex", borderTop: `1px solid ${brand.bandLine}`, paddingTop: 24, fontSize: 24, color: brand.onBandMuted }}>
          {event.tracks.join("  ·  ")}
        </div>
      </div>
    ),
    size,
  );
}
