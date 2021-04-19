import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Section: {
    padding: '20px 0',
  },
});

const Section = ({ children }) => {
  const classes = useStyles();
  return <section className={classes.Section}>{children}</section>;
};

export default Section;
