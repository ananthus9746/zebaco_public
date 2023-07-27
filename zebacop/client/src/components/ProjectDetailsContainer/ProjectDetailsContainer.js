import { TwitterOutlined } from "@ant-design/icons";
import React from "react";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import "./ProjectDetailsContainer.css";
import logo from "../../../src/images/konzept-von-nicht-fungiblen-token-einzigartigen-digitalen-gegenstaenden-fuer-krypto-kunst-und-blockchain-technologie_278395-470.webp";
import { Link } from "react-router-dom";

function ProjectDetailsContainer(props) {
  {
    console.log("propss..", props);
  }

  return (
    <div className="ProjectDetailsContainerWrapper">
        
      <div className="details_image_name">
        <div className="detail_img_container">
          <img
            className="detail_img"
            src={
              process.env.REACT_APP_API_URL +
              "/images/" +
              props.project?.projectImage
            }
            alt="projectImage"
          />
        </div>


        <p className="detail_name">{props.project?.projectName}</p>
      </div>

      <div className="detail_status">
        <p className="detal_text_status">Project status</p>
        {props.project?.status === "ended" ? (
          <div className="detail_status_ended">Ended</div>
        ) : (
          <div className="detail_status_started">Started</div>
        )}
      </div>

      <div className="detail_discription">{props.project?.discription}</div>

      <div className="details_date">
        <p>Start date and end date: 25/10/2023 - 27/11/2023</p>
      </div>

      <div className="details_social_links">
        <TwitterOutlined className="social_link" />
        <FaTelegramPlane className="social_link" />
        <FaEnvelope className="social_link" />
      </div>

      <div className="detail_connectWallet_btn_div">
        <button className="detail_connect_wallet_btn">Connect wallet</button>
      </div>
    </div>
  );
}

export default ProjectDetailsContainer;
