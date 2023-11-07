import React from "react";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import logo from "../../img/png_logo_black.webp";

function MentionsLegales() {
  return (
    <div className="section_mention_legales">
      <nav className="nav_mention_legales">
        <img src={logo} alt="logo léo segalini" />
        <NavLink to={"/"} className='nml_link'>Accueil</NavLink>
      </nav>
      <div className="start_mention_legales">
        <h1>Mentions Légales</h1>
        <div className="coordonnees_section">
            <h2>Coordonnées Personnelles</h2>
          <p><strong>Identité :</strong> Ségalini--Briant Léo</p>
          <p><strong>Adresse du domicile :</strong> 7j Chemin Felicien Hibon, 97424 Piton Saint Leu, La Réunion</p>
          <p><strong>Mail :</strong> leo.segalini@outlook.com</p>
          <p><strong>Tel :</strong> +33 6 70 96 33 71</p>
        </div>
        <div className="mention_propriéte">
            <h2>Propriétée intellectuelle</h2>
          <p>
            Photo de{" "}
            <a href="https://unsplash.com/fr/@timschmidbauer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Tim Schmidbauer
            </a>{" "}
            sur{" "}
            <a href="https://unsplash.com/fr/photos/CsJW-kLxw_c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
          <p>
            Photo de{" "}
            <a href="https://unsplash.com/fr/@agk42?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Alex Knight
            </a>{" "}
            sur{" "}
            <a href="https://unsplash.com/fr/photos/j4uuKnN43_M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
          <p>
            Photo de{" "}
            <a href="https://unsplash.com/fr/@amr_taha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Amr Taha™
            </a>{" "}
            sur{" "}
            <a href="https://unsplash.com/fr/photos/h7F8eOLQSX4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
        <div className="coordonees_hebergeur">
            <h2>Coordonnées de l'Hébergeur</h2>
            <p><strong>Nom de l'hébergeur :</strong> Netlify</p>
            <p><strong>Raison sociale :</strong> Netlify, Inc.</p>
            <p><strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, California 94104</p>
            <p><strong>Email :</strong> support@netlify.com</p>
            <p><strong>Numéro de téléphone :</strong> (415) 691-1573</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MentionsLegales;
