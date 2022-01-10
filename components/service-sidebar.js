import React, { Fragment } from "react";
import { useRouter } from 'next/router';

const ServiceSidebar = () => {
  const { locale } = useRouter();
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">{locale === 'en-US' ? "Ideal for audiobooks :" : "Idéal pour les livres audio :"}</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>{locale === 'en-US' ? "Private cabins for narration" : "Cabines privées pour naration"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Over 200 different microphones" : "Plus de 200 micros différents"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Sound design | Sound effects" : "Design sonore | Bruitage"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Simultaneous reporting possible" : "Naration en simultané possible"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Perfectionist sound engineers" : "Ingénieurs de son perfectionistes"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Mastering | Mixing" : "Mastering | Mixage"}</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>{locale === 'en-US' ? "To produce an audiobook:" : "Pour produire un livre audio :"}</h4>
          <p>
            {locale === 'en-US'
              ? "Contact us now and get the best quality in the digital audio industry."
              : "Contactez-nous dès maintenant et obtenez la meilleure qualité de l'industrie audionumérique."}
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
