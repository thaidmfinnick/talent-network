import * as React from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import heroCarousel5 from "../../assets/image/hero-carousel-5.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  AOS.init();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        class="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: `url(${heroCarousel5})` }}
      >
        <div
          class="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>{t("page.header.nav.contact")}</h2>
        </div>
      </div>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 mt-1">
            <div class="col-lg-6 ">
              <h2>{t("page.contact.title")}</h2>
              <p className="contact-sub-head">{t("page.contact.subTitle")}</p>
              <div class="info-item d-flex flex-row gap-3 align-items-center">
                <i class="bi bi-map"></i>
                <div>
                  <h4>{t("page.contact.address")}</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div class="info-item d-flex flex-row gap-3 align-items-center">
                <i class="bi bi-envelope"></i>
                <div>
                  <h4>{t("page.contact.email")}</h4>
                  <p>contact@example.com</p>
                </div>
              </div>

              <div class="info-item d-flex flex-row gap-3 align-items-center">
                <i class="bi bi-telephone"></i>
                <div>
                  <h4>{t("page.contact.phone")}</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                style={{border: 0, width: '100%', height: '384px'}}
                allowfullscreen
              ></iframe> */}
            </div>

            <div class="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder={t("page.contact.form.name")}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder={t("page.contact.form.email")}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder={t("page.contact.form.subject")}
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder={t("page.contact.form.message")}
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    {t("page.contact.form.success")}
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">{t("page.contact.form.send")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const ContactPage = Home;
