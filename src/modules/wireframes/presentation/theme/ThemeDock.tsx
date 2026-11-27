"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ACCENT_PRESETS,
  DEFAULT_PREFS,
  THEME_STORAGE_KEY,
  inkFor,
  type ThemeMode,
  type ThemePrefs,
} from "./theme-config";

function readPrefs(): ThemePrefs {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    return raw ? { ...DEFAULT_PREFS, ...(JSON.parse(raw) as Partial<ThemePrefs>) } : DEFAULT_PREFS;
  } catch {
    return DEFAULT_PREFS;
  }
}

function resolveDark(mode: ThemeMode): boolean {
  return mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

function applyPrefs(prefs: ThemePrefs, animate: boolean) {
  const root = document.documentElement;
  if (animate) {
    root.classList.add("wf-theme-anim");
    window.setTimeout(() => root.classList.remove("wf-theme-anim"), 450);
  }
  root.setAttribute("data-theme", resolveDark(prefs.mode) ? "dark" : "light");
  if (prefs.accent) {
    root.style.setProperty("--user-accent", prefs.accent);
    root.style.setProperty("--user-accent-ink", prefs.ink ?? inkFor(prefs.accent));
  } else {
    root.style.removeProperty("--user-accent");
    root.style.removeProperty("--user-accent-ink");
  }
}

const MODES: { id: ThemeMode; label: string }[] = [
  { id: "light", label: "☀ Light" },
  { id: "dark", label: "☾ Dark" },
  { id: "system", label: "◐ Auto" },
];

export function ThemeDock() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<ThemePrefs>(DEFAULT_PREFS);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPrefs(readPrefs());
  }, []);

  // Follow OS changes while in Auto mode.
  useEffect(() => {
    if (prefs.mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyPrefs(prefs, true);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [prefs]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const update = useCallback((next: Partial<ThemePrefs>) => {
    setPrefs((prev) => {
      const merged = { ...prev, ...next };
      try {
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(merged));
      } catch {
        /* storage unavailable — still apply for this session */
      }
      applyPrefs(merged, true);
      return merged;
    });
  }, []);

  const isPreset = ACCENT_PRESETS.some((p) => p.hex?.toLowerCase() === prefs.accent?.toLowerCase());

  return (
    <div className="acy-dock" ref={ref}>
      {open && (
        <div className="acy-dock-panel" role="dialog" aria-label="Theme and colour">
          <p className="acy-dock-title">Appearance</p>
          <div className="acy-seg" role="group" aria-label="Colour mode">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                aria-pressed={prefs.mode === m.id}
                onClick={() => update({ mode: m.id })}
              >
                {m.label}
              </button>
            ))}
          </div>

          <p className="acy-dock-title">Accent colour</p>
          <div className="acy-swatches">
            {ACCENT_PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                className="acy-swatch"
                aria-pressed={(p.hex ?? null)?.toLowerCase() === (prefs.accent ?? null)?.toLowerCase()}
                onClick={() => update({ accent: p.hex, ink: p.ink })}
              >
                <i
                  style={{
                    background:
                      p.hex ??
                      "conic-gradient(#062C1A 0 25%, #17702F 0 50%, #F9B233 0 75%, #EC4A1E 0)",
                  }}
                />
                {p.name}
              </button>
            ))}
          </div>

          <label className="acy-custom">
            <span>
              Custom colour
              {prefs.accent && !isPreset ? (
                <span style={{ marginLeft: 8, fontFamily: "var(--wf-font-mono)", color: "#f9c22b" }}>
                  {prefs.accent.toUpperCase()}
                </span>
              ) : null}
            </span>
            <input
              type="color"
              value={prefs.accent ?? "#ec4a1e"}
              onChange={(e) => update({ accent: e.target.value, ink: inkFor(e.target.value) })}
              aria-label="Pick a custom accent colour"
            />
          </label>

          <button type="button" className="acy-reset" onClick={() => update(DEFAULT_PREFS)}>
            Reset to brand defaults
          </button>
        </div>
      )}

      <button
        type="button"
        className="acy-dock-fab"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="acy-dock-fab-dot" aria-hidden="true" />
        Theme
      </button>
    </div>
  );
}
