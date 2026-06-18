"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

interface ProjectDescriptionSlideProps {
  id: string;
  slideNumber: string;
  projectNumber: string;
  label: string;
  title: string;
  description: string;
  domain: string;
  background: string;
  status: string;
  phases: { name: string; done: boolean }[];
}

export default function ProjectDescriptionSlide({
  id, slideNumber, projectNumber, label, title, description, domain, background, status, phases,
}: ProjectDescriptionSlideProps) {
  return (
    <SlideWrapper id={id} bgImage={background} overlay="rgba(7,7,7,0.92)">
      <div className="stack stack-sm" style={{ position: "relative", zIndex: 2, maxWidth: "1100px", width: "100%" }}>

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.5rem" }}>
          <motion.p className="t-label" variants={itemVariants}>
            {slideNumber} / {label}
          </motion.p>
          <motion.span variants={itemVariants}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.3rem 0.9rem", border: "1px solid var(--border)",
              borderRadius: "99px", background: "var(--surface)",
              fontFamily: "var(--f-body)", fontSize: "0.6rem",
              letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--tx-3)" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%",
              background: status === "Delivered" ? "var(--accent)" : "rgba(255,255,255,0.25)" }} />
            {status}
          </motion.span>
        </div>

        {/* Domain + title */}
        <motion.p className="t-mono" variants={itemVariants} style={{ color: "var(--accent)" }}>
          Project {projectNumber} · {domain}
        </motion.p>

        <motion.h2 className="t-h3" variants={itemVariants} style={{ maxWidth: "680px" }}>
          {title}
        </motion.h2>

        <motion.p className="t-body" variants={itemVariants} style={{ maxWidth: "620px", marginTop: "0.5rem" }}>
          {description}
        </motion.p>

        {/* Progress */}
        <div className="stack stack-xs" style={{ marginTop: "1rem" }}>
          <motion.p className="t-label" variants={itemVariants}>
            Project Progress
          </motion.p>

          <div className="stack" style={{ gap: "1px", background: "var(--border)" }}>
            {phases.map((phase, i) => (
              <motion.div key={i} variants={itemVariants}
                style={{ display: "flex", alignItems: "center", gap: "1.2rem",
                  padding: "clamp(0.6rem, 1.2vh, 1rem) 1.2rem",
                  background: "var(--surface)",
                  borderLeft: phase.done ? "2px solid var(--accent)" : "2px solid transparent" }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
                  border: `1px solid ${phase.done ? "var(--accent)" : "var(--border-strong)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: phase.done ? "var(--accent-dim)" : "transparent" }}>
                  {phase.done && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="var(--accent)"
                        strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="t-body" style={{ color: phase.done ? "var(--tx-1)" : "var(--tx-3)" }}>
                  {phase.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
