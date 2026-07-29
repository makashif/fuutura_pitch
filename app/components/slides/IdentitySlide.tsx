"use client";

import Sheet from "../Sheet";
import { ProductPanel, Reveal, SubLabel } from "../Primitives";

/* ── 09 — The Access Standard ───────────────────────────────────
   The two-panel page: a tinted badge heads each panel, then a
   ruled list of capabilities beneath. The dark strip carries the
   regulatory posture inherited from the old compliance page.
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
    icon: "chart" as const,
    title: "Leverage is earned",
    body: "Entitlements progress on an earned ladder — never granted at entry, never token-gated.",
  },
  {
    icon: "cap" as const,
    title: "Fuutura Knowledge",
    body: "A free education-and-simulation academy that doubles as the appropriateness on-ramp.",
  },
  {
    icon: "shield" as const,
    title: "Own tech, specialist partners",
    body: "KYC, KYB, sanctions screening and on-chain monitoring arrive as one integrated compliance stack, not a set of parts to assemble.",
  },
];

const REGIMES = ["GDPR", "CCPA", "KYC", "AML", "FATF"];

export default function IdentitySlide() {
  return (
    <Sheet
      id="slide-identity"
      folio="09"
      eyebrow="Fuutura ID · The Access Standard"
      title="The trust layer, built as native technology"
      lead="Compliance is not bolted on. The projects that failed the financially excluded were built to work around regulation; Fuutura is built to satisfy it — and every other product reads from the same identity."
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

      <Reveal>
        <div className="card card--dark" style={{ padding: "clamp(0.6rem, 1.4vh, 1rem)" }}>
          <div className="row" style={{ alignItems: "center", gap: "1rem" }}>
            <div className="stack" style={{ flex: 1, gap: "0.2rem" }}>
              <SubLabel>Regulatory posture</SubLabel>
              <p className="t-cap" style={{ marginTop: "0.1rem" }}>
                Fuutura meets GDPR, CCPA, KYC, AML and FATF standards across 155+
                countries — so a partner integrating Fuutura inherits compliance,
                and access proved once carries across custody, markets and payments.
              </p>
            </div>
            <div className="row g-1 wrap" style={{ maxWidth: "160px", justifyContent: "flex-end" }}>
              {REGIMES.map((r) => (
                <span key={r} className="pill pill--dark" style={{ padding: "0.15rem 0.5rem" }}>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Sheet>
  );
}
