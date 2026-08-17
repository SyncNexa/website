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
  blobColor = "rgba(4, 214, 157, 0.2)",
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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.glass_blob_card} ${className}`}
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
      <div
        className={styles.blob_glow_layer}
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className={styles.card_content}>{children}</div>
    </div>
  );
}
