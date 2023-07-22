import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TypedReactHooksDemo from '../components/Typed';
import ProjectSwiper from '../components/ProjectSwiper.js';
//

function ProjectPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Wrapper className="container">
        <div className="title">
          <TypedReactHooksDemo string="some of my recent work - Personal Project" />
          <h2>PROJECT</h2>
        </div>
        <ProjectSwiper />
      </Wrapper>
    </motion.main>
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
