import * as React from "react";
import "./index.scss";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BsFacebook} from 'react-icons/bs';
import {PiPhoneCallFill} from 'react-icons/pi';
import {SiZalo} from  "react-icons/si"
const Home = () => {
  const redirectUrl = (link) =>{
    window.open(link) 
  }
  function handleCallButtonClick() {
    const phoneNumber = '0911301166';
    const url = `tel:${phoneNumber}`;
    window.location.href = url;
  }

  return (
   <div className="facebook">
    <BsFacebook className="loader_cube loader_cube--color" onClick={()=> redirectUrl("https://www.facebook.com/people/Du-H%E1%BB%8Dc-T%C3%A2n-Du/61552274185779/")}/>
    <PiPhoneCallFill className="loader_cube loader_cube--color phone"  onClick={()=> handleCallButtonClick()}/>
    <SiZalo className="loader_cube loader_cube--color zalo" onClick={()=> redirectUrl("https://zaloapp.com/qr/p/1snes6mwm41h3")}/>
   </div>
  );
};

export const IconSideBar = Home;