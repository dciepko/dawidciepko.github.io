import ProjectElement from "../ProjectElement/ProjectElement";
import classes from "./ProjectsSection.module.css";
import Projects from "../../data/projects";

const ProjectsSection = () => {
  return (
    <div>
      <ProjectElement project={Projects[0]} />
      <ProjectElement project={Projects[1]} />
      <ProjectElement project={Projects[2]} />
    </div>
  );
};

export default ProjectsSection;
