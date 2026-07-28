"use client";

import Image from "next/image";
import SlideWrapper from "../SlideWrapper";
import { Reveal, Eyebrow, Footnote } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   24 — Fuutura PRO

   The B2B story. There is no client screen to show here, because
   the product is the rails themselves — so the mark carries the
   page and the capability set does the talking.
───────────────────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    title: "Embeddable identity",
    body: "Drop Fuutura ID into an existing product and inherit KYC, KYB and sanctions screening on day one.",
  },
  {
    title: "Custody without the burden",
    body: "Offer self-custodial wallets without building key management or ever holding client assets.",
  },
  {
    title: "Market access as an API",
    body: "Route client demand into 40,000+ instruments without becoming a broker.",
  },
  {
    title: "B2B2C at the same standard",
    body: "The same infrastructure serves one client directly and a channel serving thousands.",
  },
  {
    title: "Configurable rewards",
    body: "Partners define their own loyalty logic, settling natively on-chain with no reconciliation layer.",
  },
  {
    title: "Compliance inherited",
    body: "An integrating partner takes on the perimeter Fuutura already maintains across 155+ regimes.",
  },
];

export default function ProSlide() {
  return (
    <SlideWrapper id="slide-pro" field="white" folio="24">
      <div className="stack g-4" style={{ width: "100%" }}>
        {/* Header */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>Fuutura PRO</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"The same rails,\nas infrastructure"}
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-lead" style={{ maxWidth: "50ch" }}>
              What Fuutura built for its own clients is available to partners as
              infrastructure. One integration inherits identity, custody, market
              access — and the compliance perimeter around all three.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        <div className="showcase-row">
          {/* The mark carries the page in place of a product shot */}
          <Reveal className="pro-mark-panel">
            <div className="panel stack ai-c jc-c g-3" style={{ height: "100%" }}>
              <Image
                src="/brand/svg/pro-blue.svg"
                alt="Fuutura PRO"
                width={400}
                height={445}
                unoptimized
                style={{
                  width: "clamp(110px, 15vw, 200px)",
                  height: "auto",
                }}
              />
              <span className="t-label" style={{ textAlign: "center" }}>
                Fuutura for Business
              </span>
              <span
                className="t-xs"
                style={{ textAlign: "center", maxWidth: "26ch" }}
              >
                Identity, custody and markets, offered as components rather than
                as a destination.
              </span>
            </div>
          </Reveal>

          {/* Capabilities */}
          <div className="cols-2 g-2 showcase-copy">
            {CAPABILITIES.map((c) => (
              <Reveal key={c.title}>
                <div className="card card--ivory" style={{ height: "100%" }}>
                  <h3 className="t-h5">{c.title}</h3>
                  <p className="t-xs">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Footnote>
          The distribution argument: every partner that integrates Fuutura PRO
          brings verified clients onto the same rails, and the identity layer
          compounds with each one.
        </Footnote>
      </div>
    </SlideWrapper>
  );
}
