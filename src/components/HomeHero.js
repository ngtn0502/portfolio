import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroPicture from '../assets/images/heroPicture.jpg';
import HomteInfor from './HomeInfor';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDown from '../assets/images/scroll-down-arrow.svg';
import { media } from '../utils/constant.js';
import TypedReactHooksDemo from './Typed';

export default function HomeHero() {
  return (
    <Wrapper className="page container">
      <div className="hero__title">
        <TypedReactHooksDemo string="hello, this is" />
        <h2 className="hero__title__name">Nhan Nguyen</h2>
      </div>
      <div className="hero__img">
        <img src={heroPicture} alt="person" />
      </div>
      <div className="hero__infor">
        <HomteInfor>
          I code beautifully simple things, and I love what I do.
        </HomteInfor>
        <div className=" hero__btn">
          <a
            href=""
            target="_blank"
            className="btn btn2"
            rel="noreferrer"
          >
            download my résumé
          </a>{' '}
          <Link to="/project" className="btn">
            see my work
          </Link>{' '}
        </div>
      </div>
      <div className="hero__social">
        <div className="hero__social__indicator">
          <p>follow</p>
          <img src={SocialMediaArrow} alt="" />
        </div>
        <div className="hero__social__text">
          <ul>
            {media.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hero__scrollDown">
        <p>scroll</p>
        <img src={ScrollDown} alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  padding: 8rem 0;
  .hero__title {
    text-align: center;
    position: relative;
    top: 2rem;

    .hero__title__name {
      font-size: 4rem;
      color: var(--white);
      h2 {
        margin: 0;
      }
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 300px;
    margin: 0px auto;
    border: 2px solid var(--gray-1);
  }
  .hero__btn {
    text-align: center;
  }
  .hero__infor {
    margin: 0px auto;
  }
  /* For Indicator Scroll */
  .hero__scrollDown,
  .hero__social {
    text-transform: uppercase;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .hero__social {
    left: -4rem;
    bottom: -4rem;
  }
  .hero__scrollDown {
    right: -1.5rem;
    bottom: -15rem;
    img {
      max-height: 8rem;
    }
  }

  .hero__scrollDown,
  .hero__social__indicator {
    a,
    p {
      display: block;
      text-align: center;
      font-size: 1.5rem;
      transform: translateY(-6rem) rotate(-90deg);
      letter-spacing: 0.5rem;
    }
    img {
      display: block;
      width: 2rem;
      margin: 0 auto;
      max-height: 5rem;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 8rem;
    }
  }
  .hero__social__text {
    ul {
      font-size: 1.5rem;
      transform: translateY(4rem) rotate(-90deg);
      letter-spacing: 0.5rem;
      display: flex;
      gap: 2rem;
    }
  }
  /* End Indicator Scroll */
  .btn {
    padding: 0.5em 1.5em;
    font-size: 1.5rem;
  }

  @media (min-width: 720px) {
    padding: 15rem 0;
    .hero__img {
      height: 600px;
    }
    .hero__infor {
      margin-top: -25rem;
    }
    .hero__title {
      top: 4rem;
      .hero__title__name {
        font-size: 7rem;
      }
    }
    .btn {
      padding: 0.7em 2em;
      font-size: 2rem;
    }
    .hero__social {
      left: 0rem;
      bottom: 0rem;
    }
    .hero__scrollDown {
      right: 0rem;
      bottom: -20rem;
    }
  }
`;
