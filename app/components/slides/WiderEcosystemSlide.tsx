"use client";

import SlideWrapper from "../SlideWrapper";
import ProductMark, { ProductKey } from "../ProductMark";
import { Reveal, Eyebrow, Stat, Footnote } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   22 — The Wider Ecosystem

   The products that turn a financial platform into somewhere a
   person can conduct their whole digital life.
───────────────────────────────────────────────────────────── */

const SURFACES: {
  key: ProductKey;
  name: string;
  role: string;
  desc: string;
  points: string[];
}[] = [
    {
      key: "pro",
      name: "Fuutura PRO",
      role: "Business",
      desc: "The same rails, offered as infrastructure to partners and B2B2C channels.",
      points: [
        "Embeddable identity, custody and market access",
        "One integration inherits the compliance perimeter",
        "Configurable rewards for enterprise programmes",
      ],
    },
    {
      key: "vpn",
      name: "Fuutura VPN",
      role: "Privacy",
      desc: "Encrypted transport as native infrastructure rather than a third-party add-on.",
      points: [
        "Privacy is not outsourced to another vendor",
        "Sits inside the verified-identity perimeter",
        "Useful precisely where surveillance is the norm",
      ],
    },
    {
      key: "chat",
      name: "Fuutura Chat",
      role: "Communication",
      desc: "Identity-verified messaging, so counterparties are provably who they claim to be.",
      points: [
        "Every participant is already KYC-verified",
        "Removes the impersonation surface entirely",
        "Encrypted end to end",
      ],
    },
  ];

export default function WiderEcosystemSlide() {
  return (
    <SlideWrapper id="slide-wider" field="white" folio="22">
      <div className="stack g-4" style={{ width: "100%" }}>
        {/* Header */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>The Wider Ecosystem</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"Beyond the\naccount"}
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-lead" style={{ maxWidth: "50ch" }}>
              Each of these exists because one verified identity makes it
              cheaper to build than to buy — and because a person&rsquo;s
              financial life does not stop at their balance.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        {/* Three surfaces */}
        <div className="cols-3 g-2" style={{ width: "100%" }}>
          {SURFACES.map((s) => (
            <Reveal key={s.key}>
              <div className="card card--ivory" style={{ height: "100%" }}>
                <div className="row ai-c jc-b g-2">
                  <ProductMark
                    product={s.key}
                    tone="blue"
                    size="clamp(1.9rem, 4.2vh, 2.8rem)"
                  />
                  <span className="t-mono">{s.role}</span>
                </div>
                <h3 className="t-h4">{s.name}</h3>
                <p className="t-xs">{s.desc}</p>
                <span className="rule-h" />
                <div className="stack g-1">
                  {s.points.map((p) => (
                    <div key={p} className="row g-2 ai-s">
                      <span
                        className="t-xs"
                        style={{ color: "var(--blue)", lineHeight: 1.5 }}
                      >
                        ·
                      </span>
                      <span className="t-xs">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Card & rewards */}
        <Reveal>
          <div className="card card--blue row ai-c jc-b wrap g-4">
            <div className="stack g-1" style={{ maxWidth: "46ch" }}>
              <span className="t-label" style={{ color: "#fff" }}>
                Global card & rewards
              </span>
              <span className="t-sm" style={{ color: "var(--rev-2)" }}>
                A Visa card for worldwide spending, with instant crypto-to-fiat
                conversion at the point of sale — so returns earned in the
                ecosystem can be spent outside it.
              </span>
            </div>
            <div className="row g-4 ai-c wrap">
              <Stat value="80M+" label="Merchants" tone="rev" small />
              <span className="rule-v" />
              <Stat value="Instant" label="Crypto-to-fiat" tone="rev" small />
              <span className="rule-v" />
              <Stat value="Global" label="ATM access" tone="rev" small />
            </div>
          </div>
        </Reveal>

        <Footnote>
          The full arc: a verified user earns, invests, sees a portfolio grow,
          collects rewards, and spends the returns anywhere — without leaving
          the ecosystem or re-proving who they are.
        </Footnote>
      </div>
    </SlideWrapper>
  );
}
