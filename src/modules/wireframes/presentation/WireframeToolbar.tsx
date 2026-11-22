"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  WIREFRAME_OPTIONS,
  WIREFRAME_PAGES,
  optionHref,
  type WireframeOptionId,
} from "../domain/wireframe-data";

interface WireframeToolbarProps {
  currentOption: WireframeOptionId;
}

export function WireframeToolbar({ currentOption }: WireframeToolbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotes, setShowNotes] = useState(false);
  const [grayscaleMode, setGrayscaleMode] = useState(false);

  useEffect(() => {
    if (showNotes) {
      document.body.classList.remove("wf-hide-notes");
    } else {
      document.body.classList.add("wf-hide-notes");
    }
    return () => {
      document.body.classList.remove("wf-hide-notes");
    };
  }, [showNotes]);

  useEffect(() => {
    if (grayscaleMode) {
      document.body.classList.add("wf-grayscale-mode");
    } else {
      document.body.classList.remove("wf-grayscale-mode");
    }
    return () => {
      document.body.classList.remove("wf-grayscale-mode");
    };
  }, [grayscaleMode]);

  const prefix = `/wireframes/${currentOption}`;
  const currentSegment = pathname.startsWith(prefix)
    ? pathname.slice(prefix.length).replace(/^\//, "")
    : "";

  const matchedPageSegment =
    currentSegment.startsWith("products/") && currentSegment !== "products"
      ? "products/basmati-rice-1121"
      : currentSegment;

  return (
    <aside className="wf-proto-bar" aria-label="Prototype controls">
      <div className="wf-proto-bar-inner">
        <div className="wf-proto-group">
          <Link href="/" className="wf-proto-pill">
            ← All 3 Directions
          </Link>
          <span style={{ color: "rgba(244,239,228,0.3)", fontSize: 12 }}>|</span>
          {WIREFRAME_OPTIONS.map((opt) => (
            <Link
              key={opt.id}
              href={optionHref(opt.id, currentSegment)}
              className={`wf-proto-pill ${opt.id === currentOption ? "active" : ""}`}
            >
              {opt.code}: {opt.name}
            </Link>
          ))}
        </div>

        <div className="wf-proto-group">
          <label htmlFor="wf-page-jump" style={{ fontSize: 11, color: "#c9d8cd", textTransform: "uppercase" }}>
            Page:
          </label>
          <select
            id="wf-page-jump"
            className="wf-proto-select"
            value={matchedPageSegment}
            onChange={(e) => {
              router.push(optionHref(currentOption, e.target.value));
            }}
          >
            {WIREFRAME_PAGES.map((page) => (
              <option key={page.id} value={page.segment}>
                {page.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            className={`wf-proto-pill ${!grayscaleMode ? "active" : ""}`}
            onClick={() => setGrayscaleMode((prev) => !prev)}
          >
            {grayscaleMode ? "Mode: Grayscale" : "Mode: Brand Color"}
          </button>

          <button
            type="button"
            className={`wf-proto-pill ${showNotes ? "active" : ""}`}
            onClick={() => setShowNotes((prev) => !prev)}
          >
            UX Notes: {showNotes ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </aside>
  );
}
