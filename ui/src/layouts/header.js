import * as React from "react";
import { useState, useEffect } from "react";
import './header.scss';
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              {t("page.header.logo.title")}<span>.</span>
            </h1>
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="index.html" className="active">
                  {t("page.header.nav.home")}
                </a>
              </li>
              <li>
                <a href="about.html">{t("page.header.nav.about")}</a>
              </li>
              <li>
                <a href="services.html">{t("page.header.nav.services")}</a>
              </li>
              <li>
                <a href="projects.html">{t("page.header.nav.projects")}</a>
              </li>
              <li>
                <a href="blog.html">{t("page.header.nav.blog")}</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>{t("page.header.nav.dropdown.title")}</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#">{t("page.header.nav.dropdown.item1")}</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>{t("page.header.nav.dropdown.deepDropdown.title")}</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">{t("page.header.nav.dropdown.deepDropdown.item1")}</a>
                      </li>
                      <li>
                        <a href="#">{t("page.header.nav.dropdown.deepDropdown.item2")}</a>
                      </li>
                      <li>
                        <a href="#">{t("page.header.nav.dropdown.deepDropdown.item3")}</a>
                      </li>
                      <li>
                        <a href="#">{t("page.header.nav.dropdown.deepDropdown.item4")}</a>
                      </li>
                      <li>
                        <a href="#">{t("page.header.nav.dropdown.deepDropdown.item5")}</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">{t("page.header.nav.dropdown.item2")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.header.nav.dropdown.item3")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.header.nav.dropdown.item4")}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">{t("page.header.nav.contact")}</a>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
};
