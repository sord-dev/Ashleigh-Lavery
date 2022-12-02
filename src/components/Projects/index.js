import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { motion } from 'framer-motion';

export function Projects({ projects, catagories }) {
  const [projectsList, setProjectsList] = useState([]);
  const [activeCatagory, setActiveCatagory] = useState("editorial");

  const changeImages = (catagory) => {
    if (!catagories.includes(catagory)) return;
    setActiveCatagory(catagory.toLowerCase());
  };

  // rendering the list based on the active catagory
  useEffect(() => {
    setProjectsList(
      projects.filter(
        (project) => project.catagory === activeCatagory.toLowerCase()
      )
    );
  }, [projects, activeCatagory]);

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

      <div className={styles.photoCatagoryList}>
        {catagories?.map((catagory, index) => {
          const currCat = catagory.toLowerCase();
          return (
            <button
              key={`catagory-btn-${index}`}
              onClick={() => changeImages(catagory)}
              className={currCat === activeCatagory ? styles.active : null}
            >
              {catagory}
            </button>
          );
        })}
      </div>

      <div className={styles.photoGallary}>
        {projectsList.length ? (
          projectsList
            .filter((e, index) => index < 6)
            .map((project, index) => <Project key={project.id} {...{ project, index }} />)
        ) : (
          <ErrorPage />
        )}
      </div>
    </div>
  );
}

const Project = ({ project, index }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1}} className={styles.project}>
      <img src={project.image} alt={project.name} />
    </motion.div>
  );
};

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <p>oops... no results</p>
    </div>
  );
};
