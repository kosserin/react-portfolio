import React from "react";
import styled from "styled-components";
import Technologies from "../Technologies/Technologies";
import HoverWrapper from "../HoverWrapper/HoverWrapper";
import LinkIcon from "../LinkIcon/LinkIcon";

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
  display: flex;
  margin-bottom: var(--spacing-1);
  transform: translateY(-3px);

  h3 {
    transition: all 250ms ease-in;
  }

  .link-icon {
    transform: translateY(2px);
    margin-left: 2px;
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
    width: 170px;
    order: 1;
  }
`;

const ProjectItem = ({
  project,
  highlightedIndex,
  handleMouseEnter,
  handleMouseLeave,
  index,
}) => {
  return (
    <HoverWrapper
      href={project.linkUrl}
      index={index}
      highlightedIndex={highlightedIndex}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    >
      <StyledContainer>
        <StyledProjectDetails>
          <StyledHeading>
            <h3 className="style-h3 color-white text-change-on-hover">
              {project.title}
            </h3>
            <LinkIcon />
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
