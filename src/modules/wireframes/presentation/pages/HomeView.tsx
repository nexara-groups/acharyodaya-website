import Link from "next/link";
import {
  SAMPLE_PRODUCTS,
  assetPath,
  optionHref,
  type WireframeOptionId,
} from "../../domain/wireframe-data";
import { SCENE_IMAGES } from "../../domain/showcase-content";
import { MediaBox, SectionNote } from "../WireframePrimitives";
import {
  InsightsSection,
  MarketsMarquee,
  ShipmentBoard,
  TestimonialsSection,
} from "../PremiumModules";

export function HomeView({ option }: { option: WireframeOptionId }) {
  if (option === "editorial") {
    return (
      <>
        {/* Full-bleed photographic hero */}
        <section className="wf-hero-photo" style={{ alignItems: "center", textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(SCENE_IMAGES.hero)} alt="Sunrise over terraced Indian farmland" />
          <div className="wf-container-narrow" style={{ padding: "120px 28px" }}>
            <SectionNote text="Option A Hero: Centered editorial headline over full-bleed sunrise photography" />
            <p className="wf-eyebrow">Indian Heritage · Global Agricultural Exports</p>
            <h1 className="wf-h1 wf-serif" style={{ fontSize: "clamp(36px, 5.4vw, 68px)" }}>
              The Rise of Excellence, From India&rsquo;s Finest Harvests
            </h1>
            <p className="wf-lead" style={{ margin: "0 auto 34px", color: "#e7ede8" }}>
              Acharyodaya partners directly with regional farming communities to export certified grains, whole spices
              and natural ingredients to discerning buyers in 24 markets.
            </p>
            <div className="wf-btn-row" style={{ justifyContent: "center" }}>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-gold">
                Explore the Collection
              </Link>
              <Link href={optionHref(option, "about")} className="wf-btn wf-btn-secondary">
                Read Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="wf-section">
          <div className="wf-container">
            <SectionNote text="Editorial Manifesto: Asymmetric split with heritage still life and proof metrics" />
            <div className="wf-split-40-60">
              <MediaBox label="Brass measures filled with Indian whole spices" src={SCENE_IMAGES.heritage} height={460} caption="Heritage · Since 2009" />
              <div>
                <p className="wf-eyebrow">01 / Philosophy</p>
                <h2 className="wf-h2 wf-serif">Rooted in Indian tradition. Built for global standards.</h2>
                <p className="wf-lead">
                  Every lot carries the provenance of its region — from the foothills of Punjab to the spice hills of
                  Idukki — backed by laboratory verification and export-grade logistics.
                </p>
                <div className="wf-grid-3" style={{ marginTop: 28 }}>
                  <div className="wf-metric">
                    <div className="wf-metric-val wf-serif">12</div>
                    <div className="wf-metric-lbl">Sourcing states</div>
                  </div>
                  <div className="wf-metric">
                    <div className="wf-metric-val wf-serif">3,400+</div>
                    <div className="wf-metric-lbl">Partner farmers</div>
                  </div>
                  <div className="wf-metric">
                    <div className="wf-metric-val wf-serif">0.18%</div>
                    <div className="wf-metric-lbl">Lot rejection rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature products */}
        <section className="wf-section wf-section-alt">
          <div className="wf-container">
            <SectionNote text="Curated Product Showcase: 3 editorial feature cards leading into full catalog" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
              <div>
                <p className="wf-eyebrow">02 / The Collection</p>
                <h2 className="wf-h2 wf-serif" style={{ marginBottom: 0 }}>Signature Indian Commodities</h2>
              </div>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary wf-btn-sm">
                View all 6 products →
              </Link>
            </div>
            <div className="wf-grid-3">
              {SAMPLE_PRODUCTS.slice(0, 3).map((product) => (
                <Link key={product.slug} href={optionHref(option, `products/${product.slug}`)} className="wf-card" style={{ padding: 14, gap: 14 }}>
                  <MediaBox label={product.name} src={product.image} height={280} caption={product.origin.split(",")[0]} />
                  <div style={{ padding: "4px 10px 10px", display: "grid", gap: 8 }}>
                    <p className="wf-eyebrow" style={{ margin: 0 }}>{product.category}</p>
                    <h3 className="wf-h3 wf-serif" style={{ margin: 0 }}>{product.name}</h3>
                    <p className="wf-body" style={{ margin: 0 }}>{product.flavour}</p>
                    <span className="wf-accent-text" style={{ fontWeight: 600, fontSize: 13 }}>View specifications →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Dual trust pillars */}
        <section className="wf-section">
          <div className="wf-container">
            <SectionNote text="Dual Trust Pillars: Links directly to Sourcing & Quality pages" />
            <div className="wf-grid-2">
              {[
                {
                  img: SCENE_IMAGES.farmer,
                  eyebrow: "03 / Provenance",
                  title: "Direct farm-to-port traceability",
                  body: "Single-origin lots bought at the farm gate from vetted clusters, each tagged with harvest date, village and grader.",
                  href: "sourcing",
                  cta: "Explore sourcing",
                },
                {
                  img: SCENE_IMAGES.lab,
                  eyebrow: "04 / Assurance",
                  title: "Certified for global compliance",
                  body: "Every shipment carries a third-party Certificate of Analysis, phytosanitary clearance and moisture verification.",
                  href: "quality",
                  cta: "Quality & certifications",
                },
              ].map((p) => (
                <div key={p.title} className="wf-card wf-card-hover" style={{ padding: 0, overflow: "hidden", gap: 0 }}>
                  <MediaBox label={p.title} src={p.img} height={300} radius={0} />
                  <div style={{ padding: 30 }}>
                    <p className="wf-eyebrow">{p.eyebrow}</p>
                    <h3 className="wf-h2 wf-serif" style={{ fontSize: 28 }}>{p.title}</h3>
                    <p className="wf-body">{p.body}</p>
                    <Link href={optionHref(option, p.href)} className="wf-btn wf-btn-secondary wf-btn-sm">
                      {p.cta} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection option={option} alt />
        <MarketsMarquee option={option} />
        <InsightsSection option={option} />

        {/* Quiet editorial CTA */}
        <section className="wf-section wf-section-forest">
          <div className="wf-container-narrow" style={{ textAlign: "center" }}>
            <SectionNote text="Editorial Inquiry Invitation: Deep Forest Ink band leading to full B2B RFQ form" />
            <p className="wf-eyebrow">05 / Partner With Us</p>
            <h2 className="wf-h2 wf-serif">Request specifications or export pricing</h2>
            <p className="wf-lead" style={{ margin: "0 auto 28px" }}>
              Share your destination port, required grade and volume for a tailored FOB or CIF quotation within 48 hours.
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
        {/* Photo hero with Quick RFQ */}
        <section className="wf-hero-photo" style={{ minHeight: 0, alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(SCENE_IMAGES.port)} alt="Container port at sunrise" />
          <div className="wf-container" style={{ padding: "96px 28px" }}>
            <SectionNote text="Option B Hero: 60/40 split over port photography with Quick-RFQ card above the fold" />
            <div className="wf-split-60-40">
              <div>
                <p className="wf-eyebrow">B2B Indian Agricultural Exporter · FCL &amp; LCL Worldwide</p>
                <h1 className="wf-h1">Certified Indian grains, spices &amp; ingredients — delivered to your port.</h1>
                <p className="wf-lead">
                  Consistent export grades, verified HS-code documentation, private-label packaging and transparent
                  FOB / CIF pricing for distributors and food brands.
                </p>
                <div className="wf-btn-row" style={{ marginBottom: 28 }}>
                  <Link href={optionHref(option, "products")} className="wf-btn wf-btn-primary">
                    Browse Export Catalog
                  </Link>
                  <Link href={optionHref(option, "quality")} className="wf-btn wf-btn-secondary">
                    Certifications &amp; COA
                  </Link>
                </div>
                <div className="wf-grid-3" style={{ gap: 12, maxWidth: 560 }}>
                  {[
                    ["412", "Containers shipped"],
                    ["24", "Markets"],
                    ["48h", "Quote SLA"],
                  ].map(([v, l]) => (
                    <div key={l} className="wf-glass">
                      <div className="wf-metric-val">{v}</div>
                      <div className="wf-metric-lbl">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wf-card-dashed" style={{ color: "var(--wf-ink)" }}>
                <p className="wf-eyebrow">Quick Export Inquiry</p>
                <h2 className="wf-h3" style={{ fontSize: 22 }}>FOB / CIF quote in 48 hours</h2>
                <div className="wf-field" style={{ marginTop: 14 }}>
                  <label className="wf-label" htmlFor="q-product">Product</label>
                  <select id="q-product" className="wf-select" defaultValue="basmati">
                    <option value="basmati">1121 Basmati Rice (HS 1006.30)</option>
                    <option value="turmeric">Whole Turmeric Fingers (HS 0910.30)</option>
                    <option value="cardamom">Green Cardamom 8mm+ (HS 0908.31)</option>
                    <option value="pepper">Malabar Black Pepper (HS 0904.11)</option>
                  </select>
                </div>
                <div className="wf-field">
                  <label className="wf-label" htmlFor="q-vol">Volume &amp; destination</label>
                  <input id="q-vol" className="wf-input" defaultValue="2 × 20ft FCL → Jebel Ali" />
                </div>
                <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary" style={{ width: "100%" }}>
                  Continue to full RFQ →
                </Link>
                <p className="wf-meta" style={{ margin: "14px 0 0", textAlign: "center" }}>
                  37 quotes issued this week · median reply 19h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KPI bar */}
        <section className="wf-section-compact wf-section-alt">
          <div className="wf-container">
            <SectionNote text="Procurement Proof Strip: Instant credibility metrics for B2B buyers" />
            <div className="wf-grid-4">
              {[
                ["24", "Export destinations"],
                ["6 lines", "Core categories"],
                ["99.82%", "Lots accepted first time"],
                ["11 days", "Avg. PO → vessel"],
              ].map(([v, l]) => (
                <div key={l} className="wf-metric">
                  <div className="wf-metric-val">{v}</div>
                  <div className="wf-metric-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spec-first product table */}
        <section className="wf-section">
          <div className="wf-container">
            <SectionNote text="Spec-First Catalog Preview: Scannable table with HS Code, Origin, MOQ and indicative price" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
              <div>
                <p className="wf-eyebrow">Export Product Matrix</p>
                <h2 className="wf-h2" style={{ marginBottom: 0 }}>Core agricultural commodities</h2>
              </div>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary wf-btn-sm">
                Full filterable catalog →
              </Link>
            </div>
            <div className="wf-table-wrap">
              <table className="wf-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>HS Code</th>
                    <th>Export Grade</th>
                    <th>MOQ</th>
                    <th>Indicative price</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_PRODUCTS.map((p) => (
                    <tr key={p.slug}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={assetPath(p.image)} alt="" style={{ width: 52, height: 52, borderRadius: 10, objectFit: "cover", flex: "none" }} />
                          <span>
                            <strong>{p.name}</strong>
                            <div style={{ fontSize: 12, color: "var(--wf-muted)" }}>{p.origin}</div>
                          </span>
                        </div>
                      </td>
                      <td><code>{p.hsCode}</code></td>
                      <td>{p.grade}</td>
                      <td>{p.moq}</td>
                      <td style={{ whiteSpace: "nowrap", fontWeight: 600, color: "var(--wf-heading)" }}>{p.priceBand}</td>
                      <td>
                        <Link href={optionHref(option, `products/${p.slug}`)} className="wf-nav-link" style={{ fontWeight: 600 }}>
                          Spec sheet →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="wf-meta" style={{ marginTop: 12 }}>Indicative FOB bands, week 48 / 2026. Final pricing on RFQ.</p>
          </div>
        </section>

        {/* Live desk */}
        <section className="wf-section wf-section-alt">
          <div className="wf-container">
            <SectionNote text="Operational Reliability: live shipment board + process pillars" />
            <div className="wf-split-60-40" style={{ alignItems: "start" }}>
              <div>
                <p className="wf-eyebrow">Export Desk</p>
                <h2 className="wf-h2">Every container, visible end to end</h2>
                <p className="wf-lead">Buyers get a batch ID, document pack and live milestones from stuffing to discharge.</p>
                <ShipmentBoard option={option} />
              </div>
              <div style={{ display: "grid", gap: 16 }}>
                {[
                  { n: "01", t: "Verified sourcing", d: "Direct procurement with moisture and grade checks at origin.", href: "sourcing" },
                  { n: "02", t: "Lab-tested quality", d: "SGS / Eurofins COA, pesticide residue screening and phyto certificates.", href: "quality" },
                  { n: "03", t: "Global export desk", d: "20ft/40ft FCL & LCL from Nhava Sheva, Mundra and Cochin with private labelling.", href: "exports" },
                ].map((c) => (
                  <Link key={c.n} href={optionHref(option, c.href)} className="wf-card" style={{ flexDirection: "row", gap: 18, alignItems: "flex-start" }}>
                    <span className="wf-step-num" style={{ flex: "none" }}>{c.n}</span>
                    <span>
                      <h3 className="wf-h3">{c.t}</h3>
                      <p className="wf-body" style={{ margin: 0 }}>{c.d}</p>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MarketsMarquee option={option} />
        <TestimonialsSection option={option} />
        <InsightsSection option={option} alt />
      </>
    );
  }

  // Option C: Farm-to-World Journey
  return (
    <>
      <section className="wf-section wf-section-forest" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="wf-container">
          <SectionNote text="Option C Hero: Deep Forest Ink narrative opening with harvest photography and glass stats" />
          <div className="wf-split-60-40">
            <div>
              <p className="wf-eyebrow">The Rise of Excellence</p>
              <h1 className="wf-h1 wf-serif">From Indian farming communities to global shelves — traced every step.</h1>
              <p className="wf-lead">
                We bridge India&rsquo;s heritage agricultural belts with international food buyers through transparent
                sourcing, certified processing and reliable global shipping.
              </p>
              <div className="wf-btn-row" style={{ marginBottom: 32 }}>
                <Link href={optionHref(option, "sourcing")} className="wf-btn wf-btn-gold">
                  See the farm-to-port journey →
                </Link>
                <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary">
                  Explore products
                </Link>
              </div>
              <div className="wf-grid-3" style={{ gap: 12 }}>
                {[
                  ["3,400+", "Farmer partners"],
                  ["48", "Village clusters"],
                  ["100%", "Batch traceable"],
                ].map(([v, l]) => (
                  <div key={l} className="wf-glass">
                    <div className="wf-metric-val">{v}</div>
                    <div className="wf-metric-lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <MediaBox label="Farmer holding freshly harvested cardamom" src={SCENE_IMAGES.farmer} height={520} caption="Idukki, Kerala · Harvest 2026" />
          </div>
        </div>
      </section>

      {/* Four stages */}
      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Signature Journey Timeline: 4 visual stages translating the brand promise into operations" />
          <p className="wf-eyebrow">How we work</p>
          <h2 className="wf-h2" style={{ marginBottom: 36 }}>Four stages from Indian soil to your port</h2>
          <div className="wf-grid-4">
            {[
              { n: "01", title: "Regional harvest", desc: "Direct sourcing from GI-rich farming belts at peak season.", img: SCENE_IMAGES.estate },
              { n: "02", title: "Cleaning & grading", desc: "Optical sorting, moisture control and export-grade sieving.", img: SCENE_IMAGES.warehouse },
              { n: "03", title: "Lab & compliance", desc: "Third-party COA, FSSAI / APEDA clearance and residue screening.", img: SCENE_IMAGES.lab },
              { n: "04", title: "Global dispatch", desc: "Custom export packing and FCL / LCL via major Indian ports.", img: SCENE_IMAGES.port },
            ].map((step) => (
              <div key={step.n} className="wf-card wf-card-hover" style={{ padding: 12, gap: 14 }}>
                <MediaBox label={step.title} src={step.img} height={190} caption={`Stage ${step.n}`} />
                <div style={{ padding: "0 10px 12px" }}>
                  <h3 className="wf-h3">{step.title}</h3>
                  <p className="wf-body" style={{ marginBottom: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin spotlights */}
      <section className="wf-section wf-section-alt">
        <div className="wf-container">
          <SectionNote text="Origin-Tagged Product Spotlights: Connects each commodity to its Indian region" />
          <div className="wf-split-40-60" style={{ marginBottom: 56 }}>
            <MediaBox label="Misty Kerala spice plantation hills" src={SCENE_IMAGES.estate} height={480} caption="Western Ghats · Spice belt" />
            <div>
              <p className="wf-eyebrow">Origin-first catalog</p>
              <h2 className="wf-h2">Single-region Indian grains, spices &amp; superfoods</h2>
              <p className="wf-body">
                Every product is tied to its provenance — giving your buyers authentic flavour profiles and verifiable
                origin documentation.
              </p>
              <div className="wf-grid-2" style={{ marginTop: 24, marginBottom: 24, gap: 14 }}>
                {SAMPLE_PRODUCTS.slice(2, 6).map((p) => (
                  <Link key={p.slug} href={optionHref(option, `products/${p.slug}`)} className="wf-card" style={{ padding: 12, flexDirection: "row", alignItems: "center", gap: 14 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={assetPath(p.image)} alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flex: "none" }} />
                    <span style={{ display: "grid", gap: 2 }}>
                      <span className="wf-meta">{p.origin.split(",")[0]}</span>
                      <strong style={{ fontSize: 14, color: "var(--wf-heading)" }}>{p.name}</strong>
                    </span>
                  </Link>
                ))}
              </div>
              <Link href={optionHref(option, "products")} className="wf-btn wf-btn-secondary wf-btn-sm">
                View all products →
              </Link>
            </div>
          </div>

          <div className="wf-card-dashed" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div>
              <p className="wf-eyebrow">Global Export Desk</p>
              <h3 className="wf-h2" style={{ marginBottom: 6 }}>Ready to source directly from India?</h3>
              <p className="wf-body" style={{ marginBottom: 0 }}>
                Request samples, lab COAs or container pricing tailored to your destination market.
              </p>
            </div>
            <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary">
              Request export quote →
            </Link>
          </div>
        </div>
      </section>

      <MarketsMarquee option={option} />
      <TestimonialsSection option={option} />
      <InsightsSection option={option} alt />
    </>
  );
}
