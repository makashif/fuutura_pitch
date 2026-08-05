import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";

import CoverSlide from "./components/CoverSlide";
import MissionSlide from "./components/slides/MissionSlide";
import OpportunitySlide from "./components/slides/OpportunitySlide";
import EcosystemSlide from "./components/slides/EcosystemSlide";

import IdShowcase from "./components/slides/IdShowcase";
import VerificationSlide from "./components/slides/VerificationSlide";

import WalletShowcase from "./components/slides/WalletShowcase";
import WalletDilemmaSlide from "./components/slides/WalletDilemmaSlide";
import ExtensionShowcase from "./components/slides/ExtensionShowcase";
import RemittanceSlide from "./components/slides/RemittanceSlide";

import TradeShowcase from "./components/slides/TradeShowcase";
import InstrumentsSlide from "./components/slides/InstrumentsSlide";
import LeverageSlide from "./components/slides/LeverageSlide";

import ProSlide from "./components/slides/ProSlide";

import ChainSlide from "./components/slides/ChainSlide";
import PoweredByFtraSlide from "./components/slides/PoweredByFtraSlide";
import CloseSlide from "./components/slides/CloseSlide";

/* ─────────────────────────────────────────────────────────────
   FUUTURA — PRODUCT OVERVIEW
   17 pages, organised by product.

   This is a client-facing product deck, so it runs as one
   continuous document: no chapter dividers, no abstract sections.
   Each product opens with its own page and is followed by the
   pages that detail it, and every eyebrow names the product it
   belongs to — which is what carries the structure.

     01      Overview, mission, why Fuutura, the ecosystem
     05–07   Fuutura Trade
     08–09   Fuutura ID
     10      Fuutura PRO
     11–13   Fuutura Wallet and payments
     14      Fuutura Extension
     15      On-Chain Settlement
     16      Close
     17      Powered by $FTRA
───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <PresentationShell>
      <NavDots />

      {/* ── Opening ── */}
      <CoverSlide />
      <MissionSlide />
      <OpportunitySlide />
      <EcosystemSlide />

      {/* ── Fuutura Trade ── */}
      <TradeShowcase />
      <InstrumentsSlide />
      <LeverageSlide />

      {/* ── Fuutura ID ── */}
      <IdShowcase />
      <VerificationSlide />

      {/* ── Fuutura PRO ── */}
      <ProSlide />

      {/* ── Fuutura Wallet & payments ── */}
      <WalletShowcase />
      <WalletDilemmaSlide />
      <RemittanceSlide />

      {/* ── Fuutura Extension ── */}
      <ExtensionShowcase />

      {/* ── On-Chain Settlement ── */}
      <ChainSlide />

      {/* ── Close ── */}
      <CloseSlide />

      {/* ── Sign-off ── */}
      <PoweredByFtraSlide />
    </PresentationShell>
  );
}
