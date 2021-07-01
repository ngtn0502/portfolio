import React from 'react';
import styled from 'styled-components';

export default function HomeInfor({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 500px;
  text-align: center;
  font-size: 1.3rem;
  line-height: 2em;
  margin: 0px auto;
  color: var(--white);

  @media (min-width: 720px) {
    font-size: 2rem;
    line-height: 2.5em;
  } ;
`;
