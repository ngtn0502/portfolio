import React from 'react';
import styled from 'styled-components';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import image
import JS from '../assets/images/About/JS.svg';
import HTML5 from '../assets/images/About/HTML5.svg';
import CSS3 from '../assets/images/About/CSS3.svg';
import ReactJS from '../assets/images/About/ReactJS.svg';
import bootstrap from '../assets/images/About/bootstrap.svg';
import redux from '../assets/images/About/redux.svg';

//
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

// install Swiper modules
SwiperCore.use([EffectCoverflow]);

export default function AboutSwiper() {
  return (
    <Wrapper>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={JS} alt="" />
          <span>JavaScript</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactJS} alt="" />
          <span>ReactJS</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HTML5} alt="" />
          <span>HTML5</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CSS3} alt="" />
          <span>CSS3</span>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <img src={bootstrap} alt="" />
          <span>Bootstrap4</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={redux} alt="" />
          <span>Redux</span>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .swiper-container {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 150px;
    height: 150px;
    span {
      text-align: center;
    }
  }
  @media (min-width: 920px) {
    .swiper-slide {
      width: 170px;
      height: 170px;
    }
  }
`;
