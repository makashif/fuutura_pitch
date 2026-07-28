"use client";

import SlideWrapper from "../SlideWrapper";
import { Reveal, Eyebrow, Stat } from "../Primitives";

/* ── 02 — Mission ─────────────────────────────────────────────
   The statement page: one field, one sentence, set large.
───────────────────────────────────────────────────────────── */

export default function MissionSlide() {
  return (
    <SlideWrapper id="slide-mission" folio="02" center>
      <div className="stack g-4" style={{ width: "100%" }}>
        <Reveal>
          <Eyebrow>Our Mission</Eyebrow>
        </Reveal>

        <Reveal>
          <h2 className="t-hero" style={{ maxWidth: "40ch" }}>
            To open global markets to billions across the Global South, through a
            single ecosystem that brings{" "}
            <em style={{ fontStyle: "italic" }}>trading</em>,{" "}
            <em style={{ fontStyle: "italic" }}>payments</em> and{" "}
            <em style={{ fontStyle: "italic" }}>identity</em> together as one.
          </h2>
        </Reveal>

        <Reveal>
          <span className="rule-rust" />
        </Reveal>

        <Reveal>
          <p className="t-lead" style={{ maxWidth: "88ch" }}>
            The means to include billions of people already exists. It has simply
            never been built into a system that could both reach those people and
            earn their lasting trust — open and legitimate at once.
          </p>
        </Reveal>

        <Reveal>
          <div
            className="grid-3 ruled-cols"
            style={{ width: "100%", marginTop: "0.5rem", maxWidth: "62rem" }}
          >
            <Stat value="1.7B" label="Adults unbanked" note="No access to basic services" small />
            <Stat value="180+" label="Jurisdictions" note="Each with its own rulebook" small />
            <Stat value="One" label="Verified identity" note="Carried across every product" small />
          </div>
        </Reveal>
      </div>
    </SlideWrapper>
  );
}
