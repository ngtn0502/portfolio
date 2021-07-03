import React from 'react';
import styled from 'styled-components';
import TypedReactHooksDemo from '../components/Typed';
import Qualification from '../components/Qualification';
import AboutSwiper from '../components/AboutSwiper.js';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';

function AboutPage() {
  return (
    <Wrapper className="container">
      <div className="title">
        <TypedReactHooksDemo string="who am i..." />
        <h2>About Me</h2>
      </div>
      <div className="about">
        <div>
          <h1 className="category">qualification</h1>
          <Qualification />
        </div>
        <div className="about__skill">
          <h1 className="category">my skills</h1>
          <div className="hero__social__indicator">
            <div>
              <p>right</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
          </div>
          <AboutSwiper />
        </div>
        <div />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 10rem;
  position: relative;
  .title {
    span {
      display: inline;
    }
  }
  .hero__social__indicator {
    display: flex;
    justify-content: flex-end;
    p {
      display: block;
      text-align: center;
      font-size: 1.5rem;
      letter-spacing: 0.4rem;
      margin: 0 0;
    }
    img {
      display: block;
      width: 1rem;
      margin: 0 0 auto 0;
      max-height: 5rem;
      object-fit: contain;
      transform: rotate(-90deg);
    }
  }
  .about__skill {
    margin-top: 10rem;
  }
  @media (min-width: 920px) {
  }
`;

export default AboutPage;
