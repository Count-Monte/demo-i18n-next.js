import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt=""/>
              </a>
              <p>
              Studio Kampus : Les meilleurs studios d'enregistrement de Montréal et le plus grand producteur de livres audio au Canada. Confiez-nous votre projet 
              d'enregistrement sonore, de production d'album, de production de livres audio, de votre mastering, de votre mixage ou pour vos besoins de design sonore particuliers.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">Contact</h3>
              <p>
                2700 rue Angus, Montréal
                <br />
                H2T 1P3
                <br />
                Québec | Canada
                <br />
                <br />
                2305 boul. René-Lévesque Ouest, Montréal
                <br />
                H3Z 1X2
                <br />
                Québec | Canada
              </p>
              <p>Téléphone: 514-243-1855</p>
              <p>
                Email: <a href="mailto:info@studiokampus.com">info@studiokampus.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">Social</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/studiokampus">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC54MTF4mxwPXEs6au_8DLpg">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} | {" "}
              <a href="https://studiokampus.com/">Studio Kampus inc.</a>
              <br />
              <br />
              Développé par |
              <a href="https://lanf.ca/"> Lanf Corporation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
