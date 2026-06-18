"use client";

import { useDeck, SLIDES } from "./PresentationShell";

export default function NavDots() {
  const { current, goTo } = useDeck();

  return (
    <nav
      aria-label="Slide navigation"
      className="no-print"
      style={{
        position: "fixed",
        right: "clamp(1.2rem, 2.5vw, 2.2rem)",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 500,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {SLIDES.map((slide, i) => (
        <button
          key={slide.id}
          id={`nav-dot-${i}`}
          aria-label={`Go to ${slide.label}`}
          onClick={() => goTo(i)}
          title={slide.label}
          style={{
            width: current === i ? "18px" : "4px",
            height: "4px",
            borderRadius: "99px",
            background:
              current === i ? "#ffffff" : "rgba(255,255,255,0.18)",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow:
              current === i ? "0 0 8px rgba(255,255,255,0.4)" : "none",
          }}
        />
      ))}
    </nav>
  );
}
