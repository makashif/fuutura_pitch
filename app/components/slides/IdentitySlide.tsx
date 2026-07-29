"use client";

import Sheet from "../Sheet";
import { ProductPanel, Reveal, SubLabel } from "../Primitives";

/* ── 06 — The Access Standard ───────────────────────────────────
   The two-panel page: how a client is classified and what they
   may do, set beside the controls that make it defensible. The
   dark strip beneath carries the regulatory posture.
───────────────────────────────────────────────────────────── */

const STANDARD = [
  {
    icon: "scales" as const,
    title: "Three-axis engine",
    body: "Jurisdiction, capability and qualification — each client is classified, not merely approved, so entitlements can be granted to the exact edge of eligibility rather than all or nothing.",
  },
  {
    icon: "layers" as const,
    title: "Leverage is earned",
    body: "Entitlements progress on an earned ladder — never granted at entry, never token-gated. Fuutura Knowledge, a free education-and-simulation academy, is the appropriateness on-ramp.",
  },
  {
    icon: "globe" as const,
    title: "Jurisdiction-aware by default",
    body: "The rulebook that applies is resolved at onboarding and re-checked as the client's circumstances change.",
  },
];

const CONTROLS = [
  {
    icon: "shield" as const,
    title: "Authenticity & screening",
    body: "Fraud detection built specifically for forged documents, with AML and PEP databases consolidated from authoritative sources worldwide.",
  },
  {
    icon: "link" as const,
    title: "Blockchain-anchored records",
    body: "Immutable identity records secured on Layer-2 infrastructure, so an audit trail cannot be quietly revised.",
  },
  {
    icon: "spark" as const,
    title: "Continuous risk assessment",
    body: "Real-time scoring from behavioural analytics — assessment continues after onboarding, not only at it.",
  },
];

const REGIMES = ["GDPR", "CCPA", "KYC", "AML", "FATF"];

export default function IdentitySlide() {
  return (
    <Sheet
      id="slide-identity"
      folio="06"
      eyebrow="Fuutura ID · The Access Standard"
      title="The trust layer, built as native technology"
      lead="Compliance is not bolted on. The projects that failed the financially excluded were built to work around regulation; Fuutura is built to satisfy it — and every other product reads from the same identity."
    >
      <div className="grid-2" style={{ width: "100%", flex: 1, minHeight: 0 }}>
        <ProductPanel
          icon="fingerprint"
          tone="sage"
          name="The Standard"
          tagline="Who a client is, and what they may do"
          items={STANDARD}
        />
        <ProductPanel
          icon="shield"
          tone="blush"
          name="Bank-grade controls"
          tagline="Why a partner can rely on it"
          items={CONTROLS}
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
