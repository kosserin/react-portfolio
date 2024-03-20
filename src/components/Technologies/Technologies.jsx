import React from "react";
import Chip from "../Chip/Chip";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Technologies = ({ technologies }) => (
  <StyledContainer>
    {technologies.map((t, tIndex) => (
      <Chip text={t} key={`technology-${tIndex}`} />
    ))}
  </StyledContainer>
);

export default Technologies;
