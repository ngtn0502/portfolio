import React from 'react';
import styled from 'styled-components';
import contactMap from '../assets/images/contactMap.jpg';

function ContactMap() {
  return (
    <Wrapper className="container">
      <div className="contact__img">
        <div className="overlay" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19753.110024154794!2d106.65373004744045!3d10.77188949615151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sHo%20Chi%20Minh%20City%20University%20of%20Technology!5e0!3m2!1sen!2s!4v1625135758940!5m2!1sen!2s"
          width="600"
          height="450"
          title="This is a unique title"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <div className="map__form">
        <div className="form__content">
          <h2>Here is me</h2>
          <span>10 District, HCM City</span>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  position: relative;
  iframe {
    width: 100%;
    border-radius: var(--radius);
    border: 2px solid var(--gray-1);
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(7, 7, 7, 0.5);
    z-index: 100;
  }
  .map__form {
    position: absolute;
    padding: 2rem 3rem;
    border-radius: var(--radius);
    background-color: var(--deep-dark);
    top: 50%;
    right: 50%;
    transform: translateX(50%);
    z-index: 101;
    .form__content {
      h2 {
        font-size: 3rem;
        color: var(--white);
      }
      span {
        font-size: 2rem;
        color: var(--white);
        margin-bottom: 1rem;
      }
    }
  }
`;

export default ContactMap;
