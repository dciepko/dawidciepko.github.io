import classes from "./AboutMeSection.module.css";
import Skills from "../../data/skills";
import { useState } from "react";

function AboutMeSection() {
  const [scaleVisible, setScaleVisible] = useState(false);

  const toggleScaleVisibility = () => {
    setScaleVisible((prevState) => !prevState);
  };

  return (
    <div className={classes.aboutMeContainer}>
      <h1>O mnie</h1>
      <p>
        Nazywam się Dawid Ciepko i jestem absolwentem studiów inżynierskich na
        kierunku Informatyka na Uniwersytecie Opolskim. Najlepiej odnajduję się
        w technologiach frontendowych (głównie React), jednak mam również
        doświadczenie w tworzeniu aplikacji backendowych, w tym w technologiach
        takich jak Java Spring i C# .NET. Z pasją rozwijam swoje umiejętności
        programistyczne i jestem otwarty na pracę nad nowymi, ciekawymi
        projektami. Posiadam biegłą znajomość języka angielskiego.
      </p>
      <h1>Umiejętności</h1>
      <div className={classes.skillsContainer}>
        {Skills.map((skill, index) => (
          <div key={index} className={classes.skillItem}>
            <span className={classes.skillName}>{skill.skill}</span>
            <div className={classes.skillLevel}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < skill.level ? classes.filledDot : classes.emptyDot
                  }
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className={classes.scaleButton} onClick={toggleScaleVisibility}>
        {scaleVisible ? "Ukryj skalę" : "Pokaż skalę"}
      </button>

      {scaleVisible && (
        <div className={classes.scaleDescription}>
          <p>
            <strong>Skala:</strong>
          </p>
          <p>
            <span className={classes.filledDot}></span> 1 kropka = Podstawowa
            znajomość
            <br />
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span> 2 kropki = Średnia
            znajomość
            <br />
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span> 3 kropki = Dobra
            znajomość
            <br />
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span> 4 kropki = Bardzo dobra
            znajomość
            <br />
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span>
            <span className={classes.filledDot}></span> 5 kropek = Zaawansowana
            znajomość
          </p>
        </div>
      )}
      <h1>Kontakt</h1>
      <p>E-mail: dciepko17@gmail.com</p>
      <p>GitHub: github.com/example</p>
    </div>
  );
}

export default AboutMeSection;
