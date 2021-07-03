import React, { useState } from 'react';
import styled from 'styled-components';
import { advantages } from '../utils/constant.js';

function PersonalSkills() {
  return (
    <Wrapper>
      {advantages.map((item) => (
        <p className="introduce__advantage">
          <span>{item.svg}</span>
          {item.text}
        </p>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .introduce__advantage {
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }
  }
`;

export default PersonalSkills;
