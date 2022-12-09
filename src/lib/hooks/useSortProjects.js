import { useEffect, useState } from "react";

export function useSortProjects({
  projects = [],
  catagories = [],
  defaultCatagory = "",
  defaultDescription = "",
}) {
  const [projectsList, setProjectsList] = useState([]);
  const [activeCatagory, setActiveCatagory] = useState(defaultCatagory);
  const [activeDescription, setActiveDescription] =
    useState(defaultDescription);

  const changeActiveCatagory = (catagory) => {
    setActiveCatagory(catagory.name.toLowerCase());
    if (catagory.description) {
      setActiveDescription(catagory.description);
    } else {
      setActiveDescription(null);
    }
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
    description: activeDescription,
    allCatagories: catagories,
    changeActiveCatagory,
  };
}
