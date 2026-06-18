"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const principles = [
  "Systems over features",
  "Architecture before execution",
  "Scale by design",
  "Engineering precision over speed shortcuts",
  "Long-term ownership mindset",
];

export default function AboutSlide() {
  return (
    <SlideWrapper
      id="slide-about"
      bgImage="/Extremely_professional_corporate_background_for_202606181541.jpeg"
      overlay="rgba(7,7,7,0.92)"
    >
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", width: "100%" }}>
        <div className="grid-2">
          {/* ── Left ── */}
          <div className="stack stack-sm">
            <motion.p className="t-label" variants={itemVariants}>01 / About</motion.p>

            <motion.h2 className="t-h2" variants={itemVariants}>
              Engineering Systems<br />
              <em style={{ color: "rgba(240,240,240,0.38)" }}>for the AI Era.</em>
            </motion.h2>

            <motion.p className="t-body" variants={itemVariants}
              style={{ maxWidth: "420px", paddingTop: "var(--sp-xs)" }}>
              Origine One was built to solve a structural gap in modern software —
              turning complex ideas into production-grade systems that scale reliably.
              We unify AI engineering, software architecture, and product thinking
              into one studio. We own outcomes end-to-end.
            </motion.p>

            {/* Mission / Vision */}
            <div className="stack" style={{ gap: "1px", paddingTop: "var(--sp-xs)" }}>
              {[
                { tag: "Mission", text: "Build intelligent, scalable systems that power modern businesses." },
                { tag: "Vision",  text: "Become a globally trusted AI-native engineering studio for complex system development." },
              ].map(item => (
                <motion.div key={item.tag} variants={itemVariants}
                  style={{ borderLeft: "1px solid var(--border-strong)",
                    paddingLeft: "1.25rem", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}>
                  <p className="t-mono" style={{ color: "var(--tx-3)", marginBottom: "0.3rem" }}>
                    {item.tag}
                  </p>
                  <p className="t-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Principles ── */}
          <div className="stack stack-xs">
            <motion.p className="t-label" variants={itemVariants}
              style={{ marginBottom: "var(--sp-sm)" }}>
              Core Principles
            </motion.p>

            {principles.map((p, i) => (
              <motion.div key={i} variants={itemVariants}
                style={{ display: "flex", alignItems: "center", gap: "1.25rem",
                  padding: "clamp(0.7rem,1.3vh,1.1rem) 0",
                  borderBottom: "1px solid var(--border)" }}>
                <span className="t-mono t-accent" style={{ width: "2rem", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="t-h4">{p}</span>
              </motion.div>
            ))}
            <div style={{ borderBottom: "1px solid var(--border)" }} />

            <motion.div variants={itemVariants}
              style={{ paddingTop: "var(--sp-sm)", display: "flex", alignItems: "center",
                gap: "0.9rem", opacity: 0.25 }}>
              <Image src="/Origin Mark (dark mode).png" alt="Origine One" width={26} height={26}
                style={{ objectFit: "contain" }} />
              <span className="t-label" style={{ letterSpacing: "0.3em", color: "#f0f0f0" }}>
                Origine One
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
