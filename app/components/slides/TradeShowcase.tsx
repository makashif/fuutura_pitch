"use client";

import ProductShowcase from "../ProductShowcase";
import { BrowserMockup } from "../Mockups";

/* ── 19 — Fuutura Trade ────────────────────────────────────── */

const FEATURES = [
  {
    title: "A full terminal, not a widget",
    body: "Markets, watchlist, order ticket, live chart, open positions and account health on one surface.",
  },
  {
    title: "Every order type that matters",
    body: "Market and limit entries, with stop-loss and take-profit attached at the point of execution.",
  },
  {
    title: "Bilateral price contracts",
    body: "Every position faces Fuutura directly. There are no shares to source and no inventory to fund.",
  },
  {
    title: "Leverage earned by tier",
    body: "Entitlements advance on a demonstrated ladder rather than unlocking at signup.",
  },
];

export default function TradeShowcase() {
  return (
    <ProductShowcase
      id="slide-trade"
      folio="19"
      field="white"
      product="trade"
      variant="wide"
      eyebrow="Fuutura Trade"
      title={"A licensed,\nnon-custodial\nsynthetic exchange"}
      lead="Compliant, on-chain-settled exposure to the world's assets — built specifically for the markets the incumbent rails do not reach."
      pills={[
        "40,000+ instruments",
        "External reference pricing",
        "No client assets held",
        "On-chain settlement",
      ]}
      mockup={
        <BrowserMockup
          src="/images/screens/trade/trade_s3.jpg"
          alt="Fuutura Trade terminal — markets, order ticket, chart and positions"
          url="trade.fuutura.com"
          w={1440}
          h={964}
        />
      }
      features={FEATURES}
      footnote="No shares to source, and no client assets to hold. Every position faces Fuutura, priced off a reference Fuutura cannot touch."
    />
  );
}
