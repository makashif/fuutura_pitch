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
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
};

export const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function SlideWrapper({
  children, id, className = "", stagger = true, bgImage, overlay,
}: SlideWrapperProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
      {/* CSS background-image — reliable for print/PDF */}
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

      {children}
    </motion.section>
  );
}
