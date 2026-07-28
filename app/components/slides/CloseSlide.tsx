"use client";

import SlideWrapper from "../SlideWrapper";
import { Lockup } from "../ProductMark";
import { Reveal } from "../Primitives";
import HexLattice from "../HexLattice";

/* ─────────────────────────────────────────────────────────────
   25 — Close

   Mirrors the cover so the document closes where it opened.
───────────────────────────────────────────────────────────── */

export default function CloseSlide() {
  return (
    <SlideWrapper
      id="slide-close"
      field="ivory"
      folio="25"
      decoration={<HexLattice variant="corner" opacity={0.075} />}
    >
      <div
        className="stack ai-c jc-c g-5"
        style={{ width: "100%", textAlign: "center" }}
      >
        <Reveal>
          <Lockup tone="blue" width="clamp(200px, 30vw, 440px)" />
        </Reveal>

        <Reveal>
          <div className="stack ai-c g-4" style={{ width: "100%" }}>
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

            <span
              className="rule-h rule-h--ink"
              style={{ maxWidth: "clamp(160px, 24vw, 340px)" }}
            />

            <p className="t-lead" style={{ maxWidth: "48ch" }}>
              Real access to the global financial system, for millions across
              the Global South — built as infrastructure, made to last.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="row g-5 ai-c wrap jc-c" style={{ marginTop: "0.5rem" }}>
            <a
              href="mailto:info@fuutura.com"
              className="t-h4"
              style={{ color: "var(--blue)", textDecoration: "none" }}
            >
              info@fuutura.com
            </a>
            <span className="rule-v" style={{ height: "1.1em" }} />
            <a
              href="https://www.fuutura.com"
              target="_blank"
              rel="noreferrer"
              className="t-h4"
              style={{ color: "var(--ink-1)", textDecoration: "none" }}
            >
              www.fuutura.com
            </a>
          </div>
        </Reveal>
      </div>

      {/* Confidentiality note on the base rule */}
      <Reveal>
        <div
          style={{
            position: "absolute",
            left: "calc(var(--px) + var(--spine))",
            right: "calc(var(--px) + 2.5rem)",
            bottom: "var(--py)",
          }}
        >
          <p className="t-xs" style={{ color: "var(--ink-4)", maxWidth: "88ch" }}>
            Confidential. Issued for information purposes only and intended
            solely for the named recipient. This document does not constitute an
            offer, invitation or solicitation to buy or subscribe for any
            security, token or other instrument in any jurisdiction, and is not
            for distribution to U.S. Persons.
          </p>
        </div>
      </Reveal>
    </SlideWrapper>
  );
}
