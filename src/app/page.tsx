import Link from "next/link";
import { BrandLogo } from "@/modules/wireframes/presentation/BrandLogo";
import {
  WIREFRAME_OPTIONS,
  WIREFRAME_PAGES,
  assetPath,
  optionHref,
  type WireframeOptionId,
} from "@/modules/wireframes/domain/wireframe-data";

const PREVIEW: Record<WireframeOptionId, { img: string; caption: string }> = {
  editorial: { img: "/images/hero-sunrise.jpg", caption: "Story-led · Serif" },
  b2b: { img: "/images/port-containers.jpg", caption: "Spec-first · RFQ" },
  journey: { img: "/images/farmer-harvest.jpg", caption: "Origin · Traceability" },
};

function DirectionPreview({ id }: { id: WireframeOptionId }) {
  const p = PREVIEW[id];
  return (
    <div className="wf-media wf-media-shade" style={{ height: 220 }} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="wf-media-img" src={assetPath(p.img)} alt="" />
      <span className="wf-media-caption">{p.caption}</span>
    </div>
  );
}

export default function WireframeSelectorHomePage() {
  return (
    <main>
      <div className="wf-sunrise-bar" />
      {/* Branded Forest Ink Hero Banner */}
      <header className="wf-section-forest" style={{ padding: "56px 0 64px" }}>
        <div className="wf-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, marginBottom: 24 }}>
            <BrandLogo height={56} surface="reverse" />
            <div className="wf-swatch-row">
              <span className="wf-swatch"><span className="wf-swatch-dot" style={{ background: "#062C1A" }} />Forest #062C1A</span>
              <span className="wf-swatch"><span className="wf-swatch-dot" style={{ background: "#17702F" }} />Leaf #17702F</span>
              <span className="wf-swatch"><span className="wf-swatch-dot" style={{ background: "#EC4A1E" }} />Saffron #EC4A1E</span>
              <span className="wf-swatch"><span className="wf-swatch-dot" style={{ background: "#F9B233" }} />Marigold #F9B233</span>
              <span className="wf-swatch"><span className="wf-swatch-dot" style={{ background: "#F4EFE4" }} />Ivory #F4EFE4</span>
            </div>
          </div>

          <p className="wf-eyebrow">Acharyodaya · B2B Agricultural Export Website · Client Review</p>
          <h1 className="wf-h1 wf-serif">Website Prototypes — Pick a Direction</h1>
          <p className="wf-lead" style={{ marginBottom: 0 }}>
            Explore <strong>3 premium branded directions</strong> built on the Acharyodaya wordmark and{" "}
            <em>The Rise of Excellence</em> — each with <strong>8 clickable B2B export pages</strong>, photography and
            live dummy content. Use the <strong>Theme</strong> button (bottom right) to switch Light / Dark mode and try any
            accent colour across every page.
          </p>
        </div>
      </header>

      {/* 3 Direction Cards */}
      <section className="wf-section wf-section-alt">
        <div className="wf-container">
          <p className="wf-eyebrow">Step 1 · Compare 3 Branded Directions</p>
          <h2 className="wf-h2 wf-serif" style={{ marginBottom: 24 }}>Choose a Direction to Explore</h2>

          <div className="wf-grid-3">
            {WIREFRAME_OPTIONS.map((opt) => (
              <article key={opt.id} className="wf-card wf-card-hover">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="wf-tag wf-tag-saffron">{opt.code}</span>
                  <span className="wf-meta" style={{ fontWeight: 600 }}>
                    8 CLICKABLE PAGES
                  </span>
                </div>

                <DirectionPreview id={opt.id} />

                <h3 className={`wf-h2 ${opt.id === "editorial" ? "wf-serif" : ""}`} style={{ marginBottom: 4 }}>
                  {opt.name}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: "var(--wf-heading)" }}>
                  {opt.tagline}
                </p>
                <p className="wf-body" style={{ marginBottom: 4 }}>{opt.summary}</p>

                <div style={{ fontSize: 12, color: "var(--wf-ink-2)", borderTop: "1px solid var(--wf-border)", paddingTop: 10 }}>
                  <strong>Best for:</strong> {opt.bestFor}
                </div>

                <div className="wf-tags">
                  {opt.traits.map((trait) => (
                    <span key={trait} className="wf-tag">{trait}</span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: 12 }}>
                  <Link href={optionHref(opt.id, "")} className="wf-btn wf-btn-primary" style={{ width: "100%" }}>
                    Open {opt.code} Prototype →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Page Sitemap Matrix */}
      <section className="wf-section">
        <div className="wf-container">
          <p className="wf-eyebrow">Step 2 · Full 8-Page Sitemap Coverage</p>
          <h2 className="wf-h2 wf-serif">Compare Any Page Across All 3 Directions</h2>
          <p className="wf-lead" style={{ marginBottom: 24 }}>
            Inside any prototype, use the top control bar to switch between Option A, Option B, and Option C
            while staying on the exact same page — or toggle Brand Color vs. Grayscale Wireframe mode.
          </p>

          <div className="wf-table-wrap">
            <table className="wf-table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Purpose</th>
                  <th>Option A</th>
                  <th>Option B</th>
                  <th>Option C</th>
                </tr>
              </thead>
              <tbody>
                {WIREFRAME_PAGES.map((page) => (
                  <tr key={page.id}>
                    <td><strong>{page.label}</strong></td>
                    <td>{page.purpose}</td>
                    <td>
                      <Link href={optionHref("editorial", page.segment)} className="wf-nav-link" style={{ fontWeight: 600 }}>
                        Editorial →
                      </Link>
                    </td>
                    <td>
                      <Link href={optionHref("b2b", page.segment)} className="wf-nav-link" style={{ fontWeight: 600 }}>
                        B2B Export →
                      </Link>
                    </td>
                    <td>
                      <Link href={optionHref("journey", page.segment)} className="wf-nav-link" style={{ fontWeight: 600 }}>
                        Journey →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="wf-section-compact wf-section-alt">
        <div className="wf-container">
          <p className="wf-eyebrow">Roadmap After Client Selection</p>
          <div className="wf-grid-3">
            <div className="wf-card">
              <span className="wf-step-num">01</span>
              <h3 className="wf-h3">Lock Direction &amp; Sitemap</h3>
              <p className="wf-body" style={{ marginBottom: 0 }}>
                Client picks Option A, B, C (or mixes favorite sections across options).
              </p>
            </div>
            <div className="wf-card">
              <span className="wf-step-num">02</span>
              <h3 className="wf-h3">Swap in Real Photography &amp; Copy</h3>
              <p className="wf-body" style={{ marginBottom: 0 }}>
                Current imagery is AI-generated for direction only — replace with commissioned farm, facility and port photography.
              </p>
            </div>
            <div className="wf-card">
              <span className="wf-step-num">03</span>
              <h3 className="wf-h3">Wire Nexara Backend &amp; Deploy</h3>
              <p className="wf-body" style={{ marginBottom: 0 }}>
                Connect RFQ submissions, product catalog data, and deploy to Cloudflare Workers via OpenNext.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
