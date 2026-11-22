import Link from "next/link";
import {
  SAMPLE_PRODUCTS,
  optionHref,
  type WireframeOptionId,
} from "../../domain/wireframe-data";
import { MediaBox, SectionNote } from "../WireframePrimitives";

export function HomeView({ option }: { option: WireframeOptionId }) {
  if (option === "editorial") {
    return (
      <>
        {/* Hero */}
        <section className="wf-section">
          <div className="wf-container" style={{ textAlign: "center" }}>
            <SectionNote text="Option A Hero: Centered editorial headline + full-bleed harvest visual, zero clutter above the fold" />
            <p className="wf-eyebrow">Indian Heritage · Global Agricultural Exports</p>
            <h1 className="wf-h1 wf-serif" style={{ maxWidth: 780, margin: "0 auto 16px" }}>
              Connecting India&rsquo;s Finest Harvests to Discerning Global Markets
            </h1>
            <p className="wf-lead" style={{ margin: "0 auto 28px" }}>
              Acharyodaya partners directly with regional Indian farming communities to export certified grains, whole spices, and natural ingredients worldwide.
            </p>
            <div className="wf-btn-row" style={{ justifyContent: "center", marginBottom: 40 }}>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-primary">
                Explore Export Catalog
              </Link>
              <Link href={optionHref(option, "about")} className="wf-btn wf-btn-secondary">
                Read Our Story
              </Link>
            </div>
            <MediaBox label="[HERO VISUAL · 16:9 · Atmospheric sunrise over Indian agricultural farmland]" height={360} tone="forest" />
          </div>
        </section>

        {/* Brand Manifesto */}
        <section className="wf-section wf-section-alt">
          <div className="wf-container">
            <SectionNote text="Editorial Manifesto: Asymmetric 40/60 narrative split establishing heritage, trust, and standardization" />
            <div className="wf-split-40-60">
              <div>
                <p className="wf-eyebrow">01 / Philosophy</p>
                <h2 className="wf-h2 wf-serif">Rooted in Indian Tradition, Built for Global Standards</h2>
              </div>
              <div>
                <p className="wf-lead">
                  Every lot carries the provenance of its region—from the foothills of Punjab to the spice hills of Idukki—backed by modern laboratory verification and export-grade logistics.
                </p>
                <div className="wf-grid-3" style={{ marginTop: 24 }}>
                  <div className="wf-metric">
                    <div className="wf-metric-val wf-serif">12+</div>
                    <div className="wf-metric-lbl">Sourcing States</div>
                  </div>
                  <div className="wf-metric">
                    <div className="wf-metric-val wf-serif">100%</div>
                    <div className="wf-metric-lbl">Batch Traceable</div>
                  </div>
                  <div className="wf-metric">
                    <div className="wf-metric-val wf-serif">ISO / APEDA</div>
                    <div className="wf-metric-lbl">Export Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Products */}
        <section className="wf-section">
          <div className="wf-container">
            <SectionNote text="Curated Product Showcase: 3 editorial feature cards leading into full catalog and spec sheets" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
              <div>
                <p className="wf-eyebrow">02 / Export Portfolio</p>
                <h2 className="wf-h2 wf-serif">Signature Indian Commodities</h2>
              </div>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary wf-btn-sm">
                View All 6 Products →
              </Link>
            </div>
            <div className="wf-grid-3">
              {SAMPLE_PRODUCTS.slice(0, 3).map((product) => (
                <article key={product.slug} className="wf-card">
                  <MediaBox label={`[PRODUCT PHOTO · 4:3 · ${product.name}]`} height={190} />
                  <p className="wf-eyebrow" style={{ margin: "4px 0 0" }}>{product.category}</p>
                  <h3 className="wf-h3 wf-serif">{product.name}</h3>
                  <p className="wf-body">{product.summary}</p>
                  <Link href={optionHref(option, `products/${product.slug}`)} className="wf-nav-link" style={{ fontWeight: 600 }}>
                    View Specifications →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage & Quality Split */}
        <section className="wf-section wf-section-alt">
          <div className="wf-container">
            <SectionNote text="Dual Trust Pillars: Links directly to Sourcing & Quality pages" />
            <div className="wf-grid-2">
              <div className="wf-card">
                <MediaBox label="[PHOTO · 16:10 · Direct farm procurement & grading]" height={210} />
                <p className="wf-eyebrow">03 / Provenance</p>
                <h3 className="wf-h2 wf-serif">Direct Farm-to-Port Traceability</h3>
                <p className="wf-body">
                  Single-origin lots sourced directly from vetted farming clusters with harvest-date documentation.
                </p>
                <Link href={optionHref(option, "sourcing")} className="wf-btn wf-btn-secondary wf-btn-sm" style={{ alignSelf: "flex-start" }}>
                  Explore Sourcing →
                </Link>
              </div>
              <div className="wf-card">
                <MediaBox label="[PHOTO · 16:10 · Export QA lab & certification audit]" height={210} />
                <p className="wf-eyebrow">04 / Assurance</p>
                <h3 className="wf-h2 wf-serif">Certified for Global Compliance</h3>
                <p className="wf-body">
                  Every shipment includes third-party Certificate of Analysis, phytosanitary clearance, and moisture verification.
                </p>
                <Link href={optionHref(option, "quality")} className="wf-btn wf-btn-secondary wf-btn-sm" style={{ alignSelf: "flex-start" }}>
                  Quality &amp; Certifications →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quiet Editorial CTA */}
        <section className="wf-section wf-section-forest">
          <div className="wf-container-narrow" style={{ textAlign: "center" }}>
            <SectionNote text="Editorial Inquiry Invitation: Deep Forest Ink band leading to full B2B RFQ form" />
            <p className="wf-eyebrow">05 / Partner With Us</p>
            <h2 className="wf-h2 wf-serif">Request Product Specifications or Export Pricing</h2>
            <p className="wf-lead" style={{ margin: "0 auto 24px" }}>
              Share your destination port, required grade, and volume for a tailored FOB or CIF quotation within 48 hours.
            </p>
            <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-gold">
              Start an Export Inquiry →
            </Link>
          </div>
        </section>
      </>
    );
  }

  if (option === "b2b") {
    return (
      <>
        {/* B2B Split Hero with Quick RFQ */}
        <section className="wf-section">
          <div className="wf-container">
            <SectionNote text="Option B Hero: Split 60/40 layout putting value proposition on the left and a Quick-RFQ lead capture card above the fold" />
            <div className="wf-split-60-40">
              <div>
                <p className="wf-eyebrow">B2B Indian Agricultural Exporter · FCL &amp; LCL Worldwide</p>
                <h1 className="wf-h1">
                  Certified Indian Grains, Spices &amp; Ingredients — Delivered to Global Ports
                </h1>
                <p className="wf-lead">
                  Consistent export grades, verified HS-code documentation, private-label packaging, and transparent FOB/CIF pricing for international distributors and food brands.
                </p>
                <div className="wf-btn-row" style={{ marginBottom: 24 }}>
                  <Link href={optionHref(option, "products")} className="wf-btn wf-btn-primary">
                    Browse Export Catalog
                  </Link>
                  <Link href={optionHref(option, "quality")} className="wf-btn wf-btn-secondary">
                    Certifications &amp; COA
                  </Link>
                </div>
                <div className="wf-tags">
                  <span className="wf-tag">APEDA Registered</span>
                  <span className="wf-tag">FSSAI Licensed</span>
                  <span className="wf-tag">ISO 22000</span>
                  <span className="wf-tag">HACCP</span>
                </div>
              </div>

              <div className="wf-card-dashed">
                <p className="wf-eyebrow">Quick Export Inquiry</p>
                <h2 className="wf-h3">Get FOB / CIF Quote in 48 Hours</h2>
                <div className="wf-field">
                  <label className="wf-label">Product Category</label>
                  <select className="wf-select" defaultValue="basmati">
                    <option value="basmati">1121 Basmati Rice (HS 1006.30)</option>
                    <option value="turmeric">Whole Turmeric Fingers (HS 0910.30)</option>
                    <option value="cardamom">Green Cardamom 8mm+ (HS 0908.31)</option>
                    <option value="pepper">Malabar Black Pepper (HS 0904.11)</option>
                  </select>
                </div>
                <div className="wf-field">
                  <label className="wf-label">Estimated Volume &amp; Port</label>
                  <input className="wf-input" placeholder="e.g. 1 × 20ft FCL to Jebel Ali / Rotterdam" readOnly />
                </div>
                <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary" style={{ width: "100%" }}>
                  Continue to Full RFQ Form →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Bar */}
        <section className="wf-section-compact wf-section-alt">
          <div className="wf-container">
            <SectionNote text="Procurement Proof Strip: Instant credibility metrics for B2B buyers" />
            <div className="wf-grid-4">
              <div className="wf-metric">
                <div className="wf-metric-val">24+</div>
                <div className="wf-metric-lbl">Export Destinations</div>
              </div>
              <div className="wf-metric">
                <div className="wf-metric-val">6 Lines</div>
                <div className="wf-metric-lbl">Core Export Categories</div>
              </div>
              <div className="wf-metric">
                <div className="wf-metric-val">FOB / CIF</div>
                <div className="wf-metric-lbl">Supported Incoterms</div>
              </div>
              <div className="wf-metric">
                <div className="wf-metric-val">48 Hrs</div>
                <div className="wf-metric-lbl">RFQ Response SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Spec-First Product Table */}
        <section className="wf-section">
          <div className="wf-container">
            <SectionNote text="Spec-First Catalog Preview: Scannable table with HS Code, Origin, MOQ, and direct Spec Sheet links" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
              <div>
                <p className="wf-eyebrow">Export Product Matrix</p>
                <h2 className="wf-h2">Core Agricultural Commodities</h2>
              </div>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary wf-btn-sm">
                Full Filterable Catalog →
              </Link>
            </div>
            <div className="wf-table-wrap">
              <table className="wf-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>HS Code</th>
                    <th>Origin</th>
                    <th>Export Grade</th>
                    <th>MOQ</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_PRODUCTS.map((p) => (
                    <tr key={p.slug}>
                      <td><strong>{p.name}</strong></td>
                      <td><code>{p.hsCode}</code></td>
                      <td>{p.origin}</td>
                      <td>{p.grade}</td>
                      <td>{p.moq}</td>
                      <td>
                        <Link href={optionHref(option, `products/${p.slug}`)} className="wf-nav-link" style={{ fontWeight: 600 }}>
                          Spec Sheet →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compliance + Logistics 3-Col */}
        <section className="wf-section wf-section-alt">
          <div className="wf-container">
            <SectionNote text="Operational Reliability Cards: Quality, Traceability, and Export Logistics" />
            <div className="wf-grid-3">
              <div className="wf-card">
                <span className="wf-step-num">01</span>
                <h3 className="wf-h3">Verified Sourcing</h3>
                <p className="wf-body">Direct procurement from regional Indian clusters with moisture and grade checks at origin.</p>
                <Link href={optionHref(option, "sourcing")} className="wf-nav-link">Sourcing Process →</Link>
              </div>
              <div className="wf-card">
                <span className="wf-step-num">02</span>
                <h3 className="wf-h3">Lab-Tested Quality</h3>
                <p className="wf-body">Pre-shipment SGS/Eurofins testing, COA, pesticide residue screening, and phytosanitary certificates.</p>
                <Link href={optionHref(option, "quality")} className="wf-nav-link">Quality Standards →</Link>
              </div>
              <div className="wf-card">
                <span className="wf-step-num">03</span>
                <h3 className="wf-h3">Global Export Desk</h3>
                <p className="wf-body">20ft/40ft FCL &amp; LCL consolidation from Nhava Sheva, Mundra, and Cochin with custom private labeling.</p>
                <Link href={optionHref(option, "exports")} className="wf-nav-link">Shipping &amp; Incoterms →</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Option C: Farm-to-World Journey
  return (
    <>
      {/* Journey Hero */}
      <section className="wf-section wf-section-forest">
        <div className="wf-container">
          <SectionNote text="Option C Hero: Deep Forest Ink + Sunrise Saffron Farm-to-World narrative opening" />
          <div className="wf-split-60-40">
            <div>
              <p className="wf-eyebrow">Connecting Farms to the World</p>
              <h1 className="wf-h1 wf-serif">
                From Indian Farming Communities to Global Shelves — Traced Every Step
              </h1>
              <p className="wf-lead">
                We bridge India&rsquo;s heritage agricultural belts with international food buyers through transparent sourcing, certified processing, and reliable global shipping.
              </p>
              <div className="wf-btn-row">
                <Link href={optionHref(option, "sourcing")} className="wf-btn wf-btn-gold">
                  See Our Farm-to-Port Journey →
                </Link>
                <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary">
                  Explore Products
                </Link>
              </div>
            </div>
            <MediaBox label="[SPLIT HERO VISUAL · 4:5 · Indian spice/grain harvest + global shipping visual]" height={340} tone="sunrise" />
          </div>
        </div>
      </section>

      {/* 4-Stage Soil-to-Port Strip */}
      <section className="wf-section wf-section-alt">
        <div className="wf-container">
          <SectionNote text="Signature Journey Timeline: 4 visual stages translating the tagline into clear B2B operations" />
          <p className="wf-eyebrow">How We Work</p>
          <h2 className="wf-h2" style={{ marginBottom: 28 }}>Four Stages from Indian Soil to Your Port</h2>
          <div className="wf-grid-4">
            {[
              { n: "01", title: "Regional Harvest", desc: "Direct sourcing from GI-rich Indian farming belts at peak season." },
              { n: "02", title: "Cleaning & Grading", desc: "Optical sorting, moisture control, and export-grade sieve sizing." },
              { n: "03", title: "Lab & Compliance", desc: "Third-party COA, FSSAI/APEDA clearance, and residue screening." },
              { n: "04", title: "Global Dispatch", desc: "Custom export packaging and FCL/LCL shipping via major Indian ports." },
            ].map((step) => (
              <div key={step.n} className="wf-card">
                <span className="wf-step-num">{step.n}</span>
                <h3 className="wf-h3">{step.title}</h3>
                <p className="wf-body" style={{ marginBottom: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Origin + Product Spotlights */}
      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Origin-Tagged Product Spotlights: Connects each commodity directly to its Indian region" />
          <div className="wf-split-40-60" style={{ marginBottom: 48 }}>
            <MediaBox label="[REGIONAL MAP / PHOTO · Punjab, Tamil Nadu & Kerala Sourcing Belts]" height={260} />
            <div>
              <p className="wf-eyebrow">Origin-First Catalog</p>
              <h2 className="wf-h2">Single-Region Indian Grains, Spices &amp; Superfoods</h2>
              <p className="wf-body">
                Every product in the Acharyodaya catalog is tied to its provenance—giving your buyers authentic flavor profiles and verifiable origin documentation.
              </p>
              <div className="wf-grid-2" style={{ marginTop: 20, marginBottom: 20 }}>
                {SAMPLE_PRODUCTS.slice(0, 4).map((p) => (
                  <Link key={p.slug} href={optionHref(option, `products/${p.slug}`)} className="wf-card" style={{ padding: 14 }}>
                    <span className="wf-eyebrow" style={{ margin: 0 }}>{p.origin}</span>
                    <strong style={{ fontSize: 14 }}>{p.name}</strong>
                    <span style={{ fontSize: 12, color: "var(--wf-muted)" }}>MOQ: {p.moq} →</span>
                  </Link>
                ))}
              </div>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary wf-btn-sm">
                View All Products →
              </Link>
            </div>
          </div>

          <div className="wf-card-dashed" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div>
              <p className="wf-eyebrow">Global Export Desk</p>
              <h3 className="wf-h2" style={{ marginBottom: 6 }}>Ready to Source Directly from India?</h3>
              <p className="wf-body" style={{ marginBottom: 0 }}>
                Request samples, lab COAs, or container pricing tailored to your destination market.
              </p>
            </div>
            <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary">
              Request Export Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
