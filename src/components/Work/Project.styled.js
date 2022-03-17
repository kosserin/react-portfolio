import styled from "styled-components";

export const ProjectStyled = styled.li`

width: 100%;
position: relative;

&:nth-child(even) .project-image {
    top: 0;
    right: 0;
} 

& .project-image {
    position: absolute;
    width: 40vw;
    overflow: hidden;
    border-radius: 3px;

  
@media (max-width: 980px) {
        display: none;
}

& img {
    width: 100%;
    min-height: 250px;
    border-radius: 3px;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.4);
}

& .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: rgba(20, 0, 20, 0.7);
    border-radius: 3px;
    pointer-events: none;
    transition: all 250ms ease-out;
}

&:hover .image-overlay {
    opacity: 0;
    visibility: hidden;
}
}

& .project-text {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: right;
    width: 600px;
    margin: 0 0 0 auto;
    text-decoration: none;
    min-height: 250px;

@media (max-width: 980px) {
        pointer-events: all;
        width: 100%;
        align-items: flex-start;
        border-radius: 3px;
        padding: 2rem;
}

& a {
    text-decoration: none;

    & h2 {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1rem;
        margin-top: 5px;
        transition: all 250ms ease-out;

        &:hover {
            color: var(--purple);
        }

        @media(max-width: 980px) {
            margin-bottom: 1rem;
        }
}
}

& p {
    padding: 1rem;
    background-color: rgba(20, 0, 20, 1);
    border-radius: 3px;
    margin: 5px 0;
    font-size: 0.875rem;
    line-height: 22px;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.4);

  @media(max-width: 980px) {
        text-align: left;
        background-color: transparent;
        box-shadow: none;
        padding: 0;
        margin-bottom: 1.5rem;
        max-width: 100%;
        width: 500px;
  }
}

.background-link{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    border-radius: 3px;
    opacity: 1;
    z-index: -1;
    pointer-events: none;

    & img{
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;

        @media(max-width: 980px) {
            opacity: .08;
            visibility: visible;
            pointer-events: all;
        }
    }
}
}

&:nth-child(even) .project-text {
    align-items: flex-start;
    text-align: left;
    margin: 0;
}

& .technologies {
    display: flex;
    gap: 1rem;
    color: var(--gray);
    list-style: none;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 5px;
}

& .links {
    display: flex;
    gap: 1rem;
    align-items: center;

    & a {
        text-decoration: none;
        color: var(--white);
        margin-top: 1rem;
        font-size: 1.5rem;
        transition: 250ms ease-out;
        pointer-events: all;

        &:hover {
            color: var(--purple);
        }

        & .svg {
            width: 1.5rem;
            transition: 250ms ease-out;
        }

        &:hover .svg {
            fill: var(--purple);
        }
        & span {
            font-size: 0.875rem;
            display: flex;
            color: rgb(199, 185, 209);
            border-radius: 3px;
            padding: 0.7rem 1.5rem;
            background: rgba(0, 0, 0, 0.5);
            font-weight: 500;
            transition: all 250ms ease-out;

            &:hover {
                background: rgba(199, 185, 209, 1);
                color: rgba(0, 0, 0, 1);
            }
        }
    }
}

`