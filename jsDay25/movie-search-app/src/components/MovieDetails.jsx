import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fetchMovieDetails } from '../services/movieService';
import styles from './MovieDetails.module.css';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const MovieDetails = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await fetchMovieDetails(movieId);
      setMovieDetails(details);
    };
    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <motion.div className={styles.modalOverlay} initial="hidden" animate="visible" exit="hidden" variants={modalVariants}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>{movieDetails.title}</h2>
        <p className={styles.tagline}>{movieDetails.tagline}</p>
        <p className={styles.overview}>{movieDetails.overview}</p>
        <p className={styles.releaseDate}>Release Date: {movieDetails.release_date}</p>
        <p className={styles.rating}>Rating: {movieDetails.vote_average} / 10</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className={styles.poster}
        />
      </div>
    </motion.div>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MovieDetails;
