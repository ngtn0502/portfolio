import React from 'react';
import styled from 'styled-components';
import gInterior from '../assets/images/gInterior.PNG';

function ProjectPage() {
  return (
    <Wrapper className="container">
      <div className="title">
        <span>some of my recent work</span>
        <h2>PROJECT</h2>
      </div>
      <div className="project__item">
        <div className="project__img">
          <img src={gInterior} alt="gInterior" />
        </div>
        <div className="project__info">
          <h2>Interior E-commerce Website</h2>
        </div>
        <div>
          <button type="button" className="btn">
            View Project
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 10rem;
  .project__item {
    margin: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .project__img {
    max-width: 400px;
    height: auto;
    transition: var(--transition);
    overflow: hidden;
    border-radius: var(--radius);
    img {
      border-radius: var(--radius);
      transition: var(--transition);
      object-fit: contain;
      filter: grayscale(50%) contrast(50%);
      border: 2px solid var(--gray-1);
    }
    &:hover img {
      transform: scale(1.2);
      filter: grayscale(0) contrast(100%);
    }
  }
  .project__info {
    h2 {
      padding: 1rem 0;
      font-size: 2rem;
    }
  }
`;
export default ProjectPage;
