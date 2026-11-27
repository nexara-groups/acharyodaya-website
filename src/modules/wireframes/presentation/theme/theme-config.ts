export type ThemeMode = "light" | "dark" | "system";

export interface ThemePrefs {
  mode: ThemeMode;
  /** Hex accent chosen by the viewer; null keeps each direction's brand default. */
  accent: string | null;
  /** Readable text colour on top of the accent. */
  ink: string | null;
}

export const THEME_STORAGE_KEY = "acy-theme-v1";

export const DEFAULT_PREFS: ThemePrefs = { mode: "light", accent: null, ink: null };

export const ACCENT_PRESETS: readonly { name: string; hex: string | null; ink: string | null }[] = [
  { name: "Brand", hex: null, ink: null },
  { name: "Saffron", hex: "#EC4A1E", ink: "#ffffff" },
  { name: "Marigold", hex: "#F9B233", ink: "#062C1A" },
  { name: "Leaf", hex: "#17702F", ink: "#ffffff" },
  { name: "Lime", hex: "#8CC63F", ink: "#062C1A" },
  { name: "Kumkum", hex: "#B3261E", ink: "#ffffff" },
  { name: "Indigo", hex: "#3346A8", ink: "#ffffff" },
  { name: "Peacock", hex: "#0F766E", ink: "#ffffff" },
] as const;

/** Picks dark or light text for an arbitrary hex accent (WCAG relative luminance). */
export function inkFor(hex: string): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return "#ffffff";
  const n = parseInt(m[1]!, 16);
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const L = 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
  return L > 0.36 ? "#062C1A" : "#ffffff";
}

/**
 * Runs in <head> before first paint so the stored theme applies without a flash.
 * Kept dependency-free and tiny; mirrors applyPrefs() in ThemeDock.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=JSON.parse(localStorage.getItem('${THEME_STORAGE_KEY}')||'{}');var m=s.mode||'light';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.setAttribute('data-theme',d?'dark':'light');if(s.accent){r.style.setProperty('--user-accent',s.accent);r.style.setProperty('--user-accent-ink',s.ink||'#fff');}}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
