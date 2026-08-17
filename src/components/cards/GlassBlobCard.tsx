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
  const [mouseState, setMouseState] = useState({
    x: 0,
    y: 0,
    skewX: 0,
    skewY: 0,
    skewZ: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate normalized offset from center [-1 to 1]
    const normX = centerX > 0 ? (mouseX - centerX) / centerX : 0;
    const normY = centerY > 0 ? (mouseY - centerY) / centerY : 0;

    // Subtle reduced skew effect coupled with slight z-axis skew/tilt
    const skewX = parseFloat((normY * 0.5).toFixed(3));
    const skewY = parseFloat((-normX * 0.5).toFixed(3));
    const skewZ = parseFloat(((-normX * normY) * 0.35).toFixed(3));

    setMouseState({
      x: mouseX,
      y: mouseY,
      skewX,
      skewY,
      skewZ,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseState((prev) => ({
      ...prev,
      skewX: 0,
      skewY: 0,
      skewZ: 0,
    }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.glass_card_container} ${className}`}
      style={
        {
          ...style,
          "--mouse-x": `${mouseState.x}px`,
          "--mouse-y": `${mouseState.y}px`,
          "--skew-x": `${mouseState.skewX}deg`,
          "--skew-y": `${mouseState.skewY}deg`,
          "--skew-z": `${mouseState.skewZ}deg`,
          "--blob-color": blobColor,
          "--blob-color-2": secondaryBlobColor || blobColor,
        } as React.CSSProperties
      }
    >
      {/* Main Glass Surface with Mouse-Position-Aware Skew */}
      <div className={styles.glass_surface}>
        {/* 10% Opacity Blob Layer Clipped to Container (No Overflow) */}
        <div
          className={styles.blob_clipped_layer}
          style={{
            opacity: isHovered ? 0.1 : 0,
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

        {/* Card Content */}
        <div className={styles.card_content}>{children}</div>
      </div>
    </div>
  );
}
