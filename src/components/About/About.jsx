import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { TECHNOLOGIES } from "../../constants/technologies";
import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: var(--spacing-7);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

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
        Since childhood, my fascination with computers, sparked by gaming, led
        me to explore software development. In high school, a computer
        technician module ignited my passion for programming and creating
        user-centric tools. My first UI project using C# Builder kick-started my
        enduring interest in UI/UX design.
      </p>
      <p className="style-body">
        In my final year of college, I transitioned from theory to practice,
        taking on projects on{" "}
        <a href="#a" className="style-body__link color-white">
          Upwork
        </a>{" "}
        that required converting design files into responsive, functional code
        within tight deadlines. Additionally, I independently designed,
        developed, and deployed a{" "}
        <a href="#a" className="style-body__link color-white">
          website for a local business
        </a>
        , further solidifying my real-world experience.
      </p>
      <p className="style-body">
        Now, as a professional at{" "}
        <a href="#a" className="style-body__link color-white">
          Holycode
        </a>
        , I am driven by the challenge of crafting well-written and functional
        code. By marrying my engineering background with web development, I
        strive to build applications that are not only technically sound but
        also user-friendly and engaging.
      </p>
      <p className="style-body">
        When I step away from the computer, I usually go to the gym, read or
        spend time with my fiancé, family, and friends.
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
