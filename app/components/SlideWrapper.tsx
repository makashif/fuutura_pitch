"use client";

import { useEffect, useMemo, useState, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideIndex, useDeck, SLIDES } from "../lib/deck";

/* ─────────────────────────────────────────────────────────────
   SlideWrapper — the page unit.

   Carries the Product Overview's page furniture on every slide:
     · corner brackets, top-left and bottom-right
     · a ruled footer with the document mark and the folio

   ── On revealing content ──
   The staggered entrance is an enhancement, never a gate. Content
   becomes visible if ANY of these hold:
     1. IntersectionObserver reports the slide in view;
     2. the deck index has reached this slide — set synchronously
        by goTo(), so keyboard and rail navigation work even if
        IntersectionObserver never fires;
     3. a short safety timeout elapses.
   A blank slide in a live pitch is not an acceptable failure mode.
───────────────────────────────────────────────────────────── */

export type SlideField = "paper" | "dark";

interface SlideWrapperProps {
  children: ReactNode;
  id: string;
  field?: SlideField;
  /** Folio number, e.g. "04". Omitted on the cover. */
  folio?: string;
  /** Set false to opt out of the staggered reveal. */
  stagger?: boolean;
  /** Vertically centre the content region. */
  center?: boolean;
  /** Hide the footer — the cover carries its own. */
  bare?: boolean;
  className?: string;
  /** Absolutely-positioned decoration behind the content. */
  decoration?: ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.03 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const SAFETY_MS = 2000;

export default function SlideWrapper({
  children,
  id,
  field = "paper",
  folio,
  stagger = true,
  center = false,
  bare = false,
  className = "",
  decoration,
}: SlideWrapperProps) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const { current } = useDeck();
  const index = useMemo(() => slideIndex(id), [id]);
  const [elapsed, setElapsed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setElapsed(true), SAFETY_MS);
    return () => clearTimeout(t);
  }, []);

  const reached = index >= 0 && current >= index;
  const show = inView || reached || elapsed;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`slide ${field === "dark" ? "slide--dark" : ""} ${className}`.trim()}
      variants={stagger ? containerVariants : undefined}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      aria-label={id}
    >
      {decoration}

      {/* Corner brackets */}
      <span className="bracket bracket--tl" aria-hidden="true" />
      <span className="bracket bracket--br" aria-hidden="true" />

      <div className="sheet">
        <div className={`sheet-body ${center ? "sheet-body--center" : ""}`.trim()}>
          {children}
        </div>

        {!bare && (
          <div className="sheet-foot">
            <span className="foot-mark">
              <span className="dia">◆</span> Fuutura &nbsp;·&nbsp; Product
              Overview &nbsp;·&nbsp; Confidential
            </span>
            {folio && (
              <span className="foot-folio">
                {folio} / {String(SLIDES.length).padStart(2, "0")}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
}
