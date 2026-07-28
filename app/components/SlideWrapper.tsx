"use client";

import { useEffect, useMemo, useState, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideIndex, useDeck } from "../lib/deck";

/* ─────────────────────────────────────────────────────────────
   SlideWrapper — the single structural unit of the deck.

   Renders the Fuutura brand frame on every slide:
     · two vertical hairline rules at the left / right margins
     · a rotated spine label reading up the left edge
     · a folio (page number) at the bottom right

   These three devices are lifted straight from the brand book
   and are what make the deck read as one continuous document.

   ── On revealing content ──
   The staggered entrance is an enhancement, never a gate. Slide
   content becomes visible if ANY of these hold:
     1. IntersectionObserver reports the slide in view;
     2. the deck's own index has reached this slide — set
        synchronously by goTo(), so keyboard and rail navigation
        work even if IntersectionObserver never fires;
     3. a short safety timeout elapses.
   A blank slide in a live pitch is unacceptable, so visibility
   does not depend on any single mechanism firing.
───────────────────────────────────────────────────────────── */

export type SlideField = "ivory" | "white" | "warm" | "blue" | "ink";

interface SlideWrapperProps {
  children: ReactNode;
  id: string;
  /** Background field. Defaults to ivory — the brand's default ground. */
  field?: SlideField;
  /** Folio number shown bottom-right, e.g. "04". Omit to hide. */
  folio?: string;
  /** Spine label. Defaults to the deck-wide label. */
  spine?: string;
  /** Set false to opt out of the staggered reveal. */
  stagger?: boolean;
  /** Extra classes on the section element. */
  className?: string;
  /** Absolutely-positioned decoration rendered behind content. */
  decoration?: ReactNode;
  /**
   * Content pinned to the foot of the slide — document meta, legal notes.
   *
   * This is a slot rather than something a slide positions itself, because
   * `.slide-content` is `position: relative` and only as tall as the content
   * it centres. An absolutely-positioned child of it resolves `bottom`
   * against that short box and lands mid-field, on top of the copy. The
   * slot renders as a direct child of the slide instead, so it pins to the
   * full slide box.
   */
  baseline?: ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.04 },
  },
};

/** Standard reveal for direct children of a staggered slide. */
export const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/** How long to wait before revealing regardless of any signal. */
const SAFETY_MS = 2000;

export default function SlideWrapper({
  children,
  id,
  field = "ivory",
  folio,
  spine = "Fuutura | Product Deck",
  stagger = true,
  className = "",
  decoration,
  baseline,
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
      className={`slide slide--${field} ${className}`.trim()}
      variants={stagger ? containerVariants : undefined}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      aria-label={id}
    >
      {/* Decoration sits beneath the frame and content */}
      {decoration}

      {/* Brand frame — rules, spine, folio */}
      <div className="frame" aria-hidden="true">
        <span className="frame-rule frame-rule--l" />
        <span className="frame-rule frame-rule--r" />
        <span className="frame-spine">{spine}</span>
        {folio && <span className="frame-folio">{folio}</span>}
      </div>

      <div className="slide-content">{children}</div>

      {/* Pinned to the slide box, not to .slide-content */}
      {baseline && <div className="slide-baseline">{baseline}</div>}
    </motion.section>
  );
}
