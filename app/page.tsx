import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";
import HeroSlide from "./components/HeroSlide";
import AboutSlide from "./components/AboutSlide";
import SolutionsSlide from "./components/SolutionsSlide";
import TechSlide from "./components/TechSlide";
import PortfolioGallerySlide from "./components/PortfolioGallerySlide";
import ProjectSlide from "./components/ProjectSlide";
import WhyChooseSlide from "./components/WhyChooseSlide";
import ConnectSlide from "./components/ConnectSlide";

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA — All 7 Real Delivered Projects
───────────────────────────────────────────────────────────── */

// ── Project 01 — Fuutura Wallet ──
const p1Features = [
  { title: "Multi-Chain Asset Management", desc: "Full EVM, Bitcoin, Solana & Tron support — manage assets across all major blockchain ecosystems from a single unified interface." },
  { title: "Cross-Chain Token Swaps", desc: "Native cross-chain swap functionality with deep integration into the Fuutura Trade for a seamless trading experience." },
  { title: "Non-Custodial Security Architecture", desc: "Enterprise-grade, fully non-custodial design. Users retain complete, sovereign ownership of keys and assets at all times." },
  { title: "Real-Time Portfolio Visibility", desc: "Live portfolio tracking with high-performance transaction monitoring, wallet management, and full transaction history." },
];

// ── Project 02 — Fuutura Trade ──
const p2Features = [
  { title: "Hybrid Authentication System", desc: "Dual login supporting email/password (Web2) and wallet-based login (Web3) via MetaMask & WalletConnect — one unified platform." },
  { title: "Real-Time Order Management", desc: "WebSocket-powered market data feeds with market, limit, stop-loss, and take-profit order types executed in real time." },
  { title: "Advanced Portfolio Tracking", desc: "Portfolio, position, and watchlist management with backend-driven feature flagging and zero-downtime mode switching." },
  { title: "Modular State Architecture", desc: "Zustand-powered scalable state management with full Fuutura Wallet ecosystem integration and dynamic version control." },
];

// ── Project 03 — Fuutura Extension ──
const p3Features = [
  { title: "Non-Custodial Key Management", desc: "Institutional-grade private key management — users retain complete ownership, with secure transaction signing and approval flows." },
  { title: "Browser-Native Wallet Experience", desc: "Smooth, intuitive UX modeled on industry-leading wallet standards. Feels native to the browser, not bolted-on." },
  { title: "Full Fuutura Ecosystem Integration", desc: "Seamless connectivity with Fuutura Trade and Wallet — full feature parity across the entire Fuutura product suite." },
  { title: "Multi-Chain EVM Support", desc: "Complete multi-chain support across EVM networks with cross-platform compatibility and performance optimisation." },
];

// ── Project 04 — Fuutura KYC ──
const p4Features = [
  { title: "AI-Powered Document Verification", desc: "LLaMA-driven document detection and identity verification with a guided mobile flow — fast, accurate, and user-friendly." },
  { title: "On-Chain Digital Identity", desc: "Verified users receive blockchain-backed digital identities on Polygon with token-based verification incentives." },
  { title: "Embeddable B2B SDK", desc: "Plug-and-play SDK for third-party businesses to integrate KYC natively, paired with a full enterprise management dashboard." },
  { title: "Multi-Surface Ecosystem", desc: "Consumer mobile app, embeddable SDK, and B2B web dashboard — a complete KYC platform from a single integrated build." },
];

// ── Project 05 — Digital24 ──
const p5Features = [
  { title: "Multi-Channel Campaign Builder", desc: "Flexible campaign creation with guaranteed placements, newswire, SEO guest posting, and journalist outreach targeting." },
  { title: "Stripe & In-Platform Wallet", desc: "Cart and checkout supporting Stripe card payments and wallet balance, with bulk credit pack purchasing and deferred application." },
  { title: "Role-Based Admin Dashboard", desc: "Full admin panel for user, campaign, offer, and reporting management — powering internal fulfilment operations end-to-end." },
  { title: "CMS-Driven Public Platform", desc: "Sanity-powered public site with pricing, bundles, case studies, and help centre — built for discovery and conversion." },
];

// ── Project 06 — Intelizzz ──
const p6Features = [
  { title: "Real-Time Vehicle Tracking", desc: "Live SSE data streams powering real-time GPS tracking with geofence engine supporting circle, polygon, and rectangle zones." },
  { title: "Event-Driven Microservices", desc: "12 dedicated Node.js/Koa services on a Kafka pipeline handling device events, wake history, and tracking data at scale." },
  { title: "Offline-First PWA", desc: "Installer PWA with IndexedDB and Workbox service worker — full functionality without connectivity, perfect sync on restore." },
  { title: "Multi-Role Platform", desc: "Consumer, installer, operations, and recovery agent roles across 6 integrated modules with Kubernetes-orchestrated infrastructure." },
];

// ── Project 07 — Toybox ──
const p7Features = [
  { title: "Native iOS Member App", desc: "Swift-built iOS app with garage management, concierge booking, vehicle services, and an integrated AI assistant." },
  { title: "AI-Powered Concierge", desc: "Intelligent concierge assistant enabling members to book detailing, wash, transport, and vehicle acquisition with ease." },
  { title: "Staff & Admin Web Applications", desc: "Dedicated Next.js staff and admin surfaces for full operational management — scheduling, reporting, and member oversight." },
  { title: "Role-Based Access Across 4 Surfaces", desc: "Member app, staff web app, admin dashboard, and member portal — all unified with role-based access and consistent data." },
];

/* ─────────────────────────────────────────────────────────────
   PAGE COMPOSITION — 14 Slides
   01 Hero → 02 About → 03 Solutions → 04 Tech → 05 Portfolio Overview →
   06 P1 (Fuutura Wallet) →
   07 P2 (Fuutura Trade) →
   08 P3 (Fuutura Extension) →
   09 P4 (Fuutura KYC) →
   10 P5 (Digital24) →
   11 P6 (Intelizzz) →
   12 P7 (Toybox) →
   13 Why Us → 14 Connect
───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <PresentationShell>
      <NavDots />

      {/* ── 01 Hero ── */}
      <HeroSlide />

      {/* ── 02 About ── */}
      <AboutSlide />

      {/* ── 03 Solutions ── */}
      <SolutionsSlide />

      {/* ── 04 Tech Stack ── */}
      <TechSlide />

      {/* ── 05 Portfolio Overview ── */}
      <PortfolioGallerySlide />

      {/* ── Project 01 — Fuutura Wallet ── */}
      <ProjectSlide
        id="slide-p1"
        slideNumber="06"
        projectNumber="01"
        title="Fuutura Wallet"
        description="A secure, enterprise-grade non-custodial Web3 wallet bridging digital asset management and trading — enabling users to store, manage, transfer, and swap cryptocurrencies across multiple blockchain ecosystems while maintaining complete asset ownership."
        domain="Web3 · DeFi · React.js · Node.js"
        background="/fwallet_premium_bg.png"
        status="Delivered"
        features={p1Features}
        mockupSrc="/Fwallet.png"
      />

      {/* ── Project 02 — Fuutura Trade ── */}
      <ProjectSlide
        id="slide-p2"
        slideNumber="07"
        projectNumber="02"
        title="Fuutura Trade"
        description="A sophisticated full-stack hybrid trading platform bridging traditional finance and decentralized ecosystems. Built for both Web2 and Web3 users in a single unified experience, delivering institutional-grade trading with real-time performance."
        domain="Trading · React.js · Zustand · WebSocket"
        background="/ftrade_premium_bg.png"
        status="Delivered"
        features={p2Features}
        mockupSrc="/Ftrade.png"
      />

      {/* ── Project 03 — Fuutura Extension ── */}
      <ProjectSlide
        id="slide-p3"
        slideNumber="08"
        projectNumber="03"
        title="Fuutura Extension"
        description="A production-grade, non-custodial browser extension wallet engineered to deliver the fluency and familiarity of leading wallet extensions — while maintaining the full security architecture of the Fuutura ecosystem."
        domain="Browser Extension · Next.js · Viem · AWS"
        background="/fextension_premium_bg.png"
        status="Delivered"
        features={p3Features}
        mockupSrc="/Fwallet.png"
      />

      {/* ── Project 04 — Fuutura KYC ── */}
      <ProjectSlide
        id="slide-p4"
        slideNumber="09"
        projectNumber="04"
        title="Fuutura KYC"
        description="A multi-surface, AI-powered KYC ecosystem making identity verification fast, intelligent, and blockchain-backed. Serves individual users and enterprise clients via a consumer mobile app, embeddable SDK, and B2B web dashboard."
        domain="AI · Identity · Python · LLaMA · Polygon"
        background="/fkyc_premium_bg.png"
        status="Delivered"
        features={p4Features}
        mockupSrc="/Fkyc.png"
      />

      {/* ── Project 05 — Digital24 ── */}
      <ProjectSlide
        id="slide-p5"
        slideNumber="10"
        projectNumber="05"
        title="Digital24"
        description="A full-featured PR distribution platform streamlining how businesses create, manage, and fulfil media campaigns at scale — from guaranteed placements and newswire to SEO guest posting, journalist outreach, payments, and internal fulfilment."
        domain="SaaS · Next.js · PostgreSQL · Stripe"
        background="/digital24_premium_bg.png"
        status="Delivered"
        features={p5Features}
        mockupSrc="/D24.png"
        mockupType="laptop"
      />

      {/* ── Project 06 — Intelizzz ── */}
      <ProjectSlide
        id="slide-p6"
        slideNumber="11"
        projectNumber="06"
        title="Intelizzz — Vehicle Intelligence"
        description="A comprehensive enterprise-grade vehicle intelligence and tracking platform serving installers, operations teams, recovery agents, and consumers — built across 6 integrated modules on a resilient event-driven microservices backend."
        domain="IoT · React Native · Kafka · Kubernetes"
        background="/intelizzz_premium_bg.png"
        status="Delivered"
        features={p6Features}
        mockupSrc="/intelizzz.jpg"
      />

      {/* ── Project 07 — Toybox ── */}
      <ProjectSlide
        id="slide-p7"
        slideNumber="12"
        projectNumber="07"
        title="Toybox — Automotive Concierge"
        description="A premium automotive concierge ecosystem purpose-built for luxury vehicle owners — delivered across four integrated surfaces covering the full member, staff, and operational experience with native iOS and web applications."
        domain="Luxury Auto · iOS Swift · Next.js"
        background="/toybox_premium_bg.png"
        status="Delivered"
        features={p7Features}
        mockupSrc="/toybox.jpg"
      />

      {/* ── 13 Why Origin One ── */}
      <WhyChooseSlide />

      {/* ── 14 Let's Connect ── */}
      <ConnectSlide />
    </PresentationShell>
  );
}
