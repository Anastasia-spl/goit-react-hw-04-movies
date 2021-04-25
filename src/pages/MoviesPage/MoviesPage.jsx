import { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../moviesApi';
import queryString from 'query-string';
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList';

class MoviesPage extends Component {
  state = {
    query: '',
    requestedMovies: null,
    error: null,
  };

  componentDidMount() {
    const { search } = this.props.location;
    const parsedPrevSearch = queryString.parse(search);
    const prevQuery = parsedPrevSearch.query;
    this.setState({ query: prevQuery });
    if (prevQuery) {
      moviesApi
        .requestedMoviesFetch(prevQuery)
        .then(moviesArray => this.setState({ requestedMovies: moviesArray }))
        .catch(error => this.setState({ error }));
    }
  }

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { history } = this.props;

    query &&
      moviesApi
        .requestedMoviesFetch(query)
        .then(moviesArray => this.setState({ requestedMovies: moviesArray }))
        .catch(error => this.setState({ error }));

    history.push({
      search: `?query=${query}`,
    });

    this.setState({ query: '' });
  };

  render() {
    const { query, requestedMovies } = this.state;
    return (
      <>
        <SearchForm
          query={query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        {requestedMovies && (
          <MoviesList
            movies={requestedMovies}
            locationState={{
              from: this.props.location,
              query: query,
              requestedMovies: requestedMovies,
            }}
          />
        )}
      </>
    );
  }
}

MoviesPage.propTypes = {
  query: PropTypes.string,
  requestedMovies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesPage;
