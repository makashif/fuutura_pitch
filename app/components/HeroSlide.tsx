"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function HeroSlide() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="slide-hero"
      className="slide"
      style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
    >
      {/* CSS background — guaranteed to print */}
      <div
        className="slide-bg"
        style={{ backgroundImage: "url('/Epic_shot_of_Earth_at_202606181549.jpeg')", backgroundPosition: "center 30%" }}
      />
      <div
        className="slide-overlay"
        style={{ background: "linear-gradient(180deg, rgba(7,7,7,0.18) 0%, rgba(7,7,7,0.52) 42%, rgba(7,7,7,0.97) 100%)" }}
      />

      {/* ── Content ── */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: "clamp(0.9rem, 1.8vh, 1.5rem)",
        maxWidth: "860px", width: "100%", padding: "0 1rem",
      }}>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Image src="/Origin Mark (dark mode).png" alt="Origine One" width={60} height={60} priority
            style={{ objectFit: "contain" }} />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="t-label"
          style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.38)" }}
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Origine One · AI-Native Engineering Studio
        </motion.p>

        {/* Headline — solid white, no gradient (print-safe) */}
        <motion.h1
          className="t-hero"
          style={{ color: "#f0f0f0" }}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.38, ease }}
        >
          We Design &amp; Build<br />
          <em style={{ fontStyle: "italic" }}>Complete Digital Systems</em><br />
          That Scale.
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="t-body"
          style={{ maxWidth: "480px", textAlign: "center" }}
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.62 }}
        >
          End-to-end digital systems for businesses scaling fast or rebuilding
          core infrastructure — across AI, enterprise platforms, and fintech.
        </motion.p>

        {/* Rule */}
        <motion.span
          className="rule"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.86 }}
        />

        {/* Tagline */}
        <motion.p
          className="t-mono"
          style={{ color: "rgba(255,255,255,0.22)" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          We don't deliver features. We deliver production-grade systems.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="no-print"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          position: "absolute", bottom: "clamp(1.2rem, 3vh, 2rem)",
          left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2,
        }}
      >
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none"
          style={{ animation: "bounce 2.2s ease-in-out infinite" }} aria-hidden="true">
          <path d="M7 3L7 19M7 19L2 13M7 19L12 13" stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
