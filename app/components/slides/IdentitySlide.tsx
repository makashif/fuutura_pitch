"use client";

import Sheet from "../Sheet";
import { ProductPanel, ClosingLine } from "../Primitives";

/* ── 08 — The Access Standard ──────────────────────────────────
   The reference's two-panel page: a tinted badge heads each
   panel, then a ruled list of capabilities beneath.
───────────────────────────────────────────────────────────── */

const CLASSIFICATION = [
  {
    icon: "scales" as const,
    title: "Three-axis engine",
    body: "Jurisdiction, capability and qualification — each client is classified, not merely approved.",
  },
  {
    icon: "doc" as const,
    title: "Precise, not binary",
    body: "Entitlements can be granted to the exact edge of what a client is eligible for, rather than all or nothing.",
  },
  {
    icon: "globe" as const,
    title: "Jurisdiction-aware by default",
    body: "The rulebook that applies is resolved at onboarding and re-checked as the client's circumstances change.",
  },
];

const PROGRESSION = [
  {
    icon: "layers" as const,
    title: "Leverage is earned",
    body: "Entitlements progress on an earned ladder — never granted at entry, never token-gated.",
  },
  {
    icon: "cap" as const,
    title: "Fuutura Knowledge",
    body: "A free education-and-simulation academy that doubles as the appropriateness on-ramp.",
  },
  {
    icon: "handshake" as const,
    title: "Own tech, specialist partners",
    body: "KYC is Fuutura's own technology; KYB, sanctions and on-chain monitoring run through best-in-class vendors.",
  },
];

export default function IdentitySlide() {
  return (
    <Sheet
      id="slide-identity"
      folio="06"
      eyebrow="Fuutura ID · The Access Standard"
      title="The trust layer, built as native technology"
      lead="Compliance is not bolted on. Identity is the first piece of Fuutura infrastructure, and every other product reads from it."
    >
      <div className="grid-2" style={{ width: "100%", flex: 1, minHeight: 0 }}>
        <ProductPanel
          icon="fingerprint"
          tone="sage"
          name="Classification"
          tagline="Who a client is, resolved precisely"
          items={CLASSIFICATION}
        />
        <ProductPanel
          icon="layers"
          tone="blush"
          name="Progression"
          tagline="What a client may do, earned over time"
          items={PROGRESSION}
        />
      </div>

      <ClosingLine>
        One verified identity is the reason the ecosystem compounds: access proved
        once is access that carries across custody, markets and payments.
      </ClosingLine>
    </Sheet>
  );
}
