import React from "react";
import Intro from "../Intro/Intro";
import styled from "styled-components";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

const StyledContent = styled.div`
  background: var(--purple-bg);
`;
  
const StyledWrapper = styled.div`
  padding-top: var(--spacing-7);
  padding-inline: 5vw;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);

  @media screen and (min-width: 1080px) {
    padding-top: 120px;
    max-width: 1280px;
    margin-inline: auto;
    flex-direction: row;
  }
`;
  
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
  padding-bottom: var(--spacing-7);
  
  @media screen and (min-width: 1080px) {
    padding-bottom: 120px;
    max-width: 600px;
  }
`;

const Content = () => {
  return (
    <StyledContent>
      <StyledWrapper>
        <Intro />
        <StyledMain>
          <About />
          <Experience />
          <Contact />
        </StyledMain>
      </StyledWrapper>
    </StyledContent>
  );
};

export default Content;
