import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const btnVariants = {
  hover: {
    scale: 1.5,
    transition: {
      yoyo: Infinity,
    },
  },
};

function TechniqueSkills({ skillGrids }) {
  return (
    <Wrapper>
      <ul className="skillGrids">
        {skillGrids.map((item) => (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <motion.div
            className="skillGrids__item"
            variants={btnVariants}
            whileHover="hover"
          >
            {item.svg}
            <p>{item.text}</p>
          </motion.div>
        ))}
      </ul>
      {/* <article className="skillGrids__animation">
        <div className="animation__title">JAVASCRIPT</div>
        <div className="animation__duration">
          Duration : <span>5 months</span>
        </div>
        <div className="animation__exp">Experience: Javascript, ReactJS</div>
      </article> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .skillGrids {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 3rem;
    .skillGrids__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1rem;
      border-radius: var(--radius);
      transition: var(--transition);
      /* box-shadow: 0px 4px 8px rgb(134 151 168 / 30%); */
      border: 1px solid #eee;
      cursor: pointer;
      img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media (min-width: 920px) {
    .skillGrids {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      .skillGrids__item {
        img {
          width: 4rem;
          height: 4rem;
          object-fit: contain;
        }
        p {
          font-size: 1.3rem;
        }
      }
    }
    .skillGrids__animation {
      opacity: 0;
      transform: translateX(50%);
      transition: var(--transition);
    }
    .skillGrids__item {
      /* box-shadow: 0px 4px 8px rgb(255 255 255 / 30%); */
      cursor: pointer;
    }
  }
`;

export default TechniqueSkills;
