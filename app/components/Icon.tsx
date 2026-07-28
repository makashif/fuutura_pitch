"use client";

/* ─────────────────────────────────────────────────────────────
   Icon — the deck's glyph set.

   Authored in-house rather than pulled from a library so the
   weight matches the Product Overview reference: heavy, solid
   silhouettes that hold up inside a 2rem circular badge. A few
   marks (fingerprint, link, chain) read better as thick strokes
   than as fills, so those are stroked at a weight that sits
   alongside the solids without looking lighter.

   Rendered as inline SVG, which html2canvas draws reliably — an
   <img src="*.svg"> would not inherit currentColor.
───────────────────────────────────────────────────────────── */

export type IconName =
  | "exchange"
  | "chart"
  | "fingerprint"
  | "wallet"
  | "link"
  | "scales"
  | "lock"
  | "cubes"
  | "cap"
  | "handshake"
  | "globe"
  | "coins"
  | "layers"
  | "userCheck"
  | "sitemap"
  | "shield"
  | "card"
  | "send"
  | "chat"
  | "vpn"
  | "briefcase"
  | "puzzle"
  | "spark"
  | "doc"
  | "users"
  | "arrowRight"
  | "arrowSwap";

const S = 2.1; /* stroke weight for the stroked marks */

const PATHS: Record<IconName, React.ReactNode> = {
  /* ─── Solid marks ─── */
  chart: (
    <>
      <path d="M3 3h2v16a2 2 0 0 0 2 2h14v2H7a4 4 0 0 1-4-4V3Z" />
      <path d="M8 15.5 12.5 11l3 3L21 8.5V15a1 1 0 0 1-1 1H9a1 1 0 0 1-1-.5Z" />
      <path d="M17.5 7.5H21V11l-3.5-3.5Z" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a3 3 0 0 1 3-3h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h13a2 2 0 0 1 2 2v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Z" />
      <circle cx="17" cy="14" r="1.6" fill="var(--paper-2)" />
    </>
  ),
  scales: (
    <>
      <path d="M11 3h2v2.2l6.3 1.7-.5 1.9-5.8-1.6V20h5v2H6v-2h5V7.2L5.2 8.8l-.5-1.9L11 5.2V3Z" />
      <path d="M4.6 10 1.7 16.2h5.8L4.6 10Zm14.8 0L16.5 16.2h5.8L19.4 10Z" />
    </>
  ),
  lock: (
    <>
      <path d="M7 10V8a5 5 0 0 1 10 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1Zm2 0h6V8a3 3 0 0 0-6 0v2Z" />
    </>
  ),
  cubes: (
    <>
      <path d="M12 2.2 16.4 4.7 12 7.2 7.6 4.7 12 2.2Z" />
      <path d="M6.6 6.4 11 8.9v5L6.6 11.4v-5Zm10.8 0v5L13 13.9v-5l4.4-2.5Z" />
      <path d="M6 13.6 10.4 16.1 6 18.6 1.6 16.1 6 13.6Zm12 0 4.4 2.5L18 18.6l-4.4-2.5 4.4-2.5Z" />
      <path d="M.8 17.8 5.2 20.3v3.1L.8 20.9v-3.1Zm10.4 0v3.1L6.8 23.4v-3.1l4.4-2.5Zm1.6 0 4.4 2.5v3.1l-4.4-2.5v-3.1Zm10.4 0v3.1l-4.4 2.5v-3.1l4.4-2.5Z" />
    </>
  ),
  cap: (
    <>
      <path d="M12 3 23 8l-11 5L1 8l11-5Z" />
      <path d="M5 11.3V16c0 1.9 3.1 3.4 7 3.4s7-1.5 7-3.4v-4.7l-7 3.2-7-3.2Z" />
      <path d="M20.6 10.2h1.6v6.4h-1.6z" />
    </>
  ),
  handshake: (
    <>
      <path d="M1.5 9.6 6 6.4l4.4 3.1-2 2.1a1.6 1.6 0 0 0 .1 2.3l2.6 2.4a1.6 1.6 0 0 0 2.3-.1l.5-.6 3.6 3.2-2.7 2.2-9.7-6.9-3.1-2.2V9.6Z" />
      <path d="M13.6 6.4 18 9.5l4.5-3.1v4.9l-3.1 2.2-2.3-2 1.9-2-4.4-3.1Z" />
      <path d="M8.4 4.4h7.2l2.2 1.6-4.4 3.1-1.4-1.3H9.6L8.4 4.4Z" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="6.4" rx="7.4" ry="3.2" />
      <path d="M4.6 9.4c1.2 1.5 4 2.5 7.4 2.5s6.2-1 7.4-2.5v3.1c0 1.8-3.3 3.2-7.4 3.2s-7.4-1.4-7.4-3.2V9.4Z" />
      <path d="M4.6 15c1.2 1.5 4 2.5 7.4 2.5s6.2-1 7.4-2.5v2.8c0 1.8-3.3 3.2-7.4 3.2s-7.4-1.4-7.4-3.2V15Z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2.4 22.4 7 12 11.6 1.6 7 12 2.4Z" />
      <path d="M3.9 11.1 12 14.7l8.1-3.6 2.3 1L12 16.9 1.6 12.1l2.3-1Z" />
      <path d="M3.9 15.7 12 19.3l8.1-3.6 2.3 1L12 21.6 1.6 16.7l2.3-1Z" />
    </>
  ),
  userCheck: (
    <>
      <circle cx="9.5" cy="7" r="4.2" />
      <path d="M2 20.4c0-3.6 3.4-6.2 7.5-6.2 1.6 0 3.1.4 4.3 1.1l-1 1a3 3 0 0 0 0 4.2l.8.8H2.6a.6.6 0 0 1-.6-.6v-.3Z" />
      <path d="m16.4 20.6-2.6-2.6 1.5-1.5 1.1 1.1 3.7-3.7 1.5 1.5-5.2 5.2Z" />
    </>
  ),
  sitemap: (
    <>
      <rect x="9" y="2.4" width="6" height="5" rx="1.2" />
      <rect x="1.6" y="16.6" width="6" height="5" rx="1.2" />
      <rect x="16.4" y="16.6" width="6" height="5" rx="1.2" />
      <path d="M11.1 7.4h1.8v3.4h5.7v5.8h-1.8v-4H6.2v4H4.4v-5.8h5.7V7.4h1Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 1.8 21 5v6.4c0 5-3.7 9.3-9 10.8-5.3-1.5-9-5.8-9-10.8V5l9-3.2Z" />
      <path d="m10.9 15.4-3-3 1.6-1.6 1.4 1.4 3.6-3.6 1.6 1.6-5.2 5.2Z" fill="var(--paper-2)" />
    </>
  ),
  card: (
    <>
      <path d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2V7Z" />
      <path d="M2 10.5h20V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6.5Zm3 4.2v2h4v-2H5Z" />
    </>
  ),
  send: (
    <>
      <path d="M2.4 11 21.6 3.2 13.8 22.4l-2.9-7.2-1.7 1.7v-4l-6.8-1.9Z" />
      <path d="m11 13.4 7.2-7.2-9.4 5 2.2 2.2Z" fill="var(--paper-2)" />
    </>
  ),
  chat: (
    <>
      <path d="M2 6a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8.6L4 16.6V13a3 3 0 0 1-2-2.8V6Z" />
      <path d="M18.6 8.4H19a3 3 0 0 1 3 3v3.8a3 3 0 0 1-2 2.8v3.6l-4.6-3.6H11a3 3 0 0 1-2.6-1.6h6a4.2 4.2 0 0 0 4.2-4.2V8.4Z" />
    </>
  ),
  briefcase: (
    <>
      <path d="M9 2.6h6a2 2 0 0 1 2 2v1.8h-2V4.6H9v1.8H7V4.6a2 2 0 0 1 2-2Z" />
      <path d="M2 8.4h20a1 1 0 0 1 1 1v3.2H14v1.8h-4v-1.8H1V9.4a1 1 0 0 1 1-1Z" />
      <path d="M1 14.4h9v1.8h4v-1.8h9v4.6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.6Z" />
    </>
  ),
  puzzle: (
    <>
      <path d="M10.4 2.2a2.6 2.6 0 0 1 2.6 2.6c0 .5-.1.9-.3 1.3h3.5a1.4 1.4 0 0 1 1.4 1.4v3.2c.4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 0 5.2c-.5 0-.9-.1-1.3-.3v3.2a1.4 1.4 0 0 1-1.4 1.4h-3.5c.2.4.3.8.3 1.3a2.6 2.6 0 0 1-5.2 0c0-.5.1-.9.3-1.3H4.6a1.4 1.4 0 0 1-1.4-1.4v-3.4h1.3a2.6 2.6 0 0 0 0-5.2H3.2V7.5a1.4 1.4 0 0 1 1.4-1.4h3.5a3 3 0 0 1-.3-1.3 2.6 2.6 0 0 1 2.6-2.6Z" />
    </>
  ),
  spark: (
    <>
      <path d="M13.4 1.6 4.6 13.4h5.2l-1.2 9 8.8-11.8h-5.2l1.2-9Z" />
    </>
  ),
  doc: (
    <>
      <path d="M5 3.4a2 2 0 0 1 2-2h6.6L20 7.8V20.6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3.4Zm3.4 7v1.8h7.2v-1.8H8.4Zm0 4v1.8h7.2v-1.8H8.4Z" />
      <path d="M14.2 2.2 19.4 7.4h-5.2V2.2Z" />
    </>
  ),
  users: (
    <>
      <circle cx="8.6" cy="7.2" r="3.8" />
      <circle cx="17.4" cy="8.4" r="3" />
      <path d="M1.6 20.2c0-3.4 3.1-5.8 7-5.8s7 2.4 7 5.8v.8a.6.6 0 0 1-.6.6H2.2a.6.6 0 0 1-.6-.6v-.8Z" />
      <path d="M17.2 13.4c2.8 0 5.2 1.8 5.2 4.2v.8a.6.6 0 0 1-.6.6h-4.4c.2-.6.3-1.2.3-1.9 0-1.4-.5-2.7-1.4-3.7h.9Z" />
    </>
  ),

  /* ─── Stroked marks ─── */
  fingerprint: (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round">
      <path d="M12 4.2a7.8 7.8 0 0 0-7.8 7.8v2.2" />
      <path d="M19.8 14.2V12A7.8 7.8 0 0 0 12 4.2" />
      <path d="M7.6 15.6V12a4.4 4.4 0 0 1 8.8 0v4.4" />
      <path d="M12 10.6A1.4 1.4 0 0 0 10.6 12v6" />
      <path d="M13.4 12v6.4" />
      <path d="M5.4 17.4c.5 1 .9 1.9.9 2.6" />
      <path d="M18.6 17.4a9 9 0 0 1-1 2.6" />
    </g>
  ),
  link: (
    <g fill="none" stroke="currentColor" strokeWidth={S + 0.3} strokeLinecap="round">
      <path d="M9.4 14.6 14.6 9.4" />
      <path d="M11.6 6.4l1.6-1.6a4.2 4.2 0 0 1 6 6l-1.6 1.6" />
      <path d="M12.4 17.6l-1.6 1.6a4.2 4.2 0 0 1-6-6l1.6-1.6" />
    </g>
  ),
  globe: (
    <>
      <path d="M12 1.6a10.4 10.4 0 1 0 0 20.8 10.4 10.4 0 0 0 0-20.8Zm0 2a8.3 8.3 0 0 1 3 .6c-.6.8-1.3 1.4-2.1 1.7-.7.3-1 .8-.9 1.6.1.6-.2 1-.8 1.2-1 .3-2 .5-3 .5-.9 0-1.4.4-1.6 1.2-.2.9-.8 1.3-1.7 1.2-.5 0-.9.2-1.2.5A8.4 8.4 0 0 1 12 3.6Zm-8.2 9.6c.5.5 1.1.8 1.8 1 .8.2 1.3.7 1.5 1.5.3 1.3 1 2.3 2.1 3 .6.4.9 1 .8 1.7v.9a8.4 8.4 0 0 1-6.2-8.1Zm8.6 8.1c.2-.9.6-1.7 1.3-2.3.9-.9 1.6-1.9 2-3.1.3-.9.1-1.5-.7-2-1-.6-2.1-.9-3.3-.9-1 0-1.6-.5-1.7-1.4 0-.5.2-.8.7-1 1-.2 2-.5 2.9-1 .8-.4 1.5-.2 2.1.4.7.7 1.5 1 2.5 1 .3 0 .5.1.7.2a8.4 8.4 0 0 1-7.2 10.1Z" />
    </>
  ),
  vpn: (
    <>
      <path d="M12 1.8 21 5v6.4c0 5-3.7 9.3-9 10.8-5.3-1.5-9-5.8-9-10.8V5l9-3.2Z" />
      <circle cx="12" cy="10.4" r="2.4" fill="var(--paper-2)" />
      <path d="M11 12.2h2v4.6h-2z" fill="var(--paper-2)" />
    </>
  ),
  exchange: (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h13" />
      <path d="m14 6 3 3-3 3" />
      <path d="M20 15H7" />
      <path d="m10 12-3 3 3 3" />
    </g>
  ),
  arrowRight: (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h17" />
      <path d="m14 6 6 6-6 6" />
    </g>
  ),
  arrowSwap: (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h17" />
      <path d="m14 5 6 4-6 4" />
      <path d="M21 15H4" />
      <path d="m10 11-6 4 6 4" />
    </g>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
}

export default function Icon({ name, className, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {PATHS[name]}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Badge — a glyph in a ringed circle, the reference's device for
   marking a product or a list item.
───────────────────────────────────────────────────────────── */

export type BadgeTone = "paper" | "sage" | "peri" | "sand" | "blush" | "dark" | "hollow";

export function Badge({
  icon,
  tone = "paper",
  size = "md",
}: {
  icon: IconName;
  tone?: BadgeTone;
  size?: "md" | "lg";
}) {
  const toneClass = tone === "paper" ? "" : `badge--${tone}`;
  const sizeClass = size === "lg" ? "badge--lg" : "";
  return (
    <span className={`badge ${toneClass} ${sizeClass}`.trim()}>
      <Icon name={icon} />
    </span>
  );
}

/** A bare glyph, for the head of a tinted card. */
export function Glyph({ icon }: { icon: IconName }) {
  return (
    <span className="glyph">
      <Icon name={icon} />
    </span>
  );
}

/** The rust arrow used between grouped cards in a flow. */
export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      <Icon name="arrowRight" />
    </span>
  );
}
