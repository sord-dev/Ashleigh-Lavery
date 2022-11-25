import React from "react";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mediaIcons}>
        <a href="https://www.instagram.com/ashleigh.artistry/" target="_blank" rel="noopener noreferrer"><img src="/media/instagram.svg" alt="instagram logo" /></a>
        <a href="mailto:ashleighlavery111@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/media/email.svg" alt="email logo" /></a>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; 2022 Ashleigh Lavery, Site developed by{" "}
          <a
            className={styles.linkHover}
            href="https://linki-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            sord-dev
          </a>
        </p>
      </div>
    </footer>
  );
}
