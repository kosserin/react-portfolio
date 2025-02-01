import React from "react";
import styled from "styled-components";
import Technologies from "../Technologies/Technologies";
import HoverWrapper from "../HoverWrapper/HoverWrapper";
import LinkIcon from "../LinkIcon/LinkIcon";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  margin-bottom: var(--spacing-0.5);
  transform: translateY(-3px);

  h3 {
    transition: all 250ms ease-in;
  }

  .link-icon {
    transform: translateY(2px);
    margin-left: 2px;
  }
`;

const StyledTime = styled.h6`
  @media screen and (min-width: 680px) {
    min-width: 170px;
  }
`;

const ExperienceItem = ({
  highlightedIndex,
  handleMouseEnter,
  handleMouseLeave,
  experience,
  index,
}) => {
  return (
    <HoverWrapper
      href={experience.linkUrl}
      index={index}
      highlightedIndex={highlightedIndex}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    >
      <StyledContainer>
        <StyledTime className="style-h5 color-light">
          {experience.from} — {experience.to}
        </StyledTime>
        <div>
          <StyledHeading>
            <h3 className="style-h3 color-white text-change-on-hover">
              {experience.role}
            </h3>
            <LinkIcon />
          </StyledHeading>
          <h3 className="style-h4 color-light mb-3">{experience.companyName}</h3>
          <p className="style-small color-light mb-3">
            {experience.description}
          </p>
          <Technologies technologies={experience.technologies} />
        </div>
      </StyledContainer>
    </HoverWrapper>
  );
};

export default ExperienceItem;
