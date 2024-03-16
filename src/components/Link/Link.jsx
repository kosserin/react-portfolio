import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--white);
  display: flex;
  flex-direction: column;
  border-bottom: 1.5px solid var(--light);
  width: fit-content;
  padding-bottom: 4px;
`;

const Link = ({ text, href }) => {
  return (
    <StyledLink href={href} className="style-h3">
      {text}
    </StyledLink>
  );
};

export default Link;
