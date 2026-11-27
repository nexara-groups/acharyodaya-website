import Link from "next/link";
import { optionHref, type WireframeOptionId } from "../../domain/wireframe-data";
import { SCENE_IMAGES } from "../../domain/showcase-content";
import { MediaBox, SectionNote } from "../WireframePrimitives";
import { LeadershipGrid, MilestoneTimeline, TestimonialsSection } from "../PremiumModules";

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
              <MediaBox label="Traditional brass measures with Indian whole spices" src={SCENE_IMAGES.heritage} height={420} caption="Heritage collection" />
            )}
          </div>
          {option === "editorial" && (
            <div style={{ marginTop: 28 }}>
              <MediaBox label="Sunrise over Indian farmland" src={SCENE_IMAGES.hero} height={460} caption="Udaya · the sunrise" />
            </div>
          )}
        </div>
      </section>

      <section className="wf-section wf-section-alt">
        <div className="wf-container">
          <SectionNote text="Three-Pillar Identity Block: Heritage, Growth, and Global Reach" />
          <div className="wf-grid-3">
            <div className="wf-card wf-card-hover">
              <MediaBox label="Indian farmer with harvested cardamom" src={SCENE_IMAGES.farmer} height={200} />
              <span className="wf-step-num">01</span>
              <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>Indian Heritage</h2>
              <p className="wf-body">
                Deep partnerships with farmers and regional cooperatives across India&rsquo;s most respected spice and grain growing belts.
              </p>
            </div>
            <div className="wf-card wf-card-hover">
              <MediaBox label="Food safety laboratory" src={SCENE_IMAGES.lab} height={200} />
              <span className="wf-step-num">02</span>
              <h2 className={`wf-h3 ${isSerif ? "wf-serif" : ""}`}>Standardized Quality</h2>
              <p className="wf-body">
                Consistent grading, moisture control, and laboratory documentation built for repeat institutional and retail supply.
              </p>
            </div>
            <div className="wf-card wf-card-hover">
              <MediaBox label="Container port at sunrise" src={SCENE_IMAGES.port} height={200} />
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
          <SectionNote text="Story & leadership: milestone timeline plus named leadership builds B2B trust" />
          <div className="wf-split-40-60" style={{ alignItems: "start", marginBottom: 64 }}>
            <div>
              <p className="wf-eyebrow">Our Journey</p>
              <h2 className={`wf-h2 ${isSerif ? "wf-serif" : ""}`}>Seventeen harvests, one promise</h2>
              <p className="wf-body">
                From a family grain business in Karnal to a registered global trading company — every step has been about
                earning the trust of farmers on one side and importers on the other.
              </p>
              <div className="wf-grid-2" style={{ gap: 12, marginTop: 20 }}>
                <div className="wf-metric"><div className="wf-metric-val">412</div><div className="wf-metric-lbl">Containers shipped</div></div>
                <div className="wf-metric"><div className="wf-metric-val">68</div><div className="wf-metric-lbl">Active buyers</div></div>
              </div>
            </div>
            <MilestoneTimeline option={option} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <div>
              <p className="wf-eyebrow">Leadership &amp; Governance</p>
              <h2 className={`wf-h2 ${isSerif ? "wf-serif" : ""}`} style={{ marginBottom: 0 }}>The people behind every lot</h2>
            </div>
            <Link href={optionHref(option, "contact")} className="wf-btn wf-btn-primary wf-btn-sm">
              Connect With Our Team →
            </Link>
          </div>
          <LeadershipGrid option={option} />
          <p className="wf-meta" style={{ marginTop: 18 }}>IEC · GSTIN · APEDA RCMC · FSSAI Central Licence · Spices Board CRES — numbers shared on request</p>
        </div>
      </section>

      <TestimonialsSection option={option} alt />
    </>
  );
}
