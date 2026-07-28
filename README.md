# Fuutura — Product Overview

An interactive, presentation-grade product deck for Fuutura, built in the design
language of **`Fuutura_Product_Overview.pdf`** — warm cream field, serif
headlines, rust and bronze accents, corner brackets and tinted cards. 24 pages,
organised by product, covering all seven — exportable to A4-landscape PDF.

## Getting started

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Presenting

| Key | Action |
| --- | --- |
| `↓` `→` `Space` `Enter` `PgDn` | Next slide |
| `↑` `←` `PgUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `M` | Render an exact frame preview of the current slide |
| `⌘⇧E` | Export the whole deck to PDF |
| `Esc` | Close a preview |

The right-edge rail is clickable; heavier ticks mark the seven product pages.

## Design language

Every value was sampled from the reference PDF rather than approximated.

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#FAF7F0` | page field |
| `--ink` | `#243140` | serif headlines, glyphs, brackets |
| `--ink-deep` | `#141922` | dark cards |
| `--muted` | `#6E7A85` | body, captions, footer |
| `--rust` | `#9C4A26` | ◆ diamond, rules, arrows, italic taglines |
| `--bronze` | `#8A6D3F` | eyebrows and sub-labels |
| `--hair` | `#E4DCCB` | hairlines and card borders |
| tints | `#EAEFE2` sage · `#E9EEF3` periwinkle · `#F3EAD6` sand · `#EFE2D6` blush | card fields |

**Type** — Source Serif 4 for headlines and product titles, Inter for labels,
body and data, italic Inter for leads. Note this adds a serif alongside Inter,
which the brand guidelines reserve as the sole typeface; the Product Overview
sets its headlines in serif, and that reference took precedence here.

**Page furniture** — corner brackets top-left and bottom-right, a ruled footer
carrying `◆ Fuutura · Product Overview · Confidential` and the folio.

## Deck structure

Client-facing, so it runs as one continuous document — **no chapter dividers and
no abstract sections**. Each product opens with its own page, followed by the
pages that detail it, and every eyebrow names the product it belongs to. The
eyebrow is the navigation:

| Pages | Section | Eyebrow reads |
| --- | --- | --- |
| 01–04 | Opening | Product Overview · Our Mission · Why Fuutura Exists · The Fuutura Ecosystem |
| 05–09 | **Fuutura ID** | Fuutura ID · The Access Standard / Onboarding / Global Coverage / Security & Compliance |
| 10–14 | **Fuutura Wallet & Extension** | Fuutura Wallet · The Dilemma It Solves / Cross-Border Payments / Card & Rewards; Fuutura Extension |
| 15–17 | **Fuutura Trade** | Fuutura Trade · Risk Architecture / Instrument Universe |
| 18 | **Fuutura VPN & Chat** | Fuutura VPN & Fuutura Chat |
| 19 | **Fuutura PRO** | Fuutura PRO |
| 20–23 | Settlement & token | Settlement & Chain · What It Unlocks / Tokenisation; $FTRA |
| 24 | Close | Verify. Trade. Send. Spend. Connect. |

Each product is shown in the surface it actually ships on — desktop web app,
phone, or browser-extension popup. The right-edge rail gives the seven product
pages a heavier tick, so it reads as a product index.

## Architecture

```
app/
  globals.css              Design system — palette, type scale, cards, badges,
                           mockup frames, PDF export mode
  layout.tsx               Source Serif 4 + Inter, document metadata
  page.tsx                 Deck composition — all 24 pages in order

  lib/
    deck.ts                Slide manifest + navigation context (shared data,
                           so no component imports another to read it)
    usePdfExport.ts        html2canvas -> jsPDF, A4 landscape at 2x

  components/
    SlideWrapper.tsx       Page furniture: brackets, ruled footer, folio
    Sheet.tsx              Standard content page (head + body)
    Icon.tsx               In-house solid glyph set, Badge, Glyph, Arrow
    Primitives.tsx         Reveal, Eyebrow, SubLabel, PageHead, FeatureCard,
                           PillarCard, IconList, ProductPanel, FlowNode,
                           Stat, CompareColumns, ClosingLine
    ProductShowcase.tsx    Product archetype, "wide" or "tall" variant
    CoverSlide.tsx         Cover
    Mockups.tsx            PhoneMockup, BrowserMockup, ExtensionMockup
    NavDots.tsx            Right-edge product rail
    slides/                The 23 bespoke content pages
```

Adding or reordering a page means two edits: the `SLIDES` manifest in
`lib/deck.ts`, and the composition in `page.tsx`. Folios are passed explicitly
and must match manifest position (index + 1). Mark a product page with
`product: true` in the manifest to give it a heavier tick on the rail.

## Layout rules worth keeping

- **Split grids floor their first track at `min-content`.** With `minmax(0, …)` a
  fractional track can shrink below its longest word, and the word then paints
  over the column beside it. Flooring at `min-content` makes headline overflow
  structurally impossible at any title length.
- **`.grid-fill` marks the page's main card row** so it absorbs remaining height
  and cards reach toward the footer rather than leaving a void.
- **Cards in a grid are equal-height** because the `Reveal` wrapper is the grid
  item; it becomes a flex column and lets the card inside fill the row.
- **Footer content is a sibling of the content region, never a child.** An
  absolutely-positioned child of `.sheet-body` resolves `bottom` against a box
  only as tall as its content and lands mid-page.
- **Rules are `display: block`.** They are `<span>`s, and outside a flex
  container an inline element ignores width and height.

## Brand assets

```
public/images/           Source artwork as supplied
  *.svg                    Product logos (fill="currentColor")
  screens/                 Product screenshots, by product

public/brand/svg/        Generated: one file per product x brand tone, with
                         currentColor baked to a hex and explicit width/height
public/brand/mark/       FUUTURA lockup — black, blue, white, sage
public/pdf/              Brand guidelines, icon sheet, source reference decks
```

Screenshot formats, which the mockup frames match exactly so nothing is cropped:
phone 393×852, desktop 1440×796, trade terminal 1440×964, extension popup
600×852.

## PDF export

`⌘⇧E` renders each slide at a fixed 1380 × 976 frame (A4 landscape ratio) at 2x
and writes `Fuutura-Product-Deck.pdf`. The fixed frame lives in the
`body.pdf-export-active` block in `globals.css`, so geometry is identical
regardless of the presenter's window size.

Three things the export depends on:

- **Rotated text uses `transform: rotate()`, never `writing-mode`** — html2canvas
  does not implement `writing-mode` and collapses vertical text into a pile.
- **Reveal wrappers are forced visible during export**, scoped to `.reveal`.
  Never match on inline-style substrings: `[style*="opacity:0"]` also matches
  `opacity:0.075`, which flattens every deliberately faint element.
- **The exporter waits for fonts and images** — `waitForSlideReady()` resolves
  `document.fonts.ready` and every `<img>` decode before each capture.

Slide content never depends on JavaScript: `SlideWrapper` reveals content when
IntersectionObserver reports, *or* when the deck index reaches the slide (set
synchronously by navigation), *or* after a short safety timeout. A blank slide in
a live pitch is not an acceptable failure mode.
