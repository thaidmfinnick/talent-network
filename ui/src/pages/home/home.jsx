import * as React from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ConstructionsSection } from "../../components/ContructionsSection/ConstructionsSection";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { ServicesSection } from "../../components/SevicesSection/SevicesSection";
import { AltServicesSection } from "../../components/AltServicesSection/AltServicesSection";
import { FeaturesSection } from "../../components/FeaturesSection/FeaturesSection";
import { RecentPostsSection } from "../../components/RecentPostsSection/RecentPostsSection";

const Home = () => {
  AOS.init();

  React.useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
    <>
      <HeroSection />
      <ConstructionsSection />
      <ServicesSection />
      <AltServicesSection />
      <FeaturesSection />
      <RecentPostsSection />
    </>
  );
};

export const HomePage = Home;
