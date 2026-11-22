import Link from "next/link";
import {
  WIREFRAME_OPTIONS,
  WIREFRAME_PAGES,
  assetPath,
  optionHref,
  type WireframeOptionId,
} from "@/modules/wireframes/domain/wireframe-data";

function MiniThumbnail({ id }: { id: WireframeOptionId }) {
  if (id === "editorial") {
    return (
      <div className="wf-mini-frame" style={{ background: "#FAF7F0" }} aria-hidden="true">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
          <div className="wf-mini-bar" style={{ width: "26%", background: "#DCD2BE" }} />
          <div className="wf-mini-bar" style={{ width: "30%", background: "#062C1A" }} />
          <div className="wf-mini-bar" style={{ width: "26%", background: "#DCD2BE" }} />
        </div>
        <div style={{ textAlign: "center", padding: "6px 12px" }}>
          <div className="wf-mini-bar" style={{ width: "70%", margin: "0 auto 6px", height: 12, background: "#062C1A" }} />
          <div className="wf-mini-bar" style={{ width: "45%", margin: "0 auto", height: 7, background: "#EC4A1E" }} />
        </div>
        <div className="wf-mini-block" style={{ height: 56, background: "linear-gradient(135deg, #062C1A 0%, #17702F 65%, #8CC63F 100%)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
          <div className="wf-mini-block" style={{ height: 26 }} />
          <div className="wf-mini-block" style={{ height: 26 }} />
          <div className="wf-mini-block" style={{ height: 26 }} />
        </div>
      </div>
    );
  }

  if (id === "b2b") {
    return (
      <div className="wf-mini-frame" style={{ background: "#FFFFFF" }} aria-hidden="true">
        <div className="wf-mini-bar" style={{ height: 7, background: "#062C1A" }} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
          <div className="wf-mini-bar" style={{ width: "26%", background: "#17702F" }} />
          <div className="wf-mini-bar" style={{ width: "40%", background: "#E3F0D7" }} />
          <div className="wf-mini-bar" style={{ width: "22%", background: "#EC4A1E" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 8 }}>
          <div style={{ display: "grid", gap: 5 }}>
            <div className="wf-mini-bar" style={{ height: 14, background: "#062C1A" }} />
            <div className="wf-mini-bar" style={{ height: 8, width: "80%", background: "#D5DFD0" }} />
            <div className="wf-mini-bar" style={{ height: 12, width: "55%", background: "#EC4A1E" }} />
          </div>
          <div className="wf-mini-block" style={{ height: 60, borderTop: "3px solid #EC4A1E", background: "#F4F8F1" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
          <div className="wf-mini-bar" style={{ height: 18, borderTop: "2px solid #F9B233", background: "#F4F8F1" }} />
          <div className="wf-mini-bar" style={{ height: 18, borderTop: "2px solid #F9B233", background: "#F4F8F1" }} />
          <div className="wf-mini-bar" style={{ height: 18, borderTop: "2px solid #F9B233", background: "#F4F8F1" }} />
          <div className="wf-mini-bar" style={{ height: 18, borderTop: "2px solid #F9B233", background: "#F4F8F1" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="wf-mini-frame" style={{ background: "#FFFDF8" }} aria-hidden="true">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
        <div className="wf-mini-bar" style={{ width: "30%", background: "#062C1A" }} />
        <div className="wf-mini-bar" style={{ width: "42%", background: "#E4F0D8" }} />
        <div className="wf-mini-bar" style={{ width: "18%", borderRadius: 99, background: "#17702F" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 8 }}>
        <div style={{ display: "grid", gap: 5, alignContent: "center" }}>
          <div className="wf-mini-bar" style={{ height: 12, background: "#062C1A" }} />
          <div className="wf-mini-bar" style={{ height: 8, width: "85%", background: "#D4E0C8" }} />
          <div className="wf-mini-bar" style={{ height: 10, width: "60%", background: "#17702F" }} />
        </div>
        <div className="wf-mini-block" style={{ height: 64, background: "linear-gradient(135deg, #FCE8C9 0%, #F9B233 50%, #EC4A1E 100%)" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
        <div className="wf-mini-block" style={{ height: 24, borderTop: "2px solid #17702F" }} />
        <div className="wf-mini-block" style={{ height: 24, borderTop: "2px solid #8CC63F" }} />
        <div className="wf-mini-block" style={{ height: 24, borderTop: "2px solid #F9B233" }} />
        <div className="wf-mini-block" style={{ height: 24, borderTop: "2px solid #EC4A1E" }} />
      </div>
    </div>
  );
}

export default function WireframeSelectorHomePage() {
  return (
    <main>
      <div className="wf-sunrise-bar" />
      {/* Branded Forest Ink Hero Banner */}
      <header className="wf-section-forest" style={{ padding: "40px 0 44px" }}>
        <div className="wf-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, marginBottom: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/brand/acharyodaya-logo-reverse.svg")}
              alt="Acharyodaya — Connecting Farms to the World"
              style={{ height: 62, width: "auto", display: "block" }}
            />
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
            Explore <strong>3 full-color branded directions</strong> built with Acharyodaya&rsquo;s finalized logo,
            Forest Ink, Leaf Green, Saffron, Marigold, and Ivory palette—each featuring{" "}
            <strong>8 clickable B2B export pages</strong> on the Nexara Foundation framework. You can also toggle
            between Brand Color and Grayscale Wireframe mode inside any prototype.
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
              <article key={opt.id} className="wf-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="wf-tag wf-tag-saffron">{opt.code}</span>
                  <span style={{ fontFamily: "var(--wf-font-mono)", fontSize: 11, color: "var(--brand-leaf)", fontWeight: 600 }}>
                    8 CLICKABLE PAGES
                  </span>
                </div>

                <MiniThumbnail id={opt.id} />

                <h3 className={`wf-h2 ${opt.id === "editorial" ? "wf-serif" : ""}`} style={{ marginBottom: 4 }}>
                  {opt.name}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: "var(--brand-forest)" }}>
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
            while staying on the exact same page—or toggle Brand Color vs. Grayscale Wireframe mode.
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
              <h3 className="wf-h3">Swap Real Photography &amp; Copy</h3>
              <p className="wf-body" style={{ marginBottom: 0 }}>
                Replace art-direction frames with authentic farm, spice/grain, facility, and port photography.
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
