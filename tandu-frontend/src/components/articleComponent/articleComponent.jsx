import * as React from "react";

import "./index.scss";

import AOS from "aos";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const Home = (props) => {
  AOS.init();
  return (
    <>
      <AboutUsSection title="Du Học Hàn Quốc" />
      <section className="about-service">
        <div className="container">
          <div className="about-content">
            {props.data.map((item,index) => (
                <div key={index}>
                <p className="title color-primary" >
                <h2>{item.title}</h2>
              </p>
              {item.content.map((item,index)=>(
                <div key={index}>
                <div className="section-title">
                <h2 className="heading">{item.title}</h2>
              </div>
              {item.paragraph.map((item,index)=>{
                return (
                <div key={index}>
                    <p className="section-description">
                                {item.content}
                    </p>
                    
                    {item.splitPoint?.length > 0 && (
                        <ul>
                            {item.splitPoint?.map((item,index)=>(
                                <li key= {index}>{item.content}</li>
                            ))}
                        </ul>
                    )}
                    {item.img!== "" && (
                        <div className="img-box">
                            <img src= {item.img} className="img"/>
                        </div>
                    )}
                </div>
              )})}
              </div>
              ))}
              </div>
            ))}
           
            
            <p>
              <strong>
                Các bạn và bậc phụ huynh có nhu cần cần tìm hiểu và tư vấn
                online miễn phí vui lòng liên hệ:
              </strong>
            </p>
            <p>
              <strong>
                <div href="" className="color-secondary">
                  Công ty giáo dục toàn cầu | Tân Du
                </div>{" "}
              </strong>
            </p>
            
            <p>
              <strong>Cơ sở đào tạo</strong>
              <br />
              <strong>Địa chỉ:31 Lô A11, KĐT Mới Geleximco, Lê Trọng Tấn, Hoài Đức, Hà Nội </strong>
              <br />
              
            </p>
            <p>
              <strong>Fanpage: </strong>
              <a href="https://www.facebook.com/people/Du-H%E1%BB%8Dc-T%C3%A2n-Du/61552274185779/" className="text-link">
                Du Học Tân Du
              </a>
            </p>
            <p className="color-secondary">
              <strong>
                HOTLINE - 1900 7211 <span className="color-primary">|</span>{" "}
                <span className="color-primary">|</span>{" "}
                Email: duhoctandu@gmail.com - tandu.global.vn@gmail.com
              </strong>
              
            </p>
          </div>
        </div>
      </section>
    </>
  );
};


export const ArticleComponent = Home;
