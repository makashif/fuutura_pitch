# Fuutura — Product Deck

An interactive, presentation-grade product deck for Fuutura, built to the
**Fuutura Brand Guidelines** (ivory fields, deep blue and sage green primaries,
Inter throughout). 25 pages across five chapters, exportable to A4-landscape PDF.

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

The right-edge rail is clickable; heavier ticks mark chapter openings.

## Deck structure

| | Chapter | Pages |
| --- | --- | --- |
| | Cover | 01 |
| I | The Thesis — mission, opportunity, ecosystem | 02–05 |
| II | Identity — access standard, verification, coverage, compliance | 06–10 |
| III | Money — wallet, the wallet dilemma, remittance | 11–14 |
| IV | Markets — trade, risk architecture, instruments | 15–18 |
| V | Infrastructure — settlement, capability, wider ecosystem, tokenisation, $FTRA | 19–24 |
| | Close | 25 |

## Architecture

```
app/
  globals.css              Design system — palette, type scale, layout
                           primitives, card/rule system, PDF export mode
  layout.tsx               Inter + JetBrains Mono, document metadata
  page.tsx                 Deck composition — all 25 slides in order
  lib/usePdfExport.ts      html2canvas → jsPDF, A4 landscape at 2x

  components/
    PresentationShell.tsx  Slide manifest, navigation, keyboard, export
    SlideWrapper.tsx       The brand frame: margin rules, rotated spine
                           label, folio. Every slide is one of these.
    SplitSlide.tsx         Signature two-zone archetype (title | content)
    SectionDivider.tsx     Chapter page — blue field, vertical name, numeral
    ProductShowcase.tsx    Flagship product archetype (Wallet, Trade)
    Primitives.tsx         Reveal, Eyebrow, SlideTitle, Stat, FeatureCard,
                           RuledList, CompareColumns, Footnote
    ProductMark.tsx        Hexagonal product marks + FUUTURA lockup
    PhoneMockup.tsx        Titanium device frame for product shots
    HexLattice.tsx         Quiet geometric decoration
    NavDots.tsx            Right-edge chapter rail
    slides/                The 17 bespoke content pages
```

Adding or reordering a slide means two edits: the `SLIDES` manifest in
`PresentationShell.tsx`, and the composition in `page.tsx`. Folio numbers are
passed explicitly and must match manifest position (index + 1).

## Brand assets

```
public/brand/mark/       FUUTURA lockup — blue, white, black, sage
public/brand/product/    Product marks — wallet, trade, id, pro, vpn, chat
                         in blue, sage and white
public/pdf/              Brand guidelines, icon sheet, source reference decks
```

Palette, verbatim from the guidelines: Deep Blue `#0072AA` and Sage Green
`#9CAF88` (primaries), Sky Blue `#78ADD2` (secondary), with Off-White
`#E8E8DC`, Warm White `#FFF9F0`, Light Gray `#D7D7D7`, black and white as
the working neutrals.

## PDF export

`⌘⇧E` renders each slide at a fixed 1380 × 976 frame (A4 landscape ratio) at 2x
and writes `Fuutura-Product-Deck.pdf`. The fixed frame lives in the
`body.pdf-export-active` block in `globals.css` — geometry is identical
regardless of the presenter's window size.
