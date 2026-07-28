"use client";

import { useEffect, useRef, useState, useCallback, ReactNode } from "react";
import { usePdfExport } from "../lib/usePdfExport";
import PdfExportOverlay from "./PdfExportOverlay";
import { SLIDES, DeckContext } from "../lib/deck";

/* The manifest and navigation context live in ../lib/deck so that
   SlideWrapper, NavDots and the exporter can read them without
   importing this component. Re-exported here for convenience. */
export { SLIDES, DeckContext, useDeck } from "../lib/deck";



/* ─────────────────────────────────────────────────────────────
   PresentationShell
───────────────────────────────────────────────────────────── */
export default function PresentationShell({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const {
    exportPdf,
    isExporting,
    exportProgress,
    totalSlides,
    previewImage,
    isPreviewing,
    generatePreview,
    closePreview,
  } = usePdfExport();

  /* ── Scroll to a slide by index ── */
  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, index));
    const el = document.getElementById(SLIDES[clamped].id);
    if (!el || !containerRef.current) return;

    isScrollingRef.current = true;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrent(clamped);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* ── IntersectionObserver — track the active slide ── */
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
        { root: containerRef.current, threshold: 0.55 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "Escape" && (previewImage || isPreviewing)) {
        e.preventDefault();
        closePreview();
        return;
      }

      switch (e.key) {
        case "e":
        case "E":
          if (e.metaKey && e.shiftKey) {
            e.preventDefault();
            exportPdf();
          }
          break;
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
        case "m":
        case "M":
          e.preventDefault();
          if (previewImage || isPreviewing) closePreview();
          else generatePreview(SLIDES[current].id);
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [
    goNext,
    goPrev,
    goTo,
    exportPdf,
    current,
    previewImage,
    isPreviewing,
    generatePreview,
    closePreview,
  ]);

  /* ── Touch swipe (desktop-width only; mobile scrolls freely) ── */
  useEffect(() => {
    let startY = 0;
    let startX = 0;

    const onStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const onEnd = (e: TouchEvent) => {
      if (window.innerWidth <= 960) return;
      const dy = startY - e.changedTouches[0].clientY;
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 40) {
        if (dy > 0) goNext();
        else goPrev();
      }
    };

    const container = containerRef.current;
    container?.addEventListener("touchstart", onStart, { passive: true });
    container?.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      container?.removeEventListener("touchstart", onStart);
      container?.removeEventListener("touchend", onEnd);
    };
  }, [goNext, goPrev]);

  return (
    <DeckContext.Provider
      value={{ current, total: SLIDES.length, goTo, goNext, goPrev, exportPdf, isExporting }}
    >
      <PdfExportOverlay
        isExporting={isExporting}
        progress={exportProgress}
        total={totalSlides}
      />

      {/* Scroll container */}
      <div
        ref={containerRef}
        id="deck-container"
        style={{
          height: "100svh",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </div>

      {/* ── Progress hairline ── */}
      <div
        aria-hidden="true"
        className="no-print"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${((current + 1) / SLIDES.length) * 100}%`,
          background: "var(--rust)",
          zIndex: 1000,
          transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* ── Frame preview overlay (press M) ── */}
      {(isPreviewing || previewImage) && (
        <div
          className="no-print"
          onClick={closePreview}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(20,25,34,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          {isPreviewing ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              <p
                style={{
                  color: "#fff",
                  fontFamily: "var(--f-sans)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.16em",
                }}
              >
                RENDERING FRAME
              </p>
            </div>
          ) : previewImage ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewImage}
                alt="Slide frame preview"
                style={{
                  maxWidth: "90%",
                  maxHeight: "88%",
                  boxShadow: "0 24px 70px rgba(0,0,0,0.5)",
                  background: "var(--paper)",
                }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "1.4rem",
                  fontFamily: "var(--f-sans)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                }}
              >
                M · ESC · CLICK TO CLOSE
              </p>
            </>
          ) : null}
        </div>
      )}
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
        right: "clamp(2rem, 5vw, 4rem)",
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "rgba(36, 49, 64, 0.85)", // var(--ink) with opacity
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        animation: "fadeIn 0.6s ease both",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      
      {/* Arrow icons */}
      {["↑", "↓"].map((arrow) => (
        <kbd
          key={arrow}
          style={{
            fontFamily: "var(--f-sans)",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.8)",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
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
          fontFamily: "var(--f-sans)",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        Navigate
      </span>
      <span style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
      <kbd
        style={{
          fontFamily: "var(--f-sans)",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.8)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "3px",
          padding: "0.15rem 0.4rem",
          lineHeight: 1,
        }}
      >
        ⌘⇧E
      </kbd>
      <span
        style={{
          fontFamily: "var(--f-sans)",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        PDF
      </span>
      <span style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
      <kbd
        style={{
          fontFamily: "var(--f-sans)",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.8)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "3px",
          padding: "0.15rem 0.4rem",
          lineHeight: 1,
        }}
      >
        M
      </kbd>
      <span
        style={{
          fontFamily: "var(--f-sans)",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        Preview
      </span>
    </div>
  );
}
