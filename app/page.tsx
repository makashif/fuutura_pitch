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

import VpnSlide from "./components/slides/VpnSlide";
import ChatSlide from "./components/slides/ChatSlide";
import ProSlide from "./components/slides/ProSlide";

import ChainSlide from "./components/slides/ChainSlide";
import ChainEnablesSlide from "./components/slides/ChainEnablesSlide";
import TokenisationSlide from "./components/slides/TokenisationSlide";
import FtraSlide from "./components/slides/FtraSlide";
import CloseSlide from "./components/slides/CloseSlide";

/* ─────────────────────────────────────────────────────────────
   FUUTURA — PRODUCT OVERVIEW
   22 pages, organised by product.

   This is a client-facing product deck, so it runs as one
   continuous document: no chapter dividers, no abstract sections.
   Each product opens with its own page and is followed by the
   pages that detail it, and every eyebrow names the product it
   belongs to — which is what carries the structure.

     01      Overview, mission, why Fuutura, the ecosystem
     05–07   Fuutura ID
     08–11   Fuutura Wallet, Extension and payments
     12–14   Fuutura Trade
     15      Fuutura VPN
     16      Fuutura Chat
     17      Fuutura PRO
     18–21   Settlement, capability, tokenisation, $FTRA
     22      Close
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

      {/* ── Fuutura Wallet, Extension & payments ── */}
      <WalletShowcase />
      <WalletDilemmaSlide />
      <ExtensionShowcase />
      <RemittanceSlide />

      {/* ── Fuutura Trade ── */}
      <TradeShowcase />
      <RiskSlide />
      <InstrumentsSlide />

      {/* ── Fuutura VPN, Chat & PRO ── */}
      <VpnSlide />
      <ChatSlide />
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
