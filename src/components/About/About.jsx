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
  gap: var(--spacing-3);

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
    <StyledSection id="aboutSection">
      <SectionTitle name={"About"} />
      <p className="style-body">
        I'm a passionate developer with experience in building scalable,
        user-friendly applications that follows best patterns and practices. I
        always thrive for more and keep pushing my limits to create experiences
        that are not only visually appealing but also highly performant and
        accessible.
      </p>

      <p className="style-body">
        I'm currently a Medior Angular Developer at{" "}
        <a
          href="https://www.neon-free.ch/en/"
          target="_blank"
          rel="noreferrer"
          className="style-body__link color-white"
        >
          Neon
        </a>
        , a Swiss fintech startup, where I develop a mobile application serving
        over 200,000 users. What began as an interest in gaming evolved into a
        passion for computers, user interactivity, and graphics. Originally
        trained as a Mechanical Engineer, I transitioned into software
        engineering to merge my love for technology and design.
      </p>

      <p className="style-body">
        With a professional background in Angular and Ionic development, I
        specialize in crafting responsive and performant applications. I have
        experience working with Capacitor, Cordova, and other modern web
        technologies to bridge the gap between web and mobile. I'm also
        proficient in React and React Native and have worked on many projects
        using these technologies. I worked on multiple projects for local
        businesses and conversions of designs into code at Upwork.
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
            <p className="style-body color-white">{t.name}</p>
          </div>
        ))}
      </Technologies>
    </StyledSection>
  );
};

export default About;
