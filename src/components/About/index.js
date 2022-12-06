import React from "react";
import styles from "./styles.module.css";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className={styles.about} id="about">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
        className={styles.mainContent}
      >
        <span>MAKEUP ARTIST</span>
        <h2>Ashleigh Lavery</h2>
        <p>
          Ashleigh is a fully qualified makeup artist based in South London, she
          specialises in Fashion Editorial Makeup, Proms, Bridal and Beauty
          makeovers. Her skills also expand to TV/Film makeup, Special Effects
          and Hairstyling.
        </p>

        <p>
          Ashleigh is truly passionate about her work and the service she
          provides to her clients, she ensures that all makeup applications are
          persionally tailored for her clients to ensure that they feel
          comfortable and look amazing for their special occassion.
        </p>

        <div className={styles.imagePair}>
          <img src="/about/img-2.jpg" alt="A photo of Ashleigh" />
          <img src="https://i.postimg.cc/RV2zGyvC/film-7.jpg" alt="A photo of Ashleigh" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className={styles.rightPicture}
      >
        <img src="/about/img-1.jpg" alt="A photo of Ashleigh" />
      </motion.div>
    </section>
  );
}
