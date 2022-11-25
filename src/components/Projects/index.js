import React, { useState } from "react";
import styles from "./styles.module.css";

// create tamal-sen looking projects component filtering by topic
export function Projects({ projects }) {
  const [projectsList, setProjectsList] = useState(projects);
  
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

      <div className={styles.photoGallary}>
        {projectsList.map((project) => (
          <Project key={project.id} {...{ project }} />
        ))}
      </div>
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
