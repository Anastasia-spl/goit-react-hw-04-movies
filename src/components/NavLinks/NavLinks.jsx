import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';

const NavLinks = ({ children, match, route }) => {
  return (
    <NavLink
      to={`${match.url}${route}`}
      className={styles.addInfoLink}
      activeClassName={styles.addInfoLink__active}
    >
      {children}
    </NavLink>
  );
};

export default NavLinks;
