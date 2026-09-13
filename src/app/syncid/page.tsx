"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import {
  Music,
  Code2,
  Utensils,
  Plane,
  ShoppingBag,
  Landmark,
  Zap,
  ShieldCheck,
  Tag,
} from "lucide-react";
import styles from "./page.module.css";

export default function SyncIdPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      number: "01",
      title: "Download the App",
      desc: "Install SyncID from the App Store or Google Play. Create your cryptographic keypair in under a minute directly inside your device's Secure Enclave.",
    },
    {
      number: "02",
      title: "Connect Your School",
      desc: "Authenticate with your institution through our zero-persistence SIS adapter. Your university signs your attestation—no documents ever uploaded.",
    },
    {
      number: "03",
      title: "Claim Your SyncTag",
      desc: "Receive your unique digital student identifier (@handle). It lives securely on your device and remains valid as long as you are actively enrolled.",
    },
    {
      number: "04",
      title: "Verify Anywhere in 1 Tap",
      desc: "When a service asks for student verification, present a single-use pairwise proof. Instant sub-20ms verified pass with zero PII shared.",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "One-Tap Verification",
      desc: "No more filling out repetitive forms, scanning ID cards, or waiting 3–5 days for manual approval emails. Verify in milliseconds.",
      blobColor: "#04d69d",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Zero Document Storage",
      desc: "SyncID only shares your verified active enrollment status—never your transcripts, grades, or personal documents.",
      blobColor: "#006d50",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Hardware Enclave Custody",
      desc: "Your cryptographic keys are anchored to Curve25519 hardware security, preventing impersonation, phishing, and replay attacks.",
      blobColor: "#ffaa01",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      ),
      title: "Instant 1-Tap Revocation",
      desc: "Changed your mind? Revoke authorization from any partner platform instantly directly from your SyncID control center.",
      blobColor: "#04d69d",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Pairwise Isolation",
      desc: "Each service receives a distinct pseudonymous proof, mathematically preventing third-party data brokers from tracking you across apps.",
      blobColor: "#006d50",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      title: "Always Free for Students",
      desc: "SyncID is 100% free to download and use. No subscriptions, hidden transaction fees, or monetization of student data—ever.",
      blobColor: "#ffaa01",
    },
  ];

  const benefits = [
    {
      icon: <Music size={22} />,
      title: "Streaming & Entertainment",
      desc: "Spotify, Apple Music, YouTube Premium, and more—at verified student discount rates.",
      blobColor: "#04d69d",
    },
    {
      icon: <Code2 size={22} />,
      title: "Software & Developer Tools",
      desc: "GitHub Student Developer Pack, Notion, Figma, JetBrains, Microsoft 365, and Adobe Creative Cloud.",
      blobColor: "#006d50",
    },
    {
      icon: <Utensils size={22} />,
      title: "Food & Campus Dining",
      desc: "Exclusive student perks on meal subscriptions, on-campus food delivery, and local restaurants.",
      blobColor: "#ffaa01",
    },
    {
      icon: <Plane size={22} />,
      title: "Transit & Travel",
      desc: "Discounted urban transit passes, inter-city bus systems, and international flight concessions.",
      blobColor: "#04d69d",
    },
    {
      icon: <ShoppingBag size={22} />,
      title: "Hardware & Retail",
      desc: "Apple Education Pricing, Samsung Student Concessions, Nike, and global electronics stores.",
      blobColor: "#006d50",
    },
    {
      icon: <Landmark size={22} />,
      title: "Banking & EdTech Services",
      desc: "Zero-fee student banking accounts, international payment cards, and research publication access.",
      blobColor: "#ffaa01",
    },
  ];

  const faqs = [
    {
      q: "Is SyncID really 100% free for students?",
      a: "Yes, completely free. We will never charge students to create an account, verify enrollment status, or claim partner discounts.",
    },
    {
      q: "What if my university or college isn't listed yet?",
      a: "You can request your school from within the app. Our institutional partnerships team connects new university SIS registries weekly.",
    },
    {
      q: "What data does SyncID store on central servers?",
      a: "Only your basic public handle (SyncTag), your device public key, and your cryptographic active status boolean. We never store transcripts, grades, or ID card photographs.",
    },
    {
      q: "What happens when I graduate?",
      a: "When your enrollment status changes in your university's SIS, your SyncID reflects your alumnus status. You keep your digital passport for verified alumni programs.",
    },
    {
      q: "Can I use SyncID if I attend a polytechnic or college?",
      a: "Yes. SyncID supports accredited universities, polytechnics, colleges of education, and verified vocational institutions.",
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
            <span className={styles.section_badge}>FLAGSHIP APP</span>
            <h1 className={styles.hero_title}>
              Your student identity. <br />
              <span className={styles.gradient_text}>One tap away.</span>
            </h1>

            <p className={styles.hero_subtitle}>
              SyncID is the private digital student passport that proves your
              enrollment status instantly—without ever uploading documents or
              exposing sensitive records.
            </p>

            <div className={styles.hero_cta_group}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Get SyncID Free
                </SnButton>
              </Link>
              <Link href="#how-it-works">
                <SnButton variant="stroke" size="lg">
                  See How It Works
                </SnButton>
              </Link>
            </div>
          </div>
        </FadeInSection>

        {/* 2. What Is SyncID Section (The Paradigm Shift) */}
        <FadeInSection
          className={styles.what_section}
          id="paradigm-shift"
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>THE PARADIGM SHIFT</span>
              <h2 className={styles.section_title}>What is SyncID?</h2>
              <p className={styles.section_subtitle}>
                SyncID is a sovereign mobile digital identity that replaces
                document uploads, manual review queues, and invasive tracking
                with instant zero-knowledge cryptographic proof.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              {/* Pillar 1: Zero Document Storage */}
              <GlassBlobCard
                className={styles.tech_solution_card}
                blobColor="#04d69d"
                secondaryBlobColor="#006d50"
              >
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    CLIENT // SECURE ENCLAVE
                  </span>
                  <span className={styles.card_tag_success}>
                    0 DOCS STORED
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
                      />
                      <rect
                        x="8"
                        y="12"
                        width="20"
                        height="12"
                        rx="3"
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

                    {/* Connecting dashed lines */}
                    <line
                      x1="80"
                      y1="50"
                      x2="114"
                      y2="50"
                      stroke="#04d69d"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />

                    {/* Center Hardware Enclave Shield */}
                    <g transform="translate(140, 50)">
                      <circle
                        cx="0"
                        cy="0"
                        r="28"
                        fillOpacity="0.3"
                        stroke="#04d69d"
                        strokeWidth="1"
                      />
                      <polygon
                        points="0,-18 16,-7 16,11 0,18 -16,11 -16,-7"
                        stroke="#006d50"
                        strokeWidth="1.5"
                      />
                      <circle cx="0" cy="-2" r="3" fill="#04d69d" />
                      <path
                        d="M-1.5 0 L1.5 0 L2.5 7 L-2.5 7 Z"
                        fill="#04d69d"
                      />
                    </g>

                    {/* Right 0-Docs Node */}
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
                <h3>Zero Document Storage</h3>
                <p>
                  Never upload photos of physical IDs, transcripts, or sensitive files. Your cryptographic student credentials live strictly inside your device&apos;s Secure Enclave.
                </p>
              </GlassBlobCard>

              {/* Pillar 2: Instant 1-Tap Verification */}
              <GlassBlobCard
                className={styles.tech_solution_card}
                blobColor="#ffaa01"
                secondaryBlobColor="#04d69d"
              >
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    PROTOCOL // REAL-TIME
                  </span>
                  <span className={styles.card_tag_success}>
                    &lt; 18MS PASS
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
                    {/* Left Tap Node */}
                    <g transform="translate(16, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="32"
                        cy="18"
                        r="8"
                        stroke="#ffaa01"
                        strokeWidth="1.2"
                      />
                      <circle cx="32" cy="18" r="3" fill="#ffaa01" />
                      <text
                        x="32"
                        y="38"
                        textAnchor="middle"
                        fontSize="7"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#6b7280"
                      >
                        1-TAP CONSENT
                      </text>
                    </g>

                    {/* Connecting vector */}
                    <line
                      x1="80"
                      y1="50"
                      x2="114"
                      y2="50"
                      stroke="#ffaa01"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />

                    {/* Center ZK Proof Pulse */}
                    <g transform="translate(140, 50)">
                      <circle
                        cx="0"
                        cy="0"
                        r="24"
                        stroke="#ffaa01"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="0,-12 12,0 0,12 -12,0"
                        stroke="#04d69d"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="0" cy="0" r="2.5" fill="#ffaa01" />
                    </g>

                    {/* Right Sub-20ms Verified Node */}
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
                      />
                      <circle
                        cx="32"
                        cy="18"
                        r="7"
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
                        &lt; 18ms PASS
                      </text>
                    </g>
                  </svg>
                </div>
                <h3>Instant 1-Tap Verification</h3>
                <p>
                  No more 3–5 day manual review backlogs, spammy confirmation emails, or tedious form inputs. Present a mathematical attestation in sub-20ms.
                </p>
              </GlassBlobCard>

              {/* Pillar 3: Pairwise Privacy & No Tracking */}
              <GlassBlobCard
                className={styles.tech_solution_card}
                blobColor="#006d50"
                secondaryBlobColor="#04d69d"
              >
                <div className={styles.card_meta_header}>
                  <span className={styles.card_code_label}>
                    PRIVACY // PAIRWISE
                  </span>
                  <span className={styles.card_tag_success}>
                    ZERO TRACKING
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
                    {/* Left SyncID Node */}
                    <g transform="translate(16, 26)">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="48"
                        rx="8"
                        stroke="var(--stroke, #e5e7eb)"
                        strokeWidth="1.5"
                      />
                      <text
                        x="32"
                        y="21"
                        textAnchor="middle"
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="800"
                        fill="#006d50"
                      >
                        PAIRWISE
                      </text>
                      <text
                        x="32"
                        y="36"
                        textAnchor="middle"
                        fontSize="7"
                        fontFamily="monospace"
                        fontWeight="600"
                        fill="#6b7280"
                      >
                        ISOLATION
                      </text>
                    </g>

                    {/* Connecting line */}
                    <line
                      x1="80"
                      y1="50"
                      x2="114"
                      y2="50"
                      stroke="#006d50"
                      strokeWidth="1.5"
                    />

                    {/* Center Zero Knowledge Gate */}
                    <g transform="translate(140, 50)">
                      <circle
                        cx="0"
                        cy="0"
                        r="24"
                        stroke="#006d50"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M-8 -6 L8 6 M-8 6 L8 -6"
                        stroke="#04d69d"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="0" cy="0" r="3" fill="#006d50" />
                    </g>

                    {/* Right App Isolated Output */}
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
                      />
                      <circle
                        cx="32"
                        cy="18"
                        r="8"
                        stroke="#04d69d"
                        strokeWidth="1"
                      />
                      <circle cx="32" cy="18" r="3" fill="#04d69d" />
                      <text
                        x="32"
                        y="38"
                        textAnchor="middle"
                        fontSize="7"
                        fontFamily="monospace"
                        fontWeight="700"
                        fill="#04d69d"
                      >
                        0-CORRELATION
                      </text>
                    </g>
                  </svg>
                </div>
                <h3>Pairwise Privacy &amp; No Tracking</h3>
                <p>
                  Each merchant and platform receives a unique pseudonymous proof. Third-party data brokers cannot link your activity or monetize your student identity.
                </p>
              </GlassBlobCard>
            </div>
          </div>
        </FadeInSection>

        {/* 3. How SyncID Works Section (Continuous Connecting Line) */}
        <FadeInSection
          className={styles.how_section}
          id="how-it-works"
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>SEAMLESS ONBOARDING</span>
              <h2 className={styles.section_title}>
                Set up once. Prove everywhere.
              </h2>
              <p className={styles.section_subtitle}>
                Four effortless steps to permanent, sovereign student
                verification.
              </p>
            </div>

            <div className={styles.how_timeline_wrap}>
              <div className={styles.how_vertical_line} aria-hidden="true" />

              <div className={styles.how_steps_list}>
                {steps.map((step, idx) => (
                  <div key={idx} className={styles.how_step_item}>
                    <div className={styles.how_step_circle}>
                      <span className={styles.how_step_num}>{step.number}</span>
                    </div>

                    <GlassBlobCard
                      className={styles.how_body_card}
                      blobColor="#04d69d"
                    >
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </GlassBlobCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 4. Features Section (6-Card Grid) */}
        <FadeInSection
          className={styles.features_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>CORE ADVANTAGES</span>
              <h2 className={styles.section_title}>Built for Your Student Life</h2>
              <p className={styles.section_subtitle}>
                Engineered with cryptographic privacy, maximum speed, and
                zero compromise on security.
              </p>
            </div>

            <div className={styles.features_grid}>
              {features.map((feat, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={styles.feature_card}
                  blobColor={feat.blobColor}
                >
                  <div className={styles.feature_icon_wrap}>{feat.icon}</div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 5. Benefits / Ecosystem Section (6-Card Grid) */}
        <FadeInSection
          className={styles.benefits_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>GLOBAL ECOSYSTEM</span>
              <h2 className={styles.section_title}>
                Where You Can Use SyncID
              </h2>
              <p className={styles.section_subtitle}>
                Unlock verified discounts and access tools across world-class
                platforms with a single tap.
              </p>
            </div>

            <div className={styles.benefits_grid}>
              {benefits.map((b, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={styles.benefit_card}
                  blobColor={b.blobColor}
                >
                  <span className={styles.benefit_icon}>{b.icon}</span>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 6. FAQ Accordion Section */}
        <FadeInSection
          className={styles.faq_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>QUESTIONS & ANSWERS</span>
              <h2 className={styles.section_title}>Frequently Asked Questions</h2>
              <p className={styles.section_subtitle}>
                Everything you need to know about your SyncID digital student
                passport.
              </p>
            </div>

            <div className={styles.faq_container}>
              {faqs.map((faq, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={styles.faq_card}
                  blobColor="#04d69d"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className={styles.faq_header}>
                    <h3>{faq.q}</h3>
                    <span className={styles.faq_toggle}>
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === idx && (
                    <div className={styles.faq_answer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 7. Call to Action Launchpad */}
        <FadeInSection
          className={styles.cta_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.cta_container}>
            <span className={styles.cta_badge}>JOIN THE COMMUNITY</span>
            <h2 className={styles.cta_title}>Ready to claim your SyncID?</h2>
            <p className={styles.cta_body}>
              Get started in under a minute. Connect your school, claim your
              SyncTag, and start verifying instantly across the web.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Get SyncID Free
                </SnButton>
              </Link>
              <Link href="/contact">
                <SnButton variant="stroke" size="lg">
                  Request Your School
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
