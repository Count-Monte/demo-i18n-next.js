import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Idéal pour les livres audio :</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>Cabines privées pour naration</a>
            </li>
            <li>
              <a>Plus de 200 micros différents</a>
            </li>
            <li>
              <a>Design sonore | Bruitage</a>
            </li>
            <li>
              <a>Naration en simultané possible</a>
            </li>
            <li>
              <a>Ingénieurs de son perfectionistes</a>
            </li>
            <li>
              <a>Mastering | Mixage</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Pour produire un livre audio :</h4>
          <p>
            Contactez-nous dès maintenant et obtenez la meilleure qualité de l'industrie audionumérique.
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
