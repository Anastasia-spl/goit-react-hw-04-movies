import axios from 'axios';
import variables from './variables';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  
const requestedMoviesFetch  = async query => {
    return await axios
      .get(
        `/search/movie?api_key=${variables.ApiKey}&query=${query}`,
      ).then(response => response.data.results)
};
  
const movieDetailsFetch = async (movieId) => {
  return await axios
      .get(
        `/movie/${movieId}?api_key=${variables.ApiKey}`,
      ).then(response => response.data)
}
  
const popularMovieFetch = async () => {
 return await axios.get(
      `/trending/movie/day?api_key=${variables.ApiKey}`,
    ).then(response => response.data.results);
}

const castFetch = async (movieId) => {
  return await axios.get(
      `/movie/${movieId}/credits?api_key=${variables.ApiKey}`).then(response => response.data.cast);
}

const reviewsFetch = async (movieId) => {
  return await axios.get(
      `/movie/${movieId}/reviews?api_key=${variables.ApiKey}`,
    ).then(response => response.data.results);
}

export default {requestedMoviesFetch, movieDetailsFetch, popularMovieFetch, castFetch, reviewsFetch}