import React from "react";
import styles from "./styles.module.css";

import { motion } from "framer-motion";
import { CatagoryList } from "./catagoryList";
import { ProjectList } from "./projectList";
import { useSortProjects } from "../../lib/hooks/useSortProjects";

export function Projects({ projects, catagories }) {
  const { sortedProjects, catagory, allCatagories, changeActiveCatagory } =
    useSortProjects({
      projects,
      catagories,
      defaultCatagory: "editorial",
    });

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

      <CatagoryList
        {...{
          onClick: changeActiveCatagory,
          catagories: allCatagories,
          activeCatagory: catagory,
        }}
      />

      <ProjectList
        ErrorPage={ErrorPage}
        Project={Project}
        projects={sortedProjects}
      />
    </div>
  );
}

const Project = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className={styles.project}
    >
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
