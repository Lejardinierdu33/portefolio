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
      </div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Leo Segalini || <NavLink to={"/mentions_legales"} className="mentionslegales_footer">Mentions Légales</NavLink>
      </div>
    </footer>
  );
}

export default Footer;
