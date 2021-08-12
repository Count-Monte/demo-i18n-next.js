import React from "react";
import serviceS2 from "@/images/s8.jpg";
import serviceS3 from "@/images/s7.jpg";
const ServiceDetailsContent3 = () => {
  return (
    <div className="serviceArea">
      <h2 className="livres-audio">Évènementiel et expérientiel</h2>
      <img src={serviceS3} />
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Privé et chaleureux</h3>
          <p>
            Vous avez un projet de lancement ? Ou un projet de soirée privée ou de performances live ?
            Louez nos espaces créatifs tout-en-un pour un tarif minime de 100$ par heure.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>Salle avec plus de 100 places confortables
            </li>
            <li>
              <i className="fa fa-check-square"></i>Éclairage de scène professionnel
            </li>
            <li>
              <i className="fa fa-check-square"></i>Équipement de capture de son et de vidéo
            </li>
          </ul>
        </div>
      </div>
      <p>
        Faites de votre évènement un succès en créant des moments inoubliables dans nos espaces hors du commun.
      </p>
    </div>
  );
};

export default ServiceDetailsContent3;
