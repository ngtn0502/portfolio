import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TypedReactHooksDemo from '../components/Typed';
import Qualification from '../components/Qualification';
import Introduce from '../components/Introduce.js';
import TechniqueSkills from '../components/TechniqueSkills';
import FadeInWhenVisible from '../utils/InviewHelper.js';

function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Wrapper className="container">
        <div className="title">
          <TypedReactHooksDemo string="who am i..." />
          <h2>About Me</h2>
        </div>
        <div className="about">
          <FadeInWhenVisible>
            <div className="about__firstSection">
              <div>
                {/* <h1 className="category">Introduce</h1> */}
                <Introduce />
              </div>
              <div>
                <h1 className="category">Qualification</h1>
                <Qualification />
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="about__secondSection">
              <div>
                <TypedReactHooksDemo string="let's check out..." />
                <h1 className="about__secondSection__title">my skills</h1>
                <TechniqueSkills />
              </div>
              {/* <div>
              <h1 className="category">Personal skills</h1>
              <PersonalSkills />
            </div> */}
            </div>
          </FadeInWhenVisible>
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
    </motion.main>
  );
}
const Wrapper = styled.div`
  padding-top: 10rem;
  position: relative;
  .about {
    padding-top: 5rem;
  }
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
  .about__firstSection {
    .category {
      padding-top: 1.5rem;
    }
  }
  .about__secondSection {
    padding: 2rem 0;
    div {
      padding: 1rem 0;
    }
    span {
      font-size: 1.3rem;
      padding: 0;
    }
  }
  @media (min-width: 920px) {
    .about__secondSection {
      .about__secondSection__title {
        text-align: left;
        margin-left: 15rem;
        margin-top: 0;
        font-family: 'Montserrat Bold';
        font-size: 2.5rem;
      }
    }
    .about__firstSection {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .category {
        margin-top: 0;
        padding-top: 0;
      }
    }
  }
`;

export default AboutPage;
