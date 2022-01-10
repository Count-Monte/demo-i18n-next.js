import React from "react";
import { useRouter } from 'next/router';
import serviceS2 from "@/images/s2.jpg";
import serviceS3 from "@/images/s3.png";
const ServiceDetailsContent2 = () => {
  const { locale } = useRouter();
  return (
    <div className="serviceArea">
      <h2 className="livres-audio">{locale === 'en-US' ? "Podcast production" : "Production de podcasts"}</h2>
      <img src={serviceS3} alt="" />
      <p>
        {locale === 'en-US' 
        ? "Located downtown, our new studios all have the perfect equipment for podcasting, live performances, pre-recorded performances and custom production. Treat yourself to the quality of our most efficient equipment in the industry for a project that will exceed your expectations." 
        : "Situés au centre-ville, nos nouveaux studios ont tous l’équipement idéal pour la réalisation de podcasts, de performances lives, de représentations préenregistrées et de production sur mesure. Offrez-vous la qualité de notre équipement le plus performant de l’industrie pour un projet qui dépassera vos attentes."}
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>{locale === 'en-US' ? "Sets and equipment" : "Décors et équipements"}</h3>
          <p>
            {locale === 'en-US' 
            ? "Take advantage of our podcast studio offering modifiable sets, flexible lighting, its location in the heart of Montreal and its state-of-the-art equipment." 
            : "Profitez de notre studio de podcasts offrant décors modifiables, un éclairage flexible, son emplacement en plein coeur de Montréal et son équipement à la fine pointe de la technologie."}
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Real-time broadcasting | Live" : "Diffusion en temps réel | Live"}
            </li>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "4K quality video cameras" : "Caméras vidéos de qualité 4K"}
            </li>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Possibility of up to 4 different plans" : "Possibilité jusqu'à 4 plans différents"}
            </li>
          </ul>
        </div>
      </div>
      <p>
        {locale === 'en-US' 
        ? `The services offered by Studio Kampus allow you to carry out turnkey projects. Trust our company renowned for its audio recordings, mixing, 
        podcast production, audiobook production, mastering, album design, and artistic and cultural fundraising.` 
        : `Les services offerts par Studio Kampus permettent de réaliser des projets clé en main.
        Faites confiance à notre entreprise réputée pour ses enregistrements audio, son mixage, sa production de podcasts, 
        sa production de livres audio, son mastering, sa conception d’album et sa recherche d’artistes et de financements culturels.`}
      </p>
    </div>
  );
};

export default ServiceDetailsContent2;
