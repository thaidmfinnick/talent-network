import * as React from "react";
import FormStudyAbroad from "../../components/formStudyAbroad/formStudyAbroad";

import FounderPerson from "../../components/founderPerson/founderPerson";
import "./index.scss";
import imgHeader from "../../assets/about-page.png";
import imgBody from "../../assets/nn-min.png";
import AOS from "aos";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ServiceComponent } from "../../components/serviceComponent/serviceComponent";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";

const Home = () => {

  React.useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  AOS.init();
  return (
    <div className="containerServicePage">
     <AboutUsSection title="Dịch Vụ Của Chúng Tôi"/>
      <ServiceComponent />
    </div>
  );
};

export const ServicePage = Home;
