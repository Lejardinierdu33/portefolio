import React from "react";
import {
  FaPencilRuler,
  FaLaptopCode,
  FaMobile,
  FaUserSecret,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";


function Proposition() {
  return (
    <div className="section_proposition" id="mesoffres">
      <div className="proposition_title">
        <h2>Qu'est ce que je fais ?</h2>
        <p>
          Qu’il s’agisse de comprendre vos besoins, de concevoir un plan et de
          livrer le produit final, je fais tout ce qui se situe entre ces
          lignes.
        </p>
      </div>

      <div className="proposition_content">
        <div className="proposition_content_item">


        <Fade direction="left">
          <div className="proposition_content_item_block">
            <div className="proposition_content_item_icon" id="pencil">
              <FaPencilRuler />
            </div>
            <div className="proposition_content_item_title">
              <h3>DUI/UX DESIGN</h3>
              <p>
                Je suis capable de vous fournir un design unique, je sais gérer
                plusieurs support pour le maquettage de site ou application web.
                Egalement je peux vous faire le design de flyers ou publicité.
              </p>
            </div>
          </div>
        </Fade>

        <Fade direction="down">
          <div className="proposition_content_item_block">
            <div className="proposition_content_item_icon" id="laptop">
              <FaLaptopCode />
            </div>
            <div className="proposition_content_item_title">
              <h3>DÉVELOPPEMENT WEB</h3>
              <p>
                Je peux vous mettre en place le site de votre choix, avec un
                tarif adapté à vos besoins. Un site web doit vous représenter,
                il doit marquer les esprits !
              </p>
            </div>
          </div>
          </Fade>
          <Fade direction="up">
          <div className="proposition_content_item_block">
            <div className="proposition_content_item_icon" id="mobile">
              <FaMobile />
            </div>
            <div className="proposition_content_item_title">
              <h3>DÉVELOPPEMENT APPLICATION</h3>
              <p>
                Si vous recherchez une application conviviale qui attirera
                davantage d'utilisateurs mobiles, je peux vous aider à concevoir
                et à construire une plate-forme avec l'apparence la plus récente
                et la plus tendance.
              </p>
            </div>
          </div>
    </Fade>
    <Fade direction="right">
          <div className="proposition_content_item_block">
            <div className="proposition_content_item_icon" id="usersecret">
              <FaUserSecret />
            </div>
            <div className="proposition_content_item_title">
              <h3>SÉCURITÉ DU SITE</h3>
              <p>
                Car la sécurité est très important de nos jours, aussi bien pour
                vous que pour les personnes venant sur votre site. Je met un
                point d'honneur à vous former dessus, et sécuriser le site pour
                que les données des utilisateurs ne soient pas récupérable par
                n'importe qui.
              </p>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Proposition;
