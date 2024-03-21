import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--white);
  display: flex;
  align-items: flex-end;

  svg {
    margin-left: 4px;
  }

  span,
  svg path {
    transition: all 250ms ease-in;
  }

  &:hover {
    span {
      color: var(--chip-txt);
    }

    svg path {
      stroke: var(--chip-txt);
      transform: translate(2px, -2px);
    }
  }
`;

const Link = ({ text, href }) => {
  return (
    <StyledLink href={href}>
      <span className="style-h3">{text}</span>
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
    </StyledLink>
  );
};

export default Link;
