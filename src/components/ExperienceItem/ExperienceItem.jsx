import React from "react";
import styled from "styled-components";
import Technologies from "../Technologies/Technologies";
import HoverWrapper from "../HoverWrapper/HoverWrapper";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

  @media screen and (min-width: 1080px) {
    flex-direction: row;
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

const StyledTime = styled.h6`
  @media screen and (min-width: 1080px) {
    min-width: 160px;
  }
`;

const ExperienceItem = ({ experience }) => {
  return (
    <HoverWrapper href={experience.linkUrl}>
      <StyledContainer>
        <StyledTime className="style-h6 color-light">
          {experience.from} — {experience.to}
        </StyledTime>
        <div>
          <StyledHeading>
            <span className="style-h3 color-white">
              {experience.companyName}
            </span>
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
          <h3 className="style-h4 color-light mb-3">{experience.role}</h3>
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
