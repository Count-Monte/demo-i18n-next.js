import React, { Fragment } from "react";

const ServiceSidebar4 = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Idéal pour évènement :</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>Atrium 65 places</a>
            </li>
            <li>
              <a>Salle de réception</a>
            </li>
            <li>
              <a>Équipement technique</a>
            </li>
            <li>
              <a>Éclairage et effets spéciaux</a>
            </li>
            <li>
              <a>Espace de relaxation et cuisine</a>
            </li>
            <li>
              <a>Terrasse extérieure</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Pour réserver la salle :</h4>
          <p>
            Contactez-nous pour louer nos espaces parfaits pour les évènements privés, les lancements d'albums ou les vernissages.
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar4;
