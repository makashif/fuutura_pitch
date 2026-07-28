"use client";

import SlideWrapper from "./SlideWrapper";
import PhoneMockup from "./PhoneMockup";
import ProductMark, { ProductKey } from "./ProductMark";
import { Reveal, Eyebrow, Footnote } from "./Primitives";

/* ─────────────────────────────────────────────────────────────
   ProductShowcase — the archetype for a flagship product page.

   Header across the top, then the product shot at left against
   its capability set at right. Wallet and Trade both use it, so
   the two read unmistakably as siblings.
───────────────────────────────────────────────────────────── */

interface ProductShowcaseProps {
  id: string;
  folio: string;
  product: ProductKey;
  eyebrow: string;
  /** Use \n for the stacked line breaks. */
  title: string;
  lead: string;
  mockupSrc: string;
  mockupAlt?: string;
  features: { title: string; body: string }[];
  /** Short capability tags shown beneath the header rule. */
  pills?: string[];
  footnote?: string;
  field?: "ivory" | "white";
}

export default function ProductShowcase({
  id,
  folio,
  product,
  eyebrow,
  title,
  lead,
  mockupSrc,
  mockupAlt,
  features,
  pills,
  footnote,
  field = "ivory",
}: ProductShowcaseProps) {
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
                  size="clamp(2.2rem, 5.2vh, 3.3rem)"
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
        <div className="row g-5 ai-c wrap" style={{ width: "100%" }}>
          <Reveal>
            <PhoneMockup
              src={mockupSrc}
              alt={mockupAlt}
              height="clamp(200px, 38svh, 380px)"
            />
          </Reveal>

          <div
            className="cols-2 g-2 flex-1"
            style={{ minWidth: "280px" }}
          >
            {features.map((f, i) => (
              <Reveal key={f.title}>
                <div
                  className={`card card--${field === "ivory" ? "white" : "ivory"}`}
                  style={{ height: "100%" }}
                >
                  <span className="t-mono" style={{ color: "var(--blue)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-h4">{f.title}</h3>
                  <p className="t-xs">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {footnote && <Footnote>{footnote}</Footnote>}
      </div>
    </SlideWrapper>
  );
}
