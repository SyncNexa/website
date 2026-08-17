"use client";

import React, { useRef, useState } from "react";
import styles from "./styles/GlassBlobCard.module.css";

interface GlassBlobCardProps {
  children: React.ReactNode;
  className?: string;
  blobColor?: string;
  secondaryBlobColor?: string;
  style?: React.CSSProperties;
}

export default function GlassBlobCard({
  children,
  className = "",
  blobColor = "#04d69d",
  secondaryBlobColor,
  style,
}: GlassBlobCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.glass_card_container}
      style={
        {
          ...style,
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
          "--blob-color": blobColor,
          "--blob-color-2": secondaryBlobColor || blobColor,
        } as React.CSSProperties
      }
    >
      {/* Main Glass Surface */}
      <div className={styles.glass_surface}>
        {/* 5% Opacity Blob Layer Clipped to Container (No Overflow) */}
        <div
          className={styles.blob_clipped_layer}
          style={{
            opacity: isHovered ? 0.05 : 0,
          }}
          aria-hidden="true"
        />

        {/* Spotlight Edge Stroke: Fades around Mouse Position */}
        <div
          className={styles.spotlight_border}
          style={{
            opacity: isHovered ? 1 : 0,
          }}
          aria-hidden="true"
        />

        {/* Card Content with Padding */}
        <div className={`${styles.card_content} ${className}`}>{children}</div>
      </div>
    </div>
  );
}
