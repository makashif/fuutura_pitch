"use client";

import Sheet from "../Sheet";
import { Reveal, SubLabel, FeatureCard } from "../Primitives";

/* ── 14 — Settlement & Chain ───────────────────────────────────
   The settlement story on one page: what runs today, what is in
   build, and what the substrate unlocks. Deliberately honest
   about sequencing — the proven public rails are the claim, and
   FuuturaChain is the roadmap.
───────────────────────────────────────────────────────────── */

const TODAY = [
  {
    icon: "link" as const,
    title: "On-chain settlement",
    body: "Position contracts settle on an established public L2 (Base / Arbitrum / BNB-class), not a private ledger.",
    tint: "blush" as const,
  },
  {
    icon: "coins" as const,
    title: "Stable, transparent",
    body: "USDT settlement throughout — no operator-issued token stands in for value anywhere in the stack.",
    tint: "sand" as const,
  },
];

const BUILDING = [
  {
    icon: "shield" as const,
    title: "Compliance-ready contracts",
    body: "Identity and eligibility enforced at the contract layer rather than at the interface.",
    tint: "blush" as const,
  },
  {
    icon: "exchange" as const,
    title: "Interchain bridges",
    body: "Movement between networks without leaving the compliance perimeter.",
    tint: "sand" as const,
  },
  {
    icon: "spark" as const,
    title: "High-throughput capacity",
    body: "Sized for institutional volume, where gas spikes and slow confirmation are disqualifying.",
    tint: "sage" as const,
  },
];

const UNLOCKS = [
  {
    icon: "send" as const,
    title: "Instant cross-border transfer",
    body: "Remittance under 1%, settled on-chain rather than through correspondent banks.",
    tint: "sage" as const,
  },
  {
    icon: "shield" as const,
    title: "Compliance as a service",
    body: "Applications inherit enterprise-grade identity and screening instead of rebuilding it.",
    tint: "peri" as const,
  },
  {
    icon: "coins" as const,
    title: "On-chain rewards & loyalty",
    body: "Programmable incentives that settle natively, with no reconciliation layer.",
    tint: "blush" as const,
  },
  {
    icon: "puzzle" as const,
    title: "Embedded enterprise modules",
    body: "Partners compose the pieces they need and leave the rest, without bespoke integration.",
    tint: "sand" as const,
  },
];

export default function ChainSlide() {
  return (
    <Sheet
      id="slide-chain"
      folio="15"
      eyebrow="On-Chain Settlement"
      title="Built to grow on-chain"
      lead="General-purpose blockchains were not built for regulated finance — no identity layer, no compliance primitives, and gas that spikes when volume arrives. Fuutura settles on proven public rails today and builds the finance-specific layer deliberately: a chain for identity-connected real-world finance, not a general-purpose chain with finance on top."
    >
      <div className="split--even" style={{ width: "100%", alignItems: "start" }}>
        <div className="stack g-2" style={{ minWidth: 0 }}>
          <Reveal>
            <SubLabel>Today</SubLabel>
          </Reveal>
          <div className="grid-2 grid-fill" style={{ width: "100%" }}>
            {TODAY.map((t) => (
              <Reveal key={t.title}>
                <FeatureCard
                  icon={t.icon}
                  title={t.title}
                  body={t.body}
                  tint={t.tint}
                  sansTitle
                  split
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="stack g-2" style={{ minWidth: 0 }}>
          <Reveal>
            <SubLabel>In build — FuuturaChain</SubLabel>
          </Reveal>
          <div className="grid-3 grid-fill" style={{ width: "100%" }}>
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
        </div>
      </div>

      <Reveal>
        <SubLabel>What it unlocks</SubLabel>
      </Reveal>

      <div className="grid-4 grid-fill" style={{ width: "100%" }}>
        {UNLOCKS.map((u) => (
          <Reveal key={u.title}>
            <FeatureCard
              icon={u.icon}
              title={u.title}
              body={u.body}
              tint={u.tint}
              sansTitle
              split
            />
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
