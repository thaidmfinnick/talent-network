import * as React from "react";
import { useState, useEffect } from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import logo from "../assets/image/logo_main.png";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const [localLanguage, setLocalLanguage] = useState("");
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState('home');
  const [dropDown1Active, setDropDown1Active] = useState(false);
  const [dropDown2Active, setDropDown2Active] = useState(false);

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   window.location.reload()
  // };
  // const getLocalLanguage = () => {
  //   const language = localStorage.getItem('i18nextLng');
  //   return language ?? "en"
  // }
  // useEffect(()=>{
  //   setLocalLanguage(getLocalLanguage());
  // },[])
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const languages = [
    {
      index: "en",
      value: "English",
    },
    {
      index: "ger",
      value: "Germany",
    },
  ];

  const iconNav = [
    {
      id: 0,
      link: "#",
      iconClass: "bi bi-twitter",
    },
    {
      id: 1,
      link: "#",
      iconClass: "bi bi-facebook",
    },
    {
      id: 2,
      link: "#",
      iconClass: "bi bi-instagram",
    },
    {
      id: 3,
      link: "#",
      iconClass: "bi bi-linkedin",
    },
  ];

  const handleClickButtonMenuMobile = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mobile-nav-active");
    document.querySelector(".mobile-nav-show").classList.toggle("d-none");
    document.querySelector(".mobile-nav-hide").classList.toggle("d-none");
  };

  // document.querySelectorAll(".navbar .dropdown > a").forEach((el) => {
  //   el.addEventListener("click", function (event) {
  //     if (document.querySelector(".mobile-nav-active")) {
  //       event.preventDefault();
  //       this.classList.toggle("active");
  //       this.nextElementSibling.classList.toggle("dropdown-active");

  //       let dropDownIndicator = this.querySelector(".dropdown-indicator");
  //       dropDownIndicator.classList.toggle("bi-chevron-up");
  //       dropDownIndicator.classList.toggle("bi-chevron-down");
  //     }
  //   });
  // });

  const handleClickDropdown1 = (event) => {
    event.preventDefault();
    setDropDown1Active(!dropDown1Active);
  };

  const handleClickDropdown2 = (event) => {
    event.preventDefault();
    setDropDown2Active(!dropDown2Active);
  };

  return (
    <>
      {/* ======= Header ======= */}
      <div className="icon-header-container container-fluid container-xl align-items-center justify-content-end icon-header">
        <nav id="top-navbar" className="top-navbar">
          <ul className="icon-navbar">
            {iconNav.map((item) => (
              <li className="social-link-icon" key={item.id}>
                <a
                  href={item.link}
                  className="d-flex align-items-center justify-content-end"
                >
                  <i className={item.iconClass} />
                </a>
              </li>
            ))}
            <li className="dropdown">
              <a href="#">
                <span>Language</span>{" "}
                <i className="bi bi-globe dropdown-indicator" />
              </a>
              <ul>
                {languages.map((item) => (
                  <li key={item.index}>
                    <a
                      onClick={() => {
                        changeLanguage(item.index);
                      }}
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src={logo} alt="anh_logo" style={{ maxWidth: '25%', height: 'auto' }}   />
          </a>
          <i
            className="mobile-nav-toggle mobile-nav-show bi bi-list"
            onClick={handleClickButtonMenuMobile}
          />
          <i
            className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"
            onClick={handleClickButtonMenuMobile}
          />
          <nav id="navbar" className="navbar">
            <ul>
              <li onClick={() => setActiveItem('home')}> 
                <a href="/" className={location.pathname === '/' ? 'active' : ''} >
                  {t("page.header.nav.home")}
                </a>
              </li>
              <li onClick={() => setActiveItem('about')}>
                <a href="#" className={activeItem === 'about' ? 'active' : ''}>
                  {t("page.header.nav.about")}
                </a>
              </li>
              <li onClick={() => setActiveItem('services')}>
                <a href="#" className={activeItem === 'services' ? 'active' : ''}>
                  {t("page.header.nav.services")}
                </a>
              </li>
              <li onClick={() => setActiveItem('projects')}>
                <a href="#" className={activeItem === 'projects' ? 'active' : ''}>
                  {t("page.header.nav.projects")}
                </a>
              </li>
              <li onClick={() => setActiveItem('blog')}>
                <a href="#" className={activeItem === 'blog' ? 'active' : ''}>
                  {t("page.header.nav.blog")}
                </a>
              </li>
              <li className="dropdown">
                <a href="#" onClick={handleClickDropdown1} className={`${dropDown1Active ? 'active' : ''}`}>
                  <span>{t("page.header.nav.dropdown.title")}</span>{" "}
                  <i className={`bi ${dropDown1Active ? 'bi-chevron-up' : 'bi-chevron-down'} dropdown-indicator`} />
                </a>
                <ul className={`${dropDown1Active ? 'dropdown-active' : ''}`}>
                  <li>
                    <a href="#">{t("page.header.nav.dropdown.item1")}</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={handleClickDropdown2} className={`${dropDown2Active ? 'active' : ''}`}>
                      <span>
                        {t("page.header.nav.dropdown.deepDropdown.title")}
                      </span>{" "}
                      <i className={`bi ${dropDown2Active ? 'bi-chevron-up' : 'bi-chevron-down'} dropdown-indicator`} />
                    </a>
                    <ul className={`${dropDown2Active ? 'dropdown-active' : ''}`}>
                      <li>
                        <a href="#">
                          {t("page.header.nav.dropdown.deepDropdown.item1")}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {t("page.header.nav.dropdown.deepDropdown.item2")}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {t("page.header.nav.dropdown.deepDropdown.item3")}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {t("page.header.nav.dropdown.deepDropdown.item4")}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {t("page.header.nav.dropdown.deepDropdown.item5")}
                        </a>
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
              <li onClick={() => setActiveItem('contact')}>
                <a href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  {t("page.header.nav.contact")}
                </a>
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
