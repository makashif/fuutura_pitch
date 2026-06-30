"use client";

import Image from "next/image";

interface ExtensionMockupProps {
  src?: string;
  alt?: string;
}

/**
 * CSS-only browser extension style frame.
 * Renders a dark frame with browser window-like dots.
 * Pass `src` to display a screenshot inside the frame.
 */
export default function ExtensionMockup({ src, alt = "Extension screenshot" }: ExtensionMockupProps) {
  return (
    <div className="ext-outer">
      <div className="ext-header">
        <div className="ext-dot" />
        <div className="ext-dot" />
        <div className="ext-dot" />
      </div>
      <div className="ext-body">
        {src ? (
          <Image src={src} alt={alt} fill unoptimized />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            background: "#111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            padding: "1.5rem",
          }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                <path d="M4 10H20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
              </svg>
            </div>
            <span style={{
              fontFamily: "var(--f-mono)",
              fontSize: "0.48rem",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.2)",
              textAlign: "center",
            }}>
              EXTENSION
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
