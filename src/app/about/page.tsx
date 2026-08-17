import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import { Check } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | SyncNexa",
  description:
    "Learn about SyncNexa's story, mission, vision, values, and the leadership team building decentralized trust infrastructure.",
};

export default function AboutPage() {
  const values = [
    {
      code: "VAL // 01",
      title: "Privacy by Default",
      desc: "We don't collect what we don't need. Zero central document storage, zero transcript retention, and zero third-party data tracking.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      blobColor: "#04d69d",
    },
    {
      code: "VAL // 02",
      title: "Cryptographic Rigor",
      desc: "Trust is not based on marketing promises. It is anchored in hardware keypairs, open cryptographic standards, and zero-knowledge proofs.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      blobColor: "#006d50",
    },
    {
      code: "VAL // 03",
      title: "Radical Simplicity",
      desc: "Identity infrastructure is complex under the hood, but the experience for students and businesses must feel effortless, instant, and humane.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      blobColor: "#ffaa01",
    },
    {
      code: "VAL // 04",
      title: "Decade-Scale Vision",
      desc: "We are not chasing short-term shortcuts. We engineer resilient, tamper-evident trust pipelines built to power digital identity for decades.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      blobColor: "#04d69d",
    },
  ];

  const leaders = [
    {
      name: "Okolie Amauchechukwu Anthony",
      role: "Founder & Chief Executive Officer",
      tag: "FOUNDER // CEO",
      bio: "Visionary systems architect leading SyncNexa's cryptographic trust framework and product engineering to make decentralized identity universally accessible.",
      initials: "OA",
      blobColor: "#04d69d",
      secondaryColor: "#006d50",
    },
    {
      name: "Anyanwu Blessing Chidinma",
      role: "Co-Founder & Chief Marketing Officer",
      tag: "CO-FOUNDER // CMO",
      bio: "Strategic growth leader driving brand positioning, ecosystem partnerships, and institutional adoption across higher education and enterprise markets.",
      initials: "AB",
      blobColor: "#ffaa01",
      secondaryColor: "#04d69d",
    },
    {
      name: "Paul Chibuikem Ukachukwu",
      role: "Co-Founder & Chief Operating Officer",
      tag: "CO-FOUNDER // COO",
      bio: "Operations specialist focused on institutional onboarding, regulatory compliance, customer experience, and cross-functional execution.",
      initials: "PC",
      blobColor: "#006d50",
      secondaryColor: "#04d69d",
    },
  ];

  const timeline = [
    {
      step: "01",
      year: "2026 Q1",
      status: "COMPLETED",
      title: "Protocol Inception & Corporate Registration",
      description:
        "SyncNexa Limited is registered in Nigeria. Core research and development of the zero-knowledge attestation engine and hardware-anchored enclave keys begin.",
    },
    {
      step: "02",
      year: "2026 Q2",
      status: "IN PROGRESS",
      title: "Campus Pilot & Institutional Connector",
      description:
        "Initial pilot deployments of the SyncID mobile passport and live mTLS SIS connectors across partner universities and student cohorts.",
    },
    {
      step: "03",
      year: "2026 Q3",
      status: "UPCOMING",
      title: "Enterprise Verification API & Merchant Network",
      description:
        "Public rollout of SyncNexa's low-latency edge verification API (<18ms) and developer platform, enabling seamless student discounts across global services.",
    },
    {
      step: "04",
      year: "2026+",
      status: "ROADMAP",
      title: "Global Multi-Institutional Trust Mesh",
      description:
        "Expanding the cryptographic verification mesh to international universities, professional licensing bodies, and cross-border credential ecosystems.",
    },
  ];

  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* 1. Hero Section */}
        <FadeInSection className={styles.hero} activeClassName={styles.is_visible}>
          <HeroGeometry />
          <div className={styles.hero_content}>
            <span className={styles.section_badge}>ABOUT SYNCNEXA</span>
            <h1 className={styles.hero_title}>
              We&apos;re building trust for the{" "}
              <span className={styles.gradient_text}>digital world.</span>
            </h1>
            <p className={styles.hero_subtitle}>
              SyncNexa exists because identity verification should be instant,
              private, and mathematically verifiable—without ever storing or
              sharing sensitive records.
            </p>

            <div className={styles.hero_cta_group}>
              <Link href="#our-story">
                <SnButton variant="primary" size="lg">
                  Read Our Story
                </SnButton>
              </Link>
              <Link href="/for-organizations">
                <SnButton variant="stroke" size="lg">
                  Explore Platform
                </SnButton>
              </Link>
            </div>
          </div>
        </FadeInSection>

        {/* 2. Our Story Section (Split Narrative + Architectural Visual) */}
        <FadeInSection
          className={styles.story_section}
          id="our-story"
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.story_split}>
              {/* Left Narrative */}
              <div className={styles.story_text_side}>
                <span className={styles.section_badge}>ORIGIN STORY</span>
                <h2 className={styles.section_title}>How SyncNexa Started</h2>
                <div className={styles.story_paragraphs}>
                  <p className={styles.story_lead}>
                    It began with a simple, persistent frustration in higher
                    education.
                  </p>
                  <p>
                    Students were being asked to prove their academic status over
                    and over again. Upload your student ID. Upload your
                    admission letter. Wait 3–5 days for manual approval. Repeat
                    for every single software tool, transit pass, and platform.
                  </p>
                  <p>
                    Universities were overwhelmed with manual verification
                    backlogs and exposed to grave data liability risks.
                    Businesses were losing over 40% of potential student
                    customers to checkout drop-offs.
                  </p>

                  <div className={styles.story_quote_card}>
                    <p>
                      &ldquo;We realized identity verification wasn&apos;t broken
                      because people lacked records—it was broken because we were
                      still treating digital identities like paper documents.&rdquo;
                    </p>
                  </div>

                  <p>
                    We engineered a fundamentally different paradigm:{" "}
                    <strong>Verify once, prove anywhere.</strong> Using
                    on-device cryptographic keypairs and real-time SIS
                    attestations, students prove their status in milliseconds
                    without ever surrendering raw documents.
                  </p>
                </div>
              </div>

              {/* Right Architectural Diagram */}
              <div>
                <GlassBlobCard
                  className={styles.story_visual_card}
                  blobColor="#04d69d"
                  secondaryBlobColor="#ffaa01"
                >
                  <div className={styles.visual_card_header}>
                    <span className={styles.visual_tag}>
                      PARADIGM // SHIFT ARCHITECTURE
                    </span>
                    <span className={styles.visual_status}>
                      ZERO-DOC TRUST
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 360 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.story_svg}
                  >
                    {/* Top: Broken Legacy Flow */}
                    <g transform="translate(15, 15)">
                      <rect
                        x="0"
                        y="0"
                        width="330"
                        height="90"
                        rx="10"
                        fill="#fef2f2"
                        stroke="#fecaca"
                        strokeWidth="1.5"
                      />
                      <text
                        x="15"
                        y="24"
                        fill="#ef4444"
                        fontSize="10"
                        fontWeight="700"
                        fontFamily="monospace"
                      >
                        LEGACY VERIFICATION (VULNERABLE & SLOW)
                      </text>

                      {/* Doc upload to 3rd party */}
                      <g transform="translate(15, 36)">
                        <rect
                          x="0"
                          y="0"
                          width="68"
                          height="40"
                          rx="6"
                          fill="#ffffff"
                          stroke="#ef4444"
                          strokeWidth="1"
                        />
                        <text
                          x="10"
                          y="18"
                          fill="#1f2937"
                          fontSize="9"
                          fontWeight="700"
                        >
                          Raw Docs
                        </text>
                        <text x="10" y="30" fill="#6b7280" fontSize="7.5">
                          Passport/ID
                        </text>
                      </g>

                      {/* Arrow */}
                      <path
                        d="M95 56 H 130"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />
                      <polygon points="130,53 136,56 130,59" fill="#ef4444" />

                      {/* Central Honeypot Server */}
                      <g transform="translate(145, 36)">
                        <rect
                          x="0"
                          y="0"
                          width="80"
                          height="40"
                          rx="6"
                          fill="#ffffff"
                          stroke="#ef4444"
                          strokeWidth="1"
                        />
                        <text
                          x="8"
                          y="18"
                          fill="#ef4444"
                          fontSize="9"
                          fontWeight="700"
                        >
                          3rd-Party DB
                        </text>
                        <text x="8" y="30" fill="#6b7280" fontSize="7.5">
                          PII Insecure
                        </text>
                      </g>

                      {/* Arrow */}
                      <path
                        d="M235 56 H 260"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />
                      <polygon points="260,53 266,56 260,59" fill="#ef4444" />

                      {/* 72h Delay */}
                      <g transform="translate(270, 36)">
                        <rect
                          x="0"
                          y="0"
                          width="48"
                          height="40"
                          rx="6"
                          fill="#ffffff"
                          stroke="#ef4444"
                          strokeWidth="1"
                        />
                        <text
                          x="6"
                          y="18"
                          fill="#ef4444"
                          fontSize="9"
                          fontWeight="800"
                        >
                          72h+
                        </text>
                        <text x="6" y="30" fill="#6b7280" fontSize="7.5">
                          Review
                        </text>
                      </g>
                    </g>

                    {/* Transition Vector Indicator */}
                    <g transform="translate(180, 122)">
                      <circle cx="0" cy="0" r="14" fill="#006d50" />
                      <path
                        d="M0 -6 L0 6 M-4 2 L0 6 L4 2"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>

                    {/* Bottom: SyncNexa ZK Trust Protocol */}
                    <g transform="translate(15, 148)">
                      <rect
                        x="0"
                        y="0"
                        width="330"
                        height="115"
                        rx="10"
                        fill="#e6faf4"
                        stroke="#04d69d"
                        strokeWidth="1.5"
                      />
                      <text
                        x="15"
                        y="22"
                        fill="#006d50"
                        fontSize="10"
                        fontWeight="800"
                        fontFamily="monospace"
                      >
                        SYNCNEXA ZERO-KNOWLEDGE TRUST MESH
                      </text>

                      {/* Hardware Enclave */}
                      <g transform="translate(15, 34)">
                        <rect
                          x="0"
                          y="0"
                          width="85"
                          height="66"
                          rx="6"
                          fill="#ffffff"
                          stroke="#006d50"
                          strokeWidth="1"
                        />
                        <text
                          x="8"
                          y="18"
                          fill="#006d50"
                          fontSize="9"
                          fontWeight="700"
                        >
                          Device Enclave
                        </text>
                        <text x="8" y="32" fill="#6b7280" fontSize="8">
                          Ed25519 Keys
                        </text>
                        <rect
                          x="8"
                          y="42"
                          width="68"
                          height="16"
                          rx="4"
                          fill="#e6faf4"
                        />
                        <text
                          x="12"
                          y="53"
                          fill="#006d50"
                          fontSize="7.5"
                          fontWeight="800"
                        >
                          Zero PII
                        </text>
                      </g>

                      {/* Connectors */}
                      <path
                        d="M108 67 H 132"
                        stroke="#04d69d"
                        strokeWidth="2"
                      />
                      <polygon points="132,64 138,67 132,70" fill="#04d69d" />

                      {/* ZK Verifier Core */}
                      <g transform="translate(142, 34)">
                        <rect
                          x="0"
                          y="0"
                          width="85"
                          height="66"
                          rx="6"
                          fill="#ffffff"
                          stroke="#04d69d"
                          strokeWidth="1.5"
                        />
                        <text
                          x="8"
                          y="18"
                          fill="#006d50"
                          fontSize="9"
                          fontWeight="800"
                        >
                          ZK Engine
                        </text>
                        <text x="8" y="32" fill="#6b7280" fontSize="8">
                          Boolean Attest
                        </text>
                        <rect
                          x="8"
                          y="42"
                          width="68"
                          height="16"
                          rx="4"
                          fill="#04d69d"
                          opacity="0.15"
                        />
                        <text
                          x="12"
                          y="53"
                          fill="#006d50"
                          fontSize="7.5"
                          fontWeight="800"
                        >
                          Math Proof
                        </text>
                      </g>

                      {/* Connectors */}
                      <path
                        d="M235 67 H 255"
                        stroke="#04d69d"
                        strokeWidth="2"
                      />
                      <polygon points="255,64 261,67 255,70" fill="#04d69d" />

                      {/* Instant Pass */}
                      <g transform="translate(265, 34)">
                        <rect
                          x="0"
                          y="0"
                          width="55"
                          height="66"
                          rx="6"
                          fill="#ffffff"
                          stroke="#006d50"
                          strokeWidth="1"
                        />
                        <text
                          x="8"
                          y="20"
                          fill="#006d50"
                          fontSize="10"
                          fontWeight="800"
                        >
                          &lt;18ms
                        </text>
                        <text x="8" y="34" fill="#6b7280" fontSize="8">
                          Verified
                        </text>
                        <text
                          x="8"
                          y="53"
                          fill="#04d69d"
                          fontSize="11"
                          fontWeight="800"
                        >
                          PASS
                        </text>
                      </g>
                    </g>
                  </svg>
                </GlassBlobCard>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 3. Mission & Vision Section (2-Column Glass Cards) */}
        <FadeInSection
          className={styles.mission_vision_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>GUIDING PRINCIPLES</span>
              <h2 className={styles.section_title}>Our Mission & Vision</h2>
              <p className={styles.section_subtitle}>
                The north stars guiding our cryptographic architecture, product
                design, and institutional partnerships.
              </p>
            </div>

            <div className={styles.mv_grid}>
              {/* Mission Card */}
              <GlassBlobCard
                className={styles.mv_card}
                blobColor="#04d69d"
                secondaryBlobColor="#006d50"
              >
                <div className={styles.mv_header}>
                  <div className={styles.mv_icon_wrap}>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="22" y1="12" x2="18" y2="12" />
                      <line x1="6" y1="12" x2="2" y2="12" />
                      <line x1="12" y1="6" x2="12" y2="2" />
                      <line x1="12" y1="22" x2="12" y2="18" />
                    </svg>
                  </div>
                  <span className={styles.mv_tag}>MISSION STATEMENT</span>
                </div>

                <h2>Our Mission</h2>
                <p className={styles.mv_statement}>
                  To make digital identity verification instant, private, and
                  human-centric.
                </p>
                <p className={styles.mv_subtext}>
                  Trust shouldn&apos;t require people to surrender sensitive
                  documents to central databases. We replace document uploads
                  with mathematical zero-knowledge proofs that protect privacy
                  by default.
                </p>

                <div className={styles.mv_bullet_list}>
                  <div className={styles.mv_bullet_item}>
                    <Check size={16} className={styles.bullet_check} />
                    <span>Zero documents stored or retained on central servers</span>
                  </div>
                  <div className={styles.mv_bullet_item}>
                    <Check size={16} className={styles.bullet_check} />
                    <span>Sub-20ms edge verification for global applications</span>
                  </div>
                  <div className={styles.mv_bullet_item}>
                    <Check size={16} className={styles.bullet_check} />
                    <span>Complete sovereign cryptographic custody for users</span>
                  </div>
                </div>
              </GlassBlobCard>

              {/* Vision Card */}
              <GlassBlobCard
                className={styles.mv_card}
                blobColor="#ffaa01"
                secondaryBlobColor="#04d69d"
              >
                <div className={styles.mv_header}>
                  <div className={styles.mv_icon_wrap_accent}>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span className={styles.mv_tag}>LONG-TERM VISION</span>
                </div>

                <h2>Our Vision</h2>
                <p className={styles.mv_statement}>
                  A world where your verified identity moves seamlessly with
                  you.
                </p>
                <p className={styles.mv_subtext}>
                  Where proving who you are is one tap away, anywhere on earth,
                  without centralized surveillance honeypots or document
                  fatigue. Starting with students, scaling to everyone.
                </p>

                <div className={styles.mv_bullet_list}>
                  <div className={styles.mv_bullet_item}>
                    <Check size={16} className={styles.bullet_check} />
                    <span>Universal federation across global universities and SIS</span>
                  </div>
                  <div className={styles.mv_bullet_item}>
                    <Check size={16} className={styles.bullet_check} />
                    <span>Pairwise pseudonymity preventing cross-site correlation</span>
                  </div>
                  <div className={styles.mv_bullet_item}>
                    <Check size={16} className={styles.bullet_check} />
                    <span>One-tap instantaneous proof of academic and professional status</span>
                  </div>
                </div>
              </GlassBlobCard>
            </div>
          </div>
        </FadeInSection>

        {/* 4. Core Values Section (4-Column Glass Cards) */}
        <FadeInSection
          className={styles.values_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>ENGINEERING ETHOS</span>
              <h2 className={styles.section_title}>What We Stand For</h2>
              <p className={styles.section_subtitle}>
                The core architectural and ethical tenets built into every layer
                of our technology.
              </p>
            </div>

            <div className={styles.values_grid}>
              {values.map((v, i) => (
                <GlassBlobCard
                  key={i}
                  className={styles.value_card}
                  blobColor={v.blobColor}
                >
                  <div className={styles.value_meta_top}>
                    <span className={styles.value_code}>{v.code}</span>
                    <div className={styles.value_icon_wrap}>{v.icon}</div>
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 5. Leadership Section (3-Column Team Cards) */}
        <FadeInSection
          className={styles.leadership_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>CORE TEAM</span>
              <h2 className={styles.section_title}>Who&apos;s Building SyncNexa</h2>
              <p className={styles.section_subtitle}>
                Engineers, growth strategists, and operations leaders dedicated
                to building decentralized trust infrastructure.
              </p>
            </div>

            <div className={styles.leadership_grid}>
              {leaders.map((leader, i) => (
                <GlassBlobCard
                  key={i}
                  className={styles.leader_card}
                  blobColor={leader.blobColor}
                  secondaryBlobColor={leader.secondaryColor}
                >
                  <div className={styles.leader_avatar_wrap}>
                    <div className={styles.avatar_circle}>
                      {leader.initials}
                    </div>
                    <div className={styles.leader_ident}>
                      <span className={styles.leader_tag}>{leader.tag}</span>
                      <h3>{leader.name}</h3>
                    </div>
                  </div>
                  <span className={styles.leader_role}>{leader.role}</span>
                  <p className={styles.leader_bio}>{leader.bio}</p>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 6. Roadmap & Milestones Section (Continuous Connecting Line) */}
        <FadeInSection
          className={styles.journey_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>MILESTONES & ROADMAP</span>
              <h2 className={styles.section_title}>The Road So Far</h2>
              <p className={styles.section_subtitle}>
                Key milestones in developing, deploying, and expanding the
                SyncNexa trust mesh.
              </p>
            </div>

            <div className={styles.timeline_wrap}>
              {/* Continuous Gradient Line */}
              <div
                className={styles.timeline_vertical_line}
                aria-hidden="true"
              />

              <div className={styles.timeline_list}>
                {timeline.map((item, i) => (
                  <div key={i} className={styles.timeline_card}>
                    <div className={styles.timeline_step_circle}>
                      <span className={styles.timeline_step_num}>
                        {item.step}
                      </span>
                    </div>

                    <GlassBlobCard
                      className={styles.timeline_body_card}
                      blobColor="#04d69d"
                    >
                      <div className={styles.timeline_body_top}>
                        <span className={styles.timeline_year_tag}>
                          {item.year}
                        </span>
                        <span className={styles.timeline_status_badge}>
                          {item.status}
                        </span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </GlassBlobCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 7. Why This Matters Section */}
        <FadeInSection
          className={styles.matters_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <GlassBlobCard
              className={styles.matters_card}
              blobColor="#006d50"
              secondaryBlobColor="#04d69d"
            >
              <div className={styles.matters_text_col}>
                <span className={styles.section_badge}>OUR CONVICTION</span>
                <h2>Why This Work Matters</h2>
                <p>
                  Every single day, millions of students, employees, and citizens
                  are required to prove their credentials. The existing system
                  relies on unencrypted document uploads, insecure database
                  exports, and slow manual approval queues.
                </p>
                <p>
                  SyncNexa replaces this fragile status quo with verifiable,
                  tamper-proof mathematics. We are starting with students because
                  they face the steepest friction—but we are architecting trust
                  infrastructure for the entire digital economy.
                </p>
                <div className={styles.matters_highlight_bar}>
                  Because identity is the foundational prerequisite of digital
                  cooperation—and it is time the foundation actually worked.
                </div>
              </div>

              <div className={styles.matters_metrics_col}>
                <div className={styles.metric_box}>
                  <div className={styles.metric_label}>
                    <span>CENTRAL DOCUMENT RETENTION</span>
                    <strong>Zero-Persistence Ingest</strong>
                  </div>
                  <span className={styles.metric_val}>0 Bytes</span>
                </div>

                <div className={styles.metric_box}>
                  <div className={styles.metric_label}>
                    <span>VERIFICATION LATENCY</span>
                    <strong>Edge Roundtrip Attestation</strong>
                  </div>
                  <span className={styles.metric_val}>&lt; 18ms</span>
                </div>

                <div className={styles.metric_box}>
                  <div className={styles.metric_label}>
                    <span>KEYPAIR CUSTODY</span>
                    <strong>Hardware Enclave Root</strong>
                  </div>
                  <span className={styles.metric_val}>100% User</span>
                </div>
              </div>
            </GlassBlobCard>
          </div>
        </FadeInSection>

        {/* 8. Call to Action Section (Vercel-style Launchpad) */}
        <FadeInSection
          className={styles.cta_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.cta_container}>
            <span className={styles.cta_badge}>JOIN THE NETWORK</span>
            <h2 className={styles.cta_title}>Build on the Trust Mesh.</h2>
            <p className={styles.cta_body}>
              Whether you are an accredited institution, an ambitious student,
              or a high-growth platform—let&apos;s build an instant, private
              future together.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Start Integration
                </SnButton>
              </Link>
              <Link href="/contact">
                <SnButton variant="stroke" size="lg">
                  Contact Our Team
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
