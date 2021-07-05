import React from 'react';
import styled from 'styled-components';
import { contacts } from '../utils/constant.js';
import TypedReactHooksDemo from './Typed';

function ContactForm() {
  return (
    <>
      <Wrapper2 className="container">
        <div className="title">
          <TypedReactHooksDemo string="get in touch" />
          <h2>CONTACT</h2>
        </div>
      </Wrapper2>
      <Wrapper className="container">
        <div className="contact__left">
          {contacts.map((contact) => (
            <div className="contact__left__info">
              <span>{contact.image}</span>
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
        <div className="contact__right">
          <form className="contact__right__form">
            <div className="form">
              <label htmlFor="email">
                Your Name
                <input type="text" id="email" />
              </label>
            </div>
            <div className="form">
              <label htmlFor="email">
                Your Email
                <input type="text" id="email" />
              </label>
            </div>
            <div className="form">
              <label htmlFor="email">
                Your Message
                <textarea type="text" id="email" />
              </label>
            </div>
            <button type="submit" className="btn">
              hire me
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper2 = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
  .title {
    span {
      display: inline;
    }
  }
`;

const Wrapper = styled.main`
  .contact__left__info {
    display: flex;
    align-items: center;
    padding: 2rem;
    background-color: var(--deep-dark);
    border-radius: var(--radius);
    gap: 2rem;
    margin: 5rem 0;
    span {
      width: 70px;
      height: 70px;
      background-color: var(--gray-2);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    svg {
      display: inline-block;
      height: 40px;
    }
    p {
      font-size: 1.5rem;
    }
  }
  .btn {
    padding: 0.5em 1.5em;
  }
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 50%;
      background-color: var(--gray-1);
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default ContactForm;
