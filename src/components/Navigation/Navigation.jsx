import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import { pagesRoutes } from '../../routes';
import variables from '../../variables';

const useStyles = createUseStyles({
  nav: {
    width: '100vw',
  },
  NavLink: {
    display: 'inline-block',
    minWidth: 80,
    height: 40,
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: `${variables.mainColor}`,
    fontWeight: 700,
    padding: '10px 15px',
    border: `1px solid ${variables.mainColor}`,
    borderRadius: '5px',
    letterSpacing: '0.03em',
    transition: 'all 250ms ease-in-out',

    '&:not(:last-of-type)': {
      marginRight: 15,
    },
    '&:hover, &:focus': {
      color: 'white',
      backgroundColor: `${variables.mainColor}`,
    },
  },
  NavLink__active: {
    color: 'white',
    backgroundColor: `${variables.mainColor}`,
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      {pagesRoutes.map(({ label, path }) => {
        if (label) {
          return (
            <NavLink
              key={path}
              to={path}
              className={classes.NavLink}
              activeClassName={classes.NavLink__active}
              exact
            >
              {label}
            </NavLink>
          );
        }
      })}
    </nav>
  );
};

export default Navigation;
