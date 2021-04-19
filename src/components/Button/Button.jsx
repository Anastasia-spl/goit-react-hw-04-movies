import { createUseStyles } from 'react-jss';
import variables from '../../variables';
const useStyles = createUseStyles({
  Button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
    height: 30,
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'white',
    backgroundColor: `${variables.mainColor}`,
    padding: '10px 15px',
    border: `1px solid ${variables.mainColor}`,
    borderRadius: '5px',
    letterSpacing: '0.03em',
    transition: 'scale 250ms ease-in-out',

    '&:hover, &:focus': {
      transform: 'scale(1.1)',
    },
  },
});

const Button = ({ children, type, onClick }) => {
  const classes = useStyles();
  return (
    <button type={type} className={classes.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
