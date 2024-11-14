import * as React from "react";
import "./serviceComponent.scss";
import img1 from "../../assets/nn-min.png";
import img2 from "../../assets/nn-min2.png";
import img3 from "../../assets/nn-min3.png";
import img4 from "../../assets/nn-min4.png";
import img5 from "../../assets/nn-min5.png";
import AOS from "aos";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const services = [
    {
      id: "1",
      name: "Dịch vụ tư vấn",
      img: img1,
      description:
        "Tân Du cung cấp dịch vụ tư vấn du học và xuất khẩu lao động dựa trên kinh nghiệm thực tế của các chuyên gia tư vấn và mong muốn, khả năng tài chính của khách hàng. Giải đáp thắc mắc và đưa ra những lựa chọn phù hợp nhất với yêu cầu của khách hàng.",
    },
    {
      id: "2",
      name: "Dịch vụ đào tạo tiếng Hàn, tiếng Trung",
      img: img2,
      description:"Với kinh nghiệm và kiến thức chuyên môn của các giáo viên, Tân Du tự tin đồng hành cùng với bạn trong những bước đầu tiên chinh phục một ngôn ngữ mới, một hành trình mới.,",
    },
    {
      id: "3",
      name: "Hỗ trợ xử lý hồ sơ và thủ tục",
      img: img3,
      description: "Với đội ngũ chuyên viên giàu kinh nghiệm, đã và đang sinh sống, làm việc tại Hàn Quốc, Đài Loan, v.v; Tân Du sẽ giúp bạn tìm kiếm loại thị thực mà bạn mong muốn và hỗ trợ bạn trong quá trình xử lý hồ sơ, đăng ký nhập học, đăng ký xin thị thực...",
    },
    {
      id: "4",
      name: "Ôn luyện phỏng vấn",
      img: img4,
      description:
        "Đội ngũ giáo viên giàu kinh nghiệm của Tân Du sẽ giúp bạn ôn luyện, trả lời những câu hỏi phỏng vấn với trường, với Đại sứ quán; giúp bạn giữ vững tinh thần, tự tin bước vào vòng phỏng vấn.",
    },
    {
      id: "5",
      name: "Liên hệ với các trường đại học tại HQ và ĐL",
      img: img5,
      description: "Tân Du là đại diện tuyển sinh của các trường Đại học HQ và ĐL tại Việt Nam. Tân Du sẽ thay mặt bạn trao đổi và làm việc với các trường đối tác. Cung cấp cho bạn những thông tin và điều kiện cần thiết tại thời điểm đó.",
    },
  ];
  AOS.init();
  return (
    < >
      <section className="container service" data-aos="fade-up">
        {services.map((item, index) => (
          <div className="bodyServicePage row gx-lg-5" key={index}>
            <div className="rightBody col-md-6">
              <h2 className="name">{item.name}</h2>
              <div className="description">{item.description}</div>
              {/* <a className="viewMore"> Xem thêm</a> */}
            </div>
            <div className="leftBody col-md-6">
              <div className="borderColor">
                <img src={item.img} alt="" className="imgBody" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export const ServiceComponent = Home;
