import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './project.css'
// import required modules

import Card from '../Card/Card'
import { geAlltProjects } from "../../APIs/UserApi";

export default function App() {
  const [isMobile, setIsMobile] = useState(0)

  const [width, setWidth] = useState(window.innerWidth);


  const updateDimensions = () => {
    setWidth(window.innerWidth);

  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  console.log("width..", width)

  useEffect(() => {
    if (width < 700) {
      console.log("width lessthan 700")
      setIsMobile(1)
    }
    else if (width < 900) {
      setIsMobile(2)
    }
    else {
      setIsMobile(3)

    }
  }, [width])





const [loading, setLoading] = useState(false);
const [colData,setColData]=useState([])

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await geAlltProjects().then((response) => {
      console.log("Home project slider..", response.data.projects);
      console.log("home slide col..",colData[2])
      setColData(response.data.projects.projects);
      setLoading(false);
    });
  };






  return (
    <>
      <Swiper
        slidesPerView={isMobile}
        spaceBetween={30}

      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}

      pagination={{
        clickable: true,
      }}



      modules={[Autoplay, Pagination,]}
      className="mySwiper"
      >

  

        <SwiperSlide>
          <Card  obj={colData[0]}/>
        </SwiperSlide>

        <SwiperSlide>
          <Card obj={colData[1]}/>
        </SwiperSlide>

        
         <SwiperSlide>
          <Card obj={colData[2]}/>
        </SwiperSlide>

        <SwiperSlide>
          <Card obj={colData[3]}/>
        </SwiperSlide>


        <SwiperSlide>
          <Card obj={colData[4]}/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
