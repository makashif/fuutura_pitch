"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  createContext,
  useContext,
  ReactNode,
} from "react";

/* ─────────────────────────────────────────
   Slide manifest — single source of truth
───────────────────────────────────────── */
export const SLIDES = [
  { id: "slide-hero",        label: "Intro" },
  { id: "slide-about",       label: "About Origin One" },
  { id: "slide-solutions",   label: "What We Build" },
  { id: "slide-tech",        label: "Tech Stack" },
  { id: "slide-portfolio",   label: "Portfolio Overview" },
  { id: "slide-p1a",         label: "Project 01 — Overview" },
  { id: "slide-p1b",         label: "Project 01 — Features" },
  { id: "slide-p2a",         label: "Project 02 — Overview" },
  { id: "slide-p2b",         label: "Project 02 — Features" },
  { id: "slide-p3a",         label: "Project 03 — Overview" },
  { id: "slide-p3b",         label: "Project 03 — Features" },
  { id: "slide-p4a",         label: "Project 04 — Overview" },
  { id: "slide-p4b",         label: "Project 04 — Features" },
  { id: "slide-why",         label: "Why Origin One" },
  { id: "slide-connect",     label: "Start a Project" },
];

/* ─────────────────────────────────────────
   Context so child components can navigate
───────────────────────────────────────── */
interface DeckCtx {
  current: number;
  total: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
}

export const DeckContext = createContext<DeckCtx>({
  current: 0,
  total: SLIDES.length,
  goTo: () => {},
  goNext: () => {},
  goPrev: () => {},
});

export const useDeck = () => useContext(DeckContext);

/* ─────────────────────────────────────────
   PresentationShell
───────────────────────────────────────── */
export default function PresentationShell({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  /* ── Scroll to a slide by index ── */
  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, index));
    const el = document.getElementById(SLIDES[clamped].id);
    if (!el || !containerRef.current) return;

    isScrollingRef.current = true;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrent(clamped);

    // Re-enable after scroll settles
    setTimeout(() => { isScrollingRef.current = false; }, 800);
  }, []);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* ── IntersectionObserver — update current on scroll ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SLIDES.forEach(({ id }, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            setCurrent(index);
          }
        },
        {
          root: containerRef.current,
          threshold: 0.55,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Don't hijack typing in inputs
      if ((e.target as HTMLElement)?.tagName === "INPUT" ||
          (e.target as HTMLElement)?.tagName === "TEXTAREA") return;

      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown":
        case " ":
        case "Enter":
          e.preventDefault();
          goNext();
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          goPrev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(SLIDES.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, goTo]);



  /* ── Touch swipe support ── */
  useEffect(() => {
    let startY = 0;
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dy = startY - e.changedTouches[0].clientY;
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 40) {
        if (dy > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener("touchstart", handleTouchStart, { passive: true });
    container?.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  return (
    <DeckContext.Provider value={{ current, total: SLIDES.length, goTo, goNext, goPrev }}>
      {/* Scroll container */}
      <div
        ref={containerRef}
        id="deck-container"
        style={{
          height: "100svh",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </div>

      {/* ── UI Chrome — all hidden in print ── */}

      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        className="no-print"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "1px",
          width: `${((current + 1) / SLIDES.length) * 100}%`,
          background: "linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,0.25))",
          zIndex: 1000,
          transition: "width 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Slide counter */}
      <div
        aria-live="polite"
        className="no-print"
        aria-label={`Slide ${current + 1} of ${SLIDES.length}: ${SLIDES[current].label}`}
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "clamp(1.5rem, 5vw, 4rem)",
          zIndex: 500,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem",
          letterSpacing: "0.15em", color: "rgba(255,255,255,0.22)" }}>
          {String(current + 1).padStart(2, "0")}{" "}
          <span style={{ opacity: 0.4 }}>/</span>{" "}
          {String(SLIDES.length).padStart(2, "0")}
        </span>
        <span style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.1)" }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem",
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.18)", maxWidth: "160px",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {SLIDES[current].label}
        </span>
      </div>

      {/* Keyboard hint */}
      <KeyHint />
    </DeckContext.Provider>
  );
}

/* ─────────────────────────────────────────
   Keyboard hint toast
───────────────────────────────────────── */
function KeyHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);
    const t = setTimeout(hide, 4500);
    window.addEventListener("keydown", hide, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="no-print"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "clamp(3rem, 6vw, 5rem)",
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "0.5rem 1rem",
        borderRadius: "2px",
        animation: "fadeIn 0.6s ease both",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      {/* Arrow icons */}
      {["↑", "↓"].map((arrow) => (
        <kbd
          key={arrow}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "3px",
            padding: "0.15rem 0.4rem",
            lineHeight: 1,
          }}
        >
          {arrow}
        </kbd>
      ))}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.22)",
        }}
      >
        Navigate Slides
      </span>
    </div>
  );
}
