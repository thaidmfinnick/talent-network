import * as React from "react";
import {
  FaPhone,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import "./footer.scss";
import logo from "../assets/logo-1.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const infoRow = [
    {
        name: "Về Chúng Tôi",
        item: [{name: "Giới thiệu Tân Du"}, {name: "Liên hệ với chúng tôi"}]
    },
    {
        name: "Quốc gia du học",
        item: [{name: "Du học Hàn Quốc"}, {name: "Du học Đài Loan"}]
    },
    {
        name: "Thông tin hữu ích",
        item: [{name: "Học bổng du học"}, {name: "Dịch vụ của Tân Du"}]
    },
]
const address = {
  phone: "0911 30 11 66 - 024 320 17789",
  email: "duhoctandu@gmail.com - tandu.global.vn@gmail.com",
  address: [
    {
      info: "Tầng 2 tháp C tòa Golden Palace, 99 Mễ Trì, Từ Liêm, Hà Nội",
      title: "Trụ sở chính",
    },
    {
      info: "31 Lô A11, KĐT Mới Geleximco, Lê Trọng Tấn, Hoài Đức, Hà Nội",
      title: "Cơ sở đào tạo",
    },
  ],
};
export const Footer = () => {
  return (
    <footer>
      <div className="footer-img"></div>
      <div className='footer'>
        <div className="footer-content container">
          <div className="row border-botom">
            <div className="footer-item col-lg-4">
              <a>
                <img src={logo} className="company-logo" />
              </a>
              <p className="company-phone">
                <FaPhone className="text-white" />{" "}
                <span className="phone-number">
                  {address.phone} (Hotline)
                </span>
              </p>
              <ul className="list-office">
               {address.address.map((item,index)=>(
                 <li className="office-item" key={index}>
                 <p className="p-heading mb-2">{item.title}</p>
                 <span>
                   {item.info} | Email:{" "}
                   <span className="fw-bold">{address.email}</span>
                   <br/>Hotline: <span className="fw-bold">{address.phone}</span>
                 </span>
               </li>
               ))}
              </ul>
            </div>
            <div className="col-lg-8 row">
              {infoRow.map((item,index)=>(
                <div className="footer-item col-md-4" key={index}>
                <p className="p-heading">{item.name}</p>
                <ul className="menu-list">
                  {item.item.map((item,index)=>(
                    <li className="menu-item" key={index}>
                    <a>{item.name}</a>
                  </li>
                  ))}
                 
                </ul>
              </div>
              ))}
              <ul className="social-list">
                <li className="social-icon">
                  <FaFacebook id="fb-icon" />
                </li>
                <li className="social-icon">
                  <FaSquareTwitter id="twitter-icon" />
                </li>
                <li className="social-icon">
                  <FaInstagram id="ig-icon" />
                </li>
                <li className="social-icon">
                  <FaLinkedin id="link-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright">@Copyright 2023 – Công Ty Cổ Phần Giáo Dục Toàn Cầu Tân Du.</p>
      </div>
    </footer>
  );
};
