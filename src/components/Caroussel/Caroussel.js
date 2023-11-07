import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rick from "../../img/site_img/API-Rick-et-Morty.webp";
import Pokemon from "../../img/site_img/API-Pokemon.webp";
import MovieApi from "../../img/site_img/Trouves-ton-film.webp";
import Geo from "../../img/site_img/La-Geo-pour-les-nuls.webp";
import WPPortefolio from "../../img/site_img/WordPressFolio.webp";
import WPAyoka from "../../img/site_img/WordPress-Ayoka.webp";
import WPSpa from "../../img/site_img/WordPress-SpaByNoom.webp";
import WPMayotte from "../../img/site_img/WordPress-Mayotte-Fourniture.webp";
// import FlutterHalal from "../../img/site_img/Flutter-Halal-Reunion-_1_.webp";

function Caroussel() {

  const redirectToUrl = (url) => {
    window.open(url, "_blank"); // Ouvrez l'URL dans un nouvel onglet
    // Ou utilisez la ligne suivante pour rediriger dans la même fenêtre
    // window.location.href = url;
  };

  return (
    <div className="portfolio-carousel" id="portefolio">
      <h2 className="carousel-title">Mon Portefolio</h2>
      <p>2023</p>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        stopOnHover={true}
      >
        {/* <div>
          <img src={FlutterHalal} alt="Flutter Halal Réunion" className="halal_reunion_img" id="halal_reunion_img"/>
          <p className="carousel-description">
            Application en flutter pour Halal Réunion.
          </p>
        </div> */}
        <div onClick={() => redirectToUrl("https://leosegalini-portefolio.netlify.app/")}>
          <img src={WPPortefolio} alt="Word Press Portefolio" className="carousel-image" />
          <p className="carousel-description">
            Portefolio Word Press, manipulation de WordPress et de PHP.
          </p>
        </div>
        <div onClick={() => redirectToUrl("https://ayokarestaurant.ci/")}>
          <img src={WPAyoka} alt="Word Press Ayoka" className="carousel-image" />
          <p className="carousel-description">
            Word Press, manipulation de WordPress, Elementor Pro, CrocoBloc.
          </p>
        </div>
        <div onClick={() => redirectToUrl("https://mayottefournitures.yt/")}>
          <img src={WPMayotte} alt="Word Press Mayotte Fourniture" className="carousel-image" />
          <p className="carousel-description">
            Word Press, manipulation de WordPress, Elementor Pro, CrocoBloc et Woocommerce .
          </p>
        </div>
        <div onClick={() => redirectToUrl("https://spabynoom.ci/")}>
          <img src={WPSpa} alt="Word Press SpaByNoom" className="carousel-image" />
          <p className="carousel-description">
          Word Press, manipulation de WordPress, Elementor Pro, CrocoBloc.
          </p>
        </div>
        <div onClick={() => redirectToUrl("https://api-movie-found.netlify.app/")}>
          <img src={MovieApi} alt="Movie API" className="carousel-image" />
          <p className="carousel-description">
            Site créé avec REACT et la gestion d'une API, l'objectif est d'avoir
            la possibilité de rechercher son film avec la description, note..etc
          </p>
        </div>
        <div onClick={() => redirectToUrl("https://rick-et-morty-api.netlify.app/")}>
          <img src={Rick} alt="Rick et Morty API" className="carousel-image" />
          <p className="carousel-description">
            Site créé avec REACT et la gestion d'une API, l'objectif est d'avoir
            la possibilité de rechercher l'état de vie, le lieu de naissance ou
            tout autre informations concernant tous les personnages de Rick et
            Morty.
          </p>
        </div>
        <div onClick={() => redirectToUrl("https://api-pokemon-team.netlify.app/")}>
          <img src={Pokemon} alt="Pokemon API" className="carousel-image" />
          <p className="carousel-description">
            Site créé avec REACT et la gestion d'une API, l'objectif est d'avoir
            la possibilité de rechercher chaque Pokémon par génération, hp,
            attaque, defense..etc
          </p>
        </div>

        <div onClick={() => redirectToUrl("https://geo-pour-les-nuls.netlify.app/")}>
          <img src={Geo} alt="Movie API" className="carousel-image" />
          <p className="carousel-description">
            Site créé avec REACT et la gestion d'une API, l'objectif est d'avoir
            la possibilité de rechercher chaque pays dans le monde, de cliquer
            dessus pour être renvoyer sur google maps et le situé, le nombre de
            personne. Objectif est d'aider les enfants dans l'apprentissage de
            la géographie.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Caroussel;
