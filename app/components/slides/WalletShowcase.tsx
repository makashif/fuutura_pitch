"use client";

import ProductShowcase from "../ProductShowcase";
import { BrowserMockup } from "../Mockups";

/* ── 13 — Fuutura Wallet ───────────────────────────────────── */

const FEATURES = [
  {
    title: "Non-custodial by construction",
    body: "The client wallet holds the balance. A position contract holds only the collateral committed to it — never the balance itself.",
  },
  {
    title: "One view of everything held",
    body: "Balance, tokens, activity and alerts on a single surface, with trade and swap one action away.",
  },
  {
    title: "Program-controlled collateral",
    body: "Rules-based and on-chain. Fuutura cannot move client funds outside the logic both sides agreed to.",
  },
  {
    title: "Gasless and account-abstracted",
    body: "Built for people whose first wallet this is: no seed-phrase ceremony, no gas token to acquire first.",
  },
];

export default function WalletShowcase() {
  return (
    <ProductShowcase
      id="slide-wallet"
      folio="13"
      field="ivory"
      product="wallet"
      variant="wide"
      eyebrow="Fuutura Wallet"
      title={"Client keys,\nclient control"}
      lead="Custody is not a feature bolted onto a compliant platform. It is the starting assumption — the client holds the keys, and everything else is built around that fact."
      pills={[
        "Multi-chain",
        "Crypto & fiat",
        "Self-custodial",
        "Compliance built in",
        "Fuutura IQ",
      ]}
      mockup={
        <BrowserMockup
          src="/images/screens/wallet/wallet_s1.jpg"
          alt="Fuutura Wallet — balance, token holdings and exchange"
          url="wallet.fuutura.com"
          w={1440}
          h={796}
        />
      }
      features={FEATURES}
      footnote="Everything a client holds sits in one clear view, with trade one tap away — and with the keys never leaving their possession."
    />
  );
}
