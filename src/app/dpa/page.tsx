import React from "react";
import type { Metadata } from "next";
import { TopBar, Footer } from "@/layouts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Data Processing Agreement (DPA) | SyncNexa",
  description: "Data Processing Agreement outlining SyncNexa's cryptographic processing standards and privacy-by-design compliance.",
};

export default function DpaPage() {
  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main className={styles.main_content}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.hero_title}>Data Processing Agreement</h1>
            <p className={styles.effective_date}>
              <strong>SyncNexa Limited</strong> &bull; Effective Date: January 1, 2026
            </p>
          </div>
        </section>

        <section className={styles.document_section}>
          <div className={styles.container}>
            <div className={styles.document_body}>
              <div className={styles.section_block}>
                <h2>1. Purpose & Scope</h2>
                <p>
                  This Data Processing Agreement (&ldquo;DPA&rdquo;) governs the processing of personal data by SyncNexa Limited in connection with the verification and trust services provided to educational institutions and verifying organizations under our Terms of Service.
                </p>
              </div>

              <div className={styles.section_block}>
                <h2>2. Cryptographic Privacy-by-Design</h2>
                <p>
                  SyncNexa operates on a zero-knowledge, decentralized attestation model. Academic documents, transcripts, student ID card images, grades, and unhashed identifiers are neither requested nor stored on SyncNexa servers.
                </p>
                <ul>
                  <li><strong>Pairwise Identifiers:</strong> Verifying organizations receive distinct pairwise identifiers that cannot be correlated across third-party platforms.</li>
                  <li><strong>Zero PII Retention:</strong> Verification queries confirm boolean status (&ldquo;active&rdquo; / &ldquo;inactive&rdquo;) directly from the accredited institution.</li>
                  <li><strong>Mutual TLS (mTLS):</strong> All communications between the SyncNexa Trust Adapter and institutional SIS networks are encrypted with mutual TLS.</li>
                </ul>
              </div>

              <div className={styles.section_block}>
                <h2>3. Rights of Data Subjects</h2>
                <p>
                  Data subjects maintain complete sovereignty over their credential disclosures. Consent is required for each verification event and may be revoked immediately via the SyncID mobile application.
                </p>
              </div>

              <div className={styles.section_block}>
                <h2>4. Compliance & Contact</h2>
                <p>
                  For institutional DPA execution or compliance inquiries, contact our Data Protection Officer at{" "}
                  <a href="mailto:privacy@syncnexa.co" className={styles.doc_link}>
                    privacy@syncnexa.co
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
