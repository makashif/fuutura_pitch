import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";

import CoverSlide from "./components/CoverSlide";
import MissionSlide from "./components/slides/MissionSlide";
import OpportunitySlide from "./components/slides/OpportunitySlide";
import EcosystemSlide from "./components/slides/EcosystemSlide";

import IdShowcase from "./components/slides/IdShowcase";
import IdentitySlide from "./components/slides/IdentitySlide";
import VerificationSlide from "./components/slides/VerificationSlide";
import CoverageSlide from "./components/slides/CoverageSlide";
import ComplianceSlide from "./components/slides/ComplianceSlide";

import WalletShowcase from "./components/slides/WalletShowcase";
import WalletDilemmaSlide from "./components/slides/WalletDilemmaSlide";
import ExtensionShowcase from "./components/slides/ExtensionShowcase";
import RemittanceSlide from "./components/slides/RemittanceSlide";
import CardRewardsSlide from "./components/slides/CardRewardsSlide";

import TradeShowcase from "./components/slides/TradeShowcase";
import RiskSlide from "./components/slides/RiskSlide";
import InstrumentsSlide from "./components/slides/InstrumentsSlide";

import VpnChatSlide from "./components/slides/VpnChatSlide";
import ProSlide from "./components/slides/ProSlide";

import ChainSlide from "./components/slides/ChainSlide";
import ChainEnablesSlide from "./components/slides/ChainEnablesSlide";
import TokenisationSlide from "./components/slides/TokenisationSlide";
import FtraSlide from "./components/slides/FtraSlide";
import CloseSlide from "./components/slides/CloseSlide";

/* ─────────────────────────────────────────────────────────────
   FUUTURA — PRODUCT OVERVIEW
   24 pages, organised by product.

   This is a client-facing product deck, so it runs as one
   continuous document: no chapter dividers, no abstract sections.
   Each product opens with its own page and is followed by the
   pages that detail it, and every eyebrow names the product it
   belongs to — which is what carries the structure.

     01      Overview, mission, why Fuutura, the ecosystem
     05–09   Fuutura ID
     10–14   Fuutura Wallet, Extension, payments and the card
     15–17   Fuutura Trade
     18      Fuutura VPN & Chat
     19      Fuutura PRO
     20–23   Settlement, capability, tokenisation, $FTRA
     24      Close
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

      {/* ── Fuutura ID ── */}
      <IdShowcase />
      <IdentitySlide />
      <VerificationSlide />
      <CoverageSlide />
      <ComplianceSlide />

      {/* ── Fuutura Wallet, Extension & payments ── */}
      <WalletShowcase />
      <WalletDilemmaSlide />
      <ExtensionShowcase />
      <RemittanceSlide />
      <CardRewardsSlide />

      {/* ── Fuutura Trade ── */}
      <TradeShowcase />
      <RiskSlide />
      <InstrumentsSlide />

      {/* ── Fuutura VPN, Chat & PRO ── */}
      <VpnChatSlide />
      <ProSlide />

      {/* ── Settlement & the token ── */}
      <ChainSlide />
      <ChainEnablesSlide />
      <TokenisationSlide />
      <FtraSlide />

      {/* ── Close ── */}
      <CloseSlide />
    </PresentationShell>
  );
}
