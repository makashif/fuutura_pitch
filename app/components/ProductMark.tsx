"use client";

import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   ProductMark — the hexagonal product icons from
   "Fuutura final icons". One mark per ecosystem product,
   available in deep blue, sage green and white.
───────────────────────────────────────────────────────────── */

export type ProductKey = "wallet" | "trade" | "id" | "pro" | "vpn" | "chat";
export type MarkTone = "blue" | "sage" | "white";

/** Canonical product names, so labels never drift between slides. */
export const PRODUCT_NAME: Record<ProductKey, string> = {
  id: "Fuutura ID",
  wallet: "Fuutura Wallet",
  trade: "Fuutura Trade",
  pro: "Fuutura PRO",
  vpn: "Fuutura VPN",
  chat: "Fuutura Chat",
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
        src={`/brand/product/${product}-${tone}.png`}
        alt={alt ?? PRODUCT_NAME[product]}
        width={128}
        height={128}
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
      style={{
        width: width ?? "clamp(200px, 32vw, 470px)",
        height: "auto",
      }}
    />
  );
}
