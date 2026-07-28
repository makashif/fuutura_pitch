"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, FeatureCard } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   11 — Enterprise Security & Compliance
───────────────────────────────────────────────────────────── */

const CONTROLS = [
  {
    title: "Authenticity checking",
    body: "Fraud detection built specifically to identify forged and invalid documents, rather than generic image analysis.",
  },
  {
    title: "AML & PEP screening",
    body: "Anti-money-laundering and politically-exposed-person databases consolidated from authoritative sources worldwide.",
  },
  {
    title: "Blockchain-anchored records",
    body: "Immutable identity records secured on Layer-2 infrastructure, so an audit trail cannot be quietly revised.",
  },
  {
    title: "Continuous risk assessment",
    body: "Real-time risk scoring from behavioural analytics — assessment continues after onboarding, not only at it.",
  },
];

export default function ComplianceSlide() {
  return (
    <SplitSlide
      id="slide-compliance"
      folio="11"
      field="white"
      eyebrow="Security & Compliance"
      title={"Bank-grade,\nby construction"}
      lead="The projects that failed the financially excluded were the ones built to work around regulation. Fuutura is built to satisfy it."
      body={[
        "That is the harder path, and it is the only one that earns the permission to grow.",
      ]}
    >
      <div className="cols-2 g-2" style={{ width: "100%" }}>
        {CONTROLS.map((c, i) => (
          <Reveal key={c.title}>
            <div style={{ height: "100%" }}>
              <FeatureCard
                index={String(i + 1).padStart(2, "0")}
                title={c.title}
                body={c.body}
                variant="ivory"
              />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Regulatory band */}
      <Reveal>
        <div className="card card--blue stack g-2">
          <span className="t-label" style={{ color: "#fff" }}>
            Regulatory posture
          </span>
          <span className="t-sm" style={{ color: "var(--rev-2)" }}>
            Fuutura meets GDPR, CCPA, KYC, AML and FATF standards across 155+
            countries — so a partner integrating Fuutura inherits compliance
            rather than assuming risk.
          </span>
          <div className="row g-2 wrap" style={{ marginTop: "0.25rem" }}>
            {["GDPR", "CCPA", "KYC", "AML", "FATF"].map((s) => (
              <span key={s} className="pill pill--rev">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SplitSlide>
  );
}
