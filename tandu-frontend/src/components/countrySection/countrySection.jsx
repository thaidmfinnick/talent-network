import * as React from "react";
import { FaPhone, FaMap } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./countrySection.scss";
import "animate.css";
import koreaFlag from "../../assets/korea.png";
import taiwanFlag from "../../assets/taiwan.png";
import different from "../../assets/duhoc.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

const country = [
  { name: "Du học Hàn Quốc", img: koreaFlag, link: "/korean" },
  { name: "Du học Đài Loan", img: taiwanFlag, link: "/taiwan" },
  { name: "Du học các nước khác", img: different, link: "/contact" },
];

export const CountrySection = () => {
  const navigate = useNavigate();
  AOS.init();
  return (
    <>
      <div className="section container text-center black-collor">
        <h3 className="section-heading">Lựa chọn điểm đến của bạn </h3>
        <p className="question">Du học và làm việc ở quốc gia khác?</p>
        <div className="country" data-aos="fade-up">
          {country.map((country, index) => (
            <div
              className="flag"
              key={index}
              onClick={() => {
                navigate(country.link);
              }}
            >
              <div className="flag-img">
                <img src={country.img} />
                <div className="flag-description text-center">
                  <h5>{country.name}</h5>
                  <button className="read-more-btn animate__animated animate__pulse">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
