import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import variables from '../../variables';

const useStyles = createUseStyles({
  link: {
    textDecoration: 'none',
    color: `${variables.mainColor}`,
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:visited': {
      color: 'green',
    },
  },
});

const MoviesList = ({ movies, locationState }) => {
  const classes = useStyles();
  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link
              className={classes.link}
              to={{
                pathname: `/movies/${id}`,
                state: locationState,
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

export default MoviesList;
