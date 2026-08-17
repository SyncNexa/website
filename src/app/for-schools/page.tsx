"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import { Zap, ShieldCheck, Globe, Smartphone, Shield } from "lucide-react";
import styles from "./page.module.css";

export default function ForSchoolsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Deploy Trust Adapter in Minutes",
      desc: "Deploy the lightweight SyncNexa Trust Adapter container in your existing campus IT environment. It connects via read-only SQL or REST directly to your Student Information System (SIS).",
    },
    {
      step: "02",
      title: "Zero-Persistence Query Execution",
      desc: "When a student requests verification, the adapter performs an encrypted local lookup, confirming only active enrollment status. Zero student database records are ever copied or egressed.",
    },
    {
      step: "03",
      title: "Instant Global Student Access",
      desc: "Students present cryptographic proofs worldwide. When a student graduates, withdraws, or defers, revocation synchronizes automatically in real time.",
    },
  ];

  const securityFeatures = [
    {
      title: "Zero Student PII Stored",
      desc: "No transcripts, matriculation files, or photos stored on SyncNexa servers.",
      blobColor: "#04d69d",
    },
    {
      title: "mTLS 1.3 Encryption",
      desc: "End-to-end hardware certificate-authenticated tunnels for all queries.",
      blobColor: "#006d50",
    },
    {
      title: "100% Campus IT Control",
      desc: "Full administrative governance and query throttling from your infrastructure.",
      blobColor: "#ffaa01",
    },
    {
      title: "Automated Real-Time Revocation",
      desc: "Instant status updates upon graduation or departure with zero manual intervention.",
      blobColor: "#04d69d",
    },
    {
      title: "Zero-Knowledge Architecture",
      desc: "Deliver mathematical Boolean proofs without exposing underlying data tables.",
      blobColor: "#006d50",
    },
    {
      title: "Comprehensive Audit Logs",
      desc: "Immutable local logging for campus compliance and registrar verification.",
      blobColor: "#ffaa01",
    },
    {
      title: "FERPA & NDPR Compliant",
      desc: "Meets international educational privacy mandates by eliminating external egress.",
      blobColor: "#04d69d",
    },
    {
      title: "Air-Gapped Deployment",
      desc: "Fully supported on-premises deployment behind campus firewalls.",
      blobColor: "#006d50",
    },
  ];

  const studentBenefits = [
    {
      icon: <Zap size={22} />,
      title: "Instant Verification",
      desc: "Eliminates weeks of registrar paperwork. Students verify status in seconds across global platforms.",
      blobColor: "#04d69d",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Document Protection",
      desc: "Students never have to upload scanned ID cards or transcripts to unvetted third-party commercial portals.",
      blobColor: "#006d50",
    },
    {
      icon: <Globe size={22} />,
      title: "Global Partner Access",
      desc: "One institutional SyncID unlocks thousands of verified student discounts, software grants, and transit passes.",
      blobColor: "#ffaa01",
    },
    {
      icon: <Smartphone size={22} />,
      title: "Modern Mobile Identity",
      desc: "A state-of-the-art mobile credential that elevates your institution's digital campus reputation.",
      blobColor: "#04d69d",
    },
  ];

  const itSpecs = [
    {
      label: "Deployment Formats",
      value: "Docker container, Kubernetes Helm chart, or lightweight standalone Linux binary",
    },
    {
      label: "Supported SIS Platforms",
      value: "Oracle Campus, Ellucian Banner, PowerSchool, Canvas LMS, custom PostgreSQL/MySQL/MSSQL, and REST APIs",
    },
    {
      label: "Network Egress Requirements",
      value: "Outbound HTTPS (Port 443) only. No inbound public ports or NAT reconfiguration required",
    },
    {
      label: "Compute Footprint",
      value: "< 512MB RAM, < 0.5 vCPU for typical institutional campus loads (100k+ students)",
    },
    {
      label: "Database Access Scope",
      value: "Strict read-only query access to enrollment status boolean fields only",
    },
    {
      label: "Regulatory Compliance",
      value: "Guaranteed compliance with NDPR (Nigeria Data Protection Regulation), GDPR, and US FERPA",
    },
  ];

  const faqs = [
    {
      q: "Does SyncNexa access or copy our full student database?",
      a: "No. The Trust Adapter queries only the active enrollment status (true/false) for the specific student requesting verification. We never ingest, replicate, export, or store your database records.",
    },
    {
      q: "How long does IT integration take for a university?",
      a: "Most institutional IT teams complete deployment in under two hours using our pre-configured Docker container and step-by-step guides.",
    },
    {
      q: "What does it cost for educational institutions?",
      a: "SyncNexa is completely free for accredited educational institutions. We believe universities should never have to pay to protect their students' privacy.",
    },
    {
      q: "What happens when a student graduates or withdraws?",
      a: "Revocation is real-time and automatic. The moment their status changes in your campus SIS, their SyncID credential immediately reflects the change worldwide.",
    },
    {
      q: "Can our IT security team audit all adapter queries?",
      a: "Yes. Every verification query is logged locally inside your campus environment. You retain 100% visibility and forensic control.",
    },
  ];

  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* 1. Hero Section */}
        <FadeInSection className={styles.hero} activeClassName={styles.is_visible}>
          <HeroGeometry />
          <div className={styles.container}>
            <div className={styles.hero_split}>
              <div className={styles.hero_content}>
                <span className={styles.section_badge}>
                  INSTITUTIONAL GATEWAY
                </span>
                <h1 className={styles.hero_title}>
                  Protect student data. <br />
                  <span className={styles.gradient_text}>
                    Empower your campus.
                  </span>
                </h1>

                <p className={styles.hero_subtitle}>
                  SyncNexa connects directly to your institutional SIS via an
                  encrypted zero-persistence adapter. Verify active student
                  status without exporting records, uploading CSVs, or risking
                  data breaches.
                </p>

                <div className={styles.hero_cta_group}>
                  <Link href="/contact">
                    <SnButton variant="primary" size="lg">
                      Schedule Campus Demo
                    </SnButton>
                  </Link>
                  <Link href="#how-it-works">
                    <SnButton variant="stroke" size="lg">
                      Integration Architecture
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* SIS Integration Preview Card */}
              <div className={styles.hero_ui_side}>
                <GlassBlobCard
                  className={styles.sis_preview_card}
                  blobColor="#006d50"
                  secondaryBlobColor="#04d69d"
                >
                  <div className={styles.sis_card_top}>
                    <div className={styles.sis_status_indicator}>
                      <span className={styles.pulse_dot}></span>
                      <span>SIS TRUST ADAPTER LIVE</span>
                    </div>
                    <span className={styles.sis_latency_tag}>
                      mTLS 1.3 ENCRYPTED
                    </span>
                  </div>

                  <div className={styles.sis_metrics_grid}>
                    <div className={styles.sis_metric_box}>
                      <span>ACTIVE CAMPUS QUERIES</span>
                      <strong>1,420 / min</strong>
                    </div>
                    <div className={styles.sis_metric_box}>
                      <span>PII EGRESS RATE</span>
                      <strong>0 Bytes (ZKP)</strong>
                    </div>
                    <div className={styles.sis_metric_box}>
                      <span>AVG QUERY RESPONSE</span>
                      <strong>~14.2ms</strong>
                    </div>
                    <div className={styles.sis_metric_box}>
                      <span>COMPLIANCE STATUS</span>
                      <strong>100% FERPA/NDPR</strong>
                    </div>
                  </div>

                  <div className={styles.sis_log_box}>
                    <span>[mTLS] Query student_id=0x7f... status=ACTIVE</span>
                    <span>[Adapter] Proof generated (zero docs egressed)</span>
                    <span>[Relay] Attestation signed by FUTO Root Key</span>
                  </div>
                </GlassBlobCard>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 2. How It Works Section */}
        <FadeInSection
          className={styles.how_section}
          id="how-it-works"
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>DEPLOYMENT PIPELINE</span>
              <h2 className={styles.section_title}>
                How SyncNexa Works for Schools
              </h2>
              <p className={styles.section_subtitle}>
                A secure, non-invasive deployment model designed for university
                IT and registrar teams.
              </p>
            </div>

            <div className={styles.how_timeline_wrap}>
              <div className={styles.how_vertical_line} aria-hidden="true" />

              <div className={styles.how_steps_list}>
                {steps.map((item, idx) => (
                  <div key={idx} className={styles.how_step_item}>
                    <div className={styles.how_step_circle}>
                      <span className={styles.how_step_num}>{item.step}</span>
                    </div>

                    <GlassBlobCard
                      className={styles.how_body_card}
                      blobColor="#04d69d"
                    >
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </GlassBlobCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 3. Security & Compliance Grid */}
        <FadeInSection
          className={styles.security_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>ENTERPRISE SECURITY</span>
              <h2 className={styles.section_title}>
                Built for Institutional Security
              </h2>
              <p className={styles.section_subtitle}>
                Engineered from the ground up to protect institutional
                reputation and eliminate student data liability.
              </p>
            </div>

            <div className={styles.security_grid}>
              {securityFeatures.map((sec, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={styles.security_card}
                  blobColor={sec.blobColor}
                >
                  <div className={styles.security_icon}>
                    <Shield size={20} />
                  </div>
                  <h3>{sec.title}</h3>
                  <p>{sec.desc}</p>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 4. Student Benefits for Schools */}
        <FadeInSection
          className={styles.benefits_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>CAMPUS ADVANTAGES</span>
              <h2 className={styles.section_title}>
                Why Students Love SyncID
              </h2>
              <p className={styles.section_subtitle}>
                Give your students a world-class digital identity passport they
                can be proud of.
              </p>
            </div>

            <div className={styles.benefits_grid}>
              {studentBenefits.map((b, idx) => (
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

        {/* 5. IT Specifications Table */}
        <FadeInSection
          className={styles.specs_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>IT & INFRASTRUCTURE</span>
              <h2 className={styles.section_title}>Technical Specifications</h2>
              <p className={styles.section_subtitle}>
                Everything your campus IT and security review board needs to
                know.
              </p>
            </div>

            <GlassBlobCard
              className={styles.specs_card}
              blobColor="#006d50"
              secondaryBlobColor="#04d69d"
            >
              <div className={styles.specs_table}>
                {itSpecs.map((spec, idx) => (
                  <div key={idx} className={styles.spec_row}>
                    <div className={styles.spec_label}>{spec.label}</div>
                    <div className={styles.spec_value}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </GlassBlobCard>
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
              <h2 className={styles.section_title}>
                Frequently Asked Questions
              </h2>
              <p className={styles.section_subtitle}>
                Common questions from university registrars, IT directors, and
                deans of student affairs.
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
            <span className={styles.cta_badge}>PARTNER WITH SYNCNEXA</span>
            <h2 className={styles.cta_title}>Bring SyncID to Your Campus</h2>
            <p className={styles.cta_body}>
              Deploy the Trust Adapter in under two hours. Eliminate manual
              verification requests and protect your student data today.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/contact">
                <SnButton variant="primary" size="lg">
                  Request Institutional Pilot
                </SnButton>
              </Link>
              <Link href="mailto:partnerships@syncnexa.co">
                <SnButton variant="stroke" size="lg">
                  Contact Registrar Support
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
