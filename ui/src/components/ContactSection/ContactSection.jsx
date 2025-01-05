import { useTranslation } from "react-i18next";
import "./ContactSection.scss";

export const ContactSection = () => {
  
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-9">
            <h3>Contact us today</h3>
            <p>
              Do you have a question? Please let us know! We will endeavor to
              process your request as quickly as possible and will contact you
              as soon as possible.
            </p>
          </div>
          <div className="col-sm-3">
            <a href="/contact">
              <button className="contact-btn">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
