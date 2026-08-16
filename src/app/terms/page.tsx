import React from "react";
import type { Metadata } from "next";
import { TopBar, Footer } from "@/layouts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | SyncNexa",
  description: "Read the Terms of Service for SyncNexa Limited and the SyncID digital student identity platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main className={styles.main_content}>
        {/* Header Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.pill_label}>Legal & Terms</span>
            <h1 className={styles.hero_title}>Terms of Service</h1>
            <p className={styles.effective_date}>
              <strong>SyncNexa Limited</strong> &bull; Effective Date: January 1, 2026
            </p>
          </div>
        </section>

        {/* Content Document */}
        <section className={styles.document_section}>
          <div className={styles.container}>
            <div className={styles.document_body}>
              {/* 1. Acceptance of Terms */}
              <div className={styles.section_block}>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the SyncNexa website, mobile application (SyncID), or any associated services (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
                </p>
                <p>
                  If you do not agree to these Terms, do not use the Services.
                </p>
              </div>

              {/* 2. Who We Are */}
              <div className={styles.section_block}>
                <h2>2. Who We Are</h2>
                <p>
                  SyncNexa Limited is a company registered under the laws of the Federal Republic of Nigeria.
                </p>
                <p>
                  Our primary product, SyncID, is a digital identity platform that allows students to verify their enrollment status and share that verification with organizations securely.
                </p>
              </div>

              {/* 3. Eligibility */}
              <div className={styles.section_block}>
                <h2>3. Eligibility</h2>
                <p>To use SyncID, you must:</p>
                <ul>
                  <li>Be at least 13 years old</li>
                  <li>Be a currently enrolled student at a partner educational institution (for student verification features)</li>
                  <li>Provide accurate and truthful information</li>
                </ul>
                <p>
                  If you are under 18, you confirm that you have permission from a parent or guardian to use the Services.
                </p>
              </div>

              {/* 4. Your Account */}
              <div className={styles.section_block}>
                <h2>4. Your Account</h2>

                <h3>4.1 Creating a SyncTag</h3>
                <p>
                  When you create an account, you will choose a public handle called a SyncTag. You are responsible for all activity that occurs under your SyncTag.
                </p>

                <h3>4.2 Account Security</h3>
                <p>
                  You are responsible for maintaining the security of your device and account credentials. SyncNexa is not liable for any loss arising from unauthorized access to your account.
                </p>

                <h3>4.3 Recovery</h3>
                <p>
                  You may recover your account through trusted contacts or a backup phrase. You are responsible for keeping your backup phrase secure.
                </p>
              </div>

              {/* 5. Verification Services */}
              <div className={styles.section_block}>
                <h2>5. Verification Services</h2>

                <h3>5.1 Source of Truth</h3>
                <p>
                  Your educational institution is the source of truth for your enrollment status. SyncNexa relays your status as provided by your institution. We do not independently verify academic records.
                </p>

                <h3>5.2 Consent</h3>
                <p>
                  Your verified status is only shared with organizations when you explicitly approve. You may revoke consent at any time.
                </p>

                <h3>5.3 Revocation</h3>
                <p>
                  If your institution confirms that you are no longer enrolled, your student credential will be revoked immediately. You will no longer be able to use it for student benefits.
                </p>
              </div>

              {/* 6. Acceptable Use */}
              <div className={styles.section_block}>
                <h2>6. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Provide false or misleading information</li>
                  <li>Attempt to verify as a student when you are not currently enrolled</li>
                  <li>Share your credentials with others for fraudulent purposes</li>
                  <li>Reverse engineer, decompile, or tamper with our Services</li>
                  <li>Use the Services for any illegal or unauthorized purpose</li>
                  <li>Interfere with the security or integrity of our systems</li>
                  <li>Attempt to bypass verification through technical manipulation</li>
                </ul>
                <p>
                  Violation of these terms may result in account suspension or termination.
                </p>
              </div>

              {/* 7. Intellectual Property */}
              <div className={styles.section_block}>
                <h2>7. Intellectual Property</h2>

                <h3>7.1 Our IP</h3>
                <p>
                  The SyncNexa name, SyncID name, logos, software, documentation, and branding are the property of SyncNexa Limited. You may not use them without prior written permission.
                </p>

                <h3>7.2 Your Data</h3>
                <p>
                  You retain ownership of your personal information. By using the Services, you grant us a limited license to process your data as described in our Privacy Policy.
                </p>
              </div>

              {/* 8. Third-Party Organizations */}
              <div className={styles.section_block}>
                <h2>8. Third-Party Organizations</h2>
                <p>
                  SyncNexa provides verification services to organizations that offer student benefits. We are not responsible for:
                </p>
                <ul>
                  <li>The quality of products or services offered by these organizations</li>
                  <li>The terms and conditions set by these organizations</li>
                  <li>Any disputes between you and an organization</li>
                </ul>
                <p>
                  When you share your status with an organization, you are entering into a separate relationship with them.
                </p>
              </div>

              {/* 9. Disclaimer of Warranties */}
              <div className={styles.section_block}>
                <h2>9. Disclaimer of Warranties</h2>
                <p>
                  The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied.
                </p>
                <p>We do not guarantee that:</p>
                <ul>
                  <li>The Services will be uninterrupted or error-free</li>
                  <li>Verification will always be successful</li>
                  <li>The Services will meet your specific requirements</li>
                </ul>
              </div>

              {/* 10. Limitation of Liability */}
              <div className={styles.section_block}>
                <h2>10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, SyncNexa Limited shall not be liable for:
                </p>
                <ul>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or goodwill</li>
                  <li>Damages arising from your use or inability to use the Services</li>
                  <li>Disputes with third-party organizations</li>
                </ul>
                <p>
                  Our total liability for any claim shall not exceed the amount you paid us (if any) in the 12 months preceding the claim.
                </p>
              </div>

              {/* 11. Indemnification */}
              <div className={styles.section_block}>
                <h2>11. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless SyncNexa Limited, its founders, directors, employees, and agents from any claims, losses, or damages arising from:
                </p>
                <ul>
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                </ul>
              </div>

              {/* 12. Termination */}
              <div className={styles.section_block}>
                <h2>12. Termination</h2>

                <h3>12.1 By You</h3>
                <p>You may delete your account at any time through the app.</p>

                <h3>12.2 By Us</h3>
                <p>We may suspend or terminate your account if you violate these Terms or engage in fraudulent activity.</p>

                <h3>12.3 Effect of Termination</h3>
                <p>Upon termination, your access to the Services will cease. Data retention and deletion will follow our Privacy Policy.</p>
              </div>

              {/* 13. Changes to These Terms */}
              <div className={styles.section_block}>
                <h2>13. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. We will notify you of significant changes through the app or by email. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.
                </p>
              </div>

              {/* 14. Governing Law and Dispute Resolution */}
              <div className={styles.section_block}>
                <h2>14. Governing Law and Dispute Resolution</h2>

                <h3>14.1 Governing Law</h3>
                <p>
                  These Terms are governed by the laws of the Federal Republic of Nigeria.
                </p>

                <h3>14.2 Mediation</h3>
                <p>
                  If a dispute arises, both parties agree to first attempt resolution through mediation in Lagos, Nigeria.
                </p>

                <h3>14.3 Arbitration</h3>
                <p>
                  If mediation fails, the dispute shall be resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, Cap A18, Laws of the Federation of Nigeria 2004.
                </p>
              </div>

              {/* 15. Contact Us */}
              <div className={styles.section_block}>
                <h2>15. Contact Us</h2>
                <p>For questions about these Terms of Service, contact:</p>
                <div className={styles.contact_card}>
                  <p><strong>SyncNexa Limited</strong></p>
                  <p>14 Innovate Way, Yaba Tech District, Lagos, Nigeria</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:legal@syncnexa.co" className={styles.doc_link}>
                      legal@syncnexa.co
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
