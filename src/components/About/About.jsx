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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
    color: var(--light);
  }

  .wrapper p {
    margin-bottom: 16px;
  }

  .technologies-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
    }
  }
`;

const About = () => {
  return (
    <StyledContainer>
      <p className="style-p">
        Hello! My name is Andrija and I enjoy creating websites that live on the
        internet. My journey with web development started two years ago when I
        was looking for profession I would love to do.
      </p>
      <p className="style-p">
        Fast-forward to today, I'm in my final year of college, doing freelance
        for local entrepreneurs and started a career on Upwork. My main focus
        these days is learning as much as I can, constantly improving my code
        and making websites with great performances that are enjoyable for users
        to go through. Shortened version about me you can find.
      </p>
      <div className="wrapper">
        <p className="style-p">Technologies I’m strong with:</p>
        <div className="technologies-wrapper">
          <div>
            <img src={angular} alt="" />
            <p className="style-desc">Angular</p>
          </div>
          <div>
            <img src={react} alt="" />
            <p className="style-desc">React</p>
          </div>
          <div>
            <img src={typescript} alt="" />
            <p className="style-desc">Typescript</p>
          </div>
          <div>
            <img src={ionic} alt="" />
            <p className="style-desc">Ionic</p>
          </div>
          <div>
            <img src={figma} alt="" />
            <p className="style-desc">Figma</p>
          </div>
          <div>
            <img src={capacitor} alt="" />
            <p className="style-desc">Capacitor</p>
          </div>
          <div>
            <img src={cordova} alt="" />
            <p className="style-desc">Cordova</p>
          </div>
          <div>
            <img src={jasmine} alt="" />
            <p className="style-desc">Jasmine</p>
          </div>
          <div>
            <img src={rxjs} alt="" />
            <p className="style-desc">RxJS</p>
          </div>
          <div>
            <img src={html} alt="" />
            <p className="style-desc">HTML5</p>
          </div>
          <div>
            <img src={css} alt="" />
            <p className="style-desc">CSS3</p>
          </div>
          <div>
            <img src={javascript} alt="" />
            <p className="style-desc">JavaScript</p>
          </div>
          <div>
            <img src={scss} alt="" />
            <p className="style-desc">SCSS</p>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default About;
