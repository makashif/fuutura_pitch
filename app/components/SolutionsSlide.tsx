"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const pillars = [
  {
    label: "01",
    title: "AI & Machine Learning",
    desc: "AI-native apps, intelligent agents, RAG architectures, LLM orchestration, and automation pipelines built for production.",
    tags: ["AI Agents", "RAG", "LLM Platforms", "Automation"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1.2"/>
        <circle cx="12" cy="12" r="3" fill="var(--accent-dim)" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.7"/>
        <line x1="12" y1="3" x2="12" y2="9" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1.2"/>
        <line x1="12" y1="15" x2="12" y2="21" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1.2"/>
        <line x1="3" y1="12" x2="9" y2="12" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1.2"/>
        <line x1="15" y1="12" x2="21" y2="12" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    label: "02",
    title: "Web2 Products",
    desc: "Full-stack mobile apps, web platforms, SaaS products, and cross-platform systems — engineered for speed and scale.",
    tags: ["Mobile Apps", "SaaS", "Web Platforms", "APIs"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="4" width="15" height="10" rx="2" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1.2"/>
        <rect x="12" y="9" width="11" height="13" rx="2" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1.2"/>
        <circle cx="17.5" cy="20" r="0.8" fill="var(--accent)" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: "03",
    title: "Web3 & Blockchain",
    desc: "Smart contracts, DeFi protocols, NFT platforms, DAO tooling, and blockchain infrastructure engineered to spec.",
    tags: ["Smart Contracts", "DeFi", "NFT Platforms", "DAO"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/>
        <line x1="12" y1="2" x2="12" y2="22" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1"/>
        <line x1="4" y1="7" x2="20" y2="17" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1"/>
        <line x1="4" y1="17" x2="20" y2="7" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1"/>
        <circle cx="12" cy="12" r="2" fill="var(--accent-dim)" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    label: "04",
    title: "Enterprise Infrastructure",
    desc: "Scalable backends, ERP systems, cloud architecture, DevOps pipelines, and mission-critical internal platforms.",
    tags: ["Cloud Systems", "ERP", "DevOps", "APIs"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1.2"/>
        <rect x="13" y="2" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1.2"/>
        <rect x="2" y="13" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1.2"/>
        <rect x="13" y="13" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1.2"/>
      </svg>
    ),
  },
];

const process = [
  "Discovery & System Architecture",
  "Engineering & Development",
  "Testing, Validation & Hardening",
  "Deployment & Production Launch",
];

export default function SolutionsSlide() {
  return (
    <SlideWrapper
      id="slide-solutions"
      bgImage="/A_minimalist,_high-end_gallery_space_202606181548.jpeg"
      overlay="rgba(7,7,7,0.94)"
    >
      {/* Header */}
      <div className="stack stack-xs" style={{ marginBottom: "clamp(1rem, 2.5vh, 2rem)" }}>
        <motion.p className="t-label" variants={itemVariants}>
          03 / What We Build
        </motion.p>
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
        }}>
          <motion.h2 className="t-h2" variants={itemVariants} style={{ maxWidth: "520px" }}>
            Four Engineering<br />
            <span style={{ color: "rgba(242,242,242,0.28)" }}>Domains.</span>
          </motion.h2>
          <motion.p className="t-body" variants={itemVariants}
            style={{ maxWidth: "340px", paddingBottom: "0.4rem" }}>
            Every domain handled by senior specialists — from concept to production.
          </motion.p>
        </div>
      </div>

      {/* 4 Pillar cards */}
      <div className="grid-4">
        {pillars.map((pillar, i) => (
          <motion.div key={i} variants={itemVariants} className="card stack stack-sm"
            whileHover={{ backgroundColor: "var(--surface-2)" }}>

            {/* Icon + number */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {pillar.icon}
              <span className="t-mono" style={{ color: "var(--tx-4)" }}>{pillar.label}</span>
            </div>

            {/* Title + desc */}
            <div className="stack stack-xs">
              <h3 className="t-h4">{pillar.title}</h3>
              <p className="t-sm" style={{ lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "auto", paddingTop: "0.35rem" }}>
              {pillar.tags.map((tag) => (
                <span key={tag} className="tech-badge" style={{ fontSize: "0.48rem" }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process strip */}
      <motion.div variants={itemVariants}
        style={{ display: "flex", alignItems: "center", marginTop: "1px",
          background: "var(--border)", overflow: "hidden" }}>
        {process.map((step, i) => (
          <div key={i} style={{
            flex: 1, background: "var(--surface)",
            padding: "clamp(0.5rem, 1.1vh, 0.75rem) 1rem",
            display: "flex", alignItems: "center", gap: "0.75rem",
            borderRight: i < process.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <span className="t-mono" style={{ color: "var(--accent)", opacity: 0.45, flexShrink: 0 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="t-sm" style={{ color: "var(--tx-2)", fontSize: "0.68rem" }}>{step}</span>
          </div>
        ))}
      </motion.div>
    </SlideWrapper>
  );
}
