import React from 'react'
import "./css/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faMountainCity, faMicrochip } from '@fortawesome/free-solid-svg-icons';
const cityImg = "https://plus.unsplash.com/premium_photo-1697730030250-e89c608af43c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const About3 = () => {
  return (
    <div className='about-container'>
        <img className='about-img' src={cityImg} alt="profile-img" />
        <div className='dsec-container'>
            <h1>Austin, TX</h1>
            
            <p>Like most young people, 
              we came to Austin due to the rapid rise of high-tech <FontAwesomeIcon icon={faMicrochip} /> companies here. 
              Many companies have opened offices in Austin, 
              attracting tech professionals from all over the country. 
              Austin isn’t a particularly large city, 
              but it is clean and tidy, 
              with <FontAwesomeIcon icon={faMountainCity} /> mountains to the west and vast plains stretching north and south. 
              The summers here are long, and the city offers barbecue, <FontAwesomeIcon icon={faIcons} /> music festivals, 
              and a unique lifestyle that belongs to Texans. Time flies, 
              and it's hard to believe that I’ve been living here for two and a half years. 
              I’ve gone from initially resisting the move to now loving life here. 
              In Austin, your neighbors are friendly, the portions of food are generous, 
              the summers are long, and life is peaceful yet full of warmth.</p>
        </div>
    </div>
  )
}

export default About3
