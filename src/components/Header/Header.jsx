import { createUseStyles } from 'react-jss';
import variables from '../../variables';

const useStyles = createUseStyles({
  Header: {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    minHeight: variables.headerHeight,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: `1px solid ${variables.mainColor}`,
    filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))',
  },
});

const Header = ({ children }) => {
  const classes = useStyles();
  return <header className={classes.Header}>{children}</header>;
};

export default Header;
