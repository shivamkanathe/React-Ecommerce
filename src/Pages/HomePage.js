import React from "react";
import { Image } from "react-bootstrap";
import headerImage from "../Images/HeaderImage.jpg";
import "../style/Home.css";
import Category from "./Category";
import Footer from "./Footer";
import TodaysDeal from "./TodaysDeal";

function HomePage() {
    return (
        <div className="MainHeader">
        <div className="imageBlock">
         <Image className="headerImage" src={headerImage} alt="headerimage" responsive />
        <div className="headingContent">
        <h1 className="mainheading">Order Your Product Online</h1>
         <h2 className="subheading">Get deliver to your door</h2>
        </div>
        </div>
            <Category/>
            <TodaysDeal/>
            <Footer/>
        </div>
     
    )
}

export default HomePage
