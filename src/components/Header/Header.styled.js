import styled from "styled-components";

export const HeaderStyled = styled.header`

position: relative;
width: 100%;
height: 100vh;
display: flex;
justify-content: flex-end;
align-items: center;
background: var(--dark);
animation: reduceHeaderSize 1s ease-out forwards;
animation-delay: 1.25s;
padding: 0 2.5vw;

& > a svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: moveLogoLeft 1s ease-out forwards;
    animation-delay: 1.25s;

    @media (max-width: 768px) {
        margin-left: 5vw
    }

    & .path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 2s ease-in forwards;
    }
}

& nav {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-20px);
    animation: showNav 0.25s ease-out forwards;
    animation-delay: 2.5s;

    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
        height: 10vh;
        width: 100%;
        color: rgb(17, 6, 25);
        background-color: rgba(17, 6, 25, 0.95);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(20px);
        z-index: 4;
    }

    & ul {
        display: flex;
        list-style: none;
        gap: 2rem;
        align-items: center;

        @media (max-width: 768px) {
            flex-grow: 1;
            gap: 0;
            padding: 0 2.5vw;
        }

        & li {

            @media (max-width: 768px) {
                flex-basis: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
            }
            & a {
                text-decoration: none;
                font-size: 0.875rem;
                font-weight: 600;
                display: flex;
                align-items: center;

                @media (max-width: 768px) {
                    flex-direction: column;
                    gap: 5px;
                }

                & span:first-of-type {
                    font-family: "Roboto Mono", monospace;
                    color: var(--purple);
                    margin-right: 3px;

                    @media(max-width: 768px) {
                        display: none;
                    }
                }

                & span:last-of-type {
                    color: var(--gray);
                    transition: all 250ms ease-in-out;

                    @media(max-width: 768px) {
                        order: 2;
                    }
                }

                &:hover span:last-of-type {
                    color: var(--purple);
                }

                & svg {
                    display: none;

                    @media (max-width: 768px) {
                        font-size: 1.25rem;
                        color: var(--purple);
                        display: block;
                        order: 1;
                    }
                }
            }
        }
    }

}


@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes reduceHeaderSize {
  to {
    height: 15vh;
    justify-content: space-between;
  }
}

@keyframes moveLogoLeft {
  to {
    width: 2rem;
    height: 3rem;
    left: 4vw;
    transform: translate(0%, -50%);
  }
}

@keyframes showNav {
  to {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
}

`