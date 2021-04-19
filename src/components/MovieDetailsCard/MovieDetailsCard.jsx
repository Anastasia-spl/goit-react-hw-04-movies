import PropTypes from 'prop-types';
import styles from './MovieDetailsCard.module.scss';

const MovieDetailsCard = ({
  movieData: { title, genres, overview, popularity, release_date, poster_path },
}) => {
  return (
    <div className={styles.movieWrapper}>
      <div>
        <img
          className={styles.movieImg}
          src={`http://image.tmdb.org/t/p/w300//${poster_path}`}
          alt={title}
        />
      </div>
      <div className={styles.movieContentWrapper}>
        <h1>
          {title}
          <span className={styles.releaseDate}>
            ({release_date.split('-')[0]})
          </span>
        </h1>
        <h2 className={styles.descrTitle}>Overview:</h2>
        <p>{overview}</p>
        <h2 className={styles.descrTitle}>Popularity:</h2>
        <span>{Math.round(popularity)}</span>
        <h2 className={styles.descrTitle}>Genres:</h2>
        <ul>
          {genres.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieDetailsCard.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  release_date: PropTypes.number,
  poster_path: PropTypes.string,
};

export default MovieDetailsCard;
