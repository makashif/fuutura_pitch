"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

interface Project {
  number: string;
  title: string;
  category: string;
  stack: string;
  mockup: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "AI Operations App",
    category: "AI Systems · Mobile",
    stack: "React Native · Python · OpenAI",
    mockup: "/mockup_01.png",
  },
  {
    number: "02",
    title: "FinPay Banking App",
    category: "Fintech · Mobile Banking",
    stack: "React Native · Node.js · Stripe",
    mockup: "/mockup_02.png",
  },
  {
    number: "03",
    title: "AI Chat Platform",
    category: "AI Products · Mobile",
    stack: "Flutter · RAG · Multi-LLM",
    mockup: "/mockup_03.png",
  },
  {
    number: "04",
    title: "Field Ops Manager",
    category: "Enterprise · Mobile",
    stack: "React Native · Firebase · Maps",
    mockup: "/mockup_04.png",
  },
];

export default function PortfolioGallerySlide() {
  return (
    <SlideWrapper id="slide-portfolio" overlay="rgba(7,7,7,0.97)">
      {/* Header */}
      <div className="stack stack-xs" style={{ marginBottom: "clamp(0.8rem, 2vh, 1.6rem)" }}>
        <motion.p className="t-label" variants={itemVariants}>
          05 / Portfolio Overview
        </motion.p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <motion.h2 className="t-h2" variants={itemVariants} style={{ maxWidth: "520px" }}>
            Delivered Projects
          </motion.h2>
          <motion.p className="t-body" variants={itemVariants}
            style={{ maxWidth: "400px", paddingBottom: "0.2rem" }}>
            End-to-end mobile applications — architecture to production.
          </motion.p>
        </div>
      </div>

      {/* Project grid */}
      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="portfolio-card"
          >
            {/* Mini device thumbnail */}
            <div className="portfolio-mini-device">
              <Image src={project.mockup} alt={project.title} fill unoptimized />
              {/* Gradient at bottom */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "45%",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }} />
              {/* Number badge */}
              <div style={{
                position: "absolute", top: "0.6rem", left: "0.6rem",
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "3px",
                padding: "0.18rem 0.45rem",
                fontFamily: "var(--f-mono)",
                fontSize: "0.48rem",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.5)",
              }}>
                {project.number}
              </div>
            </div>

            {/* Project info */}
            <div className="stack stack-xs">
              <h3 className="t-h4">{project.title}</h3>
              <p className="t-label" style={{ color: "var(--accent)", opacity: 0.65, letterSpacing: "0.14em" }}>
                {project.category}
              </p>
              <p className="t-mono" style={{ marginTop: "0.15rem" }}>
                {project.stack}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        className="t-mono"
        variants={itemVariants}
        style={{ marginTop: "clamp(0.6rem, 1.2vh, 1rem)", opacity: 0.28 }}
      >
        All projects delivered to production · Real screens shared on request
      </motion.p>
    </SlideWrapper>
  );
}
