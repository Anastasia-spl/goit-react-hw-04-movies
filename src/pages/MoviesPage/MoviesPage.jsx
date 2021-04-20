import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import queryString from 'query-string';
import variables from '../../variables';
import Button from '../../components/Button';
import MoviesList from '../../components/MoviesList';
import styles from './MoviesPage.module.scss';

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
      this.makeRequest(prevQuery);
    }
  }

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { history } = this.props;

    query && this.makeRequest(query);

    history.push({
      search: `?query=${query}`,
    });

    this.setState({ query: '' });
  };

  makeRequest = async query => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${variables.ApiKey}&query=${query}`,
      )
      .catch(error => this.setState({ error }));
    const moviesArray = response.data.results;
    this.setState({ requestedMovies: moviesArray });
  };

  render() {
    const { query, requestedMovies } = this.state;
    return (
      <>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.searchInput}
            type="text"
            onChange={this.handleChange}
            value={query}
          />
          <Button type="submit">Search</Button>
        </form>
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
