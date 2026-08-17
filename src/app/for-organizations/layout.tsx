import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Organizations",
  description:
    "Integrate SyncNexa's cryptographic student verification API into your platform — offer verified student discounts, unlock partner benefits, and eliminate fake ID fraud.",
  openGraph: {
    title: "For Organizations | SyncNexa",
    description:
      "Offer verified student discounts and eliminate fake ID fraud with SyncNexa's cryptographic verification API — built for e-commerce, SaaS, hospitality, and more.",
    url: "https://syncnexa.co/for-organizations",
  },
  twitter: {
    title: "For Organizations | SyncNexa",
    description:
      "Cryptographic student verification API for organizations — eliminate fraud, unlock student markets.",
  },
};

export default function ForOrganizationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
