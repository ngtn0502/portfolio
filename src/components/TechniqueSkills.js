import React, { useState } from 'react';
import styled from 'styled-components';
import { skillGrids } from '../utils/constant.js';

function PersonalSkills() {
  return (
    <Wrapper>
      <ul className="skillGrids">
        {skillGrids.map((item) => (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <div className="skillGrids__item">
            {item.svg}
            <p>{item.text}</p>
          </div>
        ))}
      </ul>
      <article className="skillGrids__animation">
        <div className="animation__title">JAVASCRIPT</div>
        <div className="animation__duration">
          Duration : <span>5 months</span>
        </div>
        <div className="animation__exp">Experience: Javascript, ReactJS</div>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  .skillGrids {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 2rem;
    .skillGrids__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1rem;
      border-radius: var(--radius);
      transition: var(--transition);
      box-shadow: 0px 4px 8px rgb(134 151 168 / 30%);
      border: 1px solid #eee;
      cursor: pointer;
      svg {
        width: 2rem;
        height: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media (min-width: 920px) {
    .skillGrids__animation {
      opacity: 0;
      transform: translateX(50%);
      transition: var(--transition);
    }
    .skillGrids__item {
      /* background-color: var(--gray-1); */
      /* box-shadow: 0px 4px 8px rgb(134 151 168 / 10%); */
      box-shadow: 0px 4px 8px rgb(255 255 255 / 30%);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        box-shadow: 0 12px 30px rgb(0 0 0 / 100%);
      }
    }
    /* .skillGrids:hover ~ .skillGrids__animation {
      opacity: 1;
      transform: translateX(0);
    } */
  }
`;

export default PersonalSkills;
