import React, { useState } from "react";
import styles from "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// create tamal-sen looking projects component filtering by topic
export function Projects({ projects }) {
  const [projectsList, setProjectsList] = useState(projects);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.projects} id="projects">
      <span>WHAT I DO</span>
      <h3>Projects</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem,
        officiis cumque aliquam quam sequi reprehenderit delectus adipisci,
        velit nisi reiciendis voluptatibus similique, saepe possimus doloremque!
        Architecto quae adipisci incidunt?
      </p>

      <Slider className={styles.slider} {...settings}>
        {projectsList.map((project) => (
          <Project key={project.id} {...{ project }} />
        ))}
      </Slider>
    </div>
  );
}

const Project = ({ project }) => {
  return (
    <div className={styles.project}>
      <img src={project.image} alt={project.name} />
    </div>
  );
};
