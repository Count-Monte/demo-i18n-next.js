import React, { useState, useEffect, useContext, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import Link from "next/link";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const {locale, locales, asPath} = useRouter();
  const { LogoImage, NavLinks } = getDataWithLocale(data, locale);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  const languageSelecter = useMemo(() => (
    <div className='d-inline-block language-toggler'>
      {locales.map((l, i) => {
        return (
          <span key={i} className={l === locale ? 'nav-selected' : ''}>
            <Link href={asPath} locale={l}>
              {l.split('-')[0].toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  ), [locale, locales, asPath]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`header_01 ${
        true === sticky ? "fixedHeader animated flipInX" : null
      }`}
      id="header"
    >
      <Container fluid>
        <Row className="justify-content-between">
          <Col className="col-6" lg={2} md={3} sm={3}>
            <div className="logo">
              <Link href="/">
                <a>
                  <img src={LogoImage.light} alt="studio-kampus-logo" />
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={8} md={7} className="d-none d-lg-block ">
            <nav className="mainmenu text-center">
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
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link href={subLinks.url}>
                                <a>{subLinks.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Col>
          <Col lg={2} md={2} sm={4} className="col-6">
            <div className="navigator text-right">
              <a
                href="#"
                className="menu mobilemenu d-none d-md-none d-lg-none"
              >
                <i className="mei-menu"></i>
              </a>
              {languageSelecter}
              <a
                id="open-overlay-nav"
                className="menu hamburger"
                onClick={handleMenuClick}
                href="#"
              >
                <i className="mei-menu"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderOne;
