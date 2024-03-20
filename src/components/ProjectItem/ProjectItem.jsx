import React from "react";
import styled from "styled-components";
import Technologies from "../Technologies/Technologies";

const StyledContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4);
  text-decoration: none;
  position: relative;
  z-index: 1;

  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: -16px;
    left: -16px;
    right: -16px;
    bottom: -16px;
    border-radius: 8px;
  }

  &:hover {
    &::before {
      transition: all 250ms ease-in;
      background-color: rgba(255, 255, 255, 0.03);
    }

    div div {
      span {
        color: var(--chip-txt);
      }

      svg path {
        transform: translate(2px, -2px);
        stroke: var(--chip-txt);
      }
    }
  }

  @media screen and (min-width: 1080px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const StyledHeading = styled.div`
  display: inline-block;
  margin-bottom: var(--spacing-1);

  span,
  svg path {
    transition: all 250ms ease-in;
  }

  span {
    line-height: 1.3;
  }

  svg {
    margin-left: 4px;
  }
`;

const StyledProjectDetails = styled.div`
  order: 1;

  @media screen and (min-width: 1080px) {
    order: 2;
  }
`;

const StyledProjectImage = styled.img`
  order: 2;
  width: 220px;
  object-fit: contain;

  @media screen and (min-width: 1080px) {
    width: 160px;
    order: 1;
  }
`;

const ProjectItem = ({ project }) => {
  return (
    <StyledContainer href={project.linkUrl}>
      <StyledProjectDetails>
        <StyledHeading>
          <span className="style-h3 color-white">{project.title}</span>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66699 5.47925H11.3337M11.3337 5.47925V12.1459M11.3337 5.47925L4.66699 12.1459"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledHeading>
        <p className="style-small color-light mb-3">{project.description}</p>
        <Technologies technologies={project.technologies} />
      </StyledProjectDetails>
      <StyledProjectImage src={project.imageSource} alt="" />
    </StyledContainer>
  );
};

export default ProjectItem;
