"use client";

import { useState } from "react";
import { SLIDES, useDeck } from "./PresentationShell";

/**
 * Right-edge navigation rail.
 * A tick per slide; the active tick extends and turns deep blue.
 * Section dividers carry a longer, heavier tick so the rail reads
 * as chapters rather than an undifferentiated run of dots.
 */
export default function NavDots() {
  const { current, goTo } = useDeck();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav
      className="no-print"
      aria-label="Slide navigation"
      style={{
        position: "fixed",
        right: "clamp(0.55rem, 1.3vw, 1.25rem)",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 900,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "clamp(4px, 0.72vh, 7px)",
      }}
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === current;
        const isHovered = i === hovered;
        const isDivider = slide.id.startsWith("slide-div-");
        const show = isActive || isHovered;

        return (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`Go to ${slide.label}`}
            aria-current={isActive ? "true" : undefined}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.5rem",
              background: "none",
              border: "none",
              padding: 0,
              height: "9px",
            }}
          >
            {/* Label — surfaces on active / hover only */}
            <span
              style={{
                fontFamily: "var(--f-sans)",
                fontSize: "0.52rem",
                fontWeight: 600,
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                color: isActive ? "var(--blue)" : "var(--ink-3)",
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(5px)",
                transition: "opacity 0.28s ease, transform 0.28s ease",
                pointerEvents: "none",
              }}
            >
              {slide.label}
            </span>

            {/* Tick */}
            <span
              style={{
                display: "block",
                height: isDivider ? "2px" : "1px",
                width: isActive ? "22px" : isDivider ? "13px" : "8px",
                background: isActive
                  ? "var(--blue)"
                  : isHovered
                    ? "rgba(0,0,0,0.5)"
                    : "rgba(0,0,0,0.22)",
                transition:
                  "width 0.32s cubic-bezier(0.16,1,0.3,1), background 0.24s ease",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
