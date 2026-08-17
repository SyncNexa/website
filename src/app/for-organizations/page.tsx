"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import styles from "./page.module.css";

export default function ForOrganizationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
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
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Real-Time Verification (<18ms)",
      desc: "Get instant confirmation of student status directly from partner institutions. Zero manual review queues and zero drop-off.",
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
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "+38% Higher Conversion",
      desc: "Replace lengthy document upload forms with a 1-tap instant check. Convert students on the spot during checkout.",
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Zero Compliance Liability",
      desc: "You never ingest or store student ID scans, transcripts, or personal PII. Eliminate GDPR and NDPR data breach risk.",
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
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Developer-Friendly REST API",
      desc: "Clean JSON endpoints, webhooks, and pre-built React/Vue components designed to go live in under an afternoon.",
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
      title: "Cryptographic Fraud Prevention",
      desc: "Stop fake student IDs and forged transcripts. Proofs are mathematically signed by root university keypairs.",
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
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Expanding Student Network",
      desc: "Instantly tap into hundreds of thousands of verified students across accredited universities and colleges.",
      blobColor: "#ffaa01",
    },
  ];

  const integrationSteps = [
    {
      step: "01",
      title: "Get API Keys & Sandbox Access",
      desc: "Register your organization, generate test credentials, and experiment in our full-fidelity staging sandbox.",
    },
    {
      step: "02",
      title: "Integrate with 3 Lines of Code",
      desc: "Embed our lightweight SDK or make a direct REST call during your checkout or onboarding verification flow.",
    },
    {
      step: "03",
      title: "Go Live with Instant Attestations",
      desc: "Switch to production. Real-time verification runs in under 18ms with 99.9% uptime SLA.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      desc: "For testing, indie developers, and early pilot apps",
      features: [
        "Up to 100 verifications / mo",
        "Standard REST API access",
        "Full Sandbox environment",
        "Community & Discord support",
        "Basic analytics dashboard",
      ],
      popular: false,
      ctaText: "Get Started Free",
      ctaVariant: "stroke" as const,
      blobColor: "#04d69d",
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      desc: "For high-growth startups & scale-ups",
      features: [
        "Up to 2,500 verifications / mo",
        "REST API & Webhooks access",
        "Full Sandbox & Test Suites",
        "Email & Chat support (SLA 4h)",
        "Detailed conversion analytics",
        "Custom checkout branding",
      ],
      popular: true,
      ctaText: "Start Free Trial",
      ctaVariant: "primary" as const,
      blobColor: "#006d50",
    },
    {
      name: "Scale",
      price: "$299",
      period: "/month",
      desc: "For high-volume media & consumer brands",
      features: [
        "Up to 10,000 verifications / mo",
        "Priority API throughput (<15ms)",
        "Dedicated account manager",
        "99.9% Uptime SLA guarantee",
        "Advanced fraud anomaly detection",
        "Custom webhook endpoints",
      ],
      popular: false,
      ctaText: "Upgrade to Scale",
      ctaVariant: "stroke" as const,
      blobColor: "#ffaa01",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For global enterprises with bespoke compliance",
      features: [
        "Unlimited verifications volume",
        "Dedicated cloud infrastructure",
        "24/7 Phone & Slack channel support",
        "99.99% Enterprise SLA guarantee",
        "Custom Data Processing Agreement",
        "Custom SIS on-prem connectors",
      ],
      popular: false,
      ctaText: "Talk to Sales",
      ctaVariant: "stroke" as const,
      blobColor: "#04d69d",
    },
  ];

  const useCases = [
    {
      icon: "🎵",
      title: "Streaming & Media",
      desc: "Offer verified student rates on subscriptions without document fraud or manual backlogs.",
      blobColor: "#04d69d",
    },
    {
      icon: "💻",
      title: "SaaS & Developer Tools",
      desc: "Grant students free software packs and pro licenses with instant verification.",
      blobColor: "#006d50",
    },
    {
      icon: "🛍️",
      title: "E-Commerce & Retail",
      desc: "Boost checkout conversion by auto-applying student discounts in under 18ms.",
      blobColor: "#ffaa01",
    },
    {
      icon: "🍔",
      title: "Food & Campus Delivery",
      desc: "Drive daily orders with instant campus verification on food ordering apps.",
      blobColor: "#04d69d",
    },
    {
      icon: "🏦",
      title: "Fintech & Banking",
      desc: "Onboard students to specialized digital bank accounts and credit products with confidence.",
      blobColor: "#006d50",
    },
    {
      icon: "✈️",
      title: "Travel & Hospitality",
      desc: "Offer student transit tickets, train passes, and hotel discounts with zero paperwork.",
      blobColor: "#ffaa01",
    },
  ];

  const faqs = [
    {
      q: "How does the verification roundtrip work technically?",
      a: "When a user initiates verification on your checkout, they scan or approve a SyncID prompt. SyncNexa returns a signed JSON attestation in <18ms confirming active enrollment status. Zero documents are shared.",
    },
    {
      q: "What user data does our business receive?",
      a: "You receive a pairwise pseudonymous student ID, the enrollment status boolean (e.g. ACTIVE_ENROLLED), and the verified institution name. No transcripts, personal IDs, or contact lists.",
    },
    {
      q: "How quickly can our engineering team integrate the API?",
      a: "Most developers go from reading the documentation to testing successful verifications in our sandbox in under an hour using our Node.js, Python, or Go SDKs.",
    },
    {
      q: "What happens if a student drops out or graduates?",
      a: "Status queries are verified against live institutional SIS registries. As soon as a student is no longer active, subsequent verifications will accurately return inactive.",
    },
    {
      q: "Can we test the platform for free?",
      a: "Yes. Our Starter plan is completely free and includes 100 live verifications per month with full sandbox access. No credit card required.",
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
                  DEVELOPER & BUSINESS API
                </span>
                <h1 className={styles.hero_title}>
                  Stop losing revenue to <br />
                  <span className={styles.gradient_text}>
                    slow verification.
                  </span>
                </h1>

                <p className={styles.hero_subtitle}>
                  Verify students in &lt;18ms with a single API call. Boost
                  checkout conversion by 38% while eliminating document storage
                  and regulatory compliance headaches.
                </p>

                <div className={styles.hero_cta_group}>
                  <Link href="#pricing">
                    <SnButton variant="primary" size="lg">
                      Start Integration
                    </SnButton>
                  </Link>
                  <Link href="#developer-api">
                    <SnButton variant="stroke" size="lg">
                      View API Specs
                    </SnButton>
                  </Link>
                </div>
              </div>

              {/* API Live Console Preview */}
              <div className={styles.hero_ui_side}>
                <GlassBlobCard
                  className={styles.api_console_card}
                  blobColor="#04d69d"
                  secondaryBlobColor="#ffaa01"
                >
                  <div className={styles.console_card_top}>
                    <div className={styles.console_status}>
                      <span className={styles.pulse_dot}></span>
                      <span>SYNCNEXA EDGE RELAY LIVE</span>
                    </div>
                    <span className={styles.console_latency}>18.2ms AVG</span>
                  </div>

                  <div className={styles.console_metrics_grid}>
                    <div className={styles.console_metric_box}>
                      <span>BENCHMARK LATENCY</span>
                      <strong>18.2ms</strong>
                    </div>
                    <div className={styles.console_metric_box}>
                      <span>CONVERSION SURGE</span>
                      <strong>+38.4%</strong>
                    </div>
                    <div className={styles.console_metric_box}>
                      <span>PII STORED</span>
                      <strong>0 Bytes</strong>
                    </div>
                    <div className={styles.console_metric_box}>
                      <span>UPTIME SLA</span>
                      <strong>99.99%</strong>
                    </div>
                  </div>

                  <div className={styles.console_terminal_box}>
                    <span>POST /v1/verify HTTP/1.1</span>
                    <span>Host: api.syncnexa.co &bull; Status: 200 OK</span>
                    <span>{`{ "status": "ACTIVE_ENROLLED", "latency_ms": 17.8 }`}</span>
                  </div>
                </GlassBlobCard>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 2. Benefits Matrix */}
        <FadeInSection
          className={styles.benefits_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>BUSINESS VALUE</span>
              <h2 className={styles.section_title}>
                Engineered for High-Growth Platforms
              </h2>
              <p className={styles.section_subtitle}>
                Unlock verified student volume with zero friction, zero document
                liability, and mathematical certainty.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              {benefits.map((benefit, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={styles.benefit_card}
                  blobColor={benefit.blobColor}
                >
                  <div className={styles.card_icon_wrap}>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 3. Integration in 3 Steps */}
        <FadeInSection
          className={styles.how_it_works_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>FAST INTEGRATION</span>
              <h2 className={styles.section_title}>
                Three Steps to Instant Verification
              </h2>
              <p className={styles.section_subtitle}>
                From sandbox setup to production verification in under an
                afternoon.
              </p>
            </div>

            <div className={styles.how_timeline_wrap}>
              <div className={styles.how_vertical_line} aria-hidden="true" />

              <div className={styles.how_steps_list}>
                {integrationSteps.map((item, idx) => (
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

        {/* 4. For Developers Section (with Terminal Code Snippet) */}
        <FadeInSection
          className={styles.developers_section}
          id="developer-api"
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.dev_split}>
              <div className={styles.dev_content}>
                <span className={styles.section_badge}>DEVELOPER EXPERIENCE</span>
                <h2 className={styles.section_title}>Built for Developers</h2>
                <p className={styles.dev_subtitle}>
                  We care deeply about clean API design. Our REST endpoints are
                  declarative, fully typed, and backed by robust webhooks and
                  SDKs.
                </p>

                <div className={styles.dev_checklist}>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>RESTful API with predictable JSON payloads</span>
                  </div>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>Webhook dispatching for asynchronous attestation events</span>
                  </div>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>Official SDKs for Node.js, TypeScript, Python, and Go</span>
                  </div>
                  <div className={styles.dev_bullet_item}>
                    <span className={styles.code_check_icon}>✓</span>
                    <span>Pre-built UI verification components for React and Vue</span>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <SnButton variant="primary" size="md">
                      Request Full API Reference
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
        </FadeInSection>

        {/* 5. Pricing & Tiers Section */}
        <FadeInSection
          className={styles.pricing_section}
          id="pricing"
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>TRANSPARENT PLANS</span>
              <h2 className={styles.section_title}>Simple, Scalable Pricing</h2>
              <p className={styles.section_subtitle}>
                Start for free in sandbox, then scale seamlessly with predictable
                volume tiers.
              </p>
            </div>

            <div className={styles.pricing_grid_4}>
              {pricingPlans.map((plan, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={`${styles.pricing_card} ${
                    plan.popular ? styles.popular_card : ""
                  }`}
                  blobColor={plan.blobColor}
                >
                  {plan.popular && (
                    <span className={styles.popular_badge}>MOST POPULAR</span>
                  )}
                  <h3>{plan.name}</h3>
                  <div className={styles.price_row}>
                    <span className={styles.price_amount}>{plan.price}</span>
                    <span className={styles.price_period}>{plan.period}</span>
                  </div>
                  <p className={styles.price_desc}>{plan.desc}</p>

                  <div className={styles.features_list}>
                    {plan.features.map((f, fi) => (
                      <div key={fi} className={styles.feature_item}>
                        <span className={styles.feature_check}>✓</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <SnButton variant={plan.ctaVariant} size="md">
                      {plan.ctaText}
                    </SnButton>
                  </Link>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 6. Use Cases Section */}
        <FadeInSection
          className={styles.use_cases_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>INDUSTRY VERTICALS</span>
              <h2 className={styles.section_title}>Tailored for Every Sector</h2>
              <p className={styles.section_subtitle}>
                Powering student discounts across media, developer tooling,
                retail, and fintech.
              </p>
            </div>

            <div className={styles.use_cases_grid}>
              {useCases.map((uc, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={styles.use_case_card}
                  blobColor={uc.blobColor}
                >
                  <span className={styles.use_case_icon}>{uc.icon}</span>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 7. FAQ Accordion Section */}
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
                Everything you need to know about integrating and scaling with
                SyncNexa.
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

        {/* 8. Call to Action Launchpad */}
        <FadeInSection
          className={styles.cta_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.cta_container}>
            <span className={styles.cta_badge}>READY TO INTEGRATE?</span>
            <h2 className={styles.cta_title}>Start Verifying in Minutes</h2>
            <p className={styles.cta_body}>
              Get your API keys, test in our staging sandbox, and launch verified
              student discounts with sub-20ms latency today.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/contact">
                <SnButton variant="primary" size="lg">
                  Create Organization Account
                </SnButton>
              </Link>
              <Link href="mailto:business@syncnexa.co">
                <SnButton variant="stroke" size="lg">
                  Contact Solutions Engineer
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
