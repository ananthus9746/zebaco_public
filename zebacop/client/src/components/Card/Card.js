import React from "react";
import "./Card.css";
import { Progress } from "antd";
// import TwitterIcon from '@mui/icons-material/Twitter';
import projectImage from "../../images/NFT-Site_0.jpg";

import { NavLink, Link } from "react-router-dom";

import ReadMoreReact from "read-more-react";

import { TwitterOutlined } from "@ant-design/icons";

import {
  FaEnvelope,
  FaTelegramPlane,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";

function Card(props) {
  // {props.obj&&console.log("obj in card from allproject tab..",props.obj.projectName)}

  console.log("t tab..", process.env.REACT_APP_API_URL);

  const MAX_LENGTH = 20;

  return (
    <div className="card">
      <div className="card_container">
        <div className="img_discrption_container">

          <Link  to="/viewProject" state={{ projectDetails: props.obj }}>
            <img
              src={
                process.env.REACT_APP_API_URL +
                "/images/" +
                props.obj?.projectImage
              }
              className="pro_img"
              alt="projectImage"
            />
          </Link>

          <div className="name_discription">
            <p id="project_name">{props.obj?.projectName}</p>

            {props.obj?.status === "ended" ? (
              <div className="status">Ended</div>
            ) : (
              <div className="status_started">Started</div>
            )}

            <div className="dicription">
              {/* <p>NFT Paintings is the first company in the world which offers unique opportunities related to investing in valuable paintings.</p> */}

              {props.obj?.discription && (
                <ReadMoreReact
                  text={props.obj?.discription}
                  min={30}
                  ideal={140}
                  max={150}
                  readMoreText={
                    <Link
                      to="/viewProject"
                      state={{ projectDetails: props.obj }}
                    >
                      Read more..
                    </Link>
                  }
                />
              )}
            </div>

            <div></div>
          </div>
        </div>

        <div className="total_rice_container">
          <dir className="total_raise_amount">Total raises $ 50000</dir>
          <div className="public_or_private">Public IDO</div>
        </div>

        <div className="progrss_bar">
          {/* <Progress value={70} label="Completed" color='green' /> */}

          <Progress
            format={() => <div style={{ color: "white" }}>40%</div>}
            percent={40}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
            trailColor={"rgba(1, 57, 49, 0.777)"}
          />
        </div>

        <div className="raised_wapper">
          <p>13890000/25000000 NFTP</p>
          <p>Raised</p>
        </div>

        <div className="socia_links_and_status">
          <Link to="/viewProject" state={{ projectDetails: props.obj }}>
            <div className="knomore_btn">Know more</div>
          </Link>
        </div>

        <div className="card_social_links">
          <a href={props.obj?.twitter}>
            <TwitterOutlined className="card_socail_links" />
          </a>
          <a href={props.obj?.email}>
            <FaEnvelope className="card_socail_links" />
          </a>
          <a href={props.obj?.telegram}>
            <FaTelegramPlane className="card_socail_links" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
