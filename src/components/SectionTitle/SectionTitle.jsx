import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
  color: var(--white);
  padding: var(--spacing-3) 5vw;
  position: sticky;
  top: 0;
  left: 0;
  margin-inline: -5vw;
  z-index: 2;
  backdrop-filter: blur(8px);
  background-color: rgba(23, 13, 39, 0.9);

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

const SectionTitle = ({ name }) => {
  return <StyledTitle className="style-nav__link">{name}</StyledTitle>;
};

export default SectionTitle;
