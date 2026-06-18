"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

interface Feature { title: string; desc: string; }
interface Props {
  id: string; slideNumber: string; projectNumber: string;
  projectTitle: string; domain: string; background: string;
  features: Feature[]; outcome: string;
}

export default function ProjectFeaturesSlide({
  id, slideNumber, projectNumber, projectTitle, domain, background, features, outcome,
}: Props) {
  return (
    <SlideWrapper id={id} bgImage={background} overlay="rgba(7,7,7,0.94)">
      <div className="stack stack-sm" style={{ position: "relative", zIndex: 2, maxWidth: "1100px", width: "100%" }}>

        {/* Header */}
        <motion.p className="t-label" variants={itemVariants}>
          {slideNumber} / Project {projectNumber} Key Features
        </motion.p>

        <div className="stack" style={{ gap: "0.25rem", marginBottom: "0.5rem" }}>
          <motion.p className="t-h3" variants={itemVariants}>
            {projectTitle}
          </motion.p>
          <motion.p className="t-mono" variants={itemVariants} style={{ color: "var(--accent)" }}>
            {domain}
          </motion.p>
        </div>

        {/* 4 feature cards — 2×2 auto-fit grid */}
        <div className="grid-auto-lg">
          {features.map((f, i) => (
            <motion.div key={i} variants={itemVariants} className="card stack stack-sm"
              whileHover={{ backgroundColor: "var(--surface-2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span className="t-mono t-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rule" style={{ flex: 1, width: "auto" }} />
              </div>
              <h3 className="t-h4">{f.title}</h3>
              <p className="t-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Outcome bar */}
        <motion.div variants={itemVariants}
          style={{ background: "var(--surface)", border: "1px solid var(--border)",
            padding: "clamp(0.8rem, 1.5vh, 1.2rem) 1.5rem",
            display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "0.5rem" }}>
          <span className="t-label" style={{ color: "var(--accent)", flexShrink: 0 }}>
            Outcome
          </span>
          <span style={{ width: "1px", height: "24px", background: "var(--border)", flexShrink: 0 }} />
          <p className="t-body" style={{ fontStyle: "italic", color: "var(--tx-1)" }}>
            {outcome}
          </p>
        </motion.div>

      </div>
    </SlideWrapper>
  );
}
