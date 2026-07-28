"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────
   SlideWrapper — the single structural unit of the deck.

   Renders the Fuutura brand frame on every slide:
     · two vertical hairline rules at the left / right margins
     · a rotated spine label reading up the left edge
     · a folio (page number) at the bottom right

   These three devices are lifted straight from the brand book
   and are what make the deck read as one continuous document.
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
  /** Absolutely-positioned decoration rendered behind content (z-index 1). */
  decoration?: ReactNode;
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

export default function SlideWrapper({
  children,
  id,
  field = "ivory",
  folio,
  spine = "Fuutura | Product Deck",
  stagger = true,
  className = "",
  decoration,
}: SlideWrapperProps) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`slide slide--${field} ${className}`}
      variants={stagger ? containerVariants : undefined}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
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
    </motion.section>
  );
}
