import React from "react";
import serviceS2 from "@/images/s2.jpg";
import serviceS3 from "@/images/s3.png";
const ServiceDetailsContent2 = () => {
  return (
    <div className="serviceArea">
      <h2 className="livres-audio">Production de podcasts</h2>
      <img src={serviceS3} alt="" />
      <p>
        Situés au centre-ville, nos nouveaux studios ont tous l’équipement idéal pour la réalisation de podcasts, de performances lives, 
        de représentations préenregistrées et de production sur mesure. Offrez-vous la qualité de notre équipement le plus performant de 
        l’industrie pour un projet qui dépassera vos attentes.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Décors et équipements</h3>
          <p>
            Profitez de notre studio de podcasts offrant décors modifiables, un éclairage flexible,
            son emplacement en plein coeur de Montréal et son équipement à la fine pointe de la technologie.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>Diffusion en temps réel | Live
            </li>
            <li>
              <i className="fa fa-check-square"></i>Caméras vidéos de qualité 4K
            </li>
            <li>
              <i className="fa fa-check-square"></i>Possibilité jusqu'à 4 plans différents
            </li>
          </ul>
        </div>
      </div>
      <p>
        Les services offerts par Studio Kampus permettent de réaliser des projets clé en main.
        Faites confiance à notre entreprise réputée pour ses enregistrements audio, son mixage, sa production de podcasts, 
        sa production de livres audio, son mastering, sa conception d’album et sa recherche d’artistes et de financements culturels.
      </p>
    </div>
  );
};

export default ServiceDetailsContent2;
