import styled from "styled-components";

export const OtherProjectItemStyled = styled.div`

position: relative;
transition: all 250ms ease-out;

&:hover {
    transform: translateY(-5px);
}
    
.other-project {
    display: grid;
    grid-template-areas:
        "a b"
        "c c"
        "d d"
        "e e";
    border-radius: 3px;
    padding: 2rem;
    background-color: rgba(15, 0, 15, 1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);
    position: relative;
    pointer-events: none;
    height: 100%;

    @media(max-width: 768px) {
        background-color: rgba(255, 255, 255, .04);
    }

    & > svg {
        font-size: 2rem;
        fill: var(--purple);
        grid-area: a;
    }

    & > a {
        text-decoration: none;
        pointer-events: all;
        grid-area: c;

        &:hover h3 {
            color: var(--purple) !important;
        }

        h3 {
            font-family: "Montserrat", sans-serif;
            letter-spacing: .5px;
            transition: all 250ms ease-out;
        }
    }

    & .links {
        display: flex;
        align-items: center;
        gap: 10px;
        grid-area: b;
        margin: 0 0 0 auto;

        & a {
            text-decoration: none;
            color: var(--white);
            margin-top: 1rem;
            font-size: 1.25rem;
            transition: 250ms ease-out;
            pointer-events: all;

            &:hover {
                color: var(--purple);
            }

            & svg {
                width: 1.25rem;
                fill: var(--gray);
                transition: 250ms ease-out;
            }

            &:hover svg {
                fill: var(--purple);
            }
        }
    }


    & h3 {
        grid-area: c;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 1rem;
        margin-top: 1rem;
        font-family: "Roboto Mono", monospace;
    }

    & p {
        grid-area: d;
        font-size: 0.875rem;
        line-height: 20px;
        margin-bottom: 1.5rem;
    }

    & .technologies {
        grid-area: e;
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 500;
        gap: 1rem;
        color: var(--gray);
    }
}



.background-link{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 3px;
}

`