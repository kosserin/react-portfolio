import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

:root {
  --dark: #110619;
  --purple: #64417d;
  --gray: #c7b9d1;
  --white: #eaeaea;
  --black: #0c0411;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body,
html {
  overflow-x: hidden;
  animation: blockY 3s ease-in-out forwards;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  width: 100%;
  background-color: #110619;
}

h1 {
    font-size: 3rem;
    color: var(--white);

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
}

h2 {
    font-size: 1.5rem;
    color: var(--gray);

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    & span:first-of-type {
        color: var(--purple);
        font-family: "Roboto Mono", monospace;
    }

    & span:last-of-type {
        color: var(--gray);
    }

    & div {
    height: 1px;
    background-color: #64417d;
    transition: all 500ms ease;
    margin-left: 20px;

    @media(max-width: 768px) {
        display: none;
    }
  }
}

h3 {
    font-size: .875rem;
    font-weight: 500;
    color: var(--purple);
    font-family: "Roboto Mono", monospace;

    @media (max-width: 768px) {
        font-size: .875rem;
    }
}

p{
    font-size: 1rem;
    font-weight: 500;
    line-height: 25px;
    color: var(--gray);

    @media (max-width: 768px) {
        font-size: .875rem !important;
    }
}

.button {
  cursor: pointer;
  font-size: 0.875rem;
  color: rgb(199, 185, 209);
  border-radius: 3px;
  padding: 0.7rem 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  transition: all 250ms ease-out;
  border: none;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);
  text-decoration: none;
  font-weight: 500;
  font-size: .875rem;
  width: fit-content;
  display: flex;
  margin: 0 auto;

 &:hover {
  background: #c7b9d1;
  color: rgba(0, 0, 0, 1);
}
}

main {
  width: 100vw;
  padding: 0 15vw;
  margin: 0 auto;

    section {
        margin-top: 8rem;
        padding-top: 2rem;
    }

  
    @media (max-width: 980px) {
        padding: 2rem 10vw 0 10vw;
    }

    @media (max-width: 768px) {
        padding: 2rem 5vw 0 5vw;
    }
}

.fade-in {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 500ms ease-in;

    &.appear{
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transform: translateY(0px);
    }
}

.slide-in {
    flex-grow: 0;
    transition: all 1500ms ease-out;

    &.appear{
        flex-grow: 1;
    }
}

@keyframes blockY {
    from {
        overflow-y: hidden;
    } to {
        overflow-y: visible;
    }
}

`;
 
export default GlobalStyle;