import * as React from "react";
import { Header } from "./header";
import { Routes } from "./routes";
import { Footer } from "./footer";
import "./layout.scss";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="body-content"><Routes /></div>
      <Footer />
    </div>
  );
};
