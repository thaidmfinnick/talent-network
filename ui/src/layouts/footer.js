import * as React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>{t("page.footer.title")}</h3>
                  <p>
                    {t("page.footer.address.line1")} <br />
                    {t("page.footer.address.line2")}
                    <br />
                    <br />
                    <strong>{t("page.footer.contact.phone.label")}:</strong> {t("page.footer.contact.phone.value")}
                    <br />
                    <strong>{t("page.footer.contact.email.label")}:</strong> {t("page.footer.contact.email.value")}
                    <br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End footer info column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>{t("page.footer.ourServices.title")}</h4>
                <ul>
                  <li>
                    <a href="#">{t("page.footer.ourServices.links.webDesign")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.ourServices.links.webDevelopment")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.ourServices.links.productManagement")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.ourServices.links.marketing")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.ourServices.links.graphicDesign")}</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>{t("page.footer.hicSolutasetp.title")}</h4>
                <ul>
                  <li>
                    <a href="#">{t("page.footer.hicSolutasetp.links.molestiae")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.hicSolutasetp.links.excepturi")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.hicSolutasetp.links.suscipit")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.hicSolutasetp.links.dilecta")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.hicSolutasetp.links.sitQuas")}</a>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>{t("page.footer.nobisIllum.title")}</h4>
                <ul>
                  <li>
                    <a href="#">{t("page.footer.nobisIllum.links.ipsam")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.nobisIllum.links.laudantium")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.nobisIllum.links.dinera")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.nobisIllum.links.trodelas")}</a>
                  </li>
                  <li>
                    <a href="#">{t("page.footer.nobisIllum.links.flexo")}</a>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
            </div>
          </div>
        </div>
        <div className="footer-legal text-center position-relative">
          <div className="container">
            <div className="copyright">
              {t("page.footer.copyright", {
                year: new Date().getFullYear(),
                company: "TALENT NETWORK"
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
