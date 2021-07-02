import React from 'react';
import styled from 'styled-components';
import gInterior from '../assets/images/gInterior.PNG';
import corpVision from '../assets/images/corpVision.PNG';
import gitHubUser from '../assets/images/gitHubUser.PNG';

function ProjectPage() {
  return (
    <>
      <Wrapper className="container">
        <div className="title">
          <span>some of my recent work</span>
          <h2>PROJECT</h2>
        </div>
        <div className="project">
          <div className="project__item">
            <div className="project__img">
              <img src={gInterior} alt="gInterior" />
            </div>
            <div className="project__info">
              <h2>G - Interior Website</h2>
            </div>
            <div>
              <a
                href="https://ginterior.netlify.app/"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project__brief">
            <h2>Overview</h2>
            <p>An Interior E-commerce Website.</p>
            <p>
              This website allow customer can view list of sortable products and
              buy it also
            </p>
            <h2>Technology Used</h2>
            <div className="techStack">
              <button type="button" className="btn2">
                ReactJS
              </button>
              <button type="button" className="btn2">
                Styled Component
              </button>
              <button type="button" className="btn2">
                CSS3
              </button>
              <button type="button" className="btn2">
                React Router
              </button>
              <button type="button" className="btn2">
                CSS3
              </button>
              <button type="button" className="btn2">
                HTML5
              </button>
              <button type="button" className="btn2">
                Public API
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="project">
          <div className="project__item">
            <div className="project__img">
              <img src={corpVision} alt="gInterior" />
            </div>
            <div className="project__info">
              <h2>Corp Vision Website</h2>
            </div>
            <div>
              <a
                href="https://corp-vision.netlify.app/"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project__brief">
            <h2>Overview</h2>
            <p>A landing page.</p>
            <p>
              This website help corporation introducing about what they are
              provide to customer
            </p>
            <h2>Technology Used</h2>
            <div className="techStack">
              <button type="button" className="btn2">
                JavaScript
              </button>
              <button type="button" className="btn2">
                Bootstrap4
              </button>
              <button type="button" className="btn2">
                CSS3
              </button>
              <button type="button" className="btn2">
                HTML5
              </button>
              <button type="button" className="btn2">
                Jquery
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="project">
          <div className="project__item">
            <div className="project__img">
              <img src={gitHubUser} alt="gInterior" />
            </div>
            <div className="project__info">
              <h2>Github User Search Page</h2>
            </div>
            <div>
              <a
                href="https://search-githubser.netlify.app/"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project__brief">
            <h2>Overview</h2>
            <p>
              This website allow people searching for specific Github User and
              provide a overview informative chart about this user.
            </p>
            <h2>Technology Used</h2>
            <div className="techStack">
              <button type="button" className="btn2">
                ReactJS
              </button>
              <button type="button" className="btn2">
                HTML5
              </button>
              <button type="button" className="btn2">
                Github API
              </button>
              <button type="button" className="btn2">
                React Router
              </button>
              <button type="button" className="btn2">
                Styled Component
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  padding-top: 10rem;
  position: relative;
  .project__brief {
    display: none;
  }
  .project {
    padding-top: 5rem;
    h2 {
      padding: 1rem 0;
      font-size: 2rem;
    }
  }
  .project__item {
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .project__img {
    max-width: 500px;
    height: auto;
    transition: var(--transition);
    overflow: hidden;
    border-radius: var(--radius);
    img {
      border-radius: var(--radius);
      transition: var(--transition);
      object-fit: contain;
      border: 2px solid var(--gray-1);
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
  .btn {
    padding: 0.5em 1.5em;
    font-size: 1.5rem;
  }
  /* For desktop */
  @media (min-width: 920px) {
    .project {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .project__brief {
      display: block;
      margin: 5rem;
    }
    .techStack {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
      .btn2 {
        font-size: 1.5rem;
        padding: 0.5em 1.5em;
      }
    }
  }
`;
export default ProjectPage;
