import Link from "next/link";
import {
  WIREFRAME_PAGES,
  assetPath,
  optionHref,
  type WireframeOptionId,
} from "../domain/wireframe-data";
import { CONTACT } from "../domain/showcase-content";
import { BRAND_TAGLINE, BrandLogo } from "./BrandLogo";

export function SectionNote({ text }: { text: string }) {
  return <div className="wf-annotation">[UX NOTE] {text}</div>;
}

/**
 * Photography frame. With `src` it shows a real image (object-fit: cover) and an
 * optional caption chip; without it, it falls back to the branded art-direction placeholder.
 */
export function MediaBox({
  label,
  height = 240,
  tone = "sage",
  src,
  caption,
  shade = false,
  radius,
}: {
  label: string;
  height?: number;
  tone?: "sage" | "forest" | "sunrise";
  src?: string;
  caption?: string;
  shade?: boolean;
  radius?: number;
}) {
  const toneClass =
    tone === "forest" ? " wf-media-forest" : tone === "sunrise" ? " wf-media-sunrise" : "";

  if (src) {
    return (
      <div
        className={`wf-media${toneClass}${shade || caption ? " wf-media-shade" : ""}`}
        style={{ minHeight: height, height, ...(radius !== undefined ? { borderRadius: radius } : {}) }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="wf-media-img" src={assetPath(src)} alt={label} loading="lazy" />
        {caption && <span className="wf-media-caption">{caption}</span>}
      </div>
    );
  }

  const strokeColor = tone === "forest" ? "rgba(244,239,228,0.28)" : "rgba(6,44,26,0.18)";
  return (
    <div className={`wf-media${toneClass}`} style={{ minHeight: height }}>
      <svg className="wf-media-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="0" x2="100" y2="100" stroke={strokeColor} strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke={strokeColor} strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="wf-media-label">{label}</span>
    </div>
  );
}

const NAV_ITEMS = [
  { label: "Home", segment: "" },
  { label: "About", segment: "about" },
  { label: "Products", segment: "products" },
  { label: "Sourcing", segment: "sourcing" },
  { label: "Quality", segment: "quality" },
  { label: "Exports", segment: "exports" },
  { label: "Contact / RFQ", segment: "contact" },
] as const;

export function WireframeHeader({
  option,
  activeSegment,
}: {
  option: WireframeOptionId;
  activeSegment: string;
}) {
  if (option === "editorial") {
    const leftNav = NAV_ITEMS.slice(0, 3);
    const rightNav = NAV_ITEMS.slice(3);
    return (
      <header className="wf-header">
        <div className="wf-sunrise-bar" />
        <div className="wf-container">
          <div className="wf-nav-row" style={{ justifyContent: "space-between", padding: "16px 0" }}>
            <nav className="wf-nav-links" aria-label="Primary left">
              {leftNav.map((item) => (
                <Link
                  key={item.segment}
                  href={optionHref(option, item.segment)}
                  className={`wf-nav-link ${activeSegment === item.segment ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href={optionHref(option, "")} aria-label="Acharyodaya Home">
              <BrandLogo height={46} />
            </Link>

            <nav className="wf-nav-links" aria-label="Primary right">
              {rightNav.map((item) => (
                <Link
                  key={item.segment}
                  href={optionHref(option, item.segment)}
                  className={`wf-nav-link ${activeSegment === item.segment ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    );
  }

  if (option === "b2b") {
    return (
      <>
        <div className="wf-utility-bar">
          <div className="wf-container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span>APEDA · FSSAI · ISO 22000 · SPICES BOARD · 24 DESTINATION MARKETS</span>
            <span>
              EXPORT DESK {CONTACT.phone} · {CONTACT.email.toUpperCase()} · 48H QUOTE SLA
            </span>
          </div>
        </div>
        <header className="wf-header">
          <div className="wf-container">
            <div className="wf-nav-row">
              <Link href={optionHref(option, "")} aria-label="Acharyodaya Home">
                <BrandLogo height={36} />
              </Link>
              <nav className="wf-nav-links" aria-label="Primary">
                {NAV_ITEMS.slice(0, 6).map((item) => (
                  <Link
                    key={item.segment}
                    href={optionHref(option, item.segment)}
                    className={`wf-nav-link ${activeSegment === item.segment ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary wf-btn-sm">
                Request Quote (RFQ)
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  }

  // Option C: Farm-to-World Journey
  return (
    <header className="wf-header">
      <div className="wf-sunrise-bar" />
      <div className="wf-container">
        <div className="wf-nav-row">
          <Link href={optionHref(option, "")} aria-label="Acharyodaya Home">
            <BrandLogo height={38} />
          </Link>
          <nav className="wf-nav-links" aria-label="Primary">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <Link
                key={item.segment}
                href={optionHref(option, item.segment)}
                className={`wf-nav-link ${activeSegment === item.segment ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary wf-btn-sm">
            Start Export Inquiry →
          </Link>
        </div>
      </div>
    </header>
  );
}

export function WireframeFooter({ option }: { option: WireframeOptionId }) {
  return (
    <footer className="wf-footer">
      <div className="wf-container">
        <SectionNote text={`Footer structure (${option.toUpperCase()}): Forest Ink anchor, reverse logo, full 8-page sitemap & B2B desk`} />
        <div className="wf-footer-grid">
          <div>
            <div style={{ marginBottom: 20 }}>
              <BrandLogo height={40} surface="reverse" />
            </div>
            <p className="wf-body" style={{ marginBottom: 16, maxWidth: 320 }}>
              {BRAND_TAGLINE} — connecting India&rsquo;s finest farming communities with discerning food importers
              through certified, traceable agricultural exports.
            </p>
            <div className="wf-tags">
              <span className="wf-tag">APEDA</span>
              <span className="wf-tag">FSSAI</span>
              <span className="wf-tag">ISO 22000</span>
              <span className="wf-tag">HACCP</span>
            </div>
          </div>

          <div>
            <p className="wf-eyebrow">Company</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {WIREFRAME_PAGES.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link href={optionHref(option, p.segment)} className="wf-nav-link">
                    {p.label.replace(/^\d+\.\s*/, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="wf-eyebrow">Operations</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {WIREFRAME_PAGES.slice(4).map((p) => (
                <li key={p.id}>
                  <Link href={optionHref(option, p.segment)} className="wf-nav-link">
                    {p.label.replace(/^\d+\.\s*/, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="wf-eyebrow">Global Export Desk</p>
            <p className="wf-body" style={{ marginBottom: 6 }}>{CONTACT.address}</p>
            <p className="wf-body" style={{ marginBottom: 6 }}>Ports: Nhava Sheva · Mundra · Chennai · Cochin</p>
            <p className="wf-body" style={{ marginBottom: 6 }}>
              {CONTACT.phone} · {CONTACT.email}
            </p>
            <p className="wf-body" style={{ marginBottom: 18 }}>{CONTACT.hours}</p>
            <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-gold wf-btn-sm">
              Request Export Quote →
            </Link>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(244, 239, 228, 0.14)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 12,
            color: "#9fb6a6",
          }}
        >
          <span>
            © 2026 {CONTACT.company}. {CONTACT.iec}. Prototype content is illustrative.
          </span>
          <span>Privacy Policy · Terms of Trade · Export Compliance</span>
        </div>
      </div>
    </footer>
  );
}
