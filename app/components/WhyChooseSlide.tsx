"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const reasons = [
  {
    n: "01",
    title: "Full-Stack Ownership",
    body: "We own every layer — design, mobile, backend, AI, and cloud. One team. One accountability. No gaps.",
  },
  {
    n: "02",
    title: "AI-Native from Day One",
    body: "Artificial intelligence is embedded at the architecture level — not bolted on after launch.",
  },
  {
    n: "03",
    title: "Mobile-First Precision",
    body: "Every app ships to App Store and Play Store standards. Pixel-perfect, performant, production-hardened.",
  },
  {
    n: "04",
    title: "Web3-Ready Architecture",
    body: "Blockchain-compatible infrastructure built in — extend any system with on-chain capability without rewrites.",
  },
  {
    n: "05",
    title: "Senior Engineers Only",
    body: "No junior outsourcing layers. Every project is handled by experienced engineers and architects end-to-end.",
  },
  {
    n: "06",
    title: "Built to Scale",
    body: "Production-grade systems designed for real load from day one — not MVPs that collapse at 10× users.",
  },
];

export default function WhyChooseSlide() {
  return (
    <SlideWrapper
      id="slide-why"
      bgImage="/A_sleek,_dark_background_featuring_202606181541.jpeg"
      overlay="rgba(7,7,7,0.94)"
    >
      <div className="stack stack-md">

        <div className="stack stack-xs">
          <motion.p className="t-label" variants={itemVariants}>
            14 / Why Origin One
          </motion.p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <motion.h2 className="t-h2" variants={itemVariants} style={{ maxWidth: "520px" }}>
              Why Engineering<br />
              <span style={{ color: "rgba(242,242,242,0.28)" }}>Teams Choose Us.</span>
            </motion.h2>
            <motion.p className="t-body" variants={itemVariants}
              style={{ maxWidth: "360px", paddingBottom: "0.4rem" }}>
              Most software fails not because of bad ideas — but because execution is fragmented. We are a single, unified engineering system.
            </motion.p>
          </div>
        </div>

        {/* 6-card auto-fit grid */}
        <div className="grid-auto">
          {reasons.map((r) => (
            <motion.div key={r.n} variants={itemVariants} className="card stack stack-sm"
              whileHover={{ backgroundColor: "var(--surface-2)" }}>
              <div style={{
                width: "22px", height: "22px", borderRadius: "50%",
                border: "1px solid var(--border-strong)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--f-mono)", fontSize: "0.48rem",
                color: "var(--accent)", opacity: 0.55,
              }}>
                {r.n}
              </div>
              <h3 className="t-h4">{r.title}</h3>
              <p className="t-sm">{r.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideWrapper>
  );
}
