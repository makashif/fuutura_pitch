"use client";

import { createContext, useContext } from "react";

/* ─────────────────────────────────────────────────────────────
   Deck manifest and navigation context.

   Kept in its own module so SlideWrapper, NavDots and the PDF
   exporter can all read it without importing one another — the
   manifest is shared data, not a component.

   The deck is organised by PRODUCT, not by argument. It is a
   client-facing product overview, so there are no chapter
   dividers and no abstract sections: each page names the product
   it is about, and the sub-pages carry that product's name in
   their eyebrow. The eyebrow is the navigation.

   Order here drives navigation, folio numbers and the export
   sequence. Folios are passed explicitly on each slide and must
   match manifest position (index + 1).
───────────────────────────────────────────────────────────── */

export interface SlideEntry {
  id: string;
  label: string;
  /** True for the seven product pages — the rail marks these. */
  product?: boolean;
}

export const SLIDES: SlideEntry[] = [
  { id: "slide-cover", label: "Overview" },
  { id: "slide-mission", label: "Our Mission" },
  { id: "slide-opportunity", label: "Why Fuutura" },
  { id: "slide-ecosystem", label: "The Ecosystem" },

  { id: "slide-id", label: "Fuutura ID", product: true },
  { id: "slide-identity", label: "Access Standard" },
  { id: "slide-verification", label: "60-Second Verification" },
  { id: "slide-coverage", label: "Global Coverage" },
  { id: "slide-compliance", label: "Security & Compliance" },

  { id: "slide-wallet", label: "Fuutura Wallet", product: true },
  { id: "slide-wallet-dilemma", label: "The Wallet Dilemma" },
  { id: "slide-extension", label: "Fuutura Extension", product: true },
  { id: "slide-remittance", label: "Cross-Border Remittance" },
  { id: "slide-card", label: "Card & Rewards" },

  { id: "slide-trade", label: "Fuutura Trade", product: true },
  { id: "slide-risk", label: "Risk Architecture" },
  { id: "slide-instruments", label: "Instrument Universe" },

  { id: "slide-vpn-chat", label: "Fuutura VPN & Chat", product: true },
  { id: "slide-pro", label: "Fuutura PRO", product: true },

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
