import { Component, lazy } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import moviesApi from '../../moviesApi';
import NavLinks from '../../components/NavLinks';
import Button from '../../components/Button';
import MovieDetailsCard from '../../components/MovieDetailsCard';
import Loader from '../../components/Loader';

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
    moviesApi
      .movieDetailsFetch(movieId)
      .then(movieData =>
        this.setState({
          locationState: location?.state?.from,
          movieData,
        }),
      )
      .catch(error => this.setState({ error }));
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
            <div>
              <h2>Additional information</h2>
              <NavLinks match={match} route={'/reviews'}>
                Reviews
              </NavLinks>
              <NavLinks match={match} route={'/credits'}>
                Cast
              </NavLinks>

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
