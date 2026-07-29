"use client";

import Sheet from "../Sheet";
import { Reveal, SubLabel, FeatureCard, FlowNode, Arrow } from "../Primitives";

/* ── 20 — Risk Architecture ────────────────────────────────────
   The reference's flow page: client books → matching core → the
   two residual controls, then the four governing principles.
───────────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    icon: "scales" as const,
    title: "No custody, no procurement",
    body: "Bilateral price contracts, not tokenised shares — nothing to source, nothing held on a client's behalf.",
    tint: "sand" as const,
  },
  {
    icon: "lock" as const,
    title: "Risk is bounded by design",
    body: "Every book carries its own hard cap; residual exposure is pre-funded, never socialised across clients.",
    tint: "sage" as const,
  },
  {
    icon: "chart" as const,
    title: "External, untouchable price",
    body: "Reference price comes from outside the venue — Fuutura's own quote is never an input.",
    tint: "blush" as const,
  },
  {
    icon: "cubes" as const,
    title: "A growing instrument menu",
    body: "Indices, single-name equities, FX and commodities — leverage earned tier by tier.",
    tint: "dark" as const,
  },
];

export default function RiskSlide() {
  return (
    <Sheet
      id="slide-risk"
      folio="06"
      eyebrow="Fuutura Trade · Risk Architecture"
      title="How a trade is risk-managed"
      lead="No shares to source, no client assets to hold — every position faces Fuutura, priced off a reference it cannot touch."
    >
      <Reveal>
        <SubLabel>How a trade is risk-managed</SubLabel>
      </Reveal>

      {/* The flow */}
      <Reveal>
        <div className="flow">
          <FlowNode title="Client longs" body="buy exposure vs Fuutura" />
          <FlowNode title="Client shorts" body="sell exposure vs Fuutura" />
          <Arrow />
          <FlowNode
            title="Internal matching core"
            body="longs offset shorts — delta cancels"
            tint="dark"
            grow={1.3}
          />
          <Arrow />
          <div className="stack g-2" style={{ flex: "1.2 1 0", minWidth: 0 }}>
            <FlowNode
              title="Hard imbalance caps"
              body="first-loss capital = cap × gap"
              tint="sand"
            />
            <FlowNode
              title="External hedge (net only)"
              body="fires only beyond a published band"
              tint="blush"
              rust
            />
          </div>
        </div>
      </Reveal>

      {/* Principles */}
      <div className="grid-4 grid-fill" style={{ width: "100%" }}>
        {PRINCIPLES.map((p) => (
          <Reveal key={p.title}>
            <FeatureCard
              icon={p.icon}
              title={p.title}
              body={p.body}
              tint={p.tint}
              split
            />
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
