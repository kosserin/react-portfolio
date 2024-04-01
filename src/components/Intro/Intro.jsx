import React, { useEffect, useState } from "react";
import Link from "../Link/Link";
import styled from "styled-components";
import MediaQuery from "../MediaQuery/MediaQuery";

const StyledIntro = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  @media screen and (min-width: 1080px) {
    position: sticky;
    top: 120px;
    left: 0px;
    height: calc(100vh - 240px);
    max-width: 400px;
    justify-content: space-between;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  list-style: none;
`;

const StyledItemLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: fit-content;

  .line {
    height: 1px;
    width: 40px;
    background-color: var(--light);
    transition: 250ms ease-in-out;
  }

  &.active {
    .line {
      width: 80px;
      background-color: var(--white);
    }

    span {
      color: var(--white);
    }
  }

  &:hover {
    .line {
      width: 80px;
      background-color: var(--white);
    }

    span {
      color: var(--white);
    }
  }
`;

const StyledSocials = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  a:hover svg path {
    transition: fill 250ms ease-in-out;
    fill: var(--white);
  }
`;

const Intro = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    setTimeout(() => {
      const navLinks = document.querySelectorAll("header div nav ul li a");
      setLinks(navLinks);
    });

    const handleScroll = () => {
      sections.forEach((s, sIndex) => {
        let top = window.scrollY;
        let offset = s.offsetTop;
        let height = s.offsetHeight;

        const sectionId = s.getAttribute("id");
        if (
          sectionId === "contactSection" &&
          top + window.innerHeight >= s.offsetTop
        ) {
          links.forEach((l) => {
            l.classList.remove("active");
            links[sIndex].classList.add("active");
          });
        } else if (top >= offset && top < offset + height) {
          links.forEach((l) => {
            l.classList.remove("active");
            links[sIndex].classList.add("active");
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  return (
    <StyledIntro>
      <div>
        <StyledLink href="#" className="style-h1 color-white mb-2">
          Andrija Kostic
        </StyledLink>
        <h2 className="style-h2 color-white mb-4">Frontend Developer</h2>
        <p className="style-body color-light mb-5">
          Specialized in crafting stunning web and hybrid applications using
          Angular and React.
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
        <a href="https://github.com/kosserin" target="_blank" rel="noreferrer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z"
              fill="var(--light)"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/kosserin/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z"
              fill="var(--light)"
            />
          </svg>
        </a>
      </StyledSocials>
    </StyledIntro>
  );
};

export default Intro;
