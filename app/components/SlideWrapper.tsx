"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  stagger?: boolean;
  /** Path to a /public image — rendered as CSS background-image for print reliability */
  bgImage?: string;
  /** CSS color/gradient for the dark overlay */
  overlay?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.02 },
  },
};

export const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function SlideWrapper({
  children, id, className = "", stagger = true, bgImage, overlay,
}: SlideWrapperProps) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`slide ${className}`}
      variants={stagger ? containerVariants : undefined}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-label={id}
    >
      {/* CSS background-image — survives print/PDF */}
      {bgImage && (
        <div
          className="slide-bg"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div className="slide-overlay" style={{ background: overlay }} />
      )}

      {/*
        .slide-content:
        - Sets z-index:2 above bg/overlay
        - Constrains content to max-width (--slide-max) + max-height guard
        - All slide components render their content directly inside this
      */}
      <div className="slide-content">
        {children}
      </div>
    </motion.section>
  );
}
