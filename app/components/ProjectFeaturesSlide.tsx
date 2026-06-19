"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";
import DeviceMockup from "./DeviceMockup";

interface Feature { title: string; desc: string; }
interface Props {
  id: string; slideNumber: string; projectNumber: string;
  projectTitle: string; domain: string; background: string;
  features: Feature[]; outcome: string;
  mockupSrc?: string;
}

export default function ProjectFeaturesSlide({
  id, slideNumber, projectNumber, projectTitle, domain, background, features, outcome, mockupSrc,
}: Props) {
  return (
    <SlideWrapper id={id} bgImage={background} overlay="rgba(7,7,7,0.95)">
      <div style={{ display: "flex", gap: "clamp(2rem, 5vw, 6rem)", alignItems: "center", width: "100%" }}>
        {/* ── Left: iPhone Mockup ── */}
        <motion.div
          variants={itemVariants}
          style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <DeviceMockup src={mockupSrc} alt={`${projectTitle} features`} />
        </motion.div>

        {/* ── Right: Features ── */}
        <div className="stack stack-sm" style={{ flex: 1, minWidth: 0 }}>

          {/* Header */}
          <motion.p className="t-label" variants={itemVariants}>
            {slideNumber} / Project {projectNumber} · Key Features
          </motion.p>

          <div className="stack" style={{ gap: "0.2rem", marginBottom: "0.4rem" }}>
            <motion.h2 className="t-h3" variants={itemVariants}>{projectTitle}</motion.h2>
            <motion.p className="t-mono" variants={itemVariants} style={{ color: "var(--accent)", opacity: 0.55 }}>
              {domain}
            </motion.p>
          </div>

          {/* Feature cards — 2×2 */}
          <div className="grid-auto-lg" style={{ gridTemplateColumns: "1fr 1fr", display: "grid" }}>
            {features.map((f, i) => (
              <motion.div key={i} variants={itemVariants} className="card stack stack-xs"
                whileHover={{ backgroundColor: "var(--surface-2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <span className="t-mono" style={{ color: "var(--accent)", opacity: 0.5 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rule" style={{ flex: 1, width: "auto" }} />
                </div>
                <h3 className="t-h4" style={{ fontSize: "clamp(0.75rem, 1vw, 0.95rem)" }}>{f.title}</h3>
                <p className="t-sm" style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Outcome bar */}
          <motion.div variants={itemVariants}
            style={{ background: "var(--surface)", border: "1px solid var(--border)",
              padding: "clamp(0.5rem, 1.3vh, 0.9rem) 1rem",
              display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.4rem" }}>
            <span className="t-label" style={{ color: "var(--accent)", opacity: 0.7, flexShrink: 0 }}>
              Outcome
            </span>
            <span style={{ width: "1px", height: "20px", background: "var(--border)", flexShrink: 0 }} />
            <p className="t-body" style={{ color: "var(--tx-1)", fontWeight: 500, fontSize: "0.8rem", lineHeight: 1.4 }}>
              {outcome}
            </p>
          </motion.div>

        </div>
      </div>
    </SlideWrapper>
  );
}
