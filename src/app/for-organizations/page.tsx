"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import styles from "./page.module.css";

export default function ForOrganizationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Real-Time Verification",
      desc: "Get instant confirmation of student status directly from partner institutions. No manual review, no delay.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "Higher Conversion Rates",
      desc: "Reduce checkout friction. Students verify in one tap instead of filling out long forms and uploading documents.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Zero Compliance Headaches",
      desc: "You never handle or store student ID cards, transcripts, or personal documents. Reduce your GDPR, NDPR, and data liability.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Developer-Friendly API",
      desc: "RESTful API and webhooks designed for quick integration. Comprehensive documentation, SDKs, and sandbox environment.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Fraud Prevention",
      desc: "Prevent discount abuse with cryptographically verifiable proofs tied directly to active institutional enrollment records.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Growing Student Network",
      desc: "Tap into a rapidly expanding network of verified students across partner universities, polytechnics, and colleges.",
    },
  ];

  const integrationSteps = [
    {
      step: "01",
      title: "Sign Up & Get API Keys",
      desc: "Create your organization account and get instant access to your API keys and sandbox environment.",
    },
    {
      step: "02",
      title: "Integrate with a Few Lines of Code",
      desc: "Add SyncID verification to your checkout, onboarding, or sign-up flow using our REST API or pre-built UI components.",
    },
    {
      step: "03",
      title: "Go Live & Start Verifying",
      desc: "Switch to production and start offering verified student discounts instantly with real-time verification.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      desc: "Perfect for testing and small apps",
      features: [
        "Up to 100 verifications/month",
        "Standard API access",
        "Community support",
        "Sandbox environment",
        "Basic analytics",
      ],
      popular: false,
      ctaText: "Get Started Free",
      ctaVariant: "stroke" as const,
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      desc: "For growing businesses and startups",
      features: [
        "Up to 2,500 verifications/month",
        "Full API & Webhook access",
        "Email & chat support",
        "Sandbox environment",
        "Detailed analytics dashboard",
        "Custom branding options",
      ],
      popular: true,
      ctaText: "Start Free Trial",
      ctaVariant: "primary" as const,
    },
    {
      name: "Scale",
      price: "$299",
      period: "/month",
      desc: "For high-volume platforms and brands",
      features: [
        "Up to 10,000 verifications/month",
        "Priority API throughput",
        "Dedicated support manager",
        "99.9% SLA guarantee",
        "Advanced fraud detection",
        "Custom webhook integrations",
      ],
      popular: false,
      ctaText: "Contact Sales",
      ctaVariant: "stroke" as const,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large enterprises with custom needs",
      features: [
        "Unlimited verifications",
        "Dedicated infrastructure",
        "24/7 phone & Slack support",
        "99.99% SLA guarantee",
        "Custom data processing agreements",
        "On-premise / hybrid options",
      ],
      popular: false,
      ctaText: "Talk to Us",
      ctaVariant: "stroke" as const,
    },
  ];

  const trustHighlights = [
    "No student documents stored on your servers",
    "Real-time institutional verification",
    "GDPR & NDPR compliance built in",
    "Pairwise IDs protect student privacy",
    "Instant revocation upon student departure",
    "99.9% API uptime guarantee",
  ];

  const useCases = [
    {
      icon: "🎵",
      title: "Streaming & Media",
      desc: "Offer student pricing on music, video, and content subscriptions without manual document review.",
    },
    {
      icon: "💻",
      title: "SaaS & Developer Tools",
      desc: "Give students free or discounted access to developer tools, design software, and productivity apps.",
    },
    {
      icon: "🛍️",
      title: "E-Commerce & Retail",
      desc: "Boost sales by offering instant student discounts at checkout with one-click verification.",
    },
    {
      icon: "🍔",
      title: "Food & Delivery",
      desc: "Attract student customers with exclusive meal deals and delivery discounts verified on the spot.",
    },
    {
      icon: "🏦",
      title: "Fintech & Banking",
      desc: "Onboard student users for student accounts, debit cards, and financial products with confidence.",
    },
    {
      icon: "✈️",
      title: "Travel & Hospitality",
      desc: "Provide student travel fares, hotel discounts, and event tickets with instant proof of enrollment.",
    },
  ];

  const faqs = [
    {
      q: "How does verification work?",
      a: "When a user wants to prove their student status on your platform, they initiate a verification request through SyncID. The user approves the request in their app, and your system receives a cryptographically signed confirmation in real time.",
    },
    {
      q: "What data do we receive about the student?",
      a: "You receive only what's necessary: a unique pairwise identifier, confirmation of active enrollment, and (optionally) the institution name. You do not receive personal documents, grades, or sensitive personal data.",
    },
    {
      q: "How long does it take to integrate?",
      a: "Most developers complete basic integration in under an hour using our REST API. We provide comprehensive documentation, code samples, and SDKs.",
    },
    {
      q: "What happens if a student is no longer enrolled?",
      a: "Verification status is queried in real time. If a student has graduated, withdrawn, or is no longer enrolled, the verification will fail. You'll always have current status.",
    },
    {
      q: "Can we try it before committing?",
      a: "Yes. Our Starter plan is completely free and includes up to 100 verifications per month with full sandbox access. No credit card required.",
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
                  Stop losing customers to <br />
                  <span className={styles.gradient_text}>slow verification.</span>
                </h1>

                <p className={styles.hero_subtitle}>
                  Integrate SyncID and start verifying students in minutes—without storing documents or risking compliance issues.
                </p>

                <div className={styles.hero_cta_group}>
                  <Link href="/contact">
                    <SnButton variant="primary" size="lg">
                      Get Started Free
                    </SnButton>
                  </Link>
                  <Link href="#pricing">
                    <SnButton variant="stroke" size="lg">
                      View Pricing
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* Live Verification Console Preview (Replacing old image) */}
              <div className={styles.hero_image_side}>
                <div className={styles.org_dashboard_card}>
                  <div className={styles.dash_header}>
                    <div className={styles.dash_brand}>
                      <span className={styles.dash_api_badge}>LIVE API</span>
                      <strong>SyncNexa Business Console</strong>
                    </div>
                    <span className={styles.dash_status_ok}>200 OK</span>
                  </div>

                  <div className={styles.dash_stats_grid}>
                    <div className={styles.dash_stat_card}>
                      <small>VERIFIED THIS MONTH</small>
                      <strong>14,892</strong>
                      <span className={styles.dash_stat_growth}>+28.4% vs last month</span>
                    </div>
                    <div className={styles.dash_stat_card}>
                      <small>PASS RATE</small>
                      <strong>99.8%</strong>
                      <span className={styles.dash_stat_instant}>Instant &middot; 0 docs</span>
                    </div>
                  </div>

                  <div className={styles.dash_live_feed}>
                    <div className={styles.feed_header}>
                      <span>Live Verification Stream</span>
                      <small className={styles.live_pulse_dot}>&bull; Connected</small>
                    </div>
                    <div className={styles.feed_row}>
                      <span className={styles.feed_icon}>⚡</span>
                      <div className={styles.feed_info}>
                        <strong>@anthony &middot; FUTO</strong>
                        <small>Spotify Student Plan &middot; Verified</small>
                      </div>
                      <span className={styles.feed_time}>2s ago</span>
                    </div>
                    <div className={styles.feed_row}>
                      <span className={styles.feed_icon}>⚡</span>
                      <div className={styles.feed_info}>
                        <strong>@sarah &middot; UNILAG</strong>
                        <small>GitHub Dev Pack &middot; Verified</small>
                      </div>
                      <span className={styles.feed_time}>14s ago</span>
                    </div>
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
              <h2 className={styles.section_title}>Student verification shouldn&apos;t kill conversions.</h2>
              <div className={styles.problem_text}>
                <p>
                  Every time a student signs up for your discount, your platform asks them to prove they&apos;re enrolled. They upload a document. You wait. They wait. And while they wait, they leave.
                </p>
                <p>
                  That&apos;s a broken experience. And it&apos;s costing you customers.
                </p>
                <p className={styles.problem_highlight}>
                  Manual review is slow. Third-party aggregators store too much data. There has to be a better way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How SyncID Helps Organizations Section */}
        <section className={styles.helps_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Instant verification. Zero friction.</h2>
              <p className={styles.section_subtitle}>
                SyncID lets students prove their enrollment in one tap. Your system gets a cryptographically verified confirmation in real time.
              </p>
              <div className={styles.one_call_highlight}>
                One API call. Verified student status. Zero documents stored.
              </div>
            </div>

            <div className={styles.cards_grid_3}>
              {benefits.map((benefit, idx) => (
                <div key={idx} className={styles.benefit_card}>
                  <div className={styles.card_icon_wrap}>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works (3 Steps) */}
        <section className={styles.how_it_works_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Three steps to instant verification</h2>
            </div>

            <div className={styles.steps_grid_3}>
              {integrationSteps.map((item, idx) => (
                <div key={idx} className={styles.step_card}>
                  <div className={styles.step_badge}>{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. For Developers Section */}
        <section className={styles.developers_section}>
          <div className={styles.container}>
            <div className={styles.dev_split}>
              <div className={styles.dev_content}>
                <h2 className={styles.section_title}>Built for developers</h2>
                <p className={styles.dev_subtitle}>
                  We care about developer experience. Our API is simple, well-documented, and easy to test.
                </p>

                <div className={styles.dev_checklist}>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>RESTful API with JSON payloads</span>
                  </div>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>Webhooks for real-time status updates</span>
                  </div>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>SDKs for Node.js, Python, PHP, and Go</span>
                  </div>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>Sandbox environment with test credentials</span>
                  </div>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>Pre-built UI components for React, Vue, and vanilla JS</span>
                  </div>
                </div>

                <div className={styles.dev_cta}>
                  <Link href="/contact">
                    <SnButton variant="primary" size="md">
                      Request API Documentation
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* Code Snippet Terminal */}
              <div className={styles.dev_code_terminal}>
                <div className={styles.terminal_header}>
                  <span className={styles.term_dot_red}></span>
                  <span className={styles.term_dot_yellow}></span>
                  <span className={styles.term_dot_green}></span>
                  <span className={styles.term_title}>verify-student.ts</span>
                </div>
                <pre className={styles.code_snippet}>
                  <code>{`// Verify a student in 3 lines of code
import { SyncNexaClient } from '@syncnexa/sdk';

const client = new SyncNexaClient({
  apiKey: process.env.SYNCNEXA_API_KEY,
});

const verification = await client.verify({
  pairwiseId: 'pw_user_8f92j1',
  requiredStatus: 'ACTIVE_ENROLLED',
});

if (verification.isEnrolled) {
  // Apply student discount instantly!
  applyDiscount(verification.pairwiseId);
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pricing Section */}
        <section className={styles.pricing_section} id="pricing">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Simple, transparent pricing</h2>
              <p className={styles.section_subtitle}>
                Start free and scale as you grow. No hidden fees, no long-term contracts.
              </p>
            </div>

            <div className={styles.pricing_grid}>
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`${styles.pricing_card} ${
                    plan.popular ? styles.popular_card : ""
                  }`}
                >
                  {plan.popular && (
                    <span className={styles.popular_badge}>Most Popular</span>
                  )}
                  <h3>{plan.name}</h3>
                  <div className={styles.price_tag}>
                    <span className={styles.price_amount}>{plan.price}</span>
                    <span className={styles.price_period}>{plan.period}</span>
                  </div>
                  <p className={styles.plan_desc}>{plan.desc}</p>
                  <ul className={styles.plan_features}>
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className={styles.feat_check}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.plan_cta}>
                    <Link href="/contact">
                      <SnButton variant={plan.ctaVariant} size="md">
                        {plan.ctaText}
                      </SnButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Enterprise & Security Trust Section */}
        <section className={styles.trust_section}>
          <div className={styles.container}>
            <div className={styles.trust_box}>
              <h2 className={styles.section_title}>Enterprise-grade trust</h2>
              <p className={styles.section_subtitle}>
                Built for companies that take privacy, security, and compliance seriously.
              </p>

              <div className={styles.trust_grid}>
                {trustHighlights.map((item, idx) => (
                  <div key={idx} className={styles.trust_item}>
                    <svg
                      className={styles.shield_icon}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Use Cases Section */}
        <section className={styles.use_cases_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Who uses SyncNexa?</h2>
              <p className={styles.section_subtitle}>
                From startups to global brands, companies across industries use SyncID.
              </p>
            </div>

            <div className={styles.use_cases_grid}>
              {useCases.map((useCase, idx) => (
                <div key={idx} className={styles.use_case_card}>
                  <div className={styles.use_case_emoji}>{useCase.icon}</div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.desc}</p>
                </div>
              ))}
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
            <h2 className={styles.cta_title}>Ready to streamline verification?</h2>
            <p className={styles.cta_body}>
              Start verifying students in minutes. No credit card required.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/contact">
                <SnButton variant="primary" size="lg">
                  Get Started Free
                </SnButton>
              </Link>
              <Link href="/contact">
                <SnButton variant="secondary" size="lg">
                  Talk to Sales
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
