import React from "react";
import type { Metadata } from "next";
import { TopBar, Footer } from "@/layouts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | SyncNexa",
  description: "Learn how SyncNexa protects your privacy, uses pairwise decentralized identifiers, and safeguards student verification data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main className={styles.main_content}>
        {/* Header Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.hero_title}>Privacy Policy</h1>
            <p className={styles.effective_date}>
              <strong>SyncNexa Limited</strong> &bull; Effective Date: January 1, 2026
            </p>
          </div>
        </section>

        {/* Content Document */}
        <section className={styles.document_section}>
          <div className={styles.container}>
            <div className={styles.document_body}>
              {/* 1. Introduction */}
              <div className={styles.section_block}>
                <h2>1. Introduction</h2>
                <p>
                  SyncNexa Limited (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share information when you use our website, mobile applications, and services (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p>
                  By using our Services, you agree to the practices described in this policy.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div className={styles.section_block}>
                <h2>2. Information We Collect</h2>

                <h3>2.1 Information You Provide</h3>
                <p>When you create a SyncID account, we collect:</p>
                <ul>
                  <li>Your chosen SyncTag (public handle)</li>
                  <li>Your device public key</li>
                  <li>Your recovery email or phone number (hashed and encrypted)</li>
                  <li>Your enrollment status as confirmed by your educational institution</li>
                  <li>Any optional profile information you choose to add (such as portfolio details)</li>
                </ul>

                <h3>2.2 Information We Do NOT Collect</h3>
                <p>We do not collect or store:</p>
                <div className={styles.exclusion_box}>
                  <ul>
                    <li>Your academic transcripts</li>
                    <li>Your student ID card images</li>
                    <li>Your admission letters</li>
                    <li>Your grades or GPA</li>
                    <li>Your date of birth</li>
                    <li>Your home address</li>
                  </ul>
                </div>
                <p>
                  Your educational institution remains the source of truth for your enrollment status. We only receive a simple confirmation: whether you are a currently enrolled student.
                </p>

                <h3>2.3 Information Collected Automatically</h3>
                <p>When you use our Services, we may automatically collect:</p>
                <ul>
                  <li>Device type and operating system</li>
                  <li>App version</li>
                  <li>IP address</li>
                  <li>Usage data (such as which features you use)</li>
                </ul>
                <p>
                  This information helps us improve performance and security.
                </p>
              </div>

              {/* 3. How We Use Your Information */}
              <div className={styles.section_block}>
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Create and manage your account</li>
                  <li>Verify your student status with your institution</li>
                  <li>Facilitate secure consent when you share your status with organizations</li>
                  <li>Provide, operate, and improve our Services</li>
                  <li>Send important updates about your account or our Services</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Detect and prevent fraud or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* 4. How We Share Your Information */}
              <div className={styles.section_block}>
                <h2>4. How We Share Your Information</h2>

                <h3>4.1 With Your Consent</h3>
                <p>
                  We only share your verified status with organizations when you explicitly approve. Before any organization receives your data, you will see exactly what is being requested.
                </p>

                <h3>4.2 What Organizations Receive</h3>
                <p>When you approve a verification request, the organization receives:</p>
                <ul>
                  <li>A pairwise ID (unique to you and that organization)</li>
                  <li>Your student status (active or inactive)</li>
                  <li>Your institution name (if requested and you approved)</li>
                  <li>Your institution code (if applicable)</li>
                </ul>
                <p>
                  Organizations do <strong>not</strong> receive your name, SyncTag, documents, or any other personal information.
                </p>

                <h3>4.3 Pairwise IDs</h3>
                <p>
                  To protect your privacy, each organization receives a unique identifier for you. This means organizations cannot cross-reference your identity across platforms.
                </p>

                <h3>4.4 Service Providers</h3>
                <p>
                  We may share limited information with trusted service providers who help us operate our Services, such as email delivery, push notifications, and cloud hosting. These providers are contractually bound to keep your information confidential.
                </p>

                <h3>4.5 Legal Requirements</h3>
                <p>
                  We may disclose information if required by law, regulation, or a valid court order.
                </p>
              </div>

              {/* 5. Data Security */}
              <div className={styles.section_block}>
                <h2>5. Data Security</h2>
                <p>We take data security seriously. We use:</p>
                <ul>
                  <li>End-to-end encryption</li>
                  <li>Mutual TLS for all communication with schools</li>
                  <li>Biometric authentication on your device</li>
                  <li>Secure key management</li>
                </ul>
                <p>
                  No system is 100% secure, but we work hard to protect your data.
                </p>
              </div>

              {/* 6. Data Retention */}
              <div className={styles.section_block}>
                <h2>6. Data Retention</h2>
                <p>We retain only what&apos;s necessary:</p>
                <ul>
                  <li>Your account data is kept while your account is active.</li>
                  <li>If you delete your account, your data is permanently removed within 30 days.</li>
                  <li>Revocation records are retained for fraud prevention and audit purposes, but they contain no personal information.</li>
                </ul>
              </div>

              {/* 7. Your Rights */}
              <div className={styles.section_block}>
                <h2>7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your credentials and portfolio data</li>
                  <li>Revoke any organization&apos;s access at any time</li>
                  <li>Withdraw consent for any future verification</li>
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:privacy@syncnexa.co" className={styles.doc_link}>
                    privacy@syncnexa.co
                  </a>.
                </p>
              </div>

              {/* 8. Children's Privacy */}
              <div className={styles.section_block}>
                <h2>8. Children&apos;s Privacy</h2>
                <p>
                  Our Services are intended for students aged 13 and above. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              {/* 9. Changes to This Policy */}
              <div className={styles.section_block}>
                <h2>9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we&apos;ll update the effective date and notify you through the app or by email.
                </p>
              </div>

              {/* 10. Contact Us */}
              <div className={styles.section_block}>
                <h2>10. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, contact us at:</p>
                <div className={styles.contact_card}>
                  <p><strong>SyncNexa Limited</strong></p>
                  <p>14 Innovate Way, Yaba Tech District, Lagos, Nigeria</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:privacy@syncnexa.co" className={styles.doc_link}>
                      privacy@syncnexa.co
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
