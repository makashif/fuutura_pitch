"use client";

import { motion } from "framer-motion";

interface PdfExportOverlayProps {
  isExporting: boolean;
  progress: number;
  total: number;
}

export default function PdfExportOverlay({ isExporting, progress, total }: PdfExportOverlayProps) {
  if (!isExporting) return null;

  const percentage = Math.round((progress / total) * 100) || 0;

  return (
    <div
      className="no-print"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(7, 7, 7, 0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="stack"
        style={{
          background: "rgba(20, 20, 20, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "2rem 3rem",
          borderRadius: "8px",
          alignItems: "center",
          gap: "1.5rem",
          minWidth: "320px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <div className="t-h4" style={{ color: "#f2f2f2", fontWeight: 500 }}>
          Exporting PDF...
        </div>

        <div style={{ width: "100%", background: "rgba(255, 255, 255, 0.1)", height: "4px", borderRadius: "2px", overflow: "hidden" }}>
          <motion.div
            style={{
              height: "100%",
              background: "#e4e4e7",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          />
        </div>

        <div className="t-mono" style={{ fontSize: "0.75rem", color: "var(--tx-3)" }}>
          Slide {progress} / {total}
        </div>
      </motion.div>
    </div>
  );
}
