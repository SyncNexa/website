import React from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton, SnCodeBlock } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import HeroArchitectureVisual from "@/components/hero/HeroArchitectureVisual";
import styles from "./page.module.css";

export default function Home() {
  const logos = [
    {
      name: "FUTO",
      label: "Federal Univ. of Technology Owerri",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      name: "UNILAG",
      label: "University of Lagos",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      name: "Covenant",
      label: "Covenant University",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "ALU",
      label: "African Leadership Univ.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      name: "Spotify",
      label: "Spotify",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.674.464-1.027.248-2.813-1.718-6.354-2.107-10.525-1.154-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.568-1.044 8.487-.6 11.64 1.34.352.216.463.674.247 1.027zm1.467-3.262c-.272.443-.852.584-1.295.312-3.22-1.979-8.13-2.553-11.938-1.396-.498.151-1.026-.134-1.177-.632-.151-.498.134-1.026.632-1.177 4.356-1.323 9.774-.683 13.466 1.587.443.272.584.852.312 1.306zm.126-3.41c-3.86-2.292-10.23-2.504-13.914-1.386-.59.179-1.218-.161-1.397-.751-.179-.59.161-1.218.751-1.397 4.234-1.285 11.272-1.037 15.717 1.602.531.315.703 1.006.388 1.537-.315.531-1.006.703-1.545.395z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      label: "GitHub Education",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "Notion",
      label: "Notion",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L17.76 1.597c-.42-.326-.98-.7-2.054-.607L2.919 2.016c-.466.047-.56.327-.373.514zm-.233 3.638v13.567c0 .746.42 1.026 1.213.98l14.475-.84c.793-.046.98-.56.98-1.166V6.634c0-.607-.233-.886-.793-.84l-15.08.886c-.607.047-.793.373-.793.932zm13.633.98c.093.42 0 .84-.42.887l-.7.14v9.653c-.373.187-.793.28-1.213.28-.7 0-1.12-.28-1.727-1.026l-4.9-7.788v7.927l1.493.327c.047.373-.187.793-.653.84l-3.872.233c-.093-.42 0-.84.42-.887l.933-.233V9.759l-1.306-.14c-.047-.373.187-.793.653-.84l3.966-.233 5.18 8.021V9.572l-1.306-.14c-.047-.373.187-.793.653-.84z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      label: "Figma",
      icon: (
        <svg width="20" height="26" viewBox="0 0 38 57" fill="currentColor">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
          <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
          <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
          <path d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z" />
        </svg>
      ),
    },
    {
      name: "Microsoft",
      label: "Microsoft 365",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4zM11.4 24H0V12.6h11.4V24zm12.6 0H12.6V12.6H24V24z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <HeroGeometry />
          <div className={styles.hero_container}>
            <h1 className={styles.hero_title}>
              Your Identity,{" "}
              <span className={styles.gradient_text}>Simplified.</span>
            </h1>

            <p className={styles.hero_subtitle}>
              SyncNexa builds cryptographic trust infrastructure for
              institutions, students, and businesses. Verify once. Prove
              anywhere. Without ever sharing sensitive records.
            </p>

            <div className={styles.hero_cta_group}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Get Started
                </SnButton>
              </Link>
              <Link href="#how-it-works">
                <SnButton variant="stroke" size="lg">
                  View Architecture
                </SnButton>
              </Link>
            </div>

            {/* Architectural Trust Mesh Visual (Vercel/GitHub Style) */}
            <HeroArchitectureVisual />
          </div>
        </section>

        {/* 2. Trust Bar (Infinite Auto-scrolling Logos) */}
        <section className={styles.trust_bar}>
          <div className={styles.container}>
            <p className={styles.trust_heading}>
              Trusted by forward-thinking institutions and organizations.
            </p>
          </div>

          <div className={styles.marquee_container}>
            <div className={styles.marquee_track}>
              {/* First loop of logos */}
              {logos.map((item, idx) => (
                <div key={`logo-1-${idx}`} className={styles.logo_card}>
                  <span className={styles.logo_icon}>{item.icon}</span>
                  <span className={styles.logo_name}>{item.label}</span>
                </div>
              ))}
              {/* Duplicate loop for seamless infinite marquee */}
              {logos.map((item, idx) => (
                <div key={`logo-2-${idx}`} className={styles.logo_card}>
                  <span className={styles.logo_icon}>{item.icon}</span>
                  <span className={styles.logo_name}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. The Problem Section (Vercel / GitHub-grade Engineering Breakdown) */}
        <section className={styles.problem_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge_danger}>
                THE BOTTLENECK
              </span>
              <h2 className={styles.section_title}>
                Identity verification is broken.
              </h2>
              <p className={styles.section_subtitle}>
                Legacy verification pipelines create document fatigue for
                students, security liability for universities, and heavy
                drop-off rates for businesses.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              {/* Problem 1: Students */}
              <div className={styles.tech_problem_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>FLOW // 01</span>
                  <span className={styles.card_tag_danger}>PII EXPOSURE</span>
                </div>
                <div className={styles.problem_diagram_box}>
                  <div className={styles.doc_wireframe}>
                    <div className={styles.doc_header_line}></div>
                    <div className={styles.doc_content_row}>
                      <span className={styles.doc_avatar}></span>
                      <div className={styles.doc_lines}>
                        <div className={styles.doc_line_1}></div>
                        <div className={styles.doc_line_2}></div>
                      </div>
                    </div>
                    <div className={styles.doc_warning_tag}>
                      EXPOSED TO 10+ 3RD PARTIES
                    </div>
                  </div>
                </div>
                <h3>For Students</h3>
                <p>
                  Uploading sensitive transcripts, admission letters, and
                  national IDs to dozens of third parties leaves digital
                  footprints and risks identity theft.
                </p>
              </div>

              {/* Problem 2: Schools */}
              <div className={styles.tech_problem_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>FLOW // 02</span>
                  <span className={styles.card_tag_danger}>
                    COMPLIANCE LIABILITY
                  </span>
                </div>
                <div className={styles.problem_diagram_box}>
                  <div className={styles.sis_wireframe}>
                    <div className={styles.sis_status_bar}>
                      <span className={styles.sis_dot_red}></span>
                      <span>INCOMING UNVETTED QUERIES</span>
                    </div>
                    <div className={styles.sis_metric_row}>
                      <span>MANUAL BACKLOG:</span>
                      <strong>3-5 DAYS</strong>
                    </div>
                    <div className={styles.sis_alert_box}>
                      FERPA / NDPR PRIVACY RISK
                    </div>
                  </div>
                </div>
                <h3>For Schools</h3>
                <p>
                  Handling manual verification requests strains institutional
                  registries and exposes sensitive student databases to unvetted
                  external querying.
                </p>
              </div>

              {/* Problem 3: Organizations */}
              <div className={styles.tech_problem_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>FLOW // 03</span>
                  <span className={styles.card_tag_danger}>42% DROP-OFF</span>
                </div>
                <div className={styles.problem_diagram_box}>
                  <div className={styles.funnel_wireframe}>
                    <div className={styles.funnel_bar_start}>
                      <span>Checkout Intent</span>
                      <strong>100%</strong>
                    </div>
                    <div className={styles.funnel_bar_drop}>
                      <span>Manual Verification Gate</span>
                      <strong className={styles.text_danger}>
                        -42% Abandonment
                      </strong>
                    </div>
                    <div className={styles.funnel_bar_end}>
                      <span>Completed Conversions</span>
                      <strong>58%</strong>
                    </div>
                  </div>
                </div>
                <h3>For Organizations</h3>
                <p>
                  Multi-day approval queues and invasive document requirements
                  kill checkout conversion and leave businesses vulnerable to
                  forged ID cards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Solution Section (Vercel / GitHub-grade Cryptographic Trust) */}
        <section className={styles.solution_section} id="solution">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>THE TRUST PROTOCOL</span>
              <h2 className={styles.section_title}>
                SyncNexa changes the game.
              </h2>
              <p className={styles.section_subtitle}>
                We engineered a zero-knowledge trust mesh where students own
                their keys, universities remain the single source of truth, and
                businesses verify in &lt;20ms.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              {/* Solution 1: Students */}
              <div className={styles.tech_solution_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    CLIENT // SYNCPASS
                  </span>
                  <span className={styles.card_tag_success}>
                    ZERO DOC STORAGE
                  </span>
                </div>
                <div className={styles.code_wrap_disabled}>
                  <SnCodeBlock
                    language="json"
                    filename="identity-enclave.json"
                    copyable={false}
                    code={`{
  "keypair": "Ed25519_Enclave",
  "pairwiseId": "pw_9f81a7b4",
  "sharedDocs": []
}`}
                  />
                </div>
                <h3>Decentralized SyncID</h3>
                <p>
                  Students verify enrollment once. Their credential lives
                  securely on their hardware enclave, unlocking perks everywhere
                  with one-tap consent.
                </p>
              </div>

              {/* Solution 2: Schools */}
              <div className={styles.tech_solution_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    ADAPTER // FIREWALL
                  </span>
                  <span className={styles.card_tag_success}>
                    mTLS 1.3 TUNNEL
                  </span>
                </div>
                <div className={styles.code_wrap_disabled}>
                  <SnCodeBlock
                    language="yaml"
                    filename="campus-tunnel.yaml"
                    copyable={false}
                    code={`connection: "Behind_Firewall"
dataEgress: "0_bytes_attest_only"
compliance: "100%_FERPA_NDPR"`}
                  />
                </div>
                <h3>Native SIS Connectors</h3>
                <p>
                  Institutional systems stay behind campus firewalls. The Trust
                  Adapter attests to active enrollment in real-time without
                  releasing any records.
                </p>
              </div>

              {/* Solution 3: Organizations */}
              <div className={styles.tech_solution_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    SDK // INTEGRATION
                  </span>
                  <span className={styles.card_tag_success}>
                    &lt; 20MS LATENCY
                  </span>
                </div>
                <div className={styles.code_wrap_disabled}>
                  <SnCodeBlock
                    language="typescript"
                    filename="verify-proof.ts"
                    copyable={false}
                    code={`const res = await syncnexa.verify(proof);
// { status: 200, verified: true, latency: "18ms" }`}
                  />
                </div>
                <h3>Instant Verification SDK</h3>
                <p>
                  One drop-in API or UI component. Instant student benefit
                  unlocking, zero document review overhead, and 100% elimination
                  of student fraud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How It Works Section (Connected Workflow Architecture) */}
        <section className={styles.how_it_works_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>PROTOCOL PIPELINE</span>
              <h2 className={styles.section_title}>
                Three layers. One trust protocol.
              </h2>
              <p className={styles.section_subtitle}>
                A synchronized verification loop executed across hardware
                enclaves, university registries, and edge relays.
              </p>
            </div>

            <div className={styles.pipeline_grid}>
              <div className={styles.pipeline_card}>
                <div className={styles.pipe_step_header}>
                  <span className={styles.pipe_step_num}>01</span>
                  <span className={styles.pipe_step_tag}>
                    CLIENT ENROLLMENT
                  </span>
                </div>
                <h3>Student Onboards</h3>
                <p>
                  The student installs SyncID, claims their unique SyncTag, and
                  signs an enrollment attestation using their on-device
                  cryptographic keypair.
                </p>
                <div className={styles.pipe_card_footer}>
                  <span>KEY GENERATION: Ed25519</span>
                </div>
              </div>

              <div className={styles.pipeline_card}>
                <div className={styles.pipe_step_header}>
                  <span className={styles.pipe_step_num}>02</span>
                  <span className={styles.pipe_step_tag}>ROOT ATTESTATION</span>
                </div>
                <h3>School Attests</h3>
                <p>
                  The university&apos;s campus connector verifies the student
                  status against the institutional SIS via an encrypted mTLS
                  tunnel in real time.
                </p>
                <div className={styles.pipe_card_footer}>
                  <span>ATTESTATION: ZERO-KNOWLEDGE</span>
                </div>
              </div>

              <div className={styles.pipeline_card}>
                <div className={styles.pipe_step_header}>
                  <span className={styles.pipe_step_num}>03</span>
                  <span className={styles.pipe_step_tag}>PAIRWISE PROOF</span>
                </div>
                <h3>Organization Verifies</h3>
                <p>
                  When claiming a benefit, the student presents a single-use
                  pairwise proof. The business gets an instant &quot;Active
                  Enrolled&quot; attestation.
                </p>
                <div className={styles.pipe_card_footer}>
                  <span>EXECUTION: &lt; 20MS EDGE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Product Highlight Section (SyncID Blueprint) */}
        <section className={styles.product_highlight_section}>
          <div className={styles.container}>
            <div className={styles.product_split}>
              <div className={styles.product_text_side}>
                <span className={styles.section_badge}>FLAGSHIP PRODUCT</span>
                <h2 className={styles.product_title}>
                  SyncID — Built for Students. Trusted by Everyone.
                </h2>
                <p className={styles.product_description}>
                  SyncID is the digital passport for higher education. It
                  replaces paper cards and manual uploads with an instant,
                  private cryptographic credential.
                </p>

                <div className={styles.tech_spec_list}>
                  <div className={styles.tech_spec_item}>
                    <div className={styles.spec_check}>✓</div>
                    <div>
                      <strong>Zero Document Storage</strong>
                      <p>
                        No transcripts, ID scans, or admission letters stored in
                        central databases.
                      </p>
                    </div>
                  </div>

                  <div className={styles.tech_spec_item}>
                    <div className={styles.spec_check}>✓</div>
                    <div>
                      <strong>Pairwise Pseudonyms</strong>
                      <p>
                        Unique identifier per service prevents cross-platform
                        identity correlation.
                      </p>
                    </div>
                  </div>

                  <div className={styles.tech_spec_item}>
                    <div className={styles.spec_check}>✓</div>
                    <div>
                      <strong>Instant 1-Tap Revocation</strong>
                      <p>
                        Students maintain continuous control and can sever
                        partner access anytime.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.product_cta}>
                  <Link href="/syncid">
                    <SnButton variant="primary" size="md">
                      Explore SyncID Protocol
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* SyncID Pass Blueprint Card */}
              <div className={styles.product_ui_side}>
                <div className={styles.syncid_blueprint_card}>
                  <div className={styles.blueprint_top}>
                    <div className={styles.blueprint_brand}>
                      <span className={styles.brand_symbol}>❖</span>
                      <strong>SyncID Pass</strong>
                    </div>
                    <span className={styles.blueprint_status}>
                      STATUS: ATTESTED
                    </span>
                  </div>

                  <div className={styles.blueprint_user}>
                    <div className={styles.blueprint_avatar}>OA</div>
                    <div className={styles.blueprint_meta}>
                      <h4>Okolie Anthony</h4>
                      <span className={styles.blueprint_tag}>
                        @anthony &middot; FUTO
                      </span>
                    </div>
                  </div>

                  <div className={styles.blueprint_specs_grid}>
                    <div className={styles.bp_metric}>
                      <small>PUBLIC KEY HASH</small>
                      <code>0x8f4c...3e19</code>
                    </div>
                    <div className={styles.bp_metric}>
                      <small>PAIRWISE ISOLATION</small>
                      <code>ACTIVE (ENCLAVE)</code>
                    </div>
                    <div className={styles.bp_metric}>
                      <small>VALIDITY PERIOD</small>
                      <code>2025 / 2026 SESSION</code>
                    </div>
                    <div className={styles.bp_metric}>
                      <small>SIS SYNC CHANNEL</small>
                      <code>mTLS 1.3 LIVE</code>
                    </div>
                  </div>

                  <div className={styles.blueprint_bottom}>
                    <span className={styles.bp_guarantee}>
                      🔒 Cryptographically signed by root institution
                    </span>
                    <span className={styles.bp_latency}>18ms verify</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. For Schools and Organizations (Enterprise Architecture Cards) */}
        <section className={styles.dual_audience_section}>
          <div className={styles.container}>
            <div className={styles.dual_grid}>
              {/* Schools Card */}
              <div className={styles.enterprise_card}>
                <div className={styles.ent_header}>
                  <span className={styles.section_badge}>
                    INSTITUTIONAL GATEWAY
                  </span>
                  <h2>For Schools</h2>
                </div>
                <p>
                  Protect your student data while empowering your students to
                  access global perks. Connect your existing SIS (Oracle Campus,
                  Ellucian Banner, or custom) in minutes.
                </p>

                <div className={styles.code_wrap_disabled}>
                  <SnCodeBlock
                    language="yaml"
                    filename="syncnexa-adapter.yaml"
                    copyable={false}
                    code={`adapter:
  sis_engine: "ellucian_banner"
  auth_mode: "mTLS_v1.3"
  storage_policy: "ZERO_PERSISTENCE"
  attestation_mode: "ZKP_BOOLEAN"`}
                  />
                </div>

                <div className={styles.card_cta}>
                  <Link href="/for-schools">
                    <SnButton variant="primary" size="md">
                      Partner With Us
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* Organizations Card */}
              <div className={styles.enterprise_card}>
                <div className={styles.ent_header}>
                  <span className={styles.section_badge}>
                    DEVELOPER PLATFORM
                  </span>
                  <h2>For Organizations</h2>
                </div>
                <p>
                  Eliminate 72-hour verification delays and student ID fraud.
                  Drop in our React UI component or REST API and start verifying
                  student eligibility in real-time.
                </p>

                <div className={styles.code_wrap_disabled}>
                  <SnCodeBlock
                    language="typescript"
                    filename="verify-student.ts"
                    copyable={false}
                    code={`import { SyncNexaClient } from "@syncnexa/sdk";

const client = new SyncNexaClient({ apiKey: ENV.KEY });
const result = await client.verify(pairwiseToken);
// { valid: true, institution: "FUTO", latency: "18ms" }`}
                  />
                </div>

                <div className={styles.card_cta}>
                  <Link href="/for-organizations">
                    <SnButton variant="primary" size="md">
                      Developer Docs & API
                    </SnButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Why SyncNexa (Bento Grid Architecture) */}
        <section className={styles.why_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>CAPABILITIES</span>
              <h2 className={styles.section_title}>
                Engineered for Trust at Scale
              </h2>
              <p className={styles.section_subtitle}>
                Built from the ground up for zero document retention, extreme
                low latency, and universal interoperability.
              </p>
            </div>

            <div className={styles.bento_grid_4}>
              <div className={styles.bento_card}>
                <div className={styles.bento_num}>01</div>
                <h3>Privacy by Design</h3>
                <p>
                  Zero documents or transcripts are stored in our systems.
                  Schools remain the sole source of truth.
                </p>
                <div className={styles.bento_tag}>ZERO PII</div>
              </div>

              <div className={styles.bento_card}>
                <div className={styles.bento_num}>02</div>
                <h3>~18ms Latency</h3>
                <p>
                  Real-time edge attestation eliminates multi-day queues and
                  manual review friction.
                </p>
                <div className={styles.bento_tag}>SUB-20MS</div>
              </div>

              <div className={styles.bento_card}>
                <div className={styles.bento_num}>03</div>
                <h3>Decentralized Keypairs</h3>
                <p>
                  Every student identity is anchored to an Ed25519 hardware
                  keypair with explicit consent.
                </p>
                <div className={styles.bento_tag}>ED25519</div>
              </div>

              <div className={styles.bento_card}>
                <div className={styles.bento_num}>04</div>
                <h3>Universal Interoperability</h3>
                <p>
                  One unified protocol connecting thousands of global
                  universities to millions of services.
                </p>
                <div className={styles.bento_tag}>GLOBAL MESH</div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Testimonials Section (Clean Quote Cards) */}
        <section className={styles.testimonial_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>NETWORK VOICES</span>
              <h2 className={styles.section_title}>
                What Partners & Users Say
              </h2>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.quote_card}>
                <p className={styles.quote_text}>
                  &ldquo;SyncID completely eliminated document uploads for my
                  software discounts. I verify once with my school credentials,
                  and everything just works instantly.&rdquo;
                </p>
                <div className={styles.quote_footer}>
                  <strong>Engineering Student</strong>
                  <span>Federal Univ. of Tech Owerri</span>
                </div>
              </div>

              <div className={styles.quote_card}>
                <p className={styles.quote_text}>
                  &ldquo;Our student discount checkout conversion surged by 38%
                  after replacing manual document review with the SyncNexa
                  instant verification API.&rdquo;
                </p>
                <div className={styles.quote_footer}>
                  <strong>Product Lead</strong>
                  <span>Global EdTech Platform</span>
                </div>
              </div>

              <div className={styles.quote_card}>
                <p className={styles.quote_text}>
                  &ldquo;SyncNexa solved our biggest compliance concern. We can
                  attest to student enrollment for discounts without sending our
                  database records anywhere.&rdquo;
                </p>
                <div className={styles.quote_footer}>
                  <strong>Dean of Student Affairs</strong>
                  <span>Partner University</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Call to Action Section (Vercel-style Technical Launchpad) */}
        <section className={styles.cta_section}>
          <div className={styles.cta_container}>
            <span className={styles.cta_badge}>READY TO GET STARTED?</span>
            <h2 className={styles.cta_title}>Build on the Trust Mesh.</h2>
            <p className={styles.cta_body}>
              Whether you are an accredited institution, an ambitious student,
              or a growing business—SyncNexa provides the infrastructure you
              need.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Start Integration
                </SnButton>
              </Link>
              <Link href="/contact">
                <SnButton variant="stroke" size="lg">
                  Speak with our Team
                </SnButton>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
