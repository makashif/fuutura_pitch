"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const stats = [
  { value: "4+",   label: "Projects Delivered" },
  { value: "4",    label: "Engineering Domains" },
  { value: "100%", label: "Production Rate" },
];

const principles = [
  "Architecture before execution",
  "Systems over features",
  "Scale by design, not by accident",
  "Senior engineers on every project",
  "End-to-end ownership, always",
];

export default function AboutSlide() {
  return (
    <SlideWrapper
      id="slide-about"
      bgImage="/Extremely_professional_corporate_background_for_202606181541.jpeg"
      overlay="rgba(7,7,7,0.93)"
    >
      <div className="grid-2">

        {/* ── Left ── */}
        <div className="stack stack-sm">
          <motion.p className="t-label" variants={itemVariants}>
            01 / About Origin One
          </motion.p>

          <motion.h2 className="t-h2" variants={itemVariants}>
            We Build Software<br />
            <span style={{ color: "rgba(242,242,242,0.28)" }}>That Actually Ships.</span>
          </motion.h2>

          <motion.p className="t-body" variants={itemVariants}
            style={{ maxWidth: "420px", paddingTop: "var(--sp-xs)" }}>
            Origin One is a software development house for businesses that need real
            engineering — not templates and shortcuts. We design, build, and deploy
            complete digital systems across AI, mobile, Web3, and enterprise infrastructure.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={itemVariants}
            style={{
              display: "flex", gap: "2rem",
              paddingTop: "var(--sp-sm)", borderTop: "1px solid var(--border)",
              marginTop: "var(--sp-xs)",
            }}>
            {stats.map((s) => (
              <div key={s.label} className="stack stack-xs">
                <span style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(1.3rem, 2.2vw, 2rem)",
                  fontWeight: 700, letterSpacing: "-0.03em", color: "var(--tx-1)",
                }}>
                  {s.value}
                </span>
                <span className="t-label" style={{ color: "var(--tx-3)" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Mission / Vision */}
          <div className="stack" style={{ gap: "1px", paddingTop: "var(--sp-xs)" }}>
            {[
              { tag: "Mission", text: "Build production-grade software systems that power modern businesses." },
              { tag: "Vision",  text: "Become the go-to engineering partner for AI, Web3, and mobile." },
            ].map(item => (
              <motion.div key={item.tag} variants={itemVariants}
                style={{ borderLeft: "1px solid var(--border-strong)",
                  paddingLeft: "1.25rem", paddingTop: "0.65rem", paddingBottom: "0.65rem" }}>
                <p className="t-mono" style={{ color: "var(--tx-3)", marginBottom: "0.25rem" }}>
                  {item.tag}
                </p>
                <p className="t-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right: Engineering Standards ── */}
        <div className="stack stack-xs">
          <motion.p className="t-label" variants={itemVariants}
            style={{ marginBottom: "var(--sp-xs)" }}>
            Engineering Standards
          </motion.p>

          {principles.map((p, i) => (
            <motion.div key={i} variants={itemVariants}
              style={{
                display: "flex", alignItems: "center", gap: "1.25rem",
                padding: "clamp(0.55rem, 1.1vh, 0.95rem) 0",
                borderBottom: "1px solid var(--border)",
              }}>
              <span className="t-mono t-accent" style={{ width: "2rem", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="t-h4" style={{ fontWeight: 500 }}>{p}</span>
            </motion.div>
          ))}
          <div style={{ borderBottom: "1px solid var(--border)" }} />

          <motion.div variants={itemVariants}
            style={{ paddingTop: "var(--sp-sm)", display: "flex", alignItems: "center",
              gap: "0.9rem", opacity: 0.18 }}>
            <Image src="/Origin Mark (dark mode).png" alt="Origin One" width={20} height={20}
              style={{ objectFit: "contain" }} />
            <span className="t-label" style={{ letterSpacing: "0.28em", color: "#f2f2f2" }}>
              Origin One
            </span>
          </motion.div>
        </div>

      </div>
    </SlideWrapper>
  );
}
