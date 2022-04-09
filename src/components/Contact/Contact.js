import React from 'react';

// import styles from './Contact.module.css';
import { ContactStyles } from './Contact.styled';

const Contact = () => {
  return (
    <ContactStyles id='contact-section' className='contact fade-in'>
        <h3>04. What's Next?</h3>
        <h1>Get In Touch</h1>
        <p>I'm looking for new opportunities to sharp my skills, so my inbox is always open. Whether you would like to hire me or just want to say hi, I will respond as soon as possible!</p>
        <a title='link to email' className='button' href="mailto: kostic.andrija00@gmail.com">Say Hello 👋</a>
    </ContactStyles>
  )
}

export default Contact