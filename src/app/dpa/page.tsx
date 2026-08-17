import React from "react";
import type { Metadata } from "next";
import { TopBar, Footer } from "@/layouts";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Data Processing Agreement (DPA)",
  description:
    "SyncNexa's Data Processing Agreement — outlining cryptographic processing standards, privacy-by-design compliance, and how student data is handled.",
  openGraph: {
    title: "Data Processing Agreement (DPA) | SyncNexa",
    description:
      "SyncNexa's DPA outlines our cryptographic processing standards and privacy-by-design compliance for institutional partners.",
    url: "https://syncnexa.co/dpa",
  },
  twitter: {
    title: "Data Processing Agreement (DPA) | SyncNexa",
    description:
      "SyncNexa's DPA — cryptographic processing standards and privacy-by-design compliance.",
  },
};

export default function DpaPage() {
  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* Header Section */}
        <FadeInSection className={styles.hero} activeClassName={styles.is_visible}>
          <HeroGeometry />
          <div className={styles.hero_content}>
            <span className={styles.section_badge}>LEGAL & COMPLIANCE</span>
            <h1 className={styles.hero_title}>Data Processing Agreement</h1>
            <p className={styles.effective_date}>
              <strong>SyncNexa Limited</strong> &bull; Effective Date: January 1,
              2026
            </p>
          </div>
        </FadeInSection>

        {/* Content Document */}
        <FadeInSection
          className={styles.document_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <GlassBlobCard
              className={styles.document_glass_card}
              blobColor="#006d50"
              secondaryBlobColor="#04d69d"
            >
              <div className={styles.section_block}>
                <h2>1. Purpose & Scope</h2>
                <p>
                  This Data Processing Agreement (&ldquo;DPA&rdquo;) governs the
                  cryptographic processing of personal data by SyncNexa Limited
                  in connection with the decentralized verification and trust
                  services provided to educational institutions and verifying
                  organizations under our Terms of Service.
                </p>
              </div>

              <div className={styles.section_block}>
                <h2>2. Cryptographic Privacy-by-Design</h2>
                <p>
                  SyncNexa operates on a strict zero-knowledge, zero-persistence
                  decentralized attestation model. Academic documents,
                  transcripts, student ID card images, GPA records, and unhashed
                  identifiers are neither requested nor stored on SyncNexa
                  servers.
                </p>
                <ul>
                  <li>
                    <strong>Pairwise Pseudonymity:</strong> Verifying
                    organizations receive distinct pairwise identifiers that
                    cannot be correlated across third-party commercial platforms.
                  </li>
                  <li>
                    <strong>Zero PII Retention:</strong> Verification queries
                    confirm boolean status (&ldquo;active&rdquo; /
                    &ldquo;inactive&rdquo;) directly from the accredited
                    institution without database replication.
                  </li>
                  <li>
                    <strong>Mutual TLS (mTLS 1.3):</strong> All communications
                    between the SyncNexa Trust Adapter and institutional SIS
                    networks are encrypted with hardware-anchored mutual TLS.
                  </li>
                </ul>
              </div>

              <div className={styles.section_block}>
                <h2>3. Rights of Data Subjects</h2>
                <p>
                  Data subjects maintain complete sovereignty over their
                  credential disclosures. Explicit cryptographic consent is
                  required for each verification event and may be revoked
                  immediately at any time via the SyncID mobile application.
                </p>
              </div>

              <div className={styles.section_block}>
                <h2>4. Compliance & Contact</h2>
                <p>
                  For institutional DPA countersigning, compliance audits, or
                  legal inquiries, contact our Data Protection Officer at:
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@syncnexa.co" className={styles.doc_link}>
                    privacy@syncnexa.co
                  </a>
                  <br />
                  <strong>Entity:</strong> SyncNexa Limited &bull; Legal &
                  Compliance Division
                </p>
              </div>
            </GlassBlobCard>
          </div>
        </FadeInSection>
      </main>

      <Footer />
    </div>
  );
}
