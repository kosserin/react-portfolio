import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --purple: #150B21;
  --light: #D9D8DA;
  --pink: #64417D;
  --white: #FFFFFF;
  --black: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
    background: var(--purple);
}

.style-h1 {
    font-size: 48px;
    font-weight: 600;
}

.style-h2 {
    font-size: 20px;
    font-weight: 500;
}

.style-h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
}

.style-h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
}

.style-h5 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
}

.style-h6 {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.2px;
}

.style-body {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}


.style-body-link {
    font-size: 16px;
    font-weight: 600;
}

.style-small {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
}

.style-button {
    font-size: 18px;
    font-weight: 400;
}

.style-chip {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
}

.style-nav__link {
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 1px;
}
`;
export default GlobalStyle;
