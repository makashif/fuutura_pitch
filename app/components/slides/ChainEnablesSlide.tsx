"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, FeatureCard } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   27 — What the Chain Layer Enables
───────────────────────────────────────────────────────────── */

const ENABLED = [
  {
    title: "Fractional tokenisation",
    body: "Equities and property divided down to amounts a first-time investor can actually hold.",
  },
  {
    title: "Instant cross-border transfer",
    body: "Remittance under 1%, settled on-chain rather than through correspondent banks.",
  },
  {
    title: "Compliance as a service",
    body: "Fintech applications inherit enterprise-grade identity and screening instead of rebuilding it.",
  },
  {
    title: "On-chain rewards & loyalty",
    body: "Programmable incentives that settle natively, with no separate reconciliation layer.",
  },
  {
    title: "Embedded enterprise modules",
    body: "Partners compose the pieces they need and leave the rest, without bespoke integration.",
  },
  {
    title: "Low-cost exchange settlement",
    body: "Venues settle trades at a fraction of conventional clearing cost.",
  },
];

export default function ChainEnablesSlide() {
  return (
    <SplitSlide
      id="slide-chain-enables"
      folio="27"
      field="ivory"
      eyebrow="Capability"
      title={"What it\nunlocks"}
      lead="The value of an identity-connected settlement layer is not the ledger itself. It is what stops being hard once identity, custody and settlement share one substrate."
    >
      <div className="cols-3 g-2" style={{ width: "100%" }}>
        {ENABLED.map((e) => (
          <Reveal key={e.title}>
            <FeatureCard title={e.title} body={e.body} variant="white" />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="card card--blue stack g-2">
          <span className="t-label" style={{ color: "#fff" }}>
            The distinction that matters
          </span>
          <span className="t-body" style={{ color: "var(--rev-1)", fontWeight: 500 }}>
            A chain built specifically for identity-connected, real-world
            finance — not a general-purpose blockchain with finance built on top.
          </span>
        </div>
      </Reveal>
    </SplitSlide>
  );
}
