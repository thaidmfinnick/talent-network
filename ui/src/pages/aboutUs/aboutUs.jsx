import * as React from "react";
import "./index.scss";
import AOS from "aos";



const Home = () => {
  AOS.init();

  React.useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
    <>about</>
  );
};

export const AboutUs = Home;
