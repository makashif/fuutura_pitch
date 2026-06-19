"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ConnectSlide() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={ref} id="slide-connect" className="slide"
      style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>

      {/* Background */}
      <div className="slide-bg"
        style={{ backgroundImage: "url('/Epic_minimalist_title_slide_background._202606181548.jpeg')" }} />
      <div className="slide-overlay"
        style={{ background: "linear-gradient(180deg, rgba(7,7,7,0.72) 0%, rgba(7,7,7,0.95) 100%)" }} />

      {/* Subtle grid */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%)",
      }} />

      <div className="slide-content stack" style={{ alignItems: "center",
        gap: "clamp(0.9rem, 1.8vh, 1.6rem)", maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}>

        <motion.p className="t-label" style={{ letterSpacing: "0.26em" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}>
          15 / Start a Project
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}>
          <Image src="/Origin Mark (dark mode).png" alt="Origin One" width={56} height={56}
            style={{ objectFit: "contain", opacity: 0.85 }} />
        </motion.div>

        <motion.h2 className="t-hero" style={{ color: "#f2f2f2" }}
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as const }}>
          Let&apos;s Build<br />
          <span style={{ color: "rgba(242,242,242,0.3)" }}>Something Real.</span>
        </motion.h2>

        <motion.span className="rule"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.56 }}
          style={{ transformOrigin: "center", width: "48px" }} />

        <motion.p className="t-body" style={{ maxWidth: "480px" }}
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.68 }}>
          Whether you need a mobile app, an AI system, a Web3 platform, or enterprise infrastructure —
          Origin One engineers it end-to-end.
        </motion.p>

        {/* Contact links */}
        <motion.div className="stack stack-xs" style={{ alignItems: "center", marginTop: "0.4rem" }}
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.82 }}>
          <a href="mailto:info@originone.dev" className="t-body"
            style={{ color: "var(--tx-1)", textDecoration: "none",
              borderBottom: "1px solid var(--border-bright)", paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--tx-1)"; e.currentTarget.style.borderColor = "var(--border-bright)"; }}>
            info@originone.dev
          </a>
          <span className="t-mono" style={{ marginTop: "0.15rem" }}>www.originone.dev</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.96 }}
          style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.8rem" }}>

          <a href="mailto:info@originone.dev?subject=Start a Project" id="cta-start"
            style={{ display: "inline-flex", alignItems: "center",
              padding: "clamp(0.75rem, 1.4vh, 0.95rem) clamp(1.4rem, 2.8vw, 2.2rem)",
              background: "var(--tx-1)", color: "#070707",
              fontFamily: "var(--f-body)", fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
              transition: "all 0.2s ease" }}
            onMouseEnter={e => e.currentTarget.style.background = "#fff"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--tx-1)"}>
            Start a Project
          </a>

          <a href="mailto:info@originone.dev?subject=Discovery Call" id="cta-consult"
            style={{ display: "inline-flex", alignItems: "center",
              padding: "clamp(0.75rem, 1.4vh, 0.95rem) clamp(1.4rem, 2.8vw, 2.2rem)",
              background: "transparent", color: "var(--tx-1)",
              border: "1px solid var(--border-strong)",
              fontFamily: "var(--f-body)", fontSize: "0.72rem", fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
              transition: "all 0.2s ease" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-bright)"; e.currentTarget.style.background = "var(--surface)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.background = "transparent"; }}>
            Book Discovery Call
          </a>

        </motion.div>
      </div>

      {/* Footer */}
      <motion.p className="t-mono"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ position: "absolute", bottom: "clamp(1.4rem, 2.8vh, 2.2rem)", zIndex: 2, opacity: 0.28 }}>
        © 2026 Origin One · Software Development House · All Rights Reserved
      </motion.p>
    </section>
  );
}
