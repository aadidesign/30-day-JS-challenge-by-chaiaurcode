import React from 'react';

const MovieList = ({ movies, onMovieSelect }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div key={movie.id} className="movie-item">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>Release Date: {movie.release_date}</p>
                    <button onClick={() => onMovieSelect(movie.id)}>More Info</button>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
