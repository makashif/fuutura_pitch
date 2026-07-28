"use client";

import Sheet from "../Sheet";
import { ScreenSet } from "../Mockups";
import { Reveal, CompareColumns, Stat, ClosingLine } from "../Primitives";

/* ── 16 — Cross-Border Remittance ─────────────────────────── */

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
    <Sheet
      id="slide-remittance"
      folio="13"
      eyebrow="Fuutura Wallet · Cross-Border Payments"
      title="The cost of sending money home"
      lead="Remittance is where the incumbent system charges the most to the people who can least afford it — a 5–10% levy on money already earned. On-chain settlement removes the correspondent-banking chain that creates both the cost and the delay."
    >
      <div className="split">
        <div className="stack g-4" style={{ flex: 1, minWidth: 0 }}>
          <Reveal>
            <div className="grid-3 ruled-cols" style={{ width: "100%" }}>
              <Stat value="< 1%" label="Transfer cost" small />
              <Stat value="Instant" label="Settlement" small />
              <Stat value="24/7" label="Availability" small />
            </div>
          </Reveal>

          <Reveal>
            <CompareColumns
              leftTitle="Traditional remittance"
              rightTitle="Fuutura remittance"
              rows={ROWS}
            />
          </Reveal>
        </div>

        <Reveal>
          <ScreenSet
            type="desktop"
            screens={[
              { src: "/images/screens/wallet/wallet_s3.jpg", alt: "Fuutura Wallet remittance" },
              { src: "/images/screens/wallet/wallet_s4.jpg", alt: "Fuutura Wallet transfer status" }
            ]}
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
