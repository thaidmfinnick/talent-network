import * as React from 'react';
import { FaPhone, FaMap } from "react-icons/fa6";
import './contact.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
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

const Contact = () => {
    return (
        <>
            <div className='contact-box col-md-6 col-xs-12'>
                <div className='contact-heading'>
                    <h4 className='company-name'>Công ty giáo dục toàn cầu Tân Du</h4>
                    <p className='company-phone'><FaPhone className='second-color'/> <span className='phone-number'>{address.phone} (Hotline)</span></p>
                </div>
                {address.address.map((item,index) =>(
                    <ul className='list-office' key={index}>
                    <li className='office-item'>
                        <h5 className='office-name'>{item.title}</h5>
                        <div className='office-desc'>
                            <p className='office-address'><FaMap className='second-color'/> {item.info}</p>
                            <p className='office-phone'>Email: <span className='phone-number'>{address.email}</span></p>
                            <p className='office-phone'>Hotline: <span className='phone-number'>{address.phone}</span></p>
                        </div>
                    </li>
                </ul>
                ))}
            </div>
        </>
    )
}
export const ContactComponent = Contact