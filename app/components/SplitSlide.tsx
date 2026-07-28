"use client";

import { ReactNode } from "react";
import SlideWrapper, { SlideField } from "./SlideWrapper";
import { SlideTitle, Footnote } from "./Primitives";

/* ─────────────────────────────────────────────────────────────
   SplitSlide — the brand book's signature two-zone page.

   Left  : titling column (eyebrow, stacked uppercase headline,
           supporting copy) set quietly on the field.
   Right : the content area, where cards, diagrams and grids live.

   Roughly two thirds of the deck uses this archetype, which is
   what gives the document its steady rhythm.
───────────────────────────────────────────────────────────── */

interface SplitSlideProps {
  id: string;
  folio?: string;
  field?: SlideField;
  /** Titling column */
  eyebrow?: string;
  title: string;
  lead?: string;
  body?: string[];
  /** Content column */
  children: ReactNode;
  /** Quiet closing line across the full width */
  footnote?: ReactNode;
  /** Column ratio. "wide" gives the content area more room. */
  ratio?: "default" | "wide" | "even";
  /** Vertically centre the content column against the titling column. */
  center?: boolean;
}

export default function SplitSlide({
  id,
  folio,
  field = "ivory",
  eyebrow,
  title,
  lead,
  body,
  children,
  footnote,
  ratio = "default",
  center = false,
}: SplitSlideProps) {
  const ratioClass =
    ratio === "wide" ? "split--wide" : ratio === "even" ? "split--even" : "";

  return (
    <SlideWrapper id={id} field={field} folio={folio}>
      <div className="stack g-5" style={{ width: "100%" }}>
        <div
          className={`split ${ratioClass}`}
          style={center ? { alignItems: "center" } : undefined}
        >
          {/* ── Titling column ── */}
          <SlideTitle eyebrow={eyebrow} title={title} lead={lead} body={body} />

          {/* ── Content column ── */}
          <div className="stack g-3" style={{ minWidth: 0, width: "100%" }}>
            {children}
          </div>
        </div>

        {footnote && <Footnote>{footnote}</Footnote>}
      </div>
    </SlideWrapper>
  );
}
