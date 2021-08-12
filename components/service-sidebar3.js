import React, { Fragment } from "react";

const ServiceSidebar3 = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Idéal pour les podcasts :</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>Diffusion temps réel ( LIVE )</a>
            </li>
            <li>
              <a>Caméras de qualité 4K</a>
            </li>
            <li>
              <a>Jusqu'à 4 plans différents</a>
            </li>
            <li>
              <a>Décors flexibles</a>
            </li>
            <li>
              <a>Écrans verts | Écrans noirs</a>
            </li>
            <li>
              <a>Ingénieurs vidéos</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Pour produire votre podcast :</h4>
          <p>
            Contactez-nous dès maintenant et obtenez la meilleure qualité de l'industrie audiovisuelle.
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar3;
