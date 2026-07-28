"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { itemVariants } from "./SlideWrapper";
import Icon, { Badge, Glyph, Arrow, IconName, BadgeTone } from "./Icon";

/* ─────────────────────────────────────────────────────────────
   Page primitives, in the Product Overview's language.
   Every slide composes from these, which is what makes 30 pages
   read as one document.
───────────────────────────────────────────────────────────── */

export type Tint = "paper" | "sage" | "peri" | "sand" | "blush" | "dark" | "plain";

/** Animated block. The `reveal` class is what lets PDF export force
    every animated block to its final state — see globals.css. */
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
    <motion.div
      variants={itemVariants}
      className={`reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Eyebrow — rust diamond + bronze letterspaced label
───────────────────────────────────────────────────────────── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="t-eyebrow">
      <span className="dia">◆</span>
      {children}
    </span>
  );
}

/** Bronze sub-label used inside a page to head a group. */
export function SubLabel({ children }: { children: ReactNode }) {
  return <span className="t-slabel">{children}</span>;
}

/* ─────────────────────────────────────────────────────────────
   PageHead — eyebrow, serif headline, italic lead.
   The opening three lines of nearly every page.
───────────────────────────────────────────────────────────── */
export function PageHead({
  eyebrow,
  title,
  lead,
  rule = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Show the short rust rule beneath the headline. */
  rule?: boolean;
}) {
  return (
    <div className="stack g-2">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>

      <Reveal>
        <h2 className="t-head" style={{ whiteSpace: "pre-line" }}>
          {title}
        </h2>
      </Reveal>

      {rule && (
        <Reveal>
          <span className="rule-rust" style={{ marginTop: "0.35rem" }} />
        </Reveal>
      )}

      {lead && (
        <Reveal>
          <p className="t-lead" style={{ maxWidth: "92ch" }}>
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FeatureCard — tinted card: glyph, serif title, body.
   Body sits at the foot so a row of cards aligns optically.
───────────────────────────────────────────────────────────── */
export function FeatureCard({
  icon,
  title,
  body,
  tint = "paper",
  /** Title rendered in sans-bold rather than serif. */
  sansTitle = false,
  /** Push the body to the card's foot (used on the tall card rows). */
  split = false,
}: {
  icon?: IconName;
  title: string;
  body?: string;
  tint?: Tint;
  sansTitle?: boolean;
  split?: boolean;
}) {
  const tintClass = tint === "paper" ? "" : `card--${tint}`;
  return (
    <div className={`card ${tintClass} ${split ? "card--split" : ""}`.trim()}>
      <div className="stack g-2">
        {icon && <Glyph icon={icon} />}
        <h3 className={sansTitle ? "t-title" : "t-serif"}>{title}</h3>
      </div>
      {body && <p className="t-cap">{body}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PillarCard — the cover's four ecosystem cards: inline glyph and
   serif title on one line, caption pinned to the foot.
───────────────────────────────────────────────────────────── */
export function PillarCard({
  icon,
  title,
  caption,
  tint = "paper",
}: {
  icon: IconName;
  title: string;
  caption: string;
  tint?: Tint;
}) {
  const tintClass = tint === "paper" ? "" : `card--${tint}`;
  return (
    <div className={`card ${tintClass} card--split`.trim()}>
      <div className="row ai-c g-2">
        <Glyph icon={icon} />
        <h3 className="t-serif">{title}</h3>
      </div>
      <p className="t-cap">{caption}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   IconList — badge, bold sans title, body. The identity page's
   list device, and the deck's default way of enumerating.
───────────────────────────────────────────────────────────── */
export function IconList({
  items,
  tone = "paper",
}: {
  items: { icon: IconName; title: string; body: string }[];
  tone?: BadgeTone;
}) {
  return (
    <div className="stack g-3" style={{ width: "100%" }}>
      {items.map((it) => (
        <Reveal key={it.title}>
          <div className="row g-3 ai-s">
            <Badge icon={it.icon} tone={tone} />
            <div className="stack g-1 flex-1">
              <h4 className="t-title">{it.title}</h4>
              <p className="t-cap">{it.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ProductPanel — outlined panel headed by a tinted badge, a serif
   product name and a rust italic positioning line.
───────────────────────────────────────────────────────────── */
export function ProductPanel({
  icon,
  tone = "sage",
  name,
  tagline,
  items,
}: {
  icon: IconName;
  tone?: BadgeTone;
  name: string;
  tagline: string;
  items: { icon: IconName; title: string; body: string }[];
}) {
  return (
    <div className="panel">
      <Reveal>
        <div className="row ai-c g-3">
          <Badge icon={icon} tone={tone} size="lg" />
          <div className="stack g-1">
            <h3 className="t-sub">{name}</h3>
            <span className="t-ital">{tagline}</span>
          </div>
        </div>
      </Reveal>

      <IconList items={items} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Flow — grouped cards separated by rust arrows
───────────────────────────────────────────────────────────── */
export function FlowNode({
  title,
  body,
  tint = "paper",
  rust = false,
  grow = 1,
}: {
  title: string;
  body?: string;
  tint?: Tint;
  /** Render the title in rust — the reference marks the hedge node this way. */
  rust?: boolean;
  grow?: number;
}) {
  const tintClass = tint === "paper" ? "" : `card--${tint}`;
  return (
    <div
      className={`card ${tintClass}`.trim()}
      style={{ flex: `${grow} 1 0`, minWidth: 0, textAlign: "center", gap: "0.2rem" }}
    >
      <h4 className="t-title" style={rust ? { color: "var(--rust)" } : undefined}>
        {title}
      </h4>
      {body && <p className="t-cap">{body}</p>}
    </div>
  );
}

export { Badge, Glyph, Arrow, Icon };

/* ─────────────────────────────────────────────────────────────
   Stat — serif figure over a bronze label
───────────────────────────────────────────────────────────── */
export function Stat({
  value,
  label,
  note,
  small = false,
}: {
  value: string;
  label: string;
  note?: string;
  small?: boolean;
}) {
  return (
    <div className="stack g-1" style={{ minWidth: 0 }}>
      <span className={`t-stat ${small ? "t-stat--sm" : ""}`.trim()}>{value}</span>
      <span className="t-slabel">{label}</span>
      {note && <span className="t-cap">{note}</span>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CompareColumns — traditional vs Fuutura
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
      <div className="cmp-row">
        <div className="stack g-2">
          <SubLabel>{leftTitle}</SubLabel>
          <span className="rule" />
        </div>
        <div className="stack g-2">
          <span className="t-slabel" style={{ color: "var(--rust)" }}>
            {rightTitle}
          </span>
          <span className="rule" style={{ background: "var(--rust)" }} />
        </div>
      </div>

      <div className="stack list-ruled" style={{ width: "100%" }}>
        {rows.map((r, i) => (
          <div key={i} className="cmp-row">
            <div className="row ai-c g-2">
              <span className="cmp-mark cmp-mark--neg">–</span>
              <span className="t-cap">{r.left}</span>
            </div>
            <div className="row ai-c g-2">
              <span className="cmp-mark cmp-mark--pos">✓</span>
              <span className="t-body" style={{ color: "var(--ink)", fontWeight: 500 }}>
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
   Closing line — the italic note the reference sets above its footer
───────────────────────────────────────────────────────────── */
export function ClosingLine({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="t-lead" style={{ maxWidth: "104ch" }}>
        {children}
      </p>
    </Reveal>
  );
}
