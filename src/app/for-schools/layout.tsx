import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Universities & Schools",
  description:
    "Deploy SyncNexa's Trust Adapter at your institution — issue cryptographic student credentials, enable privacy-preserving verification, and reduce administrative overhead.",
  openGraph: {
    title: "For Universities & Schools | SyncNexa",
    description:
      "SyncNexa's Trust Adapter enables universities to issue cryptographic student credentials with zero central document storage and full NDPR/GDPR compliance.",
    url: "https://syncnexa.co/for-schools",
  },
  twitter: {
    title: "For Universities & Schools | SyncNexa",
    description:
      "Issue cryptographic student credentials and enable privacy-preserving verification at your institution.",
  },
};

export default function ForSchoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
