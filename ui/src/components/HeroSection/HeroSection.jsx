import './HeroSection.scss';
import heroCarousel1 from '../../assets/hero-carousel-1.jpg';
import heroCarousel2 from '../../assets/hero-carousel-2.jpg';
import heroCarousel3 from '../../assets/hero-carousel-3.jpg';
import heroCarousel4 from '../../assets/hero-carousel-4.jpg';
import heroCarousel5 from '../../assets/hero-carousel-5.jpg';

export const HeroSection = () => {
    return (
        <section id="hero" class="hero">
            <div class="info d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <h2 data-aos="fade-down">Welcome to <span>UpConstruction</span></h2>
                        <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a>
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