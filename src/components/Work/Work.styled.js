import styled from "styled-components";

export const WorkStyled = styled.section`

h2 {
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  list-style: none;
  
@media (max-width: 980px) {
    gap: 3rem;
}
}

`