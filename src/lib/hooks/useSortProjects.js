import { useEffect, useState } from "react";

export function useSortProjects({
  projects = [],
  catagories = [],
  defaultCatagory = "",
}) {
  const [projectsList, setProjectsList] = useState([]);
  const [activeCatagory, setActiveCatagory] = useState(defaultCatagory);

  const changeActiveCatagory = (catagory) => {
    if (!catagories.includes(catagory)) return;
    setActiveCatagory(catagory.toLowerCase());
  };

  useEffect(() => {
    if (activeCatagory) {
      setProjectsList(
        projects.filter(
          (project) => project.catagory === activeCatagory.toLowerCase()
        )
      );
    }
  }, [projects, activeCatagory]);

  return {
    sortedProjects: projectsList,
    catagory: activeCatagory,
    allCatagories: catagories,
    changeActiveCatagory,
  };
}
