import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  const skillsData = [
    { label: "HTML", value: 90 },
    { label: "CSS", value: 75 },
    { label: "JavaScript", value: 70 },
    { label: "React", value: 80 },
    { label: "Nodejs", value: 65 },
    { label: "PHP", value: 55 },
    { label: "WordPress", value: 85 },
    { label: "Flutter", value: 60 },
  ];

  return (
    <div className="section_skills" id="skills">
      <div className="section_progressbar">
        <h2>Mes Skills</h2>
        <div className="section_bar">
          {skillsData.map((skill, index) => (
             <div key={index} className="skill-item">
             <span className="skill-label">{skill.label}</span>
            <ProgressBar
              key={index}
              now={skill.value}
              label={`${skill.value}%`}
              className={`${skill.label.toLowerCase()}_progressbar`}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="section_experiences">
        <h2>Mes Expériences</h2>
        <div className="section_allexp">
          <div className="section_exp">
            <div className="section_exp_left">
              <span>2023</span>
              <hr />
              <p>IFR Saint-Pierre, La Réunion</p>
            </div>
            <div className="section_exp_right">
              <h2>FORMATION DÉVELOPEUR WEB</h2>
              <p>
                Formation à l'IFR de Saint Pierre pour avoir le titre
                professionnel Développeur Web. Apprentissage de plusieurs
                langages et mise en place de différents projet.
              </p>
            </div>
          </div>
          <div className="section_exp">
            <div className="section_exp_left">
              <span>2023</span>
              <hr />
              <p>Agence Web Iroko, St Denis, La réunion</p>
            </div>
            <div className="section_exp_right">
              <h2>DÉVELOPPEUR WEB</h2>
              <p>
                Gestion projet, mise en ligne de site internet pour des clients.
                Mise en place d'application mobile (avec Flutter) de sites
                e-commerce. Utilisation de différent framework.
              </p>
            </div>
          </div>
          <div className="section_exp">
            <div className="section_exp_left">
              <span>2013-2023</span>
              <hr />
              <p>Métropole</p>
            </div>
            <div className="section_exp_right">
              <h2>POLYVALENT</h2>
              <p>
                Fac de Biologie, Weeding planner, Chef de Cuisine, Responsable
                service recouvrement, Commercial en Assurance, Un Parcours
                atypique, mais varié qui me permet d'avoir une grande force
                d'adaptation et une excellente écoute client !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
