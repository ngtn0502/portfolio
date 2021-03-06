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
import ncinema from '../assets/images/ncinema.png';
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
            N-Cinema
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            An Online Booking Ticket Websites
          </div>
          <div className="text" data-swiper-parallax="-100">
            <Link to="/project" className="btn2">
              Details
            </Link>
            <a
              href="http://ncineplex.netlify.app/"
              target="_blank"
              className="btn2"
              rel="noreferrer"
            >
              Go to site
            </a>
            <img src={ncinema} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            G - Interior Store
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            An Interior E-commerce Site
          </div>
          <div className="text" data-swiper-parallax="-100">
            <Link to="/project" className="btn2">
              Details
            </Link>
            <a
              href="https://ginterior.netlify.app/"
              target="_blank"
              className="btn2"
              rel="noreferrer"
            >
              Go to site
            </a>
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
            <Link to="/project" className="btn2">
              Details
            </Link>
            <a
              href="https://corp-vision.netlify.app/"
              target="_blank"
              className="btn2"
              rel="noreferrer"
            >
              Go to site
            </a>
            <img src={corpCap} alt="" />
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
    color: #1e1e1e;
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
    font-weight: 700;
  }

  .swiper-slide .subtitle {
    font-size: 15px;
  }

  .swiper-slide .text {
    font-size: 14px;
    max-width: 500px;
    line-height: 1.3;
    .btn2 {
      padding: 0.3rem 1rem;
      margin: 1rem 1rem 0 0;
      font-size: 1.5rem;
      &:hover {
        background-color: rgb(188, 180, 180, 1);
        color: var(--deep-dark);
      }
    }
    img {
      margin-top: 1.5rem;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      object-fit: contain;
      border: 4px solid var(--gray-1);
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
      max-width: 300px;
      line-height: 1.3;
      .btn2 {
        font-size: 1.8rem;
        padding: 0.3em 1em;
        margin: 1rem 1rem 0 0;
      }
      img {
        margin-top: 1.5rem;
        width: 100%;
        height: 100%;
        border-radius: var(--radius);
        object-fit: contain;
      }
    }
  }
`;
