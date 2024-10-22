import React from 'react'
import em from '../../images/EMovie.jpg'
const EMovie = () => {
  return (
    <div>
        <h1>EMovie Project</h1>
        <img src={em} alt="EMovie-pic" />
        <div className='exp-container'>
            <h3>Experience Description:</h3>
            <p>EMovie is my first attempt at creating a website using React. The content structure of the website is relatively simple, implementing movie searches. The main purpose of this project is to learn about two common hooks in React: UseState and UseEffect. Additionally, I aim to familiarize myself with event handling and how to utilize the characteristics of React components to structure the project. The project uses the IMDB API to query the movie list in real-time based on the movie name.</p>
        </div>
        
    </div>
  )
}

export default EMovie
