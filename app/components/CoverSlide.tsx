"use client";

import Image from "next/image";
import SlideWrapper from "./SlideWrapper";
import { Reveal, Eyebrow, PillarCard } from "./Primitives";
import { Badge } from "./Icon";

/* ─────────────────────────────────────────────────────────────
   01 — Cover

   A direct translation of the Product Overview's opening page:
   circle mark, eyebrow, black lockup, serif headline, short rust
   rule, italic lead, then the four pillars of the ecosystem.
───────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    icon: "chart" as const,
    title: "Trading Platform",
    caption: "Licensed synthetic exchange",
    tint: "dark" as const,
  },
  {
    icon: "fingerprint" as const,
    title: "Digital Identity",
    caption: "Access Standard · KYC / KYB / KYT",
    tint: "sage" as const,
  },
  {
    icon: "wallet" as const,
    title: "Self-Custodial Wallet",
    caption: "Client-held keys, always",
    tint: "peri" as const,
  },
  {
    icon: "link" as const,
    title: "On-Chain Settlement",
    caption: "Public L2 · tokenisation roadmap",
    tint: "sand" as const,
  },
];

export default function CoverSlide() {
  return (
    <SlideWrapper id="slide-cover" folio="01">
      <div className="stack g-4" style={{ width: "100%", flex: 1, justifyContent: "center" }}>
        <Reveal>
          <Badge icon="exchange" tone="hollow" />
        </Reveal>

        <Reveal>
          <Eyebrow>Product Overview &nbsp;·&nbsp; Confidential</Eyebrow>
        </Reveal>

        <Reveal>
          <Image
            src="/brand/mark/fuutura-lockup-black.png"
            alt="Fuutura"
            width={2872}
            height={675}
            unoptimized
            priority
            className="lockup"
            style={{ width: "clamp(150px, 21vw, 300px)" }}
          />
        </Reveal>

        <Reveal>
          <h1 className="t-hero" style={{ maxWidth: "34ch" }}>
            A licensed, self-custodial financial ecosystem for global market
            access
          </h1>
        </Reveal>

        <Reveal>
          <span className="rule-rust" />
        </Reveal>

        <Reveal>
          <p className="t-lead" style={{ maxWidth: "92ch" }}>
            Compliant, on-chain-settled exposure to the world&rsquo;s assets —
            built for the markets the incumbent rails don&rsquo;t reach.
          </p>
        </Reveal>

        <div className="grid-4 grid-pillars" style={{ width: "100%", marginTop: "0.35rem" }}>
          {PILLARS.map((p) => (
            <Reveal key={p.title}>
              <PillarCard
                icon={p.icon}
                title={p.title}
                caption={p.caption}
                tint={p.tint}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
