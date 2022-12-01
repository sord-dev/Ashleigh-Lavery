import Link from "next/link";
import React from "react";
import { useScroll } from "../../lib/hooks/useScroll";
import styles from "./styles.module.css";

export function Navbar() {
  const scrolled = useScroll();

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.stick : ""}`}>
      <div className={`${styles.navbarContent} container`}>
        <h1 className={styles.title}>Ashleigh Lavery</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Work</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
