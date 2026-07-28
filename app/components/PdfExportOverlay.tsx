"use client";

import { Lockup } from "./ProductMark";

interface PdfExportOverlayProps {
  isExporting: boolean;
  progress: number;
  total: number;
}

/** Full-field ivory export curtain — keeps the brand intact while rendering. */
export default function PdfExportOverlay({
  isExporting,
  progress,
  total,
}: PdfExportOverlayProps) {
  if (!isExporting) return null;

  const pct = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div
      className="no-print"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "var(--paper)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.25rem",
      }}
    >
      <Lockup tone="black" width="clamp(150px, 19vw, 230px)" />

      <div style={{ width: "min(300px, 62vw)" }}>
        <div
          style={{
            height: "2px",
            width: "100%",
            background: "var(--hair)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: "var(--rust)",
              transition: "width 0.35s ease",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.85rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "0.57rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Composing deck
          </span>
          <span
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "0.57rem",
              letterSpacing: "0.12em",
              color: "var(--ink)",
            }}
          >
            {String(progress).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
