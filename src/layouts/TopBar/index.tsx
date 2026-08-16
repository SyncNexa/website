"use client";

import React, { useState } from "react";
import Logo from "@/components/icons/Logo";
import { ButtonLink } from "@/components/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles/TopBar.module.css";

function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navs = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/syncid",
      label: "SyncID",
    },
    {
      path: "/for-schools",
      label: "For Schools",
    },
    {
      path: "/for-organizations",
      label: "For Organizations",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.top_bar}>
        <Link href="/" className={styles.left}>
          <Logo />
          <div className={styles.brand}>
            <h2>SyncNexa</h2>
          </div>
        </Link>

        <ul className={styles.desktop_nav}>
          {navs.map((nav, i) => {
            const isActive = pathname === nav.path;
            return (
              <li key={i}>
                <Link
                  href={nav.path}
                  className={isActive ? styles.active_link : styles.nav_link}
                >
                  {nav.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.right_cta}>
          <ButtonLink
            path="/for-organizations"
            color="green"
            label="Get Started"
            variant="solid"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={isMobileMenuOpen ? styles.bar_open_1 : styles.bar}></span>
          <span className={isMobileMenuOpen ? styles.bar_open_2 : styles.bar}></span>
          <span className={isMobileMenuOpen ? styles.bar_open_3 : styles.bar}></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className={styles.mobile_drawer}>
          <ul>
            {navs.map((nav, i) => {
              const isActive = pathname === nav.path;
              return (
                <li key={i}>
                  <Link
                    href={nav.path}
                    className={isActive ? styles.mobile_active_link : styles.mobile_nav_link}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {nav.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.mobile_cta}>
            <ButtonLink
              path="/for-organizations"
              color="green"
              label="Get Started"
              variant="solid"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default TopBar;
