import styled from "styled-components";

export const AboutStyled = styled.section`

h2 {
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

& .about-container {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  & .about-text {
    width: 600px;
    max-width: 100%;

    & p a {
        text-decoration: none;
        color: var(--purple);
        font-weight: 600;
        border-bottom: 2px solid transparent;
        transition: 250ms ease-out;

        &:hover {
            border-bottom: 2px solid var(--purple);
        }
    }

    & ul {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 200px);
        margin-left: 1rem;
        color: var(--gray);
        font-weight: 500;
        grid-gap: 5px;

        
        @media (max-width: 768px) {
            font-size: 0.875rem;
            gap: 10px;
        }
    }
  }

  & .about-image {
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    position: relative;
    height: fit-content;

    & img {
        width: 300px;
        max-width: 300px;
        min-width: 300px;
        border-radius: 3px;
        position: relative;
    }

    & .border {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transform: translate(20px, 20px);
            border: 2px solid var(--purple);
            border-radius: 3px;
            transition: 250ms ease-out;
    }

    & .color-overlay {
        position: absolute;
        width: 100%;
        height: 99.2%;
        background-color: rgba(15, 0, 15, 0.4);
        top: 0;
        left: 0;
        border-radius: 3px;
        transition: 250ms ease-out;
    }

    &:hover .border {
        transform: translate(15px, 15px);
    }

    &:hover .color-overlay {
        background-color: transparent;
    }
  }
}

`