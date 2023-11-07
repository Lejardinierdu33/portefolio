import React, { useEffect, useState } from "react";
import logo from "../../img/png_logo_black.webp";
import { NavLink } from "react-router-dom";

function NavBarre() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu burger

  useEffect(() => {
    // Fonction pour vérifier le défilement de la page
    function checkScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Vérifier la position du défilement et définir la section active
      const cvSection = document.getElementById("cv");
      const skillsSection = document.getElementById("skills");
      const mesOffresSection = document.getElementById("mesoffres");
      const portefolioSection = document.getElementById("portefolio");
      const contactSection = document.getElementById("contact");

      if (
        cvSection &&
        skillsSection &&
        mesOffresSection &&
        portefolioSection &&
        contactSection
      ) {
        const cvOffset = cvSection.offsetTop;
        const skillsOffset = skillsSection.offsetTop;
        const mesOffresOffset = mesOffresSection.offsetTop;
        const portefolioOffset = portefolioSection.offsetTop;
        const contactOffset = contactSection.offsetTop;
        const currentScroll = window.scrollY;

        if (currentScroll >= cvOffset && currentScroll < skillsOffset) {
          setActiveSection("cv");
        } else if (
          currentScroll >= skillsOffset &&
          currentScroll < mesOffresOffset
        ) {
          setActiveSection("skills");
        } else if (
          currentScroll >= mesOffresOffset &&
          currentScroll < portefolioOffset
        ) {
          setActiveSection("mesoffres");
        } else if (
          currentScroll >= portefolioOffset &&
          currentScroll < contactOffset
        ) {
          setActiveSection("portefolio");
        } else if (currentScroll >= contactOffset) {
          setActiveSection("contact");
        } else {
          setActiveSection("");
        }
      }
    }

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Gérer le clic sur le bouton du menu hamburger
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Gérer le clic sur un lien du menu
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className={`nav ${scrolled ? "scrolled-bg" : "initial-bg"}`}>
        <div className="image_logo">
          <img src={logo} alt="logo léo Ségalini" />
        </div>

        {/* Bouton du menu hamburger */}
        <div
          className={`icons_burger ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        {/* Menu de navigation */}
        <ul className={`nav_barre ${isMenuOpen ? "active" : ""}`}>
          <NavLink
            to={"/"}
            className={`linav ${activeSection === "accueil" ? "active" : ""}`}
            onClick={handleNavLinkClick}
          >
            Accueil
          </NavLink>
          <li className="linav">
            <a
              href="#cv"
              className={`linav ${activeSection === "cv" ? "active" : ""}`}
              onClick={handleNavLinkClick}
            >
              Découvrir
            </a>
          </li>
          <li className="linav">
            <a
              href="#skills"
              className={`linav ${activeSection === "skills" ? "active" : ""}`}
            >
              Skills
            </a>
          </li>
          <li className="linav">
            <a
              href="#mesoffres"
              className={`linav ${
                activeSection === "mesoffres" ? "active" : ""
              }`}
            >
              Offres
            </a>
          </li>
          <li className="linav">
            <a
              href="#portefolio"
              className={`linav ${
                activeSection === "portefolio" ? "active" : ""
              }`}
            >
              Portefolio
            </a>
          </li>
          <li className="linav">
            <a
              href="#contact"
              className={`linav ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarre;
