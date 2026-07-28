"use client";

import Sheet from "../Sheet";
import { Reveal, CompareColumns, SubLabel, Badge } from "../Primitives";

/* ── 14 — The Wallet Dilemma ──────────────────────────────── */

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
    <Sheet
      id="slide-wallet-dilemma"
      folio="11"
      eyebrow="Fuutura Wallet · The Dilemma It Solves"
      title="Self-custody or compliance. Not both."
      lead="That has been the accepted trade-off for a decade — and it is why compliant finance and self-custodial finance grew up as separate worlds. Fuutura is built on the premise that the trade-off was an artefact of architecture, not a law of nature."
    >
      <Reveal>
        <CompareColumns
          leftTitle="Traditional wallets"
          rightTitle="The Fuutura Wallet"
          rows={ROWS}
        />
      </Reveal>

      <Reveal>
        <div className="card card--dark row ai-c g-3 wrap">
          <Badge icon="spark" tone="dark" size="lg" />
          <div className="stack g-1 flex-1" style={{ minWidth: "16rem" }}>
            <SubLabel>Fuutura IQ</SubLabel>
            <p className="t-body">
              An AI layer that executes any in-wallet action on instruction — the
              column on the left has no equivalent.
            </p>
          </div>
          <span className="pill pill--dark">Natively in-wallet</span>
        </div>
      </Reveal>
    </Sheet>
  );
}
