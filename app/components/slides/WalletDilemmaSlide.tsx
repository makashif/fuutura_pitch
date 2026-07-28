"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, CompareColumns } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   14 — The Wallet Dilemma

   Self-custody and compliance have historically been treated as
   opposites. The whole argument of this page is that they aren't.
───────────────────────────────────────────────────────────── */

const ROWS = [
  { left: "Anonymous, and so non-compliant", right: "Self-custodial and compliant at once" },
  { left: "Restricted by regulators", right: "Built to be regulator-friendly" },
  { left: "Limited payment options", right: "A complete payment ecosystem" },
  { left: "No identity verification", right: "Fuutura ID verification built in" },
  { left: "Seed phrases and gas tokens", right: "Gasless, account-abstracted UX" },
  { left: "No rewards integration", right: "Configurable rewards for enterprises" },
];

export default function WalletDilemmaSlide() {
  return (
    <SplitSlide
      id="slide-wallet-dilemma"
      folio="14"
      field="white"
      eyebrow="The Wallet Dilemma"
      title={"Self-custody\nor compliance.\nNot both."}
      lead="That has been the accepted trade-off for a decade — and it is the reason compliant finance and self-custodial finance grew up as separate worlds."
      body={[
        "Fuutura is built on the premise that the trade-off was an artefact of architecture, not a law of nature.",
      ]}
    >
      <Reveal>
        <CompareColumns
          leftTitle="Traditional wallets"
          rightTitle="The Fuutura Wallet"
          rows={ROWS}
        />
      </Reveal>

      {/* Fuutura IQ — the capability with no counterpart on the left */}
      <Reveal>
        <div className="card card--blue row ai-c jc-b wrap g-3">
          <div className="stack g-1">
            <span className="t-label" style={{ color: "#fff" }}>
              Fuutura IQ
            </span>
            <span className="t-sm" style={{ color: "var(--rev-2)" }}>
              An AI layer that executes any in-wallet action on instruction —
              the column on the left has no equivalent.
            </span>
          </div>
          <span className="pill pill--rev">Natively in-wallet</span>
        </div>
      </Reveal>
    </SplitSlide>
  );
}
