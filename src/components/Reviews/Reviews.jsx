import { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../moviesApi';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    moviesApi
      .reviewsFetch(movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }));
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
