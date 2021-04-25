import { Component } from 'react';
import moviesApi from '../../moviesApi';
import PropTypes from 'prop-types';

import Container from '../../components/Container';
import MoviesList from '../../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: null,
    error: null,
  };

  async componentDidMount() {
    moviesApi
      .popularMovieFetch()
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }));
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
