import React, { useContext, Fragment, useRef, useMemo } from "react";
import Link from "next/link";
import { MenuContext } from "@/context/menu-context";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";

const PopupMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const {locale, locales, asPath} = useRouter();
  const { LogoImage, NavLinks } = getDataWithLocale(data, locale);
  const menuEl = useRef(null);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  const languageSelecter = useMemo(() => (
    <li className='d-inline-block language-toggler'>
      {locales.map((l, i) => {
        return (
          <span key={i} className={l === locale ? 'nav-selected' : ''}>
            <Link href={asPath} locale={l}>
              {l.split('-')[0].toUpperCase()}
            </Link>
          </span>
        );
      })}
    </li>
  ), [locale, locales, asPath]);
  return (
    <div className="show-overlay-nav">
      <div className="popup popup__menu">
        <a
          href=""
          id="close-popup"
          onClick={handleMenuClick}
          className="close-popup"
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div className="logo2">
                <Link href="/">
                  <a>
                    <img src={LogoImage.light} alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="popup-inner">
                <nav
                  className="popup-menu dl-menu__wrap text-center"
                  ref={menuEl}
                >
                  <ul>
                    {NavLinks.map((links, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            undefined !== links.subItems
                              ? "menu-item-has-children"
                              : ""
                          }`}
                        >
                          <Link href={links.url}>
                            <a>{links.name}</a>
                          </Link>
                          {undefined !== links.subItems ? (
                            <Fragment>
                              <button
                                onClick={(e) => {
                                  menuEl.current
                                    .querySelectorAll(".sub-menu")
                                    .forEach((item) => {
                                      item.classList.remove("show");
                                    });

                                  let clickedItem = e.currentTarget.parentNode;
                                  clickedItem
                                    .querySelector(".sub-menu")
                                    .classList.toggle("show");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                              <ul className="sub-menu">
                                {links.subItems.map((subLinks, index) => (
                                  <li key={index}>
                                    <Link href={subLinks.url}>
                                      <a>{subLinks.name}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Fragment>
                          ) : null}
                        </li>
                      );
                    })}
                    {languageSelecter}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left">
              <ul className="footer__contacts">
                <li>Téléphone: 514-243-1855</li>
                <li>Courriel: info@studiokampus.com</li>
                <li>
                  Adresse: 2700 rue Angus, Montréal, QC, Canada | H2T 1P3
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="popUp_social text-center text-md-right">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
