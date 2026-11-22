import Link from "next/link";
import { optionHref, type WireframeOptionId } from "../../domain/wireframe-data";
import { MediaBox, SectionNote } from "../WireframePrimitives";

export function AboutView({ option }: { option: WireframeOptionId }) {
  const isSerif = option === "editorial";

  return (
    <>
      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text={`Page 02 (About & Heritage) — ${option.toUpperCase()} layout: brand origin, mission, and leadership governance`} />
          <div className={option === "editorial" ? "wf-container-narrow" : "wf-split-60-40"} style={option === "editorial" ? { padding: 0, textAlign: "center" } : undefined}>
            <div>
              <p className="wf-eyebrow">About Acharyodaya</p>
              <h1 className={`wf-h1 ${isSerif ? "wf-serif" : ""}`}>
                Heritage Values, Modern Export Discipline
              </h1>
              <p className="wf-lead" style={option === "editorial" ? { margin: "0 auto 24px" } : undefined}>
                &ldquo;Udaya&rdquo; signifies sunrise and new beginnings. Acharyodaya was founded to represent Indian agricultural excellence globally—combining generational farming knowledge with international standardization.
              </p>
            </div>
            {option !== "editorial" && (
              <MediaBox label="[COMPANY PHOTO · 4:3 · Acharyodaya export facility / leadership team]" height={240} />
            )}
          </div>
          {option === "editorial" && (
            <div style={{ marginTop: 28 }}>
              <MediaBox label="[EDITORIAL SPREAD · 21:9 · Indian agricultural heritage & processing]" height={280} />
            </div>
          )}
        </div>
      </section>

      <section className="wf-section wf-section-alt">
        <div className="wf-container">
          <SectionNote text="Three-Pillar Identity Block: Heritage, Growth, and Global Reach" />
          <div className="wf-grid-3">
            <div className="wf-card">
              <span className="wf-step-num">01</span>
              <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>Indian Heritage</h2>
              <p className="wf-body">
                Deep partnerships with farmers and regional cooperatives across India&rsquo;s most respected spice and grain growing belts.
              </p>
            </div>
            <div className="wf-card">
              <span className="wf-step-num">02</span>
              <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>Standardized Quality</h2>
              <p className="wf-body">
                Consistent grading, moisture control, and laboratory documentation built for repeat institutional and retail supply.
              </p>
            </div>
            <div className="wf-card">
              <span className="wf-step-num">03</span>
              <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>Global Reach</h2>
              <p className="wf-body">
                End-to-end export compliance, container consolidation, and reliable delivery to Middle East, Europe, North America, and APAC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wf-section">
        <div className="wf-container">
          <SectionNote text="Leadership & Company Facts Placeholder: Builds B2B trust before buyers commit to a first container" />
          <div className="wf-split-40-60">
            <div>
              <p className="wf-eyebrow">Leadership &amp; Governance</p>
              <h2 className={`wf-h2 ${isSerif ? "wf-serif" : ""}`}>A Dedicated Export Partner</h2>
              <p className="wf-body">
                Placeholder for founder message, company registration details (IEC, GST, APEDA RCMC), and years of agricultural trade experience.
              </p>
              <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary wf-btn-sm" style={{ marginTop: 12 }}>
                Connect With Our Team →
              </Link>
            </div>
            <div className="wf-grid-2">
              <div className="wf-card">
                <MediaBox label="[PORTRAIT · 1:1 · Founder / Managing Director]" height={160} />
                <h3 className="wf-h3">Founder / Director Name</h3>
                <p className="wf-body" style={{ marginBottom: 0 }}>Role &amp; short 2-line bio on sourcing and export trade.</p>
              </div>
              <div className="wf-card">
                <MediaBox label="[PORTRAIT · 1:1 · Head of Quality & Exports]" height={160} />
                <h3 className="wf-h3">Export Operations Lead</h3>
                <p className="wf-body" style={{ marginBottom: 0 }}>Role &amp; short 2-line bio on QA compliance and global logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
