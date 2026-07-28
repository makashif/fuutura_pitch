"use client";

import SlideWrapper from "../SlideWrapper";
import { PhoneMockup } from "../Mockups";
import ProductMark, { ProductKey } from "../ProductMark";
import { Reveal, Eyebrow, Footnote } from "../Primitives";

/* ─────────────────────────────────────────────────────────────
   23 — Fuutura VPN & Fuutura Chat

   The two mobile-native products, shown together: both exist for
   the same reason, and both are only cheap to build because the
   identity layer already exists.
───────────────────────────────────────────────────────────── */

const SURFACES: {
  key: ProductKey;
  name: string;
  screen: string;
  alt: string;
  desc: string;
  points: string[];
}[] = [
    {
      key: "vpn",
      name: "Fuutura VPN",
      screen: "/images/screens/vpn/vpn_s4.jpg",
      alt: "Fuutura VPN — connecting to a server with live throughput",
      desc: "Encrypted transport as native infrastructure rather than a third-party add-on.",
      points: [
        "Global server estate with live throughput",
        "Privacy is not outsourced to another vendor",
        "Most useful exactly where surveillance is the norm",
      ],
    },
    {
      key: "chat",
      name: "Fuutura Chat",
      screen: "/images/screens/chat/chat_s4.jpg",
      alt: "Fuutura Chat — an encrypted conversation with voice notes and reactions",
      desc: "Identity-verified messaging, so the person you transact with is provably the person you are speaking to.",
      points: [
        "Every participant is already KYC-verified",
        "Removes the impersonation surface entirely",
        "Encrypted end to end, voice and text",
      ],
    },
  ];

export default function VpnChatSlide() {
  return (
    <SlideWrapper id="slide-vpn-chat" field="ivory" folio="23">
      <div className="stack g-4" style={{ width: "100%" }}>
        {/* Header */}
        <div className="split split--even" style={{ alignItems: "end" }}>
          <div className="stack g-3">
            <Reveal>
              <Eyebrow>Privacy & Communication</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="t-h1" style={{ whiteSpace: "pre-line" }}>
                {"Native, not\nbolted on"}
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-lead" style={{ maxWidth: "50ch" }}>
              Both of these exist because one verified identity makes them
              cheaper to build than to buy — and because a person&rsquo;s
              digital life does not stop at their balance.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <span className="rule-h rule-h--ink" />
        </Reveal>

        {/* The two mobile products */}
        <div className="cols-2 g-3" style={{ width: "100%" }}>
          {SURFACES.map((s) => (
            <div key={s.key} className="dual-product">
              <Reveal>
                <PhoneMockup
                  src={s.screen}
                  alt={s.alt}
                  height="clamp(230px, 43svh, 400px)"
                />
              </Reveal>

              <div className="stack g-2 flex-1" style={{ minWidth: 0 }}>
                <Reveal>
                  <div className="row ai-c g-2">
                    <ProductMark
                      product={s.key}
                      tone="blue"
                      size="clamp(1.7rem, 3.8vh, 2.5rem)"
                    />
                    <h3 className="t-h4">{s.name}</h3>
                  </div>
                </Reveal>

                <Reveal>
                  <p className="t-sm">{s.desc}</p>
                </Reveal>

                <Reveal>
                  <div className="stack list-ruled" style={{ width: "100%" }}>
                    {s.points.map((p) => (
                      <span key={p} className="t-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>

        <Footnote>
          Neither product is a diversification. Each one closes a gap that would
          otherwise force a verified client outside the perimeter.
        </Footnote>
      </div>
    </SlideWrapper>
  );
}
