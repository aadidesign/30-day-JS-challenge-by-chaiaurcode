// src/components/MovieList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css'; // Using CSS modules for styling

const MovieList = ({ movies, onMoreInfo }) => {
  return (
    <div className={styles.movieList}>
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onMoreInfo={onMoreInfo} />
        ))
      ) : (
        <p className={styles.noMovies}>No movies found.</p>
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onMoreInfo: PropTypes.func.isRequired,
};

export default MovieList;
