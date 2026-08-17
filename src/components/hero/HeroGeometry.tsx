import React from "react";

export default function HeroGeometry() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <defs>
        {/* Subtle grid pattern */}
        <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="#04D69D"
            strokeWidth="0.8"
            strokeOpacity="0.07"
          />
          <circle cx="48" cy="0" r="1.5" fill="#04D69D" fillOpacity="0.12" />
        </pattern>

        {/* Delicate dot cluster pattern */}
        <pattern id="heroDots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#FFAA01" fillOpacity="0.1" />
        </pattern>

        <linearGradient id="geomPulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#04D69D" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#006D50" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Grid Overlay */}
      <rect width="100%" height="100%" fill="url(#heroGrid)" />

      {/* Dot Matrix Clusters */}
      <rect x="80" y="80" width="180" height="180" fill="url(#heroDots)" />
      <rect x="1180" y="240" width="200" height="200" fill="url(#heroDots)" />

      {/* Constellation Network - Left Side */}
      <g stroke="#04D69D" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="3 3">
        <line x1="120" y1="140" x2="260" y2="210" />
        <line x1="260" y1="210" x2="190" y2="340" />
        <line x1="190" y1="340" x2="310" y2="420" />
        <line x1="260" y1="210" x2="380" y2="160" />
      </g>

      {/* Hexagonal Node 1 - Left */}
      <polygon
        points="260,195 273,202 273,218 260,225 247,218 247,202"
        fill="url(#geomPulseGrad)"
        stroke="#04D69D"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <circle cx="260" cy="210" r="3.5" fill="#04D69D" fillOpacity="0.6" />

      {/* Hexagonal Node 2 - Left Lower */}
      <polygon
        points="190,325 205,333 205,347 190,355 175,347 175,333"
        fill="none"
        stroke="#FFAA01"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <circle cx="190" cy="340" r="3.5" fill="#FFAA01" fillOpacity="0.7" />

      {/* Concentric Node Rings - Left */}
      <circle cx="120" cy="140" r="18" stroke="#04D69D" strokeWidth="0.75" strokeOpacity="0.2" />
      <circle cx="120" cy="140" r="10" stroke="#04D69D" strokeWidth="1" strokeOpacity="0.35" />
      <circle cx="120" cy="140" r="3" fill="#04D69D" fillOpacity="0.7" />

      {/* Constellation Network - Right Side */}
      <g stroke="#04D69D" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="3 3">
        <line x1="1300" y1="160" x2="1180" y2="230" />
        <line x1="1180" y1="230" x2="1240" y2="380" />
        <line x1="1240" y1="380" x2="1110" y2="440" />
        <line x1="1180" y1="230" x2="1080" y2="170" />
      </g>

      {/* Hexagonal Node 3 - Right Upper */}
      <polygon
        points="1180,215 1195,223 1195,237 1180,245 1165,237 1165,223"
        fill="url(#geomPulseGrad)"
        stroke="#04D69D"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      <circle cx="1180" cy="230" r="4" fill="#04D69D" fillOpacity="0.7" />

      {/* Hexagonal Node 4 - Right Accent */}
      <polygon
        points="1240,365 1255,373 1255,387 1240,395 1225,387 1225,373"
        fill="none"
        stroke="#FFAA01"
        strokeWidth="1.5"
        strokeOpacity="0.45"
      />
      <circle cx="1240" cy="380" r="3.5" fill="#FFAA01" fillOpacity="0.7" />

      {/* Concentric Node Rings - Right */}
      <circle cx="1300" cy="160" r="22" stroke="#04D69D" strokeWidth="0.75" strokeOpacity="0.2" />
      <circle cx="1300" cy="160" r="12" stroke="#04D69D" strokeWidth="1" strokeOpacity="0.35" />
      <circle cx="1300" cy="160" r="3.5" fill="#04D69D" fillOpacity="0.8" />

      {/* Isometric Sync Wireframe Block - Floating Left */}
      <g transform="translate(60, 420)" opacity="0.35">
        <polygon points="35,10 65,0 95,10 65,20" fill="#04D69D" fillOpacity="0.2" stroke="#04D69D" strokeWidth="1" />
        <polygon points="35,10 65,20 65,50 35,40" fill="#006D50" fillOpacity="0.1" stroke="#04D69D" strokeWidth="1" />
        <polygon points="65,20 95,10 95,40 65,50" fill="#04D69D" fillOpacity="0.15" stroke="#04D69D" strokeWidth="1" />
      </g>

      {/* Isometric Sync Wireframe Block - Floating Right */}
      <g transform="translate(1280, 430)" opacity="0.35">
        <polygon points="35,10 65,0 95,10 65,20" fill="#FFAA01" fillOpacity="0.2" stroke="#FFAA01" strokeWidth="1" />
        <polygon points="35,10 65,20 65,50 35,40" fill="#FFAA01" fillOpacity="0.1" stroke="#FFAA01" strokeWidth="1" />
        <polygon points="65,20 95,10 95,40 65,50" fill="#FFAA01" fillOpacity="0.15" stroke="#FFAA01" strokeWidth="1" />
      </g>
    </svg>
  );
}
