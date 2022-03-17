import styled from "styled-components";

export const OtherProjectsStyled = styled.section`

    & > h2 {
        text-align: center;
    }

    & > a {
        text-decoration: none;
        color: var(--purple);
        font-weight: 500;
        margin: 0 auto;
        width: fit-content;
        display: flex;
        font-size: 0.875rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-bottom: 2px solid transparent;
        transition: all 250ms ease-out;

        @media (max-width: 768px) {
            margin-top: 5px;
        }

        &:hover {
            border-bottom: 2px solid var(--purple);
        }
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }

    & > button {
        margin: 2rem auto;
    }

`