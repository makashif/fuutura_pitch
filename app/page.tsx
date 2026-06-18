import PresentationShell from "./components/PresentationShell";
import NavDots from "./components/NavDots";
import HeroSlide from "./components/HeroSlide";
import AboutSlide from "./components/AboutSlide";
import WhyChooseSlide from "./components/WhyChooseSlide";
import TechSlide from "./components/TechSlide";
import SolutionsSlide from "./components/SolutionsSlide";
import ProjectDescriptionSlide from "./components/ProjectDescriptionSlide";
import ProjectFeaturesSlide from "./components/ProjectFeaturesSlide";
import ConnectSlide from "./components/ConnectSlide";

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────────────────────── */

// Project 1 — AI Operations System
const p1Phases = [
  { name: "Discovery & System Architecture Design", done: true },
  { name: "AI Workflow & Automation Layer Engineering", done: true },
  { name: "Backend Integration & API Development", done: true },
  { name: "Testing, Validation & Hardening", done: true },
  { name: "Production Deployment & Monitoring", done: true },
];

const p1Features = [
  {
    title: "AI-Driven Workflow Automation",
    desc: "End-to-end automation of internal operations using AI agents that handle task routing, escalation, and resolution without human intervention.",
  },
  {
    title: "Intelligent Decision Layer",
    desc: "An embedded decision engine that evaluates operational data in real time and surfaces actionable recommendations to team leads.",
  },
  {
    title: "Multi-System Integration",
    desc: "Unified integration layer connecting CRM, ERP, communication tools, and project management systems into one coherent operational view.",
  },
  {
    title: "Real-Time Operational Dashboard",
    desc: "Executive-grade command dashboard providing live visibility into team performance, workflow bottlenecks, and system health.",
  },
];

// Project 2 — Fintech Infrastructure System
const p2Phases = [
  { name: "Discovery & Compliance Architecture Review", done: true },
  { name: "Scalable Transaction Backend Engineering", done: true },
  { name: "Secure API & Payment Gateway Integration", done: true },
  { name: "Cloud Infrastructure & DevOps Pipeline Setup", done: true },
  { name: "Load Testing, Hardening & Production Launch", done: true },
];

const p2Features = [
  {
    title: "High-Volume Transaction Engine",
    desc: "Purpose-built transaction processing backend capable of handling hundreds of thousands of operations per second with sub-100ms latency.",
  },
  {
    title: "Secure API Gateway",
    desc: "Multi-layered API architecture with end-to-end encryption, rate limiting, fraud detection hooks, and full audit logging.",
  },
  {
    title: "Cloud-Native Infrastructure",
    desc: "Auto-scaling cloud infrastructure across multiple availability zones, engineered for 99.99% uptime and zero-downtime deployments.",
  },
  {
    title: "Compliance & Regulatory Framework",
    desc: "Built-in compliance controls, data residency management, and reporting pipelines aligned with financial regulatory requirements.",
  },
];

// Project 3 — AI Product System
const p3Phases = [
  { name: "System Architecture & RAG Design", done: true },
  { name: "LLM Orchestration & Model Pipeline Build", done: true },
  { name: "API-First Platform Engineering", done: true },
  { name: "Testing, Evaluation & Performance Benchmarking", done: true },
  { name: "Production Deployment & Scaling", done: true },
];

const p3Features = [
  {
    title: "RAG-Based Knowledge Architecture",
    desc: "Production-grade Retrieval-Augmented Generation system with vector databases, document ingestion pipelines, and semantic search.",
  },
  {
    title: "LLM Orchestration Layer",
    desc: "Multi-model orchestration supporting GPT-4, Claude, Gemini, and custom fine-tuned models with intelligent routing and fallback.",
  },
  {
    title: "API-First AI Platform",
    desc: "Fully documented, versioned REST and streaming APIs enabling third-party integration and white-label deployment at scale.",
  },
  {
    title: "Continuous Learning Pipeline",
    desc: "Automated feedback loops, evaluation frameworks, and retraining pipelines that improve model performance over time.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE COMPOSITION
───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <PresentationShell>
      {/* Fixed overlays — rendered inside shell so they sit above the scroll container */}
      <NavDots />

      {/* ── 01 Hero ── */}
      <HeroSlide />

      {/* ── 02 About Us ── */}
      <AboutSlide />

      {/* ── 03 Why Choose Us ── */}
      <WhyChooseSlide />

      {/* ── 04 Technology ── */}
      <TechSlide />

      {/* ── 05 Solutions ── */}
      <SolutionsSlide />

      {/* ── Project 1 — AI Operations System ── */}
      <ProjectDescriptionSlide
        id="slide-p1a"
        slideNumber="06"
        projectNumber="01"
        label="Project Description & Progress"
        title="AI Operations System"
        description="Built an AI-driven operations system that automated internal workflows for a high-growth enterprise client. The system replaced manual coordination across five departments, reducing operational overhead by 68% and cutting average task resolution time from 4.2 hours to under 18 minutes."
        domain="AI Systems Engineering · Enterprise Automation"
        background="/Extremely_professional_corporate_background_for_202606181541.jpeg"
        status="Delivered"
        phases={p1Phases}
      />

      <ProjectFeaturesSlide
        id="slide-p1b"
        slideNumber="07"
        projectNumber="01"
        projectTitle="AI Operations System"
        domain="AI Systems Engineering · Enterprise Automation"
        background="/Extremely_professional_corporate_background_for_202606181541.jpeg"
        features={p1Features}
        outcome="68% reduction in manual workload. Task resolution time cut from 4.2 hours to under 18 minutes across five enterprise departments."
      />

      {/* ── Project 2 — Fintech Infrastructure ── */}
      <ProjectDescriptionSlide
        id="slide-p2a"
        slideNumber="08"
        projectNumber="02"
        label="Project Description & Progress"
        title="Fintech Infrastructure System"
        description="Designed and engineered a scalable transaction backend for a fintech client processing high-volume financial operations. The system handles peak loads exceeding 200,000 transactions per minute with full regulatory compliance, secure API architecture, and cloud-native infrastructure across three availability zones."
        domain="Fintech Infrastructure · Cloud Engineering"
        background="/Minimalist_executive_desk_aesthetic_background._202606181527.jpeg"
        status="Delivered"
        phases={p2Phases}
      />

      <ProjectFeaturesSlide
        id="slide-p2b"
        slideNumber="09"
        projectNumber="02"
        projectTitle="Fintech Infrastructure System"
        domain="Fintech Infrastructure · Cloud Engineering"
        background="/Minimalist_executive_desk_aesthetic_background._202606181527.jpeg"
        features={p2Features}
        outcome="200K+ transactions per minute at 99.99% uptime. Full regulatory compliance with zero production incidents post-launch."
      />

      {/* ── Project 3 — AI Product System ── */}
      <ProjectDescriptionSlide
        id="slide-p3a"
        slideNumber="10"
        projectNumber="03"
        label="Project Description & Progress"
        title="AI Product System"
        description="Built a unified AI platform with RAG architecture, multi-model orchestration, and API-first deployment for a technology company launching AI-powered products at scale. The platform serves as the intelligence backbone for three distinct products, processing over 2 million AI inferences daily."
        domain="AI Systems Engineering · LLM Platforms"
        background="/A_sleek,_dark_background_featuring_202606181541.jpeg"
        status="Delivered"
        phases={p3Phases}
      />

      <ProjectFeaturesSlide
        id="slide-p3b"
        slideNumber="11"
        projectNumber="03"
        projectTitle="AI Product System"
        domain="AI Systems Engineering · LLM Platforms"
        background="/A_sleek,_dark_background_featuring_202606181541.jpeg"
        features={p3Features}
        outcome="2M+ daily AI inferences across three live products. Multi-model orchestration with sub-200ms average response time at production scale."
      />

      {/* ── 06 Let's Connect ── */}
      <ConnectSlide />
    </PresentationShell>
  );
}
