import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>Ashleigh Lavery</h1>
      <nav className={styles.nav}>
        <Link href="/">HOME</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#projects">WORK</Link>
        <Link href="#contact">CONTACT</Link>
      </nav>
    </div>
  );
}
