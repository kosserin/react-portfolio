import React from "react";
import styled from "styled-components";
import Technologies from "../Technologies/Technologies";
import HoverWrapper from "../HoverWrapper/HoverWrapper";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4);

  @media screen and (min-width: 680px) {
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

  @media screen and (min-width: 680px) {
    order: 2;
  }
`;

const StyledProjectImage = styled.img`
  order: 2;
  width: 220px;
  object-fit: contain;

  @media screen and (min-width: 680px) {
    width: 160px;
    order: 1;
  }
`;

const ProjectItem = ({ project }) => {
  return (
    <HoverWrapper href={project.linkUrl}>
      <StyledContainer>
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
    </HoverWrapper>
  );
};

export default ProjectItem;
