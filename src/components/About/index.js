import React from "react";
import styles from "./styles.module.css";

export function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.mainContent}>
        <span>MAKEUP ARTIST</span>
        <h3>Ashleigh Lavery</h3>
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
          comfortable and look amazing for their special occassion. To get in
          contact for booking and enquires, all handles can be found in the
          contact me section.
        </p>

        <div className={styles.imagePair}>
          <img src="/about/img-2.jpg" alt="A photo of Ashleigh" />
          <img src="/about/img-3.jpg" alt="A photo of Ashleigh" />
        </div>
      </div>
      <div className={styles.rightPicture}>
        <img src="/about/img-1.jpg" alt="A photo of Ashleigh" />
      </div>
    </div>
  );
}
