import classes from "./ProjectElement.module.css";

const ProjectElement = ({ project }) => {
  let videoUrl = `https://www.youtube.com/embed/${project.video}`;

  console.log(videoUrl);

  return (
    <div className="project-element">
      <h2>{project.title}</h2>
      <span className={classes.videoAndDescriptionContainer}>
        <span className={classes.videoContainer}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            allowFullScreen
          ></iframe>
        </span>
        <span className={classes.descriptionContainer}>
          <span className={classes.description}>
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
