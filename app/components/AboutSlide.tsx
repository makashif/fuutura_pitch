"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const coreValues = [
  { title: "Excellence", desc: "We pursue the highest standards in everything we build." },
  { title: "Innovation", desc: "We embrace emerging technologies and modern approaches." },
  { title: "Accountability", desc: "We take ownership of outcomes, not just deliverables." },
  { title: "Collaboration", desc: "We work as an extension of our clients' teams." },
  { title: "Long-Term Thinking", desc: "We build systems designed to create lasting value." },
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
            01 / About Origin One Labs
          </motion.p>

          <motion.h2 className="t-h2" variants={itemVariants}>
            Engineering the Future<br />
            <span style={{ color: "rgba(242,242,242,0.28)" }}>of Business.</span>
          </motion.h2>

          <motion.p className="t-body" variants={itemVariants}
            style={{ maxWidth: "460px", paddingTop: "var(--sp-xs)" }}>
            Origin One Labs was founded to help organizations navigate increasingly complex technology challenges. We believe great technology is built through a combination of strategic thinking, strong architecture, engineering excellence, and relentless execution.
          </motion.p>
          <motion.p className="t-body" variants={itemVariants}
            style={{ maxWidth: "460px" }}>
            Our goal is simple: Help businesses build technology that delivers measurable value and supports long-term growth. We don&apos;t outsource outcomes. We take ownership from concept to production.
          </motion.p>

          <motion.div variants={itemVariants}
            style={{
              paddingTop: "var(--sp-sm)", borderTop: "1px solid var(--border)",
              marginTop: "var(--sp-xs)",
            }}>
          </motion.div>

          {/* Mission / Vision */}
          <div className="stack" style={{ gap: "1px" }}>
            {[
              { tag: "Mission", text: "To design and deliver intelligent technology solutions that help businesses innovate, scale, and compete in a digital-first world." },
              { tag: "Vision",  text: "To become a globally trusted technology and engineering partner known for building innovative, scalable, and impactful digital systems." },
            ].map(item => (
              <motion.div key={item.tag} variants={itemVariants}
                style={{ borderLeft: "1px solid var(--border-strong)",
                  paddingLeft: "1.25rem", paddingTop: "0.65rem", paddingBottom: "0.65rem" }}>
                <p className="t-mono" style={{ color: "var(--tx-3)", marginBottom: "0.25rem" }}>
                  {item.tag}
                </p>
                <p className="t-sm" style={{ maxWidth: "420px" }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right: Core Values ── */}
        <div className="stack stack-xs" style={{ justifyContent: "flex-end" }}>
          <motion.p className="t-label" variants={itemVariants}
            style={{ marginBottom: "var(--sp-xs)" }}>
            Core Values
          </motion.p>

          {coreValues.map((v, i) => (
            <motion.div key={i} variants={itemVariants}
              style={{
                display: "flex", alignItems: "flex-start", gap: "1.25rem",
                padding: "clamp(0.55rem, 1.1vh, 0.95rem) 0",
                borderBottom: "1px solid var(--border)",
              }}>
              <span className="t-mono t-accent" style={{ width: "2rem", flexShrink: 0, marginTop: "0.2rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="stack" style={{ gap: "0.25rem" }}>
                <span className="t-h4" style={{ fontWeight: 500 }}>{v.title}</span>
                <span className="t-sm" style={{ color: "var(--tx-3)" }}>{v.desc}</span>
              </div>
            </motion.div>
          ))}
          <div style={{ borderBottom: "1px solid var(--border)" }} />

          <motion.div variants={itemVariants}
            style={{ paddingTop: "var(--sp-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.25em", color: "#FFF" }}>
                ORIGIN ONE
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--tx-2)" }}>
                {"// LABS"}
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </SlideWrapper>
  );
}
