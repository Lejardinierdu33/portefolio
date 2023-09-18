import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/png_logo_black.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="logo Léo Ségalini" />
        </div>
        <ul className="footer-nav">
          <NavLink to={"/"}>Accueil</NavLink>
          <li className="linav">
            <NavLink href="#cv">Me découvrir</NavLink>
          </li>
          <li className="linav">
            <NavLink href="#skills">Skills</NavLink>
          </li>
          <li className="linav">
            <NavLink href="#mesoffres">Mes Offres</NavLink>
          </li>
          <li className="linav">
            <NavLink href="#portefolio">Portefolio</NavLink>
          </li>
          <li className="linav">
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Leo Segalini
      </div>
    </footer>
  );
}

export default Footer;
