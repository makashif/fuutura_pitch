"use client";

import Sheet from "../Sheet";
import { Reveal, FeatureCard, SubLabel } from "../Primitives";

/* ── 27 — What the Infrastructure Unlocks ─────────────────── */

const ENABLED = [
  {
    icon: "cubes" as const,
    title: "Fractional tokenisation",
    body: "Equities and property divided down to amounts a first-time investor can actually hold.",
    tint: "sand" as const,
  },
  {
    icon: "send" as const,
    title: "Instant cross-border transfer",
    body: "Remittance under 1%, settled on-chain rather than through correspondent banks.",
    tint: "sage" as const,
  },
  {
    icon: "shield" as const,
    title: "Compliance as a service",
    body: "Fintech applications inherit enterprise-grade identity and screening instead of rebuilding it.",
    tint: "peri" as const,
  },
  {
    icon: "coins" as const,
    title: "On-chain rewards & loyalty",
    body: "Programmable incentives that settle natively, with no separate reconciliation layer.",
    tint: "blush" as const,
  },
  {
    icon: "puzzle" as const,
    title: "Embedded enterprise modules",
    body: "Partners compose the pieces they need and leave the rest, without bespoke integration.",
    tint: "peri" as const,
  },
  {
    icon: "chart" as const,
    title: "Low-cost exchange settlement",
    body: "Venues settle trades at a fraction of conventional clearing cost.",
    tint: "sand" as const,
  },
];

export default function ChainEnablesSlide() {
  return (
    <Sheet
      id="slide-chain-enables"
      folio="21"
      eyebrow="Settlement & Chain · What It Unlocks"
      title="What it unlocks"
      lead="The value of an identity-connected settlement layer is not the ledger itself. It is what stops being hard once identity, custody and settlement share one substrate."
    >
      <div className="grid-3 grid-fill" style={{ width: "100%" }}>
        {ENABLED.map((e) => (
          <Reveal key={e.title}>
            <FeatureCard
              icon={e.icon}
              title={e.title}
              body={e.body}
              tint={e.tint}
              sansTitle
              split
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="card card--dark">
          <SubLabel>The distinction that matters</SubLabel>
          <p className="t-serif" style={{ maxWidth: "84ch" }}>
            A chain built specifically for identity-connected, real-world finance
            — not a general-purpose blockchain with finance built on top.
          </p>
        </div>
      </Reveal>
    </Sheet>
  );
}
