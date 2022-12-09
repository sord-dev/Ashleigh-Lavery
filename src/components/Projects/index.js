import React from "react";
import styles from "./styles.module.css";

import { motion } from "framer-motion";
import { CatagoryList } from "./catagoryList";
import { ProjectList } from "./projectList";
import { useSortProjects } from "../../lib/hooks/useSortProjects";

export function Projects({ projects, catagories }) {
  const {
    sortedProjects,
    catagory,
    description,
    allCatagories,
    changeActiveCatagory,
  } = useSortProjects({
    projects,
    catagories,
    defaultCatagory: "editorial",
    defaultDescription:
      "My area of specialism is fashion/editorial makeup, I have experience working with photographers and fashion stylists on shoots where im able to bring concepts from fashion mood boards into reality! I’ve also recently received my first publication from photovouge while working on a collaborative fashion photoshoot.",
  });

  return (
    <section className={styles.projects} id="projects">
      <span>WHAT I DO</span>
      <h2>Projects</h2>
      <p>{description}</p>

      <CatagoryList
        {...{
          onClick: changeActiveCatagory,
          catagories: allCatagories,
          activeCatagory: catagory,
        }}
      />

      <ProjectList
        {...{
          ErrorPage,
          Project,
          projects: sortedProjects,
        }}
      />
    </section>
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
      <img
        src={project.image}
        alt={`${project.catagory} image number ${project.id + 1}`}
        title={project.catagory}
      />
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
