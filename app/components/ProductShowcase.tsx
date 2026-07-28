"use client";

import { ReactNode } from "react";
import SlideWrapper, { SlideField } from "./SlideWrapper";
import { Reveal, PageHead, IconList, Badge } from "./Primitives";
import { IconName, BadgeTone } from "./Icon";

/* ─────────────────────────────────────────────────────────────
   ProductShowcase — the archetype for a product page.

   Head across the top, then the product shot against its
   capability list. All seven products use it, so the deck reads
   as one family rather than seven separate treatments.

   Two variants, because the products ship on different surfaces:
     · "wide" — a desktop web app (ID, Wallet, Trade)
     · "tall" — a phone or extension popup (VPN, Chat, Extension)
───────────────────────────────────────────────────────────── */

interface ProductShowcaseProps {
  id: string;
  folio: string;
  eyebrow: string;
  title: string;
  lead: string;
  /** Rust italic positioning line beside the product badge. */
  tagline?: string;
  icon: IconName;
  tone?: BadgeTone;
  mockup: ReactNode;
  variant?: "wide" | "tall";
  features: { icon: IconName; title: string; body: string }[];
  /** Short capability tags under the head. */
  pills?: string[];
  field?: SlideField;
  /**
   * Width of the shot column, for "wide" showcases.
   *
   * Screenshots differ in ratio — ID and Wallet are 1440x796, the Trade
   * terminal is 1440x964. A width-driven frame turns a taller ratio into a
   * taller block, so the terminal needs a narrower column to stay inside
   * the page. Defaults to the value that suits the 796-tall shots.
   */
  shotBasis?: string;
}

export default function ProductShowcase({
  id,
  folio,
  eyebrow,
  title,
  lead,
  tagline,
  icon,
  tone = "sage",
  mockup,
  variant = "wide",
  features,
  pills,
  field = "paper",
  shotBasis = "54%",
}: ProductShowcaseProps) {
  const isWide = variant === "wide";

  return (
    <SlideWrapper id={id} field={field} folio={folio}>
      <PageHead eyebrow={eyebrow} title={title} lead={lead} />

      {/* Product identity strip */}
      {tagline && (
        <Reveal>
          <div className="row ai-c g-3 wrap">
            <Badge icon={icon} tone={tone} size="lg" />
            <span className="t-ital">{tagline}</span>
            {pills && pills.length > 0 && (
              <div className="row g-2 wrap" style={{ marginLeft: "auto" }}>
                {pills.map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      )}

      {/* Shot + capabilities */}
      <div className="showcase-row" style={{ flex: 1, minHeight: 0 }}>
        <Reveal
          className={isWide ? "showcase-shot--wide" : "showcase-shot"}
          style={isWide ? { flexBasis: shotBasis } : undefined}
        >
          {mockup}
        </Reveal>

        <div className="showcase-copy">
          <IconList items={features} />
        </div>
      </div>
    </SlideWrapper>
  );
}
