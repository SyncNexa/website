"use client";

import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
  threshold?: number;
  rootMargin?: string;
  activeClassName?: string;
}

export default function FadeInSection({
  children,
  className = "",
  id,
  as: Component = "section",
  threshold = 0.1,
  rootMargin = "0px 0px -30px 0px",
  activeClassName = "is_visible",
  ...rest
}: FadeInSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(node);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <Component
      ref={sectionRef as any}
      id={id}
      className={`${className} ${isVisible ? activeClassName : ""}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
