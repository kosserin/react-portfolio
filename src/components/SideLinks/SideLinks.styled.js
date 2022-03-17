import styled from "styled-components";

export const SideLinksStyled = styled.section`

.side {
  position: fixed;
  bottom: 0;
  top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(100%);
  animation: showSideLinks 1s ease-in forwards;
  animation-delay: 1.5s;
  
  @media (max-width: 768px) {
    display: none;
  }

  &.left-side {
    left: 4vw;
    
    @media (max-width: 768px) {
        left: 3vw;
    }
  }
  
  &.right-side {
    right: 4vw;
      
    @media (max-width: 768px) {
        right: 3vw;
    }

    & .links {
        transform: rotate(90deg);
        position: fixed;

        & a {
            font-size: 0.875rem;
            margin-right: 280px;
            letter-spacing: 1px;

            &:hover {
                transform: translateX(-3px);
        }
      }
    }
  }

  & .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;

    & a {
        text-decoration: none;
        color: var(--white);
        font-size: 1.25rem;
        transition: all 250ms ease-in;

        &:hover {
            transform: translateY(-3px);
            color: var(--purple);
      }
    }
  }

  .line {
    width: 1px;
    height: 100px;
    background-color: var(--white);
  }
}


@keyframes showSideLinks {
  to {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transform: translateY(0);
  }
}

`