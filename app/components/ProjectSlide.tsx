"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";
import DeviceMockup from "./DeviceMockup";

import LaptopMockup from "./LaptopMockup";

interface Feature {
  title: string;
  desc: string;
}

interface ProjectSlideProps {
  id: string;
  slideNumber: string;
  projectNumber: string;
  title: string;
  description: string;
  domain: string;
  background: string;
  status: string;
  features: Feature[];
  mockupSrc?: string;
  mockupType?: "mobile" | "laptop";
}

export default function ProjectSlide({
  id, slideNumber, projectNumber, title, description, domain, background, status, features, mockupSrc, mockupType = "mobile",
}: ProjectSlideProps) {
  return (
    <SlideWrapper id={id} bgImage={background} overlay="rgba(7,7,7,0.85)">
      <div style={{ display: "flex", gap: "clamp(2rem, 5vw, 6rem)", alignItems: "center", width: "100%" }}>
        {/* ── Left: Project info & Features ── */}
        <div className="stack stack-sm" style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>

          {/* Top row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.2rem", flexShrink: 0 }}>
            <motion.p className="t-label" variants={itemVariants}>
              {slideNumber} / Project Overview
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
          <div className="stack" style={{ gap: "0.1rem", flexShrink: 0 }}>
            <motion.p className="t-mono" variants={itemVariants} style={{ color: "var(--accent)", opacity: 0.6 }}>
              Project {projectNumber} · {domain}
            </motion.p>
            <motion.h2 className="t-h3" variants={itemVariants} style={{ maxWidth: "540px" }}>
              {title}
            </motion.h2>
          </div>

          {/* Overview Description */}
          <motion.p className="t-body" variants={itemVariants} style={{ maxWidth: "520px", marginTop: "0.4rem", flexShrink: 0 }}>
            {description}
          </motion.p>

          <motion.div variants={itemVariants} style={{ borderBottom: "1px solid var(--border)", margin: "0.5rem 0", maxWidth: "520px" }} />

          {/* Key Features (2x2 Grid) */}
          <div className="grid-auto-lg" style={{ gridTemplateColumns: "1fr 1fr", display: "grid", gap: "1rem", flexShrink: 0, maxWidth: "600px" }}>
            {features.map((f, i) => (
              <motion.div key={i} variants={itemVariants} className="stack stack-xs">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="t-mono" style={{ color: "var(--accent)", opacity: 0.5, fontSize: "0.7rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rule" style={{ flex: 1, width: "auto" }} />
                </div>
                <h3 className="t-h5" style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)" }}>{f.title}</h3>
                <p className="t-sm" style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.75rem)", color: "var(--tx-2)" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ── Right: iPhone Mockup ── */}
        <motion.div
          variants={itemVariants}
          style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {mockupType === "laptop" ? (
            <LaptopMockup src={mockupSrc} alt={`${title} app screenshot`} />
          ) : (
            <DeviceMockup src={mockupSrc} alt={`${title} app screenshot`} />
          )}
        </motion.div>

      </div>
    </SlideWrapper>
  );
}
