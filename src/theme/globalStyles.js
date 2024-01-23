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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    background: var(--purple);
}

.style-h1 {
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
}

.style-h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
}

.style-h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}

.style-desc {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
}

.style-p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.style-button {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
}
`;
export default GlobalStyle;
