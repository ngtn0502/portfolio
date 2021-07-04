import React, { useRef, useState } from 'react';
import SwiperCore, { EffectCube, Pagination, Autoplay } from 'swiper/core';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import JS from '../assets/images/JS.jpg';
import HTML5 from '../assets/images/HTML5.png';
import CSS3 from '../assets/images/CSS3.png';
import ReactJS from '../assets/images/ReactJS.png';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([EffectCube, Autoplay]);

export default function App() {
  return (
    <Wrapper>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        effect="cube"
        grabCursor
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={JS} alt="projectDemo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactJS} alt="projectDemo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HTML5} alt="projectDemo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CSS3} alt="projectDemo" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .swiper-container {
    max-width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 27%;
    transform: translate(-50%, 50%);
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    transition: var(--transition);
    border-radius: var(--radius);
    img {
      display: block;
      width: 100%;
      object-fit: contain;
      cursor: pointer;
    }
  }
  @media (min-width: 920px) {
    .swiper-container {
      top: 40%;
    }
  }
`;
