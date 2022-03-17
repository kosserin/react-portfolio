import React, {useState} from 'react';
import OtherProjectItem from './OtherProjectItem';
import { OtherProjectsStyled } from './OtherProjects.styled';
// import styles from './OtherProjects.module.css';

const DUMMY_OTHER_PROJECTS = [
    {
        id: 'o1',
        title: 'React Ordering App',
        desc: 'React project for ordering meals. Meal items are fetched from firebase database, and user can select meal he wants and amount of them.',
        technologiesUsed: ['React', 'Firebase'],
        githubLink: 'https://github.com/kosserin/react-food-order-state',
        previewLink: 'https://kosserin.github.io/react-food-order-state/'
    },
    {
        id: 'o2',
        title: 'CIT website',
        desc: 'Project I did for Information Technology Center, University of Kragujevac. This project includes design which I made in Figma.',
        technologiesUsed: ['JavaScript', 'Sass', 'Figma'],
        githubLink: 'https://github.com/kosserin/cit',
        previewLink: 'https://kosserin.github.io/cit/'
    },
    {
        id: 'o3',
        title: 'Servis Struja website',
        desc: 'lorem ipsum amet dolorem akir sako dorem ti. Akino gari tau sa po trk smore kuo vace des.',
        technologiesUsed: ['JavaScript', 'Sass', 'Figma'],
        githubLink: 'https://github.com/kosserin/struja-servis',
        previewLink: 'https://kosserin.github.io/struja-servis/'
    },
    {
        id: 'o4',
        title: 'React Auth App',
        desc: 'Web application connected to firebase database and authentication. User can sign in, sign up, logout and change password.',
        technologiesUsed: ['React', 'Redux', 'Router', 'Firebase'],
        githubLink: 'https://github.com/kosserin/react-auth-app',
        previewLink: 'https://kosserin.github.io/react-auth-app/'
    },
    {
        id: 'o5',
        title: 'React Quotes Router',
        desc: 'Web app displaying quotes that are fetched from firebase realtime database, with button for ascending/descending order.',
        technologiesUsed: ['React', 'Redux', 'Router'],
        githubLink: 'https://github.com/kosserin/react-quotes-router',
        previewLink: 'https://kosserin.github.io/react-quotes-router/'
    },
    {
        id: 'o6',
        title: 'Monstercat Audio Player',
        desc: 'Project includes custom audio player that plays song you choose from album shown ',
        technologiesUsed: ['JavaScript', 'Sass', 'Frontend Practice'],
        githubLink: 'https://github.com/kosserin/monstercat-audio-player',
        previewLink: 'https://kosserin.github.io/monstercat-audio-player/'
    },
    {
        id: 'o7',
        title: 'Red Square Agency',
        desc: 'Webpage with some nice animations, scroll effects, blurring background on hover and responsive.',
        technologiesUsed: ['JavaScript', 'Sass', 'Frontend Practice'],
        githubLink: 'https://github.com/kosserin/red-square',
        previewLink: 'https://kosserin.github.io/red-square/'
    },
    {
        id: 'o8',
        title: 'Backstage Scroll',
        desc: 'Challenge website from frontendpractice.com. In this challenge point was on fixed header and footer, smooth scroll transitions and scroll snap.',
        technologiesUsed: ['JavaScript', 'Sass', 'Frontend Practice'],
        githubLink: 'https://github.com/kosserin/backstage-scroll',
        previewLink: 'https://kosserin.github.io/backstage-scroll/'
    },
    {
        id: 'o9',
        title: 'About | Canal Street Market',
        desc: 'Project from frontendpractice.com to make about page of Canal Street Market.',
        technologiesUsed: ['JavaScript', 'Sass', 'Frontend Practice'],
        githubLink: 'https://github.com/kosserin/canal-about',
        previewLink: 'https://kosserin.github.io/canal-about/'
    },
    {
        id: 'o10',
        title: 'Deplace Maison',
        desc: 'Project that shows website with cool animations and transitions.',
        technologiesUsed: ['JavaScript', 'Sass', 'Frontend Practice'],
        githubLink: 'https://github.com/kosserin/deplace-maison',
        previewLink: 'https://kosserin.github.io/deplace-maison/'
    },
    {
        id: 'o11',
        title: 'Nintendo Game',
        desc: "This is final project of frontend practice that contains functional navbar, carousel, slider, hover animations, great responsiveness, have a look, it's live.",
        technologiesUsed: ['JavaScript', 'Sass', 'Frontend Practice'],
        githubLink: 'https://github.com/kosserin/nintendo-game',
        previewLink: 'https://kosserin.github.io/nintendo-game/'
    },
]

const OtherProjects = () => {

    const [isClicked, setIsClicked] = useState(false);
    let slicedProjects = DUMMY_OTHER_PROJECTS.slice(0, 6).map(p => <OtherProjectItem key={p.id} id={p.id} title={p.title} desc={p.desc} technologiesUsed={p.technologiesUsed} githubLink={p.githubLink} previewLink={p.previewLink} />)
    let content = slicedProjects;
    
    const showMoreHandler = () => {
        setIsClicked(prevState => {
            return !prevState
        })
    }

        if(isClicked) {
            content = DUMMY_OTHER_PROJECTS.map(p => <OtherProjectItem key={p.id} id={p.id} title={p.title} desc={p.desc} technologiesUsed={p.technologiesUsed} githubLink={p.githubLink} previewLink={p.previewLink} />)
        }

  return (
      <OtherProjectsStyled id='other-projects-section' className='other-projects fade-in'>
    <h2>Other Noteworthy Projects</h2>
    <a href="https://github.com/kosserin/" target="_blank">view the github</a>
        <div>
            {content}
        </div>
    <button className='button' onClick={showMoreHandler}>{isClicked ? 'Show Less' : 'Show More' }</button>
    </OtherProjectsStyled>
  )
}

export default OtherProjects