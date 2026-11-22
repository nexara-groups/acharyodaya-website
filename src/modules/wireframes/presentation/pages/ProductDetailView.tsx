import Link from "next/link";
import {
  SAMPLE_PRODUCTS,
  getProductBySlug,
  optionHref,
  type WireframeOptionId,
} from "../../domain/wireframe-data";
import { MediaBox, SectionNote } from "../WireframePrimitives";

export function ProductDetailView({
  option,
  slug,
}: {
  option: WireframeOptionId;
  slug: string;
}) {
  const product = getProductBySlug(slug);
  const isSerif = option === "editorial";
  const related = SAMPLE_PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="wf-section-compact">
        <div className="wf-container">
          <SectionNote text="Page 04 (Product Detail): Technical B2B specification sheet with HS code, packaging, MOQ & direct RFQ handoff" />
          <p className="wf-eyebrow" style={{ marginBottom: 16 }}>
            <Link href={optionHref(option, "products")}>← Back to Export Catalog</Link> / {product.category}
          </p>

          <div className="wf-split-40-60" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: 12 }}>
              <MediaBox label={`[PRIMARY PRODUCT PHOTO · 4:3 · ${product.name}]`} height={290} />
              <div className="wf-grid-3" style={{ gap: 10 }}>
                <MediaBox label="[MACRO GRAIN/SPICE]" height={76} />
                <MediaBox label="[EXPORT BAG]" height={76} />
                <MediaBox label="[LAB COA SAMPLE]" height={76} />
              </div>
            </div>

            <div>
              <div className="wf-tags" style={{ marginBottom: 12 }}>
                <span className="wf-tag">HS CODE: {product.hsCode}</span>
                <span className="wf-tag">{product.category}</span>
              </div>
              <h1 className={`wf-h1 ${isSerif ? "wf-serif" : ""}`}>{product.name}</h1>
              <p className="wf-lead">{product.summary}</p>

              <div className="wf-table-wrap" style={{ marginBottom: 24 }}>
                <table className="wf-table">
                  <tbody>
                    <tr>
                      <th>Origin Region</th>
                      <td>{product.origin}</td>
                    </tr>
                    <tr>
                      <th>Export Grade</th>
                      <td>{product.grade}</td>
                    </tr>
                    <tr>
                      <th>Moisture Limit</th>
                      <td>{product.moisture}</td>
                    </tr>
                    <tr>
                      <th>Minimum Order (MOQ)</th>
                      <td>{product.moq}</td>
                    </tr>
                    <tr>
                      <th>Packaging Options</th>
                      <td>{product.packaging}</td>
                    </tr>
                    <tr>
                      <th>Shelf Life</th>
                      <td>{product.shelfLife}</td>
                    </tr>
                    <tr>
                      <th>Certifications</th>
                      <td>
                        <div className="wf-tags">
                          {product.certifications.map((c) => (
                            <span key={c} className="wf-tag">{c}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="wf-btn-row">
                <Link
                  href={`${optionHref(option, "contact")}?product=${encodeURIComponent(product.name)}`}
                  className="wf-btn wf-btn-primary"
                >
                  Request Quote for This Product →
                </Link>
                <Link href={optionHref(option, "quality")} className="wf-btn wf-btn-secondary">
                  Download Spec &amp; COA Placeholder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wf-section-compact wf-section-alt">
        <div className="wf-container">
          <p className="wf-eyebrow">Related Export Commodities</p>
          <div className="wf-grid-3">
            {related.map((p) => (
              <Link key={p.slug} href={optionHref(option, `products/${p.slug}`)} className="wf-card">
                <span className="wf-eyebrow" style={{ margin: 0 }}>{p.category} · HS {p.hsCode}</span>
                <strong style={{ fontSize: 15 }}>{p.name}</strong>
                <span style={{ fontSize: 12, color: "var(--wf-muted)" }}>MOQ: {p.moq} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
