import React, { useEffect } from "react";
import Link from "../Link/Link";
import styled from "styled-components";
import MediaQuery from "../MediaQuery/MediaQuery";
import GithubLogo from "./GithubLogo";
import LinkedinLogo from "./LinkedinLogo";

const StyledIntro = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  @media screen and (min-width: 1080px) {
    position: sticky;
    top: 120px;
    left: 0px;
    height: calc(100vh - 240px);
    width: 48%;
    justify-content: space-between;
  }

  .style-body {
    max-width: 400px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  li a {
    padding-top: var(--spacing-2);
    padding-bottom: var(--spacing-2);
  }
`;

const StyledItemLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: fit-content;

  .line {
    height: 2px;
    width: 50px;
    background-color: var(--light);
    transition: 250ms ease-in-out;
  }

  &.active {
    .line {
      width: 100px;
      background-color: var(--white);
    }

    span {
      color: var(--white);
    }
  }

  &:hover {
    .line {
      width: 100px;
      background-color: var(--white);
    }

    span {
      color: var(--white);
    }
  }
`;

const StyledSocials = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Intro = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setTimeout(() => {
      const navLinks = document.querySelectorAll("header div nav ul li a");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Array.from(sections).indexOf(entry.target);
              navLinks.forEach((link, i) => {
                if (i === index) {
                  link.classList.add("active");
                } else {
                  link.classList.remove("active");
                }
              });
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, 0);
  }, []);

  return (
    <StyledIntro>
      <div>
        <StyledLink href="#" className="style-h1 color-white mb-2">
          Andrija Kostic
        </StyledLink>
        <h2 className="style-h2 color-white mb-4">Front End Engineer</h2>
        <p className="style-body color-light mb-5">
          I build web and hybrid apps that feel smooth, intuitive, and easy to
          use.
        </p>
        <MediaQuery query="(max-device-width: 1080px)">
          <Link
            text={"kostic.andrija00@gmail.com"}
            href="mailto:kostic.andrija00@gmail.com"
          />
        </MediaQuery>

        <MediaQuery query="(min-device-width: 1080px)">
          <nav>
            <StyledList>
              <li>
                <StyledItemLink href="#aboutSection" className="active">
                  <div className="line"></div>
                  <span className="style-nav__link color-light">About</span>
                </StyledItemLink>
              </li>
              <li>
                <StyledItemLink href="#experienceSection">
                  <div className="line"></div>
                  <span className="style-nav__link color-light">
                    Experience
                  </span>
                </StyledItemLink>
              </li>
              <li>
                <StyledItemLink href="#projectsSection">
                  <div className="line"></div>
                  <span className="style-nav__link color-light">Projects</span>
                </StyledItemLink>
              </li>
              <li>
                <StyledItemLink href="#contactSection">
                  <div className="line"></div>
                  <span className="style-nav__link color-light">Contact</span>
                </StyledItemLink>
              </li>
            </StyledList>
          </nav>
        </MediaQuery>
      </div>
      <StyledSocials>
        <GithubLogo />
        <LinkedinLogo />
      </StyledSocials>
    </StyledIntro>
  );
};

export default Intro;
