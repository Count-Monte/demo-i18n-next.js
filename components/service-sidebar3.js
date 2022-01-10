import React, { Fragment } from "react";
import { useRouter } from 'next/router';

const ServiceSidebar3 = () => {
  const { locale } = useRouter();
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">{locale === 'en-US' ? "Ideal for podcasts:" : "Idéal pour les podcasts :"}</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>{locale === 'en-US' ? "Real-time broadcasting ( LIVE )" : "Diffusion temps réel ( LIVE )"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "4K quality cameras" : "Caméras de qualité 4K"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Up to 4 different plans" : "Jusqu'à 4 plans différents"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Flexible decors" : "Décors flexibles"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Green screens | Black screens" : "Écrans verts | Écrans noirs"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Engineers videos" : "Ingénieurs vidéos"}</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>{locale === 'en-US' ? "To produce your podcast :" : "Pour produire votre podcast :"}</h4>
          <p>
            {locale === 'en-US' ? "Contact us now and get the best quality in the audiovisual industry." : "Contactez-nous dès maintenant et obtenez la meilleure qualité de l'industrie audiovisuelle."}
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar3;
