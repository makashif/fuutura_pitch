"use client";

import Sheet from "../Sheet";
import { BrowserMockup } from "../Mockups";
import { Reveal, FeatureCard, SubLabel } from "../Primitives";

/* ── 11 — Enterprise Security & Compliance ────────────────── */

const CONTROLS = [
  {
    icon: "shield" as const,
    title: "Authenticity checking",
    body: "Fraud detection built specifically to identify forged and invalid documents, rather than generic image analysis.",
    tint: "sand" as const,
  },
  {
    icon: "scales" as const,
    title: "AML & PEP screening",
    body: "Anti-money-laundering and politically-exposed-person databases consolidated from authoritative sources worldwide.",
    tint: "sage" as const,
  },
  {
    icon: "link" as const,
    title: "Blockchain-anchored records",
    body: "Immutable identity records secured on Layer-2 infrastructure, so an audit trail cannot be quietly revised.",
    tint: "blush" as const,
  },
  {
    icon: "spark" as const,
    title: "Continuous risk assessment",
    body: "Real-time risk scoring from behavioural analytics — assessment continues after onboarding, not only at it.",
    tint: "peri" as const,
  },
];

const REGIMES = ["GDPR", "CCPA", "KYC", "AML", "FATF"];

export default function ComplianceSlide() {
  return (
    <Sheet
      id="slide-compliance"
      folio="09"
      eyebrow="Fuutura ID · Security & Compliance"
      title="Bank-grade, by construction"
      lead="The projects that failed the financially excluded were the ones built to work around regulation. Fuutura is built to satisfy it — the harder path, and the only one that earns the permission to grow."
    >
      <div className="split">
        <div className="stack g-2" style={{ flex: 1, minWidth: 0 }}>
          <div className="grid-2 grid-fill" style={{ width: "100%" }}>
            {CONTROLS.map((c) => (
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

          <Reveal>
            <div className="card card--dark">
              <SubLabel>Regulatory posture</SubLabel>
              <p className="t-cap">
                Fuutura meets GDPR, CCPA, KYC, AML and FATF standards across 155+
                countries — so a partner integrating Fuutura inherits compliance
                rather than assuming risk.
              </p>
              <div className="row g-2 wrap" style={{ marginTop: "0.2rem" }}>
                {REGIMES.map((r) => (
                  <span key={r} className="pill pill--dark">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        
        <Reveal>
          <BrowserMockup
            src="/images/screens/id_s6.jpg"
            alt="Fuutura ID compliance and regulatory posture"
          />
        </Reveal>
      </div>
    </Sheet>
  );
}
