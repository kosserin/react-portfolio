import React from "react";
import Intro from "../Intro/Intro";
import styled from "styled-components";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const StyledContent = styled.div`
  background: var(--purple-bg);
`;
  
const StyledWrapper = styled.div`
  padding-inline: 5vw;
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-7);
  
  @media screen and (min-width: 1080px) {
    padding-top: 0;
    max-width: 1280px;
    gap: var(--spacing-10);
    margin-inline: auto;
    flex-direction: row;
  }
`;
  
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: var(--spacing-7);
  
  @media screen and (min-width: 1080px) {
    padding-bottom: 120px;
    width: 50%;
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
          <Projects />
          <Contact />
        </StyledMain>
      </StyledWrapper>
    </StyledContent>
  );
};

export default Content;
