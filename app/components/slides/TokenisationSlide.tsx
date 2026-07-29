"use client";

import Sheet from "../Sheet";
import { Reveal, SubLabel, Badge, Arrow } from "../Primitives";

/* ── 28 — Tokenisation, Two Ways ───────────────────────────────
   The strategic page, laid out as the reference's closing bridge:
   two large tinted fields with a rust arrow between them.
───────────────────────────────────────────────────────────── */

export default function TokenisationSlide() {
  return (
    <Sheet
      id="slide-tokenisation"
      folio="20"
      eyebrow="Settlement & Chain · Tokenisation"
      title="Tokenisation, two ways"
      lead="A bridge is only useful if it carries traffic in both directions. Capital should be able to reach these markets — and leave them by a licensed route rather than an offshore one."
    >
      <Reveal>
        <SubLabel>What&rsquo;s next — tokenisation, two ways</SubLabel>
      </Reveal>

      <div className="flow" style={{ flex: 1, minHeight: 0, alignItems: "stretch" }}>
        <Reveal className="flex-1">
          <div className="card card--sage" style={{ height: "100%", gap: "var(--sp-3)" }}>
            <div className="row ai-c g-3">
              <Badge icon="globe" tone="paper" size="lg" />
              <h3 className="t-sub">Inbound</h3>
            </div>
            <p className="t-body">
              Tokenised global-dollar assets, brought on-chain to underserved
              markets that today leak to unlicensed offshore venues — the same
              demand, routed somewhere accountable.
            </p>
            <span className="pill">Capital in</span>
          </div>
        </Reveal>

        <Arrow />

        <Reveal className="flex-1">
          <div className="card card--blush" style={{ height: "100%", gap: "var(--sp-3)" }}>
            <div className="row ai-c g-3">
              <Badge icon="sitemap" tone="paper" size="lg" />
              <h3 className="t-sub">Outbound</h3>
            </div>
            <p className="t-body">
              On-chain depositary receipts of local champions — routing foreign
              capital back into the businesses that need it, and into the
              economies they operate in.
            </p>
            <span className="pill">Capital out</span>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="t-lead" style={{ color: "var(--ink)" }}>
          The rare crypto model a host government can champion.
        </p>
      </Reveal>
    </Sheet>
  );
}
