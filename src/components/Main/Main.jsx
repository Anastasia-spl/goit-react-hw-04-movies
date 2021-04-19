import { createUseStyles } from 'react-jss';
import variables from '../../variables';

const useStyles = createUseStyles({
  Main: {
    paddingTop: variables.headerHeight,
  },
});

const Main = ({ children }) => {
  const classes = useStyles();
  return <main className={classes.Main}>{children}</main>;
};

export default Main;
