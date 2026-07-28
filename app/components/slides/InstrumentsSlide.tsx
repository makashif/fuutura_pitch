"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, Stat } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   21 — The Instrument Universe
───────────────────────────────────────────────────────────── */

const CLASSES = [
  { name: "Cryptocurrency", desc: "Majors and liquid alts, spot and leveraged." },
  { name: "Global equities", desc: "Single names across developed and emerging listings." },
  { name: "Indices", desc: "Broad-market exposure as a single position." },
  { name: "Foreign exchange", desc: "Major and cross pairs, continuously priced." },
  { name: "Commodities", desc: "Metals, energy and agricultural benchmarks." },
  { name: "Tokenised real-world assets", desc: "Real estate and RWAs, fractionally held." },
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
    <SplitSlide
      id="slide-instruments"
      folio="21"
      field="ivory"
      eyebrow="Instrument Universe"
      title={"One account.\nThe world's\nasset classes."}
      lead="Access is the point. A client in an underserved market should be able to hold global exposure from the same account that holds their local balance."
      footnote="Access with small amounts, priced off external references, with leverage earned tier by tier rather than granted at entry."
    >
      <Reveal>
        <div className="cols-2 ruled-cols" style={{ width: "100%" }}>
          <Stat value="40,000+" label="Tradable instruments" tone="blue" />
          <Stat value="Fractional" label="Minimum position" note="Access without capital scale" small />
        </div>
      </Reveal>

      <Reveal>
        <span className="rule-h rule-h--mid" />
      </Reveal>

      {/* Asset classes */}
      <div className="cols-3 g-2" style={{ width: "100%" }}>
        {CLASSES.map((c) => (
          <Reveal key={c.name}>
            <div className="card card--white" style={{ height: "100%" }}>
              <h4 className="t-h5">{c.name}</h4>
              <p className="t-xs">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Platform capabilities */}
      <Reveal>
        <div className="row g-2 wrap">
          {CAPABILITIES.map((c) => (
            <span key={c} className="pill pill--outline">
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </SplitSlide>
  );
}
