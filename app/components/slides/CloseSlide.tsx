"use client";

import Image from "next/image";
import SlideWrapper from "../SlideWrapper";
import { Reveal, Eyebrow, PillarCard } from "../Primitives";
import { Badge } from "../Icon";

/* ── 30 — Close ────────────────────────────────────────────────
   Mirrors the cover, so the document closes where it opened.
───────────────────────────────────────────────────────────── */

const NEXT = [
  {
    icon: "fingerprint" as const,
    title: "Verify",
    caption: "One identity, 180+ countries",
    tint: "sage" as const,
  },
  {
    icon: "chart" as const,
    title: "Trade",
    caption: "40,000+ instruments",
    tint: "peri" as const,
  },
  {
    icon: "send" as const,
    title: "Send & Spend",
    caption: "Under 1% · 80M+ merchants",
    tint: "sand" as const,
  },
  {
    icon: "link" as const,
    title: "Connect",
    caption: "Public L2 · tokenisation next",
    tint: "dark" as const,
  },
];

export default function CloseSlide() {
  return (
    <SlideWrapper id="slide-close" folio="24">
      <div className="stack g-4" style={{ width: "100%", flex: 1, justifyContent: "center" }}>
        <Reveal>
          <Badge icon="exchange" tone="hollow" />
        </Reveal>

        <Reveal>
          <Eyebrow>Verify. Trade. Send. Spend. Connect.</Eyebrow>
        </Reveal>

        <Reveal>
          <Image
            src="/brand/mark/fuutura-lockup-black.png"
            alt="Fuutura"
            width={2872}
            height={675}
            unoptimized
            className="lockup"
            style={{ width: "clamp(150px, 21vw, 300px)" }}
          />
        </Reveal>

        <Reveal>
          <h2 className="t-hero" style={{ maxWidth: "32ch" }}>
            Real access to the global financial system, for millions across the
            Global South
          </h2>
        </Reveal>

        <Reveal>
          <span className="rule-rust" />
        </Reveal>

        <Reveal>
          <p className="t-lead" style={{ maxWidth: "88ch" }}>
            Built as infrastructure, made to last — and licensed so it can grow
            where it is needed most.
          </p>
        </Reveal>

        <div className="grid-4" style={{ width: "100%", marginTop: "0.35rem" }}>
          {NEXT.map((n) => (
            <Reveal key={n.title}>
              <PillarCard
                icon={n.icon}
                title={n.title}
                caption={n.caption}
                tint={n.tint}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="row ai-c g-4 wrap" style={{ marginTop: "0.2rem" }}>
            <a
              href="mailto:info@fuutura.com"
              className="t-title"
              style={{ color: "var(--rust)", textDecoration: "none" }}
            >
              info@fuutura.com
            </a>
            <span className="rule-v" style={{ height: "1.1em" }} />
            <a
              href="https://www.fuutura.com"
              target="_blank"
              rel="noreferrer"
              className="t-title"
              style={{ textDecoration: "none" }}
            >
              www.fuutura.com
            </a>
            <span className="t-cap" style={{ marginLeft: "auto", maxWidth: "58ch" }}>
              Confidential — for the named recipient only. Not an offer or
              solicitation, and not for distribution to U.S. Persons.
            </span>
          </div>
        </Reveal>
      </div>
    </SlideWrapper>
  );
}
