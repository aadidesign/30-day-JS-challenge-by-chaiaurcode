import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/api';

const MovieDetails = ({ movieId, onClose }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            const data = await fetchMovieDetails(movieId);
            setMovie(data);
        };

        getMovieDetails();
    }, [movieId]);

    if (!movie) return null;

    return (
        <div className="movie-details">
            <button onClick={onClose}>Close</button>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Director: {/* Add director details here */}</p>
            <p>Actors: {/* Add actor details here */}</p>
        </div>
    );
};

export default MovieDetails;
