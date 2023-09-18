import React from "react";
import { useCountUp } from "react-countup";
import { FaLaptopCode, FaMoon, FaClock, FaUsers } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

function Work() {
  useCountUp({ ref: "counterProjet", start: 0, end: 15, duration: 10 });
  useCountUp({ ref: "counterHours", start: 0, end: 12650, duration: 10 });
  useCountUp({ ref: "counterNight", start: 0, end: 25, duration: 10 });
  useCountUp({ ref: "counterClient", start: 0, end: 5, duration: 10 });

  const iconColor = "#ff6600";

  return (
    <div className="section_counter">
      <Fade className="fade_left">
        <div className="counter_projet">
          <div id="counterProjet"></div>
          <FaLaptopCode
            className="counter_icon"
            style={{ color: iconColor }}
          />{" "}
          Projets Réalisés
        </div>

        <div className="counter_hours">
          <div id="counterHours"></div>
          <FaClock className="counter_icon" style={{ color: iconColor }} />{" "}
          Nombre d'heure
        </div>
      </Fade>
      <Fade className="fade_right">
        <div className="counter_night">
          <div id="counterNight"></div>
          <FaMoon className="counter_icon" style={{ color: iconColor }} /> Nuits
          Blanche
        </div>

        <div className="counter_client">
          <div id="counterClient"></div>
          <FaUsers className="counter_icon" style={{ color: iconColor }} />{" "}
          Nombre de Client
        </div>
      </Fade>
    </div>
  );
}

export default Work;
