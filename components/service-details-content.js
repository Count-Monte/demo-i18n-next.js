import React from "react";
import serviceS1 from "@/images/s1.png";
import serviceS5 from "@/images/s5.jpg";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <h2 className="livres-audio">Production de livres audio</h2>
      <img src={serviceS1} alt="" />
      <p>
        Notre production de livres audio, notre expérience, nos processus et nos infrastructures sont optimisés afin d’offrir une qualité inégalée, 
        un délai imbattable et des tarifs concurrentiels. De la production à la distribution, notre infrastructure et notre écosystème sont tous ce 
        dont vous avez besoin pour être au-dessus des standards de l'industrie.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS5} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Cabines privées</h3>
          <p>
            Nos ingénieurs dévoués et passionnés ainsi que nos équipements spécialisés amèneront une nouvelle dimension à votre projet de livre audio.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>Enregistrements privés et personnalisés
            </li>
            <li>
              <i className="fa fa-check-square"></i>Équipements et appareils diversifiés
            </li>
            <li>
              <i className="fa fa-check-square"></i>Plusieurs narrateurs simultanés possibles
            </li>
            <li>
            <i className="fa fa-check-square"></i>Design Sonore | Mixage | Mastering
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
