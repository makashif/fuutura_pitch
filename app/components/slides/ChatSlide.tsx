"use client";

import Sheet from "../Sheet";
import { ScreenSet } from "../Mockups";
import { Reveal, ClosingLine, ProductPanel } from "../Primitives";

/* ── Fuutura Chat ──────────────────────────
   Dedicated slide for Chat with 3 screens.
───────────────────────────────────────────────────────────── */

const CHAT_ITEMS = [
  {
    icon: "fingerprint" as const,
    title: "Every participant verified",
    body: "Counterparties are provably who they claim to be, because they are already KYC-verified.",
  },
  {
    icon: "lock" as const,
    title: "Encrypted end to end",
    body: "Text, voice notes and calls, with no plaintext intermediary.",
  },
  {
    icon: "handshake" as const,
    title: "No impersonation surface",
    body: "The most common vector in retail finance fraud is removed outright.",
  },
];

const SCREENS = [
  { src: "/images/screens/chat/chat_s9.jpg", alt: "Chat home" },
  { src: "/images/screens/chat/chat_s2.jpg", alt: "Chat message" },
  { src: "/images/screens/chat/chat_s1.jpg", alt: "Chat media" },
];

export default function ChatSlide() {
  return (
    <Sheet
      id="slide-chat"
      folio="17"
      eyebrow="Fuutura Chat"
      title="Identity-verified messaging"
      lead="A person's digital life does not stop at their balance. Because every participant is KYC-verified by Fuutura ID, the most common vectors in retail finance fraud are removed outright."
    >
      <div className="split">
        <ProductPanel
          icon="chat"
          tone="sage"
          name="Fuutura Chat"
          tagline="Native, not bolted on"
          items={CHAT_ITEMS}
        />

        <Reveal>
          <ScreenSet type="phone" screens={SCREENS} />
        </Reveal>
      </div>

      <ClosingLine>
        This product is not a diversification — it closes a gap that would
        otherwise force a verified client outside the perimeter.
      </ClosingLine>
    </Sheet>
  );
}
