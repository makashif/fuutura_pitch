import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";
import SectionDivider from "./components/SectionDivider";
import ProductShowcase from "./components/ProductShowcase";

import CoverSlide from "./components/CoverSlide";
import MissionSlide from "./components/slides/MissionSlide";
import OpportunitySlide from "./components/slides/OpportunitySlide";
import EcosystemSlide from "./components/slides/EcosystemSlide";
import IdentitySlide from "./components/slides/IdentitySlide";
import VerificationSlide from "./components/slides/VerificationSlide";
import CoverageSlide from "./components/slides/CoverageSlide";
import ComplianceSlide from "./components/slides/ComplianceSlide";
import WalletDilemmaSlide from "./components/slides/WalletDilemmaSlide";
import RemittanceSlide from "./components/slides/RemittanceSlide";
import RiskSlide from "./components/slides/RiskSlide";
import InstrumentsSlide from "./components/slides/InstrumentsSlide";
import ChainSlide from "./components/slides/ChainSlide";
import ChainEnablesSlide from "./components/slides/ChainEnablesSlide";
import WiderEcosystemSlide from "./components/slides/WiderEcosystemSlide";
import TokenisationSlide from "./components/slides/TokenisationSlide";
import FtraSlide from "./components/slides/FtraSlide";
import CloseSlide from "./components/slides/CloseSlide";

/* ─────────────────────────────────────────────────────────────
   FUUTURA — PRODUCT DECK
   25 pages, five chapters.

   I    The Thesis          02 – 05
   II   Identity            06 – 10
   III  Money               11 – 14
   IV   Markets             15 – 18
   V    Infrastructure      19 – 24
        Close               25
───────────────────────────────────────────────────────────── */

/* ── Fuutura Wallet capability set ── */
const WALLET_FEATURES = [
  {
    title: "Non-custodial by construction",
    body: "The client wallet holds the balance. A position contract holds only the collateral committed to it — never the balance itself.",
  },
  {
    title: "Program-controlled collateral vault",
    body: "Rules-based and on-chain. Fuutura cannot move client funds outside the logic both sides agreed to.",
  },
  {
    title: "Gasless, account-abstracted",
    body: "Built for people whose first wallet this is: no seed-phrase ceremony, no gas token to acquire first.",
  },
  {
    title: "One wallet, retail and institutional",
    body: "The same infrastructure serves an individual client and a partner channel serving thousands.",
  },
];

/* ── Fuutura Trade capability set ── */
const TRADE_FEATURES = [
  {
    title: "Licensed and non-custodial",
    body: "A regulated venue that never takes possession of client assets — the licence and the self-custody are not in tension.",
  },
  {
    title: "Bilateral price contracts",
    body: "Every position faces Fuutura directly. There are no shares to source and no inventory to fund.",
  },
  {
    title: "40,000+ instruments",
    body: "Crypto, global equities, indices, FX, commodities and tokenised real-world assets, from one account.",
  },
  {
    title: "Leverage earned by tier",
    body: "Entitlements advance on a demonstrated ladder rather than being unlocked at signup.",
  },
];

export default function Home() {
  return (
    <PresentationShell>
      <NavDots />

      {/* ══ 01 ══ */}
      <CoverSlide />

      {/* ══ I · THE THESIS ══ */}
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
          "The Access Standard",
          "60-Second Verification",
          "Global Coverage",
          "Security & Compliance",
        ]}
      />
      <IdentitySlide />
      <VerificationSlide />
      <CoverageSlide />
      <ComplianceSlide />

      {/* ══ III · MONEY ══ */}
      <SectionDivider
        id="slide-div-money"
        folio="11"
        index="03"
        numeral="III"
        name="Money"
        contents={[
          "The Fuutura Wallet",
          "The Wallet Dilemma",
          "Cross-Border Remittance",
        ]}
      />
      <ProductShowcase
        id="slide-wallet"
        folio="12"
        field="ivory"
        product="wallet"
        eyebrow="Fuutura Wallet"
        title={"Client keys,\nclient control"}
        lead="Custody is not a feature bolted onto a compliant platform. It is the starting assumption — the client holds the keys, and the platform is built around that fact."
        mockupSrc="/FwalletS.png"
        mockupAlt="Fuutura Wallet onboarding screen"
        pills={[
          "Multi-chain",
          "Crypto & fiat",
          "Self-custodial",
          "Compliance built in",
          "Fuutura IQ",
        ]}
        features={WALLET_FEATURES}
        footnote="Everything a client holds sits in one clear view, with trade one tap away — and with the keys never leaving their possession."
      />
      <WalletDilemmaSlide />
      <RemittanceSlide />

      {/* ══ IV · MARKETS ══ */}
      <SectionDivider
        id="slide-div-markets"
        folio="15"
        index="04"
        numeral="IV"
        name="Markets"
        contents={[
          "Fuutura Trade",
          "Risk Architecture",
          "The Instrument Universe",
        ]}
      />
      <ProductShowcase
        id="slide-trade"
        folio="16"
        field="white"
        product="trade"
        eyebrow="Fuutura Trade"
        title={"A licensed,\nnon-custodial\nsynthetic exchange"}
        lead="Compliant, on-chain-settled exposure to the world's assets — built specifically for the markets the incumbent rails do not reach."
        mockupSrc="/FtradeS.png"
        mockupAlt="Fuutura Trade platform screen"
        pills={[
          "40,000+ instruments",
          "External reference pricing",
          "No client assets held",
          "On-chain settlement",
        ]}
        features={TRADE_FEATURES}
        footnote="No shares to source, and no client assets to hold. Every position faces Fuutura, priced off a reference Fuutura cannot touch."
      />
      <RiskSlide />
      <InstrumentsSlide />

      {/* ══ V · INFRASTRUCTURE ══ */}
      <SectionDivider
        id="slide-div-infra"
        folio="19"
        index="05"
        numeral="V"
        name="Infra"
        contents={[
          "Settlement & Chain",
          "What It Unlocks",
          "The Wider Ecosystem",
          "Tokenisation, Two Ways",
          "$FTRA",
        ]}
      />
      <ChainSlide />
      <ChainEnablesSlide />
      <WiderEcosystemSlide />
      <TokenisationSlide />
      <FtraSlide />

      {/* ══ 25 ══ */}
      <CloseSlide />
    </PresentationShell>
  );
}
