import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import CardPortfolio from '../CardPortfolio/CardPortfolio'

import portfolioImg1 from '../../images/v2-7e982f6859d7d5c600d1506ce82cf52e_r.jpg'
import portfolioImg3 from '../../images/maxresdefault.jpg'
import portfolioImg4 from '../../images/konzept-von-nicht-fungiblen-token-einzigartigen-digitalen-gegenstaenden-fuer-krypto-kunst-und-blockchain-technologie_278395-470.webp'
import portfolioImg5 from '../../images/nft.png'
import portfolioImg6 from '../../images/thumb2-blue-digital-globe-blue-digital-background-global-networks-dots-globe-silhouette-digital-technology.jpg'
import portfolioImg7 from '../../images/NFT-Site_0.jpg'






export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay,]}
        className="mySwiper"
    >
      <SwiperSlide><CardPortfolio img={portfolioImg1}/></SwiperSlide>
      <SwiperSlide><CardPortfolio img={portfolioImg6}/></SwiperSlide>
      <SwiperSlide><CardPortfolio  img={portfolioImg3}/></SwiperSlide>
      <SwiperSlide><CardPortfolio  img={portfolioImg4}/></SwiperSlide>
      <SwiperSlide><CardPortfolio  img={portfolioImg5}/></SwiperSlide>
      <SwiperSlide><CardPortfolio  img={portfolioImg6}/></SwiperSlide>


    </Swiper>
  );
};

