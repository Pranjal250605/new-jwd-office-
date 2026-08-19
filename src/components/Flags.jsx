/**
 * Country flags for the Japan ↔ Dubai comparisons (2026.08.19 revision points).
 *
 * Drawn inline rather than shipped as images or emoji: emoji flags fall back to
 * bare "JP"/"AE" letters on Windows, and these sit next to tax figures where a
 * missing flag would read as a mistake. Two tiny SVGs cost nothing and stay
 * sharp at any size. Decorative only — the rate text beside them already names
 * the country, so screen readers should skip them.
 */

export function FlagJP({ size = 15 }) {
  return (
    <svg className="flag" viewBox="0 0 30 20" width={size * 1.5} height={size}
      aria-hidden="true" focusable="false">
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="6" fill="#bc002d" />
    </svg>
  );
}

export function FlagAE({ size = 15 }) {
  return (
    <svg className="flag" viewBox="0 0 30 20" width={size * 1.5} height={size}
      aria-hidden="true" focusable="false">
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.667" fill="#00732f" />
      <rect y="13.333" width="30" height="6.667" fill="#000" />
      <rect width="7.5" height="20" fill="#ce1126" />
    </svg>
  );
}
