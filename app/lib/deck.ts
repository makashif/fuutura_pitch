"use client";

import { createContext, useContext } from "react";

/* ─────────────────────────────────────────────────────────────
   Deck manifest and navigation context.

   Kept in its own module so PresentationShell, SlideWrapper,
   NavDots and the PDF exporter can all read it without importing
   one another — the manifest is shared data, not a component.

   Order here drives navigation, the folio numbers and the PDF
   export sequence. Folios are passed explicitly on each slide and
   must match manifest position (index + 1).
───────────────────────────────────────────────────────────── */

export const SLIDES = [
  { id: "slide-cover", label: "Cover" },

  { id: "slide-div-thesis", label: "I — Thesis" },
  { id: "slide-mission", label: "Mission" },
  { id: "slide-opportunity", label: "The Opportunity" },
  { id: "slide-ecosystem", label: "The Ecosystem" },

  { id: "slide-div-identity", label: "II — Identity" },
  { id: "slide-id", label: "Fuutura ID" },
  { id: "slide-identity", label: "The Access Standard" },
  { id: "slide-verification", label: "60-Second Verification" },
  { id: "slide-coverage", label: "Global Coverage" },
  { id: "slide-compliance", label: "Security & Compliance" },

  { id: "slide-div-money", label: "III — Money" },
  { id: "slide-wallet", label: "Fuutura Wallet" },
  { id: "slide-wallet-dilemma", label: "The Wallet Dilemma" },
  { id: "slide-extension", label: "Fuutura Extension" },
  { id: "slide-remittance", label: "Cross-Border Remittance" },
  { id: "slide-card", label: "Card & Rewards" },

  { id: "slide-div-markets", label: "IV — Markets" },
  { id: "slide-trade", label: "Fuutura Trade" },
  { id: "slide-risk", label: "Risk Architecture" },
  { id: "slide-instruments", label: "Instrument Universe" },

  { id: "slide-div-ecosystem", label: "V — Ecosystem" },
  { id: "slide-vpn-chat", label: "VPN & Chat" },
  { id: "slide-pro", label: "Fuutura PRO" },

  { id: "slide-div-infra", label: "VI — Infrastructure" },
  { id: "slide-chain", label: "Settlement & Chain" },
  { id: "slide-chain-enables", label: "What It Unlocks" },
  { id: "slide-tokenisation", label: "Tokenisation" },
  { id: "slide-ftra", label: "$FTRA" },

  { id: "slide-close", label: "Close" },
];

/** Manifest position of a slide id, or -1. */
export const slideIndex = (id: string) => SLIDES.findIndex((s) => s.id === id);

export interface DeckCtx {
  current: number;
  total: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  exportPdf: () => void;
  isExporting: boolean;
}

export const DeckContext = createContext<DeckCtx>({
  current: 0,
  total: SLIDES.length,
  goTo: () => { },
  goNext: () => { },
  goPrev: () => { },
  exportPdf: () => { },
  isExporting: false,
});

export const useDeck = () => useContext(DeckContext);
