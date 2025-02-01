import React from "react";
import styled from "styled-components";

const StyledChip = styled.div`
  padding: 10px 14px;
  background-color: var(--chip-bg);
  border: none;
  outline: none;
  color: var(--chip-txt);
  border-radius: 20px;
`;

const Chip = ({ text }) => {
  return <StyledChip className="style-chip">{text}</StyledChip>;
};

export default Chip;
