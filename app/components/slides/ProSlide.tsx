"use client";

import Sheet from "../Sheet";
import { Reveal, FeatureCard, Badge, ClosingLine } from "../Primitives";

/* ── 24 — Fuutura PRO ──────────────────────────────────────────
   The B2B page. There is no client screen here, because the
   product is the rails themselves.
───────────────────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    icon: "fingerprint" as const,
    title: "Embeddable identity",
    body: "Drop Fuutura ID into an existing product and inherit KYC, KYB and sanctions screening on day one.",
    tint: "sage" as const,
  },
  {
    icon: "wallet" as const,
    title: "Custody without the burden",
    body: "Offer self-custodial wallets without building key management or ever holding client assets.",
    tint: "peri" as const,
  },
  {
    icon: "chart" as const,
    title: "Market access as an API",
    body: "Route client demand into 40,000+ instruments without becoming a broker.",
    tint: "sand" as const,
  },
  {
    icon: "users" as const,
    title: "B2B2C at the same standard",
    body: "The same infrastructure serves one client directly and a channel serving thousands.",
    tint: "blush" as const,
  },
  {
    icon: "coins" as const,
    title: "Configurable rewards",
    body: "Partners define their own loyalty logic, settling natively on-chain with no reconciliation layer.",
    tint: "peri" as const,
  },
  {
    icon: "shield" as const,
    title: "Compliance inherited",
    body: "An integrating partner takes on the perimeter Fuutura already maintains across 155+ regimes.",
    tint: "dark" as const,
  },
];

export default function ProSlide() {
  return (
    <Sheet
      id="slide-pro"
      folio="20"
      eyebrow="Fuutura PRO"
      title="The same rails, as infrastructure"
      lead="What Fuutura built for its own clients is available to partners as infrastructure. One integration inherits identity, custody, market access — and the compliance perimeter around all three."
    >
      <Reveal>
        <div className="row ai-c g-3 wrap">
          <Badge icon="briefcase" tone="sand" size="lg" />
          <span className="t-ital">
            Fuutura for Business — components, not a destination
          </span>
          <div className="row g-2 wrap" style={{ marginLeft: "auto" }}>
            <span className="pill">One integration</span>
            <span className="pill">155+ regimes</span>
            <span className="pill">White-label ready</span>
          </div>
        </div>
      </Reveal>

      <div className="grid-3 grid-fill" style={{ width: "100%" }}>
        {CAPABILITIES.map((c) => (
          <Reveal key={c.title}>
            <FeatureCard
              icon={c.icon}
              title={c.title}
              body={c.body}
              tint={c.tint}
              split
            />
          </Reveal>
        ))}
      </div>

      <ClosingLine>
        The distribution argument: every partner that integrates Fuutura PRO
        brings verified clients onto the same rails, and the identity layer
        compounds with each one.
      </ClosingLine>
    </Sheet>
  );
}
