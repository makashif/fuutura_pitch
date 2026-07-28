"use client";

import ProductShowcase from "../ProductShowcase";
import { ExtensionMockup } from "../Mockups";

/* ── 15 — Fuutura Extension ────────────────────────────────── */

const FEATURES = [
  {
    title: "Keys stay with the client",
    body: "Institutional-grade key management, with explicit signing and approval flows on every transaction.",
  },
  {
    title: "Parity with the main app",
    body: "The same accounts, balances and networks as the web wallet — one identity, not a second setup.",
  },
  {
    title: "Native browser fluency",
    body: "Modelled on the extension conventions people already use, so nothing has to be relearned.",
  },
  {
    title: "Connects the ecosystem",
    body: "Authenticates straight into Fuutura Trade and partner venues without a separate wallet.",
  },
];

export default function ExtensionShowcase() {
  return (
    <ProductShowcase
      id="slide-extension"
      folio="15"
      field="white"
      product="extension"
      variant="tall"
      eyebrow="Fuutura Extension"
      title={"The wallet, where\nthe web is"}
      lead="Self-custody only works if it is present at the moment of use. The extension puts the same keys and the same compliance perimeter into the browser, beside whatever the client is already doing."
      pills={[
        "Non-custodial",
        "Multi-chain EVM",
        "Full ecosystem parity",
        "Explicit transaction signing",
      ]}
      mockup={
        <ExtensionMockup
          src="/images/screens/extension/extension_s3.jpg"
          alt="Fuutura Extension popup — balance, actions and token holdings"
        />
      }
      features={FEATURES}
      footnote="The same wallet in a second place, not a second wallet — which is the difference between self-custody people adopt and self-custody people abandon."
    />
  );
}
