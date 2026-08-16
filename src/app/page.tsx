import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <div className={styles.hero_container}>
            <h1 className={styles.hero_title}>
              Your Identity, <span className={styles.gradient_text}>Simplified.</span>
            </h1>

            <p className={styles.hero_subtitle}>
              SyncNexa builds trust infrastructure for the digital world. Verify once. Prove anywhere. Without sharing more than you need to.
            </p>

            <div className={styles.hero_cta_group}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Get Started
                </SnButton>
              </Link>
              <Link href="#how-it-works">
                <SnButton variant="stroke" size="lg">
                  Learn More
                </SnButton>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Trust Bar (Social Proof Strip) */}
        <section className={styles.trust_bar}>
          <div className={styles.container}>
            <p className={styles.trust_heading}>
              Trusted by forward-thinking institutions and organizations.
            </p>
            <div className={styles.trust_logos}>
              <div className={styles.trust_item}>
                <span className={styles.institution_badge}>Federal University of Technology Owerri</span>
              </div>
              <div className={styles.trust_item}>
                <span className={styles.institution_badge}>University of Lagos</span>
              </div>
              <div className={styles.trust_item}>
                <span className={styles.institution_badge}>Covenant University</span>
              </div>
              <div className={styles.trust_item}>
                <span className={styles.institution_badge}>African Leadership University</span>
              </div>
              <div className={styles.trust_item}>
                <span className={styles.institution_badge}>SyncNexa Partner Network</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Problem Section */}
        <section className={styles.problem_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Identity verification is broken.</h2>
              <p className={styles.section_subtitle}>
                Students upload the same documents over and over again. Schools risk exposing sensitive records. Businesses lose customers because verification takes too long and feels invasive.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.pain_card}>
                <div className={styles.card_icon_wrap_danger}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>For Students</h3>
                <p>
                  You shouldn&apos;t have to send your ID card, admission letter, or transcript to every platform that offers a student discount.
                </p>
              </div>

              <div className={styles.pain_card}>
                <div className={styles.card_icon_wrap_danger}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3>For Schools</h3>
                <p>
                  Your students&apos; data should never leave your control. But verification requests keep piling up from every direction.
                </p>
              </div>

              <div className={styles.pain_card}>
                <div className={styles.card_icon_wrap_danger}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>For Organizations</h3>
                <p>
                  Every failed verification is a lost customer. Every slow approval is a missed sale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Solution Section */}
        <section className={styles.solution_section} id="solution">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>SyncNexa changes the game.</h2>
              <p className={styles.section_subtitle}>
                We built a platform where everyone wins. Students stay in control of their identity. Schools remain the single source of truth. Organizations get instant, reliable verification.
              </p>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.solution_card}>
                <div className={styles.card_icon_wrap_success}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>For Students</h3>
                <p>
                  SyncID is your digital student identity. Verify once and use it everywhere—without ever uploading the same document twice.
                </p>
              </div>

              <div className={styles.solution_card}>
                <div className={styles.card_icon_wrap_success}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>For Schools</h3>
                <p>
                  Your systems stay where they are. We simply connect to them. You attest to student status. Nothing more.
                </p>
              </div>

              <div className={styles.solution_card}>
                <div className={styles.card_icon_wrap_success}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>For Organizations</h3>
                <p>
                  One API. Instant verification. No document storage. Your integration goes live in minutes, not months.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How It Works Section */}
        <section className={styles.how_it_works_section} id="how-it-works">
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Three layers. One trust layer.</h2>
            </div>

            <div className={styles.steps_wrapper}>
              <div className={styles.steps_grid}>
                <div className={styles.step_card}>
                  <div className={styles.step_number_badge}>1</div>
                  <div className={styles.step_content}>
                    <h3>Student Onboards</h3>
                    <p>
                      A student downloads SyncID, creates a SyncTag, and verifies their enrollment once. Their credential lives on their device.
                    </p>
                  </div>
                </div>

                <div className={styles.step_card}>
                  <div className={styles.step_number_badge}>2</div>
                  <div className={styles.step_content}>
                    <h3>School Attests</h3>
                    <p>
                      The school&apos;s system confirms the student&apos;s status in real time. No documents change hands. No data leaves the school&apos;s control.
                    </p>
                  </div>
                </div>

                <div className={styles.step_card}>
                  <div className={styles.step_number_badge}>3</div>
                  <div className={styles.step_content}>
                    <h3>Organization Verifies</h3>
                    <p>
                      A business requests verification. The student approves. The organization gets a simple answer: Yes, this is a currently enrolled student. Nothing more.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.verification_image_container}>
                <Image
                  src="/verification_image.svg"
                  alt="SyncNexa 3-Step Verification Flow"
                  width={600}
                  height={400}
                  className={styles.responsive_flow_img}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Product Highlight Section */}
        <section className={styles.product_highlight_section}>
          <div className={styles.container}>
            <div className={styles.product_split}>
              <div className={styles.product_text_side}>
                <h2 className={styles.product_title}>SyncID — Built for Students. Trusted by Everyone.</h2>
                <p className={styles.product_description}>
                  SyncID is our first product. It&apos;s a digital student identity that puts students in control and gives organizations the confidence to offer real benefits.
                </p>

                <ul className={styles.feature_checklist}>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Verify your student status once</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Share only what&apos;s necessary</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Revoke access anytime</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Works across music, software, food, travel, and more</span>
                  </li>
                  <li>
                    <span className={styles.check_icon}>✓</span>
                    <span>Free for students</span>
                  </li>
                </ul>

                <div className={styles.product_cta}>
                  <Link href="/syncid">
                    <SnButton variant="primary" size="md">
                      Explore SyncID
                    </SnButton>
                  </Link>
                </div>
              </div>

              <div className={styles.product_image_side}>
                <Image
                  src="/student_image.svg"
                  alt="SyncID Mobile Application"
                  width={520}
                  height={480}
                  className={styles.responsive_img}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. For Schools and Organizations Section (Two Columns) */}
        <section className={styles.dual_audience_section}>
          <div className={styles.container}>
            <div className={styles.dual_grid}>
              <div className={styles.audience_card}>
                <div className={styles.audience_icon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h2>For Schools</h2>
                <p>
                  Partner with SyncNexa and give your students a seamless way to prove their enrollment—while keeping their data where it belongs: with you.
                </p>
                <div className={styles.card_cta}>
                  <Link href="/for-schools">
                    <SnButton variant="primary" size="md">
                      Partner With Us
                    </SnButton>
                  </Link>
                </div>
              </div>

              <div className={styles.audience_card}>
                <div className={styles.audience_icon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04d69d" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h2>For Organizations</h2>
                <p>
                  Stop losing customers to slow verification. Integrate SyncID and start verifying students instantly.
                </p>
                <div className={styles.card_cta}>
                  <Link href="/for-organizations">
                    <SnButton variant="primary" size="md">
                      Get Started
                    </SnButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Why SyncNexa Section */}
        <section className={styles.why_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Why SyncNexa?</h2>
            </div>

            <div className={styles.cards_grid_4}>
              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3>Privacy by Design</h3>
                <p>
                  We never store academic records. Schools remain the source of truth. Students share only what&apos;s needed.
                </p>
              </div>

              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>Real-Time Verification</h3>
                <p>
                  No more waiting hours or days. Verification happens in seconds.
                </p>
              </div>

              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                </div>
                <h3>One Identity, Everywhere</h3>
                <p>
                  A single verified identity that works across any platform that offers student benefits.
                </p>
              </div>

              <div className={styles.why_card}>
                <div className={styles.why_icon_wrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <h3>Built for Scale</h3>
                <p>
                  From one university to a thousand. From one organization to a global network. Our infrastructure grows with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Testimonial Section */}
        <section className={styles.testimonial_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>What People Are Saying</h2>
            </div>

            <div className={styles.cards_grid_3}>
              <div className={styles.testimonial_card}>
                <div className={styles.quote_mark}>&ldquo;</div>
                <p className={styles.testimonial_quote}>
                  SyncID changed how I claim student discounts. I set it up once and now it&apos;s just one tap. No more uploading documents every time.
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Student User</strong>
                  <span>Verified SyncID Holder</span>
                </div>
              </div>

              <div className={styles.testimonial_card}>
                <div className={styles.quote_mark}>&ldquo;</div>
                <p className={styles.testimonial_quote}>
                  Integrating SyncNexa was surprisingly easy. The API is clean, the documentation is solid, and our conversion rate went up immediately.
                </p>
                <div className={styles.testimonial_author}>
                  <strong>Partner Organization</strong>
                  <span>Fintech & Education Platform</span>
                </div>
              </div>

              <div className={styles.testimonial_card}>
                <div className={styles.quote_mark}>&ldquo;</div>
                <p className={styles.testimonial_quote}>
                  We wanted to offer student benefits without exposing our students&apos; data. SyncNexa gave us exactly what we needed.
                </p>
                <div className={styles.testimonial_author}>
                  <strong>University Administrator</strong>
                  <span>Accredited Institution Partner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Call to Action Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_container}>
            <h2 className={styles.cta_title}>Ready to build trust?</h2>
            <p className={styles.cta_body}>
              Whether you&apos;re a student, a school, or an organization—SyncNexa has a place for you.
            </p>
            <div className={styles.cta_buttons}>
              <Link href="/for-organizations">
                <SnButton variant="primary" size="lg">
                  Get Started
                </SnButton>
              </Link>
              <Link href="/contact">
                <SnButton variant="secondary" size="lg">
                  Contact Us
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
