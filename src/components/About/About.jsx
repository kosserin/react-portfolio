import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { TECHNOLOGIES } from "../../constants/technologies";
import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: var(--spacing-7);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

  @media screen and (min-width: 1080px) {
    padding-top: 120px;
  }

  p {
    color: var(--light);
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    img {
      height: 48px;
    }
  }
`;

const About = () => {
  return (
    <StyledSection id="aboutSection">
      <SectionTitle name={"About"} />
      <p className="style-body">
        Ever since childhood, my passion for computers ignited by gaming has
        been the driving force behind my journey into software development. It
        was during high school when I delved into a project using C++ Builder
        that my enduring fascination with user interface design was sparked.
      </p>

      <p className="style-body">
        Fast-forward to today, I've had the privilege of building{" "}
        <a
          href="https://sfdespot.com/"
          target="_blank"
          rel="noreferrer"
          className="style-body__link color-white"
        >
          a website for local business
        </a>{" "}
        and convert designs into code at Upwork. I'm motivated by the challenge
        of providing customers with exceptional user interfaces at{" "}
        <a
          href="https://www.neon-free.ch/en/"
          target="_blank"
          rel="noreferrer"
          className="style-body__link color-white"
        >
          Neon
        </a>{" "}
        crafting well-written and functional code that follows the best
        practices.
      </p>
      <p className="style-body mb-2">Technologies I’m strong with:</p>
      <Technologies>
        {TECHNOLOGIES.map((t, i) => (
          <div key={`technology-${i}`}>
            <img src={t.imageSource} alt="" />
            <p className="style-h4 color-white">{t.name}</p>
          </div>
        ))}
      </Technologies>
    </StyledSection>
  );
};

export default About;
