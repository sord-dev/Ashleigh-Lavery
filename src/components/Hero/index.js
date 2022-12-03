import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className={styles.hero}>
      <img className={styles.bg} src="/collage.jpg" alt="collage" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`${styles.textContent} container`}
      >
        <h1>Ashleigh Lavery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima porro
          odio, ea vitae facilis unde dignissimos.
        </p>

        <Link href={"#projects"}>
          <button>My Work</button>
        </Link>
      </motion.div>
    </section>
  );
}
