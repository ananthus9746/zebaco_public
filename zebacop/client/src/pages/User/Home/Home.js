import React, { useState, useEffect,Component } from "react";
import "./Home.css";
import SwipperSlide from "../../../components/swipper/SwipperSlide";
import ProjectSlider from "../../../components/projectSlider/ProjectSlider";
import { Link } from "react-router-dom";
import MainBanner from "../../../components/Banner/MainBanner";
import SubBanner from "../../../components/SubBanner/SubBanner";
import Portfolio from "../../../components/portfolio/Portfolio";
import TotalProjectAndCapital from "../../../components/TotalProjectAndCapital/TotalProjectAndCapital";
import HeroVideo from "../../../components/heroVideo/HeroVideo";
import Footer from "./../../../components/Footer/Footer";

import PartnerAndBroker from '../../../components/PortfolioCarosel/PortfolioCarosel';
import HomeModal from './../../../components/HomeModal/HomeModal';

function Home() {


  return (

    <>
      <HomeModal/>

      <div className="home">

        {/* <HeroVideo/> */}

            {/* <div className="Spline_container">
              <Spline
                style={{ width: "100%", height: "800px" }}
                scene="https://prod.spline.design/gWR2I1wogv0wZ8Vs/scene.splinecode"
              /> */}
         {/* </div> */}

        <div className="text_heading_wapper">
          <div class="tex_container">
            <div class="txt_heading_container">
              <p className="txt_main">
                laucnchbox is the #1 <br />
                Stake Launchbox tokens <span className="text_launch">Launch</span>
                <span className="text_box">box</span>{" "}
              </p>
            </div>

            <TotalProjectAndCapital />

            <div className="apply_btn_container">
              <button className="btn_explore">Projects</button>
              <Link to={"/apply"}>
                {" "}
                <button className="btn_apply">Apply Now</button>
              </Link>
            </div>
            <p className="txt_sub">by laucnchbox.finance</p>
          </div>
        </div>


        <div className="project_wrapper">
          <ProjectSlider />
        </div>

        <MainBanner />

        <SubBanner />

        <PartnerAndBroker />

        <Portfolio name={"Partners & Backers"} />

      </div>
    </>

  );
}

export default Home;
