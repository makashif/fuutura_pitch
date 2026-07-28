"use client";

import ProductShowcase from "../ProductShowcase";
import { ScreenSet } from "../Mockups";

/* ── 13 — Fuutura Wallet ──────────────────────────────────── */

const FEATURES = [
  {
    icon: "lock" as const,
    title: "Non-custodial by construction",
    body: "The client wallet holds the balance. A position contract holds only the collateral committed to it — never the balance itself.",
  },
  {
    icon: "layers" as const,
    title: "One view of everything held",
    body: "Balance, tokens, activity and alerts on a single surface, with trade and swap one action away.",
  },
  {
    icon: "userCheck" as const,
    title: "Program-controlled collateral",
    body: "Rules-based and on-chain. Fuutura cannot move client funds outside the logic both sides agreed to.",
  },
  {
    icon: "spark" as const,
    title: "Gasless and account-abstracted",
    body: "Built for people whose first wallet this is: no seed-phrase ceremony, no gas token to acquire first.",
  },
];

export default function WalletShowcase() {
  return (
    <ProductShowcase
      id="slide-wallet"
      folio="10"
      eyebrow="Fuutura Wallet"
      title="Client keys, client control"
      lead="Custody is not a feature bolted onto a compliant platform. It is the starting assumption — the client holds the keys, and everything else is built around that fact."
      tagline="Self-custodial and compliant at once"
      icon="wallet"
      tone="peri"
      variant="wide"
      pills={["Multi-chain", "Crypto & fiat", "Self-custodial", "Fuutura IQ"]}
      mockup={
        <ScreenSet
          type="desktop"
          screens={[
            { src: "/images/screens/wallet/wallet_s1.jpg", alt: "Fuutura Wallet dashboard" },
            { src: "/images/screens/wallet/wallet_s2.jpg", alt: "Fuutura Wallet swap interface" }
          ]}
        />
      }
      features={FEATURES}
    />
  );
}
