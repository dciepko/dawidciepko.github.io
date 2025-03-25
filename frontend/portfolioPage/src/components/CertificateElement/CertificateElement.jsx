import classes from "./CertificateElement.module.css";

const CertificateElement = ({ title, author, file }) => {
  return (
    <div className={classes.certificateElement}>
      <div className={classes.certificateInfo}>
        <p>{title}</p>
        <p>{author}</p>
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
  );
};

export default CertificateElement;
