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

  .text-icon {
    display: flex;
    align-items: center;
    gap: 4px;

    svg path {
      transition: 250ms ease-in;
    }
  }

  &:hover {
    color: var(--white);

    .text-icon svg path {
      transform: translate(10%, -10%);
    }
  }

  &:hover .line path {
    stroke: var(--light);
  }

  .line {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

const Button = ({ text, clickCallback, hasLineBellow, hasLinkIcon }) => {
  return (
    <StyledButton className="style-h3" onClick={clickCallback}>
      <div className="text-icon">
        {text}
        {hasLinkIcon && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66699 4.6665H11.3337M11.3337 4.6665V11.3332M11.3337 4.6665L4.66699 11.3332"
              stroke="var(--light)"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      {hasLineBellow && (
        <svg
          className="line"
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
