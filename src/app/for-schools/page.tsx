"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import styles from "./page.module.css";

export default function ForSchoolsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Deploy Trust Adapter",
      desc: "Deploy the SyncNexa Trust Adapter in your existing IT environment in minutes. It runs securely within your infrastructure, connecting directly to your Student Information System (SIS).",
    },
    {
      step: "02",
      title: "Attest Student Status",
      desc: "When a student requests verification, the Trust Adapter queries your SIS in real time. It confirms only their enrollment status (active or inactive). No other data is accessed or transferred.",
    },
    {
      step: "03",
      title: "Students Prove Everywhere",
      desc: "Students use their SyncID to access verified discounts and services worldwide. When their status changes (graduation, withdrawal), revocation is instant and automatic.",
    },
  ];

  const securityFeatures = [
    "No student data stored on SyncNexa servers",
    "Mutual TLS (mTLS) encrypted communication",
    "Full institutional control over verification queries",
    "Real-time revocation upon student departure",
    "Zero-knowledge proof architecture",
    "Comprehensive audit logging",
    "FERPA & NDPR compliant design",
    "Air-gapped deployment option available",
  ];

  const studentBenefits = [
    {
      icon: "⚡",
      title: "Instant Verification",
      desc: "No more waiting days for manual approval. Students verify their status in seconds.",
    },
    {
      icon: "🔒",
      title: "Privacy Protected",
      desc: "Students never have to upload photos of their student ID cards to third-party platforms.",
    },
    {
      icon: "🌐",
      title: "Global Access",
      desc: "One SyncID works with every participating organization, service, and discount program.",
    },
    {
      icon: "📱",
      title: "Digital-First",
      desc: "A modern, mobile-first experience that meets students where they already are.",
    },
  ];

  const itSpecs = [
    { label: "Deployment Options", value: "Docker container, Kubernetes Helm chart, or lightweight binary" },
    { label: "Supported SIS Platforms", value: "Custom databases, Banner, PowerSchool, Canvas, Ellucian, and REST/SQL APIs" },
    { label: "Network Requirements", value: "Outbound HTTPS (port 443) only. No incoming ports required." },
    { label: "Resource Requirements", value: "< 512MB RAM, < 1 vCPU for typical campus loads" },
    { label: "Data Access", value: "Read-only access to enrollment status fields only" },
    { label: "Compliance", value: "Designed for NDPR, GDPR, and FERPA compliance" },
  ];

  const faqs = [
    {
      q: "Does SyncNexa access our full student database?",
      a: "No. The Trust Adapter only queries enrollment status (active/inactive) for the specific student requesting verification. We never ingest, replicate, or store your student database.",
    },
    {
      q: "How long does integration take?",
      a: "Most institutions complete integration in under two hours. Our team provides full deployment support and documentation.",
    },
    {
      q: "What does it cost for schools?",
      a: "SyncNexa is free for educational institutions. We believe schools shouldn't pay to protect their own students' data.",
    },
    {
      q: "What happens when a student graduates or drops out?",
      a: "Revocation is automatic and real-time. The moment their status changes in your SIS, their SyncID credential reflects the change. No manual action needed.",
    },
    {
      q: "Can we audit what the Trust Adapter is doing?",
      a: "Yes. Every verification query is logged locally in your environment. You have full visibility into every request.",
    },
  ];

  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.hero_split}>
              <div className={styles.hero_content}>
                <h1 className={styles.hero_title}>
                  Your students are already <br />
                  <span className={styles.gradient_text}>asking for this.</span>
                </h1>

                <p className={styles.hero_subtitle}>
                  Give them a secure way to prove their enrollment—without exposing their data or your systems.
                </p>

                <div className={styles.hero_cta_group}>
                  <Link href="/contact">
                    <SnButton variant="primary" size="lg">
                      Become a Partner School
                    </SnButton>
                  </Link>
                  <Link href="#how-it-works">
                    <SnButton variant="stroke" size="lg">
                      Learn How It Works
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* Institution Portal Preview (Replacing old image) */}
              <div className={styles.hero_ui_side}>
                <div className={styles.school_dashboard_card}>
                  <div className={styles.dash_header}>
                    <div className={styles.dash_brand}>
                      <span className={styles.dash_icon}>🏛️</span>
                      <strong>SyncNexa Trust Adapter</strong>
                    </div>
                    <span className={styles.dash_status_badge}>SIS Connected</span>
                  </div>

                  <div className={styles.dash_metrics_row}>
                    <div className={styles.metric_tile}>
                      <small>STUDENT QUERIES</small>
                      <strong>18,420</strong>
                      <span className={styles.metric_sub}>This semester</span>
                    </div>
                    <div className={styles.metric_tile}>
                      <small>LATENCY</small>
                      <strong>42ms</strong>
                      <span className={styles.metric_sub}>Real-time attestation</span>
                    </div>
                  </div>

                  <div className={styles.dash_log_feed}>
                    <div className={styles.feed_title}>Live Attestation Feed (Zero PII)</div>
                    <div className={styles.feed_item}>
                      <span className={styles.feed_check}>✓</span>
                      <span>Enrolled query &middot; FUTO-CSC-2022 &middot; Approved</span>
                      <small>2s ago</small>
                    </div>
                    <div className={styles.feed_item}>
                      <span className={styles.feed_check}>✓</span>
                      <span>Enrolled query &middot; UNILAG-ENG-2023 &middot; Approved</span>
                      <small>18s ago</small>
                    </div>
                  </div>

                  <div className={styles.dash_footer}>
                    <span>🔒 Running safely behind institutional firewall</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Problem Section */}
        <section className={styles.problem_section}>
          <div className={styles.container}>
            <div className={styles.problem_box}>
              <h2 className={styles.section_title}>Verification requests never stop.</h2>
              <div className={styles.problem_text}>
                <p>
                  Businesses ask you to confirm student status for discounts, software access, bank accounts, and more. Each request means time, paperwork, and risk.
                </p>
                <p>
                  And the current system isn&apos;t built for privacy. Students upload your institution&apos;s documents to third parties. You lose visibility. Data gets scattered across platforms you don&apos;t control.
                </p>
                <p className={styles.problem_highlight}>
                  It&apos;s time for a better way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How SyncNexa Helps Schools Section */}
        <section className={styles.solution_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Protect your students. Protect your data.</h2>
              <p className={styles.section_subtitle}>
                SyncNexa lets institutions verify student status in real time without sharing documents, transcripts, or personal records.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.benefit_card}>
                <div className={styles.card_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Zero Data Exposure</h3>
                <p>
                  SyncNexa never stores your students&apos; personal data or academic records. Your Student Information System (SIS) remains the single source of truth.
                </p>
              </div>

              <div className={styles.benefit_card}>
                <div className={styles.card_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                </div>
                <h3>Real-Time Control</h3>
                <p>
                  When a student departs your institution, their verification is revoked instantly. No delay. No stale access.
                </p>
              </div>

              <div className={styles.benefit_card}>
                <div className={styles.card_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 14 14" />
                  </svg>
                </div>
                <h3>Zero Administrative Burden</h3>
                <p>
                  No manual verifications, no letter-writing, no phone calls from businesses. The Trust Adapter handles everything automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works Section (3-Step Integration) */}
        <section className={styles.how_it_works_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>How It Works for Institutions</h2>
            </div>

            <div className={styles.steps_grid_3}>
              {steps.map((item, idx) => (
                <div key={idx} className={styles.step_card}>
                  <div className={styles.step_badge}>{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Security & Privacy Section */}
        <section className={styles.security_section}>
          <div className={styles.container}>
            <div className={styles.security_box}>
              <div className={styles.section_header}>
                <h2 className={styles.section_title}>Security & Privacy by Design</h2>
                <p className={styles.section_subtitle}>
                  We take data protection as seriously as you do.
                </p>
              </div>

              <div className={styles.security_grid}>
                {securityFeatures.map((feat, idx) => (
                  <div key={idx} className={styles.security_item}>
                    <span className={styles.shield_check}>✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Benefits for Students Section */}
        <section className={styles.student_benefits_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>What Your Students Get</h2>
              <p className={styles.section_subtitle}>
                A modern digital identity that unlocks hundreds of perks effortlessly.
              </p>
            </div>

            <div className={styles.cards_grid_4}>
              {studentBenefits.map((benefit, idx) => (
                <div key={idx} className={styles.student_benefit_card}>
                  <div className={styles.benefit_emoji}>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. For IT & Engineering Teams (Architecture Visual replacing old image) */}
        <section className={styles.it_section}>
          <div className={styles.container}>
            <div className={styles.it_split}>
              <div className={styles.it_content}>
                <h2 className={styles.section_title}>Built for IT & Engineering Teams</h2>
                <p className={styles.it_lead}>
                  We designed the SyncNexa Trust Adapter to be lightweight, secure, and easy to maintain.
                </p>

                <div className={styles.specs_table}>
                  {itSpecs.map((spec, idx) => (
                    <div key={idx} className={styles.spec_row}>
                      <span className={styles.spec_label}>{spec.label}</span>
                      <span className={styles.spec_value}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Adapter SIS Network Diagram */}
              <div className={styles.it_diagram_side}>
                <div className={styles.diagram_box}>
                  <div className={styles.diagram_title_bar}>
                    <span>Institutional SIS Network Architecture</span>
                  </div>

                  <div className={styles.diagram_nodes}>
                    <div className={styles.diag_node_school}>
                      <div className={styles.diag_icon}>🗄️</div>
                      <div>
                        <strong>University SIS / DB</strong>
                        <small>Banner, Ellucian, SQL (Inside Campus)</small>
                      </div>
                    </div>

                    <div className={styles.diag_arrow_down}>
                      <span>SQL / REST Read-Only</span>
                    </div>

                    <div className={styles.diag_node_adapter}>
                      <div className={styles.diag_icon}>🛡️</div>
                      <div>
                        <strong>SyncNexa Trust Adapter</strong>
                        <small>Containerized In-VPC Worker</small>
                      </div>
                    </div>

                    <div className={styles.diag_arrow_down}>
                      <span>Outbound mTLS 1.3 (Port 443)</span>
                    </div>

                    <div className={styles.diag_node_cloud}>
                      <div className={styles.diag_icon}>⚡</div>
                      <div>
                        <strong>Zero-Knowledge Attestation</strong>
                        <small>Instant cryptographic yes/no response</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials Section */}
        <section className={styles.testimonials_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>What Educators Are Saying</h2>
            </div>

            <div className={styles.testimonials_grid}>
              <div className={styles.testimonial_card}>
                <p className={styles.testimonial_text}>
                  &ldquo;SyncNexa eliminated the manual verification requests our registrar office handled daily. Integration was smooth and our students love it.&rdquo;
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Dean of Student Affairs</strong>
                  <span>Federal University of Technology Owerri</span>
                </div>
              </div>

              <div className={styles.testimonial_card}>
                <p className={styles.testimonial_text}>
                  &ldquo;The privacy model is exactly what we needed. We maintain complete control of our data, and our students get seamless access to benefits.&rdquo;
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Director of Information Technology</strong>
                  <span>Partner Higher Education Institution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className={styles.faq_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faq_list}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`${styles.faq_item} ${
                    openFaq === idx ? styles.faq_open : ""
                  }`}
                >
                  <button
                    className={styles.faq_question}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faq_toggle_icon}>
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className={styles.faq_answer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Call to Action Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_container}>
            <h2 className={styles.cta_title}>Bring SyncNexa to your campus.</h2>
            <p className={styles.cta_body}>
              Join a growing network of institutions that trust SyncNexa to protect their students&apos; data.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/contact">
                <SnButton variant="primary" size="lg">
                  Request a Demo
                </SnButton>
              </Link>
              <Link href="mailto:partnerships@syncnexa.co">
                <SnButton variant="secondary" size="lg">
                  Talk to Partnerships
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
