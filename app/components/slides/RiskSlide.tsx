"use client";

import SlideWrapper from "../SlideWrapper";
import { Reveal, Eyebrow, Footnote } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   17 — Risk Architecture

   How a trade is actually risk-managed. This is the page that
   answers the only question a serious counterparty asks: what
   happens when the book goes one way?
───────────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    title: "No custody, no procurement",
    body: "Positions are bilateral price contracts, not tokenised shares. There is nothing to source and nothing held on a client's behalf.",
  },
  {
    title: "Risk is bounded by design",
    body: "Every book carries its own hard cap. Residual exposure is pre-funded and never socialised across clients.",
  },
  {
    title: "An external, untouchable price",
    body: "The reference price comes from outside the venue. Fuutura's own quote is never an input to it.",
  },
  {
    title: "A growing instrument menu",
    body: "Indices, single-name equities, FX and commodities — with leverage earned tier by tier, not granted at entry.",
  },
];

export default function RiskSlide() {
  return (
    <SlideWrapper id="slide-risk" field="white" folio="17">
      <div className="stack g-4" style={{ width: "100%" }}>
        {/* ── Header ── */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>Risk Architecture</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"How a trade is\nrisk-managed"}
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-lead" style={{ maxWidth: "50ch" }}>
              Every position faces Fuutura, priced off a reference Fuutura
              cannot touch. No shares to source, and no client assets to hold.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        {/* ── The flow ── */}
        <Reveal>
          <div className="row ai-c g-2 wrap" style={{ width: "100%" }}>
            {/* Client side */}
            <div className="stack g-2 flex-1" style={{ minWidth: "170px" }}>
              <div className="card card--ivory">
                <h4 className="t-h5">Client longs</h4>
                <p className="t-xs">Buy exposure against Fuutura</p>
              </div>
              <div className="card card--ivory">
                <h4 className="t-h5">Client shorts</h4>
                <p className="t-xs">Sell exposure against Fuutura</p>
              </div>
            </div>

            <span className="arrow-x" aria-hidden="true">→</span>

            {/* Matching core */}
            <div
              className="card card--blue flex-1"
              style={{ minWidth: "190px", alignSelf: "stretch", justifyContent: "center" }}
            >
              <span className="t-label" style={{ color: "#fff" }}>
                Internal matching core
              </span>
              <p className="t-sm" style={{ color: "var(--rev-2)" }}>
                Longs offset shorts. Delta cancels inside the book before
                anything reaches the market.
              </p>
            </div>

            <span className="arrow-x" aria-hidden="true">→</span>

            {/* Residual controls */}
            <div className="stack g-2 flex-1" style={{ minWidth: "190px" }}>
              <div className="card card--ink-outline">
                <h4 className="t-h5">Hard imbalance caps</h4>
                <p className="t-xs">
                  First-loss capital = cap × gap. Pre-funded, per book.
                </p>
              </div>
              <div className="card card--ink-outline">
                <h4 className="t-h5">External hedge, net only</h4>
                <p className="t-xs">
                  Fires only beyond a published band — never trade by trade.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Principles ── */}
        <div className="cols-4 g-2" style={{ width: "100%" }}>
          {PRINCIPLES.map((p) => (
            <Reveal key={p.title}>
              <div className="stack g-2" style={{ height: "100%" }}>
                <span className="rule-h rule-h--ink" />
                <h4 className="t-h5">{p.title}</h4>
                <p className="t-xs">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Footnote>
          A licensed, non-custodial synthetic exchange: the venue never holds
          client assets, and the price it settles against is not its own.
        </Footnote>
      </div>
    </SlideWrapper>
  );
}
