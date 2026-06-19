"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";
import DeviceMockup from "./DeviceMockup";

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
  mockupSrc?: string;
}

export default function ProjectDescriptionSlide({
  id, slideNumber, projectNumber, label, title, description, domain, background, status, phases, mockupSrc,
}: ProjectDescriptionSlideProps) {
  return (
    <SlideWrapper id={id} bgImage={background} overlay="rgba(7,7,7,0.93)">
      <div style={{ display: "flex", gap: "clamp(2rem, 5vw, 6rem)", alignItems: "center", width: "100%" }}>
        {/* ── Left: Project info ── */}
        <div className="stack stack-sm" style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>

          {/* Top row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.4rem", flexShrink: 0 }}>
            <motion.p className="t-label" variants={itemVariants}>
              {slideNumber} / {label}
            </motion.p>
            <motion.span variants={itemVariants}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem",
                padding: "0.28rem 0.85rem", border: "1px solid var(--border)",
                background: "var(--surface)",
                fontFamily: "var(--f-body)", fontSize: "0.58rem",
                letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tx-3)" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%",
                background: status === "Delivered" ? "var(--accent)" : "rgba(255,255,255,0.2)" }} />
              {status}
            </motion.span>
          </div>

          {/* Domain + title */}
          <motion.p className="t-mono" variants={itemVariants} style={{ color: "var(--accent)", opacity: 0.6, flexShrink: 0 }}>
            Project {projectNumber} · {domain}
          </motion.p>

          <motion.h2 className="t-h3" variants={itemVariants} style={{ maxWidth: "540px", flexShrink: 0 }}>
            {title}
          </motion.h2>

          <motion.p className="t-body" variants={itemVariants} style={{ maxWidth: "520px", marginTop: "0.3rem", flexShrink: 0 }}>
            {description}
          </motion.p>

          {/* Progress */}
          <div className="stack stack-xs" style={{ marginTop: "0.8rem", flexShrink: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
            <motion.p className="t-label" variants={itemVariants} style={{ flexShrink: 0 }}>
              Delivery Progress
            </motion.p>

            <div className="stack" style={{ gap: "1px", background: "var(--border)", flexShrink: 1 }}>
              {phases.map((phase, i) => (
                <motion.div key={i} variants={itemVariants}
                  style={{ display: "flex", alignItems: "center", gap: "1rem",
                    padding: "clamp(0.4rem, 1vh, 0.85rem) 1rem",
                    background: "var(--surface)",
                    borderLeft: phase.done ? "2px solid var(--accent)" : "2px solid transparent" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", flexShrink: 0,
                    border: `1px solid ${phase.done ? "var(--accent-line)" : "var(--border-strong)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: phase.done ? "var(--accent-dim)" : "transparent" }}>
                    {phase.done && (
                      <svg width="7" height="5" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="var(--accent)"
                          strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="t-body" style={{ fontSize: "0.82rem", color: phase.done ? "var(--tx-1)" : "var(--tx-3)" }}>
                    {phase.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: iPhone Mockup ── */}
        <motion.div
          variants={itemVariants}
          style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <DeviceMockup src={mockupSrc} alt={`${title} app screenshot`} />
        </motion.div>

      </div>
    </SlideWrapper>
  );
}
