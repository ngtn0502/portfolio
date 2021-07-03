import React, { useState } from 'react';
import styled from 'styled-components';
import { skillGrids } from '../utils/constant.js';

function PersonalSkills() {
  return (
    <Wrapper>
      <ul className="skillGrids">
        {skillGrids.map((item) => (
          <div className="skillGrids__item">
            {item.svg}
            <p>{item.text}</p>
          </div>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
      /* background-color: var(--gray-1); */
      box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
      border: 1px solid #eee;
      cursor: pointer;
      &:hover {
        box-shadow: 0 12px 30px rgb(0 0 0 / 50%);
      }
      svg {
        width: 2rem;
        height: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

export default PersonalSkills;
