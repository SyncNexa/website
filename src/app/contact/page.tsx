"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userType: "Student",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const contactChannels = [
    {
      role: "For Students",
      desc: "Need assistance with your SyncID app, claiming a SyncTag, or checking verification status?",
      email: "support@syncnexa.co",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      blobColor: "#04d69d",
    },
    {
      role: "For Universities",
      desc: "Interested in deploying the Trust Adapter or piloting SyncID on your campus?",
      email: "partnerships@syncnexa.co",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      blobColor: "#006d50",
    },
    {
      role: "For Organizations",
      desc: "Want to integrate our verification API or launch student discounts across your platforms?",
      email: "business@syncnexa.co",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      blobColor: "#ffaa01",
    },
    {
      role: "General & Press",
      desc: "Have a press inquiry, partnership idea, or questions about our cryptographic trust framework?",
      email: "hello@syncnexa.co",
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
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
      blobColor: "#04d69d",
    },
  ];

  const socialLinks = [
    {
      name: "Twitter / X",
      handle: "@SyncNexa",
      url: "https://x.com/syncnexa",
      icon: "𝕏",
    },
    {
      name: "LinkedIn",
      handle: "SyncNexa Limited",
      url: "https://linkedin.com/company/syncnexa",
      icon: "in",
    },
    {
      name: "GitHub",
      handle: "github.com/SyncNexa",
      url: "https://github.com/SyncNexa",
      icon: "⌥",
    },
  ];

  return (
    <div className={styles.page_wrapper}>
      <TopBar />

      <main>
        {/* 1. Hero Section */}
        <FadeInSection className={styles.hero} activeClassName={styles.is_visible}>
          <HeroGeometry />
          <div className={styles.hero_content}>
            <span className={styles.section_badge}>GET IN TOUCH</span>
            <h1 className={styles.hero_title}>
              Let&apos;s talk about <br />
              <span className={styles.gradient_text}>the future of trust.</span>
            </h1>
            <p className={styles.hero_subtitle}>
              Whether you are an accredited university registrar, an ambitious
              student, or a high-growth platform—our team is here to help.
            </p>
          </div>
        </FadeInSection>

        {/* 2. Direct Channels Grid */}
        <FadeInSection
          className={styles.channels_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.section_header}>
              <span className={styles.section_badge}>DIRECT CHANNELS</span>
              <h2 className={styles.section_title}>Reach the Right Team</h2>
              <p className={styles.section_subtitle}>
                Direct lines of communication tailored to your specific needs.
              </p>
            </div>

            <div className={styles.channels_grid}>
              {contactChannels.map((channel, idx) => (
                <GlassBlobCard
                  key={idx}
                  className={styles.channel_card}
                  blobColor={channel.blobColor}
                >
                  <div className={styles.channel_icon_wrap}>{channel.icon}</div>
                  <h3>{channel.role}</h3>
                  <p className={styles.channel_desc}>{channel.desc}</p>
                  <a
                    href={`mailto:${channel.email}`}
                    className={styles.channel_email}
                  >
                    {channel.email} ➔
                  </a>
                </GlassBlobCard>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 3. Form & Company Info Section */}
        <FadeInSection
          className={styles.form_section}
          activeClassName={styles.is_visible}
        >
          <div className={styles.container}>
            <div className={styles.form_layout_split}>
              {/* Form Side */}
              <GlassBlobCard
                className={styles.form_glass_card}
                blobColor="#04d69d"
                secondaryBlobColor="#006d50"
              >
                <h2 className={styles.form_title}>Send Us a Message</h2>
                <p className={styles.form_desc}>
                  Fill out the form below and a representative will reply within
                  24 hours.
                </p>

                {isSubmitted ? (
                  <div className={styles.success_state_box}>
                    <div className={styles.success_icon}>✓</div>
                    <h3>Message Dispatched!</h3>
                    <p>
                      Thank you for reaching out to SyncNexa. A team member has
                      received your transmission and will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contact_form}>
                    <div className={styles.form_row_dual}>
                      <div className={styles.form_group}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Okolie Anthony"
                          className={styles.form_input}
                        />
                      </div>

                      <div className={styles.form_group}>
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="anthony@university.edu"
                          className={styles.form_input}
                        />
                      </div>
                    </div>

                    <div className={styles.form_row_dual}>
                      <div className={styles.form_group}>
                        <label htmlFor="userType">I Am A...</label>
                        <select
                          id="userType"
                          name="userType"
                          value={formData.userType}
                          onChange={handleChange}
                          className={styles.form_select}
                        >
                          <option value="Student">Student</option>
                          <option value="School / University IT">
                            School / University IT
                          </option>
                          <option value="Business / Merchant">
                            Business / Merchant
                          </option>
                          <option value="Developer">Developer</option>
                          <option value="Press / Investor">
                            Press / Investor
                          </option>
                        </select>
                      </div>

                      <div className={styles.form_group}>
                        <label htmlFor="subject">Subject</label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Integration inquiry, campus pilot..."
                          className={styles.form_input}
                        />
                      </div>
                    </div>

                    <div className={styles.form_group}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your campus, platform, or project..."
                        className={styles.form_textarea}
                      />
                    </div>

                    <SnButton
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Dispatching..." : "Send Message"}
                    </SnButton>
                  </form>
                )}
              </GlassBlobCard>

              {/* Info Side */}
              <GlassBlobCard
                className={styles.info_side_card}
                blobColor="#ffaa01"
                secondaryBlobColor="#04d69d"
              >
                <div className={styles.info_block}>
                  <h4>Corporate Office</h4>
                  <p>
                    <strong>SyncNexa Limited</strong>
                    <br />
                    Registered in the Federal Republic of Nigeria
                    <br />
                    RC: 7924810 &bull; Owerri & Lagos, Nigeria
                  </p>
                </div>

                <div className={styles.info_block}>
                  <h4>Connect on Social</h4>
                  <div className={styles.social_links_grid}>
                    {socialLinks.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social_item}
                      >
                        <span className={styles.social_icon}>{s.icon}</span>
                        <span>{s.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.sla_badge_box}>
                  <strong>⚡ Rapid Response Guarantee</strong>
                  <p>
                    Institutional and developer inquiries are prioritized with a
                    target response window of under 4 business hours.
                  </p>
                </div>
              </GlassBlobCard>
            </div>
          </div>
        </FadeInSection>
      </main>

      <Footer />
    </div>
  );
}
