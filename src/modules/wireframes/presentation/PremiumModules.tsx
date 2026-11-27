import Link from "next/link";
import {
  INSIGHTS,
  LEADERS,
  MARKETS,
  MILESTONES,
  SHIPMENTS,
  TESTIMONIALS,
  rotate,
  type ShipmentStatus,
} from "../domain/showcase-content";
import { optionHref, type WireframeOptionId } from "../domain/wireframe-data";
import { MediaBox } from "./WireframePrimitives";

function serif(option: WireframeOptionId) {
  return option === "editorial" ? " wf-serif" : "";
}

function SectionHead({
  option,
  eyebrow,
  title,
  action,
}: {
  option: WireframeOptionId;
  eyebrow: string;
  title: string;
  action?: { href: string; label: string };
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 16,
        marginBottom: 36,
      }}
    >
      <div>
        <p className="wf-eyebrow">{eyebrow}</p>
        <h2 className={`wf-h2${serif(option)}`} style={{ marginBottom: 0, maxWidth: 680 }}>
          {title}
        </h2>
      </div>
      {action && (
        <Link href={action.href} className="wf-btn wf-btn-secondary wf-btn-sm">
          {action.label}
        </Link>
      )}
    </div>
  );
}

export function TestimonialsSection({
  option,
  count = 3,
  alt = false,
}: {
  option: WireframeOptionId;
  count?: number;
  alt?: boolean;
}) {
  const items = rotate(TESTIMONIALS, option, count);
  return (
    <section className={`wf-section${alt ? " wf-section-alt" : ""}`}>
      <div className="wf-container">
        <SectionHead option={option} eyebrow="Buyer Voices" title="Trusted by importers across four continents" />
        <div className="wf-grid-3">
          {items.map((t) => (
            <figure key={t.name} className="wf-card wf-card-hover" style={{ margin: 0, gap: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="wf-quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <span className="wf-stars" aria-label="5 out of 5">
                  ★★★★★
                </span>
              </div>
              <blockquote className="wf-quote" style={{ flex: 1 }}>
                {t.quote}
              </blockquote>
              <figcaption className="wf-person" style={{ borderTop: "1px solid var(--wf-border)", paddingTop: 16 }}>
                <span className="wf-avatar">
                  {t.name
                    .split(/[\s-]+/)
                    .filter((w) => /^[A-Z]/.test(w))
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <span>
                    {t.role} · {t.market}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATUS_CLASS: Record<ShipmentStatus, string> = {
  "In transit": "wf-status-transit",
  Loading: "wf-status-loading",
  "Customs cleared": "wf-status-cleared",
  Delivered: "wf-status-delivered",
};

export function ShipmentBoard({ option, count = 5 }: { option: WireframeOptionId; count?: number }) {
  const rows = rotate(SHIPMENTS, option, count);
  return (
    <div className="wf-board" role="table" aria-label="Recent export shipments">
      <div className="wf-board-head">
        <span>
          <span className="wf-live-dot" aria-hidden="true" />
          Export Desk · Live Shipments
        </span>
        <span style={{ color: "#8ea395" }}>Updated 28 Nov 2026 · 09:40 IST</span>
      </div>
      {rows.map((s) => (
        <div key={s.ref} className="wf-board-row" role="row">
          <code role="cell">{s.ref}</code>
          <strong role="cell" style={{ color: "#f4efe4", fontWeight: 600 }}>
            {s.product}
          </strong>
          <span role="cell" style={{ color: "#b9c9bd" }}>
            {s.volume}
          </span>
          <span role="cell" style={{ color: "#b9c9bd" }}>
            {s.route}
          </span>
          <span role="cell" style={{ display: "grid", gap: 4 }}>
            <span className={`wf-status ${STATUS_CLASS[s.status]}`}>{s.status}</span>
            <span style={{ fontSize: 11, color: "#8ea395" }}>{s.eta}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function InsightsSection({
  option,
  count = 3,
  alt = false,
}: {
  option: WireframeOptionId;
  count?: number;
  alt?: boolean;
}) {
  const items = rotate(INSIGHTS, option, count);
  return (
    <section className={`wf-section${alt ? " wf-section-alt" : ""}`}>
      <div className="wf-container">
        <SectionHead
          option={option}
          eyebrow="Trade Desk Insights"
          title="Market intelligence for serious buyers"
          action={{ href: optionHref(option, "exports"), label: "All insights →" }}
        />
        <div className="wf-grid-3">
          {items.map((a) => (
            <article key={a.title} className="wf-card wf-card-hover wf-insight">
              <MediaBox label={a.title} src={a.image} height={200} caption={a.tag} radius={0} />
              <div className="wf-insight-body">
                <span className="wf-meta">
                  {a.date} · {a.read}
                </span>
                <h3 className={`wf-h3${serif(option)}`} style={{ margin: 0 }}>
                  {a.title}
                </h3>
                <p className="wf-body" style={{ margin: 0 }}>
                  {a.excerpt}
                </p>
                <span className="wf-accent-text" style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>
                  Read the brief →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketsMarquee({ option }: { option: WireframeOptionId }) {
  const list = rotate(MARKETS, option);
  const loop = [...list, ...list];
  return (
    <section className="wf-section-compact" style={{ borderTop: "1px solid var(--wf-border)", borderBottom: "1px solid var(--wf-border)" }}>
      <div className="wf-container" style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <p className="wf-eyebrow" style={{ margin: 0 }}>
          Shipping to 24 destination markets
        </p>
        <span className="wf-meta">FOB · CIF · CFR · DDP</span>
      </div>
      <div className="wf-marquee" aria-label="Destination markets">
        <div className="wf-marquee-track">
          {loop.map((m, i) => (
            <span key={`${m.code}-${i}`} className="wf-market-chip" aria-hidden={i >= list.length}>
              <small>{m.code}</small>
              {m.country}
              <small>· {m.port}</small>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Abstract trade-route diagram (no geographic borders) from Indian ports to four regions. */
export function RouteMap() {
  const origin = { x: 520, y: 250 };
  const dests = [
    { x: 380, y: 170, label: "GCC & Middle East", sub: "5–10 days", anchor: "end" as const },
    { x: 250, y: 80, label: "Europe & UK", sub: "22–28 days", anchor: "end" as const },
    { x: 70, y: 150, label: "North America", sub: "28–38 days", anchor: "start" as const },
    { x: 780, y: 200, label: "Asia-Pacific", sub: "10–20 days", anchor: "start" as const },
  ];
  const dots: { x: number; y: number }[] = [];
  for (let x = 20; x < 900; x += 24) for (let y = 20; y < 360; y += 24) dots.push({ x, y });
  return (
    <div className="wf-board" style={{ padding: "8px 8px 0" }}>
      <svg className="wf-route-map" viewBox="0 0 900 360" role="img" aria-label="Shipping routes from Indian ports to export regions">
        <defs>
          <linearGradient id="route-g" x1="0" x2="1">
            <stop offset="0" stopColor="#f9b233" />
            <stop offset="1" stopColor="#ec4a1e" />
          </linearGradient>
          <radialGradient id="route-glow">
            <stop offset="0" stopColor="#f9b233" stopOpacity="0.55" />
            <stop offset="1" stopColor="#f9b233" stopOpacity="0" />
          </radialGradient>
        </defs>
        {dots.map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r="1.1" fill="rgba(244,239,228,0.12)" />
        ))}
        {dests.map((d) => {
          const mx = (origin.x + d.x) / 2;
          const my = Math.min(origin.y, d.y) - 70;
          return (
            <g key={d.label}>
              <path
                d={`M${origin.x},${origin.y} Q${mx},${my} ${d.x},${d.y}`}
                fill="none"
                stroke="url(#route-g)"
                strokeWidth="1.8"
                strokeDasharray="5 6"
              />
              <circle cx={d.x} cy={d.y} r="5" fill="#8cc63f" />
              <circle cx={d.x} cy={d.y} r="11" fill="none" stroke="rgba(140,198,63,0.4)" />
              <text
                x={d.anchor === "end" ? d.x - 16 : d.x + 16}
                y={d.y - 2}
                textAnchor={d.anchor}
                fill="#f4efe4"
                fontSize="14"
                fontWeight="600"
              >
                {d.label}
              </text>
              <text
                x={d.anchor === "end" ? d.x - 16 : d.x + 16}
                y={d.y + 15}
                textAnchor={d.anchor}
                fill="#9db3a4"
                fontSize="11"
                fontFamily="ui-monospace, Menlo, monospace"
              >
                {d.sub}
              </text>
            </g>
          );
        })}
        <circle cx={origin.x} cy={origin.y} r="46" fill="url(#route-glow)" />
        <circle cx={origin.x} cy={origin.y} r="8" fill="#ec4a1e" stroke="#f9c22b" strokeWidth="2" />
        <text x={origin.x} y={origin.y + 34} textAnchor="middle" fill="#f9c22b" fontSize="13" fontWeight="700" letterSpacing="2">
          INDIA
        </text>
        <text x={origin.x} y={origin.y + 52} textAnchor="middle" fill="#9db3a4" fontSize="11" fontFamily="ui-monospace, Menlo, monospace">
          Nhava Sheva · Mundra · Chennai · Cochin
        </text>
      </svg>
    </div>
  );
}

export function LeadershipGrid({ option }: { option: WireframeOptionId }) {
  return (
    <div className="wf-grid-3">
      {LEADERS.map((l) => (
        <div key={l.name} className="wf-card wf-card-hover" style={{ alignItems: "flex-start", gap: 14 }}>
          <span className="wf-avatar wf-avatar-lg">{l.initials}</span>
          <div>
            <h3 className={`wf-h3${serif(option)}`} style={{ marginBottom: 2 }}>
              {l.name}
            </h3>
            <p className="wf-meta" style={{ margin: 0 }}>
              {l.role}
            </p>
          </div>
          <p className="wf-body" style={{ margin: 0 }}>
            {l.bio}
          </p>
        </div>
      ))}
    </div>
  );
}

export function MilestoneTimeline({ option }: { option: WireframeOptionId }) {
  return (
    <div className="wf-timeline">
      {MILESTONES.map((m) => (
        <div key={m.year} className="wf-timeline-item">
          <span className="wf-meta wf-accent-text" style={{ fontWeight: 700 }}>
            {m.year}
          </span>
          <h3 className={`wf-h3${serif(option)}`} style={{ margin: "4px 0 4px" }}>
            {m.title}
          </h3>
          <p className="wf-body" style={{ margin: 0 }}>
            {m.text}
          </p>
        </div>
      ))}
    </div>
  );
}
