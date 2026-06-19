"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const techStack = [
  { name: "React Native", category: "Mobile" },
  { name: "Flutter",      category: "Mobile" },
  { name: "Swift",        category: "iOS" },
  { name: "Kotlin",       category: "Android" },
  { name: "Next.js",      category: "Web" },
  { name: "Node.js",      category: "Backend" },
  { name: "Python",       category: "AI / Backend" },
  { name: "Solidity",     category: "Web3" },
  { name: "OpenAI API",   category: "AI" },
  { name: "LangChain",    category: "AI" },
  { name: "PostgreSQL",   category: "Database" },
  { name: "Firebase",     category: "Platform" },
  { name: "AWS",          category: "Cloud" },
  { name: "GCP",          category: "Cloud" },
  { name: "Docker",       category: "DevOps" },
  { name: "Supabase",     category: "Database" },
  { name: "Ethereum",     category: "Web3" },
  { name: "GraphQL",      category: "API" },
];

const capabilities = [
  {
    title: "Mobile-First Development",
    desc: "React Native, Flutter, Swift, Kotlin — cross-platform and native mobile apps built to App Store and Play Store standard.",
  },
  {
    title: "AI Engineering",
    desc: "LLM orchestration, RAG systems, AI agents, and intelligent automation deployed at production scale.",
  },
  {
    title: "Web3 & Blockchain",
    desc: "Smart contracts, DeFi protocols, NFT systems, and on-chain infrastructure — audited and battle-tested.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Auto-scaling infrastructure, CI/CD pipelines, containerization, and zero-downtime deployment on AWS and GCP.",
  },
];

export default function TechSlide() {
  return (
    <SlideWrapper id="slide-tech">
      <div className="stack stack-md">

        {/* Header */}
        <div className="stack stack-xs">
          <motion.p className="t-label" variants={itemVariants}>
            04 / Technology Stack
          </motion.p>
          <motion.h2 className="t-h2" variants={itemVariants} style={{ maxWidth: "620px" }}>
            Engineering Across<br />
            <span style={{ color: "rgba(242,242,242,0.28)" }}>Every Layer.</span>
          </motion.h2>
        </div>

        <div className="grid-2" style={{ gap: "clamp(1.5rem, 4vw, 5rem)" }}>

          {/* Left: Capability cards */}
          <div className="stack" style={{ gap: "1px", background: "var(--border)" }}>
            {capabilities.map((cap, i) => (
              <motion.div key={i} variants={itemVariants} className="card stack stack-xs"
                whileHover={{ backgroundColor: "var(--surface-2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span className="t-mono" style={{ color: "var(--accent)", opacity: 0.55 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                </div>
                <h3 className="t-h4">{cap.title}</h3>
                <p className="t-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Tech stack grid */}
          <div className="stack stack-sm">
            <motion.p className="t-label" variants={itemVariants} style={{ marginBottom: "0.4rem" }}>
              Tools & Technologies
            </motion.p>
            <motion.div variants={itemVariants}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {techStack.map((tech, i) => (
                <div key={i}
                  style={{
                    display: "inline-flex", flexDirection: "column",
                    padding: "0.45rem 0.8rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    gap: "0.12rem",
                  }}>
                  <span style={{
                    fontFamily: "var(--f-body)", fontSize: "0.7rem",
                    fontWeight: 500, color: "var(--tx-1)",
                  }}>
                    {tech.name}
                  </span>
                  <span className="t-mono" style={{ color: "var(--tx-4)", fontSize: "0.48rem" }}>
                    {tech.category}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
