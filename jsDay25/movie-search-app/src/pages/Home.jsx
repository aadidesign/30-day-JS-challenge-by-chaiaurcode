import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import { fetchMovies } from '../services/movieService';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    const result = await fetchMovies(query);
    setMovies(result);
    setLoading(false);
  };

  const handleMoreInfo = (movieId) => {
    setSelectedMovie(movieId);
  };

  const closeDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <MovieList movies={movies} onMoreInfo={handleMoreInfo} />}
      {selectedMovie && <MovieDetails movieId={selectedMovie} onClose={closeDetails} />}
    </div>
  );
};

export default Home;
