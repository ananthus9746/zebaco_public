import React from "react";
import "./Footer.css";
import companyLog from "../../../src/images/logo green (1).png";
import { TwitterOutlined } from "@ant-design/icons";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";

import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className="footer_main_wrapper">
      <div className="FooterWrapper">
        <div className="footer_Section_wrapper">
          <div className="footer_logo_detail_wrapper">
            <img src={companyLog} alt="" className="footer_company_logo" />
            <p className="footer_detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              iure eriores pariatur fugiat expedita molestias
            </p>
          </div>

          <div className="footer_sociallinks_wrapper">
            <TwitterOutlined className="footer_socail_links" />
            <FaEnvelope className="footer_socail_links" />
            <FaTelegramPlane className="footer_socail_links" />
            <FaDiscord className="footer_socail_links" />
            <FaFacebook className="footer_socail_links" />
          </div>
        </div>

        <div className="footer_helper_and_general_container">
          <div className="footer_help">
            <p>General</p>
            <ul>
              <li>Apply for IDO</li>
              <li>View projects</li>
              <li>Home</li>
              <li>Partners</li>
            </ul>
          </div>

          <div className="footer_help">
            <p>Help</p>
            <ul>
            
            <Link to="about">
            <li>About launchpad</li>
            <li>privacy polylicy</li>
            <li>FAQ</li>

            </Link>
              <li>Home</li>
             
            </ul>
          </div>

          <div className="footer_help">
            <p>Social medias</p>
            <ul>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Email</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
