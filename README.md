# Fuutura — Product Deck

An interactive, presentation-grade product deck for Fuutura, built to the
**Fuutura Brand Guidelines** (ivory fields, deep blue and sage green primaries,
Inter throughout). 30 pages across six chapters, covering all seven Fuutura products, exportable
to A4-landscape PDF.

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

| | Chapter | Pages | Products |
| --- | --- | --- | --- |
| | Cover | 01 | |
| I | Thesis — mission, opportunity, ecosystem | 02–05 | |
| II | Identity — ID, access standard, verification, coverage, compliance | 06–11 | Fuutura ID |
| III | Money — wallet, dilemma, extension, remittance, card | 12–17 | Wallet, Extension |
| IV | Markets — trade, risk architecture, instruments | 18–21 | Trade |
| V | Ecosystem — privacy, communication, business | 22–24 | VPN, Chat, PRO |
| VI | Infrastructure — settlement, capability, tokenisation, $FTRA | 25–29 | |
| | Close | 30 | |

All seven products carry a page of their own, each shown in the surface it
actually ships on — desktop web app, phone, or browser extension.

## Architecture

```
app/
  globals.css              Design system — palette, type scale, layout
                           primitives, card/rule system, mockup frames,
                           PDF export mode
  layout.tsx               Inter + JetBrains Mono, document metadata
  page.tsx                 Deck composition — all 30 slides in order

  lib/
    deck.ts                Slide manifest + navigation context. Shared data,
                           so no component has to import another to read it.
    usePdfExport.ts        html2canvas -> jsPDF, A4 landscape at 2x

  components/
    PresentationShell.tsx  Navigation, keyboard, touch, export wiring
    SlideWrapper.tsx       The brand frame: margin rules, rotated spine
                           label, folio. Every slide is one of these.
    SplitSlide.tsx         Signature two-zone archetype (title | content)
    SectionDivider.tsx     Chapter page — blue field, vertical name, numeral
    ProductShowcase.tsx    Product archetype, "wide" (desktop) or "tall"
                           (phone / extension) variant
    Mockups.tsx            PhoneMockup, BrowserMockup, ExtensionMockup
    Primitives.tsx         Reveal, Eyebrow, SlideTitle, Stat, FeatureCard,
                           RuledList, CompareColumns, Footnote
    ProductMark.tsx        Hexagonal product marks, lockup, brand icon
    HexLattice.tsx         Quiet geometric decoration
    NavDots.tsx            Right-edge chapter rail
    slides/                The 22 bespoke content pages
```

Adding or reordering a slide means two edits: the `SLIDES` manifest in
`lib/deck.ts`, and the composition in `page.tsx`. Folio numbers are passed
explicitly and must match manifest position (index + 1).

## Brand assets

```
public/images/           Source artwork as supplied
  *.svg                    Product logos, authored with fill="currentColor"
  screens/                 Product screenshots, by product

public/brand/svg/        Generated: one file per product x brand tone, with
                         currentColor baked to a hex and explicit width/height
                         stamped on the root <svg>
public/brand/mark/       FUUTURA lockup — blue, white, black, sage
public/pdf/              Brand guidelines, icon sheet, source reference decks
```

The generated SVG variants exist for two reasons: an `<img>`-loaded SVG cannot
inherit CSS `color`, and html2canvas cannot draw a viewBox-only SVG — without
intrinsic dimensions the marks disappear from the PDF export.

Screenshot formats, which the mockup frames match exactly so nothing is
cropped: phone 393x852, desktop 1440x796, trade terminal 1440x964,
extension popup 600x852.

Palette, verbatim from the guidelines: Deep Blue `#0072AA` and Sage Green
`#9CAF88` (primaries), Sky Blue `#78ADD2` (secondary), with Off-White
`#E8E8DC`, Warm White `#FFF9F0`, Light Gray `#D7D7D7`, black and white as
the working neutrals.

## PDF export

`⌘⇧E` renders each slide at a fixed 1380 x 976 frame (A4 landscape ratio) at 2x
and writes `Fuutura-Product-Deck.pdf`. The fixed frame lives in the
`body.pdf-export-active` block in `globals.css` — geometry is identical
regardless of the presenter's window size.

Three things the export depends on, each worth preserving:

- **Rotated text uses `transform: rotate()`, never `writing-mode`.** html2canvas
  does not implement `writing-mode` and collapses vertical text into an
  unreadable pile. See `.frame-spine` and `.divider-name`.
- **Reveal wrappers are forced visible during export.** Entrance animations are
  gated on IntersectionObserver, which the exporter outruns; without the
  `body.pdf-export-active .reveal` override, slides can be captured blank.
- **The exporter waits for fonts and images.** `waitForSlideReady()` resolves
  `document.fonts.ready` and every `<img>` decode before each capture.

Slide content itself never depends on JavaScript: `SlideWrapper` reveals content
when IntersectionObserver reports, *or* when the deck index reaches the slide
(set synchronously by navigation), *or* after a short safety timeout. A blank
slide in a live pitch is not an acceptable failure mode.
