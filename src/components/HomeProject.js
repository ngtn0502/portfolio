import React from 'react';
import styled from 'styled-components';
import HomeParallax from './HomeParallax.js';
import TypedReactHooksDemo from './Typed';

function HomeProject() {
  return (
    <Wrapper className="container">
      {/* <div className="homeProject">
        {homeProjectList.map((item) => (
          <div className="homeProject__item">
            <div className="img">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div> */}
      <div className="title">
        <TypedReactHooksDemo string="some of my recent work" />
        <h2>PROJECT</h2>
      </div>
      <HomeParallax />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 15rem;
  .title {
    padding-bottom: 2rem;
    span {
      display: inline;
    }
  }
  @media (min-width: 920px) {
    padding-top: 25rem;
  }
`;

export default HomeProject;
