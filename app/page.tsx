import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";

import CoverSlide from "./components/CoverSlide";
import MissionSlide from "./components/slides/MissionSlide";
import OpportunitySlide from "./components/slides/OpportunitySlide";
import EcosystemSlide from "./components/slides/EcosystemSlide";

import IdShowcase from "./components/slides/IdShowcase";
import IdentitySlide from "./components/slides/IdentitySlide";
import VerificationSlide from "./components/slides/VerificationSlide";

import WalletShowcase from "./components/slides/WalletShowcase";
import WalletDilemmaSlide from "./components/slides/WalletDilemmaSlide";
import ExtensionShowcase from "./components/slides/ExtensionShowcase";
import RemittanceSlide from "./components/slides/RemittanceSlide";

import TradeShowcase from "./components/slides/TradeShowcase";
import RiskSlide from "./components/slides/RiskSlide";
import InstrumentsSlide from "./components/slides/InstrumentsSlide";

import ProSlide from "./components/slides/ProSlide";

import ChainSlide from "./components/slides/ChainSlide";
import ChainEnablesSlide from "./components/slides/ChainEnablesSlide";
import FtraSlide from "./components/slides/FtraSlide";
import CloseSlide from "./components/slides/CloseSlide";

/* ─────────────────────────────────────────────────────────────
   FUUTURA — PRODUCT OVERVIEW
   19 pages, organised by product.

   This is a client-facing product deck, so it runs as one
   continuous document: no chapter dividers, no abstract sections.
   Each product opens with its own page and is followed by the
   pages that detail it, and every eyebrow names the product it
   belongs to — which is what carries the structure.

     01      Overview, mission, why Fuutura, the ecosystem
     05–07   Fuutura Trade
     08–10   Fuutura ID
     11      Fuutura PRO
     12–14   Fuutura Wallet and payments
     15      Fuutura Extension
     16–17   On-Chain Settlement and what it unlocks
     18      $FTRA
     19      Close
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
      <RiskSlide />
      <InstrumentsSlide />

      {/* ── Fuutura ID ── */}
      <IdShowcase />
      <IdentitySlide />
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
      <ChainEnablesSlide />

      {/* ── $FTRA ── */}
      <FtraSlide />

      {/* ── Close ── */}
      <CloseSlide />
    </PresentationShell>
  );
}
