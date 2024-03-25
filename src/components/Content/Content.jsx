import React, { useEffect, useRef } from "react";
import Intro from "../Intro/Intro";
import styled from "styled-components";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const StyledContent = styled.div`
  background-color: var(--purple-bg);
`;

const StyledGradient = styled.div`
  background: radial-gradient(
    800px at var(--x) var(--y),
    rgba(185, 136, 244, 0.1),
    transparent 80%
  );
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
  const heroRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;

      const { pageX, pageY } = ev;
      heroRef.current.style.setProperty("--x", `${pageX}px`);
      heroRef.current.style.setProperty("--y", `${pageY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <StyledContent>
      <StyledGradient ref={heroRef}>
        <StyledWrapper>
          <Intro />
          <StyledMain>
            <About />
            <Experience />
            <Projects />
            <Contact />
          </StyledMain>
        </StyledWrapper>
      </StyledGradient>
    </StyledContent>
  );
};

export default Content;
