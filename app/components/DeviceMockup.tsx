"use client";

import Image from "next/image";
interface DeviceMockupProps {
  src?: string;
  alt?: string;
}

/**
 * CSS-only iPhone 15 Pro style device frame.
 * Renders a realistic dark titanium frame with Dynamic Island.
 * Pass `src` to display a screenshot inside the screen.
 */
export default function DeviceMockup({ src, alt = "App screenshot" }: DeviceMockupProps) {
  return (
    <div className="device-outer">
      {/* Left side buttons */}
      <div className="device-btn device-vol-up" aria-hidden="true" />
      <div className="device-btn device-vol-down" aria-hidden="true" />
      {/* Right side button */}
      <div className="device-btn device-power" aria-hidden="true" />

      {/* Main body */}
      <div className="device-body">
        {/* Dynamic Island */}
        {/* <div className="device-island" aria-hidden="true" /> */}

        {/* Screen */}
        <div className="device-screen">
          {src ? (
            <Image src={src} alt={alt} fill unoptimized />
          ) : (
            /* Placeholder when no image provided */
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
                width: "40px", height: "40px", borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                </svg>
              </div>
              <span style={{
                fontFamily: "var(--f-mono)",
                fontSize: "0.48rem",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.2)",
                textAlign: "center",
              }}>
                APP PREVIEW
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
