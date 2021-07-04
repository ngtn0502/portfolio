import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Parallax, Pagination, Navigation } from 'swiper/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import corpCap from '../assets/images/HomeProject/corpCap.PNG';
import githubCap from '../assets/images/HomeProject/githubCap.PNG';
import interiorCap from '../assets/images/HomeProject/interiorCap.PNG';
// import Swiper core and required modules
import codingBg from '../assets/images/codingBg.jpg';
// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);

export default function App() {
  return (
    <Wrapper>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image': `url(${codingBg})`,
          }}
          data-swiper-parallax="-23%"
        />
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            G - Interior Store
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            An Interior E-commerce Site
          </div>
          <div className="text" data-swiper-parallax="-100">
            <Link to="/project" className="btn">
              Details
            </Link>
            <button type="button" className="btn">
              Go to site
            </button>
            <img src={interiorCap} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Corp-Vision Page
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            A landing page
          </div>
          <div className="text" data-swiper-parallax="-100">
            <Link to="/project" className="btn">
              Details
            </Link>
            <button type="button" className="btn">
              Go to site
            </button>
            <img src={corpCap} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Github Search
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            A page
          </div>
          <div className="text" data-swiper-parallax="-100">
            <Link to="/project" className="btn">
              Details
            </Link>
            <button type="button" className="btn">
              Go to site
            </button>
            <img src={githubCap} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  #root {
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 1.5rem;
  }

  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
  }

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide .title {
    font-size: 30px;
    font-weight: 300;
  }

  .swiper-slide .subtitle {
    font-size: 15px;
  }

  .swiper-slide .text {
    font-size: 14px;
    max-width: 500px;
    line-height: 1.3;
    .btn {
      padding: 0.3rem 1rem;
      margin: 1rem 1rem 0 0;
      font-size: 1.5rem;
    }
    img {
      max-width: 400px;
      height: 200px;
      border-radius: var(--radius);
      object-fit: contain;
    }
  }
  @media (min-width: 920px) {
    .swiper-slide .title {
      font-size: 41px;
      font-weight: 300;
    }

    .swiper-slide .subtitle {
      font-size: 25px;
    }

    .swiper-slide .text {
      font-size: 14px;
      max-width: 500px;
      line-height: 1.3;
      .btn {
        padding: 0.5rem 1.5rem;
        margin: 1rem 1rem 0 0;
      }
      img {
        max-width: 400px;
        height: 300px;
        border-radius: var(--radius);
        object-fit: contain;
      }
    }
  }
`;
