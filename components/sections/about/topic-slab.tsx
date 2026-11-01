import { Icon, type IconName } from "@/components/ui/icon";

const CHIPS: { icon: IconName; title: string; note: string; position: string }[] = [
  { icon: "shield", title: "API Security", note: "OWASP Top 10", position: "left-[14%] top-[16%]" },
  { icon: "bot", title: "AI Agents & MCP", note: "Tools and agents", position: "right-[8%] top-[16%]" },
  { icon: "key", title: "Authentication", note: "OAuth, JWT, keys", position: "left-0 top-[44%]" },
  { icon: "card", title: "FinTech APIs", note: "Payments, banking", position: "right-0 top-[44%]" },
  { icon: "branch", title: "DevSecOps", note: "Secure SDLC", position: "left-[10%] bottom-[14%]" },
  { icon: "scale", title: "Governance", note: "Lifecycle, policy", position: "right-[10%] bottom-[14%]" },
];

/** Isometric brand slab with a key at its centre, ringed by topic chips. Decorative. */
export function TopicSlab({ topicCount }: { topicCount: number }) {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[5/4] w-full max-w-xl">
      <svg viewBox="0 0 500 400" className="absolute inset-0 size-full">
        <ellipse cx="250" cy="210" rx="230" ry="120" fill="none" stroke="var(--brand)" strokeOpacity="0.25" />
        <ellipse cx="250" cy="210" rx="180" ry="92" fill="var(--brand)" fillOpacity="0.06" />
        <path d="M250 40V380" stroke="var(--line)" strokeDasharray="4 6" />
        <polygon points="250,110 380,175 250,240 120,175" fill="var(--brand)" />
        <polygon points="120,175 250,240 250,272 120,207" fill="var(--brand-deep)" />
        <polygon points="380,175 250,240 250,272 380,207" fill="var(--navy)" />
        <g stroke="var(--on-dark)" strokeOpacity="0.35">
          <path d="M185 142 315 208M315 142 185 208" strokeDasharray="2 6" />
        </g>
      </svg>
      <span className="absolute top-[38%] left-1/2 inline-flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-on-dark/40 bg-on-dark/15 text-on-dark backdrop-blur-sm">
        <Icon name="key" size={22} />
      </span>
      <span className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-navy px-4 py-1.5 text-sm font-semibold text-on-dark">
        {topicCount} key topics
      </span>
      <span className="absolute bottom-0 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold tracking-[0.06em] text-on-dark uppercase">
        <span className="size-2 rounded-full bg-accent" />
        APICon 2026
      </span>
      {CHIPS.map((chip) => (
        <span key={chip.title} className={`absolute flex items-center gap-2 rounded-md bg-surface px-2.5 py-2 shadow-sm shadow-ink/10 ${chip.position}`}>
          <span className="inline-flex size-7 items-center justify-center rounded bg-canvas text-ink">
            <Icon name={chip.icon} size={15} />
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-semibold text-ink">{chip.title}</span>
            <span className="block text-[0.6875rem] text-muted">{chip.note}</span>
          </span>
        </span>
      ))}
    </div>
  );
}
