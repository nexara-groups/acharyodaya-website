import Link from "next/link";
import { optionHref, type WireframeOptionId } from "../../domain/wireframe-data";
import { MediaBox, SectionNote } from "../WireframePrimitives";

export function SourcingView({ option }: { option: WireframeOptionId }) {
  const isSerif = option === "editorial";

  return (
    <>
      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Page 05 (Sourcing & Traceability): Proves authentic Indian origin, farmer partnerships, and batch tracking" />
          <div className="wf-split-60-40">
            <div>
              <p className="wf-eyebrow">Sourcing &amp; Traceability</p>
              <h1 className={`wf-h1 ${isSerif ? "wf-serif" : ""}`}>
                Direct From India&rsquo;s Premier Agricultural Belts
              </h1>
              <p className="wf-lead">
                We source at origin—working with vetted farmer clusters, regional mandis, and certified processing units so every export lot can be traced back to its harvest belt.
              </p>
            </div>
            <MediaBox label="[INDIA SOURCING MAP · Punjab, Maharashtra, Tamil Nadu, Kerala Belts]" height={260} />
          </div>
        </div>
      </section>

      <section className="wf-section wf-section-alt">
        <div className="wf-container">
          <SectionNote text="5-Stage Farm-to-Port Pipeline: Clear operational accountability for international buyers" />
          <p className="wf-eyebrow">Traceability Workflow</p>
          <h2 className={`wf-h2 ${isSerif ? "wf-serif" : ""}`} style={{ marginBottom: 24 }}>
            Five Checkpoints Before Any Container Leaves India
          </h2>
          <div className="wf-grid-4">
            {[
              { n: "01", t: "Harvest Selection", d: "Origin inspection for maturity, aroma, and moisture before procurement." },
              { n: "02", t: "Batch Tagging", d: "Every lot receives a batch ID linked to region, date, and supplier cluster." },
              { n: "03", t: "Cleaning & Sorting", d: "Destoning, optical color sorting, and sieve grading in FSSAI facilities." },
              { n: "04", t: "Pre-Shipment Audit", d: "Moisture, microbial, and pesticide verification prior to container stuffing." },
            ].map((s) => (
              <div key={s.n} className="wf-card">
                <span className="wf-step-num">{s.n}</span>
                <h3 className="wf-h3">{s.t}</h3>
                <p className="wf-body" style={{ marginBottom: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Regional Harvest Calendar Table: Helps B2B procurement teams plan forward contracts" />
          <p className="wf-eyebrow">Seasonal Availability</p>
          <h2 className={`wf-h2 ${isSerif ? "wf-serif" : ""}`} style={{ marginBottom: 20 }}>
            Key Sourcing Regions &amp; Peak Harvest Windows
          </h2>
          <div className="wf-table-wrap" style={{ marginBottom: 24 }}>
            <table className="wf-table">
              <thead>
                <tr>
                  <th>Commodity</th>
                  <th>Primary Indian Belt</th>
                  <th>Peak Harvest</th>
                  <th>Supply Window</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1121 Basmati Rice</strong></td>
                  <td>Punjab &amp; Haryana</td>
                  <td>Oct – Nov</td>
                  <td>Year-round (aged stock)</td>
                </tr>
                <tr>
                  <td><strong>Turmeric Fingers</strong></td>
                  <td>Salem &amp; Erode, Tamil Nadu</td>
                  <td>Feb – Apr</td>
                  <td>Year-round</td>
                </tr>
                <tr>
                  <td><strong>Green Cardamom</strong></td>
                  <td>Idukki, Kerala</td>
                  <td>Aug – Jan</td>
                  <td>Year-round (cold stored)</td>
                </tr>
                <tr>
                  <td><strong>Malabar Black Pepper</strong></td>
                  <td>Kerala &amp; Coorg, Karnataka</td>
                  <td>Dec – Mar</td>
                  <td>Year-round</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link href={optionHref(option, "quality")} className="wf-btn wf-btn-secondary">
            Next: Quality &amp; Certifications →
          </Link>
        </div>
      </section>
    </>
  );
}
