"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import styles from "./page.module.css";

export default function SyncIdPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      number: "1",
      title: "Download the App",
      desc: "Get SyncID from the Google Play Store.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Create Your SyncTag",
      desc: "Choose a public handle like @yourname. This is how organizations and friends can find you.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Verify Your Enrollment",
      desc: "Log in through your school's system once. SyncID confirms you're a currently enrolled student.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      number: "4",
      title: "Use It Everywhere",
      desc: 'Whenever a platform offers student benefits, tap "Verify with SyncID" and approve. That\'s it.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "One-Time Verification",
      desc: "Verify once. Done. Use it on any platform without repeating the process.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      title: "Privacy Control",
      desc: "You see exactly what's being shared before you approve. Nothing is shared without your consent.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Revoke Access Anytime",
      desc: "Changed your mind? Remove an organization's access with a single tap.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      title: "Free Forever",
      desc: "SyncID is free for students. No hidden fees. No premium required for core verification.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
    },
    {
      title: "Secure Recovery",
      desc: "Lost your device? No worries. Your trusted contacts can help you regain access safely.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  const benefits = [
    "Student discounts on music and streaming platforms",
    "Free or discounted software and developer tools",
    "Food deals and meal perks",
    "Exclusive event access",
    "Scholarships and educational resources",
    "And more as we add partners",
  ];

  const securityBullets = [
    "Your documents are never stored on our servers",
    "You approve every verification request",
    "Organizations only see what you allow",
    "Revoke access anytime, instantly",
  ];

  const testimonials = [
    {
      quote: "I claimed my student discount in less than a minute. No uploads, no waiting. I wish every app worked like this.",
      author: "Student User",
      role: "Engineering Major",
    },
    {
      quote: "The privacy part sold me. I can see exactly what each app gets. Nothing more.",
      author: "Student User",
      role: "Computer Science Student",
    },
    {
      quote: "Setup took two minutes. Now I use it every day for food deals near campus.",
      author: "Student User",
      role: "Undergraduate Student",
    },
  ];

  const faqs = [
    {
      q: "Is SyncID really free?",
      a: "Yes. SyncID is completely free for students. Core verification and credential storage cost nothing.",
    },
    {
      q: "What data does SyncID collect?",
      a: "We collect only what's needed: your SyncTag, your public key, and your enrollment status. No academic records. No browsing history. No personal documents.",
    },
    {
      q: "Can I revoke an organization's access?",
      a: "Yes. Go to your Authorized Organizations list and remove any organization. Their access ends immediately.",
    },
    {
      q: "What happens when I graduate?",
      a: "Your student credential automatically expires when your school confirms you're no longer enrolled. You'll always keep your SyncTag for future use.",
    },
    {
      q: "Do I need to re-verify every semester?",
      a: "It depends on your school. Some credentials last the full academic year. Others may need a quick refresh each semester.",
    },
    {
      q: "What if I lose my phone?",
      a: "Your identity isn't lost. Use your trusted contacts or backup phrase to recover your account securely.",
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
                  Your student identity. <span className={styles.gradient_text}>One tap away.</span>
                </h1>
                <p className={styles.hero_subtitle}>
                  SyncID is a digital student identity that proves your enrollment status instantly—without sharing more than you need to.
                </p>
                <div className={styles.hero_cta_group}>
                  <Link href="#download">
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
              <div className={styles.hero_image_side}>
                <Image
                  src="/student_image.svg"
                  alt="SyncID Student Mobile App Preview"
                  width={520}
                  height={480}
                  priority
                  className={styles.responsive_img}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. What Is SyncID Section */}
        <section className={styles.what_is_section}>
          <div className={styles.container}>
            <div className={styles.what_is_box}>
              <h2 className={styles.section_title}>What is SyncID?</h2>
              <p className={styles.what_is_lead}>
                SyncID is a free mobile app that verifies your student status once and lets you use that verification anywhere student benefits exist.
              </p>
              <div className={styles.no_more_grid}>
                <div className={styles.no_more_item}>
                  <div className={styles.x_badge}>✕</div>
                  <span>No more uploading your ID card to every platform.</span>
                </div>
                <div className={styles.no_more_item}>
                  <div className={styles.x_badge}>✕</div>
                  <span>No more waiting days for approval.</span>
                </div>
                <div className={styles.no_more_item}>
                  <div className={styles.x_badge}>✕</div>
                  <span>No more sharing documents that should stay private.</span>
                </div>
              </div>
              <div className={styles.control_highlight}>
                <strong>SyncID puts you in control.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How SyncID Works Section */}
        <section className={styles.how_it_works_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Set up once. Use it everywhere.</h2>
            </div>

            <div className={styles.steps_grid_4}>
              {steps.map((step, idx) => (
                <div key={idx} className={styles.step_card}>
                  <div className={styles.step_header}>
                    <div className={styles.step_badge}>Step {step.number}</div>
                    <div className={styles.step_icon}>{step.icon}</div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section className={styles.features_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Built with students in mind</h2>
            </div>

            <div className={styles.features_grid}>
              {features.map((feat, idx) => (
                <div key={idx} className={styles.feature_card}>
                  <div className={styles.feature_icon_wrap}>
                    {feat.icon}
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What You Can Access Section */}
        <section className={styles.unlock_section}>
          <div className={styles.container}>
            <div className={styles.unlock_split}>
              <div className={styles.unlock_text}>
                <h2 className={styles.section_title}>What SyncID unlocks</h2>
                <p className={styles.unlock_lead}>
                  Verified students get real benefits. Here&apos;s what your SyncID can do:
                </p>

                <ul className={styles.benefits_list}>
                  {benefits.map((b, idx) => (
                    <li key={idx}>
                      <span className={styles.check_circle}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.unlock_graphic}>
                <div className={styles.card_perks_display}>
                  <div className={styles.perk_pill}>🎵 Music Streaming Discounts</div>
                  <div className={styles.perk_pill}>💻 Developer & Cloud Credits</div>
                  <div className={styles.perk_pill}>🍔 Campus Meal Deals</div>
                  <div className={styles.perk_pill}>🎟️ Student Event Passes</div>
                  <div className={styles.perk_pill}>📚 Academic Grant Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. For Students Already Tired of Re-Verifying */}
        <section className={styles.tired_section}>
          <div className={styles.container}>
            <div className={styles.tired_banner}>
              <h2>Tired of proving you&apos;re a student?</h2>
              <p>
                We get it. You&apos;ve uploaded your ID card enough times. SyncID ends that.
              </p>
              <div className={styles.tired_tagline}>
                One verification. One tap. Everywhere.
              </div>
            </div>
          </div>
        </section>

        {/* 7. Security Section */}
        <section className={styles.security_section}>
          <div className={styles.container}>
            <div className={styles.security_grid}>
              <div className={styles.security_text}>
                <h2 className={styles.section_title}>Your data stays yours.</h2>
                <p className={styles.security_lead}>
                  SyncID never stores your academic records. Your school remains the source of truth. We simply confirm your status when you choose to share it.
                </p>

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

              <div className={styles.security_image_wrap}>
                <Image
                  src="/verification_image.svg"
                  alt="Cryptographic Zero-Knowledge Verification"
                  width={500}
                  height={380}
                  className={styles.responsive_img}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials Section */}
        <section className={styles.testimonials_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Students love it.</h2>
            </div>

            <div className={styles.testimonials_grid}>
              {testimonials.map((t, idx) => (
                <div key={idx} className={styles.testimonial_card}>
                  <div className={styles.quote_icon}>&ldquo;</div>
                  <p className={styles.testimonial_text}>{t.quote}</p>
                  <div className={styles.testimonial_user}>
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
              <h2 className={styles.section_title}>Common questions</h2>
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
        <section className={styles.cta_section} id="download">
          <div className={styles.cta_container}>
            <h2 className={styles.cta_title}>Ready to verify once and use it everywhere?</h2>
            <p className={styles.cta_body}>
              Join students already using SyncID.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="#download">
                <SnButton variant="primary" size="lg">
                  Get SyncID Free
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
