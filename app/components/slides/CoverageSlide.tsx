"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, RuledList, Stat } from "../Primitives";
import HexLattice from "../HexLattice";

/* ─────────────────────────────────────────────────────────────
   10 — Global Document Coverage
───────────────────────────────────────────────────────────── */

const DOCUMENTS = [
  {
    term: "Passports",
    desc: "Every international passport format, machine-readable zone included.",
  },
  {
    term: "National identity cards",
    desc: "Government-issued cards from every major country and territory.",
  },
  {
    term: "Driving licences",
    desc: "Regional formats and their security features, read reliably.",
  },
  {
    term: "Specialised documents",
    desc: "Military IDs, residence permits and other government-issued documentation.",
  },
];

export default function CoverageSlide() {
  return (
    <SplitSlide
      id="slide-coverage"
      folio="10"
      field="ivory"
      eyebrow="Coverage"
      title={"Built for the\ndocuments people\nactually hold"}
      lead="Inclusion fails on the edge cases. Coverage has to reach the residence permit and the regional licence, not only the passport."
      footnote="A government ID is enough to begin. No bank account, no minimum balance, no paperwork trail — which is precisely what opens the door for the structurally excluded."
    >
      {/* Headline figures */}
      <Reveal>
        <div
          className="card card--white row ai-c jc-b wrap g-4"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <HexLattice variant="single" opacity={0.05} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <Stat value="180+" label="Countries & states" />
          </div>
          <span className="rule-v" style={{ position: "relative", zIndex: 2 }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <Stat value="98%" label="World population" />
          </div>
          <span className="rule-v" style={{ position: "relative", zIndex: 2 }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <Stat value="155+" label="Compliance regimes" small />
          </div>
        </div>
      </Reveal>

      {/* Document classes */}
      <Reveal>
        <div className="card card--white">
          <span className="t-label t-label--soft">Accepted document classes</span>
          <span className="rule-h" />
          <RuledList items={DOCUMENTS} />
        </div>
      </Reveal>
    </SplitSlide>
  );
}
