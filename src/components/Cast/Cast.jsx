import { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../moviesApi';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    moviesApi
      .castFetch(movieId)
      .then(cast => this.setState({ cast }))
      .catch(error => this.setState({ error }));
  }

  componentDidUpdate() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.map(({ id, profile_path, character, name }) => (
          <li key={id}>
            <p>{name}</p>
            <p>Character: {character}</p>
            <img
              src={`http://image.tmdb.org/t/p/w185//${profile_path}`}
              alt={name}
            />
          </li>
        ))}
      </ul>
    );
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
};

export default Cast;
