import React, { useState } from "react";
import styles from "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const TEST_PROJECTS = [
  {
    id: 0,
    name: "catagory 1",
    image: "/placeholders/small-placeholder.png",
    link: "#",
  },
  {
    id: 1,
    name: "catagory 2",
    image: "/placeholders/small-placeholder.png",
    link: "#",
  },
  {
    id: 2,
    name: "catagory 3",
    image: "/placeholders/small-placeholder.png",
    link: "#",
  },
  {
    id: 3,
    name: "catagory 4",
    image: "/placeholders/small-placeholder.png",
    link: "#",
  },
  {
    id: 4,
    name: "catagory 5",
    image: "/placeholders/small-placeholder.png",
    link: "#",
  },
];

export function Projects({ projects }) {
  const [projectsList, setProjectsList] = useState(TEST_PROJECTS);
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
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
