import Link from "next/link";
import { optionHref, type WireframeOptionId } from "../../domain/wireframe-data";
import { SCENE_IMAGES } from "../../domain/showcase-content";
import { MediaBox, SectionNote } from "../WireframePrimitives";
import { InsightsSection } from "../PremiumModules";

const CERTS = [
  { code: "APEDA", title: "APEDA Registered Exporter", desc: "Agricultural & Processed Food Products Export Development Authority compliance." },
  { code: "FSSAI", title: "FSSAI Central Export License", desc: "Food Safety and Standards Authority of India certified handling and processing." },
  { code: "ISO 22000", title: "ISO 22000 Food Safety", desc: "Internationally recognized food safety management across processing partners." },
  { code: "HACCP", title: "HACCP Critical Controls", desc: "Hazard analysis and preventive controls from cleaning through export packing." },
  { code: "SPICES BOARD", title: "Spices Board of India", desc: "Authorized whole and ground spice export registration and quality standards." },
  { code: "PHYTO / COA", title: "Phytosanitary & Lab COA", desc: "Per-lot third-party testing (SGS / Eurofins / NABL labs) for destination customs." },
] as const;

export function QualityView({ option }: { option: WireframeOptionId }) {
  const isSerif = option === "editorial";

  return (
    <>
      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Page 06 (Quality & Certifications): Essential compliance proof for EU, US, Middle East, and APAC importers" />
          <p className="wf-eyebrow">Quality Assurance &amp; Compliance</p>
          <h1 className={`wf-h1 ${isSerif ? "wf-serif" : ""}`}>
            Export-Grade Testing &amp; International Certifications
          </h1>
          <p className="wf-lead">
            Every Acharyodaya shipment is backed by documented quality checks—covering moisture, foreign matter, aflatoxin, heavy metals, and destination-specific MRL (pesticide) limits.
          </p>

          <div className="wf-grid-3" style={{ marginTop: 28 }}>
            {CERTS.map((c) => (
              <div key={c.code} className="wf-card wf-card-hover">
                <div className="wf-tag" style={{ alignSelf: "flex-start" }}>{c.code}</div>
                <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>{c.title}</h2>
                <p className="wf-body" style={{ marginBottom: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wf-section-compact wf-section-alt">
        <div className="wf-container">
          <div className="wf-grid-4">
            {[
              ["142", "Parameters tested per lot"],
              ["0.18%", "Lot rejection rate"],
              ["< 10 ppb", "Aflatoxin B1 limit"],
              ["3", "Accredited lab partners"],
            ].map(([v, l]) => (
              <div key={l} className="wf-metric">
                <div className="wf-metric-val">{v}</div>
                <div className="wf-metric-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Lab Testing & Document Pack Block: Shows buyers exactly what paperwork accompanies each shipment" />
          <div className="wf-split-60-40">
            <div>
              <p className="wf-eyebrow">Standard Shipment Document Pack</p>
              <h2 className={`wf-h2 ${isSerif ? "wf-serif" : ""}`}>What Ships With Every Order</h2>
              <ul style={{ paddingLeft: 18, display: "grid", gap: 8, fontSize: 14, color: "var(--wf-ink-2)" }}>
                <li>Certificate of Analysis (COA) from NABL / SGS / Eurofins lab</li>
                <li>Phytosanitary Certificate &amp; Fumigation Certificate (ISPM-15)</li>
                <li>Certificate of Origin (Chamber of Commerce / GSP / FTA where applicable)</li>
                <li>Commercial Invoice, Packing List &amp; Bill of Lading / Air Waybill</li>
                <li>Health / Non-GMO / Allergen declarations on buyer request</li>
              </ul>
              <div className="wf-btn-row" style={{ marginTop: 20 }}>
                <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary wf-btn-sm">
                  Request Sample COA Pack →
                </Link>
                <Link href={optionHref(option, "exports")} className="wf-btn wf-btn-secondary wf-btn-sm">
                  View Export Logistics
                </Link>
              </div>
            </div>
            <MediaBox label="Scientist examining rice grains in a food-safety lab" src={SCENE_IMAGES.lab} height={420} caption="NABL partner lab · Mumbai" />
          </div>
        </div>
      </section>

      <InsightsSection option={option} alt />
    </>
  );
}
