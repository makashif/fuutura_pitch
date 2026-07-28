"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, Stat, RuledList } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   17 — Global Card & Rewards

   The slide that closes the loop: value earned inside the
   ecosystem has to be spendable outside it, or the ecosystem is
   a holding pen rather than a financial life.
───────────────────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    term: "Spend anywhere Visa is accepted",
    desc: "A card against the same verified identity, usable at more than 80 million merchants.",
  },
  {
    term: "Conversion at the point of sale",
    desc: "Crypto settles to fiat as the transaction clears — no pre-funding, no separate off-ramp.",
  },
  {
    term: "Cash access worldwide",
    desc: "ATM withdrawal in local currency, which is what actually matters in a cash economy.",
  },
  {
    term: "Tiered membership",
    desc: "Rewards tiers progress with activity, and partners can configure their own programmes on the same rails.",
  },
];

export default function CardRewardsSlide() {
  return (
    <SplitSlide
      id="slide-card"
      folio="17"
      field="white"
      eyebrow="Card & Rewards"
      title={"Earned here.\nSpent anywhere."}
      lead="An ecosystem that cannot pay for groceries is an investment account, not a financial life. The card is what makes the rest of it usable."
      body={[
        "It also closes the arc: a verified user earns, invests, watches a portfolio grow, collects rewards, and spends the returns — without leaving the perimeter or re-proving who they are.",
      ]}
      footnote="Rewards accrue in $FTRA; settlement across the platform remains in USDT. The two are deliberately separate — see the following pages."
    >
      <Reveal>
        <div className="cols-3 ruled-cols" style={{ width: "100%" }}>
          <Stat value="80M+" label="Merchants" tone="blue" />
          <Stat value="Instant" label="Crypto to fiat" small />
          <Stat value="Global" label="ATM access" small />
        </div>
      </Reveal>

      <Reveal>
        <span className="rule-h rule-h--mid" />
      </Reveal>

      <Reveal>
        <RuledList items={CAPABILITIES} numbered />
      </Reveal>
    </SplitSlide>
  );
}
