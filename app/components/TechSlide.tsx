"use client";

import { motion } from "framer-motion";
import SlideWrapper, { itemVariants } from "./SlideWrapper";

const caps = [
  { title: "AI Systems",              sub: "Agents · RAG · Automation · Intelligence Layers",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/><circle cx="12" cy="12" r="3" fill="var(--accent-dim)" stroke="var(--accent)" strokeWidth="1"/><line x1="12" y1="3" x2="12" y2="9" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1"/><line x1="12" y1="15" x2="12" y2="21" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1"/><line x1="3" y1="12" x2="9" y2="12" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1"/><line x1="15" y1="12" x2="21" y2="12" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1"/></svg> },
  { title: "Fintech Infrastructure",   sub: "Payment Systems · Transactions · Secure APIs",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="13" rx="2" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/><line x1="2" y1="11" x2="22" y2="11" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1"/><rect x="5" y="14" width="5" height="2" rx="0.5" fill="var(--accent-dim)"/></svg> },
  { title: "Enterprise SaaS",          sub: "Dashboards · ERP · Internal Tools",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/><rect x="13" y="2" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1.2"/><rect x="2" y="13" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1.2"/><rect x="13" y="13" width="9" height="9" rx="1.5" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/></svg> },
  { title: "Web & Mobile Apps",        sub: "Full-Stack · Performance · Cross-Platform",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="16" height="11" rx="2" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/><rect x="13" y="9" width="10" height="13" rx="2" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1.2"/><circle cx="18" cy="20" r="0.8" fill="var(--accent)" strokeOpacity="0.4"/></svg> },
  { title: "API & Backend Systems",    sub: "Microservices · Data Pipelines · Scalable APIs",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="9" width="7" height="7" rx="1" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/><rect x="14" y="9" width="7" height="7" rx="1" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/><line x1="10" y1="12.5" x2="14" y2="12.5" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1"/></svg> },
  { title: "Cloud-Native Architecture",sub: "Distributed Systems · DevOps · Infrastructure",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 17C4.8 17 3 15.2 3 13C3 11 4.5 9.3 6.5 9.1C7.1 7 9 5.5 11.5 5.5C14.2 5.5 16.3 7.5 16.5 10.2C18.2 10.5 19.5 12 19.5 13.8C19.5 15.6 18 17 16.2 17H7Z" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.2"/></svg> },
];

export default function TechSlide() {
  return (
    <SlideWrapper id="slide-tech">
      <div className="stack stack-md" style={{ position: "relative", zIndex: 2, maxWidth: "1200px", width: "100%" }}>
        
        <div className="stack stack-xs">
          <motion.p className="t-label" variants={itemVariants}>03 / Technology We Offer</motion.p>
          <motion.h2 className="t-h2" variants={itemVariants} style={{ maxWidth: "640px" }}>
            Engineering Across<br />
            <em style={{ color: "var(--tx-3)" }}>Complex Digital Domains.</em>
          </motion.h2>
          <motion.p className="t-body" variants={itemVariants} style={{ maxWidth: "540px" }}>
            Six core engineering domains — each handled by senior specialists embedded within
            one unified team structure.
          </motion.p>
        </div>

        <div className="grid-auto">
          {caps.map((cap, i) => (
            <motion.div key={i} variants={itemVariants} className="card stack stack-xs"
              whileHover={{ backgroundColor: "var(--surface-2)" }}>
              <div style={{ paddingBottom: "0.2rem" }}>{cap.icon}</div>
              <div>
                <h3 className="t-h4" style={{ marginBottom: "0.2rem" }}>{cap.title}</h3>
                <p className="t-mono">{cap.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideWrapper>
  );
}
