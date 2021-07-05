import React from 'react';
import styled from 'styled-components';
import { FaBars, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { links, socials } from '../utils/constant';

const socialsVariants = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.3,
    },
  },
};

const linksVariants = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.3,
    },
  },
};

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="footer__links">
          <div className="footer__link">
            <span className="footer__link__icon">
              <FaBars />
            </span>
          </div>
          <h2>Links</h2>
          <ul>
            {links.map((link) => (
              <motion.li
                key={link.id}
                variants={socialsVariants}
                whileHover="hover"
              >
                <Link to={link.url}>{link.text}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <span className="footer__link__icon">
              <FaGlobe />
            </span>
          </div>
          <h2>Socials</h2>
          <ul>
            {socials.map((link) => (
              <motion.li
                key={link.id}
                variants={linksVariants}
                whileHover="hover"
              >
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.image}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <h2>© 2021 - Portfolio | Developed By NhanNguyen</h2>
        <h2>Made with passion and love</h2>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--deep-dark);
  margin-top: 10rem;
  /* width: 10rem; */
  .footer__link {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }
  .footer__link__icon {
    width: 3rem;
    height: 3rem;
    border: 2px solid var(--white);
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      transform: rotate(-45deg);
      width: 2rem;
      height: 2rem;
      fill: var(--white);
    }
  }
  .footer__links {
    padding: 3rem;
    h2 {
      text-align: center;
      color: var(--white);
      font-size: 3rem;
    }
    ul {
      display: flex;
      margin: 0 auto;
      margin-top: 2rem;
      justify-content: space-between;
      gap: 0.5rem;
      max-width: 33rem;
      a {
        text-transform: uppercase;
        font-size: 1.8rem;
        color: var(--white);
        font-weight: 400;
      }
      svg {
        width: 2.5rem;
        height: 2.8rem;
        fill: var(--white);
        font-weight: 400;
      }
    }
  }
  .footer__copy {
    text-align: center;
    padding-bottom: 1rem;
  }
  @media (min-width: 920px) {
    margin-top: 15rem;
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }
  }
`;

export default Footer;
