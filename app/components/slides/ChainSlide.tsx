"use client";

import Sheet from "../Sheet";
import { Reveal, SubLabel, FeatureCard } from "../Primitives";

/* ── 26 — Settlement & Chain ───────────────────────────────────
   Deliberately honest about sequencing: settlement runs on
   established public infrastructure today, and Fuutura's own
   chain layer is the roadmap rather than the claim.
───────────────────────────────────────────────────────────── */

const TODAY = [
  {
    icon: "link" as const,
    title: "On-chain settlement",
    body: "Position contracts settle on an established public L2 (Base / Arbitrum / BNB-class) — proven infrastructure, not a private ledger.",
  },
  {
    icon: "coins" as const,
    title: "Stable, transparent",
    body: "USDT settlement throughout — no operator-issued token stands in for value anywhere in the stack.",
  },
  {
    icon: "layers" as const,
    title: "Modular seven-layer stack",
    body: "Identity, quoting, risk, oracle, settlement and treasury — each layer built to plug in partners.",
  },
];

const BUILDING = [
  {
    icon: "shield" as const,
    title: "Compliance-ready contracts",
    body: "Identity and eligibility enforced at the contract layer rather than at the interface.",
  },
  {
    icon: "cubes" as const,
    title: "Tokenisation engine",
    body: "The machinery for issuing and servicing tokenised real-world assets.",
  },
  {
    icon: "exchange" as const,
    title: "Interchain bridges",
    body: "Movement between networks without leaving the compliance perimeter.",
  },
  {
    icon: "spark" as const,
    title: "High-throughput capacity",
    body: "Sized for institutional volume, where gas spikes and slow confirmation are disqualifying.",
  },
];

export default function ChainSlide() {
  return (
    <Sheet
      id="slide-chain"
      folio="18"
      eyebrow="Settlement & Chain"
      title="Built to grow on-chain"
      lead="General-purpose blockchains were not designed for regulated finance: no identity layer, no compliance primitives, and gas costs that spike exactly when volume arrives. So Fuutura settles on proven public rails now, and builds the finance-specific layer deliberately."
    >
      <Reveal>
        <SubLabel>Today</SubLabel>
      </Reveal>

      <div className="grid-3" style={{ width: "100%" }}>
        {TODAY.map((t) => (
          <Reveal key={t.title}>
            <FeatureCard
              icon={t.icon}
              title={t.title}
              body={t.body}
              tint="peri"
              sansTitle
              split
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SubLabel>In build — FuuturaChain, the finance-specific layer</SubLabel>
      </Reveal>

      <div className="grid-4 grid-fill" style={{ width: "100%" }}>
        {BUILDING.map((b) => (
          <Reveal key={b.title}>
            <FeatureCard
              icon={b.icon}
              title={b.title}
              body={b.body}
              tint="paper"
              sansTitle
              split
            />
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
