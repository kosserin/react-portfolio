import React from 'react';
import {FaFolder, FaGithub} from '../../../node_modules/react-icons/fa';
// import styles from './OtherProjectItem.module.css';
import { OtherProjectItemStyled } from './OtherProjectItem.styled';

const OtherProjectItem = (props) => {
  return (
    <OtherProjectItemStyled className='other-project__item'>
    <a href={props.previewLink ? props.previewLink : props.githubLink} target="_blank" id={'other-project' + props.id} className='background-link'></a>
    <div className='other-project'>
    <FaFolder />
    <div className='links'>
      {props.githubLink && <a href={props.githubLink} target="_blank"><FaGithub /></a>}
      {props.previewLink && <a href={props.previewLink} target="_blank"><svg className='svg' fill="#c7b9d1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM502.6 9.367C496.8 3.578 488.8 0 480 0h-160c-17.67 0-31.1 14.32-31.1 31.1c0 17.67 14.32 31.1 31.99 31.1h82.75L178.7 290.7c-12.5 12.5-12.5 32.76 0 45.26C191.2 348.5 211.5 348.5 224 336l224-226.8V192c0 17.67 14.33 31.1 31.1 31.1S512 209.7 512 192V31.1C512 23.16 508.4 15.16 502.6 9.367z"/></svg></a>}
    </div>
    <a href={props.previewLink ? props.previewLink : props.githubLink} target="_blank"><h3>{props.title}</h3></a>
    <p>{props.desc}</p>
    <div className='technologies'>
      {props.technologiesUsed.map((t, index) => <span key={'technology' + index}>{t}</span>)}
    </div>
    </div>
    </OtherProjectItemStyled>
  )
}

export default OtherProjectItem