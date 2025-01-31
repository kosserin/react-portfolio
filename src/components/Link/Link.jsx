import React from "react";
import styled from "styled-components";
import LinkIcon from "../LinkIcon/LinkIcon";

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--white);
  display: flex;
  align-items: flex-end;

  .link-icon {
    margin-left: 4px;
  }

  span {
    transition: all 250ms ease-in;
  }

  &:hover {
    span {
      color: var(--chip-txt);
    }

    svg {
      transform: translate(4px, -4px);
    }

    svg path {
      stroke: var(--chip-txt);
    }
  }
`;

const Link = ({ text, href }) => {
  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      <span className="style-h3">{text}</span>
      <LinkIcon />
    </StyledLink>
  );
};

export default Link;
