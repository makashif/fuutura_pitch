"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";
import DeviceMockup from "./DeviceMockup";
import LaptopMockup from "./LaptopMockup";
import ExtensionMockup from "./ExtensionMockup";

interface Feature {
  title: string;
  desc: string;
}

interface ProjectSlideProps {
  id: string;
  slideNumber: string;
  title: string;
  description: string;
  domain: string;
  background: string;
  status: string;
  features: Feature[];
  mockupSrc?: string;
  mockupSrcSplash?: string;
  mockupType?: "mobile" | "laptop" | "extension";
}

export default function ProjectSlide({
  id, slideNumber, title, description, domain, background, status, features, mockupSrc, mockupSrcSplash, mockupType = "mobile",
}: ProjectSlideProps) {
  return (
    <SlideWrapper id={id} bgImage={background} overlay="rgba(7,7,7,0.85)">
      {/* Full-height positioning context */}
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>

        {/* ── Top: label + title + description + divider ── */}
        <div className="stack stack-sm" style={{ maxWidth: "620px" }}>

          {/* Top row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.2rem" }}>
            <motion.p className="t-label" variants={itemVariants}>
              {slideNumber} / Project Overview
            </motion.p>
            <motion.span variants={itemVariants}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.45rem",
                padding: "0.28rem 0.85rem", border: "1px solid var(--border)",
                background: "var(--surface)",
                fontFamily: "var(--f-body)", fontSize: "0.58rem",
                letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tx-3)"
              }}>
              <span style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: status === "Delivered" ? "var(--accent)" : "rgba(255,255,255,0.2)"
              }} />
              {status}
            </motion.span>
          </div>

          {/* Domain + title */}
          <div className="stack" style={{ gap: "0.1rem" }}>
            {/* <motion.p className="t-mono" variants={itemVariants} style={{ color: "var(--accent)", opacity: 0.6 }}>
              {domain}
            </motion.p> */}
            <motion.h2 className="t-h3" variants={itemVariants} style={{ maxWidth: "540px" }}>
              {title}
            </motion.h2>
          </div>

        </div>

        {/* ── Bottom row: features grid + mockup, both bottom-aligned ── */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", width: "100%", rowGap: "3rem" }}>

          {/* Left: description + divider + features grid */}
          <div className="stack stack-sm" style={{ flexShrink: 0, width: "100%", flex: "1 1 500px", maxWidth: "600px" }}>

            {/* Overview Description */}
            <motion.p className="t-body" variants={itemVariants} style={{ maxWidth: "520px" }}>
              {description}
            </motion.p>

            <motion.div variants={itemVariants} style={{ borderBottom: "1px solid var(--border)", margin: "0.25rem 0", maxWidth: "520px" }} />

            {/* Key Features (2x2 Grid) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: "600px" }}>
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

          {/* Right Area Wrapper — takes the remaining space on the right */}
          <div style={{
            flex: "1 1 400px",
            display: "flex",
            /* Centering the mockups perfectly balances the whitespace on ultra-wide screens! */
            justifyContent: "center",
            paddingLeft: "clamp(1rem, 2vw, 3rem)" /* Safe gap from the left column */
          }}>
            {/* Device Mockup */}
            <motion.div variants={itemVariants} style={{
              flexShrink: 0,
              display: "flex",
              gap: mockupType === "extension" ? "clamp(0.8rem, 1.5vw, 2rem)" : "clamp(3.5rem, 6.5vw, 7.5rem)",
              marginRight: mockupType === "laptop" ? "calc(var(--laptop-w) * 0.08)" : 0
            }}>
              {mockupType === "laptop" ? (
                <LaptopMockup src={mockupSrc} alt={`${title} app screenshot`} />
              ) : mockupType === "extension" ? (
                <>
                  {mockupSrcSplash && <ExtensionMockup src={mockupSrcSplash} alt={`${title} splash screen`} />}
                  {mockupSrc && <ExtensionMockup src={mockupSrc} alt={`${title} app screenshot`} />}
                </>
              ) : (
                <>
                  <DeviceMockup src={mockupSrcSplash} alt={`${title} splash screen`} />
                  <DeviceMockup src={mockupSrc} alt={`${title} app screenshot`} />
                </>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
