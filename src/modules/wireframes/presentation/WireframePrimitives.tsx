import Link from "next/link";
import {
  WIREFRAME_PAGES,
  assetPath,
  optionHref,
  type WireframeOptionId,
} from "../domain/wireframe-data";

export function SectionNote({ text }: { text: string }) {
  return <div className="wf-annotation">[UX NOTE] {text}</div>;
}

export function MediaBox({
  label,
  height = 240,
  tone = "sage",
}: {
  label: string;
  height?: number;
  tone?: "sage" | "forest" | "sunrise";
}) {
  const toneClass =
    tone === "forest"
      ? "wf-media wf-media-forest"
      : tone === "sunrise"
        ? "wf-media wf-media-sunrise"
        : "wf-media";

  const strokeColor = tone === "forest" ? "rgba(244,239,228,0.28)" : "rgba(6,44,26,0.18)";

  return (
    <div className={toneClass} style={{ minHeight: height }}>
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
          <div
            className="wf-nav-row"
            style={{ justifyContent: "space-between", padding: "18px 0" }}
          >
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/brand/acharyodaya-logo.svg")}
                alt="Acharyodaya — Connecting Farms to the World"
                className="wf-logo-img-lg"
              />
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
      <header className="wf-header">
        <div className="wf-utility-bar">
          <div className="wf-container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span>APEDA · FSSAI · ISO 22000 · INDIAN AGRICULTURAL EXPORTS</span>
            <span>EXPORT DESK: +91 XX XXXX XXXX · EXPORTS@ACHARYODAYA.COM · 48H QUOTE SLA</span>
          </div>
        </div>
        <div className="wf-container">
          <div className="wf-nav-row">
            <Link href={optionHref(option, "")} aria-label="Acharyodaya Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/brand/acharyodaya-logo-no-tagline.svg")}
                alt="Acharyodaya"
                className="wf-logo-img"
              />
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
    );
  }

  // Option C: Farm-to-World Journey
  return (
    <header className="wf-header">
      <div className="wf-sunrise-bar" />
      <div className="wf-container">
        <div className="wf-nav-row">
          <Link href={optionHref(option, "")} aria-label="Acharyodaya Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/brand/acharyodaya-logo.svg")}
              alt="Acharyodaya — Connecting Farms to the World"
              className="wf-logo-img"
            />
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
          <Link
            href={optionHref(option, "contact")}
            className="wf-btn wf-btn-primary wf-btn-sm"
            style={{ borderRadius: 999 }}
          >
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
        <SectionNote text={`Footer structure (${option.toUpperCase()}): Forest Ink dark green anchor, reverse logo, full 8-page sitemap & B2B desk`} />
        <div className="wf-grid-4" style={{ marginBottom: 32 }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/brand/acharyodaya-logo-reverse.svg")}
              alt="Acharyodaya — Connecting Farms to the World"
              style={{ height: 48, width: "auto", marginBottom: 14, display: "block" }}
            />
            <p className="wf-body" style={{ marginBottom: 12 }}>
              Connecting Indian farming communities with global food importers through certified, traceable agricultural exports.
            </p>
            <div className="wf-tags">
              <span className="wf-tag">APEDA</span>
              <span className="wf-tag">FSSAI</span>
              <span className="wf-tag">ISO 22000</span>
            </div>
          </div>

          <div>
            <p className="wf-eyebrow">Sitemap (Pages 01–04)</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
              {WIREFRAME_PAGES.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link href={optionHref(option, p.segment)} className="wf-nav-link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="wf-eyebrow">Operations &amp; RFQ (05–08)</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
              {WIREFRAME_PAGES.slice(4).map((p) => (
                <li key={p.id}>
                  <Link href={optionHref(option, p.segment)} className="wf-nav-link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="wf-eyebrow">Global Export Desk</p>
            <p className="wf-body" style={{ marginBottom: 6 }}>
              Corporate Office: [City, State, India]
            </p>
            <p className="wf-body" style={{ marginBottom: 6 }}>
              Ports: Nhava Sheva · Mundra · Cochin
            </p>
            <p className="wf-body" style={{ marginBottom: 14 }}>
              Email: exports@acharyodaya.com
            </p>
            <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-gold wf-btn-sm">
              Request Export Quote →
            </Link>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(244, 239, 228, 0.18)",
            paddingTop: 16,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 12,
            color: "#a8c0b0",
          }}
        >
          <span>© 2026 Acharyodaya Exports. Branded Prototype ({option.toUpperCase()}).</span>
          <span>Privacy Policy · Terms of Trade · Export Compliance</span>
        </div>
      </div>
    </footer>
  );
}
