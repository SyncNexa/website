import React from "react";
import Link from "next/link";
import Logo from "@/components/icons/Logo";
import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand_column}>
          <Link href="/" className={styles.logo_link}>
            <Logo />
            <h2>SyncNexa</h2>
          </Link>
          <p className={styles.tagline}>Your Identity. Simplified.</p>
          <p className={styles.company_info}>
            SyncNexa Limited provides decentralized trust and identity verification infrastructure for institutions and businesses worldwide.
          </p>
        </div>

        <div className={styles.links_grid}>
          <div className={styles.column}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/syncid">SyncID</Link>
              </li>
              <li>
                <Link href="/for-schools">For Schools</Link>
              </li>
              <li>
                <Link href="/for-organizations">For Organizations</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/dpa">Data Processing Agreement</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:hello@syncnexa.co" className={styles.contact_email}>
                  hello@syncnexa.co
                </a>
              </li>
            </ul>
            <div className={styles.socials}>
              <a
                href="https://x.com/syncnexa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter (X)
              </a>
              <a
                href="https://linkedin.com/company/syncnexa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/SyncNexa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom_bar}>
        <div className={styles.bottom_container}>
          <p>© 2026 SyncNexa Limited. All rights reserved.</p>
          <p className={styles.made_with}>Decentralized Trust Network</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
