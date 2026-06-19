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
      {/* Background */}
      <div
        className="slide-bg"
        style={{ backgroundImage: "url('/Epic_shot_of_Earth_at_202606181549.jpeg')", backgroundPosition: "center 30%" }}
      />
      <div
        className="slide-overlay"
        style={{ background: "linear-gradient(180deg, rgba(7,7,7,0.25) 0%, rgba(7,7,7,0.6) 42%, rgba(7,7,7,0.97) 100%)" }}
      />

      {/* Subtle grid overlay for tech feel */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* ── Content ── */}
      <div className="slide-content" style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: "clamp(0.8rem, 1.6vh, 1.4rem)",
        maxWidth: "900px", margin: "0 auto", padding: "0 1rem",
      }}>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Image src="/Origin Mark (dark mode).png" alt="Origin One" width={52} height={52} priority
            style={{ objectFit: "contain", opacity: 0.9 }} />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="t-label"
          style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
          initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          Origin One · Software Development House
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="t-hero"
          style={{ color: "#f2f2f2" }}
          initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.32, ease }}
        >
          We Build Software<br />
          <span style={{ color: "rgba(242,242,242,0.35)" }}>That Ships.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="t-body"
          style={{ maxWidth: "520px", textAlign: "center" }}
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          Mobile apps, AI systems, Web3 platforms, and enterprise infrastructure —
          designed, engineered, and delivered to production.
        </motion.p>

        {/* Rule */}
        <motion.span
          className="rule"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.78 }}
        />

        {/* Tech stack pills */}
        <motion.div
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {["AI", "Web2", "Web3", "Enterprise", "Mobile"].map((tag) => (
            <span key={tag} className="tech-badge" style={{ fontSize: "0.54rem" }}>{tag}</span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="t-mono"
          style={{ color: "rgba(255,255,255,0.18)", marginTop: "0.2rem" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          End-to-end. Production-grade. No shortcuts.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="no-print"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.3 }}
        style={{
          position: "absolute", bottom: "clamp(1.2rem, 3vh, 2rem)",
          left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2,
        }}
      >
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none"
          style={{ animation: "bounce 2.2s ease-in-out infinite" }} aria-hidden="true">
          <path d="M7 3L7 19M7 19L2 13M7 19L12 13" stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
