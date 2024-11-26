import * as React from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



const Home = () => {
  AOS.init();

  React.useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
   <>HOme</>
  );
};

export const HomePage = Home;
