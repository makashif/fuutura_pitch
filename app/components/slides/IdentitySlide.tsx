"use client";

import SplitSlide from "../SplitSlide";
import ProductMark from "../ProductMark";
import { Reveal, FeatureCard } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   08 — Fuutura ID · The Access Standard
───────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    title: "A three-axis engine",
    body: "Jurisdiction, capability and qualification. Each client is classified rather than merely approved, so entitlements can be precise instead of binary.",
  },
  {
    title: "Leverage is earned",
    body: "Entitlements progress on an earned ladder — never granted at entry, never token-gated. Capability follows demonstrated appropriateness.",
  },
  {
    title: "Fuutura Knowledge",
    body: "A free education-and-simulation academy that doubles as the appropriateness on-ramp: clients learn on the way in, not after the fact.",
  },
  {
    title: "Own technology, specialist partners",
    body: "KYC is Fuutura's own technology. KYB, sanctions screening and on-chain monitoring run through best-in-class vendors.",
  },
];

export default function IdentitySlide() {
  return (
    <SplitSlide
      id="slide-identity"
      folio="08"
      field="ivory"
      eyebrow="Fuutura ID"
      title={"The trust layer,\nbuilt as native\ntechnology"}
      lead="Compliance is not bolted on. Identity is the first piece of Fuutura infrastructure, and every other product reads from it."
      footnote="One verified identity is the reason the ecosystem compounds: access proved once is access that carries across custody, markets and payments."
    >
      {/* Mark + positioning line */}
      <Reveal>
        <div className="row ai-c g-3">
          <ProductMark product="id" tone="blue" size="clamp(2.4rem, 5.6vh, 3.6rem)" />
          <div className="stack g-1">
            <span className="t-h3">The Fuutura Access Standard</span>
            <span className="t-sm">
              Classification, not just approval — the difference between a
              gate and a ladder.
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <span className="rule-h rule-h--mid" />
      </Reveal>

      {/* Four pillars */}
      <div className="cols-2 g-2" style={{ width: "100%" }}>
        {PILLARS.map((p, i) => (
          <Reveal key={p.title}>
            <div style={{ height: "100%" }}>
              <FeatureCard
                index={String(i + 1).padStart(2, "0")}
                title={p.title}
                body={p.body}
                variant="white"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </SplitSlide>
  );
}
