"use client";

import ProductShowcase from "../ProductShowcase";
import { BrowserMockup } from "../Mockups";

/* ── 07 — Fuutura ID ───────────────────────────────────────── */

const FEATURES = [
  {
    title: "A live identity score",
    body: "Verification state, risk band and jurisdiction resolve into one score a partner can read — rather than a folder of documents they must interpret.",
  },
  {
    title: "Tiered by capability",
    body: "KYC levels map to what a client may actually do. Entitlements widen as verification deepens, and never before.",
  },
  {
    title: "Portable across platforms",
    body: "Connected wallets and third-party venues read the same credential, so onboarding elsewhere becomes a permission rather than a process.",
  },
  {
    title: "Continuous, not one-shot",
    body: "Expiring documents, sanctions hits and risk flags surface as alerts against a living record.",
  },
];

export default function IdShowcase() {
  return (
    <ProductShowcase
      id="slide-id"
      folio="07"
      field="ivory"
      product="id"
      variant="wide"
      eyebrow="Fuutura ID"
      title={"One verification.\nEvery door."}
      lead="Identity is the first piece of Fuutura infrastructure. Prove who you are once and that proof carries across custody, markets and payments — with no re-onboarding at any of them."
      pills={[
        "180+ countries",
        "AI document checks",
        "On-chain identity token",
        "KYC · KYB · KYT",
      ]}
      mockup={
        <BrowserMockup
          src="/images/screens/id_s1.jpg"
          alt="Fuutura ID dashboard — identity score, verification progress and compliance status"
          url="id.fuutura.com"
          w={1440}
          h={796}
        />
      }
      features={FEATURES}
      footnote="KYC is Fuutura's own technology. KYB, sanctions screening and on-chain monitoring run through specialist vendors — the parts that must be best-in-class are not built twice."
    />
  );
}
