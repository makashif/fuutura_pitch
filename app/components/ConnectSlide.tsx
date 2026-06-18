"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ConnectSlide() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={ref} id="slide-connect" className="slide"
      style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      
      {/* CSS Background */}
      <div className="slide-bg"
        style={{ backgroundImage: "url('/Epic_minimalist_title_slide_background._202606181548.jpeg')" }} />
      <div className="slide-overlay"
        style={{ background: "linear-gradient(180deg, rgba(7,7,7,0.7) 0%, rgba(7,7,7,0.92) 100%)" }} />

      <div className="stack" style={{ position: "relative", zIndex: 2, alignItems: "center",
        gap: "clamp(1rem, 2vh, 1.8rem)", maxWidth: "760px", margin: "0 auto", width: "100%", padding: "0 1rem" }}>

        <motion.p className="t-label" style={{ letterSpacing: "0.3em" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}>
          12 / Let's Connect
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}>
          <Image src="/Origin Mark (dark mode).png" alt="Origine One" width={64} height={64}
            style={{ objectFit: "contain" }} />
        </motion.div>

        {/* Removed text-fill gradient to fix the print inversion/highlight bug */}
        <motion.h2 className="t-hero" style={{ color: "#f0f0f0" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}>
          Let's Build<br />
          <em style={{ fontStyle: "italic", color: "var(--tx-3)" }}>Something That Scales.</em>
        </motion.h2>

        <motion.span className="rule"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ transformOrigin: "center", width: "50px" }} />

        <motion.p className="t-body" style={{ maxWidth: "520px" }}
          initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.72 }}>
          Whether you're building an AI product, enterprise platform, or scaling existing
          infrastructure — Origine One becomes your engineering backbone.
        </motion.p>

        {/* Contact Links */}
        <motion.div className="stack stack-xs" style={{ alignItems: "center", marginTop: "0.5rem" }}
          initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.86 }}>
          <a href="mailto:info@origineone.com" className="t-body"
            style={{ color: "var(--tx-1)", textDecoration: "none", borderBottom: "1px solid var(--border-strong)", paddingBottom: "2px", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--tx-1)"}>
            info@origineone.com
          </a>
          <span className="t-mono" style={{ marginTop: "0.2rem" }}>www.origineone.com</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
          
          <a href="mailto:info@origineone.com?subject=Start a Project" id="cta-start"
            style={{ display: "inline-flex", alignItems: "center",
              padding: "clamp(0.8rem, 1.5vh, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
              background: "var(--tx-1)", color: "#000",
              fontFamily: "var(--f-body)", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
              borderRadius: "2px", transition: "all 0.2s ease" }}
            onMouseEnter={e => e.currentTarget.style.background = "#fff"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--tx-1)"}>
            Start a Project
          </a>

          <a href="mailto:info@origineone.com?subject=Technical Consultation" id="cta-consult"
            style={{ display: "inline-flex", alignItems: "center",
              padding: "clamp(0.8rem, 1.5vh, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
              background: "var(--surface)", color: "var(--tx-1)",
              border: "1px solid var(--border-strong)",
              fontFamily: "var(--f-body)", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
              borderRadius: "2px", transition: "all 0.2s ease" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-2)"; e.currentTarget.style.borderColor = "var(--tx-3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}>
            Speak to Engineers
          </a>

        </motion.div>
      </div>

      {/* Footer */}
      <motion.p className="t-mono"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.3 }}
        style={{ position: "absolute", bottom: "clamp(1.5rem, 3vh, 2.5rem)", zIndex: 2, opacity: 0.6 }}>
        © 2026 Origine One · AI-Native Engineering Studio · All Rights Reserved
      </motion.p>
    </section>
  );
}
