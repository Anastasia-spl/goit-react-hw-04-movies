import axios from 'axios';
import variables from './variables';

const requestedMoviesFetch  = async query => {
    return await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${variables.ApiKey}&query=${query}`,
      ).then(response => response.data.results)
};
  
const movieDetailsFetch = async (movieId) => {
  return await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${variables.ApiKey}`,
      ).then(response => response.data)
}
  
const popularMovieFetch = async () => {
 return await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${variables.ApiKey}`,
    ).then(response => response.data.results);
}

export default {requestedMoviesFetch, movieDetailsFetch, popularMovieFetch}