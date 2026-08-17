import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SyncNexa — reach out for student support, university partnerships, business API integrations, or press inquiries.",
  openGraph: {
    title: "Contact Us | SyncNexa",
    description:
      "Reach out to SyncNexa for student support, campus pilots, business API integrations, or press inquiries. We respond within 4 business hours.",
    url: "https://syncnexa.co/contact",
  },
  twitter: {
    title: "Contact Us | SyncNexa",
    description:
      "Reach the right SyncNexa team — students, universities, businesses, and press.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
