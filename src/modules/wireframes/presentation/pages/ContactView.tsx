"use client";

import { useEffect, useState, type FormEvent } from "react";
import { SAMPLE_PRODUCTS, type WireframeOptionId } from "../../domain/wireframe-data";
import { CONTACT, SCENE_IMAGES } from "../../domain/showcase-content";
import { MediaBox, SectionNote } from "../WireframePrimitives";

export function ContactView({
  option,
  initialProduct,
}: {
  option: WireframeOptionId;
  initialProduct?: string;
}) {
  const isSerif = option === "editorial";
  const [submitted, setSubmitted] = useState(false);
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState(initialProduct ?? SAMPLE_PRODUCTS[0]!.name);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fromQuery = new URLSearchParams(window.location.search).get("product");
    if (fromQuery) {
      setProduct(fromQuery);
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="wf-section">
      <div className="wf-container">
        <SectionNote text="Page 08 (Contact & Request a Quote): Structured B2B RFQ form — will wire into a Nexara backend module in production" />

        <div className="wf-split-60-40" style={{ alignItems: "start" }}>
          <div>
            <p className="wf-eyebrow">Export Desk · Request for Quote (RFQ)</p>
            <h1 className={`wf-h1 ${isSerif ? "wf-serif" : ""}`}>
              Request Export Pricing or Product Samples
            </h1>
            <p className="wf-lead">
              Share your commodity, target volume, and destination port. Our export desk responds within 24–48 business hours with specifications and FOB/CIF pricing.
            </p>

            {submitted ? (
              <div className="wf-card-dashed" style={{ padding: 28 }}>
                <p className="wf-eyebrow">RFQ received · Ref ACY-RFQ-26-0418</p>
                <h2 className="wf-h2">Thank you{company ? `, ${company}` : ""}.</h2>
                <p className="wf-body">
                  Your inquiry for <strong>{product}</strong> is with our export desk. Expect a formal FOB / CIF quotation and specification sheet within 48 hours.
                </p>
                <p className="wf-meta" style={{ marginBottom: 16 }}>Prototype only — in production this posts to a Nexara API module and emails the desk.</p>
                <button
                  type="button"
                  className="wf-btn wf-btn-secondary wf-btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="wf-card" onSubmit={handleSubmit}>
                <div className="wf-grid-2" style={{ gap: 16 }}>
                  <div className="wf-field" style={{ marginBottom: 0 }}>
                    <label className="wf-label" htmlFor="wf-name">Full Name *</label>
                    <input id="wf-name" className="wf-input" required placeholder="e.g. Sarah Lindqvist" />
                  </div>
                  <div className="wf-field" style={{ marginBottom: 0 }}>
                    <label className="wf-label" htmlFor="wf-company">Company / Importer Name *</label>
                    <input
                      id="wf-company"
                      className="wf-input"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Northwind Fine Foods Ltd."
                    />
                  </div>
                </div>

                <div className="wf-grid-2" style={{ gap: 16 }}>
                  <div className="wf-field" style={{ marginBottom: 0 }}>
                    <label className="wf-label" htmlFor="wf-email">Business Email *</label>
                    <input id="wf-email" type="email" className="wf-input" required placeholder="procurement@company.com" />
                  </div>
                  <div className="wf-field" style={{ marginBottom: 0 }}>
                    <label className="wf-label" htmlFor="wf-country">Destination Country / Port *</label>
                    <input id="wf-country" className="wf-input" required placeholder="e.g. UAE — Jebel Ali Port" />
                  </div>
                </div>

                <div className="wf-grid-2" style={{ gap: 16 }}>
                  <div className="wf-field" style={{ marginBottom: 0 }}>
                    <label className="wf-label" htmlFor="wf-product">Product of Interest</label>
                    <select
                      id="wf-product"
                      className="wf-select"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                    >
                      {SAMPLE_PRODUCTS.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name} (HS {p.hsCode})
                        </option>
                      ))}
                      <option value="Multiple / Custom Sourcing">Multiple Commodities / Custom Sourcing</option>
                    </select>
                  </div>
                  <div className="wf-field" style={{ marginBottom: 0 }}>
                    <label className="wf-label" htmlFor="wf-incoterm">Preferred Incoterm &amp; Volume</label>
                    <select id="wf-incoterm" className="wf-select" defaultValue="FOB">
                      <option value="FOB">FOB — 1 × 20ft FCL</option>
                      <option value="CIF">CIF — 1 × 20ft / 40ft FCL</option>
                      <option value="LCL">LCL Trial Shipment / Pallet</option>
                      <option value="SAMPLE">Courier Sample Evaluation</option>
                    </select>
                  </div>
                </div>

                <div className="wf-field" style={{ marginBottom: 4 }}>
                  <label className="wf-label" htmlFor="wf-notes">Packaging, Grade &amp; Certification Requirements</label>
                  <textarea
                    id="wf-notes"
                    className="wf-textarea"
                    placeholder="Specify bag size (e.g. 25 kg PP or private-label 5 kg), target delivery window, or special lab requirements..."
                  />
                </div>

                <button type="submit" className="wf-btn wf-btn-primary">
                  Submit Export Inquiry →
                </button>
              </form>
            )}
          </div>

          <aside style={{ display: "grid", gap: 20 }}>
            <div className="wf-card-dashed">
              <p className="wf-eyebrow">Direct Export Desk</p>
              <h2 className="wf-h3">{CONTACT.company}</h2>
              <p className="wf-body">
                <strong>Email:</strong> {CONTACT.email}<br />
                <strong>Phone:</strong> {CONTACT.phone}<br />
                <strong>WhatsApp:</strong> {CONTACT.whatsapp}<br />
                <strong>Hours:</strong> {CONTACT.hours}
              </p>
              <p className="wf-body" style={{ marginBottom: 0 }}>
                <strong>Corporate Office:</strong><br />
                {CONTACT.address}
              </p>
            </div>

            <MediaBox label="Export warehouse with stacked sacks of rice and spices" src={SCENE_IMAGES.warehouse} height={220} caption="Mumbai consolidation warehouse" />

            <div className="wf-card" style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
              <span className="wf-avatar">VD</span>
              <span className="wf-person">
                <span>
                  <strong>Vikram Desai</strong>
                  <span>Director, Global Trade · replies personally to new buyers</span>
                </span>
              </span>
            </div>

            <div className="wf-card">
              <p className="wf-eyebrow">What Happens Next?</p>
              <ol style={{ paddingLeft: 18, margin: 0, display: "grid", gap: 8, fontSize: 13, color: "var(--wf-ink-2)" }}>
                <li>Export manager reviews grade, port &amp; compliance requirements.</li>
                <li>We issue formal FOB/CIF quotation + specification sheet within 48 hours.</li>
                <li>Physical samples &amp; third-party lab COA dispatched on approval.</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
