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
   PROJECT DATA
───────────────────────────────────────────────────────────── */

// ── Project 01 — AI Operations Mobile App ──
const p1Phases = [
  { name: "Discovery & System Architecture Design", done: true },
  { name: "AI Workflow Engine & Mobile Layer Build", done: true },
  { name: "Backend Integration & API Development", done: true },
  { name: "QA, Testing & Hardening", done: true },
  { name: "App Store Deployment & Launch", done: true },
];

const p1Features = [
  {
    title: "AI-Driven Task Routing",
    desc: "Intelligent task assignment engine that routes work to the right team member based on skill, availability, and workload in real time.",
  },
  {
    title: "Real-Time Operations Dashboard",
    desc: "Live mobile dashboard giving team leads instant visibility into operational status, bottlenecks, and KPI performance.",
  },
  {
    title: "Smart Escalation Engine",
    desc: "Automated escalation logic that detects stalled workflows and triggers alerts to the correct decision-makers instantly.",
  },
  {
    title: "Offline-Capable Architecture",
    desc: "Full offline functionality with intelligent sync — field teams keep working without connectivity and data resolves on reconnect.",
  },
];

// ── Project 02 — FinPay Mobile Banking App ──
const p2Phases = [
  { name: "Compliance Architecture & Security Audit", done: true },
  { name: "React Native App Engineering", done: true },
  { name: "Payment Gateway & API Integration", done: true },
  { name: "Biometric Auth & Encryption Layer", done: true },
  { name: "App Store & Play Store Launch", done: true },
];

const p2Features = [
  {
    title: "Instant P2P Transfers",
    desc: "Sub-2-second peer-to-peer payment processing with real-time confirmation — built on a high-throughput transaction backend.",
  },
  {
    title: "Biometric Authentication",
    desc: "Face ID, Touch ID, and PIN fallback with encrypted session management and automatic session expiry for security compliance.",
  },
  {
    title: "Spending Analytics Engine",
    desc: "Automatic transaction categorisation with visual monthly breakdowns, spending limits, and personalised insights.",
  },
  {
    title: "Secure API Gateway",
    desc: "Multi-layered API architecture with end-to-end encryption, rate limiting, and full audit logging per regulatory requirement.",
  },
];

// ── Project 03 — AI Chat Platform Mobile App ──
const p3Phases = [
  { name: "RAG Architecture & LLM Pipeline Design", done: true },
  { name: "Mobile App UI & Conversation Engine", done: true },
  { name: "Multi-Model Orchestration Build", done: true },
  { name: "Performance Benchmarking & Evaluation", done: true },
  { name: "Production Deployment & Scaling", done: true },
];

const p3Features = [
  {
    title: "RAG-Powered Knowledge Base",
    desc: "Retrieval-Augmented Generation system with vector search — the AI answers from your actual company data, not guesswork.",
  },
  {
    title: "Multi-Model Orchestration",
    desc: "Supports GPT-4, Claude, Gemini, and custom fine-tuned models with intelligent routing and graceful fallback.",
  },
  {
    title: "Persistent Context Memory",
    desc: "Conversation memory across sessions with user-level history management — the AI remembers what matters to each user.",
  },
  {
    title: "Voice Input & Streaming",
    desc: "Native voice input with real-time response streaming — token-by-token delivery with sub-800ms first-token latency.",
  },
];

// ── Project 04 — Field Operations Manager App ──
const p4Phases = [
  { name: "Requirements Analysis & Architecture Design", done: true },
  { name: "React Native Mobile App Development", done: true },
  { name: "GPS Tracking & Mapping Integration", done: true },
  { name: "Offline-First Data Sync Engineering", done: true },
  { name: "Enterprise Deployment & Onboarding", done: true },
];

const p4Features = [
  {
    title: "Real-Time GPS Tracking",
    desc: "Live location tracking of all field agents on an interactive map with geofencing alerts and route history.",
  },
  {
    title: "Offline-First Architecture",
    desc: "The app functions at 100% capability without internet. All data syncs intelligently when connectivity is restored.",
  },
  {
    title: "Digital Forms Engine",
    desc: "Configurable digital report forms with photo capture, signature collection, and conditional logic — zero paper.",
  },
  {
    title: "Operations Analytics Dashboard",
    desc: "Management-facing dashboard with agent performance metrics, task completion rates, and field activity reporting.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE COMPOSITION — 15 Slides
   01 Hero → 02 About → 03 Solutions → 04 Tech Stack →
   05 Portfolio Overview → 06–07 P1 → 08–09 P2 →
   10–11 P3 → 12–13 P4 → 14 Why Us → 15 Connect
───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <PresentationShell>
      <NavDots />

      {/* ── 01 Hero ── */}
      <HeroSlide />

      {/* ── 02 About ── */}
      <AboutSlide />

      {/* ── 03 Solutions — 4 Pillars ── */}
      <SolutionsSlide />

      {/* ── 04 Tech Stack ── */}
      <TechSlide />

      {/* ── 05 Portfolio Overview ── */}
      <PortfolioGallerySlide />

      {/* ── Project 01 — AI Operations Mobile App ── */}
      <ProjectDescriptionSlide
        id="slide-p1a"
        slideNumber="06"
        projectNumber="01"
        label="Project Description & Progress"
        title="AI Operations Mobile App"
        description="Built a production-grade AI-powered operations management mobile app for a high-growth enterprise client. The app replaced manual coordination across five departments, enabling team leads to monitor, assign, and resolve operational tasks from their phone — with AI automation handling routing and escalation."
        domain="AI Systems · Mobile Engineering"
        background="/Extremely_professional_corporate_background_for_202606181541.jpeg"
        status="Delivered"
        phases={p1Phases}
        mockupSrc="/mockup_01.png"
      />

      <ProjectFeaturesSlide
        id="slide-p1b"
        slideNumber="07"
        projectNumber="01"
        projectTitle="AI Operations Mobile App"
        domain="AI Systems · Mobile Engineering"
        background="/Extremely_professional_corporate_background_for_202606181541.jpeg"
        features={p1Features}
        outcome="68% reduction in manual workload. Task resolution time cut from 4.2 hours to under 18 minutes across five enterprise departments."
        mockupSrc="/mockup_01.png"
      />

      {/* ── Project 02 — FinPay Banking App ── */}
      <ProjectDescriptionSlide
        id="slide-p2a"
        slideNumber="08"
        projectNumber="02"
        label="Project Description & Progress"
        title="FinPay Mobile Banking App"
        description="Engineered a full-featured mobile banking application for a fintech startup — handling secure P2P transactions, account management, biometric authentication, and spending analytics. Built to regulatory compliance with end-to-end encryption and App Store / Play Store launch."
        domain="Fintech · Mobile Banking"
        background="/Minimalist_executive_desk_aesthetic_background._202606181527.jpeg"
        status="Delivered"
        phases={p2Phases}
        mockupSrc="/mockup_02.png"
      />

      <ProjectFeaturesSlide
        id="slide-p2b"
        slideNumber="09"
        projectNumber="02"
        projectTitle="FinPay Mobile Banking App"
        domain="Fintech · Mobile Banking"
        background="/Minimalist_executive_desk_aesthetic_background._202606181527.jpeg"
        features={p2Features}
        outcome="50K+ downloads in first month. Sub-2 second transaction completion. 99.97% uptime post-launch with zero critical security incidents."
        mockupSrc="/mockup_02.png"
      />

      {/* ── Project 03 — AI Chat Platform ── */}
      <ProjectDescriptionSlide
        id="slide-p3a"
        slideNumber="10"
        projectNumber="03"
        label="Project Description & Progress"
        title="AI Chat Platform Mobile App"
        description="Designed and built an AI-powered conversational assistant mobile app enabling users to interact with enterprise knowledge bases through natural language. Backed by RAG architecture, multi-model orchestration, and persistent context memory — processing millions of inferences monthly."
        domain="AI Products · Mobile"
        background="/A_sleek,_dark_background_featuring_202606181541.jpeg"
        status="Delivered"
        phases={p3Phases}
        mockupSrc="/mockup_03.png"
      />

      <ProjectFeaturesSlide
        id="slide-p3b"
        slideNumber="11"
        projectNumber="03"
        projectTitle="AI Chat Platform Mobile App"
        domain="AI Products · Mobile"
        background="/A_sleek,_dark_background_featuring_202606181541.jpeg"
        features={p3Features}
        outcome="2M+ monthly AI inferences. 94% user satisfaction score. Sub-800ms average first-token response time at production scale."
        mockupSrc="/mockup_03.png"
      />

      {/* ── Project 04 — Field Operations Manager ── */}
      <ProjectDescriptionSlide
        id="slide-p4a"
        slideNumber="12"
        projectNumber="04"
        label="Project Description & Progress"
        title="Field Operations Manager App"
        description="Developed a comprehensive field operations mobile application for an enterprise client managing large-scale on-ground teams. The app enables real-time GPS tracking, offline-first data capture, digital reporting, and management-facing analytics — replacing paper-based field processes entirely."
        domain="Enterprise Software · Mobile"
        background="/A_minimalist,_high-end_gallery_space_202606181548.jpeg"
        status="Delivered"
        phases={p4Phases}
        mockupSrc="/mockup_04.png"
      />

      <ProjectFeaturesSlide
        id="slide-p4b"
        slideNumber="13"
        projectNumber="04"
        projectTitle="Field Operations Manager App"
        domain="Enterprise Software · Mobile"
        background="/A_minimalist,_high-end_gallery_space_202606181548.jpeg"
        features={p4Features}
        outcome="500+ field agents onboarded. 40% reduction in manual reporting time. Full offline functionality with 100% data sync accuracy."
        mockupSrc="/mockup_04.png"
      />

      {/* ── 14 Why Origin One ── */}
      <WhyChooseSlide />

      {/* ── 15 Let's Connect ── */}
      <ConnectSlide />
    </PresentationShell>
  );
}
