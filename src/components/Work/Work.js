import React from 'react';
import Project from './Project';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';

// import styles from './Work.module.css';
import { WorkStyled } from './Work.styled';

const DUMMY_PROJECTS = [
  {
    id: 'p1',
    title: 'Football School Website',
    desc: 'Website for local football school. Project is designed with Figma and coded with HTML-Sass-JavaScript. Honorable mentions are sliders that are implemented with Swiper.js and intersectionObserver that gives smooth slide/fade transition on load.',
    technologiesUsed: ['JavaScript', 'Sass', 'Swiper', 'Figma'],
    githubLink: "https://github.com/kosserin/sfdespot",
    previewLink: "https://sfdespot.com/",
    button: null,
    image: p1
  },
  {
    id: 'p2',
    title: 'XD to HTML',
    desc: 'This project was part of work I did freelancing on Upwork. My job was to convert XD design into code adding functionality to buttons, making it responsive and clean.',
    technologiesUsed: ['JavaScript', 'CSS', 'Swiper', 'XD to HTML'],
    githubLink: "https://github.com/kosserin/project",
    previewLink: null,
    button: null,
    image: p2
  },
  {
    id: 'p3',
    title: 'React Food Ordering App',
    desc: 'Meal items are fetched on load from firebase and user can choose how much he wants to order. After confirming amount and meals, new modal with basic validation is shown and if user enters everything successfully, selected meals will be sent to firebase.',
    technologiesUsed: ['React', 'Firebase', 'CSS Modules'],
    githubLink: 'https://github.com/kosserin/react-food-order-state/',
    previewLink: 'https://kosserin.github.io/react-food-order-state/',
    button: null,
    image: p3
  },
]

const Work = () => {
  return (
    <WorkStyled id='work-section' className='work-section'>
      <h2>
        <span className='fade-in'>02.</span>
        <span className='fade-in'>Some Things I've Built</span> 
        <div className='line slide-in'></div>
      </h2>
      <ul className='projects'>
        {DUMMY_PROJECTS.map(p => <Project key={p.id} id={p.id} title={p.title} desc={p.desc} technologiesUsed={p.technologiesUsed} githubLink={p.githubLink} previewLink={p.previewLink} button={p.button} image={p.image} />)}
      </ul>
    </WorkStyled>
  )
}

export default Work