import * as React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { PiTarget, PiMedal, PiHandshake } from "react-icons/pi";
import { IoSchoolOutline, IoEarthOutline } from "react-icons/io5";
import {LuPhoneCall} from "react-icons/lu";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/image/banner.jpg";
import adboard from "../../assets/Du-Hoc-GSE-2-1.png";
import UNSW from "../../assets/UNSW.jpg";
import UNSW2 from "../../assets/UNSW2.png";
import SHU from "../../assets/SHU.png";
import UOB from "../../assets/UOB.png";
import UOE from "../../assets/UOE.jpg";
import avt1 from "../../assets/du-hoc-sinh-my-vu-truong-gse.jpg";
import kimdongsun from "../../assets/image/kimdongsung.png";
import FormStudyAbroad from "../../components/formStudyAbroad/formStudyAbroad"
import dongnam from "../../assets/image/dhdongam.png";
import canich from "../../assets/image/dhcanich.jpg";
import ducdat from "../../assets/image/dhducdat.png";
import duclam from "../../assets/image/dhhongquocduclam.png"
import namdai from "../../assets/image/dhungdungnamdai.png"
import kienhanh from "../../assets/image/dhkienhanh.jpg"
import joenbuk from "../../assets/image/dhjoenbuk.png"
import ansan from "../../assets/image/dhshinansan.png"
import kyungmin from "../../assets/image/dhkyungmin.png"
import kyung from "../../assets/image/dhdaekyung.jpg"
import daejeon from "../../assets/image/daihocdaejeon.jpg"

import { CountrySection } from "../../components/countrySection/countrySection";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import FounderPerson from "../../components/founderPerson/founderPerson";
import { useNavigate } from "react-router-dom";
const partners = [
  {
    name: "Đối tác Đài Loan",
    description : [
      {
        id: "1",
        name: "Đại học Đông Nam",
        img: dongnam,
        link: "https://docs.google.com/document/d/1eYK5VXOrLXJuGrMC42NZ1JzV9i6SO4RN/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "2",
        name: "Đại học Cần Ích",
        img: canich,
        link: "https://docs.google.com/document/d/1ED3LYWvncPrw8ki5z8wM40K4k6Tf98yv/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "3",
        name: "Đại học Dục Đạt",
        img: ducdat,
        link: "https://docs.google.com/document/d/1QT4J7oleMscmJcROcVsrqYeGHGiVicBB/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "4",
        name: "Đại học Hồng Quốc Đức Lâm",
        img: duclam,
        link: "https://docs.google.com/document/d/1RiIADRNagR2acJJ8bCRidJ-3zZ4dlyIR/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "5",
        name: "Đại học KH Ứng dụng Nam Đài",
        img: namdai,
        link: "https://docs.google.com/document/d/1UHc2ynuKWnW4TwgObggF7hZqPzhnYc-c/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "6",
        name: "Đại học Kiện hành",
        img: kienhanh,
        link: "https://docs.google.com/document/d/1-H2gzhYCI6Qi6U1L43ldB37iopOyafjc/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
    ],
  },
 {
  name: "Đối tác Hàn Quốc",
  description : [
    {
      id: "1",
      name: "Đại học KH JEONBUK",
      img: joenbuk,
      link: "https://docs.google.com/document/d/1quW_KSe5eWbwd9lp6ZeXLZn-vwqGqnFZ/edit?usp=drive_link",
    },
    {
      id: "2",
      name: "Đại học SHIN ANSAN",
      img: ansan,
      link: "https://docs.google.com/document/d/1Z4SIdD0cUnkK7tJmiQqFcab5xQ96lh_d/edit?usp=drive_link",
    },
    {
      id: "3",
      name: "Đại học KYUNGMIN",
      img: kyungmin,
      link: "https://docs.google.com/document/d/1bXpx4tF_prgCUSdKykplt33iua0oCuCb/edit?usp=drive_link",
    },
    {
      id: "4",
      name: "ĐH DAEKYEUNG",
      img: kyung,
      link: "https://docs.google.com/document/d/1eKrFCYq96ewkp4BDESHnqvtf4YxVIX5y/edit?usp=drive_link",
    },
    {
      id: "5",
      name: "Cao đẳng KHKT DAEJEON",
      img: daejeon,
      link: "https://docs.google.com/document/d/1SJEKt-vzIKFpr7PxwJm2DhqONltejS7g/edit?usp=drive_link",
    },
  ],
 }
];


const Home = () => {
  const navigate = useNavigate()
  AOS.init();

  React.useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
    <>
      <section className="home-slider">
        <img src={banner} />
      </section>
      <section className="countries">
        <CountrySection />
      </section>
      
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
              Tân Du là một trong những trung tâm giáo dục toàn cầu được thành lập tại Việt Nam. Tân Du hoạt động với các dịch vụ như tư vấn, xử lý hồ sơ du học và xuất khẩu lao động nhanh chóng, luyện phỏng vấn, chi phí minh bạch,... chuyên nghiệp với đội ngũ nhân viên giàu kinh nghiệm tại Việt Nam, Hàn Quốc, Đài Loan, Nhật Bản, vv...
              <br/>
              Tân Du đặt uy tín và chất lượng lên hàng đầu để giúp thế hệ trẻ Việt Nam có cơ hội học tập và phát triển tại các quốc gia tiên tiến trên thế giới.
              <br />
              Bằng đội ngũ nhân sự thấu hiểu đất nước con người, bằng sự tận tâm và lòng nhiệt tình cống hiến, Tân Du Global được thành lập và hướng đến sứ mệnh giúp các bạn du học sinh “TỎA SÁNG TƯƠNG LAI” của mình.
              </p>
            </div>
            <div className="col-md-6 img-box">
              <img src={adboard} className="intro-img" />
            </div>
          </div>
          <div className="stat-list row">
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< PiMedal /></div>
                <div className="desc">
                  <p className="number">10+</p>
                  <p className="text">Tân du với hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn giáo dục - du học châu Á.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< PiTarget /></div>
                <div className="desc">
                  <p className="number">100%</p>
                  <p className="text">Đội ngũ Tân Du với 100% trình độ cao, sẽ hướng dẫn bạn từng bước chi tiết nhất.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< PiHandshake /></div>
                <div className="desc">
                  <p className="number">100+</p>
                  <p className="text">Tân Du liên kết với hơn 100 trường đại học và doanh nghiệp danh tiếng tại châu Á.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><IoSchoolOutline /></div>
                <div className="desc">
                  <p className="number">75%</p>
                  <p className="text">Sinh viên Tân Du được nhận học bổng của các đối tác.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><AiOutlineLike /></div>
                <div className="desc">
                  <p className="number">98%</p>
                  <p className="text">Khách hàng hài lòng với dịch vụ của chúng tôi.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< IoEarthOutline /></div>
                <div className="desc">
                  <p className="number">100%</p>
                  <p className="text">Du học sinh có việc làm sau khi tốt nghiệp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">  
           <FounderPerson data-aos="fade-up"/>
      </section>
      <section className="scholarship">
        <div className="container" data-aos="fade-up">
          <h3 className="section-heading">Chương Trình Độc Quyền Của Tân Du</h3>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 uni-img">
                  <img src={UNSW}/>
                </div>
                <div className="col-md-6 text" onClick={()=> window.open("https://docs.google.com/document/d/1hDu5mgF0GP60QSOBTflQPAa5kjznRyR9/edit")}>
                  <div className="university" >
                    <img className="logo" src={UNSW2}/>
                    <h5 className="uni-name">Chương Trình Độc Quyền</h5>
                  </div>
                  <h5 className="title"><a>Chương trình du học nghề độc quyền của Tân Du tới Hàn Quốc</a></h5>
                  <ul className="info">
                    <li><span>Bậc học: Thạc sĩ</span></li>
                    <li><span>Giá trị: Học phí + Ký túc xá rẻ bằng một nửa so với học ở các trường khác do chương trình có sự hỗ trợ của Chính phủ Hàn Quốc.</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="list-scholar">
                <li><a onClick={()=> navigate("/scholarship")} ><img src={dongnam}/><span>Học bổng 50% học phí cho bậc Thạc sĩ</span></a></li>
                <li><a onClick={()=> navigate("/scholarship")}><img src={canich}/><span>Học bổng 50% dành cho ngành công nghệ tài chính MSc</span></a></li>
                <li><a onClick={()=> navigate("/scholarship")}><img src={kyung}/><span>Học bổng 100% học phí cho sinh viên xuất sắc </span></a></li>
              </ul>
              <a className="read-more" onClick={()=> navigate("/scholarship")}>Xem thêm</a>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback">
        <div className="container" data-aos="fade-up">
          <div className="col-lg-6">
            <h4>Du học sinh nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">

                <div className="avatar">
                  <img src={avt1} />
                </div>
                <div className="desc">
                  Tân Du đã đồng hành cùng mình trong quá trình làm hồ sơ du học
                  thạc sỹ ngành thời trang tại Hàn Quốc, từ khâu chọn trường, làm hồ
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
                  <b>Vũ Trường</b> - Du học sinh Hàn Quốc{" "}
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
                  Trong quá trình hợp tác cùng Tân Du Việt Nam, điều khiến tôi
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
                  <b>Mr. Kim Dong Sung</b> - Giám đốc cơ quan hỗ trợ việc làm toàn cầu{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partner">
        <div className="container" data-aos="fade-up">
          <h3 className="section-heading">Đối tác tiêu biểu</h3>
          {partners.map((partner,index)=>(
            <div className="list-partner-inner" key={partner.name}>
            <h4>{partner.name}</h4>
            <div className="list-partner" data-aos="fade-up">
              {partner.description.map((item,index)=>(
                <div className="partner-item col-lg-2 col-md-4 col-6" key={item.name} onClick={()=> {window.open(item.link)}}>
                <img src={item.img} />
                <div className="desc">Xem thêm</div>
              </div>
              ))}
            </div>
          </div>
          ))}
        </div>
      </section>
      <section className="partner">
      <FormStudyAbroad />
      </section>
    </>
  );
};

export const HomePage = Home;
