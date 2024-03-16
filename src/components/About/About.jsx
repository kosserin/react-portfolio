import React from "react";
import angular from "../../assets/angular.svg";
import react from "../../assets/react.svg";
import typescript from "../../assets/typescript.svg";
import ionic from "../../assets/ionic.svg";
import figma from "../../assets/figma.svg";
import capacitor from "../../assets/capacitor.svg";
import cordova from "../../assets/cordova.svg";
import jasmine from "../../assets/jasmine.svg";
import rxjs from "../../assets/rxjs.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import scss from "../../assets/scss.svg";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";

const TECHNOLOGIES = [
  {
    name: 'Angular',
    imageSource: angular
  },
  {
    name: 'React',
    imageSource: react
  },
  {
    name: 'Typescript',
    imageSource: typescript
  },
  {
    name: 'Ionic',
    imageSource: ionic
  },
  {
    name: 'Figma',
    imageSource: figma
  },
  {
    name: 'Capacitor',
    imageSource: capacitor
  },
  {
    name: 'Cordova',
    imageSource: cordova
  },
  {
    name: 'Jasmine',
    imageSource: jasmine
  },
  {
    name: 'RxJS',
    imageSource: rxjs
  },
  {
    name: 'HTML',
    imageSource: html
  },
  {
    name: 'CSS',
    imageSource: css
  },
  {
    name: 'JavaScript',
    imageSource: javascript
  },
  {
    name: 'SCSS',
    imageSource: scss
  },
]

const StyledContainer = styled.div`
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
    <StyledContainer id="aboutSection">
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
        <a href="#a" className="style-body__link color-white">Upwork</a> that
        required converting design files into responsive, functional code within
        tight deadlines. Additionally, I independently designed, developed, and
        deployed a{" "}
        <a href="#a" className="style-body__link color-white">
          website for a local business
        </a>
        , further solidifying my real-world experience.
      </p>
      <p className="style-body">
        Now, as a professional at{" "}
        <a href="#a" className="style-body__link color-white">Holycode</a>, I am
        driven by the challenge of crafting well-written and functional code. By
        marrying my engineering background with web development, I strive to
        build applications that are not only technically sound but also
        user-friendly and engaging.
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
            <p className="style-h5 color-white">{t.name}</p>
          </div>
        ))}
      </Technologies>
    </StyledContainer>
  );
};

export default About;
