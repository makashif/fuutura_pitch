"use client";

import SlideWrapper from "./SlideWrapper";
import { Reveal } from "./Primitives";

/* ─────────────────────────────────────────────────────────────
   SectionDivider — a direct translation of the brand book's
   chapter pages: a full deep-blue field carrying the section
   name set vertically at the left edge, the chapter contents
   at the top, and an outsized Roman numeral to the right.
───────────────────────────────────────────────────────────── */

interface SectionDividerProps {
  id: string;
  folio?: string;
  /** Arabic chapter index, e.g. "02" */
  index: string;
  /** Roman numeral, e.g. "II" */
  numeral: string;
  /** Section name — set vertically at the left edge */
  name: string;
  /** Chapter contents list */
  contents: string[];
}

export default function SectionDivider({
  id,
  folio,
  index,
  numeral,
  name,
  contents,
}: SectionDividerProps) {
  return (
    <SlideWrapper id={id} field="blue" folio={folio}>
      {/* ── Vertical section name, reading bottom-to-top at the left edge.
           writing-mode keeps the box one line-height wide, so it sits
           predictably between the outer rule and the inner rule. ── */}
      <div className="divider-name" aria-hidden="true">
        {name.toUpperCase()}
      </div>

      {/* ── Inner vertical rule, closing the vertical-name column ── */}
      <span className="divider-rule" aria-hidden="true" />

      {/* ── Chapter contents (top) + numeral (right) ── */}
      <div className="fill-slide divider-body">
        {/* Contents block */}
        <Reveal>
          <div className="row g-3 ai-s">
            <span
              className="t-label"
              style={{ color: "#fff", paddingTop: "0.05em" }}
            >
              {index}
            </span>
            <div className="stack g-3">
              <span className="t-label" style={{ color: "#fff" }}>
                {name}
              </span>
              <div className="stack g-1">
                {contents.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontFamily: "var(--f-sans)",
                      fontSize: "clamp(0.6rem, min(0.86vw, 1.6vh), 0.78rem)",
                      fontWeight: 600,
                      color: "var(--rev-2)",
                      lineHeight: 1.55,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Numeral — optically centred in the remaining field */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Reveal>
            <span className="t-numeral" aria-hidden="true">
              {numeral}
            </span>
          </Reveal>
        </div>
      </div>
    </SlideWrapper>
  );
}
