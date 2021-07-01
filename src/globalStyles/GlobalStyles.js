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
    border-radius: 8px;
    display: inline-block;
    color: black;
    transition: var(--transition);

}
.btn:hover {
  color: var(--gray-1);
  background: var(--deep-dark);
}

/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
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
