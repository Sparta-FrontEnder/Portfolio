import Carousel from 'react-bootstrap/Carousel';

import About from './About';
import About2 from './About2';
import About3 from './About3';
import "./css/Carousel.css"

function CarouselFade() {
    return (
      <Carousel fade id='about-section'>
        <Carousel.Item>
            <About/>
        </Carousel.Item>
        <Carousel.Item>
            <About2/>
        </Carousel.Item>
        <Carousel.Item>
            <About3/>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default CarouselFade;