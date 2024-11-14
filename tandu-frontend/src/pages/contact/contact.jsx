import * as React from "react";
import "./index.scss";
import contactImg from "../../assets/image/contact.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";
import { ContactComponent } from "../../components/contact/contact";

const Home = () => {

  React.useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
    <div className="contact">
      <AboutUsSection image={`${contactImg}`} title="Liên hệ với Tân Du" />
      <div className="container contact-container">
        <div className="row">
          <div className="col-sm-6">
            <div className="contact-info-box">
              <ContactComponent />
            </div>
          </div>
          <div className="col-sm-6 contact-map">
          <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.520596677999!2d105.77207017596247!3d21.011845780633365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453ad39a124e9%3A0x6a3a24b6e14caecf!2sTo%C3%A0%20Golden%20Palace!5e0!3m2!1svi!2s!4v1699177930013!5m2!1svi!2s" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        
        </div>
      </div>
    </div>

  );
};

export const ContactPage = Home;
