import axios from 'axios';

const API_KEY = 'your_api_key'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            query: query,
        },
    });
    return response.data.results;
};

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data;
};
