"use client";

import SlideWrapper from "./SlideWrapper";
import { Lockup } from "./ProductMark";
import { Reveal } from "./Primitives";
import HexLattice from "./HexLattice";

/* ─────────────────────────────────────────────────────────────
   01 — Cover

   The brand book opens on a calm ivory field with nothing but
   the lockup and a single line of positioning. The deck follows
   that lead, adding only the brand promise and a quiet
   document meta row.
───────────────────────────────────────────────────────────── */

export default function CoverSlide() {
  return (
    <SlideWrapper
      id="slide-cover"
      field="ivory"
      spine="Fuutura | Product Deck"
      decoration={<HexLattice variant="corner" opacity={0.075} />}
    >
      <div
        className="stack ai-c jc-c g-5"
        style={{ width: "100%", textAlign: "center" }}
      >
        <Reveal>
          <Lockup tone="blue" width="clamp(230px, 36vw, 540px)" />
        </Reveal>

        <Reveal>
          <div className="stack ai-c g-4" style={{ width: "100%" }}>
            <span
              className="t-label"
              style={{ letterSpacing: "0.26em", color: "var(--ink-1)" }}
            >
              Next Generation Financial Infrastructure
            </span>

            <span
              className="rule-h rule-h--ink"
              style={{ maxWidth: "clamp(180px, 28vw, 420px)" }}
            />

            <span
              style={{
                fontFamily: "var(--f-sans)",
                fontSize: "clamp(0.66rem, min(1.02vw, 1.9vh), 0.92rem)",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--blue)",
              }}
            >
              Verify. Trade. Send. Spend. Connect.
            </span>
          </div>
        </Reveal>
      </div>

      {/* Document meta — sits on the base rule of the frame */}
      <Reveal>
        <div
          className="row jc-b ai-e"
          style={{
            position: "absolute",
            left: "calc(var(--px) + var(--spine))",
            right: "calc(var(--px) + 2.5rem)",
            bottom: "var(--py)",
            gap: "1rem",
          }}
        >
          <span className="t-mono">Product Deck · Confidential</span>
          <span className="t-mono">www.fuutura.com</span>
        </div>
      </Reveal>
    </SlideWrapper>
  );
}
