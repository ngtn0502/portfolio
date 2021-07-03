import React from 'react';
import styled from 'styled-components';
import TypedReactHooksDemo from '../components/Typed';
import Qualification from '../components/Qualification';

function AboutPage() {
  return (
    <Wrapper className="container">
      <div className="title">
        <TypedReactHooksDemo string="who am i..." />
        <h2>About Me</h2>
      </div>
      <div>
        <Qualification />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 10rem;
  position: relative;
  .title {
    span {
      display: inline;
    }
  }
`;

export default AboutPage;
