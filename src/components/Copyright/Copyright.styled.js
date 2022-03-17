import styled from "styled-components";

export const CopyrightStyled = styled.footer`

margin-top: 10rem;
display: flex;
justify-content: center;
padding-bottom: 1.5rem;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
    padding-bottom: 7rem;
}

    & .links {

        display: none;
        
        @media(max-width: 768px) {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        }

        & a {
            color: var(--white);
            font-size: 1.5rem;
            transition: all 250ms ease-in;

            &:hover {
                color: var(--purple);
            }
        }
    }

    & > a {
        text-decoration: none;
        color: var(--gray);
        font-size: 0.875rem;
        transition: all 250ms ease-out;
        font-weight: 500;

        &:hover {
            color: var(--purple);
        }
    }

    & p {
        font-size: .875rem;
    }

`