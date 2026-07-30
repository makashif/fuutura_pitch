"use client";

import Sheet from "../Sheet";
import { ScreenSet } from "../Mockups";
import { Reveal, Stat, IconList, SubLabel, ClosingLine } from "../Primitives";

/* ── 07 — Onboarding & Coverage ──────────────────────────────────
   The five-step flow, set against the coverage figures that make
   it usable outside the passport-holding world.
───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    icon: "userCheck" as const,
    title: "Biometric verification",
    body: "Facial recognition with real-time liveness detection.",
  },
  {
    icon: "doc" as const,
    title: "Document capture & AI checks",
    body: "AI-guided framing, then instant authenticity and fraud detection on the document itself.",
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
      folio="08"
      eyebrow="Fuutura ID · Onboarding & Coverage"
      title="Verification in under a minute, almost anywhere"
      lead="The same checks a bank runs over a day, completed in the time it takes to read this paragraph — and inclusion fails on the edge cases, so coverage reaches the residence permit and the regional licence, not only the passport."
    >
      <div className="showcase-row" style={{ flex: 1, minHeight: 0 }}>
        <Reveal className="showcase-shot--wide">
          <ScreenSet
            type="mixed"
            screens={[
              { src: "/images/screens/id_s3.jpg", alt: "Fuutura ID document upload", device: "desktop" },
              { src: "/images/screens/id/id_m_s2.jpg", alt: "Fuutura ID mobile face check", device: "phone" }
            ]}
          />
        </Reveal>

        <div className="showcase-copy stack g-3">
          <Reveal>
            <div className="grid-3 ruled-cols" style={{ width: "100%" }}>
              <Stat value="< 60s" label="End-to-end" note="24h → 1m against convention" small />
              <Stat value="180+" label="Countries & states" small />
              <Stat value="98%" label="World population" small />
            </div>
          </Reveal>

          <Reveal>
            <SubLabel>The flow</SubLabel>
          </Reveal>

          <IconList items={STEPS} />
        </div>
      </div>

      <ClosingLine>
        Passports, national identity cards, driving licences, military IDs and
        residence permits are all read reliably — and a government ID is enough
        to begin. No bank account, no minimum balance, no paperwork trail, which
        is precisely what opens the door for the structurally excluded.
      </ClosingLine>
    </Sheet>
  );
}
