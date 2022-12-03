import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { useScroll } from "../../lib/hooks/useScroll";

import { motion } from "framer-motion";

export function Navbar() {
  const scrolled = useScroll();

  const variants = {
    initial: { opacity: 0.9 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      {...{ variants }}
      animate={scrolled ? "initial" : "animate"}
      className={`${styles.navbar} ${scrolled ? styles.stick : ""}`}
    >
      <div className={`${styles.navbarContent} container`}>
        <img className={styles.title} src={'/logo.png'} alt={'Ashleigh Artistry Logo'}  />
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Work</Link>
          <Link
            href="mailto:ashleighlavery111@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.div>
  );
}
