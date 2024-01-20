import React from "react";
import GlobalStyle from "./theme/globalStyles";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Content />
    </React.Fragment>
  );
};

export default App;
