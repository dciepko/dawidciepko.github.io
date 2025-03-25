import classes from "./ProjectElement.module.css";

const ProjectElement = ({ project }) => {
  return (
    <div className="project-element">
      <h2>{project.title}</h2>
      <span className={classes.videoAndDescriptionContainer}>
        <span className={classes.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MLW0rQnJ-sw"
            allowFullScreen
          ></iframe>
        </span>
        <span className={classes.descriptionContainer}>
          <span>
            <h4>Opis:</h4>
            <p>{project.description}</p>
          </span>
          <span>
            <h4>Technologie:</h4>
            <p> {project.technologies.join(" • ")} </p>
          </span>
        </span>
      </span>
    </div>
  );
};

export default ProjectElement;
