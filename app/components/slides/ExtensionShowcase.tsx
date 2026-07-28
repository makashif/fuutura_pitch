"use client";

import ProductShowcase from "../ProductShowcase";
import { ExtensionMockup } from "../Mockups";

/* ── 15 — Fuutura Extension ───────────────────────────────── */

const FEATURES = [
  {
    icon: "lock" as const,
    title: "Keys stay with the client",
    body: "Institutional-grade key management, with explicit signing and approval flows on every transaction.",
  },
  {
    icon: "layers" as const,
    title: "Parity with the main app",
    body: "The same accounts, balances and networks as the web wallet — one identity, not a second setup.",
  },
  {
    icon: "puzzle" as const,
    title: "Native browser fluency",
    body: "Modelled on the extension conventions people already use, so nothing has to be relearned.",
  },
  {
    icon: "link" as const,
    title: "Connects the ecosystem",
    body: "Authenticates straight into Fuutura Trade and partner venues without a separate wallet.",
  },
];

export default function ExtensionShowcase() {
  return (
    <ProductShowcase
      id="slide-extension"
      folio="12"
      eyebrow="Fuutura Extension"
      title="The wallet, where the web is"
      lead="Self-custody only works if it is present at the moment of use. The extension puts the same keys and the same compliance perimeter into the browser, beside whatever the client is already doing."
      tagline="The same wallet in a second place, not a second wallet"
      icon="puzzle"
      tone="sand"
      variant="tall"
      pills={["Non-custodial", "Multi-chain EVM", "Explicit signing"]}
      mockup={
        <ExtensionMockup
          src="/images/screens/extension/extension_s3.jpg"
          alt="Fuutura Extension popup — balance, actions and token holdings"
        />
      }
      features={FEATURES}
    />
  );
}
