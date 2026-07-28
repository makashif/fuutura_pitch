import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Inter is Fuutura's primary typeface — headings and body both.
   Hierarchy comes from weight and scale rather than a second font. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Mono is reserved for folios, units and micro-meta only. */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuutura — Next Generation Financial Infrastructure",
  description:
    "A licensed, self-custodial financial ecosystem for global market access. One verified identity across identity, wallet, markets and settlement — built for the markets incumbent rails don't reach.",
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
    title: "Fuutura — Next Generation Financial Infrastructure",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
