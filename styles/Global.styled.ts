import { createGlobalStyle } from 'styled-components';
import { IStyle } from '../ts-types/styleTypes';

const GlobalStyle = createGlobalStyle<IStyle>`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none; 
}
*::-webkit-scrollbar { width: 0 !important }

body {
    font-size: 16px;
    color: #033843;
    background: #f4f7f5;
}

h1,
  h2,
  h3
   {
    text-transform: capitalize;
    font-size: 2.5rem;

    @media (min-width: 576px) {
      font-size: 3.5rem;
    }
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
    @media (min-width: 992px) {
      font-size: 4rem;
    }
    @media (min-width: 1200px) {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
    }
  }

  h4 {
    font-size: 1.2rem;
    text-transform: capitalize;

    @media (min-width: 576px) {
      font-size: 1.3rem;
    }
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    @media (min-width: 992px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }

  @keyframes slide-in {
    from {
      transform: translate(-100%, -100%);

    }

    to {
      transform: translate(0%, 0%);

    }
  }

  @keyframes slide-out {
    from {
      transform: translate(0%, 0%);

    }

    to {
      transform: translate(-100%, -100%);

    }


  }
`;

export default GlobalStyle;
