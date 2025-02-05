import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { TECHNOLOGIES } from "../../constants/technologies";
import styled from "styled-components";
import neonLogo from "../../assets/neon-logo.svg";

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

  .relative {
    position: relative;
  }

  .neon-cursor {
    cursor: none;
  }

  .neon-logo {
    position: fixed;
    width: 36px;
    height: 36px;
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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <StyledSection id="about">
      <SectionTitle name={"About"} />
      <p className="style-body">
        Problem solver, code craftsman, and lifelong learner with a strong
        engineering mindset. I thrive on building high-performance, accessible,
        and user-centric applications, paying attention to detail while pushing
        boundaries to enhance user experiences.
      </p>

      <p className="style-body">
        Currently, I'm an Angular Developer at{" "}
        <span className="relative">
          <a
            href="https://www.neon-free.ch/en/"
            target="_blank"
            rel="noreferrer"
            className="style-body__link color-white relative neon-cursor"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
          >
            Neon
          </a>

          {isHovering && (
            <img
              src={neonLogo}
              alt="Neon logo"
              className="neon-logo"
              style={{
                top: cursorPos.y + 24,
                left: cursorPos.x,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </span>
        , a Swiss fintech startup, where I work on a hybrid application serving
        over 200,000 users. With a professional background in Angular and Ionic
        development I became proficient in crafting high-end scalable,
        performant and user-centric applications. I have experience working with
        Capacitor, Cordova, and other modern web technologies to bridge the gap
        between web and mobile. I also have experience with React and React
        Native and have worked on projects using these technologies. I worked on
        multiple projects for local businesses and freelance projects of
        converting designs into code at Upwork.
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
