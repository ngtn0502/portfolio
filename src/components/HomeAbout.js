import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeAbout from '../assets/images/homeAbout.jpg';

function HomeAbout() {
  return (
    <Wrapper className="container">
      <div className="homeAbout">
        <div className="homeAbout__info">
          <span>Let me introduce a little bit about myself</span>
          <h1>ABOUT ME</h1>
          <p>
            I graduated as a civil engineering at Ho Chi Minh City University of
            Technology. However, i based my career as a Developer, since my real
            passion is coding. <br /> See my previous work history on Project
            page or my Github.
          </p>
          <div className="homeAbout__btn">
            <Link to="/about" className="btn">
              More...
            </Link>
            <Link to="/project" className="btn btn2">
              Down load my CV
            </Link>
          </div>
        </div>

        <div className="homeImage">
          <div className="homeAbout__img">
            <img src={homeAbout} alt="homeAbout" />
            <div />
          </div>
          <div className="homeAbout__img2">
            <div />
            <img src={homeAbout} alt="homeAbout" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default HomeAbout;

const Wrapper = styled.main`
  .homeAbout {
    margin-top: 30rem;
    span,
    p {
      font-size: 1.5rem;
      line-height: 2em;
    }
    h1 {
      font-size: 5rem;
    }
    .homeAbout__btn {
      margin-top: 2rem;
      .btn {
        font-size: 1.5rem;
        padding: 0.3em 1em;
      }
      .btn2 {
        font-size: 1.5rem;

        padding: 0.3em 1em;
        margin-left: 1rem;
      }
    }
  }
  .homeImage {
    position: relative;
    margin-top: 5rem;
  }
  .homeAbout__img {
    img {
      position: absolute;
      bottom: 0;
      left: 0;
      max-width: 200px;
      width: 100%;
      height: 150px;
      margin: 0px auto;
      border: 2px solid var(--gray-1);
      object-fit: cover;
      transform: translateY(50%);
    }
  }
  .homeAbout__img2 {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    img {
      display: flex;
      justify-content: flex-end;
      max-width: 400px;
      width: 100%;
      height: 200px;
      margin: 0px auto;
      border: 2px solid var(--gray-1);
      object-fit: cover;
    }
  }
  @media (min-width: 720px) {
    .homeAbout__img2 {
      img {
        max-width: 450px;
        height: 350px;
      }
    }
    .homeAbout__img {
      img {
        max-width: 350px;
        height: 250px;
      }
    }
    /* .homeAbout {
      span,
      p {
        font-size: 1.7rem;
        line-height: 2em;
      }
      h1 {
        font-size: 5rem;
      }
    } */
    .homeAbout__btn {
      .btn {
        font-size: 1.8rem !important;
        padding: 0.3em 1em !important;
      }
    }
  }

  @media (min-width: 920px) {
    .homeAbout {
      margin-top: 30rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .homeAbout__img2 {
      grid-template-columns: 0.5fr 1fr;
      img {
        max-width: 450px;
        height: 350px;
      }
    }
    .homeAbout__img {
      img {
        max-width: 300px;
        height: 250px;
        transform: translate(25%, 50%);
      }
    }
  }
`;
