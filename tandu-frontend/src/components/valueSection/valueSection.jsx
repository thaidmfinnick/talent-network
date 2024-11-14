import * as React from "react";
import { FaPhone, FaMap } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./valueSection.scss";
import "animate.css";
import giatri from "../../assets/giatri.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const ValueSection = () => {
  AOS.init();
  return (
    <>
      <section className="value">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-4">
              <p className="heading">Giá Trị Cốt Lõi</p>
              <div className="title-box">
                <h3 className="title">
                  Tân Du - Nơi chắp cánh ước mơ và kiến tạo tương lai
                </h3>
              </div>
              <p className="description">
                Nhiệm vụ: Cung cấp dịch vụ tốt nhất, chi phí hợp lý nhất, là cầu
                nối hiệu quả nhất, thiết thực nhất cho thanh niên Việt Nam ra
                nước ngoài học tập và làm giàu.
              </p>
              <p className="description">
                Tầm nhìn: Trở thành trường nghề ảo (Cyber Vocational School) đầu
                tiên tại Việt Nam, cung cấp các khóa học nghề đa dạng, tiên
                tiến, tùy chỉnh và cá nhân hóa....nhằm cung cấp cho thanh niên
                Việt Nam con đường vươn tới tương lai giỏi, giàu, mạnh, thành
                công trên phạm vi toàn cầu. Triết lý: Tân = Mới, Du = Đi ra bên
                ngoài. Một con đường mới, một cách đi m
              </p>
              <p className="description">
                Chiến lược: Tân Du luôn hướng tới giá trị con người, tiến tới
                phát triển xã hội, đất nước. Với đội ngũ nhân viên, chuyên viên
                giàu kinh nghiệm, nhiệt huyết trong lĩnh vực du học, xuất khẩu
                lao động tại nhiều nước phát triển như Hàn Quốc, Đài Loan, Nhật
                Bản,... Tân Du tự tin có thể giúp đỡ thanh niên Việt Nam định
                hướng, tư vấn, hỗ trợ thủ tục visa và các thủ tục liên quan để
                các bạn nhanh chóng đạt được nguyện vọng, kiến tạo hành trang
                vững chắc cho tương lai tươi sáng.
              </p>
            </div>
            <div className="col-md-8 img-box mb-3">
              <img src={giatri} className="intro-img" />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};
