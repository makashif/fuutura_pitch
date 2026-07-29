"use client";

import Sheet from "../Sheet";
import { Reveal, FeatureCard, SubLabel, Badge } from "../Primitives";

/* ── 29 — $FTRA ────────────────────────────────────────────────
   Deliberately restrained. The important point is the separation
   of concerns: USDT settles value, $FTRA aligns participation.
   Conflating the two is what has sunk comparable projects.
───────────────────────────────────────────────────────────── */

const UTILITY = [
  {
    icon: "spark" as const,
    title: "Earned on activity",
    body: "Accrues to clients for real usage — transacting, holding and referring — rather than for speculation.",
    tint: "sand" as const,
  },
  {
    icon: "coins" as const,
    title: "Programme currency",
    body: "The unit enterprises configure their own rewards and loyalty programmes in, settling natively on-chain.",
    tint: "sage" as const,
  },
  {
    icon: "users" as const,
    title: "Ecosystem alignment",
    body: "Aligns the interests of clients, partners and channels as the network grows past any single product.",
    tint: "peri" as const,
  },
];

export default function FtraSlide() {
  return (
    <Sheet
      id="slide-ftra"
      folio="19"
      eyebrow="$FTRA · The Ecosystem Token"
      title="$FTRA"
      lead="Powering the Fuutura ecosystem — aligning the interests of clients, partners and channels as the network grows past any single product."
      rule
    >
      <Reveal>
        <div className="card card--dark row ai-c g-3 wrap">
          <Badge icon="scales" tone="dark" size="lg" />
          <div className="stack g-1 flex-1" style={{ minWidth: "18rem" }}>
            <SubLabel>An important separation</SubLabel>
            <p className="t-body">
              Settlement across the platform is in USDT. No operator-issued token
              stands in for value anywhere in the stack — $FTRA aligns
              participation, it does not underwrite the balance sheet.
            </p>
          </div>
          <span className="pill pill--dark">USDT settles value</span>
        </div>
      </Reveal>

      <div className="grid-3 grid-fill" style={{ width: "100%" }}>
        {UTILITY.map((u) => (
          <Reveal key={u.title}>
            <FeatureCard
              icon={u.icon}
              title={u.title}
              body={u.body}
              tint={u.tint}
              split
            />
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
