import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --white: #DBDBDB;
  --light: #9081a0;
  --purple-bg: #150B21;
  --chip-bg: #3d2b53;
  --chip-txt: #B988F4;

  // spacings
  --base: 8px;
  --spacing-0.5: calc(var(--base) * 0.5);
  --spacing-1: var(--base);
  --spacing-2: calc(var(--base) * 1.5);
  --spacing-3: calc(var(--base) * 2);
  --spacing-4: calc(var(--base) * 3);
  --spacing-5: calc(var(--base) * 5);
  --spacing-6: calc(var(--base) * 6);
  --spacing-7: calc(var(--base) * 7);
  --spacing-8: calc(var(--base) * 8);
  --spacing-9: calc(var(--base) * 9);
  --spacing-10: calc(var(--base) * 10);
  --spacing-11: calc(var(--base) * 11);
  --spacing-12: calc(var(--base) * 12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--purple-bg);
}

// TYPOGRAPHY

  .style-h1 {
    font-size: 2.375rem;
    font-weight: 600;

    @media screen and (min-width: 1080px) {
      font-size: 3rem;
    }
  }

  .style-h2 {
    font-size: 1.125rem;
    font-weight: 500;

    @media screen and (min-width: 1080px) {
      font-size: 1.5rem;
    }
  }

.style-h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
}

.style-h4 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
}

.style-h5 {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.2px;
    text-transform: uppercase;
}
    
.style-body {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
}


.style-body__link {
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        transition: 250ms ease-in;
        color: var(--chip-txt);
    }
}

.style-small {
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.6;
}

.style-button {
    font-size: 1.25rem;
    font-weight: 400;
}

.style-chip {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
}

.style-nav__link {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 1.4px;
    text-transform: uppercase;
}

.style-h1,
.style-h2,
.style-h3,
.style-h4,
.style-h5,
.style-h6,
.style-body,
.style-body__link,
.style-small,
.style-button,
.style-chip,
.style-nav__link {
    &::selection {
    color: var(--chip-bg);
    background: var(--light);
    }
}

// COLORS

.color-light {
    color: var(--light);
}

.color-white {
    color: var(--white);
}

.color-chip-txt {
    color: var(--chip-txt);
}

.bg-chip {
    background: var(--chip-bg);
}

// SPACINGS 

.mb-1 {
    margin-bottom: var(--spacing-1);
}

.mb-2 {
    margin-bottom: var(--spacing-2);
}

.mb-3 {
    margin-bottom: var(--spacing-3);
}

.mb-4 {
    margin-bottom: var(--spacing-4);
}

.mb-5 {
    margin-bottom: var(--spacing-5);
}

.mb-6 {
    margin-bottom: var(--spacing-6);
}

.mb-7 {
    margin-bottom: var(--spacing-7);
}

.mb-8 {
    margin-bottom: var(--spacing-8);
}

.mb-9 {
    margin-bottom: var(--spacing-9);
}

.mb-10 {
    margin-bottom: var(--spacing-10);
}
`;
export default GlobalStyle;
