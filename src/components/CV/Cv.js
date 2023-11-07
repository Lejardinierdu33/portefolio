import React from "react";
import Avatar from "../../img/Avatar_noBG.webp";
import { Fade } from "react-awesome-reveal";

function Cv() {
  return (
    <div className="cv_section" id="cv">
      <div className="cv_top_section">
        <Fade direction="top">
        <p>A propos de moi</p>
        <h2>
          Je suis un développeur web indépendant, passionné par la création de
          solutions numériques innovantes.
        </h2>
        </Fade>
      </div>
      <div className="cv_bot_section">
      <Fade direction="left" duration="1500">
        <div className="cbs_left">
          <h2 className="cbsl_text">
            Un site professionnel avec un design unique !
          </h2>
          <img src={Avatar} alt="avatar_logo" />
        </div>
        </Fade>
        <div className="cbs_right">
        <Fade direction="right" duration="1500">
          <p>
            Ma polyvalence et mon sens aigu de la responsabilité sont les
            piliers de ma carrière.
          </p>
          <p>
            Autonome et dynamique, j’ai toujours su exploiter mes connaissances
            au profit des projets que j’entreprends. Ma persévérance m’incite à
            continuellement développer mes compétences et à trouver des
            solutions créatives pour répondre aux besoins de mes clients.
          </p>
          <p>
            Mon parcours atypique m’a offert une perspective unique, combinant
            des expériences diverses avec ma passion pour l’informatique. Je
            maîtrise les langages HTML, CSS, JavaScript, Flutter, PHP… et je
            continue de me former pour rester à la pointe de la technologie. Le
            travail de veille numérique est la base d’un développeur web.
          </p>
          <p>
            Je suis enthousiaste à l’idée de collaborer avec des particuliers et
            des entreprises, apportant mon expertise pour concrétiser des
            projets de qualité. N’hésitez pas à me contacter pour discuter de la
            manière dont je peux vous aider à réaliser vos objectifs numériques.
          </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Cv;
