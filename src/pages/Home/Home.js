import React from "react";
import NavBar from "../../components/Navbarre/NavBarre";
import CvSection from "../../components/CV/Cv";
import WorkCounter from "../../components/work/Work";
import Skills from "../../components/Skills/Skills";
import Proposition from "../../components/Proposition/Proposition";
import ScrollImg from "../../components/Scrollimage/ScrollImg";
import Caroussel from "../../components/Caroussel/Caroussel";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton"; // Importez le composant ScrollToTopButton

function Home() {
  const iconColor = "#ff6600";

  return (
    <div>
      <NavBar />
      <header className="header">
        <div className="header_title">
          <hr />
          <Fade direction="left" triggerOnce>
            <h1>Léo Ségalini</h1>
            <p className="text_title">Développeur Web</p>
            <div className="number_mail">
              <div className="text_coo">
                <a href="mailto:leo.segalini@outlook.com">
                  <FaEnvelope style={{ color: iconColor }} />{" "}
                  leo.segalini@outlook.com
                </a>
              </div>
              <div className="text_coo">
                <a href="tel:+3370963371">
                  <FaPhone style={{ color: iconColor }} /> +33 70 96 33 71
                </a>
              </div>
              <div className="text_coo">
                <a href="https://github.com/Lejardinierdu33">
                  <FaGithub style={{ color: iconColor }} />{" "}
                  https://github.com/Lejardinierdu33
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </header>
      <CvSection />
      <WorkCounter />
      <Skills />
      <Proposition />
      <ScrollImg />
      <Caroussel />
      <Contact />
      <Footer />
      <ScrollToTopButton /> {/* Ajoutez le composant ScrollToTopButton ici */}
    </div>
  );
}

export default Home;
