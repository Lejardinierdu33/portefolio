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
          <p className="carousel-description">WordPress + PHP</p>
        </div>
        <div>
          <img src={MovieApi} alt="Movie API" className="carousel-image" />
          <p className="carousel-description">API + REACT</p>
        </div>
        <div>
          <img src={Rick} alt="Rick et Morty API" className="carousel-image" />
          <p className="carousel-description">API + REACT</p>
        </div>
        <div>
          <img src={Pokemon} alt="Pokemon API" className="carousel-image" />
          <p className="carousel-description">API + REACT</p>
        </div>
        
        <div>
          <img src={Geo} alt="Movie API" className="carousel-image" />
          <p className="carousel-description">API + REACT</p>
        </div>
       
      </Carousel>
    </div>
  );
}

export default Caroussel;
