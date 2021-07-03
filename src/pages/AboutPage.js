import React from 'react';
import styled from 'styled-components';
import TypedReactHooksDemo from '../components/Typed';
import Qualification from '../components/Qualification';
import Introduce from '../components/Introduce.js';
import AboutSwiper from '../components/AboutSwiper.js';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import PersonalSkills from '../components/PersonalSkills.js';
import TechniqueSkills from '../components/TechniqueSkills';

function AboutPage() {
  return (
    <Wrapper className="container">
      <div className="title">
        <TypedReactHooksDemo string="who am i..." />
        <h2>About Me</h2>
      </div>
      <div className="about">
        <div className="about__firstSection">
          <div>
            <h1 className="category">Introduce</h1>
            <Introduce />
          </div>
          <div>
            <h1 className="category">qualification</h1>
            <Qualification />
          </div>
        </div>
        <div className="about__secondSection">
          <div>
            <h1 className="category">Technique Skills</h1>
            <TechniqueSkills />
          </div>
          <div>
            <h1 className="category">Personal Skills</h1>
            <PersonalSkills />
          </div>
        </div>
        {/* <div className="about__skill">
          <h1 className="category">my skills</h1>
          <div className="hero__social__indicator">
            <div>
              <p>right</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
          </div>
          <AboutSwiper />
        </div> */}
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
  .about__secondSection {
    padding: 2rem 0;
    div {
      padding: 1rem 0;
    }
  }
  @media (min-width: 920px) {
    .about__secondSection,
    .about__firstSection {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default AboutPage;
