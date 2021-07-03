import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaBusinessTime } from 'react-icons/fa';
import { educationalList, worksList } from '../utils/constant';

function AboutPage() {
  const [btnActive, setBtnActive] = useState(true);
  let content = educationalList.map((item) => (
    <div className="qualification__data">
      <div>
        <div className="qualification__rounder" />
        <div className="qualification__line" />
      </div>
      <div className="data2">
        <p className="qualification__date">{item.date}</p>
        <h2 className="qualification__title">{item.title}</h2>
        <p className="qualification__subTitle">{item.subTitlt}</p>
        {item.sub && <p className="qualification__subTitle">{item.sub}</p>}
      </div>
    </div>
  ));

  if (!btnActive) {
    content = worksList.map((item) => (
      <div className="qualification__data">
        <div>
          <div className="qualification__rounder" />
          <div className="qualification__line" />
        </div>
        <div className="data2">
          <p className="qualification__date">{item.date}</p>
          <h2 className="qualification__title">{item.title}</h2>
          <p className="qualification__subTitle">{item.subTitlt}</p>
        </div>
      </div>
    ));
  }

  return (
    <Wrapper className="container">
      <div className="qualification">
        <div className="qualification__part">
          <div />
          <div className="qualification__part__divide">
            <button
              type="button"
              className={`${
                btnActive
                  ? 'qualification__btn btn__active'
                  : 'qualification__btn'
              }`}
              onClick={() => {
                setBtnActive(true);
              }}
            >
              <span>
                <FaGraduationCap />
              </span>
              Educations
            </button>
            <button
              type="button"
              className={`${
                !btnActive
                  ? 'qualification__btn btn__active'
                  : 'qualification__btn'
              }`}
              onClick={() => {
                setBtnActive(false);
              }}
            >
              <span>
                <FaBusinessTime />
              </span>
              Works
            </button>
          </div>
        </div>
        {content}
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
  .qualification__part {
    display: grid;
    grid-template-columns: max-content 1fr;
    margin: 3rem 0;
  }
  .qualification__part__divide {
    display: flex;
    flex-direction: row;
    .qualification__btn {
      background-color: transparent;
      outline: none;
      border: none;
      margin-right: 1rem;
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right: 3rem;
      opacity: 0.5;
      transition: var(--transition);
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
    .btn__active {
      color: var(--white);
      position: relative;
      opacity: 1;
      transition: all 1s linear;
      &::after {
        content: '';
        position: absolute;
        top: -100%;
        left: 50%;
        width: 0.3rem;
        height: 420%;
        background-color: var(--gray-1);
        transform: rotate(90deg);
      }
    }
  }
  .qualification__data {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 2rem;
    margin-bottom: 5rem;
    .data2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .qualification__date {
        line-height: 2rem;
        letter-spacing: 0.2em;
        font-size: 1.1rem;
      }
      .qualification__title {
        font-size: 1.8rem;
      }
      .qualification__subTitle {
        font-size: 1.3rem;
      }
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
    height: 160%;
    width: 0.3rem;
    background-color: var(--gray-1);
    transform: translate(150%, -10%);
  }

  /* .qualification__line {

    transform: translate(170%, -50%);
  } */
`;

export default AboutPage;
