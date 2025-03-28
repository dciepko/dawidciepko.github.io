import classes from "./CertificateElement.module.css";

const CertificateElement = ({ title, author, file, description }) => {
  return (
    <div className={classes.certificateElement}>
      <div className={classes.mainPart}>
        <div className={classes.certificateInfo}>
          <h4>{title}</h4>
          {author && <p>Wydany przez: {author}</p>}
        </div>
        <div className={classes.certificateLink}>
          <p>
            <a
              href={`/dawidciepko.github.io/cert/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz PDF
            </a>
          </p>
        </div>
      </div>
      <div className={classes.descritpionPart}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CertificateElement;
