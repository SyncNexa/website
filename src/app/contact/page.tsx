"use client";

import React, { useState } from "react";
import { TopBar, Footer } from "@/layouts";
import { SnButton } from "@syncnexa-library/ui";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      desc: "Need help with SyncID? Have a question about your account?",
      email: "support@syncnexa.co",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      role: "For Schools",
      desc: "Interested in becoming a partner school?",
      email: "partnerships@syncnexa.co",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      role: "For Organizations",
      desc: "Want to integrate SyncID into your platform?",
      email: "business@syncnexa.co",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      role: "General Inquiries",
      desc: "Anything else?",
      email: "hello@syncnexa.co",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
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
      name: "Instagram",
      handle: "@syncnexa",
      url: "https://instagram.com/syncnexa",
      icon: "📷",
    },
    {
      name: "GitHub",
      handle: "SyncNexa",
      url: "https://github.com/SyncNexa",
      icon: "🐙",
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
              <h1 className={styles.hero_title}>
                Let&apos;s <span className={styles.gradient_text}>talk.</span>
              </h1>
              <p className={styles.hero_subtitle}>
                Whether you&apos;re a student, a school, or an organization—we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Contact Options Section */}
        <section className={styles.channels_section}>
          <div className={styles.container}>
            <div className={styles.channels_grid}>
              {contactChannels.map((channel, idx) => (
                <div key={idx} className={styles.channel_card}>
                  <div className={styles.channel_icon_wrap}>
                    {channel.icon}
                  </div>
                  <h3>{channel.role}</h3>
                  <p className={styles.channel_desc}>{channel.desc}</p>
                  <a
                    href={`mailto:${channel.email}`}
                    className={styles.channel_email}
                  >
                    {channel.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Contact Form & Office Section */}
        <section className={styles.form_section}>
          <div className={styles.container}>
            <div className={styles.form_layout_grid}>
              {/* Form Side */}
              <div className={styles.form_card}>
                <h2 className={styles.form_title}>Send us a message</h2>

                {isSubmitted ? (
                  <div className={styles.success_box}>
                    <div className={styles.success_check}>✓</div>
                    <h3>Message Sent!</h3>
                    <p>
                      Thank you for reaching out. We&apos;ve received your message and our team will get back to you within 1–2 business days.
                    </p>
                    <SnButton
                      variant="secondary"
                      size="md"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          userType: "Student",
                          subject: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </SnButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contact_form}>
                    <div className={styles.form_group}>
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={styles.form_input}
                      />
                    </div>

                    <div className={styles.form_group}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={styles.form_input}
                      />
                    </div>

                    <div className={styles.form_group}>
                      <label htmlFor="userType">I am a...</label>
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        className={styles.form_select}
                      >
                        <option value="Student">Student</option>
                        <option value="School Representative">School Representative</option>
                        <option value="Organization Representative">Organization Representative</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className={styles.form_group}>
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={styles.form_input}
                      />
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
                        placeholder="Type your message here..."
                        className={styles.form_textarea}
                      />
                    </div>

                    <SnButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                    >
                      Send Message
                    </SnButton>
                  </form>
                )}
              </div>

              {/* Sidebar: Office & Connect */}
              <div className={styles.sidebar_side}>
                {/* 4. Office Section */}
                <div className={styles.info_card}>
                  <h3 className={styles.info_title}>Our Office</h3>
                  <div className={styles.office_details}>
                    <p className={styles.company_name}>SyncNexa Limited</p>
                    <p className={styles.address_line}>
                      14 Innovate Way, Yaba Tech District,<br />
                      Lagos, Nigeria
                    </p>
                    <div className={styles.hours_box}>
                      <strong>Hours:</strong>
                      <p>Monday – Friday</p>
                      <p>9:00 AM – 5:00 PM WAT</p>
                    </div>
                  </div>
                </div>

                {/* 5. Connect Section */}
                <div className={styles.info_card}>
                  <h3 className={styles.info_title}>Connect with us</h3>
                  <div className={styles.social_list}>
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social_item}
                      >
                        <span className={styles.social_badge}>{social.icon}</span>
                        <div className={styles.social_text}>
                          <strong>{social.name}</strong>
                          <span>{social.handle}</span>
                        </div>
                        <span className={styles.arrow_icon}>→</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 6. What Happens Next Section */}
                <div className={styles.info_card_highlight}>
                  <h3 className={styles.info_title_green}>What to expect</h3>
                  <p className={styles.expect_body}>
                    We read every message. You&apos;ll hear back from us within 1–2 business days. Students receive priority support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Call to Action Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_container}>
            <h2 className={styles.cta_title}>Prefer email?</h2>
            <p className={styles.cta_body}>
              Reach us directly at{" "}
              <a href="mailto:hello@syncnexa.co" className={styles.cta_email_link}>
                hello@syncnexa.co
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
