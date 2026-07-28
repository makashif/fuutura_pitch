"use client";

import SplitSlide from "../SplitSlide";
import { Reveal, CompareColumns, Stat } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   14 — Cross-Border Remittance
───────────────────────────────────────────────────────────── */

const ROWS = [
  { left: "Settles in 3–7 business days", right: "Settles instantly" },
  { left: "5–10% taken in fees", right: "Under 1% in fees" },
  { left: "Extensive repeat paperwork", right: "Digital-first — identity already proved" },
  { left: "Requires a physical location", right: "Wherever the client's phone is" },
  { left: "Limited transparency", right: "Full transaction tracking" },
  { left: "Banking hours only", right: "Available 24/7" },
];

export default function RemittanceSlide() {
  return (
    <SplitSlide
      id="slide-remittance"
      folio="14"
      field="ivory"
      eyebrow="Cross-Border Payments"
      title={"The cost of\nsending money\nhome"}
      lead="Remittance is where the incumbent system charges the most to the people who can least afford it — a 5–10% levy on money already earned."
      body={[
        "On-chain settlement removes the correspondent-banking chain that creates both the cost and the delay.",
      ]}
      footnote="Remittance is the clearest single case for the architecture: identity already verified, value already on-chain, settlement already instant. The saving is structural, not promotional."
    >
      <Reveal>
        <div className="cols-3 ruled-cols" style={{ width: "100%" }}>
          <Stat value="< 1%" label="Transfer cost" tone="blue" small />
          <Stat value="Instant" label="Settlement" small />
          <Stat value="24/7" label="Availability" small />
        </div>
      </Reveal>

      <Reveal>
        <span className="rule-h rule-h--mid" />
      </Reveal>

      <Reveal>
        <CompareColumns
          leftTitle="Traditional remittance"
          rightTitle="Fuutura remittance"
          rows={ROWS}
        />
      </Reveal>
    </SplitSlide>
  );
}
