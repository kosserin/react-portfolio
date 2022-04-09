import styled from "styled-components";

export const IntroduceStyled = styled.section`

width: 100%;
padding: 0 15vw;
margin-top: 5rem;
margin-bottom: 10rem;
opacity: 0;
visibility: hidden;
pointer-events: none;
transform: translateY(-20px);
animation: showIntroduce 0.5s ease-out forwards;
animation-delay: 2.5s;

@media (max-width: 768px) {
  margin-top: 2rem;
  padding: 0 10vw;
  margin-bottom: 5rem;
}

& h3 {
  display: flex;
  & span {
    animation: wave .5s ease-out forwards;
    display: flex;
    margin-right: 5px;
    animation-delay: 3s;
  }
}

& h1 {
  margin: 0.5rem 0;
}

& h1:last-of-type{
    color: var(--gray);
}

& p {
  width: 600px;
  max-width: 100%;
  line-height: 25px;
  margin: 1rem 0 2rem 0;

  @media(max-width: 768px) {
    margin-top: 1rem;
  }
}

& a {
  margin: 0 auto 0 0;
}


@keyframes showIntroduce {
  to {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transform: translateY(0);
  }
}

`