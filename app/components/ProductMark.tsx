"use client";

import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   ProductMark — the hexagonal product marks, rendered from the
   supplied SVG artwork.

   The source files are authored with fill="currentColor"; a build
   step in /public/brand/svg bakes each brand tone into its own
   file and stamps explicit width/height on the root <svg>.
   Both matter: an <img>-loaded SVG cannot inherit CSS colour, and
   html2canvas cannot draw a viewBox-only SVG — without intrinsic
   dimensions the marks vanish from the PDF export.
───────────────────────────────────────────────────────────── */

export type ProductKey =
  | "id"
  | "wallet"
  | "trade"
  | "pro"
  | "vpn"
  | "chat"
  | "extension";

export type MarkTone = "blue" | "white" | "sage" | "ink";

/** Canonical names, so labels never drift between slides. */
export const PRODUCT_NAME: Record<ProductKey, string> = {
  id: "Fuutura ID",
  wallet: "Fuutura Wallet",
  trade: "Fuutura Trade",
  pro: "Fuutura PRO",
  vpn: "Fuutura VPN",
  chat: "Fuutura Chat",
  extension: "Fuutura Extension",
};

/** One-line role, used as the meta label on product cards. */
export const PRODUCT_ROLE: Record<ProductKey, string> = {
  id: "Identity",
  wallet: "Custody",
  trade: "Markets",
  pro: "Business",
  vpn: "Privacy",
  chat: "Communication",
  extension: "Browser",
};

interface ProductMarkProps {
  product: ProductKey;
  tone?: MarkTone;
  /** Rendered box size, any CSS length. */
  size?: string;
  alt?: string;
}

export default function ProductMark({
  product,
  tone = "blue",
  size = "clamp(2rem, 4.6vh, 3.1rem)",
  alt,
}: ProductMarkProps) {
  return (
    <span
      className="hex"
      style={{ width: size, height: size, display: "inline-flex" }}
    >
      <Image
        src={`/brand/svg/${product}-${tone}.svg`}
        alt={alt ?? PRODUCT_NAME[product]}
        width={400}
        height={445}
        unoptimized
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   Lockup — the full FUUTURA wordmark + icon
───────────────────────────────────────────────────────────── */

interface LockupProps {
  tone?: "blue" | "white" | "black" | "sage";
  /** Rendered width, any CSS length. */
  width?: string;
  className?: string;
}

export function Lockup({ tone = "blue", width, className = "" }: LockupProps) {
  return (
    <Image
      src={`/brand/mark/fuutura-lockup-${tone}.png`}
      alt="Fuutura"
      width={2872}
      height={675}
      unoptimized
      priority
      className={className}
      style={{ width: width ?? "clamp(200px, 32vw, 470px)", height: "auto" }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   BrandIcon — the bare hexagon mark, on its own
───────────────────────────────────────────────────────────── */

export function BrandIcon({
  tone = "blue",
  size = "clamp(2rem, 5vh, 3.4rem)",
}: {
  tone?: MarkTone;
  size?: string;
}) {
  return (
    <span className="hex" style={{ width: size, height: size, display: "inline-flex" }}>
      <Image
        src={`/brand/svg/mark-${tone}.svg`}
        alt="Fuutura"
        width={301}
        height={337}
        unoptimized
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </span>
  );
}
