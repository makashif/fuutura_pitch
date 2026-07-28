"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, RuledList } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   20 — Settlement & Chain

   Deliberately honest about sequencing: settlement runs on
   established public infrastructure today, and Fuutura's own
   chain layer is the roadmap rather than the claim.
───────────────────────────────────────────────────────────── */

const TODAY = [
  {
    term: "Settlement on an established public L2",
    desc: "Position contracts settle on a Base / Arbitrum / BNB-class network — proven infrastructure, not a private ledger.",
  },
  {
    term: "USDT settlement throughout",
    desc: "No operator-issued token stands in for value anywhere in the stack.",
  },
  {
    term: "A modular seven-layer stack",
    desc: "Identity, quoting, risk, oracle, settlement and treasury — each layer built to plug in partners.",
  },
];

const BUILDING = [
  {
    term: "Compliance-ready smart contracts",
    desc: "Identity and eligibility enforced at the contract layer rather than at the interface.",
  },
  {
    term: "A tokenisation engine",
    desc: "The machinery for issuing and servicing tokenised real-world assets.",
  },
  {
    term: "Interchain bridges",
    desc: "Movement between networks without leaving the compliance perimeter.",
  },
  {
    term: "High-throughput capacity",
    desc: "Sized for institutional volume, where gas spikes and slow confirmation are disqualifying.",
  },
];

export default function ChainSlide() {
  return (
    <SplitSlide
      id="slide-chain"
      folio="20"
      field="white"
      eyebrow="Settlement & Chain"
      title={"Public rails\ntoday. Purpose-\nbuilt next."}
      lead="General-purpose blockchains were not designed for regulated finance: no identity layer, no compliance primitives, and gas costs that spike exactly when volume arrives."
      body={[
        "So Fuutura settles on proven public infrastructure now, and builds the finance-specific layer deliberately rather than announcing it early.",
      ]}
    >
      <Reveal>
        <div className="card card--ivory">
          <div className="row ai-c g-2">
            <span className="pill pill--blue">Today</span>
            <span className="t-xs">Live and settling</span>
          </div>
          <span className="rule-h" />
          <RuledList items={TODAY} />
        </div>
      </Reveal>

      <Reveal>
        <div className="card card--outline">
          <div className="row ai-c g-2">
            <span className="pill pill--outline">In build</span>
            <span className="t-xs">FuuturaChain — the finance-specific layer</span>
          </div>
          <span className="rule-h" />
          <RuledList items={BUILDING} />
        </div>
      </Reveal>
    </SplitSlide>
  );
}
