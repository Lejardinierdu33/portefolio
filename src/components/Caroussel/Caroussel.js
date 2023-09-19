import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rick from "../../img/site_img/API Rick et Morty.png";
import Pokemon from "../../img/site_img/API Pokemon.png";
import MovieApi from "../../img/site_img/Trouves ton film.png";
import Geo from "../../img/site_img/La Geo pour les nuls.png";
import WordPress from "../../img/site_img/WordPressFolio.png";

function Caroussel() {
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
        <div>
          <img src={WordPress} alt="Movie API" className="carousel-image" />
          <p className="carousel-description">
            Portefolio Word Press, manipulation de WordPress et de PHP.
          </p>
        </div>
        <div>
          <img src={MovieApi} alt="Movie API" className="carousel-image" />
          <p className="carousel-description">
            Site créé avec REACT et la gestion d'une API, l'objectif est d'avoir
            la possibilité de rechercher son film avec la description, note..etc
          </p>
        </div>
        <div>
          <img src={Rick} alt="Rick et Morty API" className="carousel-image" />
          <p className="carousel-description">
            Site créé avec REACT et la gestion d'une API, l'objectif est d'avoir
            la possibilité de rechercher l'état de vie, le lieu de naissance ou
            tout autre informations concernant tous les personnages de Rick et
            Morty.
          </p>
        </div>
        <div>
          <img src={Pokemon} alt="Pokemon API" className="carousel-image" />
          <p className="carousel-description">
            Site créé avec REACT et la gestion d'une API, l'objectif est d'avoir
            la possibilité de rechercher chaque Pokémon par génération, hp,
            attaque, defense..etc
          </p>
        </div>

        <div>
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
