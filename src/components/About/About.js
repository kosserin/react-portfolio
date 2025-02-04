import React from 'react';
import myPhoto from '../../assets/my_image.jpg';
// import styles from './About.module.css';
import { AboutStyled } from './About.styled';
import resume from '../../assets/Andrija_Kostic_Resume.pdf';

const About = () => {
  return (
    <AboutStyled id='about-section' className='about-section'>
        <h2>
        <span>01.</span>
        <span>About me</span> 
        <div className='line slide-in'></div>
        </h2>
    <div className='about-container'>
    <div className='about-text fade-in'>
        <p>Hello! My name is Andrija and I enjoy creating websites that live on the internet.
         My journey with web development started two years ago when I was looking for profession I would love to do.</p>
        <br /><p>Fast-forward to today, I'm in my final year of college, doing freelance for local entrepreneurs and started
         a career on Upwork. My main focus these days is learning as much
          as I can, constantly improving my code and making websites with great performances that are enjoyable for users to go
           through. Shortened version about me you can find in my <a title='my resume' href={resume} target="_blank" rel="noreferrer" download={resume}>Resume</a>.</p>
        <br /><p>Here are a few technologies I've been working with recently:</p>
        <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML, CSS</li>
            <li>Sass</li>
            <li>Bootstrap</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Figma</li>
            <li>styled-components</li>
            <li>jQuery</li>
            <li>Swiper</li>
        </ul>
    </div>
    <div className='about-image'>
        <div className='border'></div>
        <img src={myPhoto} alt="" />
        <div className='color-overlay'></div>
    </div>
    </div>
    </AboutStyled>
  )
}

export default About