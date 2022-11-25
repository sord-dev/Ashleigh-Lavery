import React from "react";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mediaIcons}>
        <p>media</p>
        <p>media</p>
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
