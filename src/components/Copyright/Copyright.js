import React from 'react';
import {FaGithub, FaInstagram, FaFacebookF} from '../../../node_modules/react-icons/fa';

// import styles from './Copyright.module.css';
import { CopyrightStyled } from './Copyright.styled';

const Copyright = () => {
  return (
    <CopyrightStyled id='footer-section'>
      <div className='links fade-in'>
        <a title='link to github account' href="https://github.com/kosserin/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a title='link to instagram account' href="https://www.instagram.com/andrijakostic_/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a title='link to facebook account' href="https://www.facebook.com/andrijakole.kostic.52/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
      </div>
      <a title='link to github account' className='fade-in' href="https://github.com/kosserin/" target="_blank" rel="noreferrer">© Andrija Kostic 2022</a>
      <p className='fade-in'>Made with React</p>
    </CopyrightStyled>
  )
}

export default Copyright