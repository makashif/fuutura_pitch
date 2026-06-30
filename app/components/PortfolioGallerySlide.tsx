"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";
import { useDeck } from "./PresentationShell";

interface Project {
  number: string;
  title: string;
  category: string;
  stack: string;
  tags: string[];
}

const projects: Project[] = [
  {
    number: "01",
    title: "Fuutura Wallet",
    category: "Web3 · DeFi · Fintech",
    stack: "React.js · Ethers.js · Viem · Node.js · AWS",
    tags: ["Non-Custodial", "Multi-Chain", "Cross-Chain Swaps"],
  },
  {
    number: "02",
    title: "Fuutura Trade",
    category: "Trading · Web3 · Fintech",
    stack: "React.js · TypeScript · Zustand · WebSocket · AWS",
    tags: ["Hybrid Web2/Web3", "Real-Time Orders", "MetaMask"],
  },
  {
    number: "03",
    title: "Fuutura Extension",
    category: "Browser Extension · Web3",
    stack: "Next.js · Wagmi · Viem · MongoDB · AWS",
    tags: ["Non-Custodial", "Browser-Native", "Multi-Chain"],
  },
  {
    number: "04",
    title: "Fuutura KYC",
    category: "AI · Blockchain · Identity",
    stack: "iOS · Python · LLaMA · React.js · Polygon · AWS",
    tags: ["AI Verification", "On-Chain Identity", "B2B SDK"],
  },
  {
    number: "05",
    title: "Digital24",
    category: "SaaS · PR Distribution",
    stack: "Next.js · PostgreSQL · Stripe · Sanity · AWS",
    tags: ["PR Campaigns", "Multi-Channel", "CMS-Powered"],
  },
  {
    number: "06",
    title: "Intelizzz",
    category: "IoT · Enterprise · Mobile",
    stack: "React Native · Node.js · Kafka · MongoDB · Kubernetes",
    tags: ["6 Modules", "12 Microservices", "Real-Time Tracking"],
  },
  {
    number: "07",
    title: "Toybox",
    category: "Luxury Automotive · iOS · Web",
    stack: "Swift (iOS) · Next.js · Node.js · AWS",
    tags: ["AI Concierge", "4 Surfaces", "Native iOS"],
  },
];

export default function PortfolioGallerySlide() {
  const { goTo } = useDeck();

  return (
    <SlideWrapper id="slide-portfolio" bgImage="/sleek_dark_bg.png" overlay="rgba(7,7,7,0.82)">
      {/* Header */}
      <div className="stack stack-xs" style={{ marginBottom: "clamp(0.5rem, 1vh, 1rem)" }}>
        <motion.p className="t-label" variants={itemVariants}>
          05 / Our Track Record
        </motion.p>
        <motion.h2 className="t-h2" variants={itemVariants} style={{ maxWidth: "700px" }}>
          Multiple projects delivered.<br />
          <span style={{ color: "rgba(242,242,242,0.28)" }}>Engineered for scale.</span>
        </motion.h2>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start", margin: "1.5rem 0" }}>
        <motion.p className="t-body" variants={itemVariants}
          style={{ maxWidth: "440px" }}>
          These are just a few examples from hundreds of successful projects. From Web3 infrastructure to AI ecosystems, we architect and deploy battle-tested technology that powers global businesses.
        </motion.p>
      </div>

      {/* Project grid — 4 cols × 2 rows, last row has 3 cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "clamp(0.4rem, 0.8vw, 0.75rem)",
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            onClick={() => goTo(5 + i)}
            className="portfolio-card"
            style={{
              // Make the 7th card span wider to balance the last row
              ...(i === 6 ? { gridColumn: "span 1" } : {}),
            }}
          >
            {/* Number + category */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: "0.5rem",
                letterSpacing: "0.12em", color: "var(--accent)", opacity: 0.45,
              }}>
                {project.number}
              </span>
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: "0.48rem",
                letterSpacing: "0.1em", color: "var(--tx-4)",
                textTransform: "uppercase",
              }}>
                {project.category.split(" · ")[0]}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "var(--f-display)", fontWeight: 600,
              fontSize: "clamp(0.72rem, 1vw, 0.88rem)",
              color: "var(--tx-1)", letterSpacing: "-0.01em", lineHeight: 1.25,
            }}>
              {project.title}
            </h3>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
              {project.tags.map((tag, j) => (
                <span key={j} style={{
                  fontFamily: "var(--f-mono)", fontSize: "0.46rem",
                  letterSpacing: "0.06em", color: "var(--tx-3)",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  padding: "0.12rem 0.4rem", borderRadius: "2px",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Stack */}
            <p style={{
              fontFamily: "var(--f-mono)", fontSize: "0.45rem",
              color: "var(--tx-4)", letterSpacing: "0.05em",
              lineHeight: 1.5, marginTop: "auto",
              borderTop: "1px solid var(--border)", paddingTop: "0.4rem",
            }}>
              {project.stack}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        className="t-mono"
        variants={itemVariants}
        style={{ marginTop: "clamp(0.5rem, 1vh, 0.9rem)", opacity: 0.25 }}
      >
        Every system displayed is live in production · Deep-dive architectural case studies available upon request
      </motion.p>
    </SlideWrapper>
  );
}
