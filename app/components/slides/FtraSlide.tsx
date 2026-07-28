"use client";

import SlideWrapper from "../SlideWrapper";
import { Reveal, Eyebrow } from "../Primitives";
import HexLattice from "../HexLattice";

/* ─────────────────────────────────────────────────────────────
   24 — $FTRA

   Deliberately restrained. The important point on this page is
   the separation of concerns: USDT settles value, $FTRA aligns
   participation. Conflating the two is what has sunk comparable
   projects.
───────────────────────────────────────────────────────────── */

const UTILITY = [
  {
    title: "Earned on activity",
    body: "Accrues to clients for real usage — transacting, holding and referring — rather than for speculation.",
  },
  {
    title: "Programme currency",
    body: "The unit enterprises configure their own rewards and loyalty programmes in, settling natively on-chain.",
  },
  {
    title: "Ecosystem alignment",
    body: "Aligns the interests of clients, partners and channels as the network grows past any single product.",
  },
];

export default function FtraSlide() {
  return (
    <SlideWrapper
      id="slide-ftra"
      field="blue"
      folio="24"
      decoration={
        <HexLattice variant="single" color="#FFFFFF" opacity={0.12} />
      }
    >
      <div className="stack g-5" style={{ width: "100%" }}>
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>The Ecosystem Token</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-display" style={{ letterSpacing: "-0.045em" }}>
                $FTRA
              </h2>
            </Reveal>
            <Reveal>
              <span className="t-h3" style={{ fontWeight: 400 }}>
                Powering the Fuutura ecosystem
              </span>
            </Reveal>
          </div>

          <Reveal>
            <div className="card card--outline stack g-2" style={{ borderColor: "var(--rule-rev)" }}>
              <span className="t-label" style={{ color: "#fff" }}>
                An important separation
              </span>
              <p className="t-sm" style={{ color: "var(--rev-2)" }}>
                Settlement across the platform is in USDT. No operator-issued
                token stands in for value anywhere in the stack — $FTRA aligns
                participation, it does not underwrite the balance sheet.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        <div className="cols-3 ruled-cols" style={{ width: "100%" }}>
          {UTILITY.map((u, i) => (
            <Reveal key={u.title}>
              <div className="stack g-2">
                <span
                  className="t-mono"
                  style={{ color: "var(--rev-3)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="t-h4">{u.title}</h4>
                <p className="t-sm" style={{ color: "var(--rev-2)" }}>
                  {u.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
