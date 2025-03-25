import CertificateElement from "../CertificateElement/CertificateElement";
import classes from "./CertificatesSection.module.css";
import Certificates from "../../data/cert";

const CertificatesSection = () => {
  return (
    <div className={classes.certificatesSection}>
      {Certificates.map((cert, index) => (
        <CertificateElement
          key={index}
          title={cert.title}
          author={cert.author}
          file={cert.file}
        />
      ))}
    </div>
  );
};

export default CertificatesSection;
