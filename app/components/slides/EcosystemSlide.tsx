"use client";

import Sheet from "../Sheet";
import { Reveal, FeatureCard, SubLabel } from "../Primitives";
import { IconName } from "../Icon";
import { Tint } from "../Primitives";

/* ── 05 — The Ecosystem ────────────────────────────────────────
   Seven products, one verified identity, one settlement substrate.
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
      icon: "briefcase",
      title: "Fuutura PRO",
      body: "The rails offered as infrastructure — embeddable identity, custody and market access for partner channels.",
      tint: "blush",
    },
    {
      icon: "vpn",
      title: "Fuutura VPN",
      body: "Encrypted transport as native infrastructure, so privacy is never outsourced to a third party.",
      tint: "peri",
    },
    {
      icon: "chat",
      title: "Fuutura Chat",
      body: "Identity-verified messaging, so the person you transact with is the person you are speaking to.",
      tint: "sage",
    },
    {
      icon: "link",
      title: "On-Chain Settlement",
      body: "Position contracts settle on an established public L2, with USDT throughout — no operator token stands in for value.",
      tint: "sand",
    },
  ];

export default function EcosystemSlide() {
  return (
    <Sheet
      id="slide-ecosystem"
      folio="04"
      eyebrow="The Fuutura Ecosystem"
      title="Seven products. One compliance layer."
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
