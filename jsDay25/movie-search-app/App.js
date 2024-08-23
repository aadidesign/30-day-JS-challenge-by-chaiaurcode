import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { fetchMovies } from './services/api';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const handleSearch = async (query) => {
        const results = await fetchMovies(query);
        setMovies(results);
    };

    const handleMovieSelect = (id) => {
        setSelectedMovieId(id);
    };

    const handleCloseDetails = () => {
        setSelectedMovieId(null);
    };

    return (
        <div className="container">
            <h1>Movie Search App</h1>
            <SearchBar onSearch={handleSearch} />
            <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
            {selectedMovieId && <MovieDetails movieId={selectedMovieId} onClose={handleCloseDetails} />}
        </div>
    );
};

export default App;
