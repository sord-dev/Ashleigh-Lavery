import React from "react";
import styles from "./styles.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textContent}>
        <h1>Ashleigh Lavery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima porro
          odio, ea vitae facilis unde dignissimos.
        </p>

        <button>My Work</button>
      </div>

      <div className={styles.imageContent}>
        you can fit a image into this badboy
      </div>
    </div>
  );
}
