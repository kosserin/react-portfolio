import React from 'react';
import {FaMobile, FaCode, FaUser} from '../../../node_modules/react-icons/fa';

// import styles from './Header.module.css';
import { HeaderStyled } from './Header.styled';

const Header = () => {

  return (
    <HeaderStyled id="header-section">
    <a title='logo' href="/" onClick={(e) => e.preventDefault()}><svg id="loading" width="80" height="129" viewBox="0 0 80 129" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='path' d="M2.5 121L44 8.5L75 121L22.5 74.5L75 34" stroke="#E7DEEE" strokeWidth="5"/>
        </svg></a>
    <nav>
        <ul>
            <li><a title='link to about section' href="#about-section"><span>01.</span><span>About</span><FaUser /></a></li>
            <li><a title='link to work section' href="#work-section"><span>02.</span><span>Work</span><FaCode /></a></li>
            <li><a title='link to contact section' href="#contact-section"><span>03.</span><span>Contact</span><FaMobile /></a></li>
        </ul>
    </nav>
    </HeaderStyled>
  )
}

export default Header