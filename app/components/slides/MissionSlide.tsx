"use client";

import SlideWrapper from "../SlideWrapper";
import { Reveal } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   03 — Mission

   The statement archetype, taken straight from the brand book's
   mission page: one field, one sentence, set large, with the
   label held down at the base of the page. Nothing else.
───────────────────────────────────────────────────────────── */

export default function MissionSlide() {
  return (
    <SlideWrapper id="slide-mission" field="white" folio="03">
      <div className="fill-slide">
        {/* The statement */}
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "clamp(1.5rem, min(3.9vw, 7.4vh), 4.2rem)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "var(--ink-1)",
              maxWidth: "26ch",
            }}
          >
            To open global markets to billions across the Global South, through a
            single ecosystem that brings{" "}
            <em style={{ fontStyle: "italic" }}>trading</em>,{" "}
            <em style={{ fontStyle: "italic" }}>payments</em>, and{" "}
            <em style={{ fontStyle: "italic" }}>identity</em> together as one.
          </h2>
        </Reveal>

        <div style={{ flex: 1 }} />

        {/* Base label + the conviction line */}
        <Reveal>
          <div className="row jc-b ai-e wrap g-4" style={{ width: "100%" }}>
            <span
              className="t-h4"
              style={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 1.15,
                whiteSpace: "pre-line",
              }}
            >
              {"Brand\nMission"}
            </span>

            <p
              className="t-sm"
              style={{ maxWidth: "46ch", textAlign: "left" }}
            >
              The means to include billions of people already exists. It has
              simply never been built into a system that could both reach those
              people and earn their lasting trust — open and legitimate at once.
            </p>
          </div>
        </Reveal>
      </div>
    </SlideWrapper>
  );
}
