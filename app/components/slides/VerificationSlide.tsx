"use client";

import Sheet from "../Sheet";
import { BrowserMockup } from "../Mockups";
import { Reveal, Stat, IconList, SubLabel } from "../Primitives";

/* ── 09 — The 60-Second Verification Flow ─────────────────── */

const STEPS = [
  {
    icon: "userCheck" as const,
    title: "Biometric verification",
    body: "Facial recognition with real-time liveness detection.",
  },
  {
    icon: "doc" as const,
    title: "Document capture",
    body: "AI-guided framing, so the scan is right the first time.",
  },
  {
    icon: "spark" as const,
    title: "AI authentication",
    body: "Instant authenticity and fraud detection on the document itself.",
  },
  {
    icon: "globe" as const,
    title: "Proof of address",
    body: "A utility bill or bank statement, checked against the record.",
  },
  {
    icon: "link" as const,
    title: "Identity token minted",
    body: "A blockchain-backed token issued for reuse across the ecosystem.",
  },
];

export default function VerificationSlide() {
  return (
    <Sheet
      id="slide-verification"
      folio="07"
      eyebrow="Fuutura ID · Onboarding"
      title="Verification in under a minute"
      lead="The same checks a bank runs over a day, completed in the time it takes to read this paragraph — with no reduction in what is actually verified."
    >
      <div className="showcase-row" style={{ flex: 1, minHeight: 0 }}>
        <Reveal className="showcase-shot--wide">
          <BrowserMockup
            src="/images/screens/id_s3.jpg"
            alt="Fuutura ID — uploaded documents and live verification status"
            url="id.fuutura.com/identity-hub"
            w={1440}
            h={796}
          />
        </Reveal>

        <div className="showcase-copy stack g-3">
          <Reveal>
            <div className="grid-2 ruled-cols" style={{ width: "100%" }}>
              <Stat value="< 60s" label="End-to-end" small />
              <Stat
                value="24h → 1m"
                label="Against convention"
                note="Same standard, a fraction of the wait"
                small
              />
            </div>
          </Reveal>

          <Reveal>
            <SubLabel>The five steps</SubLabel>
          </Reveal>

          <IconList items={STEPS} />
        </div>
      </div>
    </Sheet>
  );
}
