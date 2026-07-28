"use client";

import SlideWrapper from "../SlideWrapper";
import { BrowserMockup } from "../Mockups";
import { Reveal, Eyebrow, RuledList, Stat, Footnote } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   09 — The 60-Second Verification Flow
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
    <SlideWrapper id="slide-verification" field="white" folio="09">
      <div className="stack g-4" style={{ width: "100%" }}>
        {/* Header */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>Onboarding</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"Verification in\nunder a minute"}
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-lead" style={{ maxWidth: "50ch" }}>
              The same checks a bank runs over a day, completed in the time it
              takes to read this paragraph — with no reduction in what is
              actually verified.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        <div className="showcase-row">
          {/* Document + verification state, as the client sees it */}
          <Reveal className="showcase-shot--wide">
            <BrowserMockup
              src="/images/screens/id_s3.jpg"
              alt="Fuutura ID — uploaded documents and live verification status"
              url="id.fuutura.com/identity-hub"
              w={1440}
              h={796}
            />
          </Reveal>

          {/* The flow */}
          <div className="stack g-3 showcase-copy">
            <Reveal>
              <div className="cols-2 ruled-cols" style={{ width: "100%" }}>
                <Stat value="< 60s" label="End-to-end" tone="blue" small />
                <Stat
                  value="24h → 1m"
                  label="Against convention"
                  note="Same standard, a fraction of the wait"
                  small
                />
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

        <Footnote>
          Speed is not the point in itself. Removing the wait removes the
          drop-off, and the drop-off is where financial inclusion has
          historically failed.
        </Footnote>
      </div>
    </SlideWrapper>
  );
}
