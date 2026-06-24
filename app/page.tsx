import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";
import HeroSlide from "./components/HeroSlide";
import AboutSlide from "./components/AboutSlide";
import SolutionsSlide from "./components/SolutionsSlide";
import TechSlide from "./components/TechSlide";
import PortfolioGallerySlide from "./components/PortfolioGallerySlide";
import ProjectDescriptionSlide from "./components/ProjectDescriptionSlide";
import ProjectFeaturesSlide from "./components/ProjectFeaturesSlide";
import WhyChooseSlide from "./components/WhyChooseSlide";
import ConnectSlide from "./components/ConnectSlide";

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA — All 7 Real Delivered Projects
───────────────────────────────────────────────────────────── */

// ── Project 01 — Fuutura Web Wallet ──
const p1Phases = [
  { name: "Architecture Design & Security Planning", done: true },
  { name: "Multi-Chain Wallet Engine Development", done: true },
  { name: "Cross-Chain Swap & Exchange Integration", done: true },
  { name: "Security Audit & Performance Testing", done: true },
  { name: "Production Deployment & Launch", done: true },
];
const p1Features = [
  {
    title: "Multi-Chain Asset Management",
    desc: "Full EVM, Bitcoin, Solana & Tron support — manage assets across all major blockchain ecosystems from a single unified interface.",
  },
  {
    title: "Cross-Chain Token Swaps",
    desc: "Native cross-chain swap functionality with deep integration into the Fuutura Exchange for a seamless trading experience.",
  },
  {
    title: "Non-Custodial Security Architecture",
    desc: "Enterprise-grade, fully non-custodial design. Users retain complete, sovereign ownership of keys and assets at all times.",
  },
  {
    title: "Real-Time Portfolio Visibility",
    desc: "Live portfolio tracking with high-performance transaction monitoring, wallet management, and full transaction history.",
  },
];

// ── Project 02 — Fuutura Exchange ──
const p2Phases = [
  { name: "Platform Architecture & Auth System Design", done: true },
  { name: "Hybrid Web2/Web3 Frontend Development", done: true },
  { name: "Real-Time Order Engine & WebSocket Integration", done: true },
  { name: "Wallet Ecosystem Integration & Testing", done: true },
  { name: "Production Launch & Performance Hardening", done: true },
];
const p2Features = [
  {
    title: "Hybrid Authentication System",
    desc: "Dual login supporting email/password (Web2) and wallet-based login (Web3) via MetaMask & WalletConnect — one unified platform.",
  },
  {
    title: "Real-Time Order Management",
    desc: "WebSocket-powered market data feeds with market, limit, stop-loss, and take-profit order types executed in real time.",
  },
  {
    title: "Advanced Portfolio Tracking",
    desc: "Portfolio, position, and watchlist management with backend-driven feature flagging and zero-downtime mode switching.",
  },
  {
    title: "Modular State Architecture",
    desc: "Zustand-powered scalable state management with full Fuutura Wallet ecosystem integration and dynamic version control.",
  },
];

// ── Project 03 — Fuutura Extension ──
const p3Phases = [
  { name: "Security Architecture & Key Management Design", done: true },
  { name: "Browser Extension Framework & UI Build", done: true },
  { name: "Multi-Chain EVM Integration & Signing Flows", done: true },
  { name: "Fuutura Ecosystem Connectivity & Testing", done: true },
  { name: "Cross-Platform Release & Performance Optimisation", done: true },
];
const p3Features = [
  {
    title: "Non-Custodial Key Management",
    desc: "Institutional-grade private key management — users retain complete ownership, with secure transaction signing and approval flows.",
  },
  {
    title: "Browser-Native Wallet Experience",
    desc: "Smooth, intuitive UX modeled on industry-leading wallet standards. Feels native to the browser, not bolted-on.",
  },
  {
    title: "Full Fuutura Ecosystem Integration",
    desc: "Seamless connectivity with Fuutura Exchange and Web Wallet — full feature parity across the entire Fuutura product suite.",
  },
  {
    title: "Multi-Chain EVM Support",
    desc: "Complete multi-chain support across EVM networks with cross-platform compatibility and performance optimisation.",
  },
];

// ── Project 04 — Fuutura KYC ──
const p4Phases = [
  { name: "AI Pipeline & Blockchain Identity Architecture", done: true },
  { name: "Mobile App & Document Verification Engine", done: true },
  { name: "B2B Dashboard & Embeddable SDK Build", done: true },
  { name: "Polygon Integration & On-Chain Identity Launch", done: true },
  { name: "Enterprise Deployment & SDK Release", done: true },
];
const p4Features = [
  {
    title: "AI-Powered Document Verification",
    desc: "LLaMA-driven document detection and identity verification with a guided mobile flow — fast, accurate, and user-friendly.",
  },
  {
    title: "On-Chain Digital Identity",
    desc: "Verified users receive blockchain-backed digital identities on Polygon with token-based verification incentives.",
  },
  {
    title: "Embeddable B2B SDK",
    desc: "Plug-and-play SDK for third-party businesses to integrate KYC natively, paired with a full enterprise management dashboard.",
  },
  {
    title: "Multi-Surface Ecosystem",
    desc: "Consumer mobile app, embeddable SDK, and B2B web dashboard — a complete KYC platform from a single integrated build.",
  },
];

// ── Project 05 — Digital24 ──
const p5Phases = [
  { name: "Platform Architecture & Campaign Builder Design", done: true },
  { name: "Multi-Channel Distribution System Development", done: true },
  { name: "Stripe Payments, Wallet & Billing Suite", done: true },
  { name: "Admin Panel & CMS Integration (Sanity)", done: true },
  { name: "Public Marketing Site & Production Launch", done: true },
];
const p5Features = [
  {
    title: "Multi-Channel Campaign Builder",
    desc: "Flexible campaign creation with guaranteed placements, newswire, SEO guest posting, and journalist outreach targeting.",
  },
  {
    title: "Stripe & In-Platform Wallet",
    desc: "Cart and checkout supporting Stripe card payments and wallet balance, with bulk credit pack purchasing and deferred application.",
  },
  {
    title: "Role-Based Admin Dashboard",
    desc: "Full admin panel for user, campaign, offer, and reporting management — powering internal fulfilment operations end-to-end.",
  },
  {
    title: "CMS-Driven Public Platform",
    desc: "Sanity-powered public site with pricing, bundles, case studies, and help centre — built for discovery and conversion.",
  },
];

// ── Project 06 — Intelizzz ──
const p6Phases = [
  { name: "Microservices Architecture & Event Pipeline Design", done: true },
  { name: "Consumer & Installer App Development (6 Modules)", done: true },
  { name: "Kafka Pipeline & Real-Time Tracking Engine", done: true },
  { name: "Geofence Engine & Multi-Channel Alert System", done: true },
  { name: "Kubernetes Deployment & CI/CD Launch", done: true },
];
const p6Features = [
  {
    title: "Real-Time Vehicle Tracking",
    desc: "Live SSE data streams powering real-time GPS tracking with geofence engine supporting circle, polygon, and rectangle zones.",
  },
  {
    title: "Event-Driven Microservices",
    desc: "12 dedicated Node.js/Koa services on a Kafka pipeline handling device events, wake history, and tracking data at scale.",
  },
  {
    title: "Offline-First PWA",
    desc: "Installer PWA with IndexedDB and Workbox service worker — full functionality without connectivity, perfect sync on restore.",
  },
  {
    title: "Multi-Role Platform",
    desc: "Consumer, installer, operations, and recovery agent roles across 6 integrated modules with Kubernetes-orchestrated infrastructure.",
  },
];

// ── Project 07 — Toybox ──
const p7Phases = [
  { name: "Platform Architecture & iOS App Design", done: true },
  { name: "Native Swift iOS Member App Development", done: true },
  { name: "Staff & Admin Web Application Build", done: true },
  { name: "Member Web Portal & AI Concierge Integration", done: true },
  { name: "Production Launch Across All 4 Surfaces", done: true },
];
const p7Features = [
  {
    title: "Native iOS Member App",
    desc: "Swift-built iOS app with garage management, concierge booking, vehicle services, and an integrated AI assistant.",
  },
  {
    title: "AI-Powered Concierge",
    desc: "Intelligent concierge assistant enabling members to book detailing, wash, transport, and vehicle acquisition with ease.",
  },
  {
    title: "Staff & Admin Web Applications",
    desc: "Dedicated Next.js staff and admin surfaces for full operational management — scheduling, reporting, and member oversight.",
  },
  {
    title: "Role-Based Access Across 4 Surfaces",
    desc: "Member app, staff web app, admin dashboard, and member portal — all unified with role-based access and consistent data.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE COMPOSITION — 21 Slides
   01 Hero → 02 About → 03 Solutions → 04 Tech →
   05 Portfolio Overview →
   06–07 P1 (Fuutura Web Wallet) →
   08–09 P2 (Fuutura Exchange) →
   10–11 P3 (Fuutura Extension) →
   12–13 P4 (Fuutura KYC) →
   14–15 P5 (Digital24) →
   16–17 P6 (Intelizzz) →
   18–19 P7 (Toybox) →
   20 Why Us → 21 Connect
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

      {/* ── Project 01 — Fuutura Web Wallet ── */}
      <ProjectDescriptionSlide
        id="slide-p1a"
        slideNumber="06"
        projectNumber="01"
        label="Project Overview"
        title="Fuutura Web Wallet"
        description="A secure, enterprise-grade non-custodial Web3 wallet bridging digital asset management and trading — enabling users to store, manage, transfer, and swap cryptocurrencies across multiple blockchain ecosystems while maintaining complete asset ownership."
        domain="Web3 · DeFi · Fintech"
        background="/fuutura.jpeg"
        status="Delivered"
        phases={p1Phases}
        mockupSrc="/mockup_01.png"
      />
      <ProjectFeaturesSlide
        id="slide-p1b"
        slideNumber="07"
        projectNumber="01"
        projectTitle="Fuutura Web Wallet"
        domain="React.js · Ethers.js · Viem · Node.js · AWS"
        background="/fuutura.jpeg"
        features={p1Features}
        outcome="Production-grade non-custodial wallet with multi-chain EVM, Bitcoin, Solana & Tron support — fully integrated with the Fuutura Exchange ecosystem at enterprise scale."
        mockupSrc="/mockup_01.png"
      />

      {/* ── Project 02 — Fuutura Exchange ── */}
      <ProjectDescriptionSlide
        id="slide-p2a"
        slideNumber="08"
        projectNumber="02"
        label="Project Overview"
        title="Fuutura Exchange"
        description="A sophisticated full-stack hybrid trading platform bridging traditional finance and decentralized ecosystems. Built for both Web2 and Web3 users in a single unified experience, delivering institutional-grade trading with real-time performance."
        domain="Web3 · Trading · Fintech"
        background="/fuutura.jpeg"
        status="Delivered"
        phases={p2Phases}
        mockupSrc="/mockup_02.png"
      />
      <ProjectFeaturesSlide
        id="slide-p2b"
        slideNumber="09"
        projectNumber="02"
        projectTitle="Fuutura Exchange"
        domain="React.js · TypeScript · Zustand · Material UI · Node.js · WebSocket · AWS"
        background="/fuutura.jpeg"
        features={p2Features}
        outcome="Full-stack hybrid trading platform with dual Web2/Web3 auth, real-time WebSocket order execution, and seamless Fuutura Wallet integration — production-deployed at scale."
        mockupSrc="/mockup_02.png"
      />

      {/* ── Project 03 — Fuutura Extension ── */}
      <ProjectDescriptionSlide
        id="slide-p3a"
        slideNumber="10"
        projectNumber="03"
        label="Project Overview"
        title="Fuutura Extension"
        description="A production-grade, non-custodial browser extension wallet engineered to deliver the fluency and familiarity of leading wallet extensions — while maintaining the full security architecture of the Fuutura ecosystem."
        domain="Browser Extension · Web3 · Security"
        background="/fuutura.jpeg"
        status="Delivered"
        phases={p3Phases}
        mockupSrc="/mockup_03.png"
      />
      <ProjectFeaturesSlide
        id="slide-p3b"
        slideNumber="11"
        projectNumber="03"
        projectTitle="Fuutura Extension"
        domain="Next.js · React.js · Wagmi · Viem · MongoDB · Node.js · AWS"
        background="/fuutura.jpeg"
        features={p3Features}
        outcome="Production browser extension wallet with institutional-grade key management, full Fuutura ecosystem connectivity, and feature parity with the Fuutura Web Wallet across all EVM networks."
        mockupSrc="/mockup_03.png"
      />

      {/* ── Project 04 — Fuutura KYC ── */}
      <ProjectDescriptionSlide
        id="slide-p4a"
        slideNumber="12"
        projectNumber="04"
        label="Project Overview"
        title="Fuutura KYC"
        description="A multi-surface, AI-powered KYC ecosystem making identity verification fast, intelligent, and blockchain-backed. Serves individual users and enterprise clients via a consumer mobile app, embeddable SDK, and B2B web dashboard."
        domain="AI · Blockchain · Identity"
        background="/fuutura.jpeg"
        status="Delivered"
        phases={p4Phases}
        mockupSrc="/mockup_04.png"
      />
      <ProjectFeaturesSlide
        id="slide-p4b"
        slideNumber="13"
        projectNumber="04"
        projectTitle="Fuutura KYC"
        domain="iOS · Python · LLaMA · React.js · Node.js · Ethers.js · Polygon · AWS"
        background="/fuutura.jpeg"
        features={p4Features}
        outcome="Full KYC ecosystem across consumer mobile app, embeddable B2B SDK, and enterprise dashboard — with on-chain Polygon identity issuance and token-based verification incentives."
        mockupSrc="/mockup_04.png"
      />

      {/* ── Project 05 — Digital24 ── */}
      <ProjectDescriptionSlide
        id="slide-p5a"
        slideNumber="14"
        projectNumber="05"
        label="Project Overview"
        title="Digital24"
        description="A full-featured PR distribution platform streamlining how businesses create, manage, and fulfil media campaigns at scale — from guaranteed placements and newswire to SEO guest posting, journalist outreach, payments, and internal fulfilment."
        domain="SaaS · PR · Media Distribution"
        background="/digital24_brand_bg.png"
        status="Delivered"
        phases={p5Phases}
        mockupSrc="/mockup_01.png"
      />
      <ProjectFeaturesSlide
        id="slide-p5b"
        slideNumber="15"
        projectNumber="05"
        projectTitle="Digital24"
        domain="Next.js · React 19 · TypeScript · NestJS · PostgreSQL · Sanity CMS · Stripe · AWS"
        background="/digital24_brand_bg.png"
        features={p5Features}
        outcome="End-to-end PR distribution platform with multi-channel campaign builder, Stripe checkout, in-platform wallet, bulk credit packs, admin fulfilment panel, and CMS-powered public marketing site — all production-deployed."
        mockupSrc="/mockup_01.png"
      />

      {/* ── Project 06 — Intelizzz ── */}
      <ProjectDescriptionSlide
        id="slide-p6a"
        slideNumber="16"
        projectNumber="06"
        label="Project Overview"
        title="Intelizzz — Vehicle Intelligence"
        description="A comprehensive enterprise-grade vehicle intelligence and tracking platform serving installers, operations teams, recovery agents, and consumers — built across 6 integrated modules on a resilient event-driven microservices backend."
        domain="IoT · Enterprise · Mobile"
        background="/intelizzz_brand_bg.png"
        status="Delivered"
        phases={p6Phases}
        mockupSrc="/mockup_02.png"
      />
      <ProjectFeaturesSlide
        id="slide-p6b"
        slideNumber="17"
        projectNumber="06"
        projectTitle="Intelizzz — Vehicle Intelligence"
        domain="React Native · Node.js · Koa · Kafka · MongoDB · Kubernetes · Docker · AWS"
        background="/intelizzz_brand_bg.png"
        features={p6Features}
        outcome="6 integrated modules across 5 platforms — consumer & operations app, installer app, installer PWA, and two web applications — powered by 12 microservices and a Kafka event pipeline on Kubernetes."
        mockupSrc="/mockup_02.png"
      />

      {/* ── Project 07 — Toybox ── */}
      <ProjectDescriptionSlide
        id="slide-p7a"
        slideNumber="18"
        projectNumber="07"
        label="Project Overview"
        title="Toybox — Automotive Concierge"
        description="A premium automotive concierge ecosystem purpose-built for luxury vehicle owners — delivered across four integrated surfaces covering the full member, staff, and operational experience with native iOS and web applications."
        domain="Luxury Automotive · iOS · Web"
        background="/toybox_bg.png"
        status="Delivered"
        phases={p7Phases}
        mockupSrc="/mockup_03.png"
      />
      <ProjectFeaturesSlide
        id="slide-p7b"
        slideNumber="19"
        projectNumber="07"
        projectTitle="Toybox — Automotive Concierge"
        domain="Swift (iOS) · Next.js · Node.js · AWS"
        background="/toybox_bg.png"
        features={p7Features}
        outcome="4-surface automotive concierge platform — native Swift iOS app, staff web app, admin dashboard, and member portal — with AI concierge, garage management, booking, and billing across all surfaces."
        mockupSrc="/mockup_03.png"
      />

      {/* ── 20 Why Origin One ── */}
      <WhyChooseSlide />

      {/* ── 21 Let's Connect ── */}
      <ConnectSlide />
    </PresentationShell>
  );
}
