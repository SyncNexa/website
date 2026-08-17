import React from "react";
import type { Metadata } from "next";
import { TopBar, Footer } from "@/layouts";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | SyncNexa",
  description:
    "Learn how SyncNexa protects your privacy, uses pairwise decentralized identifiers, and safeguards student verification data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* Header Section */}
        <FadeInSection className={styles.hero} activeClassName={styles.is_visible}>
          <HeroGeometry />
          <div className={styles.hero_content}>
            <span className={styles.section_badge}>LEGAL & COMPLIANCE</span>
            <h1 className={styles.hero_title}>Privacy Policy</h1>
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
              blobColor="#04d69d"
              secondaryBlobColor="#006d50"
            >
              {/* 1. Introduction */}
              <div className={styles.section_block}>
                <h2>1. Introduction</h2>
                <p>
                  SyncNexa Limited (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                  &ldquo;our&rdquo;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, store, and
                  safeguard information when you use our website, mobile
                  applications, and cryptographic verification services
                  (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p>
                  By using our Services, you agree to the privacy practices
                  described in this policy.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div className={styles.section_block}>
                <h2>2. Information We Collect</h2>

                <h3>2.1 Information You Provide</h3>
                <p>When you create a SyncID account, we collect:</p>
                <ul>
                  <li>Your chosen SyncTag (public pseudonymous handle)</li>
                  <li>Your device public cryptographic keypair (Curve25519)</li>
                  <li>
                    Your recovery email or phone number (hashed and encrypted)
                  </li>
                  <li>
                    Your active enrollment status as cryptographically confirmed
                    by your educational institution
                  </li>
                  <li>
                    Any optional profile information you choose to add (such as
                    portfolio links)
                  </li>
                </ul>

                <h3>2.2 Information We Do NOT Collect</h3>
                <p>We strictly do not collect, copy, or store:</p>
                <div className={styles.exclusion_box}>
                  <ul>
                    <li>Academic transcripts or examination records</li>
                    <li>Student ID card photographs or biometric scans</li>
                    <li>Admission letters or official certificates</li>
                    <li>Grade point averages (GPA) or course registrations</li>
                    <li>Date of birth or national identification numbers</li>
                    <li>Home or physical residential addresses</li>
                  </ul>
                </div>
                <p>
                  Your educational institution remains the sole authority and
                  source of truth. We only receive a binary cryptographic
                  confirmation: whether you are an actively enrolled student.
                </p>
              </div>

              {/* 3. How We Use Your Information */}
              <div className={styles.section_block}>
                <h2>3. How We Use Your Information</h2>
                <p>We use the minimal information we collect exclusively to:</p>
                <ul>
                  <li>
                    Create and manage your SyncID decentralized credential
                  </li>
                  <li>
                    Verify your active enrollment status with your school&apos;s
                    connector
                  </li>
                  <li>
                    Generate zero-knowledge pairwise proofs for partner services
                  </li>
                  <li>
                    Deliver security notifications, status revocations, and
                    updates
                  </li>
                  <li>Maintain the integrity and uptime of the trust mesh</li>
                </ul>

                <div className={styles.highlight_box}>
                  <p>
                    🔒 We do not monetize student data. We will never sell, rent,
                    or broker your personal information or verification records to
                    advertisers or third parties.
                  </p>
                </div>
              </div>

              {/* 4. Data Sharing & Third Parties */}
              <div className={styles.section_block}>
                <h2>4. Data Sharing & Third Parties</h2>
                <p>
                  When you verify your student status with a participating
                  service (such as a music streaming or software platform), we
                  share only:
                </p>
                <ul>
                  <li>
                    A unique pairwise pseudonym identifier (unique to that
                    specific service)
                  </li>
                  <li>Your active enrollment confirmation (true/false)</li>
                  <li>The verified name of your educational institution</li>
                </ul>
                <p>
                  Because we use pairwise identifiers, separate platforms cannot
                  correlate your verification activity across services.
                </p>
              </div>

              {/* 5. Data Security */}
              <div className={styles.section_block}>
                <h2>5. Cryptographic Data Security</h2>
                <p>
                  We implement robust technological measures to safeguard your
                  identity:
                </p>
                <ul>
                  <li>
                    End-to-end mTLS 1.3 encryption for all network traffic
                  </li>
                  <li>
                    Hardware-anchored key generation within device Secure
                    Enclaves
                  </li>
                  <li>
                    Zero document storage on central cloud servers
                  </li>
                  <li>
                    Immutable audit logging on campus connector nodes
                  </li>
                </ul>
              </div>

              {/* 6. Contact Us */}
              <div className={styles.section_block}>
                <h2>6. Privacy Inquiries & Data Rights</h2>
                <p>
                  If you have questions regarding this Privacy Policy, wish to
                  exercise your data deletion rights, or want to audit your
                  account records, contact our Data Protection Officer at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@syncnexa.co
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
