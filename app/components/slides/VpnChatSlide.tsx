"use client";

import Sheet from "../Sheet";
import { PhoneMockup } from "../Mockups";
import { Reveal, Badge, IconList, ClosingLine } from "../Primitives";
import { IconName, BadgeTone } from "../Icon";

/* ── 23 — Fuutura VPN & Fuutura Chat ──────────────────────────
   The two mobile-native products, shown together: both exist for
   the same reason, and both are only cheap to build because the
   identity layer already exists.
───────────────────────────────────────────────────────────── */

const SURFACES: {
  key: string;
  icon: IconName;
  tone: BadgeTone;
  name: string;
  tagline: string;
  screen: string;
  alt: string;
  items: { icon: IconName; title: string; body: string }[];
}[] = [
    {
      key: "vpn",
      icon: "vpn",
      tone: "peri",
      name: "Fuutura VPN",
      tagline: "Privacy as infrastructure, not an add-on",
      screen: "/images/screens/vpn/vpn_s4.jpg",
      alt: "Fuutura VPN — connecting to a server with live throughput",
      items: [
        {
          icon: "globe",
          title: "Global server estate",
          body: "Live throughput and location choice, surfaced before the client commits.",
        },
        {
          icon: "shield",
          title: "Never outsourced",
          body: "Encrypted transport is Fuutura's own, so privacy is not delegated to a third party.",
        },
        {
          icon: "users",
          title: "Built for hard markets",
          body: "Most useful exactly where network surveillance is the norm.",
        },
      ],
    },
    {
      key: "chat",
      icon: "chat",
      tone: "sage",
      name: "Fuutura Chat",
      tagline: "Identity-verified messaging",
      screen: "/images/screens/chat/chat_s4.jpg",
      alt: "Fuutura Chat — an encrypted conversation with voice notes and reactions",
      items: [
        {
          icon: "fingerprint",
          title: "Every participant verified",
          body: "Counterparties are provably who they claim to be, because they are already KYC-verified.",
        },
        {
          icon: "lock",
          title: "Encrypted end to end",
          body: "Text, voice notes and calls, with no plaintext intermediary.",
        },
        {
          icon: "handshake",
          title: "No impersonation surface",
          body: "The most common vector in retail finance fraud is removed outright.",
        },
      ],
    },
  ];

export default function VpnChatSlide() {
  return (
    <Sheet
      id="slide-vpn-chat"
      folio="18"
      eyebrow="Fuutura VPN & Fuutura Chat"
      title="Native, not bolted on"
      lead="Both of these exist because one verified identity makes them cheaper to build than to buy — and because a person's digital life does not stop at their balance."
    >
      <div className="grid-2" style={{ width: "100%", flex: 1, minHeight: 0 }}>
        {SURFACES.map((s) => (
          <div key={s.key} className="panel">
            <Reveal>
              <div className="row ai-c g-3">
                <Badge icon={s.icon} tone={s.tone} size="lg" />
                <div className="stack g-1">
                  <h3 className="t-sub">{s.name}</h3>
                  <span className="t-ital">{s.tagline}</span>
                </div>
              </div>
            </Reveal>

            <div className="dual-product">
              <Reveal>
                <PhoneMockup
                  src={s.screen}
                  alt={s.alt}
                  height="clamp(190px, 30svh, 290px)"
                />
              </Reveal>
              <div className="flex-1">
                <IconList items={s.items} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ClosingLine>
        Neither product is a diversification. Each one closes a gap that would
        otherwise force a verified client outside the perimeter.
      </ClosingLine>
    </Sheet>
  );
}
