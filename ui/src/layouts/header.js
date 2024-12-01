import * as React from "react";
import { useState, useEffect } from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [localLanguage,setLocalLanguage] = useState("");
  const { t, i18n } = useTranslation();
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
    window.addEventListener("scroll", () => setScrollY(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);
  const languages = [{
    index: "en",
    value: "English"
  },{
    index: "ger",
    value: "Germany"
  }]
  return (
    <>
      {/* ======= Header ======= */}
      <div className="container-fluid container-xl d-flex align-items-center justify-content-end icon-header">
          <nav id="navbar" className="navbar">
            <ul className="icon-navbar">
              <li className="social-link-icon">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-end"
                >
                  <i className="bi bi-twitter" />
                </a>
              </li>
              <li className="social-link-icon">
              <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-facebook" />
                  </a>
              </li>
              <li className="social-link-icon">
              <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-instagram" />
                  </a>
              </li>
              <li className="social-link-icon">
              <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Language</span>{" "}
                  <i className="bi bi-globe dropdown-indicator" />
                </a>
                <ul>
                 {languages.map((item) => ( <li key={item.index}>
                    <a onClick={()=> {changeLanguage(item.index)}}>{item.value}</a>
                  </li>))}
                </ul>
              </li>
             
            </ul>
          </nav>
        </div>
      <header id="header" className="header align-items-center">

        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              {t("page.header.logo.title")}
              <span>.</span>
            </h1>
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="index.html" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
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
