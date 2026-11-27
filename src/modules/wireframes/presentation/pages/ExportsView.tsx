import Link from "next/link";
import { optionHref, type WireframeOptionId } from "../../domain/wireframe-data";
import { SCENE_IMAGES } from "../../domain/showcase-content";
import { MediaBox, SectionNote } from "../WireframePrimitives";
import { MarketsMarquee, RouteMap, ShipmentBoard } from "../PremiumModules";

export function ExportsView({ option }: { option: WireframeOptionId }) {
  const isSerif = option === "editorial";

  return (
    <>
      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Page 07 (Global Reach & Exports): Trade terms, ports, container capacities, and regional market coverage" />
          <div className="wf-split-60-40" style={{ marginBottom: 48 }}>
            <div>
              <p className="wf-eyebrow">Global Reach &amp; Export Logistics</p>
              <h1 className={`wf-h1 ${isSerif ? "wf-serif" : ""}`}>
                Seamless Shipping From Major Indian Ports Worldwide
              </h1>
              <p className="wf-lead" style={{ marginBottom: 0 }}>
                Whether you require a single LCL trial pallet or recurring 40ft FCL shipments, our export desk coordinates documentation, stuffing, customs clearance, and ocean/air freight.
              </p>
            </div>
            <MediaBox label="Container port at sunrise" src={SCENE_IMAGES.port} height={360} caption="Nhava Sheva · JNPA" />
          </div>
          <RouteMap />
        </div>
      </section>

      <MarketsMarquee option={option} />

      <section className="wf-section wf-section-alt">
        <div className="wf-container">
          <SectionNote text="Trade Terms & Container Capabilities Grid: Answers standard procurement logistics questions upfront" />
          <div className="wf-grid-4">
            <div className="wf-card wf-card-hover">
              <p className="wf-eyebrow">Incoterms</p>
              <h2 className="wf-h3">FOB · CIF · CFR · DDP</h2>
              <p className="wf-body" style={{ marginBottom: 0 }}>Flexible trade terms aligned to your freight forwarder or our shipping lines.</p>
            </div>
            <div className="wf-card wf-card-hover">
              <p className="wf-eyebrow">Load Options</p>
              <h2 className="wf-h3">20ft / 40ft FCL &amp; LCL</h2>
              <p className="wf-body" style={{ marginBottom: 0 }}>Mixed-commodity container consolidation available for distributors.</p>
            </div>
            <div className="wf-card wf-card-hover">
              <p className="wf-eyebrow">Packaging</p>
              <h2 className="wf-h3">Bulk &amp; Private Label</h2>
              <p className="wf-body" style={{ marginBottom: 0 }}>25/50 kg bulk bags, vacuum cartons, or custom retail pouches.</p>
            </div>
            <div className="wf-card wf-card-hover">
              <p className="wf-eyebrow">Indian Ports</p>
              <h2 className="wf-h3">Nhava Sheva · Mundra · Cochin</h2>
              <p className="wf-body" style={{ marginBottom: 0 }}>Plus Chennai &amp; major air cargo hubs for high-value spice orders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Target Export Regions & Typical Transit Overview" />
          <h2 className={`wf-h2 ${isSerif ? "wf-serif" : ""}`} style={{ marginBottom: 20 }}>
            Markets Served &amp; Typical Ocean Transit
          </h2>
          <div className="wf-table-wrap" style={{ marginBottom: 24 }}>
            <table className="wf-table">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Key Destination Hubs</th>
                  <th>Est. Ocean Transit</th>
                  <th>Compliance Readiness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Middle East &amp; GCC</strong></td>
                  <td>Jebel Ali, Jeddah, Dammam, Sohar</td>
                  <td>5 – 10 Days</td>
                  <td>GCC / Halal / Arabic labeling ready</td>
                </tr>
                <tr>
                  <td><strong>Europe &amp; UK</strong></td>
                  <td>Rotterdam, Hamburg, Felixstowe, Antwerp</td>
                  <td>22 – 28 Days</td>
                  <td>EU MRL &amp; aflatoxin lab screening</td>
                </tr>
                <tr>
                  <td><strong>North America</strong></td>
                  <td>New York/NJ, Houston, Los Angeles, Toronto</td>
                  <td>28 – 38 Days</td>
                  <td>US FDA prior notice &amp; FSMA documentation</td>
                </tr>
                <tr>
                  <td><strong>Asia-Pacific</strong></td>
                  <td>Singapore, Port Klang, Sydney, Tokyo</td>
                  <td>10 – 20 Days</td>
                  <td>Phytosanitary &amp; quarantine clearance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginBottom: 32 }}>
            <ShipmentBoard option={option} count={6} />
          </div>
          <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary">
            Request Freight &amp; Product Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
