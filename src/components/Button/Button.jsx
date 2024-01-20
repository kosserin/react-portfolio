import React from "react";
import styled from "styled-components";
import link from "../../assets/arrow-top-right.svg";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--light);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 4px;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  svg {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  &:hover svg path {
    stroke: var(--light);
  }
`;

const Button = ({ text, clickCallback, hasLineBellow, hasLinkIcon }) => {
  return (
    <StyledButton className="style-h2" onClick={clickCallback}>
      {text}
      {hasLinkIcon && <img src={link} alt="" />}
      {hasLineBellow && (
        <svg
          width="110"
          height="4"
          viewBox="0 0 110 4"
          fill="none"
          xmlns="http://www.w3.org/2000/StyledLine"
        >
          <path
            d="M109 2.99895C65.1772 -0.169015 6.59441 0.888024 1 3"
            stroke="var(--light)"
          />
        </svg>
      )}
    </StyledButton>
  );
};

export default Button;
