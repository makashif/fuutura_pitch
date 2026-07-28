"use client";

import SlideWrapper from "../SlideWrapper";
import ProductMark, { ProductKey, PRODUCT_ROLE } from "../ProductMark";
import { Reveal, Eyebrow } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   05 — The Ecosystem

   The one slide that has to land: seven products, one verified
   identity, a single settlement substrate underneath.
───────────────────────────────────────────────────────────── */

const PRODUCTS: { key: ProductKey; name: string; desc: string }[] = [
  {
    key: "id",
    name: "Fuutura ID",
    desc: "One verification, classified by jurisdiction, capability and qualification — then reusable across everything else.",
  },
  {
    key: "wallet",
    name: "Fuutura Wallet",
    desc: "Client-held keys, always. Crypto and fiat in one place, with compliance built in rather than bolted on.",
  },
  {
    key: "trade",
    name: "Fuutura Trade",
    desc: "A licensed, non-custodial synthetic exchange reaching 40,000+ instruments, from crypto to tokenised equities.",
  },
  {
    key: "extension",
    name: "Fuutura Extension",
    desc: "The same wallet and the same perimeter, in the browser — self-custody present at the moment of use.",
  },
  {
    key: "pro",
    name: "Fuutura PRO",
    desc: "The rails offered as infrastructure — embeddable identity, custody and market access for partner channels.",
  },
  {
    key: "vpn",
    name: "Fuutura VPN",
    desc: "Encrypted transport as native infrastructure, so privacy is never outsourced to a third party.",
  },
  {
    key: "chat",
    name: "Fuutura Chat",
    desc: "Identity-verified messaging, so the person you transact with is the person you are speaking to.",
  },
];

export default function EcosystemSlide() {
  return (
    <SlideWrapper id="slide-ecosystem" field="ivory" folio="05">
      <div className="stack g-3" style={{ width: "100%" }}>
        {/* ── Header ── */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>Utility-First Ecosystem</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"One identity.\nSeven products."}
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

        {/* ── The product family ── */}
        <div className="eco-grid">
          {PRODUCTS.map((p) => (
            <Reveal key={p.key}>
              <div className="card card--white" style={{ height: "100%" }}>
                <div className="row ai-c jc-b g-2">
                  <ProductMark
                    product={p.key}
                    tone="blue"
                    size="clamp(1.7rem, 3.7vh, 2.5rem)"
                  />
                  <span className="t-mono" style={{ letterSpacing: "0.13em" }}>
                    {PRODUCT_ROLE[p.key]}
                  </span>
                </div>
                <h3 className="t-h5">{p.name}</h3>
                <p className="t-xs">{p.desc}</p>
              </div>
            </Reveal>
          ))}

          {/* Eighth cell — the substrate every product settles on */}
          <Reveal>
            <div className="card card--blue" style={{ height: "100%" }}>
              <span className="t-label" style={{ color: "#fff" }}>
                On-Chain Settlement
              </span>
              <p className="t-xs" style={{ color: "var(--rev-2)" }}>
                Position contracts settle on an established public L2, with USDT
                throughout — no operator-issued token stands in for value.
              </p>
              <span className="t-mono" style={{ color: "var(--rev-3)" }}>
                Base · Arbitrum · BNB-class
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideWrapper>
  );
}
