import './HeroSection.scss';
import heroCarousel1 from '../../assets/image/hero-carousel-1.jpg';
import heroCarousel2 from '../../assets/image/hero-carousel-2.jpg';
import heroCarousel3 from '../../assets/image/hero-carousel-3.jpg';
import heroCarousel4 from '../../assets/image/hero-carousel-4.jpg';
import heroCarousel5 from '../../assets/image/hero-carousel-5.jpg';
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
    const {t} = useTranslation();
    return (
        <section id="hero" class="hero">
            <div class="info d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <h2 data-aos="fade-down">{t("page.hero-section.tilte.welcome")}<span>{t("page.hero-section.tilte.construction")}</span></h2>
                        <p data-aos="fade-up">{t("page.hero-section.tilte.lorem")}</p>
                        <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">{t("page.hero-section.tilte.getstarted")}</a>
                    </div>
                    </div>
                </div>
            </div>

            <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-item active" style={{backgroundImage: `url(${heroCarousel1})`}}></div>
                <div class="carousel-item" style={{backgroundImage: `url(${heroCarousel2})`}}></div>
                <div class="carousel-item" style={{backgroundImage: `url(${heroCarousel3})`}}></div>
                <div class="carousel-item" style={{backgroundImage: `url(${heroCarousel4})`}}></div>
                <div class="carousel-item" style={{backgroundImage: `url(${heroCarousel5})`}}></div>

                <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                    <i class="carousel-control-prev-icon bi bi-chevron-left"></i>
                </a>

                <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                    <i class="carousel-control-next-icon bi bi-chevron-right"></i>
                </a>
            </div>
        </section>
    )
}