import { useTranslation } from "react-i18next";
import "./ContactSection.scss";

export const ContactSection = () => {
  const { t } = useTranslation(); 
  
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-9">
            <h3>{t("page.contact.title")}</h3>
            <p>{t("page.contact.subTitle")}</p>
          </div>
          <div className="col-sm-3 contact-btn-container">
            <a href="/contact">
              <button className="contact-btn">{t("page.header.nav.contact")}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
