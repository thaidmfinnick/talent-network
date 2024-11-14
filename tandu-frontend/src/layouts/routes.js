import * as React from "react";
import {Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ServicePage } from "../pages/servicePage";
import { ScholarshipPage } from "../pages/scholarshipPage"
import { ContactPage } from "../pages/contact";
import { AboutUs } from "../pages/aboutUs/aboutUs";
import { ErrorPage} from "../pages/errorPage";
import { KoreanPage } from "../pages/koreanPage/koreanPage";
import { TaiwanPage } from "../pages/taiwanPage/taiwanPage";

export const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/service" element={<ServicePage/>} />
            <Route path="/korean" element={<KoreanPage/>} />
            <Route path="/taiwan" element={<TaiwanPage/>} />
            
            <Route path="/scholarship" element={<ScholarshipPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/error" element={<ErrorPage/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<HomePage/>} />
        </ReactRouterRoutes>
    )
}