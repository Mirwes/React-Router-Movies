import React from 'react';
import Movie from './Movie';
import { Link } from "react-router-dom";

const MovieList = props => {
  // console.log('props from MovieLis----------------', props);
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to="/movies/">
        <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
      <Movie movie={MovieList} />
    </div>
    
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
