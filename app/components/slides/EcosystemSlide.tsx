"use client";

import Sheet from "../Sheet";
import { Reveal, FeatureCard, SubLabel } from "../Primitives";
import { IconName } from "../Icon";
import { Tint } from "../Primitives";

/* ── 04 — The Ecosystem ────────────────────────────────────────
   The product family over one compliance layer and one settlement
   substrate. Compliance is the framing here, not identity — the
   identity mechanics belong on the Fuutura ID pages.
───────────────────────────────────────────────────────────── */

const PRODUCTS: {
  icon: IconName;
  title: string;
  body: string;
  tint: Tint;
}[] = [
    {
      icon: "chart",
      title: "Fuutura Trade",
      body: "A licensed, non-custodial synthetic exchange reaching a universe of markets, from crypto to tokenised real-world assets.",
      tint: "dark",
    },
    {
      icon: "fingerprint",
      title: "Fuutura ID",
      body: "One verification, classified by jurisdiction, capability and qualification — then reusable across everything else.",
      tint: "sage",
    },
    {
      icon: "briefcase",
      title: "Fuutura PRO",
      body: "The rails offered as infrastructure — embeddable identity, custody and market access for partner channels.",
      tint: "blush",
    },
    {
      icon: "wallet",
      title: "Fuutura Wallet",
      body: "Client-held keys, always. Crypto and fiat in one place, with compliance built in rather than bolted on.",
      tint: "peri",
    },
    {
      icon: "puzzle",
      title: "Fuutura Extension",
      body: "The same wallet and the same perimeter, in the browser — self-custody present at the moment of use.",
      tint: "sand",
    },
    {
      icon: "link",
      title: "On-Chain Settlement",
      body: "Position contracts settle on an established public L2, with USDT throughout — no operator token stands in for value.",
      tint: "peri",
    },
    {
      icon: "coins",
      title: "$FTRA",
      body: "The ecosystem token — accrued on real activity, and the unit partners configure their own rewards programmes in.",
      tint: "sage",
    },
  ];

export default function EcosystemSlide() {
  return (
    <Sheet
      id="slide-ecosystem"
      folio="04"
      eyebrow="The Fuutura Ecosystem"
      title="Unified ecosystem for digital finance"
      lead="Each product is useful on its own. Together they compound — because identity acts as the underlying compliance infrastructure, opening access across the entire ecosystem without friction."
    >
      <Reveal>
        <SubLabel>The product family, and the substrate beneath it</SubLabel>
      </Reveal>

      <div className="grid-4 grid-fill" style={{ width: "100%" }}>
        {PRODUCTS.map((p) => (
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
