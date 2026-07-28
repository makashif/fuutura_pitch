"use client";

import Sheet from "../Sheet";
import { Reveal, Stat, IconList, ClosingLine } from "../Primitives";

/* ── 17 — Global Card & Rewards ───────────────────────────── */

const CAPABILITIES = [
  {
    icon: "card" as const,
    title: "Spend anywhere Visa is accepted",
    body: "A card against the same verified identity, usable at more than 80 million merchants.",
  },
  {
    icon: "exchange" as const,
    title: "Conversion at the point of sale",
    body: "Crypto settles to fiat as the transaction clears — no pre-funding, no separate off-ramp.",
  },
  {
    icon: "coins" as const,
    title: "Cash access worldwide",
    body: "ATM withdrawal in local currency, which is what actually matters in a cash economy.",
  },
  {
    icon: "layers" as const,
    title: "Tiered membership",
    body: "Rewards tiers progress with activity, and partners can configure their own programmes on the same rails.",
  },
];

export default function CardRewardsSlide() {
  return (
    <Sheet
      id="slide-card"
      folio="14"
      eyebrow="Fuutura Wallet · Card & Rewards"
      title="Earned here. Spent anywhere."
      lead="An ecosystem that cannot pay for groceries is an investment account, not a financial life. The card is what makes the rest of it usable."
    >
      <div className="split" style={{ width: "100%", flex: 1, minHeight: 0 }}>
        <div className="stack g-4">
          <Reveal>
            <Stat value="80M+" label="Merchants" />
          </Reveal>
          <Reveal>
            <Stat value="Instant" label="Crypto to fiat" small />
          </Reveal>
          <Reveal>
            <Stat value="Global" label="ATM access" small />
          </Reveal>
        </div>

        <IconList items={CAPABILITIES} tone="sand" />
      </div>

      <ClosingLine>
        It also closes the arc: a verified user earns, invests, watches a
        portfolio grow, collects rewards and spends the returns — without leaving
        the perimeter or re-proving who they are. Rewards accrue in $FTRA;
        settlement across the platform remains in USDT.
      </ClosingLine>
    </Sheet>
  );
}
