"use client";

import Sheet from "../Sheet";
import { ScreenSet } from "../Mockups";
import { Reveal, ClosingLine, ProductPanel } from "../Primitives";

/* ── Fuutura VPN ──────────────────────────
   Dedicated slide for VPN with 3 screens.
───────────────────────────────────────────────────────────── */

const VPN_ITEMS = [
  {
    icon: "globe" as const,
    title: "Global server estate",
    body: "Live throughput and location choice, surfaced before the client commits.",
  },
  {
    icon: "shield" as const,
    title: "Never outsourced",
    body: "Encrypted transport is Fuutura's own, so privacy is not delegated to a third party.",
  },
  {
    icon: "users" as const,
    title: "Built for hard markets",
    body: "Most useful exactly where network surveillance is the norm.",
  },
];

const SCREENS = [
  { src: "/images/screens/vpn/vpn_s3.jpg", alt: "VPN connect" },
  { src: "/images/screens/vpn/vpn_s5.jpg", alt: "VPN location" },
  { src: "/images/screens/vpn/vpn_s6.jpg", alt: "VPN speed" },
];

export default function VpnSlide() {
  return (
    <Sheet
      id="slide-vpn"
      folio="16"
      eyebrow="Fuutura VPN"
      title="Privacy as infrastructure"
      lead="A person's digital life does not stop at their balance. Encrypted transport is built natively to close a gap that would otherwise force a verified client outside the perimeter."
    >
      <div className="split">
        <ProductPanel
          icon="vpn"
          tone="peri"
          name="Fuutura VPN"
          tagline="Native, not bolted on"
          items={VPN_ITEMS}
        />

        <Reveal>
          <ScreenSet type="phone" screens={SCREENS} />
        </Reveal>
      </div>

      <ClosingLine>
        This product is not a diversification — it's an infrastructure layer that protects the identity and assets built on top of it.
      </ClosingLine>
    </Sheet>
  );
}
