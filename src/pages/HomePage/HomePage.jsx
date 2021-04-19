import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import variables from '../../variables';
import Container from '../../components/Container';
import MoviesList from '../../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: null,
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${variables.ApiKey}`,
    );
    const moviesArray = response.data.results;
    this.setState({ movies: moviesArray });
  }

  render() {
    const { movies } = this.state;
    return (
      <Container>
        <h1>Trending today</h1>
        {movies && (
          <MoviesList
            movies={movies}
            locationState={{
              from: this.props.location,
            }}
          />
        )}
      </Container>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default HomePage;
