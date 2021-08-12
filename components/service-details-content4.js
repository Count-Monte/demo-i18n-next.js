import React from "react";
import serviceS2 from "@/images/s10.jpg";
import serviceS3 from "@/images/s9.jpg";
const ServiceDetailsContent4 = () => {
  return (
    <div className="serviceArea">
      <h2 className="livres-audio">Conception et enregistrement d'albums</h2>
      <img src={serviceS3} />
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Recherche d'artistes et subventions</h3>
          <p>
            Vous avez un projet d'album musical ? Faites-nous confiance tout au long du processus
            et du développement de votre projet d'album. Nous avons l'expérience en recherche de subventions,
            recherche d'artistes, en conception et en réalisation d'albums musicaux.
          </p>
        </div>
      </div>
      <p>
        Faites de votre album une fierté personnelle et un produit local de haute qualité musicale.
      </p>
    </div>
  );
};

export default ServiceDetailsContent4;
