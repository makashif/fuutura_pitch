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
    </DeckContext.Provider>
  );
}
