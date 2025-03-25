import { useState, useRef } from "react";
import classes from "./ChooseSection.module.css"; // Importujemy klasy z CSS Modules
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import CertificatesSection from "../CertificatesSection/CertificatesSection";

const ChooseSection = () => {
  const [activeTab, setActiveTab] = useState("projekty");

  // Dodajemy referencje do sekcji
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const aboutRef = useRef(null);

  // Funkcja przewijania do wybranej sekcji
  const scrollToSection = (section) => {
    if (section === "projekty" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "certyfikaty" && certificatesRef.current) {
      certificatesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "o mnie" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={classes.buttonsSection}>
        <button
          className={activeTab === "projekty" ? classes.active : ""}
          onClick={() => {
            setActiveTab("projekty");
            scrollToSection("projekty");
          }}
        >
          Projekty
        </button>
        <button
          className={activeTab === "certyfikaty" ? classes.active : ""}
          onClick={() => {
            setActiveTab("certyfikaty");
            scrollToSection("certyfikaty");
          }}
        >
          Certyfikaty
        </button>
        <button
          className={activeTab === "o mnie" ? classes.active : ""}
          onClick={() => {
            setActiveTab("o mnie");
            scrollToSection("o mnie");
          }}
        >
          O mnie
        </button>
      </div>

      <div className={classes.content}>
        {activeTab === "projekty" && (
          <div className={classes.contentSection} ref={projectsRef}>
            <ProjectsSection />
          </div>
        )}

        {activeTab === "certyfikaty" && (
          <div className={classes.contentSection} ref={certificatesRef}>
            <CertificatesSection />
          </div>
        )}

        {activeTab === "o mnie" && (
          <div className={classes.contentSection} ref={aboutRef}>
            {/* Sekcja "O mnie" - dodaj zawartość */}
          </div>
        )}
      </div>
    </>
  );
};

export default ChooseSection;
