import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--pink);
  border: none;
  color: var(--white);
  padding: 6px 12px;
  border-radius: 20px;
`;

const TechnologyButton = ({ name }) => {
  return <StyledButton className="style-button">{name}</StyledButton>;
};

export default TechnologyButton;
