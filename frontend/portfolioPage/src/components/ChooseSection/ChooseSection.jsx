import { useState, useRef, useEffect } from "react";
import classes from "./ChooseSection.module.css";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import CertificatesSection from "../CertificatesSection/CertificatesSection";
import AboutMeSection from "../AboutMeSection/AboutMeSection";

const ChooseSection = () => {
  const [activeTab, setActiveTab] = useState("projekty");
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const aboutRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log("weszlo");
      isFirstRender.current = false;
      return;
    } else {
      if (activeTab === "projekty" && projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (activeTab === "certyfikaty" && certificatesRef.current) {
        certificatesRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (activeTab === "o mnie" && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeTab]);

  return (
    <>
      <div className={classes.buttonsSection}>
        <button
          className={activeTab === "projekty" ? classes.active : ""}
          onClick={() => setActiveTab("projekty")}
        >
          Projekty
        </button>
        <button
          className={activeTab === "certyfikaty" ? classes.active : ""}
          onClick={() => setActiveTab("certyfikaty")}
        >
          Certyfikaty
        </button>
        <button
          className={activeTab === "o mnie" ? classes.active : ""}
          onClick={() => setActiveTab("o mnie")}
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
            <AboutMeSection />{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default ChooseSection;
