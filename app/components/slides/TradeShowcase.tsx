"use client";

import ProductShowcase from "../ProductShowcase";
import { ScreenSet } from "../Mockups";

/* ── 19 — Fuutura Trade ───────────────────────────────────── */

const FEATURES = [
  {
    icon: "chart" as const,
    title: "A full terminal, not a widget",
    body: "Markets, watchlist, order ticket, live chart, open positions and account health on one surface.",
  },
  {
    icon: "layers" as const,
    title: "Every order type that matters",
    body: "Market and limit entries, with stop-loss and take-profit attached at the point of execution.",
  },
  {
    icon: "scales" as const,
    title: "Bilateral price contracts",
    body: "Every position faces Fuutura directly. There are no shares to source and no inventory to fund.",
  },
  {
    icon: "cubes" as const,
    title: "Leverage earned by tier",
    body: "Entitlements advance on a demonstrated ladder rather than unlocking at signup.",
  },
];

export default function TradeShowcase() {
  return (
    <ProductShowcase
      id="slide-trade"
      folio="15"
      eyebrow="Fuutura Trade"
      title="A licensed, non-custodial synthetic exchange"
      lead="Compliant, on-chain-settled exposure to the world's assets — built specifically for the markets the incumbent rails do not reach."
      tagline="No shares to source, no client assets to hold"
      icon="chart"
      tone="dark"
      variant="wide"
      shotBasis="55%"
      pills={["40,000+ instruments", "External pricing", "On-chain settlement"]}
      mockup={
        <ScreenSet
          type="desktop"
          screens={[
            { src: "/images/screens/trade/trade_s2.jpg", alt: "Fuutura Trade charting" },
            { src: "/images/screens/trade/trade_s3.jpg", alt: "Fuutura Trade terminal" }
          ]}
        />
      }
      features={FEATURES}
    />
  );
}
