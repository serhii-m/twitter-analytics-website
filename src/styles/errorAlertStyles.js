import theme from './theme';

const errorAlertStyles = {
  position: 'absolute',
  top: '1rem',
  borderRadius: '1.25rem',
  zIndex: '1000',
  [theme.breakpoints.down('sm')]: {
    '& h2': {
      fontSize: '1.25rem',
    },
  },
};

export default errorAlertStyles;