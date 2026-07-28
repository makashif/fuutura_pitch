"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { itemVariants } from "./SlideWrapper";

/* ─────────────────────────────────────────────────────────────
   Shared slide primitives.

   Every slide composes from these, which is what makes 25 pages
   read as one document rather than 25 separate designs.
───────────────────────────────────────────────────────────── */

/** Animated direct child of a staggered slide. */
export function Reveal({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Eyebrow — a kicker with the brand's short blue tick rule
───────────────────────────────────────────────────────────── */
export function Eyebrow({
  children,
  tick = true,
}: {
  children: ReactNode;
  tick?: boolean;
}) {
  return (
    <div className="row ai-c g-2">
      {tick && <span className="rule-tick" />}
      <span className="t-label">{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SlideTitle — the brand's stacked uppercase headline,
   optionally followed by supporting copy.
───────────────────────────────────────────────────────────── */
export function SlideTitle({
  eyebrow,
  title,
  lead,
  body,
}: {
  eyebrow?: string;
  /** Use \n to force the stacked line breaks the brand book favours. */
  title: string;
  lead?: string;
  body?: string[];
}) {
  return (
    <div className="stack g-3">
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}

      <Reveal>
        <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal>
          <p className="t-lead" style={{ maxWidth: "42ch" }}>
            {lead}
          </p>
        </Reveal>
      )}

      {body && body.length > 0 && (
        <Reveal>
          <div className="stack g-2" style={{ maxWidth: "44ch" }}>
            {body.map((p, i) => (
              <p key={i} className="t-sm">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Stat — a figure over a label, tabular-aligned
───────────────────────────────────────────────────────────── */
export function Stat({
  value,
  label,
  note,
  small = false,
  tone,
}: {
  value: string;
  label: string;
  note?: string;
  small?: boolean;
  tone?: "blue" | "ink" | "rev";
}) {
  const toneClass =
    tone === "blue" ? "c-blue" : tone === "rev" ? "c-rev" : undefined;

  return (
    <div className="stack g-1" style={{ minWidth: 0 }}>
      <span className={`t-stat ${small ? "t-stat--sm" : ""} ${toneClass ?? ""}`}>
        {value}
      </span>
      <span className="t-label t-label--soft">{label}</span>
      {note && <span className="t-xs">{note}</span>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FeatureCard — the workhorse content block
───────────────────────────────────────────────────────────── */
export function FeatureCard({
  index,
  title,
  body,
  variant = "white",
  icon,
}: {
  index?: string;
  title: string;
  body?: string;
  variant?: "white" | "ivory" | "warm" | "blue" | "sage" | "sky" | "outline";
  icon?: ReactNode;
}) {
  return (
    <div className={`card card--${variant}`}>
      {(index || icon) && (
        <div className="row ai-c g-2">
          {icon}
          {index && !icon && (
            <span
              className="t-mono"
              style={{ color: "var(--blue)", letterSpacing: "0.14em" }}
            >
              {index}
            </span>
          )}
        </div>
      )}
      <h3 className="t-h4">{title}</h3>
      {body && <p className="t-sm">{body}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   RuledList — hairline-divided rows. Pure editorial, no boxes.
   The brand book's default way of listing.
───────────────────────────────────────────────────────────── */
export function RuledList({
  items,
  numbered = false,
}: {
  items: { term: string; desc?: string }[];
  numbered?: boolean;
}) {
  return (
    <div className="stack list-ruled" style={{ width: "100%" }}>
      {items.map((it, i) => (
        <div key={i} className="row g-3 ai-s">
          {numbered && (
            <span
              className="t-mono"
              style={{
                color: "var(--blue)",
                flexShrink: 0,
                paddingTop: "0.2em",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <div className="stack g-1 flex-1">
            <span className="t-h5">{it.term}</span>
            {it.desc && <span className="t-sm">{it.desc}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CompareColumns — "traditional vs Fuutura", used for the
   wallet dilemma and the remittance comparison.
───────────────────────────────────────────────────────────── */
export function CompareColumns({
  leftTitle,
  rightTitle,
  rows,
}: {
  leftTitle: string;
  rightTitle: string;
  rows: { left: string; right: string }[];
}) {
  return (
    <div className="stack g-3" style={{ width: "100%" }}>
      {/* Heads */}
      <div className="cmp-row">
        <div className="stack g-2">
          <span className="t-label t-label--soft">{leftTitle}</span>
          <span className="rule-h" />
        </div>
        <div className="stack g-2">
          <span className="t-label c-blue">{rightTitle}</span>
          <span className="rule-h rule-h--ink" style={{ background: "var(--blue)" }} />
        </div>
      </div>

      {/* Rows */}
      <div className="stack list-ruled" style={{ width: "100%" }}>
        {rows.map((r, i) => (
          <div key={i} className="cmp-row">
            <div className="row ai-c g-2">
              <span className="cmp-mark cmp-mark--neg">—</span>
              <span className="t-sm">{r.left}</span>
            </div>
            <div className="row ai-c g-2">
              <span className="cmp-mark cmp-mark--pos">✓</span>
              <span className="t-body" style={{ fontWeight: 500, color: "var(--ink-1)" }}>
                {r.right}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Footnote — the quiet closing line at the base of a slide
───────────────────────────────────────────────────────────── */
export function Footnote({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <div className="stack g-2" style={{ width: "100%" }}>
        <span className="rule-h" />
        <p className="t-xs" style={{ letterSpacing: "0.01em" }}>
          {children}
        </p>
      </div>
    </Reveal>
  );
}
