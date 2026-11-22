"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SAMPLE_PRODUCTS,
  optionHref,
  type WireframeOptionId,
} from "../../domain/wireframe-data";
import { MediaBox, SectionNote } from "../WireframePrimitives";

const CATEGORIES = ["All", "Grains & Rice", "Whole Spices", "Superfoods & Sweeteners"] as const;

export function ProductsView({ option }: { option: WireframeOptionId }) {
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const isSerif = option === "editorial";

  const filtered =
    selectedCategory === "All"
      ? SAMPLE_PRODUCTS
      : SAMPLE_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section className="wf-section-compact">
        <div className="wf-container">
          <SectionNote text={`Page 03 (Products Catalog) — ${option.toUpperCase()} view: interactive category filter + clickable spec sheets`} />
          <p className="wf-eyebrow">Export Product Catalog</p>
          <h1 className={`wf-h1 ${isSerif ? "wf-serif" : ""}`}>Indian Agricultural Commodities</h1>
          <p className="wf-lead" style={{ marginBottom: 20 }}>
            Click any product to inspect its full export specification sheet (HS code, moisture, packaging, MOQ, and certifications).
          </p>

          <div className="wf-tabs" role="tablist" aria-label="Product categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`wf-tab ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {option === "b2b" ? (
            <div className="wf-table-wrap">
              <table className="wf-table">
                <thead>
                  <tr>
                    <th>Commodity</th>
                    <th>Category</th>
                    <th>HS Code</th>
                    <th>Grade</th>
                    <th>Moisture</th>
                    <th>MOQ</th>
                    <th>Spec Sheet</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.slug}>
                      <td>
                        <strong>{p.name}</strong>
                        <div style={{ fontSize: 12, color: "var(--wf-muted)" }}>{p.origin}</div>
                      </td>
                      <td>{p.category}</td>
                      <td><code>{p.hsCode}</code></td>
                      <td>{p.grade}</td>
                      <td>{p.moisture}</td>
                      <td>{p.moq}</td>
                      <td>
                        <Link href={optionHref(option, `products/${p.slug}`)} className="wf-btn wf-btn-secondary wf-btn-sm">
                          View Specs
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={option === "editorial" ? "wf-grid-2" : "wf-grid-3"}>
              {filtered.map((p) => (
                <article key={p.slug} className="wf-card">
                  <MediaBox label={`[PRODUCT PHOTO · ${p.name}]`} height={option === "editorial" ? 220 : 170} />
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                    <span className="wf-eyebrow" style={{ margin: 0 }}>{p.category}</span>
                    <span className="wf-tag">HS {p.hsCode}</span>
                  </div>
                  <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>{p.name}</h2>
                  {option === "journey" && (
                    <p style={{ fontSize: 12, fontFamily: "var(--wf-font-mono)", margin: 0, color: "var(--wf-muted)" }}>
                      ORIGIN: {p.origin}
                    </p>
                  )}
                  <p className="wf-body">{p.summary}</p>
                  <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, paddingTop: 8, borderTop: "1px solid var(--wf-border)" }}>
                    <span style={{ fontSize: 12, color: "var(--wf-muted)" }}>MOQ: {p.moq}</span>
                    <Link href={optionHref(option, `products/${p.slug}`)} className="wf-btn wf-btn-secondary wf-btn-sm">
                      View Specs →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="wf-section-compact wf-section-alt">
        <div className="wf-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>Need Custom Specifications or Private-Label Packaging?</h2>
            <p className="wf-body" style={{ marginBottom: 0 }}>
              We accommodate custom retail packs, bulk liner bags, and buyer-specified lab parameters.
            </p>
          </div>
          <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary">
            Request Custom Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
