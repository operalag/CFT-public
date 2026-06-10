import "./globals.css";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://cft.operal.tech";
const TITLE = "CFT — The Vanishing Record · Music you can listen to once";
const DESC =
  "CFT (Consumable File Token) is an open standard by Opera RK for music bound to a physical object and a self-destructing key — heard once, then only a memory and an object. A new way to listen, own, and value music.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  keywords: [
    "CFT", "Consumable File Token", "music NFT", "Opera RK", "Philipp Zürcher",
    "one-time listening", "scarcity", "vanishing record", "blockchain music standard",
  ],
  authors: [{ name: "Opera RK" }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE,
    siteName: "CFT — The Vanishing Record",
    type: "website",
    images: [{ url: "/img/ritual-turntable.jpg", width: 1920, height: 1280, alt: "CFT — The Vanishing Record" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/img/ritual-turntable.jpg"],
  },
  alternates: { canonical: SITE },
};

export const viewport = {
  themeColor: "#16130d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
