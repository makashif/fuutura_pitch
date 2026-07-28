"use client";

import { ReactNode } from "react";
import SlideWrapper, { SlideField } from "./SlideWrapper";
import ProductMark, { ProductKey } from "./ProductMark";
import { Reveal, Eyebrow, Footnote } from "./Primitives";

/* ─────────────────────────────────────────────────────────────
   ProductShowcase — the archetype for a product page.

   Header across the top, then the product shot against its
   capability set. All seven products use it, so the deck reads
   as one family rather than seven separate treatments.

   Two variants, because the products ship on different surfaces:
     · "wide" — a desktop web app (ID, Wallet, Trade). The shot
       leads at ~56% width, capabilities run as a ruled list.
     · "tall" — a phone or extension popup (VPN, Chat, Extension).
       The shot sits at its intrinsic size beside a 2-up grid.
───────────────────────────────────────────────────────────── */

interface ProductShowcaseProps {
  id: string;
  folio: string;
  product: ProductKey;
  eyebrow: string;
  /** Use \n for the stacked line breaks. */
  title: string;
  lead: string;
  /** A mockup element from ./Mockups. */
  mockup: ReactNode;
  variant?: "wide" | "tall";
  features: { title: string; body: string }[];
  /** Short capability tags shown beneath the header rule. */
  pills?: string[];
  footnote?: string;
  field?: SlideField;
}

export default function ProductShowcase({
  id,
  folio,
  product,
  eyebrow,
  title,
  lead,
  mockup,
  variant = "wide",
  features,
  pills,
  footnote,
  field = "ivory",
}: ProductShowcaseProps) {
  const cardTone = field === "ivory" ? "white" : "ivory";
  const isWide = variant === "wide";

  return (
    <SlideWrapper id={id} field={field} folio={folio}>
      <div className="stack g-4" style={{ width: "100%" }}>
        {/* ── Header ── */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal>
              <div className="row ai-c g-3">
                <ProductMark
                  product={product}
                  tone="blue"
                  size="clamp(2.1rem, 5vh, 3.2rem)"
                />
                <h2 className="t-h2" style={{ whiteSpace: "pre-line" }}>
                  {title}
                </h2>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="t-lead" style={{ maxWidth: "50ch" }}>
              {lead}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        {pills && pills.length > 0 && (
          <Reveal>
            <div className="row g-2 wrap">
              {pills.map((p) => (
                <span key={p} className="pill pill--outline">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {/* ── Shot + capabilities ── */}
        <div className="showcase-row">
          <Reveal className={isWide ? "showcase-shot--wide" : "showcase-shot"}>
            {mockup}
          </Reveal>

          {isWide ? (
            /* Ruled list — reads cleanly in a narrow column */
            <div className="stack list-ruled showcase-copy">
              {features.map((f, i) => (
                <Reveal key={f.title}>
                  <div className="row g-3 ai-s">
                    <span
                      className="t-mono"
                      style={{
                        color: "var(--blue)",
                        flexShrink: 0,
                        paddingTop: "0.25em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="stack g-1">
                      <h3 className="t-h5">{f.title}</h3>
                      <p className="t-xs">{f.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="cols-2 g-2 showcase-copy">
              {features.map((f, i) => (
                <Reveal key={f.title}>
                  <div className={`card card--${cardTone}`} style={{ height: "100%" }}>
                    <span className="t-mono" style={{ color: "var(--blue)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="t-h4">{f.title}</h3>
                    <p className="t-xs">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        {footnote && <Footnote>{footnote}</Footnote>}
      </div>
    </SlideWrapper>
  );
}
