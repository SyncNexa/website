import React from "react";

export default function PipelineGeometricVisual() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        viewBox="0 0 540 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", maxWidth: "500px", height: "auto" }}
      >
        <defs>
          {/* Subtle Isometric Grid Pattern */}
          <pattern
            id="pipeGrid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="0.75" fill="#04D69D" fillOpacity="0.2" />
          </pattern>

          {/* Glowing Gradients */}
          <linearGradient id="layerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#04D69D" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#006D50" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="layerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAA01" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="layerGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#04D69D" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#006D50" stopOpacity="0.04" />
          </linearGradient>

          <filter id="pulseGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer subtle boundary frame */}
        <rect
          x="10"
          y="10"
          width="520"
          height="480"
          rx="16"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
        />
        <rect
          x="10"
          y="10"
          width="520"
          height="480"
          rx="16"
          fill="url(#pipeGrid)"
        />

        {/* Central Vertical Connector Core Beam */}
        <line
          x1="270"
          y1="90"
          x2="270"
          y2="410"
          stroke="#04D69D"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Vertical Pulse Particles */}
        <circle r="4" fill="#04D69D" filter="url(#pulseGlow)">
          <animateMotion
            path="M 270 410 L 270 90"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="4" fill="#FFAA01" filter="url(#pulseGlow)">
          <animateMotion
            path="M 270 90 L 270 410"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ================= LAYER 3: TOP (ORGANIZATION VERIFICATION) ================= */}
        <g transform="translate(0, 0)">
          {/* Isometric Diamond Platform */}
          <polygon
            points="270,60 430,120 270,180 110,120"
            fill="url(#layerGrad1)"
            stroke="#04D69D"
            strokeWidth="1.5"
          />
          <polygon
            points="270,75 390,120 270,165 150,120"
            fill="none"
            stroke="#04D69D"
            strokeWidth="1"
            strokeDasharray="3 3"
            strokeOpacity="0.6"
          />

          {/* Node Hub Indicator */}
          <circle cx="270" cy="120" r="14" fill="#E6FAF4" stroke="#04D69D" strokeWidth="1.5" />
          <circle cx="270" cy="120" r="6" fill="#006D50" />

          {/* Label Pill */}
          <g transform="translate(370, 75)">
            <rect width="130" height="26" rx="6" fill="none" stroke="#E5E7EB" />
            <text x="10" y="17" fill="#05241D" fontSize="10" fontWeight="700" fontFamily="sans-serif">
              Layer 03: Verify Proof
            </text>
          </g>
        </g>

        {/* ================= LAYER 2: MIDDLE (SYNCNEXA ZERO-KNOWLEDGE GATEWAY) ================= */}
        <g transform="translate(0, 130)">
          {/* Isometric Diamond Platform */}
          <polygon
            points="270,60 430,120 270,180 110,120"
            fill="url(#layerGrad2)"
            stroke="#FFAA01"
            strokeWidth="1.5"
          />
          <polygon
            points="270,75 390,120 270,165 150,120"
            fill="none"
            stroke="#FFAA01"
            strokeWidth="1"
            strokeDasharray="3 3"
            strokeOpacity="0.6"
          />

          {/* Core Concentric Radar Center */}
          <circle cx="270" cy="120" r="22" fill="none" stroke="#FFAA01" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="270" cy="120" r="14" fill="#FFF7ED" stroke="#FFAA01" strokeWidth="1.5" />
          <polygon points="270,112 277,124 263,124" fill="#D97706" />

          {/* Label Pill */}
          <g transform="translate(40, 205)">
            <rect width="145" height="26" rx="6" fill="none" stroke="#E5E7EB" />
            <text x="10" y="17" fill="#05241D" fontSize="10" fontWeight="700" fontFamily="sans-serif">
              Layer 02: SIS Attestation
            </text>
          </g>
        </g>

        {/* ================= LAYER 1: BOTTOM (STUDENT HARDWARE ENCLAVE) ================= */}
        <g transform="translate(0, 260)">
          {/* Isometric Diamond Platform */}
          <polygon
            points="270,60 430,120 270,180 110,120"
            fill="url(#layerGrad3)"
            stroke="#04D69D"
            strokeWidth="1.5"
          />
          <polygon
            points="270,75 390,120 270,165 150,120"
            fill="none"
            stroke="#04D69D"
            strokeWidth="1"
            strokeDasharray="3 3"
            strokeOpacity="0.6"
          />

          {/* Node Hub Indicator */}
          <circle cx="270" cy="120" r="14" fill="#E6FAF4" stroke="#04D69D" strokeWidth="1.5" />
          <path
            d="M 270 114 A 3 3 0 0 1 270 120 A 3 3 0 0 1 270 114 Z M 265 125 C 265 122 267.5 122 270 122 C 272.5 122 275 122 275 125 Z"
            fill="#006D50"
          />

          {/* Label Pill */}
          <g transform="translate(370, 335)">
            <rect width="130" height="26" rx="6" fill="none" stroke="#E5E7EB" />
            <text x="10" y="17" fill="#05241D" fontSize="10" fontWeight="700" fontFamily="sans-serif">
              Layer 01: Client Enclave
            </text>
          </g>
        </g>

        {/* Corner Telemetry Tags */}
        <text x="24" y="34" fill="#6B7280" fontSize="9" fontFamily="monospace" fontWeight="700">
          MESH // PROTOCOL_STACK
        </text>
        <text x="516" y="34" fill="#04D69D" fontSize="9" fontFamily="monospace" fontWeight="700" textAnchor="end">
          ● SYNCHRONIZED
        </text>
      </svg>
    </div>
  );
}
