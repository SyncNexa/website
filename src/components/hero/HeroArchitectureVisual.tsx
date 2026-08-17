import React from "react";
import styles from "./styles/HeroArchitectureVisual.module.css";

export default function HeroArchitectureVisual() {
  return (
    <div className={styles.visual_wrapper}>
      {/* Top Technical Metadata Bar */}
      <div className={styles.tech_header}>
        <div className={styles.tech_tag_group}>
          <span className={styles.status_dot}></span>
          <span className={styles.tech_title}>SYNCNEXA ZERO-KNOWLEDGE TRUST MESH</span>
        </div>
        <div className={styles.tech_metrics}>
          <span className={styles.metric_item}>
            <span className={styles.metric_label}>PROTOCOL:</span>
            <span className={styles.metric_val}>mTLS 1.3 + ZKP</span>
          </span>
          <span className={styles.metric_item}>
            <span className={styles.metric_label}>LATENCY:</span>
            <span className={styles.metric_val}>~18ms</span>
          </span>
          <span className={styles.metric_item}>
            <span className={styles.metric_label}>DATA STORAGE:</span>
            <span className={styles.metric_val_green}>0 PII RETAINED</span>
          </span>
        </div>
      </div>

      {/* Main Architectural SVG Blueprint */}
      <div className={styles.schematic_canvas}>
        <svg
          viewBox="0 0 1000 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.schematic_svg}
        >
          <defs>
            {/* Subtle Grid Pattern */}
            <pattern id="archGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="#04D69D"
                strokeWidth="0.5"
                strokeOpacity="0.08"
              />
              <circle cx="30" cy="0" r="1" fill="#04D69D" fillOpacity="0.15" />
            </pattern>

            {/* Glowing Flow Gradients */}
            <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#04D69D" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#04D69D" stopOpacity="1" />
              <stop offset="100%" stopColor="#006D50" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFAA01" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FFAA01" stopOpacity="1" />
              <stop offset="100%" stopColor="#04D69D" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#04D69D" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#006D50" stopOpacity="0.02" />
            </linearGradient>

            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Canvas Background Grid */}
          <rect width="100%" height="100%" fill="url(#archGrid)" />

          {/* Flow Lines Connecting Nodes */}
          {/* Path 1: Student -> SyncNexa Core Hub */}
          <path
            d="M 210 240 L 450 240"
            stroke="#04D69D"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_fast}
          />

          {/* Path 2: SyncNexa Core Hub <-> University SIS Node */}
          <path
            d="M 500 180 L 500 90"
            stroke="#FFAA01"
            strokeWidth="2"
            strokeDasharray="5 5"
            className={styles.flowing_line_reverse}
          />

          {/* Path 3: SyncNexa Core Hub -> Top Relying Service (Spotify) */}
          <path
            d="M 550 215 C 640 215, 680 145, 780 145"
            stroke="#04D69D"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_fast}
          />

          {/* Path 4: SyncNexa Core Hub -> Middle Relying Service (Figma) */}
          <path
            d="M 550 240 L 780 240"
            stroke="#04D69D"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_fast}
          />

          {/* Path 5: SyncNexa Core Hub -> Bottom Relying Service (GitHub) */}
          <path
            d="M 550 265 C 640 265, 680 335, 780 335"
            stroke="#04D69D"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_fast}
          />

          {/* Animated Glowing Laser Pulses along Paths */}
          <circle r="4" fill="#04D69D" filter="url(#laserGlow)">
            <animateMotion
              path="M 210 240 L 450 240"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="4" fill="#FFAA01" filter="url(#laserGlow)">
            <animateMotion
              path="M 500 90 L 500 180"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3.5" fill="#04D69D" filter="url(#laserGlow)">
            <animateMotion
              path="M 550 215 C 640 215, 680 145, 780 145"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3.5" fill="#04D69D" filter="url(#laserGlow)">
            <animateMotion
              path="M 550 240 L 780 240"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3.5" fill="#04D69D" filter="url(#laserGlow)">
            <animateMotion
              path="M 550 265 C 640 265, 680 335, 780 335"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* ================= 1. NODE: STUDENT IDENTITY (ORIGIN) ================= */}
          <g transform="translate(40, 160)">
            {/* Card Background */}
            <rect
              width="170"
              height="160"
              rx="14"
              fill="#ffffff"
              stroke="#E5E7EB"
              strokeWidth="1.5"
            />
            {/* Top Accent Line */}
            <rect width="170" height="3" rx="1.5" fill="#04D69D" />

            {/* Title & Icon */}
            <circle cx="28" cy="32" r="12" fill="#E6FAF4" />
            <path
              d="M 28 26 A 4 4 0 0 1 28 34 A 4 4 0 0 1 28 26 Z M 22 40 C 22 36.5 25 36.5 28 36.5 C 31 36.5 34 36.5 34 40 Z"
              fill="#006D50"
            />

            <text x="48" y="29" fill="#05241D" fontSize="12" fontWeight="700" fontFamily="sans-serif">
              SyncID Holder
            </text>
            <text x="48" y="42" fill="#006D50" fontSize="10" fontWeight="600" fontFamily="monospace">
              @anthony
            </text>

            {/* Inner Specs */}
            <rect x="14" y="58" width="142" height="42" rx="6" fill="#F9FBFB" stroke="#E5E7EB" />
            <text x="22" y="73" fill="#6B7280" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">
              PAIRWISE KEY
            </text>
            <text x="22" y="88" fill="#05241D" fontSize="9.5" fontWeight="600" fontFamily="monospace">
              ed25519_9f81a7b4
            </text>

            {/* Tag Badge */}
            <rect x="14" y="112" width="142" height="24" rx="6" fill="#E6FAF4" />
            <text x="85" y="128" fill="#006D50" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
              🔒 100% On-Device Consent
            </text>
          </g>

          {/* ================= 2. NODE: UNIVERSITY SIS (TOP) ================= */}
          <g transform="translate(415, 25)">
            <rect
              width="170"
              height="65"
              rx="12"
              fill="#ffffff"
              stroke="#FFAA01"
              strokeWidth="1.5"
            />
            <rect width="170" height="3" rx="1.5" fill="#FFAA01" />

            <circle cx="24" cy="32" r="10" fill="#FFF7ED" />
            <path d="M24 26 L18 29 L24 32 L30 29 Z M19 33 L24 36 L29 33" stroke="#D97706" strokeWidth="1.5" fill="none" />

            <text x="42" y="28" fill="#05241D" fontSize="11" fontWeight="700" fontFamily="sans-serif">
              University SIS Node
            </text>
            <text x="42" y="42" fill="#6B7280" fontSize="9" fontFamily="monospace">
              mTLS 1.3 &middot; Live Attestation
            </text>
            <text x="42" y="54" fill="#04D69D" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">
              ✓ SOURCE OF TRUTH
            </text>
          </g>

          {/* ================= 3. CORE HUB: SYNCNEXA ZK ENGINE ================= */}
          <g transform="translate(500, 240)">
            {/* Outer Concentric Radar Rings */}
            <circle cx="0" cy="0" r="70" stroke="#04D69D" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="54" stroke="#04D69D" strokeWidth="1.5" strokeOpacity="0.4" />

            {/* Core Hexagonal Slab */}
            <polygon
              points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21"
              fill="url(#coreGlow)"
              stroke="#04D69D"
              strokeWidth="2.5"
            />

            {/* Inner Geometric Star & Symbol */}
            <polygon
              points="0,-24 20,-12 20,12 0,24 -20,12 -20,-12"
              fill="#006D50"
              fillOpacity="0.85"
            />
            <circle cx="0" cy="0" r="8" fill="#04D69D" />

            {/* Center Hub Labels */}
            <text x="0" y="88" fill="#05241D" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
              SyncNexa Trust Mesh
            </text>
            <text x="0" y="104" fill="#6B7280" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
              Zero-Knowledge Verification Engine
            </text>
            <text x="0" y="120" fill="#006D50" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">
              AES-256 &middot; ZERO DOC STORAGE
            </text>
          </g>

          {/* ================= 4. RELYING PARTIES / ECOSYSTEM (RIGHT) ================= */}
          {/* Branch 1: Spotify */}
          <g transform="translate(780, 115)">
            <rect
              width="180"
              height="60"
              rx="12"
              fill="#ffffff"
              stroke="#E5E7EB"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="30" r="12" fill="#1DB954" fillOpacity="0.15" />
            <path
              d="M 19 28 A 6 6 0 0 1 29 28 M 20 31 A 4.5 4.5 0 0 1 28 31 M 21 34 A 3 3 0 0 1 27 34"
              stroke="#1DB954"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <text x="44" y="27" fill="#05241D" fontSize="11" fontWeight="700" fontFamily="sans-serif">
              Spotify Student
            </text>
            <text x="44" y="42" fill="#16A34A" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">
              ✓ 50% Discount Applied
            </text>
            <rect x="135" y="14" width="36" height="18" rx="4" fill="#DCFCE7" />
            <text x="153" y="26" fill="#15803D" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
              200 OK
            </text>
          </g>

          {/* Branch 2: Figma */}
          <g transform="translate(780, 210)">
            <rect
              width="180"
              height="60"
              rx="12"
              fill="#ffffff"
              stroke="#E5E7EB"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="30" r="12" fill="#F24E1E" fillOpacity="0.15" />
            <circle cx="22" cy="27" r="3" fill="#F24E1E" />
            <circle cx="26" cy="27" r="3" fill="#A259FF" />
            <circle cx="22" cy="33" r="3" fill="#0ACF83" />
            <text x="44" y="27" fill="#05241D" fontSize="11" fontWeight="700" fontFamily="sans-serif">
              Figma Education
            </text>
            <text x="44" y="42" fill="#16A34A" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">
              ✓ Pro License Unlocked
            </text>
            <rect x="135" y="14" width="36" height="18" rx="4" fill="#DCFCE7" />
            <text x="153" y="26" fill="#15803D" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
              200 OK
            </text>
          </g>

          {/* Branch 3: GitHub */}
          <g transform="translate(780, 305)">
            <rect
              width="180"
              height="60"
              rx="12"
              fill="#ffffff"
              stroke="#E5E7EB"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="30" r="12" fill="#05241D" fillOpacity="0.1" />
            <circle cx="24" cy="30" r="6" fill="#05241D" />
            <text x="44" y="27" fill="#05241D" fontSize="11" fontWeight="700" fontFamily="sans-serif">
              GitHub Education
            </text>
            <text x="44" y="42" fill="#16A34A" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">
              ✓ Student Pack Active
            </text>
            <rect x="135" y="14" width="36" height="18" rx="4" fill="#DCFCE7" />
            <text x="153" y="26" fill="#15803D" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
              200 OK
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Technical Spec Annotations */}
      <div className={styles.tech_footer}>
        <div className={styles.footer_spec_item}>
          <span className={styles.spec_node_dot}></span>
          <span>1. Student presents zero-knowledge proof</span>
        </div>
        <div className={styles.footer_spec_item}>
          <span className={styles.spec_node_dot}></span>
          <span>2. University confirms status in real-time</span>
        </div>
        <div className={styles.footer_spec_item}>
          <span className={styles.spec_node_dot}></span>
          <span>3. Relying business verifies in ~18ms</span>
        </div>
      </div>
    </div>
  );
}
