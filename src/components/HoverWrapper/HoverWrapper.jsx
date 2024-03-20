import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.a`
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
`;

const HoverWrapper = ({ href, children }) => (
  <StyledWrapper href={href}>{children}</StyledWrapper>
);

export default HoverWrapper;
