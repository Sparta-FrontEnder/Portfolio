import React from 'react'
import profilImg from "../images/MaxPro.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons'; 
import "./css/About.css"
import { faComputer,  } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div className='about-container'>
        <img className='about-img' src={profilImg} alt="profile-img" />
        <div className='dsec-container'>
            <h1>About Me</h1>
            
            <p>My name is Jian Ma. For the past three and a half years, 
                I have been working as a back-end engineer. 
                My last job was as a back-end engineer in the Apple Online Store team at <FontAwesomeIcon icon={faApple} size="1x" color="#000" />. 
                During my recent period of unemployment, 
                I took a moment to reassess my career and plan for my future.
                I discovered that I have a strong passion for front-end work. 
                If you were to ask me how I realized my love for front-end development,
                I would say that if a person can sit in front of their <FontAwesomeIcon icon={faComputer} /> for 12 hours, 
                losing track of time, forgetting to eat, feeling tired, and still looking forward to doing it again the next day, 
                7 days a week and 4 weeks a month, that must be love. 
                Although I have just begun this journey, I am confident 
                that I can become an excellent front-end engineer and dedicate my life to it.</p>
        </div>
    </div>
  )
}

export default About
