"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles/HeroSimulator.module.css";

interface VerificationScenario {
  id: string;
  studentTag: string;
  studentName: string;
  institution: string;
  institutionCode: string;
  service: string;
  serviceCategory: string;
  benefit: string;
  pairwiseId: string;
  hashToken: string;
  latency: string;
  accentColor: string;
}

const scenarios: VerificationScenario[] = [
  {
    id: "spotify",
    studentTag: "@anthony",
    studentName: "Okolie Anthony",
    institution: "Federal Univ. of Tech Owerri",
    institutionCode: "FUTO-SIS-2022",
    service: "Spotify Student",
    serviceCategory: "Music & Streaming",
    benefit: "50% Discount Applied",
    pairwiseId: "pw_spot_9f81a7b4",
    hashToken: "0x8f4c...3e19",
    latency: "28ms",
    accentColor: "#1DB954",
  },
  {
    id: "figma",
    studentTag: "@sarah.ux",
    studentName: "Sarah Adeleke",
    institution: "University of Lagos",
    institutionCode: "UNILAG-REG-2023",
    service: "Figma Education",
    serviceCategory: "Design & Software",
    benefit: "Free Pro Plan Unlocked",
    pairwiseId: "pw_figma_7b29c01d",
    hashToken: "0x3a9d...8f62",
    latency: "34ms",
    accentColor: "#F24E1E",
  },
  {
    id: "github",
    studentTag: "@tunde.dev",
    studentName: "Babatunde Johnson",
    institution: "Covenant University",
    institutionCode: "CU-SIS-2024",
    service: "GitHub Education",
    serviceCategory: "Developer Tools",
    benefit: "Developer Pack Activated",
    pairwiseId: "pw_ghub_4d10f82a",
    hashToken: "0x7e21...09b8",
    latency: "19ms",
    accentColor: "#04D69D",
  },
];

export default function HeroSimulator() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(1); // 1: Request, 2: SIS Query, 3: Proof Verified, 4: Granted
  const [isPaused, setIsPaused] = useState(false);

  const current = scenarios[scenarioIndex];

  useEffect(() => {
    if (isPaused) return;

    const stepTimer = setInterval(() => {
      setStep((prevStep) => {
        if (prevStep >= 4) {
          // Move to next scenario
          setScenarioIndex((prevIndex) => (prevIndex + 1) % scenarios.length);
          return 1;
        }
        return prevStep + 1;
      });
    }, 2200);

    return () => clearInterval(stepTimer);
  }, [isPaused]);

  return (
    <div
      className={styles.simulator_container}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Console Bar */}
      <div className={styles.console_topbar}>
        <div className={styles.window_dots}>
          <span className={styles.dot_red}></span>
          <span className={styles.dot_yellow}></span>
          <span className={styles.dot_green}></span>
        </div>

        <div className={styles.console_title}>
          <span className={styles.live_indicator_pulse}></span>
          <span>SyncNexa Identity Verification Simulator</span>
        </div>

        <div className={styles.controls_group}>
          <button
            className={styles.pause_toggle_btn}
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? "Resume Simulator" : "Pause Simulator"}
          >
            {isPaused ? "▶ Resume" : "❚❚ Live"}
          </button>
        </div>
      </div>

      {/* Scenario Selector Pills */}
      <div className={styles.scenario_tabs}>
        {scenarios.map((sc, i) => (
          <button
            key={sc.id}
            className={`${styles.scenario_tab} ${
              scenarioIndex === i ? styles.scenario_tab_active : ""
            }`}
            onClick={() => {
              setScenarioIndex(i);
              setStep(1);
            }}
          >
            <span className={styles.tab_tag}>{sc.studentTag}</span>
            <span className={styles.tab_sep}>&rarr;</span>
            <span className={styles.tab_service}>{sc.service}</span>
          </button>
        ))}
      </div>

      {/* Live Stage Pipeline */}
      <div className={styles.pipeline_row}>
        <div className={`${styles.pipe_step} ${step >= 1 ? styles.pipe_active : ""}`}>
          <div className={styles.pipe_number}>1</div>
          <div className={styles.pipe_text}>
            <strong>Request Initiated</strong>
            <small>Pairwise Handshake</small>
          </div>
        </div>

        <div className={styles.pipe_arrow}>&rarr;</div>

        <div className={`${styles.pipe_step} ${step >= 2 ? styles.pipe_active : ""}`}>
          <div className={styles.pipe_number}>2</div>
          <div className={styles.pipe_text}>
            <strong>Zero-Knowledge Query</strong>
            <small>mTLS SIS Connector</small>
          </div>
        </div>

        <div className={styles.pipe_arrow}>&rarr;</div>

        <div className={`${styles.pipe_step} ${step >= 3 ? styles.pipe_active : ""}`}>
          <div className={styles.pipe_number}>3</div>
          <div className={styles.pipe_text}>
            <strong>Attestation Signed</strong>
            <small>Active Enrolled Status</small>
          </div>
        </div>

        <div className={styles.pipe_arrow}>&rarr;</div>

        <div className={`${styles.pipe_step} ${step >= 4 ? styles.pipe_active : ""}`}>
          <div className={styles.pipe_number}>4</div>
          <div className={styles.pipe_text}>
            <strong>Discount Granted</strong>
            <small>1-Tap Verified</small>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage Body */}
      <div className={styles.simulator_body}>
        {/* Left Side: Student Identity Card */}
        <div className={styles.card_student}>
          <div className={styles.card_inner_header}>
            <span className={styles.badge_syncid}>SyncID Wallet</span>
            <span className={styles.badge_verified_green}>Attested</span>
          </div>

          <div className={styles.student_identity_row}>
            <div className={styles.avatar_circle}>
              {current.studentName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className={styles.student_meta}>
              <h4>{current.studentName}</h4>
              <span className={styles.tag_handle}>{current.studentTag}</span>
            </div>
          </div>

          <div className={styles.data_mini_grid}>
            <div className={styles.mini_item}>
              <span className={styles.mini_label}>INSTITUTION</span>
              <strong className={styles.mini_val}>{current.institution}</strong>
            </div>
            <div className={styles.mini_item}>
              <span className={styles.mini_label}>RECORD HASH</span>
              <strong className={styles.mini_val_mono}>{current.institutionCode}</strong>
            </div>
          </div>

          <div className={styles.privacy_guarantee_row}>
            <span className={styles.lock_ico}>🔒</span>
            <small>Transcripts & documents NEVER shared</small>
          </div>
        </div>

        {/* Center: Live Verification Tunnel / Handshake */}
        <div className={styles.tunnel_center}>
          <div className={styles.tunnel_pulse_ring}>
            <div className={styles.tunnel_core_icon}>
              {step < 3 ? (
                <span className={styles.spin_icon}>⚡</span>
              ) : (
                <span className={styles.check_glow}>✓</span>
              )}
            </div>
          </div>
          <div className={styles.tunnel_status_text}>
            {step === 1 && "Authenticating Pairwise ID..."}
            {step === 2 && "Querying Institutional SIS (mTLS 1.3)..."}
            {step === 3 && "Cryptographic Proof Generated!"}
            {step >= 4 && "Instant Verification Complete!"}
          </div>
          <div className={styles.tunnel_latency_tag}>
            <span>Latency: </span>
            <strong>{current.latency}</strong>
          </div>
        </div>

        {/* Right Side: Merchant / Service Approval Box */}
        <div className={styles.card_merchant}>
          <div className={styles.card_inner_header}>
            <span className={styles.badge_merchant}>{current.service}</span>
            <span className={styles.badge_category}>{current.serviceCategory}</span>
          </div>

          <div className={styles.merchant_result_box}>
            <span className={styles.result_label}>VERIFICATION STATUS</span>
            <div className={styles.status_banner}>
              {step < 4 ? (
                <span className={styles.status_verifying}>Verifying Enrollment...</span>
              ) : (
                <span className={styles.status_success}>ENROLLED &middot; ACTIVE</span>
              )}
            </div>
          </div>

          <div className={styles.proof_details}>
            <div className={styles.proof_row}>
              <span>Pairwise ID:</span>
              <strong className={styles.proof_mono}>{current.pairwiseId}</strong>
            </div>
            <div className={styles.proof_row}>
              <span>Signature:</span>
              <strong className={styles.proof_mono}>{current.hashToken}</strong>
            </div>
          </div>

          <div className={styles.benefit_pill}>
            <span className={styles.benefit_ico}>🎁</span>
            <strong>{current.benefit}</strong>
          </div>
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className={styles.progress_track}>
        <div
          className={styles.progress_fill}
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
