import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = "bad3f777e7df0ee5e923cebd13a08cda";
export const fetchMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
};

export const fetchMoviesById = async quizId => {
    const response = await axios.get(`/movie/${quizId}?api_key=${API_KEY}`);
    return response.data;
};

export const fetchMoviesByIdCast = async (quizId, controller) => {
    const response = await axios.get(`/movie/${quizId}/credits?api_key=${API_KEY}`, {
        signal: controller.signal,
    });
    return response.data;
};

export const fetchMoviesByIdReviews = async (quizId, controller) => {
    const response = await axios.get(`/movie/${quizId}/reviews?api_key=${API_KEY}`, {
        signal: controller.signal,
    });
    return response.data;
};

export const fetchMoviesBySearch = async search => {
    const response = await axios.get(`/search/movie?query=${search}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`);
    return response.data;
};
