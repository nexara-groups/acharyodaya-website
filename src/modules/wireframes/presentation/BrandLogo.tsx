import { assetPath } from "../domain/wireframe-data";

export const BRAND_TAGLINE = "The Rise of Excellence";

/**
 * Approved Acharyodaya wordmark (vector, no-tagline master) composed with the
 * "THE RISE OF EXCELLENCE" tagline line — dot · rule · text · rule · dot.
 *
 * surface="auto"    → standard art in light mode, reverse art in dark mode
 * surface="reverse" → always reverse (for permanently dark bands such as the footer)
 */
export function BrandLogo({
  height = 44,
  surface = "auto",
  tagline = true,
  className = "",
}: {
  height?: number;
  surface?: "auto" | "reverse";
  tagline?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`acy-logo acy-logo-${surface} ${className}`}
      style={{ ["--logo-h" as string]: `${height}px` }}
    >
      <span className="acy-logo-mark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="acy-logo-std"
          src={assetPath("/brand/acharyodaya-logo-no-tagline.svg")}
          alt={tagline ? `Acharyodaya — ${BRAND_TAGLINE}` : "Acharyodaya"}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="acy-logo-rev"
          src={assetPath("/brand/acharyodaya-logo-reverse-no-tagline.svg")}
          alt=""
          aria-hidden="true"
        />
      </span>
      {tagline && (
        <span className="acy-logo-tag" aria-hidden="true">
          <span className="acy-logo-rule" />
          <span>{BRAND_TAGLINE}</span>
          <span className="acy-logo-rule" />
        </span>
      )}
    </span>
  );
}
