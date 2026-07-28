"use client";

import Sheet from "../Sheet";
import { Reveal, Stat, FeatureCard, ClosingLine } from "../Primitives";

/* ── 04 — The Opportunity ──────────────────────────────────── */

const FRICTIONS = [
  {
    icon: "fingerprint" as const,
    title: "Repetitive verification",
    body: "Identity is re-proved from scratch at every venue. Each repeat is a fresh point of abandonment.",
    tint: "sage" as const,
  },
  {
    icon: "doc" as const,
    title: "Verification in days",
    body: "Conventional onboarding runs from hours to weeks, and drop-off compounds at every step of the wait.",
    tint: "peri" as const,
  },
  {
    icon: "users" as const,
    title: "Structural exclusion",
    body: "1.7 billion adults hold no access to basic financial services — not for want of demand, but of rails.",
    tint: "sand" as const,
  },
  {
    icon: "send" as const,
    title: "Punitive cost of movement",
    body: "Remittance still clears at 5–10% over several days, taxing precisely those who can least absorb it.",
    tint: "blush" as const,
  },
  {
    icon: "sitemap" as const,
    title: "Fragmented services",
    body: "Identity, custody, markets and payments sit on separate networks, so nothing compounds and every hand-off leaks.",
    tint: "dark" as const,
  },
];

export default function OpportunitySlide() {
  return (
    <Sheet
      id="slide-opportunity"
      folio="03"
      eyebrow="Why Fuutura Exists"
      title="Digital finance is fragmented"
      lead="People are asked to assemble a financial life from platforms that do not speak to one another — and to prove who they are, over and over, to each of them."
    >
      <Reveal>
        <div className="grid-3 ruled-cols" style={{ width: "100%", maxWidth: "58rem" }}>
          <Stat value="1.7B" label="Adults unbanked" small />
          <Stat value="5–10%" label="Remittance cost" note="Plus 3–7 days to settle" small />
          <Stat value="180+" label="Jurisdictions" small />
        </div>
      </Reveal>

      <div className="grid-5 grid-fill" style={{ width: "100%" }}>
        {FRICTIONS.map((f) => (
          <Reveal key={f.title}>
            <FeatureCard
              icon={f.icon}
              title={f.title}
              body={f.body}
              tint={f.tint}
              sansTitle
              split
            />
          </Reveal>
        ))}
      </div>

      <ClosingLine>
        Every hand-off between those networks is a cost, a delay and a reason to
        give up. The friction is not incidental — it is the architecture.
      </ClosingLine>
    </Sheet>
  );
}
