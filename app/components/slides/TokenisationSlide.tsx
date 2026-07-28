"use client";

import SlideWrapper from "../SlideWrapper";
import { Reveal, Eyebrow } from "../Primitives";
import HexLattice from "../HexLattice";

/* ─────────────────────────────────────────────────────────────
   28 — Tokenisation, Two Ways

   The strategic slide. Capital currently leaks out of these
   markets to unlicensed venues; Fuutura proposes a licensed
   two-way bridge instead.
───────────────────────────────────────────────────────────── */

export default function TokenisationSlide() {
  return (
    <SlideWrapper
      id="slide-tokenisation"
      field="ivory"
      folio="28"
      decoration={<HexLattice variant="band" opacity={0.05} />}
    >
      <div className="stack g-5" style={{ width: "100%" }}>
        {/* Header */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>What&rsquo;s Next</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"Tokenisation,\ntwo ways"}
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-lead" style={{ maxWidth: "50ch" }}>
              A bridge is only useful if it carries traffic in both directions.
              Capital should be able to reach these markets — and leave them by
              a licensed route rather than an offshore one.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        {/* Two directions */}
        <div className="row ai-c g-3 wrap" style={{ width: "100%" }}>
          <Reveal>
            <div
              className="card card--white stack g-3"
              style={{ minWidth: "260px", flex: 1 }}
            >
              <div className="row ai-c jc-b">
                <span className="pill pill--blue">Inbound</span>
                <span className="t-mono">Capital in</span>
              </div>
              <h3 className="t-h3">Global-dollar assets, brought on-chain</h3>
              <p className="t-sm">
                Tokenised exposure to the world&rsquo;s assets, delivered into
                underserved markets that today leak to unlicensed offshore
                venues — the same demand, routed somewhere accountable.
              </p>
            </div>
          </Reveal>

          <span
            className="arrow-x"
            aria-hidden="true"
            style={{ fontSize: "clamp(1rem, 2.4vh, 1.6rem)" }}
          >
            ⇄
          </span>

          <Reveal>
            <div
              className="card card--sage stack g-3"
              style={{ minWidth: "260px", flex: 1 }}
            >
              <div className="row ai-c jc-b">
                <span className="pill pill--ink">Outbound</span>
                <span className="t-mono" style={{ color: "#3A3A32" }}>
                  Capital out
                </span>
              </div>
              <h3 className="t-h3">Depositary receipts of local champions</h3>
              <p className="t-sm">
                On-chain receipts over strong domestic businesses, routing
                foreign capital back into the companies that need it — and into
                the economies they operate in.
              </p>
            </div>
          </Reveal>
        </div>

        {/* The closing argument */}
        <Reveal>
          <div className="stack g-3" style={{ width: "100%" }}>
            <span className="rule-h rule-h--ink" />
            <h3
              className="t-h2"
              style={{ maxWidth: "34ch", fontWeight: 400 }}
            >
              The rare crypto model a host government can{" "}
              <em style={{ fontStyle: "italic" }}>champion</em>.
            </h3>
          </div>
        </Reveal>
      </div>
    </SlideWrapper>
  );
}
