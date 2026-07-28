"use client";

import { ReactNode } from "react";
import SlideWrapper, { SlideField } from "./SlideWrapper";
import { PageHead } from "./Primitives";

/* ─────────────────────────────────────────────────────────────
   Sheet — the standard content page.

   Eyebrow, serif headline and italic lead across the top, then
   whatever the page needs beneath. Two thirds of the deck is a
   Sheet, which is what gives the document its steady rhythm.
───────────────────────────────────────────────────────────── */

interface SheetProps {
  id: string;
  folio: string;
  eyebrow: string;
  /** Use \n to force a line break in the headline. */
  title: string;
  lead?: string;
  children: ReactNode;
  field?: SlideField;
  /** Short rust rule under the headline. */
  rule?: boolean;
  /** Vertically centre the whole content region. */
  center?: boolean;
}

export default function Sheet({
  id,
  folio,
  eyebrow,
  title,
  lead,
  children,
  field = "paper",
  rule = false,
  center = false,
}: SheetProps) {
  return (
    <SlideWrapper id={id} field={field} folio={folio} center={center}>
      <PageHead eyebrow={eyebrow} title={title} lead={lead} rule={rule} />
      {children}
    </SlideWrapper>
  );
}
