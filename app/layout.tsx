import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

/* Serif carries every headline and product title — the voice of the
   Product Overview document this deck is modelled on. */
const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Inter, Fuutura's brand typeface, carries labels, body and data. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuutura — Product Overview",
  description:
    "A licensed, self-custodial financial ecosystem for global market access. Compliant, on-chain-settled exposure to the world's assets — built for markets the incumbent rails don't reach.",
  keywords: [
    "Fuutura",
    "financial infrastructure",
    "digital identity",
    "self-custodial wallet",
    "synthetic exchange",
    "tokenisation",
    "Global South",
  ],
  openGraph: {
    title: "Fuutura — Product Overview",
    description: "Verify. Trade. Send. Spend. Connect.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
