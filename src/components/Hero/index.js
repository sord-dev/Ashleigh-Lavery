import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.bg} src="/collage.png" alt="collage" />

      <div className={`${styles.textContent} container`}>
        <h1>Ashleigh Lavery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima porro
          odio, ea vitae facilis unde dignissimos.
        </p>

        <Link href={"#projects"}>
          <button>My Work</button>
        </Link>
      </div>
    </div>
  );
}
