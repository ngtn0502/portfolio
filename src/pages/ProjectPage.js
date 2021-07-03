import React from 'react';
import styled from 'styled-components';
import TypedReactHooksDemo from '../components/Typed';
import ProjectSwiper from '../components/ProjectSwiper.js';
//

function ProjectPage() {
  return (
    <>
      <Wrapper className="container">
        <div className="title">
          <TypedReactHooksDemo string="some of my recent work" />
          <h2>PROJECT</h2>
        </div>
        <ProjectSwiper />
      </Wrapper>
    </>
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
export default ProjectPage;
