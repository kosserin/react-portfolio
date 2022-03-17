import React from 'react';
import {FaGithub, FaInstagram, FaFacebookF} from '../../../node_modules/react-icons/fa';

// import styles from './Copyright.module.css';
import { CopyrightStyled } from './Copyright.styled';

const Copyright = () => {
  return (
    <CopyrightStyled id='footer-section'>
      <div className='links fade-in'>
        <a href="https://github.com/kosserin/" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/andrijakostic_/" target="_blank"><FaInstagram /></a>
        <a href="https://www.facebook.com/andrijakole.kostic.52/" target="_blank"><FaFacebookF /></a>
      </div>
      <a className='fade-in' href="https://github.com/kosserin/" target="_blank">© Andrija Kostic 2022</a>
      <p className='fade-in'>Made with React</p>
    </CopyrightStyled>
  )
}

export default Copyright