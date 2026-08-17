"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import styles from "./page.module.css";

export default function SyncIdPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      number: "1",
      title: "Download the App",
      desc: "Get SyncID from the App Store or Google Play. Create your account in under a minute.",
    },
    {
      number: "2",
      title: "Verify Your School",
      desc: "Connect to your institution through our secure verification process. Your school confirms your enrollment—no documents needed.",
    },
    {
      number: "3",
      title: "Get Your SyncTag",
      desc: "Receive your unique digital student identifier. It lives in your app and stays with you as long as you're enrolled.",
    },
    {
      number: "4",
      title: "Use It Everywhere",
      desc: "When a platform asks for student verification, use SyncID. One tap, verified instantly.",
    },
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "One-Tap Verification",
      desc: "No more filling out forms, uploading ID cards, or waiting for approval emails. Verify in seconds.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Privacy First",
      desc: "SyncID only shares your verified status—never your grades, transcripts, or personal documents. You control who sees what.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Your Data Stays Yours",
      desc: "We don't store your academic records. Your school confirms your status, and you decide where to share it.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      ),
      title: "Revoke Anytime",
      desc: "Changed your mind? Revoke access from any platform with a single tap from your SyncID dashboard.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Works Across Platforms",
      desc: "Use SyncID for music streaming, software discounts, food delivery, transit passes, and more.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      title: "Always Free for Students",
      desc: "SyncID is completely free to download and use. No hidden fees, no subscriptions, ever.",
    },
  ];

  const benefits = [
    {
      icon: "🎵",
      title: "Streaming & Entertainment",
      desc: "Spotify, Apple Music, YouTube Premium, and more—at student rates.",
    },
    {
      icon: "💻",
      title: "Software & Tools",
      desc: "GitHub Student Developer Pack, Notion, Figma, JetBrains, Microsoft 365, and Adobe Creative Cloud.",
    },
    {
      icon: "🍔",
      title: "Food & Delivery",
      desc: "Student discounts on food delivery, campus dining, and meal plans.",
    },
    {
      icon: "✈️",
      title: "Travel & Transit",
      desc: "Discounted bus, train, and flight fares for students.",
    },
    {
      icon: "🛍️",
      title: "Retail & Hardware",
      desc: "Apple Education Pricing, Samsung student discounts, Nike, and more.",
    },
    {
      icon: "🏦",
      title: "Banking & Finance",
      desc: "Student accounts, zero-fee debit cards, and financial tools built for students.",
    },
  ];

  const faqs = [
    {
      q: "Is SyncID really free?",
      a: "Yes, 100% free for students. We will never charge you to create an account, verify your status, or use SyncID.",
    },
    {
      q: "What if my school isn't listed?",
      a: "You can request your school from within the app. We're adding new institutions every week.",
    },
    {
      q: "What data does SyncID store?",
      a: "Only your basic account information: your SyncTag, your public key, and your verified status (active or inactive). We do not store your grades, transcripts, ID card photos, or any academic records.",
    },
    {
      q: "What happens when I graduate?",
      a: "When you graduate, your student status will reflect that you're an alumnus. You can still keep your SyncID account for alumni perks.",
    },
    {
      q: "Can I use SyncID if I'm not in university?",
      a: "SyncID supports students in universities, polytechnics, colleges of education, and accredited online programs.",
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
                  Your student identity. <br />
                  <span className={styles.gradient_text}>One tap away.</span>
                </h1>

                <p className={styles.hero_subtitle}>
                  SyncID is a digital student identity that proves your enrollment status instantly—without sharing more than you need to.
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

              {/* SyncID Mobile App Preview (Replacing old image) */}
              <div className={styles.hero_ui_side}>
                <div className={styles.phone_frame}>
                  <div className={styles.phone_header}>
                    <span className={styles.phone_time}>9:41</span>
                    <div className={styles.phone_notch}></div>
                    <span className={styles.phone_battery}>100%</span>
                  </div>

                  <div className={styles.phone_screen_content}>
                    <div className={styles.app_bar}>
                      <span className={styles.app_logo_text}>SyncID</span>
                      <span className={styles.app_badge_active}>Verified</span>
                    </div>

                    <div className={styles.id_card_visual}>
                      <div className={styles.id_card_top}>
                        <span className={styles.uni_name}>Federal Univ. of Tech Owerri</span>
                        <span className={styles.session_tag}>2025/2026</span>
                      </div>
                      <div className={styles.id_student_name}>Okolie Anthony</div>
                      <div className={styles.id_handle}>@anthony &middot; Computer Science</div>
                      <div className={styles.id_card_bottom}>
                        <span className={styles.id_chip}>ENROLLED</span>
                        <span className={styles.id_auth_code}>#SN-8924-OK</span>
                      </div>
                    </div>

                    <div className={styles.app_quick_actions}>
                      <div className={styles.quick_action_item}>
                        <div className={styles.quick_icon}>⚡</div>
                        <span>Instant Share</span>
                      </div>
                      <div className={styles.quick_action_item}>
                        <div className={styles.quick_icon}>🔒</div>
                        <span>Privacy Vault</span>
                      </div>
                      <div className={styles.quick_action_item}>
                        <div className={styles.quick_icon}>🏷️</div>
                        <span>Perks (24)</span>
                      </div>
                    </div>

                    <div className={styles.live_attestation_bubble}>
                      <span className={styles.bubble_dot}></span>
                      <span>Ready to verify on Spotify, Notion & GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What Is SyncID Section */}
        <section className={styles.what_section}>
          <div className={styles.container}>
            <div className={styles.what_box}>
              <h2 className={styles.section_title}>What is SyncID?</h2>
              <div className={styles.what_content}>
                <p>
                  SyncID is a free mobile app that verifies your student status once and lets you use that verification anywhere student benefits exist.
                </p>
                <div className={styles.what_bullets}>
                  <div className={styles.what_bullet}>
                    <span className={styles.cross_icon}>✕</span>
                    <span>No more uploading your ID card to every platform.</span>
                  </div>
                  <div className={styles.what_bullet}>
                    <span className={styles.cross_icon}>✕</span>
                    <span>No more waiting days for approval.</span>
                  </div>
                  <div className={styles.what_bullet}>
                    <span className={styles.cross_icon}>✕</span>
                    <span>No more sharing documents that should stay private.</span>
                  </div>
                </div>
                <p className={styles.what_conclusion}>
                  SyncID puts you in control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How SyncID Works Section */}
        <section className={styles.how_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Set up once. Use it everywhere.</h2>
            </div>

            <div className={styles.steps_grid}>
              {steps.map((step, idx) => (
                <div key={idx} className={styles.step_card}>
                  <div className={styles.step_number}>{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Features / Benefits Section */}
        <section className={styles.features_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Built for your student life</h2>
            </div>

            <div className={styles.features_grid}>
              {features.map((feat, idx) => (
                <div key={idx} className={styles.feature_card}>
                  <div className={styles.feature_icon_wrap}>{feat.icon}</div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What SyncID Unlocks Section */}
        <section className={styles.unlocks_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>What SyncID Unlocks</h2>
              <p className={styles.section_subtitle}>
                One app. Hundreds of discounts, tools, and perks.
              </p>
            </div>

            <div className={styles.benefits_grid}>
              {benefits.map((benefit, idx) => (
                <div key={idx} className={styles.benefit_card}>
                  <div className={styles.benefit_emoji}>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Comparison Section */}
        <section className={styles.comparison_section}>
          <div className={styles.container}>
            <div className={styles.comparison_box}>
              <h2 className={styles.section_title}>Tired of re-verifying?</h2>
              <p className={styles.comparison_lead}>
                Every time you want a student discount, you&apos;re asked to prove you&apos;re a student. That means finding your ID card, taking a photo, uploading it, and waiting.
              </p>
              <div className={styles.contrast_split}>
                <div className={styles.old_way_card}>
                  <h3>The Old Way</h3>
                  <ul>
                    <li>Take photo of ID card</li>
                    <li>Upload to unverified third-party websites</li>
                    <li>Wait 24–72 hours for review</li>
                    <li>Repeat on every platform</li>
                    <li>Personal data stored across multiple servers</li>
                  </ul>
                </div>
                <div className={styles.new_way_card}>
                  <h3>The SyncID Way</h3>
                  <ul>
                    <li>Verify once with your institution</li>
                    <li>Share proof with one tap</li>
                    <li>Instant approval in seconds</li>
                    <li>Works everywhere automatically</li>
                    <li>Zero document storage—complete privacy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Security Section (Replacing old verification image with Privacy Vault UI) */}
        <section className={styles.security_section}>
          <div className={styles.container}>
            <div className={styles.security_split}>
              <div className={styles.security_text}>
                <h2 className={styles.section_title}>Your Privacy Is Our Priority</h2>
                <div className={styles.security_body}>
                  <p>
                    We built SyncID with a simple principle: <strong>your data belongs to you.</strong>
                  </p>
                  <ul className={styles.security_checklist}>
                    <li>
                      <span className={styles.sec_check}>✓</span>
                      <span>We never sell your data</span>
                    </li>
                    <li>
                      <span className={styles.sec_check}>✓</span>
                      <span>We never store your academic records</span>
                    </li>
                    <li>
                      <span className={styles.sec_check}>✓</span>
                      <span>We only share what you explicitly approve</span>
                    </li>
                    <li>
                      <span className={styles.sec_check}>✓</span>
                      <span>You can revoke access at any time</span>
                    </li>
                    <li>
                      <span className={styles.sec_check}>✓</span>
                      <span>All data is encrypted end-to-end</span>
                    </li>
                  </ul>
                  <p className={styles.security_subtext}>
                    Your school confirms your enrollment. SyncID creates a secure proof. You choose who gets to see it. That&apos;s it.
                  </p>
                </div>
              </div>

              {/* Zero Knowledge Privacy Vault UI Mockup */}
              <div className={styles.security_visual_side}>
                <div className={styles.vault_box}>
                  <div className={styles.vault_header}>
                    <div className={styles.vault_badge}>
                      <span className={styles.lock_symbol}>🔒</span>
                      <span>Zero-Knowledge Vault</span>
                    </div>
                    <span className={styles.vault_encryption}>AES-256-GCM</span>
                  </div>

                  <div className={styles.vault_records}>
                    <div className={styles.vault_row_green}>
                      <div className={styles.vault_indicator_green}>✓</div>
                      <div className={styles.vault_row_text}>
                        <strong>Device Keypair Attestation</strong>
                        <span>Cryptographically signed on hardware enclave</span>
                      </div>
                    </div>

                    <div className={styles.vault_row_green}>
                      <div className={styles.vault_indicator_green}>✓</div>
                      <div className={styles.vault_row_text}>
                        <strong>Pairwise Merchant Identifiers</strong>
                        <span>Cross-platform tracking mathematically impossible</span>
                      </div>
                    </div>

                    <div className={styles.vault_row_red}>
                      <div className={styles.vault_indicator_red}>✕</div>
                      <div className={styles.vault_row_text}>
                        <strong>Student ID Card Images / Scans</strong>
                        <span>NEVER collected &middot; NEVER stored</span>
                      </div>
                    </div>

                    <div className={styles.vault_row_red}>
                      <div className={styles.vault_indicator_red}>✕</div>
                      <div className={styles.vault_row_text}>
                        <strong>Academic Transcripts & Grades</strong>
                        <span>NEVER collected &middot; NEVER stored</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.vault_footer}>
                    <span>Privacy Guarantee: Complete user sovereignty</span>
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
              <h2 className={styles.section_title}>What Students Are Saying</h2>
            </div>

            <div className={styles.testimonials_grid}>
              <div className={styles.testimonial_card}>
                <p className={styles.testimonial_text}>
                  &ldquo;I used to hate signing up for student discounts because of the document upload process. SyncID made it effortless.&rdquo;
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Chidi O.</strong>
                  <span>University of Lagos &middot; Computer Science</span>
                </div>
              </div>

              <div className={styles.testimonial_card}>
                <p className={styles.testimonial_text}>
                  &ldquo;One app, all my discounts. I got Spotify, GitHub, and Apple Music sorted in five minutes.&rdquo;
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Amina B.</strong>
                  <span>Ahmadu Bello University &middot; Architecture</span>
                </div>
              </div>

              <div className={styles.testimonial_card}>
                <p className={styles.testimonial_text}>
                  &ldquo;The fact that my grades and personal documents aren&apos;t being shared gives me peace of mind. Highly recommend.&rdquo;
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Emeka N.</strong>
                  <span>Federal University of Technology Owerri &middot; Mechanical Eng.</span>
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
            <h2 className={styles.cta_title}>Get SyncID today. It&apos;s free.</h2>
            <p className={styles.cta_body}>
              Join thousands of students who prove their enrollment in one tap.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Download for iOS
                </SnButton>
              </Link>
              <Link href="/for-organizations">
                <SnButton variant="secondary" size="lg">
                  Download for Android
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
