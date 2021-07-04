import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /*
=============== 
Variables
===============
*/
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.5rem;
    --spacing: 0.25rem;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);  
    scroll-behavior: smooth;  
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }

span{
  font-size: 2rem;
      display: inline-block;
      width: 100%;
}

h1,h3,h4,h5{
  margin: 1rem 0;
  font-weight: bold;
}

p{
  font-size: 1.5rem;
  padding: 0.25rem;
  line-height: 2.5rem;
}

.title{
  text-align: center;
  span{
    font-size: 1.5rem;
      display: inline-block;
      width: 100%;  

  }
  h2{
    font-weight: bold;    
    font-family: "Montserrat Bold";
    font-size: 5rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
}

.form{
  width: 100%;
  margin: 3rem 0;
  label{
    font-size: 2rem;
  }
  textarea,
  input{
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;

  }
  textarea{
    height: 20rem;
  }
}


  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .page{
    min-height: calc(100vh - 10rem);
  }
  .btn {
    font-size: 2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border: 2px solid transparent;
    border-radius: var(--radius);
    display: inline-block;
    color: black;
    transition: var(--transition);
    cursor: pointer;

  }
  .btn:hover {
    color: var(--gray-1);
    background: var(--deep-dark);
  }
  .btn2{
    font-size: 2rem;
    background: transparent;
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: var(--radius);
    display: inline-block;
    color: var(--gray-1);
    transition: var(--transition);
  }

  hr{
    border: none;
    border-bottom: 2px solid var(--gray-1);
    width: 100%;
  }
 
 .category{
    /* text-transform: uppercase; */
    font-family: "Montserrat Bold";
    text-align: center;
    margin-top: 2rem;
    font-size: 2.5rem;
    position: relative;
  }
  

/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    /* background-color: var(--gray-1); */
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
