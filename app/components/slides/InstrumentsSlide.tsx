"use client";

import Sheet from "../Sheet";
import { Reveal, Stat, FeatureCard, ClosingLine } from "../Primitives";

/* ── 21 — The Instrument Universe ─────────────────────────── */

const CLASSES = [
  {
    icon: "coins" as const,
    title: "Cryptocurrency",
    body: "Majors and liquid alts, spot and leveraged.",
    tint: "sage" as const,
  },
  {
    icon: "chart" as const,
    title: "Global equities",
    body: "Single names across developed and emerging listings.",
    tint: "peri" as const,
  },
  {
    icon: "layers" as const,
    title: "Indices",
    body: "Broad-market exposure as a single position.",
    tint: "sand" as const,
  },
  {
    icon: "exchange" as const,
    title: "Foreign exchange",
    body: "Major and cross pairs, continuously priced.",
    tint: "blush" as const,
  },
  {
    icon: "cubes" as const,
    title: "Commodities",
    body: "Metals, energy and agricultural benchmarks.",
    tint: "peri" as const,
  },
  {
    icon: "globe" as const,
    title: "Tokenised real-world assets",
    body: "Real estate and RWAs, fractionally held.",
    tint: "dark" as const,
  },
];

const CAPABILITIES = [
  "Fractional ownership",
  "24/7 tokenised trading",
  "Real-time settlement",
  "Staking",
  "Integrated wallet",
  "Earned leverage tiers",
];

export default function InstrumentsSlide() {
  return (
    <Sheet
      id="slide-instruments"
      folio="06"
      eyebrow="Fuutura Trade · Instrument Universe"
      title="One account. The world's asset classes."
      lead="Access is the point. A client in an underserved market should be able to hold global exposure from the same account that holds their local balance."
    >
      <Reveal>
        <div className="grid-3 ruled-cols" style={{ width: "100%", maxWidth: "56rem" }}>
          <Stat value="40,000+" label="Tradable instruments" />
          <Stat value="Fractional" label="Minimum position" small />
          <Stat value="24 / 7" label="Tokenised market hours" small />
        </div>
      </Reveal>

      <div className="grid-3 grid-fill" style={{ width: "100%" }}>
        {CLASSES.map((c) => (
          <Reveal key={c.title}>
            <FeatureCard
              icon={c.icon}
              title={c.title}
              body={c.body}
              tint={c.tint}
              split
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="row g-2 wrap">
          {CAPABILITIES.map((c) => (
            <span key={c} className="pill">
              {c}
            </span>
          ))}
        </div>
      </Reveal>

      <ClosingLine>
        Access with small amounts, priced off external references, with leverage
        earned tier by tier rather than granted at entry.
      </ClosingLine>
    </Sheet>
  );
}
