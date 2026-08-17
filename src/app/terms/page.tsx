import React from "react";
import type { Metadata } from "next";
import { TopBar, Footer } from "@/layouts";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | SyncNexa",
  description:
    "Read the Terms of Service for SyncNexa Limited and the SyncID digital student identity platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* Header Section */}
        <FadeInSection className={styles.hero} activeClassName={styles.is_visible}>
          <HeroGeometry />
          <div className={styles.hero_content}>
            <span className={styles.section_badge}>LEGAL AGREEMENT</span>
            <h1 className={styles.hero_title}>Terms of Service</h1>
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
              secondaryBlobColor="#ffaa01"
            >
              {/* 1. Acceptance of Terms */}
              <div className={styles.section_block}>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the SyncNexa website, mobile application
                  (SyncID), developer APIs, or any associated cryptographic
                  trust services (collectively, the &ldquo;Services&rdquo;), you
                  agree to be bound by these Terms of Service
                  (&ldquo;Terms&rdquo;).
                </p>
                <p>
                  If you do not agree to these Terms, you may not access or use
                  the Services.
                </p>
              </div>

              {/* 2. Who We Are */}
              <div className={styles.section_block}>
                <h2>2. Corporate Entity</h2>
                <p>
                  SyncNexa Limited is a technology company incorporated under the
                  laws of the Federal Republic of Nigeria (RC: 7924810).
                </p>
                <p>
                  Our primary product, SyncID, is a decentralized credential
                  platform that enables students to cryptographically verify
                  their active enrollment status and share zero-knowledge proofs
                  with partner organizations worldwide.
                </p>
              </div>

              {/* 3. Eligibility */}
              <div className={styles.section_block}>
                <h2>3. Eligibility & Age Requirements</h2>
                <p>To use SyncID and the Services, you must:</p>
                <ul>
                  <li>Be at least 13 years of age</li>
                  <li>
                    Be a currently enrolled student at an accredited partner
                    educational institution (for student attestation features)
                  </li>
                  <li>
                    Provide accurate, verifiable, and non-fraudulent credential
                    claims
                  </li>
                </ul>
              </div>

              {/* 4. Your Account & Key Custody */}
              <div className={styles.section_block}>
                <h2>4. Account & Key Custody</h2>

                <h3>4.1 SyncTag Registration</h3>
                <p>
                  When registering an account, you will generate a unique
                  pseudonymous handle (&ldquo;SyncTag&rdquo;). You are solely
                  responsible for all activity associated with your SyncTag.
                </p>

                <h3>4.2 Device Key Security</h3>
                <p>
                  Your identity is anchored to an Ed25519 cryptographic keypair
                  generated on your device. You are solely responsible for
                  maintaining the physical and digital security of your device.
                </p>
              </div>

              {/* 5. Verification Services & Source of Truth */}
              <div className={styles.section_block}>
                <h2>5. Verification Services & Source of Truth</h2>

                <h3>5.1 Institutional Authority</h3>
                <p>
                  Your accredited educational institution serves as the sole
                  source of truth regarding your academic enrollment status.
                  SyncNexa relays attestation proofs signed by institutional
                  connectors and does not alter institutional records.
                </p>

                <h3>5.2 User Consent & Revocation</h3>
                <p>
                  Verification proofs are generated only upon your explicit
                  consent. You maintain the right to revoke third-party partner
                  authorizations at any time via the SyncID app.
                </p>
              </div>

              {/* 6. Limitation of Liability */}
              <div className={styles.section_block}>
                <h2>6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, SyncNexa
                  Limited shall not be liable for indirect, incidental, special,
                  consequential, or punitive damages arising from the use of or
                  inability to use the Services.
                </p>
              </div>

              {/* 7. Contact */}
              <div className={styles.section_block}>
                <h2>7. Contact & Legal Inquiries</h2>
                <p>
                  For legal inquiries or notices regarding these Terms, contact:
                </p>
                <p>
                  <strong>Email:</strong> legal@syncnexa.co
                  <br />
                  <strong>Entity:</strong> SyncNexa Limited &bull; Legal Counsel
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
