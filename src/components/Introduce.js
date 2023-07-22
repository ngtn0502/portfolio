import React, { useState } from 'react';
import styled from 'styled-components';

function Introduce() {
  return (
    <Wrapper>
      <div className="introduce">
        <div className="introduce__subTitle">
          Hi, I am <span className="subTitle">Nhan Nguyen</span>
        </div>
        <h2>A Full-Stack Developer</h2>
        <p>Ho Chi Minh City, VietNam.</p>
        <hr />
        <p>
          Highly adaptable, result-driven problem solver seeking to build
          website that make people's live easier...
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .introduce {
    p:nth-of-type(2) {
      padding-top: 1.5rem;
    }
  }
  .introduce__subTitle {
    font-size: 1.5rem;
    .subTitle {
      width: auto;
      display: inline-block;
      font-size: 1.5rem;
      padding: 0.5rem 0.5rem;
      border: 2px solid transparent;
      border-radius: var(--radius);
      background: var(--deep-dark);
    }
  }
  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    padding: 1rem 0;
  }
  hr {
    padding: 1rem;
  }
  p {
    line-height: 2.5rem;
  }
`;

export default Introduce;
