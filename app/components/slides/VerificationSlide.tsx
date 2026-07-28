"use client";

import SplitSlide from "../SplitSlide";
import PhoneMockup from "../PhoneMockup";
import { Reveal, RuledList, Stat } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   08 — The 60-Second Verification Flow
───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    term: "Biometric verification",
    desc: "Facial recognition with real-time liveness detection.",
  },
  {
    term: "Document capture",
    desc: "AI-guided framing, so the scan is right the first time.",
  },
  {
    term: "AI authentication",
    desc: "Instant authenticity and fraud detection on the document itself.",
  },
  {
    term: "Proof of address",
    desc: "A utility bill or bank statement, checked against the record.",
  },
  {
    term: "Identity token minted",
    desc: "A blockchain-backed token issued for reuse across the ecosystem.",
  },
];

export default function VerificationSlide() {
  return (
    <SplitSlide
      id="slide-verification"
      folio="08"
      field="white"
      ratio="wide"
      eyebrow="Onboarding"
      title={"Verification in\nunder a minute"}
      lead="The same checks a bank runs over a day, completed in the time it takes to read this paragraph — with no reduction in what is actually verified."
      footnote="Speed is not the point in itself. Removing the wait removes the drop-off, and the drop-off is where financial inclusion has historically failed."
    >
      <div className="row g-5 ai-c wrap" style={{ width: "100%" }}>
        {/* Product shot */}
        <Reveal>
          <PhoneMockup
            src="/FkycS.png"
            alt="Fuutura ID onboarding screen"
            height="clamp(210px, 41svh, 400px)"
          />
        </Reveal>

        {/* The flow */}
        <div className="stack g-4 flex-1" style={{ minWidth: "260px" }}>
          <Reveal>
            <div className="cols-2 ruled-cols" style={{ width: "100%" }}>
              <Stat value="< 60s" label="End-to-end" tone="blue" small />
              <Stat value="24h → 1m" label="Against convention" note="Same standard, a fraction of the wait" small />
            </div>
          </Reveal>

          <Reveal>
            <span className="rule-h rule-h--mid" />
          </Reveal>

          <Reveal>
            <RuledList items={STEPS} numbered />
          </Reveal>
        </div>
      </div>
    </SplitSlide>
  );
}
