import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SyncID — Your Digital Student Identity",
  description:
    "SyncID is your cryptographic digital student identity — generated on-device, impossible to fake, and accepted across universities, apps, and partner organizations.",
  openGraph: {
    title: "SyncID — Your Digital Student Identity | SyncNexa",
    description:
      "SyncID uses on-device cryptographic keypairs and zero-knowledge proofs to verify your student status — without ever sharing personal documents.",
    url: "https://syncnexa.co/syncid",
  },
  twitter: {
    title: "SyncID — Your Digital Student Identity | SyncNexa",
    description:
      "Your cryptographic digital student identity — on-device, impossible to fake, universally accepted.",
  },
};

export default function SyncIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
