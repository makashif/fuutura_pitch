"use client";

import Sheet from "../Sheet";
import { Reveal, Stat, FeatureCard, ClosingLine } from "../Primitives";

/* ── 10 — Global Document Coverage ────────────────────────── */

const DOCUMENTS = [
  {
    icon: "doc" as const,
    title: "Passports",
    body: "Every international passport format, machine-readable zone included.",
    tint: "sage" as const,
  },
  {
    icon: "userCheck" as const,
    title: "National identity cards",
    body: "Government-issued cards from every major country and territory.",
    tint: "peri" as const,
  },
  {
    icon: "card" as const,
    title: "Driving licences",
    body: "Regional formats and their security features, read reliably.",
    tint: "sand" as const,
  },
  {
    icon: "shield" as const,
    title: "Specialised documents",
    body: "Military IDs, residence permits and other government-issued documentation.",
    tint: "blush" as const,
  },
];

export default function CoverageSlide() {
  return (
    <Sheet
      id="slide-coverage"
      folio="08"
      eyebrow="Fuutura ID · Global Coverage"
      title="Built for the documents people actually hold"
      lead="Inclusion fails on the edge cases. Coverage has to reach the residence permit and the regional licence, not only the passport."
    >
      <Reveal>
        <div className="grid-3 ruled-cols" style={{ width: "100%", maxWidth: "58rem" }}>
          <Stat value="180+" label="Countries & states" />
          <Stat value="98%" label="World population" />
          <Stat value="155+" label="Compliance regimes" small />
        </div>
      </Reveal>

      <div className="grid-4 grid-fill" style={{ width: "100%" }}>
        {DOCUMENTS.map((d) => (
          <Reveal key={d.title}>
            <FeatureCard
              icon={d.icon}
              title={d.title}
              body={d.body}
              tint={d.tint}
              split
            />
          </Reveal>
        ))}
      </div>

      <ClosingLine>
        A government ID is enough to begin. No bank account, no minimum balance,
        no paperwork trail — which is precisely what opens the door for the
        structurally excluded.
      </ClosingLine>
    </Sheet>
  );
}
