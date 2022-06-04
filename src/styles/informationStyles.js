import theme from './theme';

const informationStyles = {
  root: {
    padding: '2.9375rem 4.125rem 3rem 3rem',
    border: '0.125rem solid #013220',
    borderRadius: '1.25rem',
    [theme.breakpoints.down('md')]: {
      padding: '1rem',
      '& h5, p': {
        fontSize: '1.25rem',
      },
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: '2rem',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    marginBottom: '1.5rem',
  },
  handles: {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    margin: 0,
  },
};

export default informationStyles;