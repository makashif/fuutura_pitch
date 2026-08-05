"use client";

import SlideWrapper from "../SlideWrapper";
import { Reveal } from "../Primitives";

/* ── 16 — Powered by $FTRA ─────────────────────────────────────
   The sign-off. One line, centred, nothing else on the page.
───────────────────────────────────────────────────────────── */

export default function PoweredByFtraSlide() {
  return (
    <SlideWrapper id="slide-ftra" folio="17" center>
      <div
        className="stack g-4"
        style={{ width: "100%", alignItems: "center", textAlign: "center" }}
      >
        <Reveal>
          <h2 className="t-hero">Powered by $FTRA</h2>
        </Reveal>
      </div>
    </SlideWrapper>
  );
}
