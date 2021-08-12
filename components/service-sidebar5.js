import React, { Fragment } from "react";

const ServiceSidebar5 = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Idéal pour les artistes :</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>Conception et Design</a>
            </li>
            <li>
              <a>Recherche d'artistes</a>
            </li>
            <li>
              <a>Recherche de subvention</a>
            </li>
            <li>
              <a>Relations de presse et lancements</a>
            </li>
            <li>
              <a>Édition et diffusion</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Pour la conception d'album :</h4>
          <p>
            Contactez notre équipe de conception et de réalisation pour vous supporter à travers le développement de votre album.
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar5;
