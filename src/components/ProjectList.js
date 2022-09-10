import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const getProjects = projects.map((project) => {
    return <ProjectItem key={project.id} {...project} />
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{getProjects}</div>
    </div>
  );
}

export default ProjectList;
