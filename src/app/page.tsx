import React from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import styles from "./page.module.css";

export default function Home() {
  const logos = [
    {
      name: "FUTO",
      label: "Federal Univ. of Technology Owerri",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      name: "UNILAG",
      label: "University of Lagos",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
          <div className={styles.hero_container}>
            <h1 className={styles.hero_title}>
              Your Identity, <span className={styles.gradient_text}>Simplified.</span>
            </h1>

            <p className={styles.hero_subtitle}>
              SyncNexa builds trust infrastructure for the digital world. Verify once. Prove anywhere. Without sharing more than you need to.
            </p>

            <div className={styles.hero_cta_group}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Get Started
                </SnButton>
              </Link>
              <Link href="#how-it-works">
                <SnButton variant="stroke" size="lg">
                  Learn More
                </SnButton>
              </Link>
            </div>
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

        {/* 3. The Problem Section */}
        <section className={styles.problem_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Identity verification is broken.</h2>
              <p className={styles.section_subtitle}>
                Students upload the same documents over and over again. Schools risk exposing sensitive records. Businesses lose customers because verification takes too long and feels invasive.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.pain_card}>
                <div className={styles.card_icon_wrap_danger}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>For Students</h3>
                <p>
                  You shouldn&apos;t have to send your ID card, admission letter, or transcript to every platform that offers a student discount.
                </p>
              </div>

              <div className={styles.pain_card}>
                <div className={styles.card_icon_wrap_danger}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3>For Schools</h3>
                <p>
                  Your students&apos; data should never leave your control. But verification requests keep piling up from every direction.
                </p>
              </div>

              <div className={styles.pain_card}>
                <div className={styles.card_icon_wrap_danger}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>For Organizations</h3>
                <p>
                  Every failed verification is a lost customer. Every slow approval is a missed sale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Solution Section */}
        <section className={styles.solution_section} id="solution">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>SyncNexa changes the game.</h2>
              <p className={styles.section_subtitle}>
                We built a platform where everyone wins. Students stay in control of their identity. Schools remain the single source of truth. Organizations get instant, reliable verification.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.solution_card}>
                <div className={styles.card_icon_wrap_success}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>For Students</h3>
                <p>
                  SyncID is your digital student identity. Verify once and use it everywhere—without ever uploading the same document twice.
                </p>
              </div>

              <div className={styles.solution_card}>
                <div className={styles.card_icon_wrap_success}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>For Schools</h3>
                <p>
                  Your systems stay where they are. We simply connect to them. You attest to student status. Nothing more.
                </p>
              </div>

              <div className={styles.solution_card}>
                <div className={styles.card_icon_wrap_success}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>For Organizations</h3>
                <p>
                  One API. Instant verification. No document storage. Your integration goes live in minutes, not months.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How It Works Section (Interactive Flow Diagram) */}
        <section className={styles.how_it_works_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Three layers. One trust layer.</h2>
            </div>

            <div className={styles.steps_wrapper}>
              <div className={styles.steps_grid}>
                <div className={styles.step_card}>
                  <div className={styles.step_number_badge}>1</div>
                  <div className={styles.step_content}>
                    <h3>Student Onboards</h3>
                    <p>
                      A student downloads SyncID, creates a SyncTag, and verifies their enrollment once. Their credential lives on their device.
                    </p>
                  </div>
                </div>

                <div className={styles.step_card}>
                  <div className={styles.step_number_badge}>2</div>
                  <div className={styles.step_content}>
                    <h3>School Attests</h3>
                    <p>
                      The school&apos;s system confirms the student&apos;s status in real time. No documents change hands. No data leaves the school&apos;s control.
                    </p>
                  </div>
                </div>

                <div className={styles.step_card}>
                  <div className={styles.step_number_badge}>3</div>
                  <div className={styles.step_content}>
                    <h3>Organization Verifies</h3>
                    <p>
                      A business requests verification. The student approves. The organization gets a simple answer: Yes, this is a currently enrolled student. Nothing more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Architectural Engine Visualization */}
              <div className={styles.architecture_engine}>
                <div className={styles.engine_card}>
                  <div className={styles.engine_header}>
                    <div className={styles.engine_dot_green}></div>
                    <span className={styles.engine_label}>SyncNexa Cryptographic Trust Engine</span>
                    <span className={styles.engine_status}>mTLS 1.3 Active</span>
                  </div>

                  <div className={styles.engine_nodes_flow}>
                    {/* Node 1: Student App */}
                    <div className={styles.engine_node}>
                      <div className={styles.node_icon_box}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                          <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                      </div>
                      <div className={styles.node_details}>
                        <strong>SyncID Device</strong>
                        <span>Ed25519 Keypair &middot; User Consent</span>
                      </div>
                      <div className={styles.node_tag}>Verified</div>
                    </div>

                    <div className={styles.connector_line}>
                      <span className={styles.connector_pulse}></span>
                    </div>

                    {/* Node 2: Trust Adapter */}
                    <div className={`${styles.engine_node} ${styles.engine_node_center}`}>
                      <div className={styles.node_icon_box}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div className={styles.node_details}>
                        <strong>Zero-Knowledge Attestation</strong>
                        <span>Encrypted Query &middot; Zero Document Storage</span>
                      </div>
                      <div className={styles.node_shield_badge}>Private</div>
                    </div>

                    <div className={styles.connector_line}>
                      <span className={styles.connector_pulse}></span>
                    </div>

                    {/* Node 3: School SIS */}
                    <div className={styles.engine_node}>
                      <div className={styles.node_icon_box}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <div className={styles.node_details}>
                        <strong>Institutional SIS</strong>
                        <span>Behind Firewall &middot; Source of Truth</span>
                      </div>
                      <div className={styles.node_tag_school}>Live</div>
                    </div>
                  </div>

                  <div className={styles.engine_footer_result}>
                    <span className={styles.result_key}>Verification Output:</span>
                    <span className={styles.result_value}>{`{ "status": "ACTIVE_ENROLLED", "pairwiseId": "pw_9x8f...7a" }`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Product Highlight Section (Interactive SyncID Mockup) */}
        <section className={styles.product_highlight_section}>
          <div className={styles.container}>
            <div className={styles.product_split}>
              <div className={styles.product_text_side}>
                <h2 className={styles.product_title}>SyncID — Built for Students. Trusted by Everyone.</h2>
                <p className={styles.product_description}>
                  SyncID is our first product. It&apos;s a digital student identity that puts students in control and gives organizations the confidence to offer real benefits.
                </p>

                <ul className={styles.feature_checklist}>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Verify your student status once</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Share only what&apos;s necessary</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Revoke access anytime</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Works across music, software, food, travel, and more</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Free for students</span>
                  </li>
                </ul>

                <div className={styles.product_cta}>
                  <Link href="/syncid">
                    <SnButton variant="primary" size="md">
                      Explore SyncID
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* SyncID Mobile Digital Pass Mockup */}
              <div className={styles.product_ui_side}>
                <div className={styles.syncid_pass_card}>
                  <div className={styles.pass_top}>
                    <div className={styles.pass_brand}>
                      <span className={styles.sync_symbol}>❖</span>
                      <strong>SyncID</strong>
                    </div>
                    <span className={styles.pass_live_badge}>Active Student</span>
                  </div>

                  <div className={styles.pass_user_row}>
                    <div className={styles.pass_avatar}>OA</div>
                    <div className={styles.pass_user_info}>
                      <h3>Okolie Anthony</h3>
                      <span className={styles.pass_tag}>@anthony</span>
                    </div>
                  </div>

                  <div className={styles.pass_meta_grid}>
                    <div className={styles.meta_item}>
                      <small>INSTITUTION</small>
                      <strong>Federal Univ. of Tech Owerri</strong>
                    </div>
                    <div className={styles.meta_item}>
                      <small>VALIDITY</small>
                      <strong>2025 / 2026 Academic Session</strong>
                    </div>
                    <div className={styles.meta_item}>
                      <small>PRIVACY LEVEL</small>
                      <strong>Zero-Knowledge Pairwise</strong>
                    </div>
                    <div className={styles.meta_item}>
                      <small>ATTESTATION</small>
                      <strong>SIS Real-Time Synced</strong>
                    </div>
                  </div>

                  <div className={styles.pass_action_row}>
                    <div className={styles.pass_qr_box}>
                      <div className={styles.qr_mock_grid}>
                        <div className={styles.qr_corner_tl}></div>
                        <div className={styles.qr_corner_tr}></div>
                        <div className={styles.qr_corner_bl}></div>
                        <div className={styles.qr_center_code}></div>
                      </div>
                    </div>
                    <div className={styles.pass_button_preview}>
                      <span className={styles.verify_btn_label}>Instant Verify</span>
                      <small>One-Tap Cryptographic Proof</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. For Schools and Organizations Section (Two Columns) */}
        <section className={styles.dual_audience_section}>
          <div className={styles.container}>
            <div className={styles.dual_grid}>
              <div className={styles.audience_card}>
                <div className={styles.audience_icon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h2>For Schools</h2>
                <p>
                  Partner with SyncNexa and give your students a seamless way to prove their enrollment—while keeping their data where it belongs: with you.
                </p>
                <div className={styles.card_cta}>
                  <Link href="/for-schools">
                    <SnButton variant="primary" size="md">
                      Partner With Us
                    </SnButton>
                  </Link>
                </div>
              </div>

              <div className={styles.audience_card}>
                <div className={styles.audience_icon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h2>For Organizations</h2>
                <p>
                  Stop losing customers to slow verification. Integrate SyncID and start verifying students instantly.
                </p>
                <div className={styles.card_cta}>
                  <Link href="/for-organizations">
                    <SnButton variant="primary" size="md">
                      Get Started
                    </SnButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Why SyncNexa Section */}
        <section className={styles.why_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Why SyncNexa?</h2>
            </div>

            <div className={styles.cards_grid_4}>
              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3>Privacy by Design</h3>
                <p>
                  We never store academic records. Schools remain the source of truth. Students share only what&apos;s needed.
                </p>
              </div>

              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>Real-Time Verification</h3>
                <p>
                  No more waiting hours or days. Verification happens in seconds.
                </p>
              </div>

              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                </div>
                <h3>One Identity, Everywhere</h3>
                <p>
                  A single verified identity that works across any platform that offers student benefits.
                </p>
              </div>

              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <h3>Built for Scale</h3>
                <p>
                  From one university to a thousand. From one organization to a global network. Our infrastructure grows with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Testimonial Section */}
        <section className={styles.testimonial_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>What People Are Saying</h2>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.testimonial_card}>
                <div className={styles.quote_mark}>&ldquo;</div>
                <p className={styles.testimonial_quote}>
                  SyncID changed how I claim student discounts. I set it up once and now it&apos;s just one tap. No more uploading documents every time.
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Student User</strong>
                  <span>Verified SyncID Holder</span>
                </div>
              </div>

              <div className={styles.testimonial_card}>
                <div className={styles.quote_mark}>&ldquo;</div>
                <p className={styles.testimonial_quote}>
                  Integrating SyncNexa was surprisingly easy. The API is clean, the documentation is solid, and our conversion rate went up immediately.
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Partner Organization</strong>
                  <span>Fintech & Education Platform</span>
                </div>
              </div>

              <div className={styles.testimonial_card}>
                <div className={styles.quote_mark}>&ldquo;</div>
                <p className={styles.testimonial_quote}>
                  We wanted to offer student benefits without exposing our students&apos; data. SyncNexa gave us exactly what we needed.
                </p>
                <div className={styles.testimonial_author}>
                  <strong>University Administrator</strong>
                  <span>Accredited Institution Partner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Call to Action Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_container}>
            <h2 className={styles.cta_title}>Ready to build trust?</h2>
            <p className={styles.cta_body}>
              Whether you&apos;re a student, a school, or an organization—SyncNexa has a place for you.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Get Started
                </SnButton>
              </Link>
              <Link href="/contact">
                <SnButton variant="secondary" size="lg">
                  Contact Us
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
