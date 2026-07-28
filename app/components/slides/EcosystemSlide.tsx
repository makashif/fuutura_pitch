"use client";

import SlideWrapper from "../SlideWrapper";
import ProductMark, { ProductKey } from "../ProductMark";
import { Reveal, Eyebrow } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   05 — The Ecosystem

   The one slide that has to land: six products, one verified
   identity, a single settlement substrate underneath.
───────────────────────────────────────────────────────────── */

const PRODUCTS: {
  key: ProductKey;
  name: string;
  role: string;
  desc: string;
}[] = [
    {
      key: "id",
      name: "Fuutura ID",
      role: "The trust layer",
      desc: "One verification, classified by jurisdiction, capability and qualification — then reusable across everything else.",
    },
    {
      key: "wallet",
      name: "Fuutura Wallet",
      role: "Custody",
      desc: "Client-held keys, always. Crypto and fiat in one place, with compliance built in rather than bolted on.",
    },
    {
      key: "trade",
      name: "Fuutura Trade",
      role: "Market access",
      desc: "A licensed, non-custodial synthetic exchange reaching 40,000+ instruments, from crypto to tokenised equities.",
    },
    {
      key: "pro",
      name: "Fuutura PRO",
      role: "Business",
      desc: "The same rails, offered as infrastructure — embeddable identity, custody and market access for partner channels.",
    },
    {
      key: "vpn",
      name: "Fuutura VPN",
      role: "Privacy",
      desc: "Encrypted transport as native infrastructure, so privacy is not outsourced to a third party.",
    },
    {
      key: "chat",
      name: "Fuutura Chat",
      role: "Communication",
      desc: "Identity-verified messaging, so the person you transact with is the person you are speaking to.",
    },
  ];

export default function EcosystemSlide() {
  return (
    <SlideWrapper id="slide-ecosystem" field="ivory" folio="05">
      <div className="stack g-4" style={{ width: "100%" }}>
        {/* ── Header ── */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>Utility-First Ecosystem</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"One identity.\nSix products.\nOne ecosystem."}
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <p className="t-lead" style={{ maxWidth: "48ch" }}>
              Each product is useful on its own. Together they compound —
              because access earned in one place opens access across all of it,
              and nothing has to be re-proved.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        {/* ── Product family ── */}
        <div className="cols-3 g-2" style={{ width: "100%" }}>
          {PRODUCTS.map((p) => (
            <Reveal key={p.key}>
              <div className="card card--white" style={{ height: "100%" }}>
                <div className="row ai-c jc-b g-2">
                  <ProductMark
                    product={p.key}
                    tone="blue"
                    size="clamp(1.9rem, 4.2vh, 2.9rem)"
                  />
                  <span className="t-mono" style={{ letterSpacing: "0.14em" }}>
                    {p.role}
                  </span>
                </div>
                <h3 className="t-h4">{p.name}</h3>
                <p className="t-xs">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── The substrate ── */}
        <Reveal>
          <div
            className="card card--blue row ai-c jc-b wrap g-3"
            style={{ width: "100%" }}
          >
            <div className="stack g-1">
              <span className="t-label" style={{ color: "#fff" }}>
                Fuutura Chain · On-Chain Settlement
              </span>
              <span className="t-sm" style={{ color: "var(--rev-2)" }}>
                Position contracts settle on an established public L2, with USDT
                settlement throughout — no operator-issued token stands in for
                value.
              </span>
            </div>
            <div className="row g-3 ai-c">
              <span className="pill pill--rev">Base · Arbitrum · BNB-class</span>
              <span className="pill pill--rev">Modular seven-layer stack</span>
            </div>
          </div>
        </Reveal>
      </div>
    </SlideWrapper>
  );
}
