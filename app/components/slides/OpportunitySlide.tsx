"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, RuledList, Stat } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   04 — The Opportunity

   The split archetype: titling column at left, evidence at right.
   Stat band over a hairline-divided list of the five frictions.
───────────────────────────────────────────────────────────── */

const FRICTIONS = [
  {
    term: "Repetitive verification",
    desc: "Identity is re-proved from scratch at every venue. Each repeat is a fresh point of abandonment.",
  },
  {
    term: "Verification measured in days",
    desc: "Conventional onboarding runs from hours to weeks, and drop-off compounds at every step of the wait.",
  },
  {
    term: "Structural exclusion",
    desc: "1.7 billion adults hold no access to basic financial services — not for want of demand, but for want of rails.",
  },
  {
    term: "Punitive cost of movement",
    desc: "Cross-border remittance still clears at 5–10% and settles over days, taxing precisely the people who can least absorb it.",
  },
  {
    term: "Fragmented services",
    desc: "Identity, custody, markets and payments each sit on separate networks, so nothing compounds and every hand-off leaks.",
  },
];

export default function OpportunitySlide() {
  return (
    <SplitSlide
      id="slide-opportunity"
      folio="04"
      field="ivory"
      eyebrow="The Opportunity"
      title={"Digital finance\nis fragmented"}
      lead="People are asked to assemble a financial life from platforms that do not speak to one another — and to prove who they are, over and over, to each of them."
      body={[
        "Every hand-off between those networks is a cost, a delay, and a reason to give up. The friction is not incidental; it is the architecture.",
      ]}
      footnote="Sources: World Bank Global Findex (unbanked adult population); World Bank Remittance Prices Worldwide (average cost of a cross-border transfer)."
    >
      {/* Stat band */}
      <Reveal>
        <div className="cols-3 ruled-cols" style={{ width: "100%" }}>
          <Stat value="1.7B" label="Adults unbanked" note="No access to basic financial services" />
          <Stat value="5–10%" label="Remittance cost" note="Plus 3–7 days to settle" />
          <Stat value="180+" label="Jurisdictions" note="Each with its own rulebook" />
        </div>
      </Reveal>

      <Reveal>
        <span className="rule-h rule-h--mid" />
      </Reveal>

      {/* The five frictions */}
      <Reveal>
        <RuledList items={FRICTIONS} numbered />
      </Reveal>
    </SplitSlide>
  );
}
