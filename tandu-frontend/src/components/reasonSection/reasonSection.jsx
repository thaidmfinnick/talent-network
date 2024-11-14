import * as React from "react";
import { FaPhone, FaMap } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./reasonSection.scss";
import "animate.css";
import tandu from "../../assets/tandu.jpg";
import whyus1 from "../../assets/whyus1.png";
import whyus2 from "../../assets/whyus2.png";
import whyus3 from "../../assets/whyus3.png";
import whyus4 from "../../assets/whyus4.png";
import whyus5 from "../../assets/whyus5.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const reasons = [
    {
        name: "Học bổng độc quyền từ các đối tác giáo dục",
        descrption:
          "Tân Du hình thành và phát triển bởi đội ngũ nhân sự là những cựu du học sinh tại Anh từ năm 2009. Với kinh nghiệm thực trải + mối quan hệ + kỹ năng làm việc chuyên nghiệp, Tân Du cam kết mang đến cho các bạn chất lượng dịch vụ tốt nhất.",
        img: tandu,
      },
  {
    name: "Hướng dẫn và hỗ trợ xin thị thực (visa), ",
    descrption:
      "Tân Du hình thành và phát triển bởi đội ngũ nhân sự là những cựu du học sinh tại Anh từ năm 2009. Với kinh nghiệm thực trải + mối quan hệ + kỹ năng làm việc chuyên nghiệp, Tân Du cam kết mang đến cho các bạn chất lượng dịch vụ tốt nhất.",
    img: whyus2,
  },
  {
    name: "Quy trình hồ sơ nhanh gọn",
    descrption:
      "Tân Du hình thành và phát triển bởi đội ngũ nhân sự là những cựu du học sinh tại Anh từ năm 2009. Với kinh nghiệm thực trải + mối quan hệ + kỹ năng làm việc chuyên nghiệp, Tân Du cam kết mang đến cho các bạn chất lượng dịch vụ tốt nhất.",
    img: whyus3,
  },
  {
    name: "Minh bạch trong mọi khâu, mọi vấn đề",
    descrption:
      "Tân Du hình thành và phát triển bởi đội ngũ nhân sự là những cựu du học sinh tại Anh từ năm 2009. Với kinh nghiệm thực trải + mối quan hệ + kỹ năng làm việc chuyên nghiệp, Tân Du cam kết mang đến cho các bạn chất lượng dịch vụ tốt nhất.",
    img: whyus4,
  },
  {
    name: "Được hỗ trợ việc làm từ Cơ quan thuộc Chính phủ Hàn Quốc ",
    descrption:
      "Tân Du hình thành và phát triển bởi đội ngũ nhân sự là những cựu du học sinh tại Anh từ năm 2009. Với kinh nghiệm thực trải + mối quan hệ + kỹ năng làm việc chuyên nghiệp, Tân Du cam kết mang đến cho các bạn chất lượng dịch vụ tốt nhất.",
    img: whyus5,
  },
  
];

export const ReasonSection = () => {
  AOS.init();
  return (
    <>
      <section className="reason">
        <div className="container">
          <div className="heading-title text-center">
            <h3 className="section-heading">Lý do lựa chọn Tân Du</h3>
            <p className="section-sub-title">
              Thay vì chỉ nhanh chóng gửi học viên đi theo nhu cầu trong thời
              gian và tài chính tốt nhất, các chuyên gia tư vấn du học tại Tân
              Du sẽ trò chuyện cùng học viên để tìm hiểu năng khiếu, đam mê và
              động lực, từ đó có thể đưa ra định hướng, lộ trình phù hợp nhất
              với học viên để hoàn thành được mục tiêu học tập, nghề nghiệp
              trong tương lai.{" "}
            </p>
          </div>
          <div className="list-reasons">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="reason-item" data-aos="fade-up">
                  <div className="img-box">
                    <img className="background" src={whyus1} />
                    <div className="reason-title">
                      <h4>Đội ngũ nhân viên chuyên nghiệp và thân thiện </h4>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus hic, officiis tempore blanditiis at minima
                      vitae soluta! Sequi rerum nobis laboriosam, eum voluptatum
                      adipisci?
                    </p>
                  </div>
                </div>
              </div>
              {reasons.map((reason,index) =>(
                <div className="col-lg-4 col-md-6" key={index}>
                <div className="reason-item" data-aos="fade-up">
                  <div className="img-box">
                    <img className="background" src={reason.img} />
                    <div className="reason-title">
                      <h4>{reason.name} </h4>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      {reason.descrption}
                    </p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
