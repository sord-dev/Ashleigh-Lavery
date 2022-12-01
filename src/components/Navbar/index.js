import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { useScroll } from "../../lib/hooks/useScroll";

export function Navbar() {
  const scrolled = useScroll();

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.stick : ""}`}>
      <div className={`${styles.navbarContent} container`}>
      {/* Logo - REPLACE WITH IMAGE */}
        <h1 className={styles.title}>Ashleigh Lavery</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Work</Link>
          <Link href="mailto:ashleighlavery111@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</Link>
        </nav>
      </div>
    </div>
  );
}
