import React from "react";
import styles from "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export function Projects({ projects }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.projects} id="projects">
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slider>
    </div>
  );
}
