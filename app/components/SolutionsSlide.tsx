"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const services = [
  { name: "AI Systems Engineering",    desc: "AI-native systems: agents, automation, RAG architectures, and intelligence pipelines." },
  { name: "Product Engineering",       desc: "Full-stack web and mobile systems built for performance, scalability, and maintainability." },
  { name: "Enterprise Systems",        desc: "Dashboards, ERP, internal tools, and operational platforms that drive business execution." },
  { name: "Fintech Systems",           desc: "Secure, high-performance financial infrastructure and payment systems." },
  { name: "Infrastructure Engineering",desc: "Cloud architecture, APIs, DevOps pipelines, and distributed backend systems." },
  { name: "Blockchain Systems",        desc: "Distributed systems and blockchain-based architectures where business-critical." },
];

const process = [
  "Discovery & System Understanding",
  "Architecture & Technical Design",
  "Full-System Engineering",
  "Testing, Validation & Hardening",
  "Deployment, Monitoring & Scaling",
];

export default function SolutionsSlide() {
  return (
    <SlideWrapper
      id="slide-solutions"
      bgImage="/A_minimalist,_high-end_gallery_space_202606181548.jpeg"
      overlay="rgba(7,7,7,0.93)"
    >
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", width: "100%" }}>
        <div className="grid-2">

          {/* ── Left: Solutions ── */}
          <div className="stack stack-sm">
            <motion.p className="t-label" variants={itemVariants}>04 / Solutions Delivered</motion.p>
            <motion.h2 className="t-h3" variants={itemVariants}>
              Full-Cycle<br />
              <em style={{ color: "var(--tx-3)" }}>System Engineering.</em>
            </motion.h2>

            <div className="stack" style={{ marginTop: "0.5rem" }}>
              {services.map((s, i) => (
                <motion.div key={i} variants={itemVariants}
                  style={{ padding: "clamp(0.6rem, 1.2vh, 1rem) 0", borderBottom: "1px solid var(--border)" }}>
                  <h3 className="t-h4" style={{ marginBottom: "0.2rem" }}>{s.name}</h3>
                  <p className="t-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Process ── */}
          <div className="stack stack-sm" style={{ paddingTop: "clamp(2rem, 5vh, 4rem)" }}>
            <motion.p className="t-label" variants={itemVariants} style={{ marginBottom: "0.5rem" }}>
              How We Work
            </motion.p>

            {process.map((step, i) => (
              <motion.div key={i} variants={itemVariants}
                style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start",
                  paddingBottom: "clamp(1rem, 2vh, 1.5rem)", position: "relative" }}>
                {/* Timeline vertical line */}
                {i < process.length - 1 && (
                  <div style={{ position: "absolute", left: "13px", top: "28px", width: "1px",
                    height: "calc(100% - 8px)", background: "var(--border-strong)" }} />
                )}
                {/* Node */}
                <div className="badge-num" style={{ background: "var(--surface)", zIndex: 1, borderColor: "var(--accent)", color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="t-body" style={{ paddingTop: "2px", color: "var(--tx-1)" }}>
                  {step}
                </p>
              </motion.div>
            ))}

            <motion.p className="t-sm" variants={itemVariants} style={{ opacity: 0.5, marginTop: "0.5rem" }}>
              Every engagement is treated as a full production system — not an MVP.
            </motion.p>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
