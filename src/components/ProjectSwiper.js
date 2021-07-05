import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper/core';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// For title
import { BiCodeAlt } from 'react-icons/bi';
import { HiViewGrid } from 'react-icons/hi';
// For button
// import { GrReactjs } from 'react-icons/gr';
// import { DiCss3 } from 'react-icons/di';
// import {
//   SiReactrouter,
//   SiHtml5,
//   SiStyledComponents,
//   SiJavascript,
//   SiBootstrap,
//   SiJquery,
//   SiGithub,
// } from 'react-icons/si';
// import { AiFillApi } from 'react-icons/ai';

import gInterior from '../assets/images/gInterior.PNG';
import corpVision from '../assets/images/corpVision.PNG';
import gitHubUser from '../assets/images/gitHubUser.PNG';
import myPortfolio from '../assets/images/myPortfolio.PNG';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
// For tech display
import TechniqueSkills from './TechniqueSkills';
import {
  projectSkillGrids,
  projectSkillGrids2,
  projectSkillGrids3,
  projectSkillGrids4,
  projectSkillGrids5,
} from '../utils/constant.js';

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Navigation]);

const styleP = {
  lineHeight: '2rem',
};

const styleGrid = {
  padding: '1rem 0 0 0',
};

export default function App() {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            {/* 1st Project */}
            <div className="project__item">
              <div className="project__img">
                <a
                  href="http://nhannguyen.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={myPortfolio} alt="gInterior" />
                </a>
              </div>
              <div className="project__info">
                <h2>My Portfolio</h2>
              </div>
              <div>
                <a
                  href="http://nhannguyen.netlify.app/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ngtn0502/portfolio"
                  target="_blank"
                  className="btn2"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Brief */}
            <div className="project__brief">
              <h2>
                <span>
                  <HiViewGrid />
                </span>
                Overview
              </h2>
              <p>A personal portfolio website</p>
              <p />
              <h2>
                <span>
                  <BiCodeAlt />
                </span>
                Technology Used
              </h2>
              {/* Skill */}
              <TechniqueSkills
                styleP={styleP}
                styleGrid={styleGrid}
                skillGrids={projectSkillGrids4}
              />
              {/* Skill */}
              <h2>
                <span>
                  <BiCodeAlt />
                </span>
                UI Library Used
              </h2>
              {/* Skill */}
              <TechniqueSkills
                styleP={styleP}
                styleGrid={styleGrid}
                skillGrids={projectSkillGrids5}
              />
              {/* Skill */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* 1st Project */}
            <div className="project__item">
              <div className="project__img">
                <a
                  href="https://ginterior.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={gInterior} alt="gInterior" />
                </a>
              </div>
              <div className="project__info">
                <h2>G - Interior Website</h2>
              </div>
              <div>
                <a
                  href="https://ginterior.netlify.app/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ngtn0502/furni-store-project"
                  target="_blank"
                  className="btn2"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Brief */}
            <div className="project__brief">
              <h2>
                <span>
                  <HiViewGrid />
                </span>
                Overview
              </h2>
              <p>An Interior E-commerce Website.</p>
              <p>
                This website allow customer can view list of sortable products
                and buy it also
              </p>
              <h2>
                <span>
                  <BiCodeAlt />
                </span>
                Technology Used
              </h2>
              {/* Skill */}
              <TechniqueSkills
                styleP={styleP}
                styleGrid={styleGrid}
                skillGrids={projectSkillGrids}
              />
              {/* Skill */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* 2nd Project */}
            <div className="project__item">
              <div className="project__img">
                <a
                  href="https://corp-vision.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={corpVision} alt="gInterior" />
                </a>
              </div>
              <div className="project__info">
                <h2>Corp Vision Website</h2>
              </div>
              <div>
                <a
                  href="https://corp-vision.netlify.app/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ngtn0502/Corpvision-Bootstrap"
                  target="_blank"
                  className="btn2"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Brief */}
            <div className="project__brief">
              <h2>
                <span>
                  <HiViewGrid />
                </span>
                Overview
              </h2>
              <p>A landing page.</p>
              <p>
                This website help corporation introducing about what they are
                provide to customer
              </p>
              <h2>
                <span>
                  <BiCodeAlt />
                </span>
                Technology Used
              </h2>
              {/* Skill */}
              <TechniqueSkills
                styleP={styleP}
                styleGrid={styleGrid}
                skillGrids={projectSkillGrids2}
              />
              {/* Skill */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* 3rd Project */}
            <div className="project__item">
              <div className="project__img">
                <a
                  href="https://search-githubser.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={gitHubUser} alt="gInterior" />
                </a>
              </div>
              <div className="project__info">
                <h2>Github User Search Page</h2>
              </div>
              <div>
                <a
                  href="https://search-githubser.netlify.app/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ngtn0502/ReactJS---githubUser"
                  target="_blank"
                  className="btn2"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project__brief">
              <h2>
                <span>
                  <HiViewGrid />
                </span>
                Overview
              </h2>
              <p>
                This website allow people searching for specific Github User and
                provide a overview informative chart about this user.
              </p>
              <h2 className="techStack__title">
                <span>
                  <BiCodeAlt />
                </span>
                Technology Used
              </h2>
              {/* Skill */}
              <TechniqueSkills
                styleP={styleP}
                styleGrid={styleGrid}
                skillGrids={projectSkillGrids3}
              />
              {/* Skill */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .project__brief {
    h2 {
      font-size: 2rem;
      display: flex;
      align-items: center;
    }
    span {
      display: inline-block;
      margin-right: 1rem;
      width: 3rem;
      height: 3rem;
      color: var(--gray-1);
    }
  }
  .swiper-slide {
    min-height: 400px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    --swiper-navigation-size: 2.5rem;
    top: 35%;
    color: var(--gray-1);
  }
  .title {
    span {
      display: inline;
    }
  }
  hr {
    display: none;
  }
  .project__info {
    h2 {
      font-size: 2rem;
      font-family: 'Montserrat Bold';
    }
  }
  .project__item {
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .project__img {
    max-width: 700px;
    min-height: 200px;
    transition: var(--transition);
    overflow: hidden;
    border-radius: var(--radius);
    img {
      border-radius: var(--radius);
      transition: var(--transition);
      object-fit: contain;
      border: 2px solid var(--gray-1);
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
  .btn {
    padding: 0.5em 1.5em;
    font-size: 1.5rem;
  }
  .project__brief {
    display: block !important;
    margin: 5rem;
    h2 {
      margin: 2rem 0;
    }
    .techStack {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      .btn2 {
        font-size: 1.5rem;
        padding: 0.5em 1.5em;
      }
    }
  }
  .btn2 {
    display: flex;
    align-items: center;
    svg {
      margin-left: 1rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  @media (min-width: 920px) {
    .project__brief {
      h2 {
        font-size: 2.8em;
      }
    }
    .project__info {
      h2 {
        font-size: 3.5rem;
        color: var(--white);
        font-family: 'Montserrat Bold';
      }
    }
    .btn {
      padding: 0.7em 1em;
      font-size: 1.8rem;
      margin-right: 3rem;
    }
    .btn2 {
      display: inline-block;
      padding: 0.7em 1.5em;
      font-size: 1.8rem;
      &:hover {
        background-color: rgb(188, 180, 180, 1);
        color: var(--deep-dark);
      }
    }
    .techStack__title {
      margin-top: 2rem;
    }
  }
`;
