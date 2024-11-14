import * as React from "react";
import { Header } from "./header";
import { Routes } from "./routes";
import { Footer } from "./footer";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./layout.scss";
import { IconSideBar } from "../components/iconSideBar/home";
import VideoModalComponent from "../components/videoModal/videoModal";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <IconSideBar />
      <div className="body-content"><Routes /></div>
      <VideoModalComponent />
      <Footer />
    </div>
  );
};
