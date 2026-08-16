"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar, Footer } from "@/layouts";
import { ButtonLink } from "@/components/links";
import styles from "./page.module.css";

export default function ForSchoolsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const helpCards = [
    {
      title: "No Academic Data Leaves Your Systems",
      desc: "We never ask for transcripts, grades, or personal records. Just one simple question: Is this student currently enrolled?",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Instant Revocation",
      desc: "When a student graduates or withdraws, their verified status disappears immediately. No waiting. No manual removal across dozens of platforms.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      title: "Full Visibility",
      desc: "Our partner dashboard shows you how many of your students are using SyncID and which kinds of benefits they're accessing.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  const integrationSteps = [
    {
      number: "1",
      title: "Partner With Us",
      desc: "Sign the partnership agreement. We onboard your institution within a week.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Deploy the Trust Adapter",
      desc: "A lightweight piece of software runs on your infrastructure. It connects your SIS to SyncNexa securely.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Start Verifying",
      desc: "Students can now verify their enrollment through SyncID. You see every verification in your dashboard.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  const securityBullets = [
    "End-to-end encryption with mutual TLS",
    "No storage of academic documents",
    "Your SIS stays behind your firewall",
    "Full audit trail of every verification",
    "Immediate revocation when enrollment status changes",
  ];

  const studentBenefits = [
    "Verify their status once and use it everywhere",
    "Claim discounts and benefits instantly",
    "Stop uploading your official documents to random platforms",
    "Keep their academic data private",
  ];

  const itBenefits = [
    "Lightweight and containerized",
    "Deployed inside your own network",
    "Connected over encrypted channels only",
    "Built to run with minimal maintenance",
    "Fully documented with a dedicated support team",
  ];

  const testimonials = [
    {
      quote: "SyncNexa gave our students what they've been asking for—an easy way to prove they're enrolled. And we never had to expose our systems.",
      author: "University Registrar",
      role: "Accredited Higher Education Institution",
    },
    {
      quote: "The Trust Adapter was surprisingly easy to set up. Our IT team had it running in a day.",
      author: "Institution IT Director",
      role: "Campus Systems & Infrastructure",
    },
    {
      quote: "We love the revocation feature. When a student withdraws, their status updates instantly across all platforms.",
      author: "Student Affairs Administrator",
      role: "Student Services & Governance",
    },
  ];

  const faqs = [
    {
      q: "How long does onboarding take?",
      a: "Most schools complete setup within one week. The technical integration typically takes a day or two.",
    },
    {
      q: "Do we need to replace our current SIS?",
      a: "No. The Trust Adapter connects to your existing system. Nothing changes on your end.",
    },
    {
      q: "What data does SyncNexa store?",
      a: "None of your academic data. We only store a hashed identifier to match students across services. Your SIS remains the source of truth.",
    },
    {
      q: "Is there a cost for schools?",
      a: "Partnering with SyncNexa is free. We make money from organizations that pay for verification services.",
    },
    {
      q: "Can we revoke a student's status instantly?",
      a: "Yes. From your dashboard, you can revoke any student's verified status immediately. It takes effect across all platforms at once.",
    },
  ];

  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.hero_content}>
              <span className={styles.pill_label}>For Universities & Registrars</span>
              <h1 className={styles.hero_title}>
                Your students are already <span className={styles.gradient_text}>asking for this.</span>
              </h1>
              <p className={styles.hero_subtitle}>
                Give them a secure way to prove their enrollment—without exposing their data or your systems.
              </p>
              <div className={styles.hero_cta_group}>
                <ButtonLink
                  color="green"
                  label="Become a Partner School"
                  path="/contact"
                  variant="solid"
                />
                <ButtonLink
                  color="green"
                  label="Learn How It Works"
                  path="#how-it-works"
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Problem Section */}
        <section className={styles.problem_section}>
          <div className={styles.container}>
            <div className={styles.problem_box}>
              <span className={styles.pill_label_alert}>The Challenge</span>
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
        <section className={styles.helps_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.pill_label}>Institutional Control</span>
              <h2 className={styles.section_title}>You stay in control.</h2>
              <p className={styles.section_subtitle}>
                SyncNexa connects directly to your Student Information System. When an organization needs to verify a student, they ask SyncNexa—and SyncNexa asks you.
              </p>
              <p className={styles.source_truth_tag}>
                You are the source of truth. Always.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              {helpCards.map((card, idx) => (
                <div key={idx} className={styles.help_card}>
                  <div className={styles.card_icon_wrap}>
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How the Integration Works Section */}
        <section className={styles.how_it_works_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.pill_label}>Integration Roadmap</span>
              <h2 className={styles.section_title}>Simple to set up. Safe to run.</h2>
            </div>

            <div className={styles.steps_grid_3}>
              {integrationSteps.map((step, idx) => (
                <div key={idx} className={styles.step_card}>
                  <div className={styles.step_badge}>Step {step.number}</div>
                  <div className={styles.step_icon}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Security Section */}
        <section className={styles.security_section}>
          <div className={styles.container}>
            <div className={styles.security_split}>
              <div className={styles.security_text}>
                <span className={styles.pill_label}>Zero-Risk Architecture</span>
                <h2 className={styles.section_title}>Built for institutions like yours.</h2>
                <div className={styles.security_checklist}>
                  {securityBullets.map((bullet, idx) => (
                    <div key={idx} className={styles.security_bullet_item}>
                      <div className={styles.shield_icon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.security_graphic}>
                <Image
                  src="/verification_image.svg"
                  alt="SyncNexa Trust Adapter Architecture"
                  width={520}
                  height={400}
                  className={styles.responsive_img}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. What Your Students Get Section */}
        <section className={styles.students_get_section}>
          <div className={styles.container}>
            <div className={styles.students_get_box}>
              <span className={styles.pill_label}>Student Experience</span>
              <h2 className={styles.section_title}>Happier students. Fewer headaches.</h2>
              <p className={styles.students_get_lead}>
                When you partner with SyncNexa, your students can:
              </p>

              <ul className={styles.students_get_list}>
                {studentBenefits.map((item, idx) => (
                  <li key={idx}>
                    <span className={styles.check_circle}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.students_get_closing}>
                That means fewer help requests from students asking for verification letters. And fewer complaints about slow approvals.
              </div>
            </div>
          </div>
        </section>

        {/* 7. For Your IT Team Section */}
        <section className={styles.it_team_section}>
          <div className={styles.container}>
            <div className={styles.it_team_card}>
              <div className={styles.it_team_icon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className={styles.pill_label}>Technical Specifications</span>
              <h2 className={styles.section_title}>Your IT team will approve.</h2>
              <p className={styles.it_lead}>
                The SyncNexa Trust Adapter is:
              </p>

              <div className={styles.it_grid}>
                {itBenefits.map((item, idx) => (
                  <div key={idx} className={styles.it_item}>
                    <div className={styles.it_item_dot}></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.it_summary}>
                No cloud dependencies you don&apos;t control. No risky data sharing. No complex setup.
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials Section */}
        <section className={styles.testimonials_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.pill_label}>Partner Voices</span>
              <h2 className={styles.section_title}>What partner schools say</h2>
            </div>

            <div className={styles.cards_grid_3}>
              {testimonials.map((t, idx) => (
                <div key={idx} className={styles.testimonial_card}>
                  <div className={styles.quote_icon}>&ldquo;</div>
                  <p className={styles.testimonial_text}>{t.quote}</p>
                  <div className={styles.testimonial_author}>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className={styles.faq_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.pill_label}>University FAQ</span>
              <h2 className={styles.section_title}>Questions from schools</h2>
            </div>

            <div className={styles.faq_list}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.faq_item} ${isOpen ? styles.faq_open : ""}`}
                  >
                    <button
                      className={styles.faq_question}
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className={styles.faq_toggle_icon}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className={styles.faq_answer}>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. Call to Action Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_container}>
            <h2 className={styles.cta_title}>Give your students the identity tool they deserve.</h2>
            <p className={styles.cta_body}>
              Partner with SyncNexa and become part of the trust layer.
            </p>
            <div className={styles.cta_buttons}>
              <ButtonLink
                color="white"
                label="Become a Partner School"
                path="/contact"
                variant="solid"
              />
              <ButtonLink
                color="white"
                label="Contact Our Team"
                path="/contact"
                variant="outline"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
