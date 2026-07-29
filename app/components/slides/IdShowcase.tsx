"use client";

import ProductShowcase from "../ProductShowcase";
import { ScreenSet } from "../Mockups";

/* ── 07 — Fuutura ID ──────────────────────────────────────── */

const FEATURES = [
  {
    icon: "spark" as const,
    title: "A live identity score",
    body: "Verification state, risk band and jurisdiction resolve into one score a partner can read — rather than a folder of documents they must interpret.",
  },
  {
    icon: "layers" as const,
    title: "Tiered by capability",
    body: "KYC levels map to what a client may actually do. Entitlements widen as verification deepens, and never before.",
  },
  {
    icon: "link" as const,
    title: "Portable across platforms",
    body: "Connected wallets and third-party venues read the same credential, so onboarding elsewhere becomes a permission rather than a process.",
  },
  {
    icon: "shield" as const,
    title: "Continuous, not one-shot",
    body: "Expiring documents, sanctions hits and risk flags surface as alerts against a living record.",
  },
];

export default function IdShowcase() {
  return (
    <ProductShowcase
      id="slide-id"
      folio="05"
      eyebrow="Fuutura ID"
      title="One verification. Every door."
      lead="Identity is the first piece of Fuutura infrastructure. Prove who you are once and that proof carries across custody, markets and payments — with no re-onboarding at any of them."
      tagline="The Fuutura Access Standard"
      icon="fingerprint"
      tone="sage"
      variant="wide"
      pills={["180+ countries", "AI document checks", "On-chain token", "KYC · KYB · KYT"]}
      mockup={
        <ScreenSet
          type="mixed"
          screens={[
            { src: "/images/screens/id_s1.jpg", alt: "Fuutura ID dashboard", device: "desktop" },
            { src: "/images/screens/id/id_m_s2.jpg", alt: "Fuutura ID mobile view", device: "phone" }
          ]}
        />
      }
      features={FEATURES}
    />
  );
}
