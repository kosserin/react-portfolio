import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { TECHNOLOGIES } from "../../constants/technologies";
import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: var(--spacing-7);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  @media screen and (min-width: 1080px) {
    padding-top: 120px;
  }

  p {
    color: var(--light);
    line-height: 1.8;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-1);

    img {
      height: 48px;
    }
  }
`;

const About = () => {
  return (
    <StyledSection id="about">
      <SectionTitle name={"About"} />
      <p className="style-body">
        Problem solver, code craftsman, and lifelong learner with a unique
        engineering background. With meticulous attention to details, I thrive
        on pushing boundaries to create experiences that are not only visually
        appealing but highly performant and accessible.
      </p>

      <p className="style-body">
        Currently, I'm an Angular Developer at{" "}
        <a
          href="https://www.neon-free.ch/en/"
          target="_blank"
          rel="noreferrer"
          className="style-body__link color-white"
        >
          Neon
        </a>
        , a Swiss fintech startup, where I work on a hybrid application serving
        over 200,000 users. With a professional background in Angular and Ionic
        development I became proficient in crafting high-end scalable,
        performant and user-centric applications. I have experience working with
        Capacitor, Cordova, and other modern web technologies to bridge the gap
        between web and mobile. I'm also proficient in React and React Native
        and have worked on many projects using these technologies. I worked on
        multiple projects for local businesses and conversions of designs into
        code at Upwork.
      </p>

      <p className="style-body">
        In my free time, you'll often find me at the gym, playing futsal,
        spending time with my fiancée, or exploring something new to learn.
      </p>

      <p className="style-body mb-2">Technologies I'm strong with:</p>
      <Technologies>
        {TECHNOLOGIES.map((t, i) => (
          <div key={`technology-${i}`}>
            <img src={t.imageSource} alt="" />
            <p className="style-small color-white">{t.name}</p>
          </div>
        ))}
      </Technologies>
    </StyledSection>
  );
};

export default About;
