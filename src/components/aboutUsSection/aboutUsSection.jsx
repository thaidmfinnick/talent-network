import * as React from 'react';
import './aboutUsSection.scss';
import bgImg from "../../assets/image/defaultbg.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from 'react-router-dom';

export const AboutUsSection = (props) => {
    const navigate = useNavigate();
    const img = props.image ?? bgImg
    return (
        <div className='about-us'>
            <div className='section' >
                <h1 className='section-heading'>{props.title}</h1>
                <p className='navigate' onClick={()=> navigate('/')}>Trang chủ</p>
            </div>
        </div>
    )
}