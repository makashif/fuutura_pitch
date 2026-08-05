"use client";

import Sheet from "../Sheet";
import { Reveal, Badge, SubLabel, ClosingLine } from "../Primitives";

/* ── 07 — Tiered Leverage ──────────────────────────────────────
   The guardrail page for Fuutura Trade. The ladder is the
   argument: leverage is a capacity a trader reaches, stage by
   stage, rather than a setting handed over at signup.
───────────────────────────────────────────────────────────── */

const STAGES = [
  {
    stage: "Verified access",
    body: "A verified identity and an account type open the door. Nothing is leveraged at signup.",
    gate: "Gate · Identity & account type",
    fill: 1,
    rise: "3.6rem",
    tint: "",
  },
  {
    stage: "Demonstrated history",
    body: "A traded record against defined parameters, built on the account before any entitlement moves.",
    gate: "Gate · Traded record",
    fill: 2,
    rise: "1.8rem",
    tint: "card--sand",
  },
  {
    stage: "Capacity raised",
    body: "Required steps completed and set thresholds cleared — capacity advances one step, inside the tier's own cap.",
    gate: "Gate · Thresholds cleared",
    fill: 3,
    rise: "0rem",
    tint: "card--dark",
  },
];

const PRINCIPLES = [
  {
    icon: "scales" as const,
    title: "Earned, not granted",
    body: "Leverage unlocks through demonstrated trading history and account type. Access stays reserved for traders who meet defined parameters.",
    tone: "sage" as const,
  },
  {
    icon: "cap" as const,
    title: "Educative gating",
    body: "No leverage until each stage is cleared — required steps completed and thresholds met before capacity increases.",
    tone: "peri" as const,
  },
  {
    icon: "shield" as const,
    title: "Responsible by design",
    body: "Tiered caps and progressive access keep exposure proportionate to experience at every point on the ladder.",
    tone: "blush" as const,
  },
];

export default function LeverageSlide() {
  return (
    <Sheet
      id="slide-leverage"
      folio="07"
      eyebrow="Fuutura Trade · Tiered Leverage"
      title="Leverage is earned, tier by tier"
      lead="Guardrails that make leverage a privilege experienced traders unlock — not a default that beginners inherit."
    >
      <Reveal>
        <div className="row ai-c g-3 wrap">
          <SubLabel>The ladder</SubLabel>
          <span className="rule flex-1" style={{ minWidth: "2rem" }} />
          <div className="row g-2 wrap">
            <span className="pill">Nothing leveraged at signup</span>
            <span className="pill pill--rust">A cap at every tier</span>
          </div>
        </div>
      </Reveal>

      <div className="ladder">
        {STAGES.map((s, i) => (
          <Reveal
            key={s.stage}
            className="rung"
            style={{ "--rise": s.rise } as React.CSSProperties}
          >
            <div className={`card card--split ${s.tint}`.trim()}>
              <div className="stack g-2">
                <div className="row ai-c g-2">
                  <span className="badge badge--dark">
                    <span className="badge-num">{i + 1}</span>
                  </span>
                  <h3 className="t-title">{s.stage}</h3>
                </div>
                <p className="t-cap">{s.body}</p>
              </div>

              <div className="stack g-2" style={{ marginTop: "var(--sp-3)" }}>
                <div className="row ai-c jc-b g-2">
                  <span className="t-idx">{s.gate}</span>
                  <span className="t-idx">Capacity</span>
                </div>
                <div className="meter" aria-hidden="true">
                  {[0, 1, 2].map((seg) => (
                    <span
                      key={seg}
                      className={`meter-seg ${seg < s.fill ? "meter-seg--on" : ""}`.trim()}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="row ai-c g-3">
          <SubLabel>Why it is built this way</SubLabel>
          <span className="rule flex-1" style={{ minWidth: "2rem" }} />
        </div>
      </Reveal>

      <div className="grid-3 ruled-cols" style={{ width: "100%" }}>
        {PRINCIPLES.map((p) => (
          <Reveal key={p.title}>
            <div className="row g-3 ai-s">
              <Badge icon={p.icon} tone={p.tone} />
              <div className="stack g-1 flex-1">
                <h4 className="t-title">{p.title}</h4>
                <p className="t-cap">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ClosingLine>
        The ladder that holds an inexperienced trader back is the same one that
        makes a controlled first step into leveraged markets possible.
      </ClosingLine>
    </Sheet>
  );
}
