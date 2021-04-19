import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import variables from '../../variables';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${variables.ApiKey}`,
    );
    this.setState({ reviews: response.data.results });
  }

  componentDidUpdate() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </ul>
      </>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
