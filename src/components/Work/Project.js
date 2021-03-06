import React from 'react';
import {FaGithub} from '../../../node_modules/react-icons/fa';
// import styles from './Project.module.css';
import { ProjectStyled } from './Project.styled';

const Project = (props) => {
  return (
    <ProjectStyled>
    <div id={'project' + props.id} className='project fade-in'>
     <div className='project-image'>
         <a title='link to preview or github repository' href={props.previewLink ? props.previewLink : props.githubLink} target="_blank" rel="noreferrer"><img src={props.image} alt={props.title} /></a>
         <div className='image-overlay'></div>
     </div>
     <div className='project-text'>
      <a title='link to github repository' href={props.githubLink ? props.githubLink : props.previewLink} className='background-link' target="_blank" rel="noreferrer"><img src={props.image} alt={props.title} /></a>
        <h3>Featured Project</h3>
        <a title='link to preview or to github repository' href={props.previewLink ? props.previewLink : props.githubLink} target="_blank" rel="noreferrer"><h2>{props.title}</h2></a>
        <p>{props.desc}</p>
        <ul className='technologies'>
            {props.technologiesUsed.map((t, index) => <li key={'technologyUsed' + index} >{t}</li>)}
        </ul>
        <div className='links'>
            {props.githubLink !== null && <a title='link to github repository' href={props.githubLink} target="_blank" rel="noreferrer"><FaGithub /></a>}
            {props.previewLink !== null && <a title='link to preview' href={props.previewLink} target="_blank" rel="noreferrer">
            <svg className='svg' fill="#c7b9d1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM502.6 9.367C496.8 3.578 488.8 0 480 0h-160c-17.67 0-31.1 14.32-31.1 31.1c0 17.67 14.32 31.1 31.99 31.1h82.75L178.7 290.7c-12.5 12.5-12.5 32.76 0 45.26C191.2 348.5 211.5 348.5 224 336l224-226.8V192c0 17.67 14.33 31.1 31.1 31.1S512 209.7 512 192V31.1C512 23.16 508.4 15.16 502.6 9.367z"/></svg></a>}
            {props.button !== null && <a title='link to button to learn more about project' href={props.button} target="_blank" rel="noreferrer"><span>Learn More</span></a>}
        </div>
     </div>
    </div>
    </ProjectStyled>
  )
}

export default Project