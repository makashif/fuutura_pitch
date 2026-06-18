"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const reasons = [
  { n: "01", title: "Full System Ownership",      body: "We design, build, and own complete digital systems end-to-end — not isolated features or partial implementations." },
  { n: "02", title: "AI-Native Engineering",      body: "AI is embedded into system architecture from day one, enabling automation, intelligence, and adaptive system behaviour." },
  { n: "03", title: "Single Integrated Team",     body: "One unified team handles product, AI, backend, frontend, and infrastructure — eliminating coordination failures." },
  { n: "04", title: "Built for Scale Day One",    body: "Every system is engineered for real production load, long-term growth, and operational resilience." },
  { n: "05", title: "Senior Engineering Only",    body: "Work is delivered by experienced engineers and system architects, not fragmented junior outsourcing layers." },
];

export default function WhyChooseSlide() {
  return (
    <SlideWrapper
      id="slide-why"
      bgImage="/A_sleek,_dark_background_featuring_202606181541.jpeg"
      overlay="rgba(7,7,7,0.94)"
    >
      <div className="stack stack-md" style={{ position: "relative", zIndex: 2, maxWidth: "1200px", width: "100%" }}>

        <div className="stack stack-xs">
          <motion.p className="t-label" variants={itemVariants}>02 / Why Choose Us</motion.p>
          <motion.h2 className="t-h2" variants={itemVariants} style={{ maxWidth: "680px" }}>
            Built to Replace<br />
            <em style={{ color: "var(--tx-3)" }}>Fragmented Engineering Teams.</em>
          </motion.h2>
          <motion.p className="t-body" variants={itemVariants} style={{ maxWidth: "580px" }}>
            Most companies fail not because of ideas, but because execution is fragmented.
            We act as a single accountable engineering system — architecture to deployment to scale.
          </motion.p>
        </div>

        {/* 5-card auto-fit grid */}
        <div className="grid-auto">
          {reasons.map((r, i) => (
            <motion.div key={r.n} variants={itemVariants} className="card stack stack-sm"
              whileHover={{ backgroundColor: "var(--surface-2)" }}>
              <div className="badge-num" style={{ borderColor: "var(--accent-dim)", color: "var(--accent)" }}>
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
