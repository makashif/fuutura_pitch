"use client";

import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   Device mockups.

   Three frames, because Fuutura ships across three surfaces:
   a phone (VPN, Chat), a desktop web app (ID, Wallet, Trade),
   and a browser extension popup.

   Every frame is driven by the source screenshot's own aspect
   ratio and uses object-fit: contain, so no product screen is
   ever cropped — headings and titles inside the screenshots stay
   fully visible.
───────────────────────────────────────────────────────────── */

/* Intrinsic dimensions of the supplied screen sets. */
export const SCREEN_AR = {
  phone: 393 / 852,      /* 0.4613 */
  desktop: 1440 / 796,   /* 1.809  — ID, Wallet   */
  terminal: 1440 / 964,  /* 1.494  — Trade        */
  extension: 600 / 852,  /* 0.7042                */
} as const;

/* ═══════════════════════════════════════════════════════
   PhoneMockup
═══════════════════════════════════════════════════════ */

export function PhoneMockup({
  src,
  alt = "Fuutura app screen",
  height,
  plinth = true,
}: {
  src: string;
  alt?: string;
  /** Any CSS length. Defaults to the global --device-h. */
  height?: string;
  plinth?: boolean;
}) {
  const device = (
    <div
      className="device-phone"
      style={
        height
          ? ({ ["--device-h" as string]: height } as React.CSSProperties)
          : undefined
      }
    >
      <span className="device-btn device-vol-up" aria-hidden="true" />
      <span className="device-btn device-vol-down" aria-hidden="true" />
      <span className="device-btn device-power" aria-hidden="true" />

      <div className="device-phone-body">
        <div className="device-phone-screen">
          <Image src={src} alt={alt} width={393} height={852} unoptimized />
        </div>
      </div>
    </div>
  );

  return plinth ? <div className="device-plinth">{device}</div> : device;
}

/* ═══════════════════════════════════════════════════════
   BrowserMockup — desktop web app in a light window frame.
   Width-driven: the image sets its own height, so the frame
   always matches the screenshot exactly.
═══════════════════════════════════════════════════════ */

export function BrowserMockup({
  src,
  alt = "Fuutura web application",
  /** Address shown in the URL pill. */
  url = "app.fuutura.com",
  /** Intrinsic pixel size of the source screenshot. */
  w = 1440,
  h = 796,
  /** Any CSS length constraining the frame width. */
  maxWidth = "100%",
}: {
  src: string;
  alt?: string;
  url?: string;
  w?: number;
  h?: number;
  maxWidth?: string;
}) {
  return (
    <div className="device-browser" style={{ maxWidth }}>
      {/* Window chrome — muted to sit inside the cream palette */}
      <div className="device-browser-bar">
        <span className="device-dot" style={{ background: "#C9705A" }} />
        <span className="device-dot" style={{ background: "#D2A85C" }} />
        <span className="device-dot" style={{ background: "#8CA378" }} />
        <span className="device-browser-url">{url}</span>
      </div>

      {/* Screen */}
      <div className="device-browser-screen">
        <Image src={src} alt={alt} width={w} height={h} unoptimized />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   ExtensionMockup — the browser-extension popup, shown
   hanging from a toolbar strip so the context reads.
═══════════════════════════════════════════════════════ */

export function ExtensionMockup({
  src,
  alt = "Fuutura browser extension",
  height,
}: {
  src: string;
  alt?: string;
  height?: string;
}) {
  return (
    <div
      className="device-ext"
      style={
        height
          ? ({ ["--ext-h" as string]: height } as React.CSSProperties)
          : undefined
      }
    >
      {/* Toolbar strip — signals "this lives in the browser" */}
      <div className="device-ext-bar">
        <span className="device-dot" style={{ background: "#D8D8D2" }} />
        <span className="device-dot" style={{ background: "#D8D8D2" }} />
        <span className="device-ext-omni" />
        <Image
          src="/brand/svg/extension-ink.svg"
          alt=""
          width={301}
          height={337}
          unoptimized
          className="device-ext-icon"
        />
      </div>

      {/* Popup panel */}
      <div className="device-ext-panel">
        <Image src={src} alt={alt} width={600} height={852} unoptimized />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   ScreenSet — Multi-screen gallery component
═══════════════════════════════════════════════════════ */

export function ScreenSet({
  type,
  screens,
  height,
}: {
  type: "desktop" | "phone" | "extension" | "mixed";
  screens: { src: string; alt?: string; device?: "desktop" | "phone" | "extension" }[];
  height?: string;
}) {
  if (type === "mixed") {
    return (
      <div className="row jc-c ai-c" style={{ gap: "clamp(1rem, 2vw, 2rem)", width: "100%" }}>
        {screens.map((s, i) => {
          if (s.device === "phone") {
            return (
              <div key={i} style={{ flex: "0 1 28%", minWidth: 0 }}>
                 <PhoneMockup src={s.src} alt={s.alt} height={height} />
              </div>
            );
          }
          if (s.device === "desktop" || !s.device) {
            return (
              <div key={i} style={{ flex: "1 1 65%", minWidth: 0 }}>
                 <BrowserMockup src={s.src} alt={s.alt} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
  if (type === "desktop") {
    return (
      <div className="row jc-c ai-s" style={{ gap: "clamp(1rem, 2vw, 2rem)", width: "100%" }}>
        {screens.map((s, i) => (
          <div key={i} style={{ flex: "1 1 0", minWidth: 0 }}>
             <BrowserMockup src={s.src} alt={s.alt} />
          </div>
        ))}
      </div>
    );
  }
  if (type === "phone") {
    return (
      <div className="row jc-c ai-c" style={{ gap: "clamp(1rem, 3vw, 4rem)", width: "100%" }}>
        {screens.map((s, i) => (
          <PhoneMockup key={i} src={s.src} alt={s.alt} height={height} />
        ))}
      </div>
    );
  }
  if (type === "extension") {
    /* The toolbar strip is 118% of its panel and right-aligned, so each
       frame overhangs 18% to the left. The gap has to clear that overhang
       or the strips ride over the neighbouring panel. */
    return (
      <div className="row jc-c ai-c" style={{ gap: "clamp(2.75rem, 5.5vw, 5rem)", width: "100%" }}>
        {screens.map((s, i) => (
          <ExtensionMockup key={i} src={s.src} alt={s.alt} height={height} />
        ))}
      </div>
    );
  }
  return null;
}
