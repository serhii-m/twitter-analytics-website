import theme from './theme';

const introStyles = {
  root: {
    display: 'flex',
    marginBottom: '1.25rem',
    padding: '2.375rem 1.875rem 2.25rem 2.75rem',
    maxHeight: '10.5rem',
    border: '0.125rem solid #013220',
    borderRadius: '1.25rem',
    [theme.breakpoints.down('lg')]: {
      alignItems: 'center',
      padding: '1rem',
    },
  },
  logo: {
    margin: '0 6.375rem 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '0 3rem 0 0',
      '& img': {
        width: 316,
        height: 60,
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  introText: {
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      fontWeight: 600,
      textAlign: 'center',
    },
  },
};

export default introStyles;