import React from "react";
import styles from "./styles.module.css";

export function ProjectList({ ErrorPage, Project, projects }) {
  return (
    <div className={styles.photoGallary}>
      {projects.length ? (
        projects.map((project, index) => (
          <Project key={project.id} {...{ project, index }} />
        ))
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
