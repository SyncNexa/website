import React from "react";
import type { Metadata } from "next";
import { TopBar, Footer } from "@/layouts";
import { ButtonLink } from "@/components/links";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | SyncNexa",
  description: "Learn about SyncNexa's story, mission, vision, values, and the leadership team building decentralized trust infrastructure.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Privacy First",
      desc: "We don't collect what we don't need. We don't store what we can avoid. And we never share without consent.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Radical Simplicity",
      desc: "Identity is already hard. The experience shouldn't be. We obsess over making complex things feel effortless.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Trust Through Transparency",
      desc: "You should always know what's being shared, with whom, and why. No dark patterns. No surprises.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: "Build for the Long Term",
      desc: "We're not chasing quick wins. We're building infrastructure that will last for decades.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  const leaders = [
    {
      name: "Okolie Amauchechukwu Anthony",
      role: "Founder & Chief Executive Officer",
      bio: "Visionary systems architect leading SyncNexa's cryptographic trust framework and product engineering to make decentralized identity universally accessible.",
      initials: "OA",
    },
    {
      name: "Anyanwu Blessing Chidinma",
      role: "Co-Founder & Chief Marketing Officer",
      bio: "Strategic growth leader driving brand positioning, ecosystem partnerships, and institutional adoption across higher education and enterprise markets.",
      initials: "AB",
    },
    {
      name: "Paul Chibuikem Ukachukwu",
      role: "Co-Founder & Chief Operating Officer",
      bio: "Operations specialist focused on institutional onboarding, regulatory compliance, customer experience, and cross-functional execution.",
      initials: "PC",
    },
  ];

  const timeline = [
    {
      year: "2026",
      title: "Registration & Product Inception",
      description: "SyncNexa Limited is registered in Nigeria. Development of SyncID begins.",
    },
    {
      year: "2026",
      title: "Institutional Pilot Testing",
      description: "SyncID enters testing with partner schools and student users.",
    },
    {
      year: "2026",
      title: "Public Launch & Ecosystem Expansion",
      description: "SyncNexa launches its public website and opens partnerships with schools and organizations.",
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
              <span className={styles.pill_label}>About SyncNexa</span>
              <h1 className={styles.hero_title}>
                We&apos;re building trust for the <span className={styles.gradient_text}>digital world.</span>
              </h1>
              <p className={styles.hero_subtitle}>
                SyncNexa exists because identity should be simple, secure, and yours.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Our Story Section */}
        <section className={styles.story_section}>
          <div className={styles.container}>
            <div className={styles.story_grid}>
              <div className={styles.story_header}>
                <span className={styles.pill_label}>Our Story</span>
                <h2 className={styles.section_title}>How SyncNexa started</h2>
              </div>
              <div className={styles.story_content}>
                <p className={styles.lead_paragraph}>
                  It started with a simple frustration.
                </p>
                <p>
                  Students everywhere were being asked to prove the same thing—over and over. Upload your ID. Upload your admission letter. Wait for approval. Then do it again on the next platform. And the next one.
                </p>
                <p>
                  Schools were drowning in verification requests. Businesses were losing customers because verification took too long. And the whole system was built on sharing more data than necessary.
                </p>
                <p className={styles.highlight_quote}>
                  We thought there had to be a better way. So we built one.
                </p>
                <p>
                  SyncNexa began with a simple idea: <strong>verify once, prove anywhere.</strong> No more duplicate uploads. No more exposing sensitive documents. No more waiting.
                </p>
                <p>
                  Our first product, SyncID, does exactly that for students. But the vision is bigger. We want to build the trust layer for every kind of identity—students today, professionals tomorrow, and eventually anyone who needs to prove something about themselves online.
                </p>
                <p>
                  We&apos;re starting small. We&apos;re building carefully. And we&apos;re doing it the right way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision Section */}
        <section className={styles.mission_vision_section}>
          <div className={styles.container}>
            <div className={styles.mission_vision_grid}>
              <div className={styles.mission_card}>
                <div className={styles.icon_badge_primary}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="22" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="12" x2="2" y2="12" />
                    <line x1="12" y1="6" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="18" />
                  </svg>
                </div>
                <h2>Our Mission</h2>
                <p className={styles.card_statement}>
                  To make digital identity verification instant, private, and human.
                </p>
                <p className={styles.card_subtext}>
                  We believe trust shouldn&apos;t require you to hand over everything. It should require exactly what&apos;s needed—nothing more, nothing less.
                </p>
              </div>

              <div className={styles.vision_card}>
                <div className={styles.icon_badge_accent}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h2>Our Vision</h2>
                <p className={styles.card_statement}>
                  A world where your identity moves with you.
                </p>
                <p className={styles.card_subtext}>
                  Where proving who you are is one tap away, no matter where you are or who&apos;s asking. Where privacy isn&apos;t a feature—it&apos;s the default.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Values Section */}
        <section className={styles.values_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.pill_label}>Guiding Principles</span>
              <h2 className={styles.section_title}>What we stand for</h2>
            </div>

            <div className={styles.values_grid}>
              {values.map((v, i) => (
                <div key={i} className={styles.value_card}>
                  <div className={styles.value_icon_wrap}>
                    {v.icon}
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Leadership Section */}
        <section className={styles.leadership_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.pill_label}>Leadership</span>
              <h2 className={styles.section_title}>Who&apos;s building SyncNexa</h2>
            </div>

            <div className={styles.leadership_grid}>
              {leaders.map((leader, i) => (
                <div key={i} className={styles.leader_card}>
                  <div className={styles.avatar_circle}>
                    {leader.initials}
                  </div>
                  <h3>{leader.name}</h3>
                  <span className={styles.leader_role}>{leader.role}</span>
                  <p className={styles.leader_bio}>{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Our Journey Section (Timeline) */}
        <section className={styles.journey_section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.pill_label}>Milestones</span>
              <h2 className={styles.section_title}>The road so far</h2>
            </div>

            <div className={styles.timeline_wrapper}>
              {timeline.map((item, i) => (
                <div key={i} className={styles.timeline_item}>
                  <div className={styles.timeline_marker}>
                    <div className={styles.timeline_dot}></div>
                    {i !== timeline.length - 1 && <div className={styles.timeline_line}></div>}
                  </div>
                  <div className={styles.timeline_content}>
                    <span className={styles.timeline_year}>{item.year}</span>
                    <p className={styles.timeline_desc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Why It Matters Section */}
        <section className={styles.matters_section}>
          <div className={styles.container}>
            <div className={styles.matters_box}>
              <span className={styles.pill_label}>Purpose</span>
              <h2 className={styles.matters_title}>Why this work matters</h2>
              <div className={styles.matters_text}>
                <p>
                  Every day, millions of people are asked to prove who they are. Students. Patients. Employees. Citizens. The way we do it today is slow, invasive, and full of friction.
                </p>
                <p>
                  SyncNexa is our attempt to fix that.
                </p>
                <p>
                  We&apos;re starting with students because they feel the pain most sharply. But we&apos;re building for everyone.
                </p>
                <p className={styles.matters_highlight}>
                  Because identity is the foundation of everything we do online. And it&apos;s time the foundation actually worked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Call to Action Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_container}>
            <h2 className={styles.cta_title}>Join us on the journey.</h2>
            <p className={styles.cta_body}>
              Whether you&apos;re a student, a school, or an organization—we&apos;d love to have you with us.
            </p>
            <div className={styles.cta_buttons}>
              <ButtonLink
                color="white"
                label="Get Started"
                path="/for-organizations"
                variant="solid"
              />
              <ButtonLink
                color="white"
                label="Contact Us"
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
