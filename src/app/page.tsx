import React from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import HeroArchitectureVisual from "@/components/hero/HeroArchitectureVisual";
import PipelineGeometricVisual from "@/components/illustrations/PipelineGeometricVisual";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
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
        <FadeInSection className={styles.hero} activeClassName={styles.is_visible}>
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
        </FadeInSection>

        {/* 2. Trust Bar (Infinite Auto-scrolling Logos) */}
        <FadeInSection className={styles.trust_bar} activeClassName={styles.is_visible}>
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
        </FadeInSection>

        {/* 3. The Problem Section (Vercel / GitHub-grade Engineering Breakdown) */}
        <FadeInSection className={styles.problem_section} activeClassName={styles.is_visible}>
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

            <div className={styles.problem_cards_grid}>
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

              <div className={styles.problem_divider} aria-hidden="true" />

              {/* Problem 2: Schools */}
              <div className={styles.tech_problem_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>FLOW // 02</span>
                  <span className={styles.card_tag_danger}>FERPA RISKS</span>
                </div>
                <div className={styles.problem_diagram_box}>
                  <div className={styles.sis_wireframe}>
                    <div className={styles.sis_status_bar}>
                      <span className={styles.sis_dot_red}></span>
                      <span>INSECURE EXPORT QUEUE</span>
                    </div>
                    <div className={styles.sis_metric_row}>
                      <span>Unencrypted CSVs</span>
                      <span className={styles.text_danger}>Active</span>
                    </div>
                    <div className={styles.sis_alert_box}>
                      ⚠️ MANUAL AUDIT BOTTLENECK
                    </div>
                  </div>
                </div>
                <h3>For Schools</h3>
                <p>
                  Manual registry exports and unencrypted portals create massive
                  FERPA/NDPR liability and drain campus IT and registrar
                  resources.
                </p>
              </div>

              <div className={styles.problem_divider} aria-hidden="true" />

              {/* Problem 3: Organizations */}
              <div className={styles.tech_problem_card}>
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>FLOW // 03</span>
                  <span className={styles.card_tag_danger}>CONV. DROP-OFF</span>
                </div>
                <div className={styles.problem_diagram_box}>
                  <div className={styles.funnel_wireframe}>
                    <div className={styles.funnel_bar_start}>
                      <span>Start Checkout</span>
                      <span>100%</span>
                    </div>
                    <div className={styles.funnel_bar_drop}>
                      <span>Doc Upload Friction</span>
                      <span className={styles.text_danger}>-42% DROP</span>
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
        </FadeInSection>

        {/* 4. The Solution Section (Vercel / GitHub-grade Cryptographic Trust) */}
        <FadeInSection className={styles.solution_section} id="solution" activeClassName={styles.is_visible}>
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
              <GlassBlobCard
                className={styles.tech_solution_card}
                blobColor="#04d69d"
                secondaryBlobColor="#006d50"
              >
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    CLIENT // SYNCPASS
                  </span>
                  <span className={styles.card_tag_success}>
                    ZERO DOC STORAGE
                  </span>
                </div>
                <div className={styles.solution_visual_box}>
                  <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 280 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.geo_svg}
                  >
                    {/* Left Device Node */}
                    <g transform="translate(16, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <rect
                        x="8"
                        y="12"
                        width="20"
                        height="12"
                        rx="3"
                        fill="#e6faf4"
                        stroke="#04d69d"
                        strokeWidth="1"
                      />
                      <circle cx="48" cy="18" r="4" fill="#04d69d" />
                      <text
                        x="32"
                        y="38"
                        textAnchor="middle"
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#6b7280"
                      >
                        DEVICE
                      </text>
                    </g>

                    {/* Connecting geometric dashed lines */}
                    <line
                      x1="80"
                      y1="50"
                      x2="114"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />

                    {/* Center Hardware Enclave Diamond / Shield */}
                    <g transform="translate(140, 50)">
                      <circle
                        cx="0"
                        cy="0"
                        r="28"
                        fill="#e6faf4"
                        fillOpacity="0.6"
                        stroke="#04d69d"
                        strokeWidth="1"
                      />
                      <polygon
                        points="0,-18 16,-7 16,11 0,18 -16,11 -16,-7"
                        stroke="#006d50"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <circle cx="0" cy="-2" r="3" fill="#04d69d" />
                      <path
                        d="M-1.5 0 L1.5 0 L2.5 7 L-2.5 7 Z"
                        fill="#04d69d"
                      />
                    </g>

                    {/* Right Geometric Output Node */}
                    <line
                      x1="166"
                      y1="50"
                      x2="200"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <g transform="translate(200, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <text
                        x="32"
                        y="22"
                        textAnchor="middle"
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="800"
                        fill="#006d50"
                      >
                        0-DOCS
                      </text>
                      <text
                        x="32"
                        y="37"
                        textAnchor="middle"
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#6b7280"
                      >
                        ENCLAVE
                      </text>
                    </g>
                  </svg>
                </div>
                <h3>Decentralized SyncID</h3>
                <p>
                  Students verify enrollment once. Their credential lives
                  securely on their hardware enclave, unlocking perks everywhere
                  with one-tap consent.
                </p>
              </GlassBlobCard>

              {/* Solution 2: Schools */}
              <GlassBlobCard
                className={styles.tech_solution_card}
                blobColor="#ffaa01"
                secondaryBlobColor="#04d69d"
              >
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    ADAPTER // FIREWALL
                  </span>
                  <span className={styles.card_tag_success}>
                    mTLS 1.3 TUNNEL
                  </span>
                </div>
                <div className={styles.solution_visual_box}>
                  <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 280 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.geo_svg}
                  >
                    {/* Left Campus DB Node */}
                    <g transform="translate(16, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <rect
                        x="8"
                        y="10"
                        width="48"
                        height="6"
                        rx="3"
                        fill="#fef3c7"
                        stroke="#ffaa01"
                        strokeWidth="1"
                      />
                      <rect
                        x="8"
                        y="21"
                        width="48"
                        height="6"
                        rx="3"
                        fill="#fef3c7"
                        stroke="#ffaa01"
                        strokeWidth="1"
                      />
                      <rect
                        x="8"
                        y="32"
                        width="48"
                        height="6"
                        rx="3"
                        fill="#fef3c7"
                        stroke="#ffaa01"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Firewall Barrier Vector */}
                    <line
                      x1="80"
                      y1="50"
                      x2="114"
                      y2="50"
                      stroke="#ffaa01"
                      strokeWidth="1.5"
                    />

                    {/* Center Firewall Gate / mTLS Shield */}
                    <g transform="translate(140, 50)">
                      <line
                        x1="0"
                        y1="-30"
                        x2="0"
                        y2="30"
                        stroke="#ffaa01"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        opacity="0.5"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="24"
                        fill="#fffbeb"
                        stroke="#ffaa01"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="-8"
                        y="-2"
                        width="16"
                        height="13"
                        rx="2.5"
                        fill="#ffaa01"
                      />
                      <path
                        d="M-5 -2 V-7 A5 5 0 0 1 5 -7 V-2"
                        stroke="#ffaa01"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </g>

                    {/* Right Attestation Node */}
                    <line
                      x1="164"
                      y1="50"
                      x2="200"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <g transform="translate(200, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <circle
                        cx="32"
                        cy="18"
                        r="7"
                        fill="#e6faf4"
                        stroke="#04d69d"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M29 18 L31 20 L36 15"
                        stroke="#006d50"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <text
                        x="32"
                        y="38"
                        textAnchor="middle"
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#006d50"
                      >
                        mTLS 1.3
                      </text>
                    </g>
                  </svg>
                </div>
                <h3>Native SIS Connectors</h3>
                <p>
                  Institutional systems stay behind campus firewalls. The Trust
                  Adapter attests to active enrollment in real-time without
                  releasing any records.
                </p>
              </GlassBlobCard>

              {/* Solution 3: Organizations */}
              <GlassBlobCard
                className={styles.tech_solution_card}
                blobColor="#006d50"
                secondaryBlobColor="#04d69d"
              >
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    SDK // INTEGRATION
                  </span>
                  <span className={styles.card_tag_success}>
                    &lt; 20MS LATENCY
                  </span>
                </div>
                <div className={styles.solution_visual_box}>
                  <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 280 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.geo_svg}
                  >
                    {/* Left API Request Node */}
                    <g transform="translate(16, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <text
                        x="32"
                        y="21"
                        textAnchor="middle"
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#6b7280"
                      >
                        POST /req
                      </text>
                      <rect
                        x="12"
                        y="28"
                        width="40"
                        height="5"
                        rx="2"
                        fill="#e2e8f0"
                      />
                    </g>

                    {/* Lightning Vector / Fast Track */}
                    <line
                      x1="80"
                      y1="50"
                      x2="114"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />

                    {/* Center Circuit Processor Node */}
                    <g transform="translate(140, 50)">
                      <polygon
                        points="0,-24 22,-12 22,12 0,24 -22,12 -22,-12"
                        fill="#e6faf4"
                        stroke="#04d69d"
                        strokeWidth="1.5"
                      />
                      <circle cx="0" cy="0" r="10" fill="#006d50" />
                      <path
                        d="M-4 0 L-1 3 L4 -3"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>

                    {/* Speed Telemetry Vector */}
                    <line
                      x1="162"
                      y1="50"
                      x2="200"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                    />

                    {/* Right Verified Response Node */}
                    <g transform="translate(200, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="#04d69d"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <text
                        x="32"
                        y="21"
                        textAnchor="middle"
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight="800"
                        fill="#006d50"
                      >
                        18ms
                      </text>
                      <rect
                        x="12"
                        y="27"
                        width="40"
                        height="12"
                        rx="3"
                        fill="#e6faf4"
                      />
                      <text
                        x="32"
                        y="36"
                        textAnchor="middle"
                        fontSize="7"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#006d50"
                      >
                        VERIFIED
                      </text>
                    </g>
                  </svg>
                </div>
                <h3>Instant Verification SDK</h3>
                <p>
                  One drop-in API or UI component. Instant student benefit
                  unlocking, zero document review overhead, and 100% elimination
                  of student fraud.
                </p>
              </GlassBlobCard>
            </div>
          </div>
        </FadeInSection>

        {/* 5. How It Works Section (Connected Workflow Architecture) */}
        <FadeInSection className={styles.how_it_works_section} id="how-it-works" activeClassName={styles.is_visible}>
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

            <div className={styles.pipeline_split}>
              {/* Left Side: Vertically Stacked Steps with Continuous Connecting Line */}
              <div className={styles.pipeline_timeline_wrap}>
                {/* 2px Continuous Animated Gradient Line */}
                <div
                  className={styles.pipeline_vertical_line}
                  aria-hidden="true"
                />

                <div className={styles.pipeline_list}>
                  <div className={styles.pipeline_card}>
                    <div className={styles.pipe_step_circle}>
                      <span className={styles.pipe_step_num}>01</span>
                    </div>
                    <div className={styles.pipe_step_body}>
                      <h3>Student Onboards</h3>
                      <p>
                        The student installs SyncID, claims their unique
                        SyncTag, and signs an enrollment attestation using their
                        on-device cryptographic keypair.
                      </p>
                    </div>
                  </div>

                  <div className={styles.pipeline_card}>
                    <div className={styles.pipe_step_circle}>
                      <span className={styles.pipe_step_num}>02</span>
                    </div>
                    <div className={styles.pipe_step_body}>
                      <h3>School Attests</h3>
                      <p>
                        The university&apos;s campus connector verifies the
                        student status against the institutional SIS via an
                        encrypted mTLS tunnel in real time.
                      </p>
                    </div>
                  </div>

                  <div className={styles.pipeline_card}>
                    <div className={styles.pipe_step_circle}>
                      <span className={styles.pipe_step_num}>03</span>
                    </div>
                    <div className={styles.pipe_step_body}>
                      <h3>Organization Verifies</h3>
                      <p>
                        When claiming a benefit, the student presents a
                        single-use pairwise proof. The business gets an instant
                        &quot;Active Enrolled&quot; attestation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Geometric Protocol Visual */}
              <div className={styles.pipeline_visual_side}>
                <PipelineGeometricVisual />
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 6. Product Highlight Section (SyncID Blueprint) */}
        <FadeInSection className={styles.product_highlight_section} activeClassName={styles.is_visible}>
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
                <GlassBlobCard
                  className={styles.syncid_blueprint_card}
                  blobColor="#04d69d"
                  secondaryBlobColor="#ffaa01"
                >
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
                </GlassBlobCard>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 7. For Schools and Organizations (Enterprise Architecture Cards) */}
        <FadeInSection className={styles.dual_audience_section} activeClassName={styles.is_visible}>
          <div className={styles.container}>
            <div className={styles.dual_grid}>
              {/* Schools Card */}
              <GlassBlobCard
                className={styles.enterprise_card}
                blobColor="#006d50"
                secondaryBlobColor="#04d69d"
              >
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

                <div className={styles.solution_visual_box}>
                  <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 320 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.geo_svg}
                  >
                    {/* Campus SIS Database Stack */}
                    <g transform="translate(16, 22)">
                      <rect
                        x="0"
                        y="0"
                        width="76"
                        height="56"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <rect
                        x="8"
                        y="10"
                        width="60"
                        height="7"
                        rx="3.5"
                        fill="#e6faf4"
                        stroke="#006d50"
                        strokeWidth="1"
                      />
                      <rect
                        x="8"
                        y="23"
                        width="60"
                        height="7"
                        rx="3.5"
                        fill="#e6faf4"
                        stroke="#006d50"
                        strokeWidth="1"
                      />
                      <rect
                        x="8"
                        y="36"
                        width="60"
                        height="7"
                        rx="3.5"
                        fill="#e6faf4"
                        stroke="#006d50"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Encrypted Tunnel Conduits */}
                    <line
                      x1="92"
                      y1="50"
                      x2="128"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />

                    {/* Center Zero-Persistence Adapter Gateway */}
                    <g transform="translate(160, 50)">
                      <circle
                        cx="0"
                        cy="0"
                        r="26"
                        fill="#e6faf4"
                        stroke="#006d50"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="0,-16 14,-6 14,10 0,16 -14,10 -14,-6"
                        fill="#006d50"
                      />
                      {/* Key / lock emblem */}
                      <circle cx="0" cy="0" r="3" fill="#ffffff" />
                      <path d="M-1 2 L1 2 L2 7 L-2 7 Z" fill="#ffffff" />
                    </g>

                    {/* Output Attestation Path */}
                    <line
                      x1="192"
                      y1="50"
                      x2="228"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />

                    {/* Right Verified Trust Root Node */}
                    <g transform="translate(228, 22)">
                      <rect
                        x="0"
                        y="0"
                        width="76"
                        height="56"
                        rx="8"
                        stroke="#04d69d"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <text
                        x="38"
                        y="23"
                        textAnchor="middle"
                        fontSize="8.5"
                        fontFamily="monospace"
                        fontWeight="800"
                        fill="#006d50"
                      >
                        0-PERSIST
                      </text>
                      <rect
                        x="10"
                        y="30"
                        width="56"
                        height="15"
                        rx="4"
                        fill="#e6faf4"
                      />
                      <text
                        x="38"
                        y="41"
                        textAnchor="middle"
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#006d50"
                      >
                        ZKP BOOLEAN
                      </text>
                    </g>
                  </svg>
                </div>

                <div className={styles.card_cta}>
                  <Link href="/for-schools">
                    <SnButton variant="primary" size="md">
                      Partner With Us
                    </SnButton>
                  </Link>
                </div>
              </GlassBlobCard>

              {/* Organizations Card */}
              <GlassBlobCard
                className={styles.enterprise_card}
                blobColor="#ffaa01"
                secondaryBlobColor="#04d69d"
              >
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

                <div className={styles.solution_visual_box}>
                  <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 320 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.geo_svg}
                  >
                    {/* Left Checkout Portal / API Client */}
                    <g transform="translate(16, 22)">
                      <rect
                        x="0"
                        y="0"
                        width="76"
                        height="56"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <rect
                        x="10"
                        y="12"
                        width="56"
                        height="12"
                        rx="3"
                        fill="#fef3c7"
                      />
                      <text
                        x="38"
                        y="21"
                        textAnchor="middle"
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="800"
                        fill="#b45309"
                      >
                        SYNCID PROOF
                      </text>
                      <text
                        x="38"
                        y="42"
                        textAnchor="middle"
                        fontSize="7"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#6b7280"
                      >
                        CLIENT API
                      </text>
                    </g>

                    {/* High-speed Relay Vector */}
                    <line
                      x1="92"
                      y1="50"
                      x2="128"
                      y2="50"
                      stroke="#ffaa01"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />

                    {/* Center High-Speed Verifier Ring */}
                    <g transform="translate(160, 50)">
                      <polygon
                        points="0,-26 24,-13 24,13 0,26 -24,13 -24,-13"
                        fill="#fffbeb"
                        stroke="#ffaa01"
                        strokeWidth="1.5"
                      />
                      <circle cx="0" cy="0" r="11" fill="#ffaa01" />
                      <path
                        d="M-5 0 L-1 4 L5 -3"
                        stroke="#ffffff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>

                    {/* Instant Telemetry Vector */}
                    <line
                      x1="192"
                      y1="50"
                      x2="228"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                    />

                    {/* Right Verified Benefit Unlock Node */}
                    <g transform="translate(228, 22)">
                      <rect
                        x="0"
                        y="0"
                        width="76"
                        height="56"
                        rx="8"
                        stroke="#04d69d"
                        strokeWidth="1.5"
                        fill="#ffffff"
                      />
                      <text
                        x="38"
                        y="22"
                        textAnchor="middle"
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="800"
                        fill="#006d50"
                      >
                        18ms
                      </text>
                      <rect
                        x="10"
                        y="29"
                        width="56"
                        height="17"
                        rx="4"
                        fill="#e6faf4"
                      />
                      <text
                        x="38"
                        y="41"
                        textAnchor="middle"
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="800"
                        fill="#006d50"
                      >
                        VERIFIED PASS
                      </text>
                    </g>
                  </svg>
                </div>

                <div className={styles.card_cta}>
                  <Link href="/for-organizations">
                    <SnButton variant="primary" size="md">
                      Developer Docs & API
                    </SnButton>
                  </Link>
                </div>
              </GlassBlobCard>
            </div>
          </div>
        </FadeInSection>

        {/* 8. Why SyncNexa (High-Tech Capabilities Matrix) */}
        <FadeInSection className={styles.why_section} activeClassName={styles.is_visible}>
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

            <div className={styles.cap_matrix_grid}>
              {/* Feature 1: Privacy by Design / Zero Document Retention */}
              <GlassBlobCard
                className={styles.cap_card}
                blobColor="#04d69d"
                secondaryBlobColor="#006d50"
              >
                <div className={styles.cap_header}>
                  <div className={styles.cap_meta_top}>
                    <span className={styles.cap_code_label}>CAP // 01</span>
                    <span className={styles.cap_tag_green}>
                      ZERO PII RETAINED
                    </span>
                  </div>
                  <h3>Privacy by Design</h3>
                  <p>
                    Zero documents or transcripts are stored in our systems.
                    Universities remain the sole source of truth while SyncNexa
                    delivers cryptographic proofs.
                  </p>
                </div>

                <div className={styles.cap_visual_box}>
                  <div className={styles.zk_visual_layout}>
                    <div className={styles.zk_data_row}>
                      <div className={styles.zk_data_source}>
                        <span className={styles.zk_label}>RAW INGESTION</span>
                        <div className={styles.zk_doc_pill}>
                          <span className={styles.zk_doc_icon}>📄</span>
                          <span>Transcript.pdf</span>
                        </div>
                        <span className={styles.zk_status_red}>
                          🚫 ZERO PERSISTENCE
                        </span>
                      </div>
                      <div className={styles.zk_arrow}>➔</div>
                      <div className={styles.zk_data_proof}>
                        <span className={styles.zk_label}>
                          CRYPTOGRAPHIC PROOF
                        </span>
                        <div className={styles.zk_proof_code}>
                          <code>{`attestation: "ENROLLED"`}</code>
                          <code>{`pii_egress: 0_bytes`}</code>
                        </div>
                        <span className={styles.zk_status_green}>
                          ✓ 100% FERPA/NDPR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassBlobCard>

              {/* Feature 2: ~18ms Latency Edge Verification */}
              <GlassBlobCard
                className={styles.cap_card}
                blobColor="#ffaa01"
                secondaryBlobColor="#ef4444"
              >
                <div className={styles.cap_header}>
                  <div className={styles.cap_meta_top}>
                    <span className={styles.cap_code_label}>CAP // 02</span>
                    <span className={styles.cap_tag_green}>
                      SUB-20MS ROUNDTRIP
                    </span>
                  </div>
                  <h3>~18ms Latency</h3>
                  <p>
                    Real-time edge attestation eliminates 72-hour queues and
                    manual document review friction for instant checkout
                    verification.
                  </p>
                </div>

                <div className={styles.cap_visual_box}>
                  <div className={styles.latency_visual_layout}>
                    <div className={styles.latency_header_row}>
                      <span>BENCHMARK EXECUTION</span>
                      <strong className={styles.latency_total}>~18.2ms</strong>
                    </div>
                    <div className={styles.latency_bars_stack}>
                      <div className={styles.lat_bar_row}>
                        <span className={styles.lat_step_name}>
                          Edge Ingest
                        </span>
                        <div className={styles.lat_progress_track}>
                          <div className={styles.lat_bar_fill_1} />
                        </div>
                        <span className={styles.lat_time}>2.4ms</span>
                      </div>
                      <div className={styles.lat_bar_row}>
                        <span className={styles.lat_step_name}>
                          mTLS Handshake
                        </span>
                        <div className={styles.lat_progress_track}>
                          <div className={styles.lat_bar_fill_2} />
                        </div>
                        <span className={styles.lat_time}>12.1ms</span>
                      </div>
                      <div className={styles.lat_bar_row}>
                        <span className={styles.lat_step_name}>
                          ZK Token Proof
                        </span>
                        <div className={styles.lat_progress_track}>
                          <div className={styles.lat_bar_fill_3} />
                        </div>
                        <span className={styles.lat_time}>3.7ms</span>
                      </div>
                    </div>
                    <div className={styles.lat_footer_tag}>
                      <span>vs Legacy Review: 72+ Hours</span>
                      <span className={styles.lat_multiplier}>
                        99.9% Faster
                      </span>
                    </div>
                  </div>
                </div>
              </GlassBlobCard>

              {/* Feature 3: Decentralized Keypairs */}
              <GlassBlobCard
                className={styles.cap_card}
                blobColor="#006d50"
                secondaryBlobColor="#04d69d"
              >
                <div className={styles.cap_header}>
                  <div className={styles.cap_meta_top}>
                    <span className={styles.cap_code_label}>CAP // 03</span>
                    <span className={styles.cap_tag_green}>
                      ENCLAVE SECURITY
                    </span>
                  </div>
                  <h3>Hardware-Anchored Keypairs</h3>
                  <p>
                    Every student identity is anchored to an Ed25519 hardware
                    keypair with on-device consent, preventing impersonation and
                    replay attacks.
                  </p>
                </div>

                <div className={styles.cap_visual_box}>
                  <div className={styles.keypair_visual_layout}>
                    <div className={styles.key_chip_header}>
                      <div className={styles.chip_icon_badge}>⚡</div>
                      <div>
                        <strong>Secure Enclave (Curve25519)</strong>
                        <small>Hardware-Backed Root of Trust</small>
                      </div>
                    </div>
                    <div className={styles.key_specs_grid}>
                      <div className={styles.key_metric}>
                        <span>ALGORITHM</span>
                        <code>Ed25519-SHA512</code>
                      </div>
                      <div className={styles.key_metric}>
                        <span>CUSTODY</span>
                        <code>Non-Exportable</code>
                      </div>
                      <div className={styles.key_metric}>
                        <span>CONSENT</span>
                        <code>Biometric / Sign</code>
                      </div>
                      <div className={styles.key_metric}>
                        <span>ENTROPY</span>
                        <code>Hardware RNG</code>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassBlobCard>

              {/* Feature 4: Universal Interoperability */}
              <GlassBlobCard
                className={styles.cap_card}
                blobColor="#04d69d"
                secondaryBlobColor="#ffaa01"
              >
                <div className={styles.cap_header}>
                  <div className={styles.cap_meta_top}>
                    <span className={styles.cap_code_label}>CAP // 04</span>
                    <span className={styles.cap_tag_green}>
                      GLOBAL TRUST MESH
                    </span>
                  </div>
                  <h3>Universal Interoperability</h3>
                  <p>
                    One unified protocol connecting thousands of global higher
                    education institutions to millions of developer apps and
                    enterprise services.
                  </p>
                </div>

                <div className={styles.cap_visual_box}>
                  <div className={styles.mesh_visual_layout}>
                    <div className={styles.mesh_nodes_row}>
                      <div className={styles.mesh_node_box}>
                        <span>INSTITUTIONS</span>
                        <strong>Banner &middot; Oracle &middot; SIS</strong>
                      </div>
                      <div className={styles.mesh_hub_badge}>
                        <span>mTLS 1.3</span>
                        <strong>SYNCNEXA</strong>
                      </div>
                      <div className={styles.mesh_node_box}>
                        <span>RELYING APPS</span>
                        <strong>Spotify &middot; Figma &middot; GitHub</strong>
                      </div>
                    </div>
                    <div className={styles.mesh_footer_line}>
                      <span className={styles.mesh_dot_live} />
                      <span>Standardized Zero-Knowledge Verification Mesh</span>
                    </div>
                  </div>
                </div>
              </GlassBlobCard>
            </div>
          </div>
        </FadeInSection>

        {/* 9. Testimonials Section (Clean Quote Cards) */}
        <FadeInSection className={styles.testimonial_section} activeClassName={styles.is_visible}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>NETWORK VOICES</span>
              <h2 className={styles.section_title}>
                What Partners & Users Say
              </h2>
            </div>

            <div className={styles.cards_grid_3}>
              <GlassBlobCard
                className={styles.quote_card}
                blobColor="#04d69d"
              >
                <p className={styles.quote_text}>
                  &ldquo;SyncID completely eliminated document uploads for my
                  software discounts. I verify once with my school credentials,
                  and everything just works instantly.&rdquo;
                </p>
                <div className={styles.quote_footer}>
                  <strong>Engineering Student</strong>
                  <span>Federal Univ. of Tech Owerri</span>
                </div>
              </GlassBlobCard>

              <GlassBlobCard
                className={styles.quote_card}
                blobColor="#ffaa01"
              >
                <p className={styles.quote_text}>
                  &ldquo;Our student discount checkout conversion surged by 38%
                  after replacing manual document review with the SyncNexa
                  instant verification API.&rdquo;
                </p>
                <div className={styles.quote_footer}>
                  <strong>Product Lead</strong>
                  <span>Global EdTech Platform</span>
                </div>
              </GlassBlobCard>

              <GlassBlobCard
                className={styles.quote_card}
                blobColor="#006d50"
              >
                <p className={styles.quote_text}>
                  &ldquo;SyncNexa solved our biggest compliance concern. We can
                  attest to student enrollment for discounts without sending our
                  database records anywhere.&rdquo;
                </p>
                <div className={styles.quote_footer}>
                  <strong>Dean of Student Affairs</strong>
                  <span>Partner University</span>
                </div>
              </GlassBlobCard>
            </div>
          </div>
        </FadeInSection>

        {/* 10. Call to Action Section (Vercel-style Technical Launchpad) */}
        <FadeInSection className={styles.cta_section} activeClassName={styles.is_visible}>
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
        </FadeInSection>
      </main>

      <Footer />
    </div>
  );
}
