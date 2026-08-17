"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
import HeroGeometry from "@/components/hero/HeroGeometry";
import GlassBlobCard from "@/components/cards/GlassBlobCard";
import FadeInSection from "@/components/animation/FadeInSection";
import { Check, ArrowRight, Zap } from "lucide-react";
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
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "SyncNexa Limited",
      url: "https://linkedin.com/company/syncnexa",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      handle: "github.com/SyncNexa",
      url: "https://github.com/SyncNexa",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
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
                    <span>{channel.email}</span>
                    <ArrowRight size={14} />
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
                    <div className={styles.success_icon}>
                      <Check size={24} strokeWidth={2.5} />
                    </div>
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
                  <strong>
                    <Zap
                      size={14}
                      style={{
                        display: "inline",
                        verticalAlign: "middle",
                        marginRight: 4,
                      }}
                    />
                    Rapid Response Guarantee
                  </strong>
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
