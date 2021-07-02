import React from 'react';
import styled from 'styled-components';
import gInterior from '../assets/images/gInterior.PNG';

function ProjectModal() {
  const closeModal = () => {};
  return (
    <Wrapper>
      <div className="overlay">
        <div className="project__modal">
          <div className="modal__img">
            <img src={gInterior} alt="" />
          </div>
          <div className="modal__infor">
            <h2>Interior Portfolio Website</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, nam?
            </span>
            <p>
              <strong>Created -</strong> July 2021
            </p>
            <p>
              <strong>Role -</strong> Front End
            </p>
            <p>
              <strong>View Online -</strong> ginterior.nettify.app
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
  .project__modal {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 105;
    background-color: var(--gray-1);
    padding: 5rem;
    border-radius: 1rem;
    transform: translate(-50%, 50%);
    p,
    h2,
    span,
    strong {
      color: var(--deep-dark);
    }
    img {
      border-radius: var(--radius);
      max-width: 900px;
      height: 300px;
    }
    h2 {
      font-size: 2rem;
      padding: 1rem 0;
    }
    span {
      font-size: 1.5rem;
      padding-bottom: 1rem;
      font-weight: lighter;
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(7, 7, 7, 0.5);
    z-index: 104;
  }
`;

export default ProjectModal;
