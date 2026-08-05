"use client";

import Sheet from "../Sheet";
import { BrowserMockup } from "../Mockups";
import { Reveal, CompareColumns, Stat, ClosingLine } from "../Primitives";

/* ── 11 — Cross-Border Remittance ─────────────────────────────
   The figures run the full width, the comparison and a single
   large screen share the space beneath — the table needs half a
   page to breathe, and one shot reads better than two.
───────────────────────────────────────────────────────────── */

const ROWS = [
  { left: "Settles in 3–7 business days", right: "Settles instantly" },
  { left: "5–10% taken in fees", right: "Under 1% in fees" },
  { left: "Extensive repeat paperwork", right: "Digital-first — identity already proved" },
  { left: "Requires a physical location", right: "Wherever the client's phone is" },
  { left: "Limited transparency", right: "Full transaction tracking" },
];

export default function RemittanceSlide() {
  return (
    <Sheet
      id="slide-remittance"
      folio="13"
      eyebrow="Fuutura Wallet · Cross-Border Payments"
      title="The cost of sending money home"
      lead="Remittance is where the incumbent system charges the most to the people who can least afford it — a 5–10% levy on money already earned. On-chain settlement removes the correspondent-banking chain that creates both the cost and the delay."
    >
      <Reveal>
        <div className="grid-3 ruled-cols" style={{ width: "100%" }}>
          <Stat value="< 1%" label="Transfer cost" small />
          <Stat value="Instant" label="Settlement" small />
        </div>
      </Reveal>

      <div className="split--even" style={{ width: "100%" }}>
        <Reveal>
          <CompareColumns
            leftTitle="Traditional remittance"
            rightTitle="Fuutura remittance"
            rows={ROWS}
          />
        </Reveal>

        <Reveal>
          <BrowserMockup
            src="/images/screens/wallet/wallet_s3.jpg"
            alt="Fuutura Wallet cross-border transfer"
            maxWidth="96%"
          />
        </Reveal>
      </div>

      <ClosingLine>
        Remittance is the clearest single case for the architecture: identity
        already verified, value already on-chain, settlement already instant. The
        saving is structural, not promotional.
      </ClosingLine>
    </Sheet>
  );
}
