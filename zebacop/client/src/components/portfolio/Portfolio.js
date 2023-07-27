import React, { useState } from "react";
import SwipperSlide from "../swipper/SwipperSlide";
import "./portfolio.css";
import Carosel from "./../Carosel/Carosel";
function Portfolio(props) {
  console.log("props...prtdolio", props.name);
  const [partners, setPartner] = useState();
  if (props.partners) {
  }
  return (
    <div className="portfolio_silder">
      <div className="portfolio_head">
        <p>{props.name}</p>
      </div>

      <Carosel />

      <div className="portfolio_uderline"></div>
    </div>
  );
}

export default Portfolio;
