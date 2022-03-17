import React from 'react';

// import styles from './Introduce.module.css';
import { IntroduceStyled } from './Introduce.styled';

const Introduce = () => {
  return (
    <IntroduceStyled id='introduce-section'>
    <h3><span>👋</span> Hi, my name is</h3>
    <h1>Andrija Kostic.</h1>
    <h1>I build amazing web things.</h1>
    <p>I'm a dedicated front-end developer who loves what he does, is responsible for tasks he gets and pushes his limits to meet client's requirements. I deliver top quality websites with readable and reusable code that is easy to go through.</p>
    {/* <p>I'm a frontend developer from Serbia who specializes in building (and ocasionally designing) brilliant websites. 
    Currently, I'm a student on Faculty of Engineering Sciences doing freelance in spare time.</p> */}
    <a href="mailto: kostic.andrija00@gmail.com">Get In Touch</a>
    </IntroduceStyled>
  )
}

export default Introduce