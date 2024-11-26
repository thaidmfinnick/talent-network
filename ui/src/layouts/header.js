import * as React from "react";
import { useState, useEffect } from "react";
import "./header.scss";


export const Header = () => {


  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);

  return (
    <header>
      
    </header>
  );
};
