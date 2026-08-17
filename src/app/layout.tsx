import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syncnexa.co"),
  title: {
    default: "SyncNexa — Your Identity, Simplified.",
    template: "%s | SyncNexa",
  },
  description:
    "SyncNexa provides zero-knowledge student verification and decentralized trust infrastructure — connecting universities, students, and organizations through cryptographic proof.",
  keywords: [
    "student verification",
    "digital identity",
    "zero knowledge proof",
    "decentralized identity",
    "SyncID",
    "university trust",
    "student discount verification",
    "SyncNexa",
  ],
  authors: [{ name: "SyncNexa Limited", url: "https://syncnexa.co" }],
  creator: "SyncNexa Limited",
  publisher: "SyncNexa Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syncnexa.co",
    siteName: "SyncNexa",
    title: "SyncNexa — Your Identity, Simplified.",
    description:
      "Zero-knowledge student verification and decentralized trust infrastructure for universities, students, and organizations.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "SyncNexa Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@SyncNexa",
    creator: "@SyncNexa",
    title: "SyncNexa — Your Identity, Simplified.",
    description:
      "Zero-knowledge student verification and decentralized trust infrastructure.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
