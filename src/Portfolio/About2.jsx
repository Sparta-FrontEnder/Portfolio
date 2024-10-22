import React from 'react'
import cash from "../images/cash.jpg"
import "./css/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHouse, faPizzaSlice, faBurger, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
const About2 = () => {
  return (
    <div className='about-container'>
    <img className='about-img' src={cash} alt="cash-img" />
    <div className='dsec-container'>
        <h1>About My Dog</h1>
        <p>Cash is my girlfriend's dog, 
            and she brought him over from California <FontAwesomeIcon icon={faPlane} />. 
            On the night of our first <FontAwesomeIcon icon={faChampagneGlasses} /> date, when I went to pick her up, 
            Cash dashed out of the house and immediately jumped up onto my car window.
            From that moment on, our story began. 
            He is a five-year-old Siberian Husky, full of energy, 
            and we need to walk him three times a day. 
            But he is very well-behaved, especially at <FontAwesomeIcon icon={faHouse} /> home—I’ve hardly ever heard him bark inside the house. 
            Cash is quite picky with his food; he doesn’t like fruits or vegetables, 
            but he absolutely loves <FontAwesomeIcon icon={faPizzaSlice} /> and <FontAwesomeIcon icon={faBurger} />, the more cheese, the better. 
            He’s now a part of my life, and I’m very grateful for both him and my girlfriend. 
            Their companionship makes me feel the warmth of home, even in a foreign country.</p>
        {/* <p>Cash is My Dog</p> */}
    </div>
</div>
  )
}


export default About2
