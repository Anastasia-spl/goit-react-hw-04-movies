import { Component, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import variables from '../../variables';
import Button from '../../components/Button';
import MovieDetailsCard from '../../components/MovieDetailsCard';
import Loader from '../../components/Loader';
import styles from './MovieDetailPage.module.scss';

const Reviews = lazy(() =>
  import(
    '../../components/Reviews' /* webpackChunkName: "Reviews-component" */
  ),
);
const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "Cast-component" */),
);

class MovieDetailsPage extends Component {
  state = {
    movieData: null,
    locationState: null,
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { location } = this.props;
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${variables.ApiKey}`,
      )
      .catch(error => this.setState({ error }));

    this.setState({
      locationState: location?.state?.from,
      movieData: response.data,
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push(this.state?.locationState || '/');
  };

  render() {
    const { movieData } = this.state;
    const { match } = this.props;
    return (
      <>
        <Button type="button" onClick={this.handleGoBack}>
          Go back
        </Button>

        {movieData ? (
          <>
            <MovieDetailsCard movieData={movieData} />
            <div className={styles.addInfoWrapper}>
              <h2 className={styles.addInfoTitle}>Additional information</h2>
              <NavLink
                to={`${match.url}/reviews`}
                className={styles.addInfoLink}
                activeClassName={styles.addInfoLink__active}
              >
                Reviews
              </NavLink>
              <NavLink
                to={`${match.url}/credits`}
                className={styles.addInfoLink}
                activeClassName={styles.addInfoLink__active}
              >
                Cast
              </NavLink>
              <Route path={`${match.path}/reviews`} component={Reviews} />
              <Route path={`${match.path}/credits`} component={Cast} />
            </div>
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  movieData: PropTypes.object,
  locationState: PropTypes.string,
};

export default MovieDetailsPage;
