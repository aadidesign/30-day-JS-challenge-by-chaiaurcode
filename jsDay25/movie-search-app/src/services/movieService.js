// src/services/movieService.js
const API_KEY = '2e23bb43ffaeea0c52c86b4222573ba3'; 
const API_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch movies: ", error);
    return []; // Return an empty array on error to handle it gracefully in the UI
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie details: ", error);
    return null; // Return null to signify that the details could not be fetched
  }
};
