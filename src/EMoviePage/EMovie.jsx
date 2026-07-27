import React, { useState, useEffect } from 'react'
import SearchIcon from '../images/search.svg'
import MovieCard from './MovieCard';
import "./css/EMvoie.css"
const API_URL = 'http://www.omdbapi.com?apikey=a354f87a';

const EMovie = () => {
    const[movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Lawrence of Arabia');
  }, []);

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      searchMovies(searchTerm);
    }
  };
  return(
    <div className="eMovie-app">
      <h1>EMovie</h1>

      <div className="eMovie-search">
        <input
          placeholder="search for movies"
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='eMovie-container'> 
            { movies.map((movie) => (
              <MovieCard key= {movie.imdbID} movie={movie}/>
            ))}
          </div>
        )
        : (
          <div className='Empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default EMovie
