import React from 'react';
import {FaFacebookF, FaInstagram, FaGithub} from 'react-icons/fa';

import { SideLinksStyled } from './SideLinks.styled';
// import styles from './SideLinks.module.css';

const SideLinks = () => {
  return (
    <SideLinksStyled id='sidelinks-section'>
      <div className='side left-side'>
      <div className='links'>
        <a href="https://github.com/kosserin/" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/andrijakostic_/" target="_blank"><FaInstagram /></a>
        <a href="https://www.facebook.com/andrijakole.kostic.52/" target="_blank"><FaFacebookF /></a>
      </div>
        <div className='line'></div>
      </div>
      <div className='side right-side'>
      <div className='links'>
      <a href="mailto: kostic.andrija00@gmail.com">kostic.andrija00@gmail.com</a>
      </div>
        <div className='line'></div>
      </div>
      </SideLinksStyled>
  )
}

export default SideLinks