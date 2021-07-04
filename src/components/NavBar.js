import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { links } from '../utils/constant';

export default function NavBar() {
  const [isSideBar, setIsSideBar] = useState(false);
  const [navLink, setNavLink] = useState(null);
  const current = useLocation();
  useEffect(() => {
    setNavLink(current.pathname);
  }, [current]);

  const openSideBarHandler = () => {
    setIsSideBar((prev) => !prev);
  };
  const closeSideBarHandler = () => {
    setIsSideBar((prev) => !prev);
  };

  return (
    <NavContainer className="containerNav">
      <button
        type="button"
        className="toggle__btn"
        onClick={openSideBarHandler}
      >
        <FaBars />
      </button>
      <div className={`${isSideBar ? 'nav__links sideBar' : 'nav__links'}`}>
        <ul>
          {links.map((link) => (
            <li
              key={link.id}
              className={`${
                navLink === link.url ? 'nav__link active' : 'nav__link'
              }`}
            >
              <Link
                to={link.url}
                onClick={() => {
                  setIsSideBar(false);
                  return setNavLink(link.url);
                }}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nav__exit"
          onClick={closeSideBarHandler}
        >
          <FaTimes />
        </button>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 7rem;
  z-index: 100;
  background-color: var(--dark-bg);

  .containerNav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .toggle__btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    cursor: pointer;
    outline: none;
    background: transparent;
    border: none;
  }
  .nav__links {
    background-color: var(--deep-dark);
    position: absolute;
    right: 1rem;
    padding: 1rem 2.5rem;
    margin-top: 1rem;
    transition: var(--transition);
    transform: translateY(-150%);
    border-radius: var(--radius);
    ul {
      position: relative;
    }
    .nav__link {
      text-align: center;
      text-transform: capitalize;
      padding: 1rem 2rem;
      font-size: 2rem;
      max-width: 300px;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      &:hover a {
        color: var(--white);
      }
      a {
        transition: var(--transition);
      }
    }
    .nav__exit {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 2.5rem;
      cursor: pointer;
      outline: none;
      background: transparent;
      border: none;
      align-items: center;
    }
    .active {
      background-color: var(--deep-dark);
      border-radius: var(--radius);

      a {
        color: var(--white);
      }
    }
  }
  .sideBar {
    transform: translateY(0%);
  }
  @media (min-width: 720px) {
    .toggle__btn,
    .nav__exit {
      display: none;
    }
    .nav__links {
      transform: translateY(0%);
      position: sticky;
      background: none;
      display: block;
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
