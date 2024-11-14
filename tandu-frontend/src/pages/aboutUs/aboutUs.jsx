import * as React from "react";
import "./index.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { DevelopmentComponent } from "../../components/developmentComponent/home";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";
import { ReasonSection } from "../../components/reasonSection/reasonSection";
import { ValueSection } from "../../components/valueSection/valueSection";
import { CountrySection } from "../../components/countrySection/countrySection";
import AOS from "aos";
import ab from "../../assets/ab.png";
import avt1 from "../../assets/du-hoc-sinh-my-vu-truong-gse.jpg";
import kimdongsun from "../../assets/image/kimdongsung.png";


const Home = () => {
  AOS.init();

  React.useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
    <div className="about">
      <AboutUsSection title="Về chúng tôi" />
      <section className="home-introduce">
        <div className="container" data-aos="fade-up">
          <div className="introduce row">
            <div className="col-md-6">
              <p className="title">Giới thiệu chung</p>
              <div className="company-name-box">
                <h3 className="company-name">
                  Công ty cổ phần giáo dục toàn cầu Tân Du
                </h3>
              </div>
              <p className="description">
                Tân Du là một trong những trung tâm giáo dục toàn cầu được thành
                lập tại Việt Nam. Tân Du hoạt động với các dịch vụ như tư vấn,
                xử lý hồ sơ du học và xuất khẩu lao động nhanh chóng, luyện
                phỏng vấn, chi phí minh bạch,... chuyên nghiệp với đội ngũ nhân
                viên giàu kinh nghiệm tại Việt Nam, Hàn Quốc, Đài Loan, Nhật
                Bản, vv...
                <br />
                Tân Du đặt uy tín và chất lượng lên hàng đầu để giúp thế hệ trẻ
                Việt Nam có cơ hội học tập và phát triển tại các quốc gia tiên
                tiến trên thế giới.
                <br />
                Bằng đội ngũ nhân sự thấu hiểu đất nước con người, bằng sự tận
                tâm và lòng nhiệt tình cống hiến, Tân Du Global được thành lập
                và hướng đến sứ mệnh giúp các bạn du học sinh “TỎA SÁNG TƯƠNG
                LAI” của mình.
              </p>
            </div>
            <div className="col-md-6 img-box">
              <div className="borderColor">
                <img src={ab} className="intro-img imgBody" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReasonSection />
      <ValueSection />
      <section className="countries">
        <CountrySection />
      </section>
      <section className="join-us">
        <div className="container">
          <h2>THAM GIA VÀO ĐỘI NGŨ CÙNG CHÚNG TÔI</h2>
          <div className="btn-box">
            <button className="join-us-btn">JOIN OUR TEAM</button>
          </div>
        </div>
      </section>
      <section className="feedback">
        <div className="container" data-aos="fade-up">
          <div className="col-lg-6">
            <h4>Du học sinh nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                {/* <div className="arrow left">
                  <FaAngleLeft />
                </div>
                <div className="arrow right">
                  <FaAngleRight />
                </div> */}
                <div className="avatar">
                  <img src={avt1} />
                </div>
                <div className="desc">
                  Tân Du đã đồng hành cùng mình trong quá trình làm hồ sơ du học
                  thạc sỹ ngành thời trang tại Anh, từ khâu chọn trường, làm hồ
                  sơ cho đến những giấy tờ liên quan để nhập học và nhập cảnh.
                  Các anh chị tư vấn của Tân Du đã hỗ trợ rất nhiệt tình dù khóa
                  học bị hoãn lại nhiều lần do dịch bệnh, nhưng anh chị vẫn cập
                  nhật thông tin khóa học đầy đủ và kịp thời để để mình nắm bắt
                  được trương trình học. Mình rất cảm ơn Tân Du đã giúp đỡ mình
                  trên bước đường du học.
                </div>
              </div>
              <div className="feedback-footer">
                <p>
                  <b>Vũ Trường</b> - Kaplan International College{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>Đối tác nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                {/* <div className="arrow left">
                  <FaAngleLeft />
                </div>
                <div className="arrow right">
                  <FaAngleRight />
                </div> */}
                <div className="avatar">
                  <img src={kimdongsun} />
                </div>
                <div className="desc">
                  Trong quá trình hợp tác cùng Tân Du Việt Nam, điều khiến mình
                  ấn tượng nhất là sự chuyên nghiệp, chỉn chu và chuyên tâm của
                  đội ngũ nhân viên tại Tân Du - không chỉ trong dịch vụ tư vấn
                  du học và hỗ trợ hướng nghiệp cho học sinh, sinh viên mà còn
                  với đối tác là các tổ chức giáo dục uy tín trong và ngoài
                  nước. Kính chúc Tân Du sẽ gặt hái thật nhiều thành công trong
                  chặng đường sắp tới.{" "}
                </div>
              </div>
              <div className="feedback-footer">
                <p>
                  <b>Mr. Kim Dong Sun</b> -	Chủ tịch kiêm Giám đốc điều hành Colab International Co.,Ltd{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <ServiceComponent /> */}
    </div>
  );
};

export const AboutUs = Home;
