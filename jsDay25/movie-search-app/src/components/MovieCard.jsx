import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie, onMoreInfo }) => {
  return (
    <div className={styles.movieCard}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.poster} />
      <h3 className={styles.title}>{movie.title}</h3>
      <p className={styles.releaseDate}>{movie.release_date}</p>
      <button onClick={() => onMoreInfo(movie.id)} className={styles.moreInfoButton}>
        More Info
      </button>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMoreInfo: PropTypes.func.isRequired,
};

export default MovieCard;
