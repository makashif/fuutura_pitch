import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";
import SectionDivider from "./components/SectionDivider";

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
   FUUTURA — PRODUCT DECK
   30 pages, six chapters. All seven products carry a page of
   their own, shown in the surface they actually ship on.

   I    Thesis          02 – 05
   II   Identity        06 – 11   · Fuutura ID
   III  Money           12 – 17   · Wallet, Extension
   IV   Markets         18 – 21   · Trade
   V    Ecosystem       22 – 24   · VPN, Chat, PRO
   VI   Infrastructure  25 – 29
        Close           30
───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <PresentationShell>
      <NavDots />

      {/* ══ 01 ══ */}
      <CoverSlide />

      {/* ══ I · THESIS ══ */}
      <SectionDivider
        id="slide-div-thesis"
        folio="02"
        index="01"
        numeral="I"
        name="Thesis"
        contents={["Brand Mission", "The Opportunity", "The Ecosystem"]}
      />
      <MissionSlide />
      <OpportunitySlide />
      <EcosystemSlide />

      {/* ══ II · IDENTITY ══ */}
      <SectionDivider
        id="slide-div-identity"
        folio="06"
        index="02"
        numeral="II"
        name="Identity"
        contents={[
          "Fuutura ID",
          "The Access Standard",
          "60-Second Verification",
          "Global Coverage",
          "Security & Compliance",
        ]}
      />
      <IdShowcase />
      <IdentitySlide />
      <VerificationSlide />
      <CoverageSlide />
      <ComplianceSlide />

      {/* ══ III · MONEY ══ */}
      <SectionDivider
        id="slide-div-money"
        folio="12"
        index="03"
        numeral="III"
        name="Money"
        contents={[
          "Fuutura Wallet",
          "The Wallet Dilemma",
          "Fuutura Extension",
          "Cross-Border Remittance",
          "Card & Rewards",
        ]}
      />
      <WalletShowcase />
      <WalletDilemmaSlide />
      <ExtensionShowcase />
      <RemittanceSlide />
      <CardRewardsSlide />

      {/* ══ IV · MARKETS ══ */}
      <SectionDivider
        id="slide-div-markets"
        folio="18"
        index="04"
        numeral="IV"
        name="Markets"
        contents={[
          "Fuutura Trade",
          "Risk Architecture",
          "The Instrument Universe",
        ]}
      />
      <TradeShowcase />
      <RiskSlide />
      <InstrumentsSlide />

      {/* ══ V · ECOSYSTEM ══ */}
      <SectionDivider
        id="slide-div-ecosystem"
        folio="22"
        index="05"
        numeral="V"
        name="Ecosystem"
        contents={["Fuutura VPN", "Fuutura Chat", "Fuutura PRO"]}
      />
      <VpnChatSlide />
      <ProSlide />

      {/* ══ VI · INFRASTRUCTURE ══ */}
      <SectionDivider
        id="slide-div-infra"
        folio="25"
        index="06"
        numeral="VI"
        name="Infra"
        contents={[
          "Settlement & Chain",
          "What It Unlocks",
          "Tokenisation, Two Ways",
          "$FTRA",
        ]}
      />
      <ChainSlide />
      <ChainEnablesSlide />
      <TokenisationSlide />
      <FtraSlide />

      {/* ══ 30 ══ */}
      <CloseSlide />
    </PresentationShell>
  );
}
