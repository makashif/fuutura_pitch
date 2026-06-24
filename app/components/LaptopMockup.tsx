"use client";

import Image from "next/image";

interface LaptopMockupProps {
  src?: string;
  alt?: string;
}

/**
 * CSS-only MacBook Pro style device frame.
 */
export default function LaptopMockup({ src, alt = "App screenshot" }: LaptopMockupProps) {
  return (
    <div className="laptop-outer">
      <div className="laptop-lid">
        <div className="laptop-notch" aria-hidden="true" />
        <div className="laptop-screen">
          {src ? (
            <Image src={src} alt={alt} fill unoptimized />
          ) : (
            <div style={{
              width: "100%", height: "100%", background: "#111",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: "0.75rem", padding: "1.5rem",
            }}>
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: "0.48rem", letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.2)", textAlign: "center",
              }}>
                DESKTOP PREVIEW
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="laptop-base">
        <div className="laptop-base-indent" aria-hidden="true" />
      </div>
    </div>
  );
}
