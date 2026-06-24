"use client";

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

      <div className="slide-content stack" style={{ alignItems: "center",
        gap: "clamp(0.9rem, 1.8vh, 1.6rem)", maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}>

        <motion.p className="t-label" style={{ letterSpacing: "0.26em" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}>
          15 / Start a Project
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}>
          <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "1.2rem", letterSpacing: "0.3em", color: "#FFF" }}>
            ORIGIN ONE
          </span>
        </motion.div>

        <motion.h2 className="t-hero" style={{ color: "#f2f2f2" }}
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as const }}>
          Let&apos;s Build<br />
          <span style={{ color: "rgba(242,242,242,0.3)" }}>What Matters.</span>
        </motion.h2>

        <motion.span className="rule"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.56 }}
          style={{ transformOrigin: "center", width: "48px" }} />

        <motion.p className="t-body" style={{ maxWidth: "480px" }}
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.68 }}>
          Whether you&apos;re launching a new product, modernizing existing systems, or exploring AI opportunities, Origin One Labs is ready to help.
        </motion.p>

        {/* Contact links */}
        <motion.div className="stack stack-xs" style={{ alignItems: "center", marginTop: "0.4rem" }}
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.82 }}>
          <a href="mailto:hello@originonelabs.com" className="t-body"
            style={{ color: "var(--tx-1)", textDecoration: "none",
              borderBottom: "1px solid var(--border-bright)", paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--tx-1)"; e.currentTarget.style.borderColor = "var(--border-bright)"; }}>
            hello@originonelabs.com
          </a>
          <span className="t-mono" style={{ marginTop: "0.15rem" }}>www.originonelabs.com</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.96 }}
          style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.8rem" }}>

          <a href="mailto:hello@originonelabs.com?subject=Start a Project" id="cta-start"
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

          <a href="mailto:hello@originonelabs.com?subject=Schedule a Consultation" id="cta-consult"
            style={{ display: "inline-flex", alignItems: "center",
              padding: "clamp(0.75rem, 1.4vh, 0.95rem) clamp(1.4rem, 2.8vw, 2.2rem)",
              background: "transparent", color: "var(--tx-1)",
              border: "1px solid var(--border-strong)",
              fontFamily: "var(--f-body)", fontSize: "0.72rem", fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
              transition: "all 0.2s ease" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-bright)"; e.currentTarget.style.background = "var(--surface)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.background = "transparent"; }}>
            Schedule a Consultation
          </a>

        </motion.div>
      </div>

      {/* Footer */}
      <motion.p className="t-mono"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ position: "absolute", bottom: "clamp(1.4rem, 2.8vh, 2.2rem)", zIndex: 2, opacity: 0.28 }}>
        Origin One | AI-Native System Engineering Studio | Build what matters.
      </motion.p>
    </section>
  );
}
