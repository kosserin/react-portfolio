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
  display: none;

  @media screen and (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    list-style: none;

    li a {
      padding-top: var(--spacing-2);
      padding-bottom: var(--spacing-2);
    }
  }
`;

const StyledItemLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: fit-content;

  .line {
    height: 1px;
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
  gap: var(--spacing-3);
  align-items: center;
`;

const Intro = () => {
  useEffect(() => {
    let observer;

    const clearObserver = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => observer.unobserve(section));
      observer = undefined;
    };

    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        if (!observer) {
          initializeObserver();
        }
      } else {
        if (observer) {
          clearObserver();
        }
      }
    };

    const initializeObserver = () => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
      };

      let visibleSections = new Map();

      const intersectionCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          const mostVisible = [...visibleSections.values()].reduce(
            (max, current) =>
              current.intersectionRatio > max.intersectionRatio ? current : max
          );

          setActiveLink(mostVisible.target.id);
        }
      };

      observer = new IntersectionObserver(intersectionCallback, options);
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => observer.observe(section));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      clearObserver();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setActiveLink = (sectionId) => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      const href = link.getAttribute("href").substring(1);
      link.classList.toggle("active", href === sectionId);
    });
  };

  return (
    <StyledIntro>
      <div>
        <StyledLink href="#" className="style-h1 color-white mb-2">
          Andrija Kostic
        </StyledLink>
        <h2 className="style-h2 color-white mb-4">Front End Engineer</h2>
        <p className="style-body color-light mb-5">
          I build high-performance, accessible, and maintainable web and hybrid
          apps with a seamless user experience.
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
                <StyledItemLink href="#about">
                  <div className="line"></div>
                  <span className="style-nav__link color-light">About</span>
                </StyledItemLink>
              </li>
              <li>
                <StyledItemLink href="#experience">
                  <div className="line"></div>
                  <span className="style-nav__link color-light">
                    Experience
                  </span>
                </StyledItemLink>
              </li>
              <li>
                <StyledItemLink href="#projects">
                  <div className="line"></div>
                  <span className="style-nav__link color-light">Projects</span>
                </StyledItemLink>
              </li>
              <li>
                <StyledItemLink href="#contact">
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
