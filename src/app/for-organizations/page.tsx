"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import styles from "./page.module.css";

export default function ForOrganizationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      title: "Higher Conversion Rates",
      desc: "When verification takes seconds instead of days, more students complete signup. Fewer drop-offs. More revenue.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      title: "Zero Document Storage",
      desc: "You never see, store, or handle sensitive student documents. That means less compliance risk and fewer legal headaches.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Real-Time Trust",
      desc: "SyncID confirms student status in real time. No fake IDs. No expired credentials. No guesswork.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  const integrationSteps = [
    {
      number: "1",
      title: "Create Your App",
      desc: "Sign up on the SyncNexa Organization Dashboard. Create an app for your platform and get your API keys instantly.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Add the SyncID Button",
      desc: 'Drop in the "Verify with SyncID" button. The OAuth flow handles consent and verification automatically.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Receive Verified Status",
      desc: "After a student approves, you get a simple response: verified student status, institution name, and a pairwise ID. That's it.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  const developerBullets = [
    "REST API with OAuth 2.0",
    "SDKs for Node.js, Python, and more",
    "Sandbox environment for testing",
    "Webhooks for real-time updates",
    "Detailed documentation and examples",
  ];

  const pricingPlans = [
    {
      name: "Starter Plan",
      price: "$29",
      period: "/month",
      desc: "For growing startups exploring student benefits.",
      badge: null,
      features: [
        "Up to 1,000 verifications per month",
        "Pay as you grow ($0.03/extra)",
        "Standard API access",
        "Community support",
      ],
      ctaLabel: "Get Started",
      ctaVariant: "stroke" as const,
    },
    {
      name: "Growth Plan",
      price: "$249",
      period: "/month",
      desc: "For scaling platforms expanding student adoption.",
      badge: "Most Popular",
      features: [
        "Up to 10,000 verifications per month",
        "Priority email & chat support",
        "Webhooks & real-time revocation",
        "Custom OAuth branding",
      ],
      ctaLabel: "Start Growth",
      ctaVariant: "primary" as const,
    },
    {
      name: "Business Plan",
      price: "$999",
      period: "/month",
      desc: "For high-volume commerce & national brands.",
      badge: null,
      features: [
        "Up to 100,000 verifications per month",
        "Dedicated support & 99.9% SLA",
        "Advanced analytics & audit logs",
        "Multi-app management",
      ],
      ctaLabel: "Start Business",
      ctaVariant: "stroke" as const,
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      period: "",
      desc: "For global enterprises & bespoke integrations.",
      badge: null,
      features: [
        "Unlimited verifications",
        "Custom integrations & volume discounts",
        "Dedicated Technical Account Manager",
        "Custom security reviews & BAA",
      ],
      ctaLabel: "Contact Sales",
      ctaVariant: "stroke" as const,
    },
  ];

  const trustBullets = [
    "Privacy by design",
    "GDPR and CCPA ready",
    "Real-time status checks",
    "Pairwise IDs that prevent cross-platform tracking",
    "No academic data storage",
    "Secure and encrypted from end to end",
  ];

  const useCases = [
    {
      title: "Streaming & Music",
      desc: "Offer student discounts without the document verification headache.",
      icon: "🎵",
    },
    {
      title: "Software & Developer Tools",
      desc: "Give students free or discounted access to your tools with instant eligibility checks.",
      icon: "💻",
    },
    {
      title: "Food & Retail",
      desc: "Verify students for meal deals and in-store discounts without manual ID checks.",
      icon: "🍔",
    },
    {
      title: "Events & Conferences",
      desc: "Check student status at entry points instantly using the public verification portal.",
      icon: "🎟️",
    },
    {
      title: "Financial Services",
      desc: "Offer student accounts and benefits with confidence that the status is current and verified.",
      icon: "🏦",
    },
  ];

  const faqs = [
    {
      q: "How long does integration take?",
      a: "Most teams integrate within a day. With our drop-in widgets, you can be live in under an hour.",
    },
    {
      q: "Do we see student names or documents?",
      a: "No. You receive a pairwise ID, student status, and institution name only. No personal documents ever pass through our system.",
    },
    {
      q: "What happens when a student graduates?",
      a: "Their status is automatically revoked. You can also subscribe to webhooks to receive real-time updates.",
    },
    {
      q: "Is there a sandbox for testing?",
      a: "Yes. Every organization gets access to a full sandbox environment with mock data.",
    },
    {
      q: "How do you handle fraud?",
      a: "Because we verify directly with schools, forged documents and fake IDs are eliminated. You get real-time confirmation from the source.",
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
                  Stop losing customers to <span className={styles.gradient_text}>slow verification.</span>
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
                  <Link href="#developers">
                    <SnButton variant="stroke" size="lg">
                      View API Docs
                    </SnButton>
                  </Link>
                </div>
              </div>

              <div className={styles.hero_image_side}>
                <Image
                  src="/org_image.svg"
                  alt="SyncNexa Organization Dashboard Preview"
                  width={520}
                  height={420}
                  priority
                  className={styles.responsive_img}
                />
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
                <p className={styles.problem_highlight}>
                  That&apos;s a broken experience. And it&apos;s costing you customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How SyncID Helps Organizations */}
        <section className={styles.helps_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Instant verification. Zero friction.</h2>
              <p className={styles.section_subtitle}>
                SyncID lets students prove their enrollment with a single tap. No uploads. No manual review. No delay.
              </p>
              <div className={styles.one_call_highlight}>
                For your team, it&apos;s one API call. For your customers, it&apos;s one approval.
              </div>
            </div>

            <div className={styles.cards_grid_3}>
              {benefits.map((card, idx) => (
                <div key={idx} className={styles.benefit_card}>
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

        {/* 4. How Integration Works */}
        <section className={styles.how_it_works_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Go live in minutes.</h2>
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

        {/* 5. For Developers Section */}
        <section className={styles.developers_section} id="developers">
          <div className={styles.container}>
            <div className={styles.dev_split}>
              <div className={styles.dev_text}>
                <h2 className={styles.section_title}>Built for developers.</h2>
                <p className={styles.dev_subtitle}>
                  Our API is clean, modern, and fully documented. Whether you&apos;re a two-person startup or a global enterprise, integration is straightforward.
                </p>

                <div className={styles.dev_checklist}>
                  {developerBullets.map((bullet, idx) => (
                    <div key={idx} className={styles.dev_bullet_item}>
                      <div className={styles.code_check_icon}>✓</div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.dev_cta}>
                  <Link href="/contact">
                    <SnButton variant="primary" size="md">
                      Explore API Documentation
                    </SnButton>
                  </Link>
                </div>
              </div>

              <div className={styles.dev_code_terminal}>
                <div className={styles.terminal_header}>
                  <span className={styles.term_dot_red}></span>
                  <span className={styles.term_dot_yellow}></span>
                  <span className={styles.term_dot_green}></span>
                  <span className={styles.term_title}>verify-student.ts</span>
                </div>
                <pre className={styles.code_snippet}>
                  <code>
{`// Instant Verification via SyncNexa API
const response = await fetch("https://api.syncnexa.co/v1/verify", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${process.env.SYNCNEXA_API_KEY}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    syncTag: "@student_tag",
    scope: ["status", "institution"]
  })
});

const { verified, institution, pairwiseId } = await response.json();
console.log(\`Student status: \${verified ? "ACTIVE" : "INACTIVE"}\`);`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pricing Section */}
        <section className={styles.pricing_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Simple pricing. No surprises.</h2>
            </div>

            <div className={styles.pricing_grid}>
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`${styles.pricing_card} ${plan.badge ? styles.popular_card : ""}`}
                >
                  {plan.badge && (
                    <div className={styles.popular_badge}>{plan.badge}</div>
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
                      <SnButton
                        variant={plan.ctaVariant}
                        size="md"
                        style={{ width: "100%" }}
                      >
                        {plan.ctaLabel}
                      </SnButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Trust Section */}
        <section className={styles.trust_section}>
          <div className={styles.container}>
            <div className={styles.trust_box}>
              <h2 className={styles.section_title}>Why organizations trust SyncNexa</h2>

              <div className={styles.trust_grid}>
                {trustBullets.map((bullet, idx) => (
                  <div key={idx} className={styles.trust_item}>
                    <div className={styles.shield_icon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span>{bullet}</span>
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
              <h2 className={styles.section_title}>Who uses SyncID?</h2>
            </div>

            <div className={styles.use_cases_grid}>
              {useCases.map((uc, idx) => (
                <div key={idx} className={styles.use_case_card}>
                  <div className={styles.use_case_emoji}>{uc.icon}</div>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className={styles.faq_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Common questions from organizations</h2>
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
            <h2 className={styles.cta_title}>Ready to verify students instantly?</h2>
            <p className={styles.cta_body}>
              Join organizations already using SyncID to boost conversions and reduce fraud.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/contact">
                <SnButton variant="primary" size="lg">
                  Get Started Free
                </SnButton>
              </Link>
              <Link href="/contact">
                <SnButton variant="secondary" size="lg">
                  Contact Sales
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
