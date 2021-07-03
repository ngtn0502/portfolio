import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaBusinessTime } from 'react-icons/fa';

function AboutPage() {
  return (
    <Wrapper className="container">
      <div className="qualification">
        <div className="qualification__cat">
          <h2 className="cat-h2">
            <span>
              <FaGraduationCap />
            </span>
            Educations
          </h2>
          <h2>
            <span>
              <FaBusinessTime />
            </span>
            Works
          </h2>
        </div>
        <div className="qualification__data">
          <div className="data">
            <h2 className="qualification__title">HCMUT</h2>
            <p className="qualification__subTitle">Civil Engineering</p>
            <p className="qualification__date">2017-2021</p>
          </div>
          <div>
            <div className="qualification__rounder" />
            <div className="qualification__line" />
          </div>
        </div>
        <div className="qualification__data">
          <div />
          <div>
            <div className="qualification__rounder" />
            <div className="qualification__line" />
          </div>
          <div className="data2">
            <h2 className="qualification__title">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="qualification__subTitle">Lorem, ipsum dolor.</p>
            <p className="qualification__date">1999-unknown</p>
          </div>
        </div>
        <div className="qualification__data">
          <div className="data">
            <h2 className="qualification__title">Self Learner</h2>
            <p className="qualification__subTitle">Udemy / Internet</p>
            <p className="qualification__date">2021-forever</p>
          </div>
          <div>
            <div className="qualification__rounder" />
            <div className="qualification__line" />
          </div>
        </div>
        <div className="qualification__data">
          <div />
          <div>
            <div className="qualification__rounder" />
            <div className="qualification__line" />
          </div>

          <div className="data2">
            <h2 className="qualification__title">You will fill it...</h2>
            <p className="qualification__subTitle">Front End Developer</p>
            <p className="qualification__date">2021-now</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
    margin-top: 2rem;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.1rem;
  }
  .qualification__cat {
    display: flex;
    justify-content: space-evenly;
    margin: 3rem 0;
    h2 {
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      display: inline;
      svg {
        color: white;
        margin-right: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .qualification__data {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 2rem;
    .data2,
    .data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
    .data2 {
      align-items: flex-start;
    }
    .qualification__date {
      line-height: 2rem;
      letter-spacing: 0.2em;
    }
  }
  .qualification__rounder {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: var(--gray-1);
  }
  .qualification__line {
    height: 107%;
    width: 0.3rem;
    background-color: var(--gray-1);
    transform: translate(150%, -9%);
  }

  /* .qualification__line {

    transform: translate(170%, -50%);
  } */
`;

export default AboutPage;
