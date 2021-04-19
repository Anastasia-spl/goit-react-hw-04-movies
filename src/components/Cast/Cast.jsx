import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import variables from '../../variables';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${variables.ApiKey}`,
    );

    this.setState({ cast: response.data.cast });
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
