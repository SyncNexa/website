import React from "react";
import styles from "./styles/SisTrustAdapterVisual.module.css";

export default function SisTrustAdapterVisual() {
  return (
    <div className={styles.visual_wrapper}>
      {/* Top Technical Metadata Bar */}
      <div className={styles.tech_header}>
        <div className={styles.tech_tag_group}>
          <span className={styles.status_dot}></span>
          <span className={styles.tech_title}>
            SYNCNEXA SIS TRUST ADAPTER // ARCHITECTURE
          </span>
        </div>
        <div className={styles.tech_metrics}>
          <span className={styles.metric_item}>
            <span className={styles.metric_label}>SECURITY:</span>
            <span className={styles.metric_val}>mTLS 1.3 + Curve25519</span>
          </span>
          <span className={styles.metric_item}>
            <span className={styles.metric_label}>PII EGRESS:</span>
            <span className={styles.metric_val_green}>0 BYTES (ZKP)</span>
          </span>
          <span className={styles.metric_item}>
            <span className={styles.metric_label}>AVG LATENCY:</span>
            <span className={styles.metric_val}>~14.2ms</span>
          </span>
          <span className={styles.metric_item}>
            <span className={styles.metric_label}>COMPLIANCE:</span>
            <span className={styles.metric_val_green}>FERPA &amp; NDPR</span>
          </span>
        </div>
      </div>

      {/* Main Architectural SVG Blueprint (Compact Height) */}
      <div className={styles.schematic_canvas}>
        <svg
          viewBox="0 0 1000 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.schematic_svg}
        >
          <defs>
            {/* Subtle Grid Pattern */}
            <pattern
              id="sisGrid"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 25 0 L 0 0 0 25"
                fill="none"
                stroke="#04D69D"
                strokeWidth="0.5"
                strokeOpacity="0.08"
              />
              <circle cx="25" cy="0" r="0.8" fill="#04D69D" fillOpacity="0.15" />
            </pattern>

            <linearGradient id="sisCoreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#04D69D" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#006D50" stopOpacity="0.03" />
            </linearGradient>

            <filter id="sisLaserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Canvas Background Grid */}
          <rect width="100%" height="100%" fill="url(#sisGrid)" />

          {/* Flow Lines Connecting Nodes */}
          {/* Path 1: Campus SIS (Left) -> SyncNexa Trust Adapter (Center) */}
          <path
            d="M 230 150 L 455 150"
            stroke="#FFAA01"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_amber}
          />

          {/* Path 2: Adapter -> Student SyncID Wallet (Top Right) */}
          <path
            d="M 545 135 C 630 135, 680 70, 780 70"
            stroke="#04D69D"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_fast}
          />

          {/* Path 3: Adapter -> Relying Services (Middle Right) */}
          <path
            d="M 545 150 L 780 150"
            stroke="#04D69D"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_fast}
          />

          {/* Path 4: Adapter -> Registrar Local Audit (Bottom Right) */}
          <path
            d="M 545 165 C 630 165, 680 230, 780 230"
            stroke="#04D69D"
            strokeWidth="2"
            strokeDasharray="6 6"
            className={styles.flowing_line_fast}
          />

          {/* Animated Glowing Laser Pulses along Paths */}
          <circle r="3.5" fill="#FFAA01" filter="url(#sisLaserGlow)">
            <animateMotion
              path="M 230 150 L 455 150"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3" fill="#04D69D" filter="url(#sisLaserGlow)">
            <animateMotion
              path="M 545 135 C 630 135, 680 70, 780 70"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3" fill="#04D69D" filter="url(#sisLaserGlow)">
            <animateMotion
              path="M 545 150 L 780 150"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3" fill="#04D69D" filter="url(#sisLaserGlow)">
            <animateMotion
              path="M 545 165 C 630 165, 680 230, 780 230"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* ================= 1. NODE: CAMPUS SIS & DATABASE (LEFT) ================= */}
          <g transform="translate(35, 50)">
            {/* Outer Box */}
            <rect
              width="195"
              height="200"
              rx="12"
              className={styles.card_bg_amber}
              strokeWidth="1.5"
            />
            {/* Top Accent Line */}
            <rect width="195" height="3" rx="1.5" fill="#FFAA01" />

            {/* Header Icon & Title */}
            <circle cx="28" cy="28" r="11" className={styles.icon_bg_amber} />
            <path
              d="M28 21 L21 25 L28 28 L35 25 Z M23 29 L28 32 L33 29 M23 33 L28 36 L33 33"
              stroke="#D97706"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            <text
              x="46"
              y="25"
              className={styles.text_main}
              fontSize="11.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              Campus SIS / DB
            </text>
            <text
              x="46"
              y="37"
              fill="#D97706"
              fontSize="8.5"
              fontWeight="600"
              fontFamily="monospace"
            >
              Oracle &middot; Banner &middot; Postgres
            </text>

            {/* Internal Query Mock Box */}
            <rect
              x="12"
              y="52"
              width="171"
              height="58"
              rx="6"
              className={styles.query_box_bg}
            />
            <text
              x="20"
              y="68"
              fill="#04D69D"
              fontSize="8"
              fontWeight="700"
              fontFamily="monospace"
            >
              [READ-ONLY QUERY]
            </text>
            <text
              x="20"
              y="82"
              fill="#E5E7EB"
              fontSize="8.5"
              fontFamily="monospace"
            >
              SELECT is_enrolled
            </text>
            <text
              x="20"
              y="95"
              fill="#9CA3AF"
              fontSize="8.5"
              fontFamily="monospace"
            >
              FROM students WHERE id=0x7f...
            </text>

            {/* Security Specs */}
            <rect
              x="12"
              y="120"
              width="171"
              height="30"
              rx="6"
              className={styles.inner_spec_box}
            />
            <text
              x="20"
              y="133"
              className={styles.text_muted}
              fontSize="7.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              NETWORK EGRESS
            </text>
            <text
              x="20"
              y="144"
              className={styles.text_main}
              fontSize="8.5"
              fontWeight="700"
              fontFamily="monospace"
            >
              0 BYTES LEAVING CAMPUS
            </text>

            {/* Tag Badge */}
            <rect
              x="12"
              y="158"
              width="171"
              height="24"
              rx="6"
              className={styles.tag_bg_amber}
            />
            <text
              x="97"
              y="174"
              className={styles.tag_text_amber}
              fontSize="8"
              fontWeight="700"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              AIR-GAPPED &middot; LOCAL ISOLATION
            </text>
          </g>

          {/* ================= 2. CORE NODE: SYNCNEXA TRUST ADAPTER (CENTER) ================= */}
          <g transform="translate(500, 150)">
            {/* Outer Concentric Radar Rings */}
            <circle
              cx="0"
              cy="0"
              r="62"
              stroke="#04D69D"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="4 4"
            />
            <circle
              cx="0"
              cy="0"
              r="48"
              stroke="#04D69D"
              strokeWidth="1.5"
              strokeOpacity="0.35"
            />

            {/* Core Hexagonal Slab */}
            <polygon
              points="0,-36 32,-18 32,18 0,36 -32,18 -32,-18"
              fill="url(#sisCoreGlow)"
              stroke="#04D69D"
              strokeWidth="2"
            />

            {/* Inner Shield Symbol */}
            <polygon
              points="0,-20 18,-10 18,10 0,20 -18,10 -18,-10"
              fill="#006D50"
              fillOpacity="0.9"
            />
            <circle cx="0" cy="0" r="5.5" fill="#04D69D" />

            {/* Center Hub Labels */}
            <text
              x="0"
              y="74"
              className={styles.text_main}
              fontSize="12"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              SyncNexa Trust Adapter
            </text>
            <text
              x="0"
              y="88"
              className={styles.text_muted}
              fontSize="9.5"
              fontWeight="600"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Docker / K8s Zero-Knowledge Engine
            </text>
            <text
              x="0"
              y="102"
              fill="#04D69D"
              fontSize="8.5"
              fontWeight="700"
              textAnchor="middle"
              fontFamily="monospace"
            >
              1,420 QUERIES/MIN &middot; OUTBOUND 443
            </text>
          </g>

          {/* ================= 3. DESTINATIONS & VERIFICATION TARGETS (RIGHT) ================= */}
          {/* Destination 1: Student SyncID Mobile App */}
          <g transform="translate(780, 45)">
            <rect
              width="185"
              height="50"
              rx="10"
              className={styles.card_bg}
              strokeWidth="1.5"
            />
            <circle cx="22" cy="25" r="10" className={styles.icon_bg_green} />
            <path
              d="M 20 19 L 24 19 C 25 19 26 20 26 21 L 26 29 C 26 30 25 31 24 31 L 20 31 C 19 31 18 30 18 29 L 18 21 C 18 20 19 19 20 19 Z M 22 28 L 22 29"
              stroke="#006D50"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
            />
            <text
              x="38"
              y="22"
              className={styles.text_main}
              fontSize="10.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              SyncID Mobile Wallet
            </text>
            <text
              x="38"
              y="34"
              fill="#16A34A"
              fontSize="8.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              Encrypted Proof Stored
            </text>
            <rect x="142" y="11" width="34" height="16" rx="4" className={styles.badge_bg_green} />
            <text
              x="159"
              y="22"
              className={styles.badge_text_green}
              fontSize="7.5"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="monospace"
            >
              200 OK
            </text>
          </g>

          {/* Destination 2: Global Relying Ecosystem */}
          <g transform="translate(780, 125)">
            <rect
              width="185"
              height="50"
              rx="10"
              className={styles.card_bg}
              strokeWidth="1.5"
            />
            <circle cx="22" cy="25" r="10" className={styles.icon_bg_green} />
            <path
              d="M 22 18 A 7 7 0 1 0 22 32 A 7 7 0 1 0 22 18 Z M 15 25 L 29 25 M 22 18 C 24 21 25 23 25 25 C 25 27 24 29 22 32 C 20 29 19 27 19 25 C 19 23 20 21 22 18 Z"
              stroke="#006D50"
              strokeWidth="1.2"
              fill="none"
            />
            <text
              x="38"
              y="22"
              className={styles.text_main}
              fontSize="10.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              Global Relying Services
            </text>
            <text
              x="38"
              y="34"
              fill="#16A34A"
              fontSize="8.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              Spotify &middot; Figma &middot; GitHub
            </text>
            <rect x="136" y="11" width="40" height="16" rx="4" className={styles.badge_bg_green} />
            <text
              x="156"
              y="22"
              className={styles.badge_text_green}
              fontSize="7.5"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="monospace"
            >
              VERIFIED
            </text>
          </g>

          {/* Destination 3: Registrar Audit & Revocation Log */}
          <g transform="translate(780, 205)">
            <rect
              width="185"
              height="50"
              rx="10"
              className={styles.card_bg}
              strokeWidth="1.5"
            />
            <circle cx="22" cy="25" r="10" className={styles.icon_bg_amber} />
            <path
              d="M 18 21 L 25 21 M 18 25 L 25 25 M 18 28 L 22 28"
              stroke="#D97706"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <text
              x="38"
              y="22"
              className={styles.text_main}
              fontSize="10.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              Campus Audit Stream
            </text>
            <text
              x="38"
              y="34"
              fill="#D97706"
              fontSize="8.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              Immutable Local Log
            </text>
            <rect x="136" y="11" width="40" height="16" rx="4" className={styles.badge_bg_amber} />
            <text
              x="156"
              y="22"
              className={styles.badge_text_amber}
              fontSize="7.5"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="monospace"
            >
              AUDITED
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Technical Spec Annotations */}
      <div className={styles.tech_footer}>
        <div className={styles.footer_spec_item}>
          <span className={styles.spec_node_dot_amber}></span>
          <span>1. Read-only campus query executes locally in ~14.2ms</span>
        </div>
        <div className={styles.footer_spec_item}>
          <span className={styles.spec_node_dot}></span>
          <span>2. Cryptographic Boolean proof generated (0 PII egressed)</span>
        </div>
        <div className={styles.footer_spec_item}>
          <span className={styles.spec_node_dot}></span>
          <span>3. Outbound Port 443 attestation broadcasted to relying parties</span>
        </div>
      </div>
    </div>
  );
}
